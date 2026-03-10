"use client";

import { useState } from "react";
import { Scenario } from "@/types";

interface FeedbackScreenProps {
  scenario: Scenario;
  selectedAnswer: number;
  onFlagGuess: () => void;
  onNext: () => void;
  onFlag: (reason: "wrong_answer" | "unclear" | "outdated" | "other", comment?: string) => void;
  isLastScenario: boolean;
}

export default function FeedbackScreen({
  scenario,
  selectedAnswer,
  onFlagGuess,
  onNext,
  onFlag,
  isLastScenario,
}: FeedbackScreenProps) {
  const correct = selectedAnswer === scenario.correct;
  const accentColor = correct ? "#2E7D32" : "#C62828";
  const [guessMarked, setGuessMarked] = useState(false);
  const [showFlagMenu, setShowFlagMenu] = useState(false);
  const [flagSent, setFlagSent] = useState(false);

  const handleGuess = () => {
    onFlagGuess();
    setGuessMarked(true);
  };

  const handleFlag = (reason: "wrong_answer" | "unclear" | "outdated" | "other") => {
    onFlag(reason);
    setFlagSent(true);
    setShowFlagMenu(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="mx-auto max-w-[520px] px-5 py-4">
        <div className="pt-6">
          {/* Result badge */}
          <div className="mb-5 flex items-center justify-between">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2"
              style={{
                backgroundColor: `${accentColor}12`,
                border: `1px solid ${accentColor}30`,
              }}
            >
              <span className="text-lg">{correct ? "\u2713" : "\u2717"}</span>
              <span
                className="text-sm font-semibold"
                style={{ color: accentColor }}
              >
                {correct ? "Correct!" : "Incorrect"}
              </span>
            </div>

            {/* Flag button */}
            <button
              onClick={() => setShowFlagMenu(!showFlagMenu)}
              disabled={flagSent}
              className="text-xs font-medium"
              style={{ color: flagSent ? "#2E7D32" : "#BDBDBD" }}
            >
              {flagSent ? "\u2713 Reported" : "\u2691 Report"}
            </button>
          </div>

          {/* Flag menu */}
          {showFlagMenu && !flagSent && (
            <div className="mb-4 rounded-xl border border-[#EEEEEE] bg-white p-4 shadow-sm">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[1px] text-[#757575]">
                What&apos;s wrong?
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { key: "wrong_answer" as const, label: "Wrong answer" },
                  { key: "unclear" as const, label: "Unclear question" },
                  { key: "outdated" as const, label: "Outdated rule" },
                  { key: "other" as const, label: "Other issue" },
                ].map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => handleFlag(opt.key)}
                    className="rounded-lg bg-[#F5F5F5] px-4 py-2.5 text-left text-sm font-medium text-[#2D2D2D]"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Scenario recap with answer highlighting */}
          <div className="mb-4 rounded-2xl border border-[#EEEEEE] bg-white px-6 py-5 shadow-sm">
            <p className="mb-4 text-[15px] leading-relaxed text-[#757575]">
              {scenario.text}
            </p>

            {scenario.choices.map((choice, i) => {
              const isCorrect = i === scenario.correct;
              const isSelected = i === selectedAnswer;
              const letter = String.fromCharCode(65 + i);

              let bg = "transparent";
              let borderColor = "transparent";
              if (isCorrect) {
                bg = "#E8F5E9";
                borderColor = "#2E7D32";
              } else if (isSelected && !isCorrect) {
                bg = "#FFEBEE";
                borderColor = "#C62828";
              }

              return (
                <div
                  key={i}
                  className="mb-1.5 flex items-start gap-2.5 rounded-lg px-3 py-2.5 text-sm leading-relaxed"
                  style={{
                    backgroundColor: bg,
                    border: `1.5px solid ${borderColor}`,
                  }}
                >
                  <span
                    className="shrink-0 font-bold"
                    style={{
                      color: isCorrect
                        ? "#2E7D32"
                        : isSelected
                          ? "#C62828"
                          : "#BDBDBD",
                    }}
                  >
                    {letter}.
                  </span>
                  <span
                    style={{
                      color: isCorrect
                        ? "#1B5E20"
                        : isSelected
                          ? "#C62828"
                          : "#757575",
                    }}
                  >
                    {choice}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Explanation */}
          <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white px-6 py-5 shadow-sm">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[1px] text-[#2E7D32]">
              {scenario.rule}
            </div>
            <p className="m-0 text-sm leading-relaxed text-[#2D2D2D]">
              {scenario.explanation}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-2.5">
            {correct && (
              <button
                onClick={handleGuess}
                disabled={guessMarked}
                className="flex-1 rounded-xl border-[1.5px] px-4 py-3.5 text-sm font-medium"
                style={{
                  borderColor: guessMarked ? "#2E7D32" : "#EEEEEE",
                  backgroundColor: guessMarked ? "#E8F5E9" : "#FFFFFF",
                  color: guessMarked ? "#2E7D32" : "#757575",
                }}
              >
                {guessMarked ? "\u2713 Marked as guess" : "I guessed"}
              </button>
            )}
            <button
              onClick={onNext}
              className="flex-[2] appearance-none rounded-xl bg-[#1B5E20] px-4 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_12px_rgba(27,94,32,0.3)] transition-transform active:scale-[0.98]"
            >
              {isLastScenario ? "See Results" : "Next Scenario"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
