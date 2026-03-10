"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { useAuth } from "@/lib/auth";
import ProtectedRoute from "@/components/ProtectedRoute";
import HomeScreen from "@/components/HomeScreen";
import SessionScreen from "@/components/SessionScreen";
import FeedbackScreen from "@/components/FeedbackScreen";
import SummaryScreen from "@/components/SummaryScreen";
import { SCENARIOS } from "@/lib/scenarios";
import { SM2 } from "@/lib/sm2";
import { calculateRulesIQ, getTitle } from "@/lib/scoring";
import { CardState, Scenario, SessionResult } from "@/types";
import {
  loadCardStates,
  loadUserStats,
  saveSessionResults,
  ensureUserDoc,
  flagScenario,
} from "@/lib/firestore";
import * as analytics from "@/lib/analytics";

type Screen = "home" | "session" | "feedback" | "summary";

function GameContent() {
  const { user, signOut } = useAuth();

  // Game state
  const [screen, setScreen] = useState<Screen>("home");
  const [cardStates, setCardStates] = useState<Record<string, CardState>>(
    () => {
      const s: Record<string, CardState> = {};
      for (const sc of SCENARIOS) s[sc.id] = SM2.defaults();
      return s;
    }
  );
  const [sessionQueue, setSessionQueue] = useState<Scenario[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [sessionResults, setSessionResults] = useState<SessionResult[]>([]);
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(
    null
  );
  const [streak, setStreak] = useState(0);
  const [lastPlayedDate, setLastPlayedDate] = useState<string | null>(null);
  const [totalSessions, setTotalSessions] = useState(0);
  const [tier, setTier] = useState("all");
  const [sessionLength, setSessionLength] = useState<9 | 18>(9);
  const [firestoreLoaded, setFirestoreLoaded] = useState(false);
  const [generatingAI, setGeneratingAI] = useState(false);

  // Analytics refs
  const changedCardIds = useRef<Set<string>>(new Set());
  const scenarioPresentedAt = useRef<number>(0);
  const feedbackEnteredAt = useRef<number>(0);
  const sessionGuessCount = useRef<number>(0);
  const sessionFlagCount = useRef<number>(0);
  const sessionAICount = useRef<number>(0);
  const rulesIQAtSessionStart = useRef<number>(0);
  const titleAtSessionStart = useRef<string>("");
  const loadStartTime = useRef<number>(Date.now());

  // Load card states from Firestore on mount
  useEffect(() => {
    if (!user) return;

    async function load() {
      const hydrateStart = Date.now();
      try {
        await ensureUserDoc(user!);
        const [savedStates, savedStats] = await Promise.all([
          loadCardStates(user!.uid),
          loadUserStats(user!.uid),
        ]);

        if (Object.keys(savedStates).length > 0) {
          setCardStates((prev) => {
            const merged = { ...prev };
            for (const [id, state] of Object.entries(savedStates)) {
              merged[id] = state;
            }
            return merged;
          });
        }

        if (savedStats) {
          setTotalSessions(savedStats.totalSessions);
          setStreak(savedStats.streak);
          setLastPlayedDate(savedStats.lastPlayedDate);

          // Track return visit
          if (savedStats.lastPlayedDate) {
            const daysSince = Math.floor(
              (Date.now() -
                new Date(savedStats.lastPlayedDate).getTime()) /
                86400000
            );
            const yesterday = new Date(Date.now() - 86400000)
              .toISOString()
              .slice(0, 10);
            analytics.trackReturnVisit({
              days_since_last_visit: daysSince,
              rules_iq: 0, // will be set after scoring
              streak_before: savedStats.streak,
              streak_broken:
                savedStats.lastPlayedDate < yesterday &&
                savedStats.streak > 0,
            });
          }
        }

        // Track app loaded
        analytics.trackAppLoaded({
          load_time_ms: Date.now() - loadStartTime.current,
          firestore_hydration_ms: Date.now() - hydrateStart,
          scenarios_loaded: SCENARIOS.length,
          card_states_loaded: Object.keys(savedStates).length,
          returning_user: Object.keys(savedStates).length > 0,
        });
      } catch (err) {
        console.error("Failed to load from Firestore:", err);
        analytics.trackError({
          error_type: "firestore_load",
          error_message: String(err),
          context: "initial_load",
        });
      } finally {
        setFirestoreLoaded(true);
      }
    }

    load();
  }, [user]);

  // Scoring
  const { rulesIQ, categoryMastery } = useMemo(
    () => calculateRulesIQ(cardStates, SCENARIOS),
    [cardStates]
  );

  // Update user properties whenever score changes
  useEffect(() => {
    if (!firestoreLoaded) return;
    const scenariosSeen = Object.values(cardStates).filter(
      (c) => c.timesSeen > 0
    ).length;
    analytics.setUserProperties({
      rules_iq: rulesIQ,
      title: getTitle(rulesIQ),
      total_sessions: totalSessions,
      streak,
      scenarios_seen: scenariosSeen,
      total_scenarios: SCENARIOS.length,
      coverage_pct: Math.round((scenariosSeen / SCENARIOS.length) * 100),
      group_count: 0, // would need to load from firestore
    });
  }, [rulesIQ, totalSessions, streak, cardStates, firestoreLoaded]);

  // Generate AI scenarios via API
  const generateAIScenarios = async (
    count: number,
    categoryPool: string[],
    tierFilter: string
  ): Promise<Scenario[]> => {
    const generated: Scenario[] = [];
    const tiers =
      tierFilter === "all"
        ? ["weekend", "competitor", "official"]
        : [tierFilter];

    analytics.trackAIGenerationStarted({
      scenarios_requested: count,
      tier: tierFilter,
      categories: categoryPool.join(","),
      reason: "all_curated_seen",
    });

    const genStart = Date.now();

    const promises = Array.from({ length: count }, (_, i) => {
      const category = categoryPool[i % categoryPool.length];
      const t = tiers[Math.floor(Math.random() * tiers.length)];
      return fetch("/api/generate-scenario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, tier: t }),
      })
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => {
          if (data?.scenario) {
            generated.push(data.scenario as Scenario);
          }
        })
        .catch(() => {});
    });

    await Promise.all(promises);

    analytics.trackAIGenerationComplete({
      scenarios_requested: count,
      scenarios_received: generated.length,
      scenarios_failed: count - generated.length,
      duration_ms: Date.now() - genStart,
      avg_latency_ms:
        generated.length > 0
          ? Math.round((Date.now() - genStart) / generated.length)
          : 0,
    });

    return generated;
  };

  // Build session queue
  const startSession = useCallback(async () => {
    const now = Date.now();
    const filteredScenarios =
      tier === "all"
        ? SCENARIOS
        : SCENARIOS.filter((s) => s.tier === tier);

    const due = filteredScenarios
      .filter((s) => {
        const cs = cardStates[s.id];
        return cs.timesSeen > 0 && cs.dueTime <= now;
      })
      .sort((a, b) => cardStates[a.id].dueTime - cardStates[b.id].dueTime);

    const unseen = filteredScenarios
      .filter((s) => cardStates[s.id].timesSeen === 0)
      .sort(() => Math.random() - 0.5);

    const wrong = filteredScenarios.filter((s) => {
      const cs = cardStates[s.id];
      return cs.timesSeen > 0 && cs.interval === 0;
    });

    const wrongCount = Math.min(wrong.length, Math.ceil(sessionLength * 0.25));
    const dueCount = Math.min(due.length, Math.ceil(sessionLength * 0.4));
    const unseenCount = sessionLength - wrongCount - dueCount;
    const actualUnseenCount = Math.min(
      unseen.length,
      Math.max(0, unseenCount)
    );
    const aiSlotsNeeded = Math.max(0, unseenCount) - actualUnseenCount;

    const queue: Scenario[] = [
      ...wrong.slice(0, wrongCount),
      ...due.slice(0, dueCount),
      ...unseen.slice(0, actualUnseenCount),
    ];

    // Generate AI scenarios if we've run out of unseen curated ones
    let aiCount = 0;
    if (aiSlotsNeeded > 0) {
      setGeneratingAI(true);
      setScreen("session");
      try {
        const categories = [
          ...new Set(filteredScenarios.map((s) => s.category)),
        ];
        const aiScenarios = await generateAIScenarios(
          aiSlotsNeeded,
          categories,
          tier
        );
        for (const s of aiScenarios) {
          if (!cardStates[s.id]) {
            setCardStates((prev) => ({
              ...prev,
              [s.id]: SM2.defaults(),
            }));
          }
        }
        queue.push(...aiScenarios);
        aiCount = aiScenarios.length;
      } catch (err) {
        console.error("Failed to generate AI scenarios:", err);
      } finally {
        setGeneratingAI(false);
      }
    }

    // Shuffle
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }

    if (queue.length === 0) {
      const any = filteredScenarios
        .sort(() => Math.random() - 0.5)
        .slice(0, sessionLength);
      setSessionQueue(any);
    } else {
      setSessionQueue(queue);
    }

    // Reset analytics refs
    sessionGuessCount.current = 0;
    sessionFlagCount.current = 0;
    sessionAICount.current = aiCount;
    rulesIQAtSessionStart.current = rulesIQ;
    titleAtSessionStart.current = getTitle(rulesIQ);
    scenarioPresentedAt.current = Date.now();

    changedCardIds.current = new Set();
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setSessionResults([]);
    setSessionStartTime(Date.now());
    setScreen("session");

    // Track session start
    const scenariosSeen = Object.values(cardStates).filter(
      (c) => c.timesSeen > 0
    ).length;

    analytics.trackSessionStart({
      tier,
      session_length: sessionLength,
      queue_wrong_count: wrongCount,
      queue_due_count: dueCount,
      queue_unseen_count: actualUnseenCount,
      queue_ai_count: aiCount,
      queue_total: queue.length,
      total_scenarios_seen: scenariosSeen,
      total_scenarios_available: filteredScenarios.length,
      coverage_pct: Math.round(
        (scenariosSeen / filteredScenarios.length) * 100
      ),
      rules_iq: rulesIQ,
    });

    // First ever session?
    if (totalSessions === 0) {
      analytics.trackFirstEverSession();
    }
  }, [cardStates, tier, sessionLength, rulesIQ, totalSessions]);

  const currentScenario = sessionQueue[currentIndex];

  const handleAnswer = (choiceIndex: number) => {
    if (selectedAnswer !== null || !currentScenario) return;
    setSelectedAnswer(choiceIndex);
    const correct = choiceIndex === currentScenario.correct;
    const now = Date.now();
    const timeToAnswer = (now - scenarioPresentedAt.current) / 1000;

    changedCardIds.current.add(currentScenario.id);

    const cardBefore = cardStates[currentScenario.id];
    const cardAfter = SM2.processAnswer(cardBefore, correct, now);

    setCardStates((prev) => ({
      ...prev,
      [currentScenario.id]: cardAfter,
    }));

    setSessionResults((prev) => [
      ...prev,
      {
        scenarioId: currentScenario.id,
        correct,
        category: currentScenario.category,
      },
    ]);

    // Track scenario answered
    const resultsIncludingThis = [
      ...sessionResults,
      { correct, category: currentScenario.category },
    ];
    const runningAccuracy = Math.round(
      (resultsIncludingThis.filter((r) => r.correct).length /
        resultsIncludingThis.length) *
        100
    );

    analytics.trackScenarioAnswered({
      scenario_id: currentScenario.id,
      category: currentScenario.category,
      tier: currentScenario.tier,
      correct,
      time_to_answer_seconds: Math.round(timeToAnswer * 10) / 10,
      choice_selected: choiceIndex,
      correct_choice: currentScenario.correct,
      choice_position_bias: String.fromCharCode(65 + choiceIndex),
      is_ai_generated: currentScenario.id.startsWith("ai_"),
      is_repeat: cardBefore.timesSeen > 0,
      times_seen_including_this: cardBefore.timesSeen + 1,
      position_in_queue: currentIndex + 1,
      running_session_accuracy_pct: runningAccuracy,
      ease_factor_before: cardBefore.easeFactor,
      ease_factor_after: cardAfter.easeFactor,
      interval_before: cardBefore.interval,
      interval_after: cardAfter.interval,
      rule_cited: currentScenario.rule,
    });

    feedbackEnteredAt.current = Date.now();
    setScreen("feedback");
  };

  const handleNext = () => {
    // Track dwell time on feedback screen
    if (currentScenario) {
      const dwellTime = (Date.now() - feedbackEnteredAt.current) / 1000;
      analytics.trackFeedbackScreenDwell({
        scenario_id: currentScenario.id,
        dwell_time_seconds: Math.round(dwellTime * 10) / 10,
        correct: selectedAnswer === currentScenario.correct,
        category: currentScenario.category,
        read_explanation: dwellTime > 3,
      });
    }

    if (currentIndex + 1 >= sessionQueue.length) {
      const newTotalSessions = totalSessions + 1;
      setTotalSessions(newTotalSessions);

      const today = new Date().toISOString().slice(0, 10);
      let newStreak = streak;
      if (lastPlayedDate !== today) {
        const yesterday = new Date(Date.now() - 86400000)
          .toISOString()
          .slice(0, 10);
        if (lastPlayedDate === yesterday || lastPlayedDate === null) {
          newStreak = streak + 1;
        } else if (lastPlayedDate !== null && lastPlayedDate < yesterday) {
          newStreak = 1;
        }
        setLastPlayedDate(today);
      }
      setStreak(newStreak);

      // Save to Firestore
      if (user) {
        const scenariosSeen = Object.values(cardStates).filter(
          (c) => c.timesSeen > 0
        ).length;
        const title = getTitle(rulesIQ);

        saveSessionResults(
          user.uid,
          cardStates,
          Array.from(changedCardIds.current),
          {
            rulesIQ,
            title,
            totalSessions: newTotalSessions,
            streak: newStreak,
            scenariosSeen,
          }
        ).catch((err) =>
          console.error("Failed to save session results:", err)
        );
      }

      // Track session complete
      const correctCount = sessionResults.filter((r) => r.correct).length;
      const incorrectCount = sessionResults.length - correctCount;
      const duration = sessionStartTime
        ? (Date.now() - sessionStartTime) / 1000
        : 0;
      const categoriesSeen = [
        ...new Set(sessionResults.map((r) => r.category)),
      ];

      // Find weakest/strongest category in this session
      const catAccuracy: Record<string, { correct: number; total: number }> =
        {};
      for (const r of sessionResults) {
        if (!catAccuracy[r.category])
          catAccuracy[r.category] = { correct: 0, total: 0 };
        catAccuracy[r.category].total++;
        if (r.correct) catAccuracy[r.category].correct++;
      }
      const catEntries = Object.entries(catAccuracy);
      const weakest =
        catEntries.length > 0
          ? catEntries.sort(
              (a, b) =>
                a[1].correct / a[1].total - b[1].correct / b[1].total
            )[0][0]
          : "";
      const strongest =
        catEntries.length > 0
          ? catEntries.sort(
              (a, b) =>
                b[1].correct / b[1].total - a[1].correct / a[1].total
            )[0][0]
          : "";

      const titleAfter = getTitle(rulesIQ);
      const isPerfect =
        correctCount === sessionResults.length && sessionResults.length > 0;
      const isZero = incorrectCount === sessionResults.length && sessionResults.length > 0;

      analytics.trackSessionComplete({
        tier,
        session_length: sessionLength,
        scenarios_answered: sessionResults.length,
        correct_count: correctCount,
        incorrect_count: incorrectCount,
        accuracy_pct:
          sessionResults.length > 0
            ? Math.round((correctCount / sessionResults.length) * 100)
            : 0,
        duration_seconds: Math.round(duration),
        avg_time_per_scenario_seconds:
          sessionResults.length > 0
            ? Math.round((duration / sessionResults.length) * 10) / 10
            : 0,
        rules_iq_before: rulesIQAtSessionStart.current,
        rules_iq_after: rulesIQ,
        rules_iq_delta: rulesIQ - rulesIQAtSessionStart.current,
        title_before: titleAtSessionStart.current,
        title_after: titleAfter,
        title_changed: titleAfter !== titleAtSessionStart.current,
        guesses_marked: sessionGuessCount.current,
        flags_submitted: sessionFlagCount.current,
        categories_seen: categoriesSeen.join(","),
        weakest_category: weakest,
        strongest_category: strongest,
        perfect_session: isPerfect,
        zero_session: isZero,
        streak_after: newStreak,
        ai_scenarios_count: sessionAICount.current,
      });

      // Track milestones
      if (isPerfect) {
        analytics.trackPerfectSession({
          tier,
          session_length: sessionLength,
          scenarios_count: sessionResults.length,
          duration_seconds: Math.round(duration),
        });
      }

      if (titleAfter !== titleAtSessionStart.current) {
        analytics.trackTitleChange({
          old_title: titleAtSessionStart.current,
          new_title: titleAfter,
          rules_iq: rulesIQ,
          sessions_played: newTotalSessions,
        });
      }

      // Streak milestones
      if ([3, 7, 14, 30, 100].includes(newStreak)) {
        analytics.trackStreakMilestone({
          streak_days: newStreak,
          rules_iq: rulesIQ,
        });
      }

      // Rules IQ milestones
      for (const milestone of [50, 100, 150, 200]) {
        if (
          rulesIQAtSessionStart.current < milestone &&
          rulesIQ >= milestone
        ) {
          analytics.trackRulesIQMilestone({
            milestone,
            rules_iq: rulesIQ,
            sessions_to_reach: newTotalSessions,
            scenarios_seen: Object.values(cardStates).filter(
              (c) => c.timesSeen > 0
            ).length,
          });
        }
      }

      // Scenario velocity
      if (duration > 0 && sessionResults.length > 0) {
        analytics.trackScenarioVelocity({
          scenarios_per_minute:
            Math.round((sessionResults.length / (duration / 60)) * 10) / 10,
          session_tier: tier,
          session_length: sessionLength,
        });
      }

      setScreen("summary");
    } else {
      setCurrentIndex((p) => p + 1);
      setSelectedAnswer(null);
      scenarioPresentedAt.current = Date.now();
      setScreen("session");
    }
  };

  // Track scenario presented when currentIndex changes
  useEffect(() => {
    if (screen !== "session" || !currentScenario || generatingAI) return;
    scenarioPresentedAt.current = Date.now();

    const cs = cardStates[currentScenario.id];
    analytics.trackScenarioPresented({
      scenario_id: currentScenario.id,
      category: currentScenario.category,
      tier: currentScenario.tier,
      position_in_queue: currentIndex + 1,
      queue_total: sessionQueue.length,
      is_ai_generated: currentScenario.id.startsWith("ai_"),
      is_repeat: cs ? cs.timesSeen > 0 : false,
      times_previously_seen: cs ? cs.timesSeen : 0,
      previous_accuracy_on_this:
        cs && cs.timesSeen > 0
          ? Math.round((cs.timesCorrect / cs.timesSeen) * 100)
          : null,
      ease_factor: cs ? cs.easeFactor : 2.5,
      interval_days: cs ? cs.interval : 0,
    });
  }, [currentIndex, screen, generatingAI]);

  const handleFlagGuess = () => {
    if (!currentScenario) return;
    sessionGuessCount.current++;
    changedCardIds.current.add(currentScenario.id);
    setCardStates((prev) => ({
      ...prev,
      [currentScenario.id]: {
        ...prev[currentScenario.id],
        interval: 1,
        easeFactor: Math.max(
          1.3,
          prev[currentScenario.id].easeFactor - 0.1
        ),
        dueTime: Date.now() + 86400000,
      },
    }));

    analytics.trackGuessMarked({
      scenario_id: currentScenario.id,
      category: currentScenario.category,
      tier: currentScenario.tier,
      time_on_feedback_screen_seconds:
        Math.round(((Date.now() - feedbackEnteredAt.current) / 1000) * 10) /
        10,
    });
  };

  const handleFlag = (
    reason: "wrong_answer" | "unclear" | "outdated" | "other",
    comment?: string
  ) => {
    if (!user || !currentScenario) return;
    sessionFlagCount.current++;
    flagScenario(user.uid, currentScenario.id, reason, comment).catch((err) =>
      console.error("Failed to flag scenario:", err)
    );

    analytics.trackScenarioFlagged({
      scenario_id: currentScenario.id,
      category: currentScenario.category,
      tier: currentScenario.tier,
      flag_reason: reason,
      is_ai_generated: currentScenario.id.startsWith("ai_"),
      was_correct: selectedAnswer === currentScenario.correct,
    });
  };

  const handleTierChange = (newTier: string) => {
    analytics.trackTierChanged({ old_tier: tier, new_tier: newTier });
    setTier(newTier);
  };

  const handleSessionLengthChange = (newLen: 9 | 18) => {
    analytics.trackSessionLengthChanged({
      old_length: sessionLength,
      new_length: newLen,
    });
    setSessionLength(newLen);
  };

  const goHome = () => {
    // Track abandon if mid-session
    if (
      screen === "session" ||
      (screen === "feedback" && currentIndex + 1 < sessionQueue.length)
    ) {
      analytics.trackSessionAbandon({
        tier,
        session_length: sessionLength,
        scenarios_completed: sessionResults.length,
        scenarios_total: sessionQueue.length,
        progress_pct:
          sessionQueue.length > 0
            ? Math.round(
                (sessionResults.length / sessionQueue.length) * 100
              )
            : 0,
        duration_seconds: sessionStartTime
          ? Math.round((Date.now() - sessionStartTime) / 1000)
          : 0,
        last_scenario_category: currentScenario?.category ?? "",
        last_scenario_correct:
          selectedAnswer !== null && currentScenario
            ? selectedAnswer === currentScenario.correct
            : null,
      });
    }
    setScreen("home");
  };

  // Show loading while Firestore hydrates
  if (!firestoreLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-[#EEEEEE] border-t-[#1B5E20]" />
          <p className="text-sm text-[#757575]">Loading your progress...</p>
        </div>
      </div>
    );
  }

  // Render screens
  if (screen === "home") {
    return (
      <HomeScreen
        rulesIQ={rulesIQ}
        categoryMastery={categoryMastery}
        totalSessions={totalSessions}
        streak={streak}
        cardStates={cardStates}
        tier={tier}
        onTierChange={handleTierChange}
        sessionLength={sessionLength}
        onSessionLengthChange={handleSessionLengthChange}
        onStartSession={startSession}
        onSignOut={signOut}
        userName={user?.displayName ?? null}
      />
    );
  }

  if (screen === "session" && generatingAI) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-[#EEEEEE] border-t-[#1B5E20]" />
          <p className="text-sm font-medium text-[#2D2D2D]">
            Generating fresh scenarios...
          </p>
          <p className="mt-1 text-xs text-[#757575]">
            You&apos;ve seen all the curated ones!
          </p>
        </div>
      </div>
    );
  }

  if (screen === "session" && currentScenario) {
    return (
      <SessionScreen
        scenario={currentScenario}
        currentIndex={currentIndex}
        totalCount={sessionQueue.length}
        onAnswer={handleAnswer}
      />
    );
  }

  if (screen === "feedback" && currentScenario && selectedAnswer !== null) {
    return (
      <FeedbackScreen
        scenario={currentScenario}
        selectedAnswer={selectedAnswer}
        onFlagGuess={handleFlagGuess}
        onNext={handleNext}
        onFlag={handleFlag}
        isLastScenario={currentIndex + 1 >= sessionQueue.length}
      />
    );
  }

  if (screen === "summary") {
    return (
      <SummaryScreen
        sessionResults={sessionResults}
        rulesIQ={rulesIQ}
        streak={streak}
        sessionStartTime={sessionStartTime}
        onHome={goHome}
        onPlayAgain={startSession}
      />
    );
  }

  return null;
}

export default function PlayPage() {
  return (
    <ProtectedRoute>
      <GameContent />
    </ProtectedRoute>
  );
}
