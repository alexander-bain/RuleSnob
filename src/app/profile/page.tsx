"use client";

import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getTitle, getTitleColor } from "@/lib/scoring";

interface ProfileStats {
  rulesIQ: number;
  totalScenarios: number;
  totalSessions: number;
  streak: number;
  accuracy: number;
  categoryMastery: Record<string, number>;
}

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-golf-green" />
      </div>
    );
  }

  // Mock stats - in production these would come from Firestore
  const stats: ProfileStats = {
    rulesIQ: 2450,
    totalScenarios: 156,
    totalSessions: 23,
    streak: 8,
    accuracy: 74,
    categoryMastery: {
      FUNDAMENTALS: 85,
      PLAYING_ROUND: 72,
      PLAYING_BALL: 68,
      BUNKERS_GREENS: 79,
      LIFTING_RETURNING: 65,
      FREE_RELIEF: 82,
      PENALTY_RELIEF: 71,
      RESOLVING: 76,
    },
  };

  const title = getTitle(stats.rulesIQ);
  const titleColor = getTitleColor(stats.rulesIQ);

  const achievements = [
    { id: 1, name: "First Steps", description: "Complete your first session" },
    { id: 2, name: "7-Day Streak", description: "Maintain a 7-day streak" },
    { id: 3, name: "Expert", description: "Reach 2000+ Rules IQ" },
    { id: 4, name: "Perfectionist", description: "Get 100% in a session" },
    { id: 5, name: "Prolific", description: "Complete 50 sessions" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-light to-bg-dark">
      <div className="mx-auto max-w-mobile px-5 py-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border pb-4 pt-6">
          <button
            onClick={() => router.back()}
            className="text-sm font-medium text-pencil hover:text-golf-green"
          >
            ← Back
          </button>
          <h1 className="text-lg font-bold text-dark-green">Profile</h1>
          <div className="w-14" />
        </div>

        {/* Profile Header */}
        <div className="my-6 text-center">
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt={user.displayName || "User"}
              className="mx-auto mb-4 h-20 w-20 rounded-full shadow-golf-md"
              referrerPolicy="no-referrer"
            />
          )}
          <h2 className="text-xl font-bold text-pencil">
            {user.displayName || "Golfer"}
          </h2>
          <p className="mt-1 text-sm font-semibold text-golf-green">
            {title}
          </p>
        </div>

        {/* Main Stats Card */}
        <div className="mb-5 rounded-golf-lg border border-border bg-white p-6 shadow-golf-md">
          <div className="mb-6 text-center">
            <div className="text-5xl font-bold text-dark-green">
              {stats.rulesIQ}
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-textMuted">
              Rules IQ Score
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-light-green p-4 text-center">
              <div className="text-2xl font-bold text-golf-green">
                {stats.totalScenarios}
              </div>
              <div className="mt-1 text-xs text-textMuted">Total Scenarios</div>
            </div>
            <div className="rounded-lg bg-light-green p-4 text-center">
              <div className="text-2xl font-bold text-golf-green">
                {stats.totalSessions}
              </div>
              <div className="mt-1 text-xs text-textMuted">Sessions</div>
            </div>
            <div className="rounded-lg bg-light-green p-4 text-center">
              <div className="text-2xl font-bold text-golf-green">
                {stats.streak}
              </div>
              <div className="mt-1 text-xs text-textMuted">Day Streak</div>
            </div>
            <div className="rounded-lg bg-light-green p-4 text-center">
              <div className="text-2xl font-bold text-golf-green">
                {stats.accuracy}%
              </div>
              <div className="mt-1 text-xs text-textMuted">Avg Accuracy</div>
            </div>
          </div>
        </div>

        {/* Mastery by Category */}
        <div className="mb-5 rounded-golf-lg border border-border bg-white p-5 shadow-golf-md">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-textMuted">
            Category Mastery
          </h3>
          <div className="space-y-2">
            {Object.entries(stats.categoryMastery).map(([category, percentage]) => {
              const masteryColor =
                percentage >= 70
                  ? "golf-green"
                  : percentage >= 40
                    ? "golf-orange"
                    : "golf-red";
              return (
                <div key={category} className="flex items-center gap-2">
                  <div className="flex-1">
                    <div className="h-1.5 overflow-hidden rounded-full bg-border">
                      <div
                        className={`h-full rounded-full bg-${masteryColor} transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                  <span className="w-8 text-right text-xs font-semibold text-pencil">
                    {percentage}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="rounded-golf-lg border border-border bg-white p-5 shadow-golf-md">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-textMuted">
            Achievements
          </h3>
          <div className="space-y-2">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center gap-3 rounded-lg bg-light-green p-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-golf-green text-white">
                  ★
                </div>
                <div>
                  <div className="text-sm font-semibold text-pencil">
                    {achievement.name}
                  </div>
                  <div className="text-xs text-textMuted">
                    {achievement.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8" />
      </div>
    </div>
  );
}
