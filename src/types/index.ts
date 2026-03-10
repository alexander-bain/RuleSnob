export type CategoryKey =
  | "FUNDAMENTALS"
  | "PLAYING_ROUND"
  | "PLAYING_BALL"
  | "BUNKERS_GREENS"
  | "LIFTING_RETURNING"
  | "FREE_RELIEF"
  | "PENALTY_RELIEF"
  | "RESOLVING";

export type Tier = "weekend" | "competitor" | "official";

export interface Scenario {
  id: string;
  category: CategoryKey;
  tier: Tier;
  text: string;
  choices: string[];
  correct: number;
  rule: string;
  explanation: string;
}

export interface CategoryInfo {
  name: string;
  rules: string;
  color: string;
}

export interface CardState {
  easeFactor: number;
  interval: number;
  dueTime: number;
  timesSeen: number;
  timesCorrect: number;
  lastSeen: number;
}

export interface SessionResult {
  scenarioId: string;
  correct: boolean;
  category: CategoryKey;
}

export interface UserStats {
  rulesIQ: number;
  title: string;
  totalSessions: number;
  streak: number;
  scenariosSeen: number;
}
