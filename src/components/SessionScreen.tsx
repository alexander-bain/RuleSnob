"use client";

import { Scenario } from "@/types";
import { CATEGORIES } from "@/lib/scenarios";

interface SessionScreenProps {
  scenario: Scenario;
  currentIndex: number;
  totalCount: number;
  onAnswer: (choiceIndex: number) => void;
}

export default function SessionScreen({
  scenario,
  currentIndex,
  totalCount,
  onAnswer,
}: SessionScreenProps) {
  const progress = ((currentIndex + 1) / totalCount) * 100;
  const cat = CATEGORIES[scenario.category];
  const tierLabel =
    scenario.tier === "weekend"
      ? "Weekend"
      : scenario.tier === "competitor"
        ? "Competitor"
        : "Official";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="mx-auto max-w-[520px] px-5 py-4">
        {/* Progress */}
        <div className="mb-6 flex items-center gap-3 pt-4">
          <div className="h-1 flex-1 overflow-hidden rounded-sm bg-[#EEEEEE]">
            <div
              className="h-full rounded-sm bg-[#2E7D32] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="whitespace-nowrap text-[13px] font-medium text-[#757575]">
            {currentIndex + 1}/{totalCount}
          </span>
        </div>

        {/* Category Badge */}
        <div className="mb-4">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: `${cat.color}12`,
              color: cat.color,
              border: `1px solid ${cat.color}30`,
            }}
          >
            {cat.name} &middot; {tierLabel}
          </span>
        </div>

        {/* Scenario */}
        <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white p-6 shadow-sm">
          <p className="m-0 text-[17px] font-normal leading-relaxed text-[#2D2D2D]">
            {scenario.text}
          </p>
        </div>

        {/* Choices */}
        <div className="flex flex-col gap-2.5">
          {scenario.choices.map((choice, i) => {
            const letter = String.fromCharCode(65 + i);
            return (
              <button
                key={i}
                onClick={() => onAnswer(i)}
                className="flex items-start gap-3 rounded-xl border-[1.5px] border-[#EEEEEE] bg-white px-4 py-3.5 text-left text-[15px] leading-relaxed text-[#2D2D2D] transition-all hover:border-[#2E7D32] hover:bg-[#E8F5E9]"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F5F5F5] text-[13px] font-bold text-[#2E7D32]">
                  {letter}
                </span>
                <span className="flex-1">{choice}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
