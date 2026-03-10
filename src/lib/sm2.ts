import { CardState } from "@/types";

export const SM2 = {
  defaults: (): CardState => ({
    easeFactor: 2.5,
    interval: 0,
    dueTime: 0,
    timesSeen: 0,
    timesCorrect: 0,
    lastSeen: 0,
  }),

  processAnswer(card: CardState, correct: boolean, now: number): CardState {
    const updated = { ...card };
    updated.timesSeen += 1;
    updated.lastSeen = now;

    if (correct) {
      updated.timesCorrect += 1;
      if (updated.interval === 0) {
        updated.interval = 1;
      } else if (updated.interval === 1) {
        updated.interval = 6;
      } else {
        updated.interval = Math.round(updated.interval * updated.easeFactor);
      }
      updated.easeFactor = Math.max(1.3, updated.easeFactor + 0.1);
    } else {
      updated.interval = 0;
      updated.easeFactor = Math.max(1.3, updated.easeFactor - 0.2);
    }

    updated.dueTime =
      now + (updated.interval === 0 ? 60000 : updated.interval * 86400000);
    return updated;
  },
};
