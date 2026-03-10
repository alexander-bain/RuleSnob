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
} from "@/lib/firestore";

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
  const [totalSessions, setTotalSessions] = useState(0);
  const [tier, setTier] = useState("all");
  const [firestoreLoaded, setFirestoreLoaded] = useState(false);

  // Track which card IDs changed during session for batch save
  const changedCardIds = useRef<Set<string>>(new Set());

  // Load card states from Firestore on mount
  useEffect(() => {
    if (!user) return;

    async function load() {
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
        }
      } catch (err) {
        console.error("Failed to load from Firestore:", err);
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

  // Build session queue
  const startSession = useCallback(() => {
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

    const queue = [
      ...wrong.slice(0, 3),
      ...due.slice(0, 5),
      ...unseen.slice(0, 5),
    ];

    // Shuffle
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }

    if (queue.length === 0) {
      const any = filteredScenarios
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
      setSessionQueue(any);
    } else {
      setSessionQueue(queue);
    }

    changedCardIds.current = new Set();
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setSessionResults([]);
    setSessionStartTime(Date.now());
    setScreen("session");
  }, [cardStates, tier]);

  const currentScenario = sessionQueue[currentIndex];

  const handleAnswer = (choiceIndex: number) => {
    if (selectedAnswer !== null || !currentScenario) return;
    setSelectedAnswer(choiceIndex);
    const correct = choiceIndex === currentScenario.correct;
    const now = Date.now();

    changedCardIds.current.add(currentScenario.id);

    setCardStates((prev) => ({
      ...prev,
      [currentScenario.id]: SM2.processAnswer(
        prev[currentScenario.id],
        correct,
        now
      ),
    }));

    setSessionResults((prev) => [
      ...prev,
      {
        scenarioId: currentScenario.id,
        correct,
        category: currentScenario.category,
      },
    ]);

    setScreen("feedback");
  };

  const handleNext = () => {
    if (currentIndex + 1 >= sessionQueue.length) {
      const newTotalSessions = totalSessions + 1;
      setTotalSessions(newTotalSessions);

      const correctCount = sessionResults.filter((r) => r.correct).length;
      const newStreak =
        correctCount >= sessionResults.length * 0.5 ? streak + 1 : streak;
      setStreak(newStreak);

      // Save to Firestore at session end
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

      setScreen("summary");
    } else {
      setCurrentIndex((p) => p + 1);
      setSelectedAnswer(null);
      setScreen("session");
    }
  };

  const handleFlagGuess = () => {
    if (!currentScenario) return;
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
  };

  const goHome = () => setScreen("home");

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
        onTierChange={setTier}
        onStartSession={startSession}
        onSignOut={signOut}
        userName={user?.displayName ?? null}
      />
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
