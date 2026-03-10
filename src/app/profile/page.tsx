"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import { loadCardStates, loadUserStats, getUserGroups } from "@/lib/firestore";
import { calculateRulesIQ, getTitle, getTitleColor } from "@/lib/scoring";
import { SCENARIOS, CATEGORIES } from "@/lib/scenarios";
import { SM2 } from "@/lib/sm2";
import { CardState, CategoryKey, GroupDoc } from "@/types";

type GroupWithId = { id: string } & GroupDoc;

function ProfileContent() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [cardStates, setCardStates] = useState<Record<string, CardState>>({});
  const [stats, setStats] = useState<{
    totalSessions: number;
    streak: number;
  }>({ totalSessions: 0, streak: 0 });
  const [groups, setGroups] = useState<GroupWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    async function load() {
      try {
        const [savedStates, savedStats, userGroups] = await Promise.all([
          loadCardStates(user!.uid),
          loadUserStats(user!.uid),
          getUserGroups(user!.uid),
        ]);

        // Merge with defaults
        const merged: Record<string, CardState> = {};
        for (const sc of SCENARIOS) merged[sc.id] = SM2.defaults();
        for (const [id, state] of Object.entries(savedStates)) {
          merged[id] = state;
        }
        setCardStates(merged);

        if (savedStats) {
          setStats({
            totalSessions: savedStats.totalSessions,
            streak: savedStats.streak,
          });
        }
        setGroups(userGroups);
      } catch (err) {
        console.error("Failed to load profile data:", err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [user]);

  const { rulesIQ, categoryMastery } = calculateRulesIQ(cardStates, SCENARIOS);
  const title = getTitle(rulesIQ);
  const titleColor = getTitleColor(rulesIQ);
  const scenariosSeen = Object.values(cardStates).filter(
    (c) => c.timesSeen > 0
  ).length;
  const totalCorrect = Object.values(cardStates).reduce(
    (sum, c) => sum + c.timesCorrect,
    0
  );
  const totalAttempts = Object.values(cardStates).reduce(
    (sum, c) => sum + c.timesSeen,
    0
  );
  const accuracy =
    totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#EEEEEE] border-t-[#1B5E20]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="mx-auto max-w-[520px] px-5 py-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 pt-8">
          <button
            onClick={() => router.push("/play")}
            className="text-sm font-medium text-[#757575] hover:text-[#2D2D2D]"
          >
            &larr; Back
          </button>
          <div className="text-sm font-semibold uppercase tracking-[2px] text-[#2E7D32]">
            Profile
          </div>
          <button
            onClick={signOut}
            className="text-xs font-medium text-[#757575]"
          >
            Sign out
          </button>
        </div>

        {/* Profile Header */}
        <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white p-6 text-center shadow-sm">
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt=""
              className="mx-auto mb-3 h-16 w-16 rounded-full"
              referrerPolicy="no-referrer"
            />
          )}
          <div className="text-lg font-bold text-[#2D2D2D]">
            {user?.displayName || "Golfer"}
          </div>
          <div
            className="mt-1 text-sm font-semibold"
            style={{ color: titleColor }}
          >
            {title}
          </div>
          <div className="mt-3 text-[48px] font-bold leading-none text-[#1B5E20]">
            {rulesIQ}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-[1px] text-[#757575]">
            Rules IQ
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-5 grid grid-cols-2 gap-3">
          {[
            { label: "Scenarios", value: scenariosSeen },
            { label: "Sessions", value: stats.totalSessions },
            { label: "Streak", value: stats.streak },
            { label: "Accuracy", value: `${accuracy}%` },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#EEEEEE] bg-white p-4 text-center shadow-sm"
            >
              <div className="text-xl font-bold text-[#2D2D2D]">
                {stat.value}
              </div>
              <div className="mt-0.5 text-[11px] uppercase tracking-[0.5px] text-[#757575]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Category Mastery */}
        <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white px-6 py-5 shadow-sm">
          <div className="mb-4 text-[13px] font-semibold uppercase tracking-[1px] text-[#757575]">
            Category Mastery
          </div>
          {(
            Object.entries(CATEGORIES) as [
              CategoryKey,
              (typeof CATEGORIES)[CategoryKey],
            ][]
          ).map(([key, cat]) => {
            const mastery = categoryMastery[key] || 0;
            const masteryColor =
              mastery >= 70
                ? "#2E7D32"
                : mastery >= 40
                  ? "#E65100"
                  : mastery > 0
                    ? "#C62828"
                    : "#BDBDBD";
            return (
              <div key={key} className="mb-3">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-[13px] font-medium text-[#2D2D2D]">
                    {cat.name}
                  </span>
                  <span
                    className="text-[13px] font-semibold"
                    style={{ color: masteryColor }}
                  >
                    {mastery > 0 ? `${mastery}%` : "—"}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-[#F5F5F5]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.max(mastery, 2)}%`,
                      backgroundColor: masteryColor,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Groups */}
        <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white px-6 py-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[13px] font-semibold uppercase tracking-[1px] text-[#757575]">
              Groups
            </div>
            <button
              onClick={() => router.push("/leaderboard")}
              className="text-xs font-medium text-[#2E7D32]"
            >
              Manage &rarr;
            </button>
          </div>
          {groups.length > 0 ? (
            <div className="space-y-2">
              {groups.map((group) => (
                <button
                  key={group.id}
                  onClick={() => router.push("/leaderboard")}
                  className="flex w-full items-center justify-between rounded-lg bg-[#F5F5F5] px-4 py-3 text-left"
                >
                  <span className="text-sm font-medium text-[#2D2D2D]">
                    {group.name}
                  </span>
                  <span className="text-xs text-[#757575]">
                    {group.memberUids.length} member
                    {group.memberUids.length !== 1 ? "s" : ""}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-sm text-[#757575]">
              No groups yet.{" "}
              <button
                onClick={() => router.push("/leaderboard")}
                className="font-medium text-[#2E7D32]"
              >
                Create or join one
              </button>
            </div>
          )}
        </div>

        <div className="mb-8" />
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}
