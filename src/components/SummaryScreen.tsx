"use client";

import { SessionResult } from "@/types";
import { CATEGORIES } from "@/lib/scenarios";

interface SummaryScreenProps {
  sessionResults: SessionResult[];
  rulesIQ: number;
  streak: number;
  sessionStartTime: number | null;
  onHome: () => void;
  onPlayAgain: () => void;
}

export default function SummaryScreen({
  sessionResults,
  rulesIQ,
  streak,
  sessionStartTime,
  onHome,
  onPlayAgain,
}: SummaryScreenProps) {
  const correctCount = sessionResults.filter((r) => r.correct).length;
  const totalCount = sessionResults.length;
  const accuracy =
    totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const elapsed = sessionStartTime
    ? Math.round((Date.now() - sessionStartTime) / 60000)
    : 0;

  // Category breakdown
  const catBreakdown: Record<string, { correct: number; total: number }> = {};
  for (const r of sessionResults) {
    if (!catBreakdown[r.category])
      catBreakdown[r.category] = { correct: 0, total: 0 };
    catBreakdown[r.category].total += 1;
    if (r.correct) catBreakdown[r.category].correct += 1;
  }

  // Weak areas
  const weakAreas = Object.entries(catBreakdown)
    .filter(([, d]) => d.correct / d.total < 0.5)
    .map(([cat]) => CATEGORIES[cat as keyof typeof CATEGORIES].name);

  // SVG ring
  const ringColor =
    accuracy >= 70 ? "#2E7D32" : accuracy >= 40 ? "#E65100" : "#C62828";
  const circumference = 2 * Math.PI * 70; // r=70
  const strokeDash = (accuracy / 100) * circumference;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="mx-auto max-w-[520px] px-5 py-4">
        <div className="pt-8 text-center">
          <div className="mb-6 text-sm font-semibold uppercase tracking-[2px] text-[#2E7D32]">
            Session Complete
          </div>

          {/* Score ring */}
          <div className="relative mx-auto mb-6 h-40 w-40">
            <svg width="160" height="160" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="#EEEEEE"
                strokeWidth="8"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke={ringColor}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${strokeDash} ${circumference}`}
                transform="rotate(-90 80 80)"
                className="transition-all duration-800 ease-out"
              />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-4xl font-bold text-[#2D2D2D]">
                {accuracy}%
              </div>
              <div className="text-xs text-[#757575]">
                {correctCount}/{totalCount}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mb-5 flex items-center justify-center gap-6 rounded-xl border border-[#EEEEEE] bg-white p-4 shadow-sm">
            <div>
              <div className="text-xl font-semibold text-[#1B5E20]">
                {rulesIQ}
              </div>
              <div className="text-[11px] uppercase text-[#757575]">
                Rules IQ
              </div>
            </div>
            <div className="h-8 w-px bg-[#EEEEEE]" />
            <div>
              <div className="text-xl font-semibold text-[#2D2D2D]">
                {elapsed}m
              </div>
              <div className="text-[11px] uppercase text-[#757575]">
                Duration
              </div>
            </div>
            <div className="h-8 w-px bg-[#EEEEEE]" />
            <div>
              <div className="text-xl font-semibold text-[#2D2D2D]">
                {streak}
              </div>
              <div className="text-[11px] uppercase text-[#757575]">
                Streak
              </div>
            </div>
          </div>

          {/* Category breakdown */}
          <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white px-6 py-5 text-left shadow-sm">
            <div className="mb-4 text-[13px] font-semibold uppercase tracking-[1px] text-[#757575]">
              This Session
            </div>
            {Object.entries(catBreakdown).map(([cat, data]) => {
              const catInfo =
                CATEGORIES[cat as keyof typeof CATEGORIES];
              const pct = Math.round(
                (data.correct / data.total) * 100
              );
              const pctColor =
                pct >= 70
                  ? "#2E7D32"
                  : pct >= 40
                    ? "#E65100"
                    : "#C62828";
              return (
                <div
                  key={cat}
                  className="flex items-center justify-between border-b border-[#F5F5F5] py-2"
                >
                  <span className="text-sm text-[#2D2D2D]">
                    {catInfo.name}
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: pctColor }}
                  >
                    {data.correct}/{data.total} ({pct}%)
                  </span>
                </div>
              );
            })}
          </div>

          {/* Weak areas callout */}
          {weakAreas.length > 0 && (
            <div className="mb-5 rounded-xl border border-[#FFE0B2] bg-[#FFF3E0] px-5 py-4 text-left">
              <div className="mb-1 text-[13px] font-semibold text-[#E65100]">
                Focus area{weakAreas.length > 1 ? "s" : ""}
              </div>
              <div className="text-sm leading-relaxed text-[#BF360C]">
                Review {weakAreas.join(" and ")} before your next
                session.
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-2.5">
            <button
              onClick={onHome}
              className="flex-1 rounded-xl border-[1.5px] border-[#EEEEEE] bg-white px-4 py-3.5 text-sm font-medium text-[#2D2D2D] transition-colors hover:bg-[#F5F5F5]"
            >
              Home
            </button>
            <button
              onClick={onPlayAgain}
              className="flex-[2] appearance-none rounded-xl bg-[#1B5E20] px-4 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_12px_rgba(27,94,32,0.3)] transition-transform active:scale-[0.98]"
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
