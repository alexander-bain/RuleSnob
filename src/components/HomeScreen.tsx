"use client";

import { CardState, CategoryKey, Scenario } from "@/types";
import { CATEGORIES, SCENARIOS } from "@/lib/scenarios";
import { getTitle, getTitleColor } from "@/lib/scoring";

interface HomeScreenProps {
  rulesIQ: number;
  categoryMastery: Record<string, number>;
  totalSessions: number;
  streak: number;
  cardStates: Record<string, CardState>;
  tier: string;
  onTierChange: (tier: string) => void;
  sessionLength: 9 | 18;
  onSessionLengthChange: (len: 9 | 18) => void;
  onStartSession: () => void;
  onSignOut: () => void;
  userName: string | null;
}

export default function HomeScreen({
  rulesIQ,
  categoryMastery,
  totalSessions,
  streak,
  cardStates,
  tier,
  onTierChange,
  sessionLength,
  onSessionLengthChange,
  onStartSession,
  onSignOut,
  userName,
}: HomeScreenProps) {
  const scenariosSeen = Object.values(cardStates).filter(
    (c) => c.timesSeen > 0
  ).length;
  const title = getTitle(rulesIQ);
  const titleColor = getTitleColor(rulesIQ);

  const filteredScenarios =
    tier === "all"
      ? SCENARIOS
      : SCENARIOS.filter((s) => s.tier === tier);
  const dueCount = filteredScenarios.filter((s) => {
    const cs = cardStates[s.id];
    return (
      cs &&
      cs.timesSeen > 0 &&
      (cs.dueTime <= Date.now() || cs.interval === 0)
    );
  }).length;
  const newCount = filteredScenarios.filter(
    (s) => !cardStates[s.id] || cardStates[s.id].timesSeen === 0
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="mx-auto max-w-[520px] px-5 py-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 pt-8">
          <div className="text-sm font-semibold uppercase tracking-[2px] text-[#2E7D32]">
            RuleSnob
          </div>
          {userName && (
            <button
              onClick={onSignOut}
              className="text-xs font-medium text-[#757575] transition-colors hover:text-[#424242]"
            >
              Sign out
            </button>
          )}
        </div>

        {/* Score Card */}
        <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white p-8 text-center shadow-sm">
          <div
            className="text-[64px] font-bold leading-none"
            style={{ color: "#1B5E20" }}
          >
            {rulesIQ}
          </div>
          <div
            className="mt-2 text-[13px] font-semibold uppercase tracking-[1.5px]"
            style={{ color: titleColor }}
          >
            {title}
          </div>
          <div className="mt-5 flex items-center justify-center gap-8">
            <div>
              <div className="text-[22px] font-semibold text-[#2D2D2D]">
                {scenariosSeen}
              </div>
              <div className="text-[11px] uppercase tracking-[0.5px] text-[#757575]">
                Scenarios
              </div>
            </div>
            <div className="h-8 w-px bg-[#EEEEEE]" />
            <div>
              <div className="text-[22px] font-semibold text-[#2D2D2D]">
                {totalSessions}
              </div>
              <div className="text-[11px] uppercase tracking-[0.5px] text-[#757575]">
                Sessions
              </div>
            </div>
            <div className="h-8 w-px bg-[#EEEEEE]" />
            <div>
              <div className="text-[22px] font-semibold text-[#2D2D2D]">
                {streak}
              </div>
              <div className="text-[11px] uppercase tracking-[0.5px] text-[#757575]">
                Streak
              </div>
            </div>
          </div>
        </div>

        {/* Category Mastery */}
        <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white px-6 py-5 shadow-sm">
          <div className="mb-4 text-[13px] font-semibold uppercase tracking-[1px] text-[#757575]">
            Category Mastery
          </div>
          {(Object.entries(CATEGORIES) as [CategoryKey, (typeof CATEGORIES)[CategoryKey]][]).map(
            ([key, cat]) => {
              const mastery = categoryMastery[key] || 0;
              const masteryColor =
                mastery >= 70
                  ? "#2E7D32"
                  : mastery >= 40
                    ? "#E65100"
                    : mastery > 0
                      ? "#C62828"
                      : "#BDBDBD";
              const barWidth = Math.max(mastery, 2);
              const count = SCENARIOS.filter(
                (s) => s.category === key
              ).length;
              const seen = SCENARIOS.filter(
                (s) =>
                  s.category === key &&
                  cardStates[s.id] &&
                  cardStates[s.id].timesSeen > 0
              ).length;

              return (
                <div key={key} className="mb-3">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-[13px] font-medium text-[#2D2D2D]">
                      {cat.name}
                      <span className="ml-1.5 text-[11px] font-normal text-[#BDBDBD]">
                        Rules {cat.rules}
                      </span>
                    </span>
                    <span
                      className="text-[13px] font-semibold"
                      style={{ color: masteryColor }}
                    >
                      {mastery > 0 ? `${mastery}%` : `${seen}/${count}`}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#F5F5F5]">
                    <div
                      className="h-full rounded-full transition-all duration-400 ease-out"
                      style={{
                        width: `${barWidth}%`,
                        backgroundColor: masteryColor,
                      }}
                    />
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Tier Selector */}
        <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white px-6 py-4 shadow-sm">
          <div className="mb-3 text-[13px] font-semibold uppercase tracking-[1px] text-[#757575]">
            Difficulty
          </div>
          <div className="flex gap-2">
            {[
              { value: "all", label: "All" },
              { value: "weekend", label: "Weekend" },
              { value: "competitor", label: "Competitor" },
              { value: "official", label: "Official" },
            ].map((t) => (
              <button
                key={t.value}
                onClick={() => onTierChange(t.value)}
                className="flex-1 rounded-lg border-[1.5px] px-1 py-2 text-xs font-semibold transition-all"
                style={{
                  borderColor:
                    tier === t.value ? "#1B5E20" : "#EEEEEE",
                  backgroundColor:
                    tier === t.value ? "#E8F5E9" : "#FFFFFF",
                  color: tier === t.value ? "#1B5E20" : "#757575",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Session Length */}
        <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white px-6 py-4 shadow-sm">
          <div className="mb-3 text-[13px] font-semibold uppercase tracking-[1px] text-[#757575]">
            Session Length
          </div>
          <div className="flex gap-2">
            {([9, 18] as const).map((len) => (
              <button
                key={len}
                onClick={() => onSessionLengthChange(len)}
                className="flex-1 rounded-lg border-[1.5px] px-1 py-2 text-xs font-semibold transition-all"
                style={{
                  borderColor:
                    sessionLength === len ? "#1B5E20" : "#EEEEEE",
                  backgroundColor:
                    sessionLength === len ? "#E8F5E9" : "#FFFFFF",
                  color: sessionLength === len ? "#1B5E20" : "#757575",
                }}
              >
                {len} holes
              </button>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStartSession}
          className="w-full appearance-none rounded-xl bg-[#1B5E20] px-4 py-4 text-base font-semibold tracking-[0.5px] text-white shadow-[0_4px_12px_rgba(27,94,32,0.3)] transition-transform active:scale-[0.98]"
        >
          Start {sessionLength === 9 ? "Front 9" : "Full 18"}
        </button>
        <div className="mt-2 text-center text-xs text-[#757575]">
          {dueCount} due for review &middot; {newCount} new scenarios
        </div>
      </div>
    </div>
  );
}
