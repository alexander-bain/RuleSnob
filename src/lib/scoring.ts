import { CardState, CategoryKey, Scenario } from "@/types";
import { CATEGORIES } from "./scenarios";

export function calculateRulesIQ(
  cardStates: Record<string, CardState>,
  scenarios: Scenario[]
): { rulesIQ: number; categoryMastery: Record<string, number> } {
  const catScores: Record<string, number> = {};
  const catCounts: Record<string, number> = {};

  for (const s of scenarios) {
    const state = cardStates[s.id];
    if (!state || state.timesSeen === 0) continue;
    const cat = s.category;
    if (!catScores[cat]) {
      catScores[cat] = 0;
      catCounts[cat] = 0;
    }
    const accuracy = state.timesCorrect / state.timesSeen;
    const easeBonus = Math.min(1, (state.easeFactor - 1.3) / (2.5 - 1.3));
    catScores[cat] += accuracy * 0.7 + easeBonus * 0.3;
    catCounts[cat] += 1;
  }

  let totalScore = 0;
  let totalWeight = 0;
  const categoryMastery: Record<string, number> = {};

  for (const cat of Object.keys(CATEGORIES) as CategoryKey[]) {
    if (catCounts[cat] && catCounts[cat] > 0) {
      const mastery = catScores[cat] / catCounts[cat];
      categoryMastery[cat] = Math.min(100, Math.round(mastery * 100));
      totalScore += mastery * catCounts[cat];
      totalWeight += catCounts[cat];
    } else {
      categoryMastery[cat] = 0;
    }
  }

  const rawIQ = totalWeight > 0 ? (totalScore / totalWeight) * 200 : 0;
  const coverage = Math.min(1, totalWeight / (scenarios.length * 0.5));
  const rulesIQ = Math.round(rawIQ * coverage);

  return { rulesIQ, categoryMastery };
}

export function getTitle(score: number): string {
  if (score >= 161) return "Rules Official";
  if (score >= 121) return "Rules Savant";
  if (score >= 81) return "Club Competitor";
  if (score >= 41) return "Weekend Player";
  return "Rookie";
}

export function getTitleColor(score: number): string {
  if (score >= 161) return "#1B5E20";
  if (score >= 121) return "#2E7D32";
  if (score >= 81) return "#1565C0";
  if (score >= 41) return "#E65100";
  return "#9E9E9E";
}
