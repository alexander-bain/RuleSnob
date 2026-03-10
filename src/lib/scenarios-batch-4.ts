import { Scenario } from "@/types";

export const SCENARIOS_BATCH_4: Scenario[] = [
  // ============================================================
  // RULE 17: PENALTY AREAS (~18 scenarios)
  // ============================================================

  // pr9 — Grounding club in penalty area (weekend)
  {
    id: "pr9",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is in a red penalty area on dry ground. Before playing your shot, can you ground your club behind the ball?",
    choices: [
      "Yes — you may ground your club in a penalty area without penalty",
      "No — grounding your club in a penalty area is a two-stroke penalty",
      "Only if the ball is on dry ground, not in water",
      "Only during a practice swing, not when addressing the ball",
    ],
    correct: 0,
    rule: "Rule 17.1b",
    explanation:
      "Since the 2019 Rules, there is no restriction on grounding your club in a penalty area. You may touch or ground your club in the sand, soil, water, or any surface within a penalty area at any time, including before your stroke.",
    tags: ["penalty-area", "red-stakes", "general-area"],
  },

  // pr10 — Removing loose impediments in penalty area (weekend)
  {
    id: "pr10",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is in a penalty area. There are several fallen leaves around your ball. Can you remove them?",
    choices: [
      "Yes — you may remove loose impediments in a penalty area without penalty",
      "No — you cannot touch or move anything in a penalty area",
      "Yes, but only if they are not touching the ball",
      "Only in a red penalty area, not a yellow one",
    ],
    correct: 0,
    rule: "Rule 17.1b, Rule 15.1a",
    explanation:
      "Under the 2019 Rules, you may remove loose impediments anywhere on the course, including in penalty areas. There is no penalty for doing so. If your ball moves as a result of removing a loose impediment in a penalty area, you incur a one-stroke penalty and must replace the ball.",
    tags: ["penalty-area", "loose-impediment"],
  },

  // pr11 — Ball crosses penalty area but found outside (competitor)
  {
    id: "pr11",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball flies over a red penalty area and lands on the other side in the rough. You can see it clearly outside the penalty area. What is the status of your ball?",
    choices: [
      "The ball is in the general area (the rough) — play it as it lies with no penalty",
      "You must take penalty area relief because the ball crossed the penalty area",
      "You may choose to treat it as in the penalty area since it crossed over it",
      "You must drop at the point where it last crossed the edge of the penalty area",
    ],
    correct: 0,
    rule: "Rule 17.1a",
    explanation:
      "A ball is only in a penalty area when it lies in or touches the penalty area. If the ball crosses over a penalty area but comes to rest outside it, the ball is in whatever area it comes to rest in — in this case the general area. Play it as it lies.",
    tags: ["penalty-area", "red-stakes", "rough", "general-area"],
  },

  // pr12 — Opposite side relief only with Local Rule (official)
  {
    id: "pr12",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "Your ball enters a red penalty area on the right side of the fairway. There is a clear, flat area on the opposite side of the penalty area that is equidistant from the hole. Can you take lateral relief on the opposite side?",
    choices: [
      "No — lateral relief is only available on the side where the ball last crossed the edge, unless a Local Rule permits opposite-side relief",
      "Yes — you may take lateral relief on either side of a red penalty area",
      "Yes, as long as the opposite side is equidistant from the hole",
      "Only if the penalty area is too narrow to drop on the entry side",
    ],
    correct: 0,
    rule: "Rule 17.1d(3)",
    explanation:
      "Under Rule 17.1d(3), lateral relief from a red penalty area must be taken within two club-lengths of where the ball last crossed the edge, not nearer the hole. Opposite-side relief is NOT available unless the Committee has adopted a Local Rule specifically permitting it.",
    tags: [
      "penalty-area",
      "red-stakes",
      "lateral-relief",
      "penalty-area-edge",
      "committee",
    ],
  },

  // pr13 — Where ball last crossed the edge (weekend)
  {
    id: "pr13",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball rolls into a red penalty area. When taking lateral relief, where do you measure the two club-lengths from?",
    choices: [
      "From the estimated point where the ball last crossed the edge of the penalty area",
      "From where the ball came to rest inside the penalty area",
      "From the nearest point on the edge of the penalty area to the hole",
      "From where the ball was when you last played it",
    ],
    correct: 0,
    rule: "Rule 17.1d(3)",
    explanation:
      "When taking lateral relief from a red penalty area, the reference point is the estimated point where your ball last crossed the edge of the penalty area. You drop within two club-lengths of that point, not nearer the hole. It does not matter where the ball ended up inside the penalty area.",
    tags: [
      "penalty-area",
      "red-stakes",
      "lateral-relief",
      "penalty-area-edge",
      "drop",
      "reference-point",
    ],
  },

  // pr14 — Playing from within penalty area, then taking relief (competitor)
  {
    id: "pr14",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is in a yellow penalty area. You attempt to play it but your shot stays in the penalty area. What are your options now?",
    choices: [
      "Play it as it lies, or take penalty relief using the point where the ball last crossed the edge before your ORIGINAL shot into the penalty area as the reference",
      "You must play it as it lies since you already chose to play from the penalty area",
      "Take relief using where the ball now lies as the reference point",
      "Replay the stroke you just made with no additional penalty",
    ],
    correct: 0,
    rule: "Rule 17.2a",
    explanation:
      "If you play from a penalty area and the ball remains in the same penalty area, you can play it as it lies (no penalty), or take penalty relief. Under Rule 17.2a, you have the additional option of taking relief based on where the ball last crossed the edge before your most recent stroke from outside the penalty area — adding one penalty stroke. You may also use stroke-and-distance based on where you last played from outside the penalty area.",
    tags: [
      "penalty-area",
      "yellow-stakes",
      "relief",
      "penalty",
      "stroke-and-distance",
    ],
  },

  // pr15 — Provisional ball and penalty areas (competitor)
  {
    id: "pr15",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You hit your tee shot toward a red penalty area. You are not sure if the ball went in the penalty area or is lost in the trees beyond it. Can you play a provisional ball?",
    choices: [
      "You can only play a provisional for the possibility it is lost in the trees — not for the possibility it is in the penalty area",
      "Yes — you can play a provisional ball whenever you are unsure where your ball is",
      "No — you cannot play a provisional if a penalty area is involved",
      "Yes, but only if you announce it is provisional for both possibilities",
    ],
    correct: 0,
    rule: "Rule 18.3a",
    explanation:
      "A provisional ball may only be played when the ball might be lost outside a penalty area or might be out of bounds. You cannot play a provisional for a ball that may be in a penalty area. However, if you believe the ball might also be lost beyond the penalty area, you can play a provisional for that specific possibility.",
    tags: [
      "penalty-area",
      "red-stakes",
      "provisional",
      "lost-ball",
    ],
  },

  // pr16 — Back-on-the-line relief from yellow PA (weekend)
  {
    id: "pr16",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball goes into a yellow penalty area. You choose back-on-the-line relief. How far back from the penalty area can you go?",
    choices: [
      "As far back as you like, on the line from the hole through where the ball last crossed the edge",
      "A maximum of two club-lengths behind the crossing point",
      "No more than 50 yards behind the penalty area",
      "Only as far back as the nearest fairway",
    ],
    correct: 0,
    rule: "Rule 17.1d(2)",
    explanation:
      "When taking back-on-the-line relief from a penalty area, you may go as far back as you like on the line from the hole through the point where the ball last crossed the edge of the penalty area. There is no maximum distance. You drop on that line (the ball must come to rest within one club-length of where it first hits the ground, not nearer the hole).",
    tags: [
      "penalty-area",
      "yellow-stakes",
      "back-on-the-line",
      "drop",
      "relief",
    ],
  },

  // pr17 — Ball in PA but playable on dry ground, no free relief (weekend)
  {
    id: "pr17",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball rolled into a penalty area but is sitting on perfectly dry, flat grass with an easy shot to the green. Are there any special restrictions when playing from the penalty area?",
    choices: [
      "No special restrictions — you may play it just as you would from anywhere else on the course",
      "You cannot take a practice swing that touches the ground",
      "You must play within 30 seconds to avoid delaying play",
      "You cannot remove loose impediments before your stroke",
    ],
    correct: 0,
    rule: "Rule 17.1b",
    explanation:
      "Under the 2019 Rules, there are essentially no special restrictions when playing from a penalty area. You may ground your club, take practice swings that touch the ground, remove loose impediments, and move movable obstructions — just as you would in the general area.",
    tags: ["penalty-area", "general-area"],
  },

  // pr18 — Stroke-and-distance from PA: going back to tee (weekend)
  {
    id: "pr18",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your approach shot on a par 4 goes into a yellow penalty area fronting the green. You decide to take stroke-and-distance relief. Where do you play from?",
    choices: [
      "From where you played your previous stroke (the fairway), adding one penalty stroke",
      "From the tee, since that is where you started the hole",
      "From anywhere between where you played and the penalty area",
      "From within two club-lengths of the penalty area edge",
    ],
    correct: 0,
    rule: "Rule 17.1d(1)",
    explanation:
      "Stroke-and-distance relief means you go back to where you last played the stroke that sent the ball into the penalty area and play from there, adding one penalty stroke. If you played your approach from the fairway, that is where you drop (or place, if the previous stroke was from the teeing area or putting green).",
    tags: [
      "penalty-area",
      "yellow-stakes",
      "stroke-and-distance",
      "fairway",
      "drop",
    ],
  },

  // pr20 — Red vs yellow: key difference (weekend)
  {
    id: "pr20",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "What is the main difference between a red penalty area and a yellow penalty area?",
    choices: [
      "Red penalty areas offer lateral relief (drop within 2 club-lengths of crossing point); yellow penalty areas do not",
      "Yellow penalty areas allow you to ground your club; red do not",
      "Red penalty areas carry a two-stroke penalty; yellow carry only one",
      "There is no difference — the colors are just for visual identification",
    ],
    correct: 0,
    rule: "Rule 17.1d",
    explanation:
      "The key difference is that red penalty areas offer an additional lateral relief option: you may drop within two club-lengths of where the ball last crossed the edge of the penalty area, not nearer the hole. Yellow penalty areas do not offer this option — only stroke-and-distance or back-on-the-line relief.",
    tags: ["penalty-area", "red-stakes", "yellow-stakes", "lateral-relief"],
  },

  // pr21 — Ball on the edge of PA (official)
  {
    id: "pr21",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "A red penalty area is defined by a painted red line on the ground. Your ball is resting on top of the line. Is the ball in the penalty area?",
    choices: [
      "Yes — a ball is in the penalty area when any part of it touches the line defining the edge",
      "No — the ball must be fully inside the line to be in the penalty area",
      "Yes, but only if more than half the ball is over the line",
      "It depends on whether the line is on the penalty area side or the course side",
    ],
    correct: 0,
    rule: "Definition of Penalty Area, Rule 17.1",
    explanation:
      "The edge of a penalty area is defined by stakes or lines. A ball is in the penalty area when any part of the ball lies on or touches the boundary edge (the line or the imaginary line between stakes at ground level). The line itself is inside the penalty area.",
    tags: ["penalty-area", "red-stakes", "penalty-area-edge"],
  },

  // pr22 — Dropping in penalty area accidentally (competitor)
  {
    id: "pr22",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You take lateral relief from a red penalty area and drop within two club-lengths of where the ball last crossed the edge. Your ball rolls back into the penalty area. What do you do?",
    choices: [
      "Re-drop — the ball must come to rest in the relief area, which is outside the penalty area",
      "Play it from inside the penalty area since the drop was valid",
      "Take another penalty stroke and drop again",
      "Place the ball at the spot on the edge where it re-entered the penalty area",
    ],
    correct: 0,
    rule: "Rule 14.3c(2), Rule 17.1d(3)",
    explanation:
      "When taking lateral relief from a penalty area, the relief area is outside the penalty area. If the ball rolls back into the penalty area, it has rolled outside the relief area, and you must re-drop. If the second drop also rolls into the penalty area, you place the ball where the second drop first struck the ground.",
    tags: [
      "penalty-area",
      "red-stakes",
      "lateral-relief",
      "drop",
      "relief",
    ],
  },

  // pr23 — Moving penalty area stakes (weekend)
  {
    id: "pr23",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is just outside a red penalty area, but a red stake interferes with your backswing. Can you remove the stake?",
    choices: [
      "Yes — penalty area stakes are movable obstructions and can be removed without penalty",
      "No — penalty area stakes are boundary objects and cannot be moved",
      "Only if the stake is loose in the ground",
      "Yes, but you must replace it after your stroke",
    ],
    correct: 0,
    rule: "Rule 15.2a, Definition of Obstruction",
    explanation:
      "Penalty area stakes are movable obstructions (not boundary objects). You may remove them without penalty. This is different from out-of-bounds stakes (white stakes), which ARE boundary objects and may NOT be moved. You do not need to replace the penalty area stake after your stroke, though it is good etiquette to do so.",
    tags: ["penalty-area", "red-stakes", "relief"],
  },

  // pr24 — Ball assumed in PA without certainty (competitor)
  {
    id: "pr24",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball flies toward a penalty area and you never see it land. You and your playing partners are not sure if it went in the penalty area or is lost in the rough beyond. What should you do?",
    choices: [
      "You must go search — if the ball is not found and it is not known or virtually certain it entered the penalty area, the ball is lost (stroke and distance)",
      "Assume it went in the penalty area and take penalty area relief",
      "Play a provisional ball for the possibility it is in the penalty area",
      "Drop at the edge of the penalty area with one penalty stroke",
    ],
    correct: 0,
    rule: "Rule 17.1c, Rule 18.2",
    explanation:
      "To take penalty area relief, it must be 'known or virtually certain' that the ball is in the penalty area. If there is reasonable doubt, you cannot simply assume it is there. If the ball is not found and it is not known or virtually certain it entered the penalty area, the ball is treated as lost and you must take stroke-and-distance relief.",
    tags: [
      "penalty-area",
      "lost-ball",
      "stroke-and-distance",
      "provisional",
    ],
  },

  // pr25 — Playing from PA, ball goes OB (official)
  {
    id: "pr25",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "You decide to play your ball from a red penalty area. Your shot goes out of bounds. Under stroke and distance, where must you play your next stroke from?",
    choices: [
      "From within the penalty area where you just played, adding one penalty stroke",
      "From where you originally entered the penalty area, adding two penalty strokes",
      "From the teeing area, since the ball is out of bounds",
      "You may choose either the penalty area spot or the original crossing point",
    ],
    correct: 0,
    rule: "Rule 18.1, Rule 17.2a",
    explanation:
      "Under stroke and distance, you must play from where you made the previous stroke. Since you played from inside the penalty area, you return to that spot (dropping in the penalty area) with one penalty stroke for the OB. However, you also have options under Rule 17.2a to use the original reference point where the ball last crossed the penalty area edge before your earlier entry, adding an additional penalty stroke.",
    tags: [
      "penalty-area",
      "red-stakes",
      "out-of-bounds",
      "stroke-and-distance",
      "penalty",
    ],
  },

  // pr26 — Penalty area: can't take free relief from obstruction inside (official)
  {
    id: "pr26",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "Your ball is in a penalty area and comes to rest on a paved drainage channel (immovable obstruction) inside the penalty area. Do you get free relief from the obstruction?",
    choices: [
      "No — there is no free relief from abnormal course conditions when the ball is in a penalty area",
      "Yes — you get free relief from immovable obstructions everywhere on the course",
      "Yes, but only if the obstruction is man-made",
      "No free relief, but you may take a one-club-length drop within the penalty area",
    ],
    correct: 0,
    rule: "Rule 16.1b, Rule 17.1",
    explanation:
      "There is no free relief from abnormal course conditions (immovable obstructions, ground under repair, temporary water, animal holes) when the ball is in a penalty area. Your only options are to play the ball as it lies or take penalty area relief under Rule 17.",
    tags: ["penalty-area", "relief"],
  },

  // ============================================================
  // RULE 18: STROKE-AND-DISTANCE; LOST BALL; OB; PROVISIONAL (~18)
  // ============================================================

  // pr27 — When is a ball "lost" (weekend)
  {
    id: "pr27",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "How long do you have to search for a ball before it is considered lost?",
    choices: [
      "3 minutes from when you or your caddie begin searching in the area where the ball is expected to be",
      "5 minutes from when you hit the shot",
      "3 minutes from when you hit the shot",
      "There is no time limit — it is lost when you give up searching",
    ],
    correct: 0,
    rule: "Rule 18.2a(1)",
    explanation:
      "A ball is lost if not found within 3 minutes after you, your caddie, or your partner begin searching for it in the area where the ball is expected to be. The clock starts when the search begins, not when the shot was played.",
    tags: ["lost-ball", "general-area"],
  },

  // pr28 — Ball becomes lost by making stroke with another ball (competitor)
  {
    id: "pr28",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You cannot find your ball in the rough. Before the 3-minute search time expires, you go back and play another ball from where you last played (taking stroke and distance). Your playing partner then finds your original ball. Can you play the original?",
    choices: [
      "No — once you put another ball in play by making a stroke, the original ball is lost even if later found within 3 minutes",
      "Yes — the 3 minutes have not expired, so the original ball is still in play",
      "You may choose whichever ball you prefer",
      "Yes, but only if you have not completed the hole",
    ],
    correct: 0,
    rule: "Rule 18.2a(2)",
    explanation:
      "A ball also becomes lost when you put a substitute ball in play under stroke and distance by making a stroke. Once you have made a stroke with the substitute ball, the original is lost — even if it is later found within the 3-minute search time.",
    tags: ["lost-ball", "stroke-and-distance"],
  },

  // pr29 — Provisional ball must be announced (weekend)
  {
    id: "pr29",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You think your tee shot might be lost. You tee up another ball and say 'I'm hitting another one.' Is this ball a valid provisional?",
    choices: [
      "No — you must clearly state that you are playing a 'provisional ball' or indicate it is played under Rule 18.3",
      "Yes — any second ball hit from the tee is automatically provisional",
      "Yes — saying 'another one' is sufficient to indicate provisional intent",
      "No — you must also announce the brand and number of the provisional ball",
    ],
    correct: 0,
    rule: "Rule 18.3b",
    explanation:
      "You must clearly announce your intent to play a provisional ball by using the word 'provisional' or otherwise clearly indicating you are playing under Rule 18.3. Saying 'I'm hitting another one' or 'I'll reload' is not sufficient. Without a proper announcement, the second ball becomes your ball in play under stroke and distance.",
    tags: ["provisional", "lost-ball", "tee"],
  },

  // pr30 — When provisional becomes ball in play (competitor)
  {
    id: "pr30",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You play a provisional ball off the tee. You walk forward and play your provisional ball again from the fairway — a point still farther from the hole than where your original ball is likely to be. Is the provisional still provisional?",
    choices: [
      "Yes — it remains a provisional ball as long as you play it from a point that is no nearer the hole than where the original ball is estimated to be",
      "No — once you play the provisional a second time, it automatically becomes your ball in play",
      "Yes, but only if you announced it was provisional before each stroke",
      "No — you can only hit a provisional ball once",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "A provisional ball retains its provisional status as long as you play it from a point no nearer the hole than where the original ball is estimated to be. You may play multiple strokes with a provisional ball. It becomes the ball in play only when you play it from a spot nearer the hole than the original, or when the original is confirmed lost or OB.",
    tags: ["provisional", "lost-ball"],
  },

  // pr31 — Provisional played from nearer hole (weekend)
  {
    id: "pr31",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You hit a provisional ball off the tee. Your provisional lands in the fairway. You walk forward, cannot find your original, and play your provisional from the fairway — from a point nearer the hole than where your original likely was. What happens?",
    choices: [
      "The provisional ball is now your ball in play under stroke and distance — you can no longer find and play the original",
      "You can still search for and play the original if you find it within 3 minutes",
      "You must go back and search for the original before continuing",
      "The provisional is in play only if you cannot find the original after 3 minutes of searching",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "Once you make a stroke with the provisional ball from a point nearer the hole than where the original ball is estimated to be, the provisional becomes your ball in play under stroke and distance. The original ball is now lost, even if it is later found. You can no longer choose to play the original.",
    tags: ["provisional", "lost-ball", "stroke-and-distance"],
  },

  // pr32 — Multiple provisionals (official)
  {
    id: "pr32",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "You hit your tee shot and it might be out of bounds. You play a provisional. The provisional also heads toward the OB line. Can you play a second provisional?",
    choices: [
      "Yes — you may play a provisional for your provisional ball if it too might be lost or OB",
      "No — you are only allowed one provisional ball per hole",
      "Yes, but only in stroke play, not match play",
      "No — you must go forward and search for both balls",
    ],
    correct: 0,
    rule: "Rule 18.3a",
    explanation:
      "There is no limit to the number of provisional balls you may play. If your provisional ball might also be lost outside a penalty area or out of bounds, you may play another provisional for it. Each must be properly announced, and the relationship between each ball is maintained in order.",
    tags: ["provisional", "out-of-bounds", "stroke-and-distance", "tee"],
  },

  // pr33 — Ball found after provisional played: which to play (weekend)
  {
    id: "pr33",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You play a provisional ball off the tee. You find your original ball in bounds in the rough, in a terrible lie. Your provisional is sitting perfectly in the fairway. Can you choose to play the provisional instead?",
    choices: [
      "No — since the original was found in bounds, you must play the original and abandon the provisional",
      "Yes — you can always choose the ball in the better position",
      "Yes — finding the original does not cancel the provisional",
      "You may play the provisional if you add a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "If your original ball is found in bounds within the 3-minute search time, you must continue with the original ball. The provisional ball must be abandoned. It does not matter that the provisional is in a better position — you have no choice but to play the original.",
    tags: ["provisional", "lost-ball", "rough"],
  },

  // pr34 — Stroke and distance: what counts as "previous spot" (competitor)
  {
    id: "pr34",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "In stroke play, you must take stroke-and-distance relief. Your previous shot was played from the fairway. How do you put the ball back in play?",
    choices: [
      "Drop a ball within one club-length of the estimated spot of your previous stroke, not nearer the hole",
      "Place a ball on the exact spot where you last played",
      "Drop anywhere in the fairway within two club-lengths of the original spot",
      "Tee up on the nearest teeing area",
    ],
    correct: 0,
    rule: "Rule 14.6b",
    explanation:
      "When taking stroke-and-distance relief from a spot in the general area (like the fairway), you drop a ball in a relief area that is within one club-length of the estimated spot where the previous stroke was made, not nearer the hole, and in the same area of the course. If the previous stroke was from the teeing area, you may tee up anywhere in the teeing area.",
    tags: ["stroke-and-distance", "fairway", "drop", "reference-point"],
  },

  // pr35 — Local Rule E-5 alternative to stroke and distance (competitor)
  {
    id: "pr35",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is lost (not in a penalty area). The course has adopted Local Rule E-5 (alternative to stroke and distance). What does this Local Rule allow?",
    choices: [
      "Drop in a large relief area between the point where the ball is estimated to have come to rest and the edge of the fairway, for a two-stroke penalty",
      "Drop anywhere on the hole within two club-lengths, for a one-stroke penalty",
      "Play from where any other player's ball lies nearest to where yours was lost",
      "Take free relief at the nearest fairway point",
    ],
    correct: 0,
    rule: "Model Local Rule E-5",
    explanation:
      "Local Rule E-5 provides an alternative to stroke and distance for a lost ball or ball OB. The player drops in a large area between (1) the estimated point where the ball was lost/crossed OB and (2) the nearest edge of the fairway no nearer the hole — for a two-stroke penalty. This avoids having to re-tee and speeds up play.",
    tags: [
      "lost-ball",
      "out-of-bounds",
      "stroke-and-distance",
      "drop",
      "committee",
    ],
  },

  // pr36 — Ball lost: can you drop where you think it went? (weekend)
  {
    id: "pr36",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is lost in the trees. You are pretty sure you know approximately where it went. Can you just drop a ball in that area with a one-stroke penalty?",
    choices: [
      "No — for a lost ball (not in a penalty area), the only option under the Rules is stroke and distance; go back and replay from the previous spot",
      "Yes — you may estimate where the ball was lost and drop there with a one-stroke penalty",
      "Yes — as long as your playing partners agree on the location",
      "No, but you may drop within two club-lengths of where it was last seen in flight with a two-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 18.1, Rule 18.2b",
    explanation:
      "When a ball is lost outside a penalty area, the only option under the Rules of Golf is stroke-and-distance relief — you must go back to where you played the previous stroke, add one penalty stroke, and play from there. You may NOT simply drop near where you think the ball was lost (unless the course has adopted Local Rule E-5).",
    tags: ["lost-ball", "stroke-and-distance", "penalty"],
  },

  // pr37 — OB stakes: can you move them? (weekend)
  {
    id: "pr37",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is in bounds, but a white out-of-bounds stake interferes with your backswing. Can you remove the stake to play your shot?",
    choices: [
      "No — OB stakes are boundary objects and must not be moved",
      "Yes — any stake on the course may be removed if it interferes with your swing",
      "Yes, but only if the stake is loose and easy to remove",
      "No, unless a rules official gives you permission",
    ],
    correct: 0,
    rule: "Definition of Boundary Object, Rule 8.1a",
    explanation:
      "Out-of-bounds stakes (white stakes) are boundary objects — they are NOT obstructions and cannot be moved. Moving a boundary object to improve conditions affecting your stroke would be a breach of Rule 8.1a, resulting in the general penalty. This is different from penalty area stakes, which are movable obstructions.",
    tags: ["out-of-bounds", "white-stakes"],
  },

  // pr38 — Ball on OB line (official)
  {
    id: "pr38",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "Your ball comes to rest directly on the out-of-bounds line, with part of the ball in bounds and part out. Is the ball out of bounds?",
    choices: [
      "No — a ball is out of bounds only when all of it is outside the boundary edge; if any part is in bounds, it is in bounds",
      "Yes — if any part of the ball is beyond the boundary line, it is out of bounds",
      "It depends on whether more than half the ball is out of bounds",
      "The ball is out of bounds only if it is entirely beyond the stakes",
    ],
    correct: 0,
    rule: "Definition of Out of Bounds",
    explanation:
      "A ball is out of bounds only when ALL of it is outside the boundary edge. The boundary edge extends vertically upward and downward from the ground. If any part of the ball is touching or inside the boundary edge at ground level, the ball is in bounds. This is the opposite of penalty areas, where any part touching the line means the ball IS in the penalty area.",
    tags: ["out-of-bounds", "white-stakes"],
  },

  // pr39 — Hitting provisional, original found OB (weekend)
  {
    id: "pr39",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You hit a provisional ball. When you arrive at your original ball, you find it is out of bounds. What happens now?",
    choices: [
      "Your provisional ball becomes your ball in play — you are lying 3 (tee shot + penalty stroke + provisional stroke)",
      "You must go back to the tee and hit another ball",
      "You may drop a ball near where the original went out of bounds with one penalty stroke",
      "Your provisional ball becomes your ball in play, lying 2",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "When the original ball is found out of bounds (or confirmed lost), the provisional ball becomes the ball in play under stroke and distance. You count: stroke 1 (original tee shot) + 1 penalty stroke + stroke 2 (the provisional) = you are now lying 3 with the provisional ball.",
    tags: ["provisional", "out-of-bounds", "stroke-and-distance", "tee"],
  },


  // pr41 — Ball in bounds but unidentifiable (competitor)
  {
    id: "pr41",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You find a ball in the area where yours should be, but it is buried in mud and you cannot identify it. What can you do?",
    choices: [
      "You may lift the ball to identify it — mark it first, and do not clean it more than necessary for identification",
      "You must play it as it lies, assuming it is yours",
      "The ball is considered lost if you cannot identify it",
      "You may clean the ball completely before identifying it",
    ],
    correct: 0,
    rule: "Rule 7.3",
    explanation:
      "Under Rule 7.3, you may lift a ball to identify it if you have a reasonable belief it could be yours. You must first mark the spot, and you may only clean the ball enough to identify it (not fully). If it is your ball, replace it on the original spot. There is no penalty for lifting to identify.",
    tags: ["lost-ball", "general-area"],
  },

  // pr42 — Provisional for ball in penalty area: clarification (official)
  {
    id: "pr42",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "Your tee shot heads toward a penalty area. You say 'I'll play a provisional' and hit another ball. Your original ball is then found in the penalty area. What is the status of the second ball?",
    choices: [
      "The second ball is not a valid provisional — you cannot play a provisional for a ball that may be in a penalty area; it is treated as your ball in play under stroke and distance",
      "It is a valid provisional — abandon it and play the original from the penalty area or take penalty relief",
      "The second ball is automatically your ball in play with a two-stroke penalty",
      "You may choose which ball to play",
    ],
    correct: 0,
    rule: "Rule 18.3a",
    explanation:
      "A provisional ball is only allowed when the ball might be lost outside a penalty area or out of bounds. Since you hit toward a penalty area (and it was known or virtually certain the ball was there), you cannot play a provisional. The second ball is treated as your ball in play under stroke and distance, with one penalty stroke added.",
    tags: ["provisional", "penalty-area", "stroke-and-distance"],
  },

  // pr43 — Time between playing provisional and searching (weekend)
  {
    id: "pr43",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You hit your tee shot into the trees and play a provisional ball. When should you search for your original ball?",
    choices: [
      "Before playing your provisional ball from a point nearer the hole than where the original is likely to be",
      "You don't need to search — the provisional is your backup",
      "Only after completing the hole with the provisional",
      "Within 3 minutes of hitting the provisional",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "You should search for your original ball before making a stroke with the provisional from a point nearer the hole than where the original is estimated to be. Once you play the provisional from nearer the hole, it becomes your ball in play and the original is lost — regardless of whether you searched.",
    tags: ["provisional", "lost-ball"],
  },

  // pr44 — Playing from wrong place after stroke and distance (competitor)
  {
    id: "pr44",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is lost. You take stroke-and-distance relief but accidentally drop and play from a spot 30 yards ahead of where you last played. In stroke play, what happens?",
    choices: [
      "Two-stroke penalty for playing from a wrong place; if it is a serious breach, you must correct it before teeing off on the next hole or be disqualified",
      "No penalty as long as you are in the general area",
      "One-stroke penalty; continue play",
      "Disqualification immediately",
    ],
    correct: 0,
    rule: "Rule 14.7a, Rule 14.7b",
    explanation:
      "Playing from a wrong place is a breach of the applicable Rule, resulting in a two-stroke penalty in stroke play. If the Committee determines it was a 'serious breach' (a significant advantage gained), you must correct the error by going back and playing from the correct spot. Failure to correct a serious breach before teeing off on the next hole results in disqualification.",
    tags: [
      "stroke-and-distance",
      "wrong-place",
      "serious-breach",
      "penalty",
      "disqualification",
    ],
  },

  // ============================================================
  // RULE 19: UNPLAYABLE BALL (~10 scenarios)
  // ============================================================

  // pr45 — Three options for unplayable (weekend)
  {
    id: "pr45",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is under a thick bush and you declare it unplayable. What are your three relief options?",
    choices: [
      "Stroke and distance, back-on-the-line (keeping the spot between you and the hole, going as far back as you like), or lateral relief within 2 club-lengths — each with one penalty stroke",
      "Free drop within 1 club-length, back-on-the-line, or stroke and distance",
      "Stroke and distance, drop in the fairway, or lateral relief within 1 club-length",
      "Move the ball one club-length in any direction with one penalty stroke",
    ],
    correct: 0,
    rule: "Rule 19.2",
    explanation:
      "When you declare your ball unplayable (in the general area), you have three options, each with one penalty stroke: (1) stroke and distance — replay from where you last played; (2) back-on-the-line — drop on a line from the hole through the ball's spot, going as far back as you like; (3) lateral relief — drop within two club-lengths of the ball's spot, not nearer the hole.",
    tags: [
      "unplayable",
      "stroke-and-distance",
      "back-on-the-line",
      "lateral-relief",
      "drop",
      "penalty",
      "club-length",
    ],
  },

  // pr46 — Unplayable in bunker: must stay in bunker (competitor)
  {
    id: "pr46",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is buried under the lip of a bunker and you declare it unplayable. You want to take back-on-the-line relief. Must the dropped ball stay in the bunker?",
    choices: [
      "Yes — back-on-the-line and lateral relief must keep the ball in the bunker; to drop outside, you take an extra penalty stroke (two total)",
      "No — back-on-the-line relief lets you go as far back as needed, even outside the bunker",
      "Yes — you can never get out of a bunker without playing it",
      "Only if the bunker extends more than two club-lengths behind the ball",
    ],
    correct: 0,
    rule: "Rule 19.3",
    explanation:
      "For an unplayable ball in a bunker, the back-on-the-line and lateral relief options must keep the ball in the bunker (one penalty stroke). You may only drop outside the bunker by using the back-on-the-line option with an additional penalty stroke (two total). Stroke and distance is always available for one stroke regardless.",
    tags: [
      "unplayable",
      "bunker",
      "back-on-the-line",
      "lateral-relief",
      "penalty",
      "drop",
    ],
  },

  // pr47 — Player is sole judge of unplayable (weekend)
  {
    id: "pr47",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is in deep rough but has a clear shot to the green. You do not want to risk the rough. Can you still declare it unplayable?",
    choices: [
      "Yes — you are the sole judge of whether your ball is unplayable; no justification is needed",
      "No — unplayable can only be declared if the ball truly cannot be played",
      "Only if a playing partner agrees the lie is unplayable",
      "Only if you cannot make contact with the ball",
    ],
    correct: 0,
    rule: "Rule 19.1",
    explanation:
      "Under Rule 19.1, the player is the sole judge of whether a ball is unplayable. You may declare any ball unplayable at any time for any reason, anywhere on the course except in a penalty area. You do not need anyone's agreement, and the lie does not need to be objectively unplayable.",
    tags: ["unplayable", "rough"],
  },

  // pr48 — Unplayable on putting green (official)
  {
    id: "pr48",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "Your ball is on the putting green but wedged against the base of the flagstick in a way you find impossible to play. Can you declare it unplayable on the putting green?",
    choices: [
      "Yes — you may declare any ball unplayable anywhere except in a penalty area; on the green you could use stroke and distance or back-on-the-line",
      "No — the unplayable ball rule does not apply on the putting green",
      "Yes, but only stroke and distance is available on the green",
      "No — if the ball is on the green, it must be played as it lies or marked and lifted",
    ],
    correct: 0,
    rule: "Rule 19.1",
    explanation:
      "You may declare your ball unplayable anywhere on the course except in a penalty area. This includes the putting green. On the green, your options under Rule 19 include stroke and distance (one penalty stroke) or back-on-the-line (one penalty stroke). Lateral relief of two club-lengths is also technically available but would likely keep you on or near the green.",
    tags: ["unplayable", "green", "penalty"],
  },

  // pr49 — Back-on-the-line: how far back? (weekend)
  {
    id: "pr49",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You declare your ball unplayable in a deep ravine. You choose back-on-the-line relief. Is there a limit to how far back from the ball you can go?",
    choices: [
      "No limit — you may go as far back as you want on the line from the hole through where the ball lay",
      "Maximum of 50 yards behind the ball",
      "Maximum of two club-lengths behind the ball",
      "You may only go back to where you last played",
    ],
    correct: 0,
    rule: "Rule 19.2b",
    explanation:
      "There is no maximum distance for back-on-the-line relief. You may drop on the reference line (from the hole through where the ball lay) as far back as you choose. The ball must come to rest within one club-length of where it first hits the ground on that line, not nearer the hole.",
    tags: ["unplayable", "back-on-the-line", "drop", "relief"],
  },

  // pr50 — Unplayable in penalty area: must use Rule 17 (competitor)
  {
    id: "pr50",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is in a penalty area in a terrible lie. Can you declare it unplayable and use the unplayable ball relief options?",
    choices: [
      "No — you cannot declare a ball unplayable in a penalty area; you must either play it as it lies or take penalty area relief under Rule 17",
      "Yes — unplayable ball relief applies anywhere on the course",
      "Yes, but with a two-stroke penalty instead of one",
      "Only if the penalty area is marked with red stakes",
    ],
    correct: 0,
    rule: "Rule 19.1",
    explanation:
      "Rule 19.1 explicitly states that unplayable ball relief is available anywhere on the course EXCEPT in a penalty area. If your ball is in a penalty area and you do not want to play it, your only option is to take penalty area relief under Rule 17 (stroke-and-distance, back-on-the-line, or lateral relief for red penalty areas).",
    tags: ["unplayable", "penalty-area", "relief"],
  },

  // pr51 — Unplayable: lateral relief must not be nearer hole (weekend)
  {
    id: "pr51",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You declare your ball unplayable under a tree, 150 yards from the hole. You choose lateral relief. Where can you drop?",
    choices: [
      "Within two club-lengths of the ball's spot, not nearer the hole, in any area of the course except a penalty area",
      "Within one club-length of the nearest point of relief, not nearer the hole",
      "Anywhere within two club-lengths, even nearer the hole",
      "In the fairway within two club-lengths of the ball",
    ],
    correct: 0,
    rule: "Rule 19.2c",
    explanation:
      "Lateral relief for an unplayable ball gives you a relief area of two club-lengths from where the ball lay, not nearer the hole. You may drop in any area of the course (fairway, rough, etc.) within those two club-lengths, except in a penalty area. There is a one-stroke penalty.",
    tags: [
      "unplayable",
      "lateral-relief",
      "club-length",
      "drop",
      "reference-point",
    ],
  },

  // pr52 — Unplayable: re-dropping after ball rolls to bad spot (competitor)
  {
    id: "pr52",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You declare your ball unplayable and take lateral relief. After dropping, your ball rolls back to the same bad spot (but stays within the relief area). Must you play it?",
    choices: [
      "Yes — if the ball stays within the relief area, the drop is valid and you must play it (or declare it unplayable again with another penalty stroke)",
      "No — you can re-drop since the ball returned to an unplayable position",
      "You may place the ball if it keeps rolling back",
      "You can take the drop again without an additional penalty",
    ],
    correct: 0,
    rule: "Rule 14.3c, Rule 19.2",
    explanation:
      "If the dropped ball comes to rest within the relief area, the drop is complete and valid — even if it ends up back in a bad lie. You must play it as it lies. If you want relief again, you may declare the ball unplayable once more, but you will incur another penalty stroke.",
    tags: ["unplayable", "lateral-relief", "drop", "penalty"],
  },

  // pr53 — Unplayable against boundary fence (official)
  {
    id: "pr53",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "Your ball is in bounds but resting against a boundary fence (OB fence) with no swing available. You declare it unplayable and choose lateral relief. Your two-club-length relief area extends across the OB line. Can you drop on the other side of the fence?",
    choices: [
      "No — the relief area cannot include any area that is out of bounds; you must drop in the part of the relief area that is in bounds",
      "Yes — the relief area extends in all directions including across the OB line",
      "No — you can only take stroke and distance in this situation",
      "Yes, but the ball must come to rest in bounds after the drop",
    ],
    correct: 0,
    rule: "Rule 19.2c, Definition of Relief Area",
    explanation:
      "A relief area cannot extend into out-of-bounds territory. When taking lateral relief for an unplayable ball, the two-club-length relief area is limited to areas that are in bounds and not in a penalty area. You must drop in the portion of the relief area that is within these boundaries.",
    tags: [
      "unplayable",
      "out-of-bounds",
      "lateral-relief",
      "club-length",
      "drop",
    ],
  },

  // pr54 — Unplayable in tree: can you drop under the tree? (weekend)
  {
    id: "pr54",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is stuck high up in a tree, about 20 feet above the ground. You declare it unplayable. For lateral relief, where is the reference point?",
    choices: [
      "The point on the ground directly below where the ball rests in the tree",
      "The base of the tree trunk",
      "Where you played your previous stroke",
      "The nearest spot on the fairway",
    ],
    correct: 0,
    rule: "Rule 19.2c, Rule 14.2",
    explanation:
      "When a ball is above ground (such as in a tree), the reference point for lateral relief is the point on the ground directly below where the ball is at rest. You measure two club-lengths from that point, not nearer the hole, and drop in that relief area.",
    tags: ["unplayable", "lateral-relief", "reference-point", "drop"],
  },

  // ============================================================
  // RULE 20: RESOLVING RULES ISSUES (~10 scenarios)
  // ============================================================

  // ri4 — Referee decisions in match play (competitor)
  {
    id: "ri4",
    category: "RESOLVING",
    tier: "competitor",
    text: "In match play, a referee is present and makes a ruling you believe is incorrect. Can you appeal the ruling?",
    choices: [
      "No — a referee's decision on facts is final and cannot be appealed",
      "Yes — you may always appeal to the Committee",
      "Only if both players agree the ruling seems wrong",
      "Yes, but only before the next tee shot",
    ],
    correct: 0,
    rule: "Rule 20.1a",
    explanation:
      "In match play, a referee's ruling on a question of fact is final. You cannot appeal. However, if the referee makes a clear error in applying the Rules (not a factual judgment), you may request a ruling from the Committee before either player plays from the next tee (or for the last hole, before the result is final).",
    tags: ["match-play", "referee", "committee"],
  },

  // ri5 — Committee responsibilities (weekend)
  {
    id: "ri5",
    category: "RESOLVING",
    tier: "weekend",
    text: "During a tournament, you have a question about a rules situation and there is no referee on your hole. Who has the authority to make a final ruling?",
    choices: [
      "The Committee — they are responsible for all rules decisions during a competition",
      "The senior player in your group",
      "Any club professional you can reach by phone",
      "A majority vote of the players in your group",
    ],
    correct: 0,
    rule: "Rule 20.2a",
    explanation:
      "The Committee (typically tournament organizers or the rules committee) has the responsibility and authority to decide all questions of fact and apply the Rules. Individual players, professionals, or group votes do not have binding authority on rules decisions.",
    tags: ["committee", "stroke-play"],
  },

  // ri6 — Two-ball rule: announce, play both, report (competitor)
  {
    id: "ri6",
    category: "RESOLVING",
    tier: "competitor",
    text: "You invoke the two-ball rule in stroke play because you are unsure of a ruling. You play the hole with both balls. When must you report the situation to the Committee?",
    choices: [
      "Before returning your scorecard — you must report even if you scored the same with both balls",
      "Only if the two balls result in different scores",
      "Within 24 hours of the round",
      "Before teeing off on the next hole",
    ],
    correct: 0,
    rule: "Rule 20.1c(3)",
    explanation:
      "When you play two balls under Rule 20.1c(3), you must report the facts to the Committee before returning your scorecard — even if you scored the same with both balls. The Committee will determine which ball counts and whether any penalty applies. Failing to report results in disqualification.",
    tags: [
      "two-balls-rule",
      "stroke-play",
      "scorecard",
      "committee",
      "disqualification",
    ],
  },

  // ri7 — Signing scorecard: wrong score (competitor)
  {
    id: "ri7",
    category: "RESOLVING",
    tier: "competitor",
    text: "After your round in stroke play, you sign your scorecard. Later, you realize you recorded a 5 on hole 7, but you actually scored a 4. What happens?",
    choices: [
      "The score of 5 stands — a higher score than actually taken on a hole is not corrected after the scorecard is returned",
      "You are disqualified for signing a wrong scorecard",
      "The Committee will correct it to 4",
      "You may request a correction as long as the competition results haven't been announced",
    ],
    correct: 0,
    rule: "Rule 3.3b(3)",
    explanation:
      "If you return a scorecard with a score higher than actually taken on a hole, that higher score stands. There is no penalty. However, if you return a scorecard with a score lower than actually taken on any hole, you are disqualified. The Committee is responsible for adding up the total score.",
    tags: [
      "scorecard",
      "scoring",
      "stroke-play",
      "disqualification",
    ],
  },

  // ri8 — Signing scorecard: lower score = DQ (weekend)
  {
    id: "ri8",
    category: "RESOLVING",
    tier: "weekend",
    text: "In a stroke play competition, you accidentally sign your scorecard showing a 4 on a hole where you actually made a 5. What is the consequence?",
    choices: [
      "Disqualification — signing for a score lower than actually taken on any hole results in DQ",
      "A two-stroke penalty is added to that hole",
      "The score is corrected to 5 with no penalty",
      "You receive a one-stroke penalty and the score becomes 6",
    ],
    correct: 0,
    rule: "Rule 3.3b(4)",
    explanation:
      "If you return a scorecard with a score lower than actually taken on any hole, you are disqualified. This is why it is critical to carefully verify your hole-by-hole scores before signing. The marker and player share responsibility for recording correct hole scores.",
    tags: ["scorecard", "scoring", "stroke-play", "disqualification"],
  },

  // ri9 — Player rights when disagreeing with ruling (official)
  {
    id: "ri9",
    category: "RESOLVING",
    tier: "official",
    text: "In stroke play, a Committee member gives you a ruling you believe is wrong. You have already played the hole. Can the ruling be revisited later?",
    choices: [
      "Yes — the Committee may correct a ruling error if it is brought to their attention before the competition result is final",
      "No — all rulings are final once the hole is completed",
      "Only if you protested the ruling before playing your next stroke",
      "Only in match play, not stroke play",
    ],
    correct: 0,
    rule: "Rule 20.2d, Rule 20.2e",
    explanation:
      "In stroke play, a wrong ruling may be corrected even after the hole has been completed, as long as the competition result has not become final. The Committee has the authority to correct errors and apply the correct penalty, even retroactively, until the competition closes.",
    tags: ["committee", "stroke-play", "referee"],
  },

  // ri10 — When a ruling can be revisited: time limits (official)
  {
    id: "ri10",
    category: "RESOLVING",
    tier: "official",
    text: "In stroke play, after the competition has closed (results are final), a video shows a player unknowingly violated a rule during the round. Can the player be disqualified?",
    choices: [
      "No — after the competition is final, a penalty cannot be added unless the player deliberately breached a rule they knew about",
      "Yes — all rules violations must be penalized regardless of when they are discovered",
      "Only if another player files a formal protest",
      "Yes, but only within 48 hours of the competition ending",
    ],
    correct: 0,
    rule: "Rule 20.2e",
    explanation:
      "After the competition result is final, a penalty can only be imposed or changed if the player knew they were breaching a Rule or a rule of conduct. If the player was unaware of the breach, the competition stands. This prevents disqualifications from video evidence discovered after the fact for innocent violations.",
    tags: ["committee", "stroke-play", "disqualification"],
  },

  // ri11 — Disqualification vs correctable errors (competitor)
  {
    id: "ri11",
    category: "RESOLVING",
    tier: "competitor",
    text: "In stroke play, you forget to hole out on hole 12 — you picked up your ball without finishing. You realize it on the 13th tee. What must you do?",
    choices: [
      "Go back and complete hole 12 before continuing; add a two-stroke penalty for the error",
      "You are immediately disqualified",
      "Continue play and add a two-stroke penalty to hole 12",
      "You may not go back — add a penalty and estimate your score for hole 12",
    ],
    correct: 0,
    rule: "Rule 3.3c, Rule 6.1",
    explanation:
      "In stroke play, you must hole out on every hole. If you fail to do so and do not correct the mistake before making a stroke on the next tee (or, for the final hole, before returning your scorecard), you are disqualified. Since you realized it on the 13th tee (presumably before making a stroke), you must go back, complete hole 12, and add the general penalty (two strokes).",
    tags: [
      "stroke-play",
      "disqualification",
      "penalty",
      "scoring",
    ],
  },

  // ri12 — Match play: making a claim (competitor)
  {
    id: "ri12",
    category: "RESOLVING",
    tier: "competitor",
    text: "In match play, you see your opponent ground their club in what you believe is a penalty area. You don't say anything until two holes later. Can you still make a claim?",
    choices: [
      "Only if you were not aware of the facts at the time — if you knew the facts and did not make a timely claim, it is too late",
      "Yes — you can make a claim at any time during the round",
      "No — you must protest immediately or lose the right to claim",
      "Only if you are currently losing the match",
    ],
    correct: 0,
    rule: "Rule 20.1b(2)",
    explanation:
      "In match play, a claim must be made in a timely manner — before either player makes a stroke to begin another hole (or for the last hole, before the match result is final). If you knew the facts at the time and failed to make a timely claim, you cannot raise the issue later unless the opponent gave wrong information.",
    tags: ["match-play", "penalty-area", "committee"],
  },

  // ============================================================
  // RULES 21-24: OTHER FORMS OF PLAY (~9 scenarios)
  // ============================================================

  // f70 — Stableford scoring basics (weekend)
  {
    id: "f70",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "In Stableford scoring, how are points awarded relative to a fixed score (usually par)?",
    choices: [
      "Double bogey or worse = 0, Bogey = 1, Par = 2, Birdie = 3, Eagle = 4, Double eagle = 5",
      "Bogey = 0, Par = 1, Birdie = 2, Eagle = 3",
      "Par = 0, Birdie = 1, Eagle = 2 (no points for bogey or worse)",
      "Each hole is scored as plus or minus relative to par, then totaled",
    ],
    correct: 0,
    rule: "Rule 21.1b",
    explanation:
      "In Stableford, points are awarded based on strokes relative to a fixed score (usually par): 0 points for double bogey or worse, 1 for bogey, 2 for par, 3 for birdie, 4 for eagle, and 5 for double eagle (albatross). The highest point total wins.",
    tags: ["stableford", "scoring"],
  },

  // f71 — Stableford: picking up after double bogey (weekend)
  {
    id: "f71",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "In a Stableford competition, you have taken 6 strokes on a par 4 and still have a putt remaining. What should you do?",
    choices: [
      "Pick up — you have already scored a double bogey (0 points) and cannot gain points on this hole; picking up saves time",
      "You must hole out — failing to do so results in disqualification",
      "Continue playing — every stroke counts toward your total",
      "Pick up only if the Committee has authorized it",
    ],
    correct: 0,
    rule: "Rule 21.1c",
    explanation:
      "In Stableford, if you cannot score any points on a hole (you have already reached double bogey or worse), you are encouraged to pick up to maintain pace of play. You are NOT disqualified for failing to hole out in Stableford — you simply score 0 points for the hole. This is one of the key differences from standard stroke play.",
    tags: ["stableford", "scoring"],
  },

  // f72 — Maximum Score format (competitor)
  {
    id: "f72",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In a Maximum Score competition, the Committee sets a maximum score of double bogey. You take 9 strokes on a par 4. What is your score for the hole?",
    choices: [
      "6 (double bogey) — that is the maximum score allowed; you pick up and record a 6",
      "9 — you must record your actual score",
      "8 — you can only cap the score at par + 4",
      "0 — the hole does not count toward your total",
    ],
    correct: 0,
    rule: "Rule 21.2",
    explanation:
      "In Maximum Score format (Rule 21.2), the Committee sets a maximum score for each hole (commonly double bogey, triple bogey, or par + a fixed number). If you reach that maximum, you pick up and record the maximum score. In this case, double bogey on a par 4 is 6, so you record 6 regardless of how many strokes you actually took.",
    tags: ["scoring", "stroke-play"],
  },

  // f73 — Par/Bogey format (competitor)
  {
    id: "f73",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In a Par competition (also called Bogey competition), how is each hole scored?",
    choices: [
      "Like match play against the course — you score a win, loss, or tie on each hole relative to a fixed score (par or bogey)",
      "Standard stroke play with the lowest total winning",
      "Points awarded per hole, like Stableford",
      "Only holes completed under par count toward your score",
    ],
    correct: 0,
    rule: "Rule 21.3",
    explanation:
      "In a Par/Bogey competition, you play each hole as if in match play against the course. If your net score beats the fixed score (usually par), you win the hole (+1). If you tie, the hole is halved (0). If you lose, you score (-1). The player with the highest total (most + results) wins.",
    tags: ["scoring", "stroke-play"],
  },

  // r70 — Match play: concessions (weekend)
  {
    id: "r70",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In match play, your opponent concedes your 3-foot putt. Can they take back the concession?",
    choices: [
      "No — a concession is final and cannot be withdrawn once made",
      "Yes — a concession can be withdrawn before you pick up the ball",
      "Yes — a concession can be withdrawn at any time before the next hole",
      "Only if both players agree to withdraw it",
    ],
    correct: 0,
    rule: "Rule 3.2b(1)",
    explanation:
      "Under Rule 3.2b, a concession in match play is final and cannot be declined or withdrawn. Once your opponent concedes a stroke, the next stroke, or the hole, it stands. This applies to conceding a putt, the hole, or even the match.",
    tags: ["match-play", "concession", "green"],
  },

  // r71 — Match play: out of turn, no penalty but recall (competitor)
  {
    id: "r71",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In match play, your opponent plays out of turn. What are your options?",
    choices: [
      "You may let the stroke stand or cancel it and require your opponent to replay in the correct order — no penalty either way",
      "Your opponent gets a one-stroke penalty",
      "The stroke is automatically void and must be replayed",
      "No penalty and no option to recall — the stroke stands",
    ],
    correct: 0,
    rule: "Rule 6.4a(2)",
    explanation:
      "In match play, there is no penalty for playing out of turn. However, if your opponent plays out of turn, you may cancel the stroke. You must do so promptly — the opponent then replays from where the cancelled stroke was made, in the correct order. If you do not cancel, the stroke stands.",
    tags: ["match-play", "opponent"],
  },

  // r72 — Match play: wrong information about score (weekend)
  {
    id: "r72",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In match play, you ask your opponent how many strokes they have taken on the hole. They say '4' but it was actually 5. You concede the hole based on this wrong information. Later you learn the truth. What happens?",
    choices: [
      "The concession stands, but the opponent gets a loss-of-hole penalty for giving wrong information — the hole is awarded to you",
      "Nothing — the concession is final and cannot be changed",
      "The hole is replayed",
      "You must request a Committee ruling within 10 minutes",
    ],
    correct: 0,
    rule: "Rule 3.2d, Rule 3.2b(4)",
    explanation:
      "In match play, a player must tell the opponent the correct number of strokes taken when asked. Giving wrong information that affects the match is a breach. If you conceded based on wrong information, the Committee can correct the result of the hole. The opponent loses the hole for the breach under Rule 3.2d.",
    tags: ["match-play", "opponent", "scoring", "penalty"],
  },

  // r80 — Four-ball: partner can do things for you (weekend)
  {
    id: "r80",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In a Four-Ball (best ball) competition, can your partner mark, lift, and clean your ball on the putting green?",
    choices: [
      "Yes — in Four-Ball, a partner may do anything the Rules allow for a player, including marking and lifting on the green",
      "No — only you can handle your own ball",
      "Only if you are physically unable to do so yourself",
      "Yes, but only with the opponent's permission",
    ],
    correct: 0,
    rule: "Rule 23.5a",
    explanation:
      "In Four-Ball, a partner may take any action that the player is allowed to take for the player's ball, including marking, lifting, replacing, and cleaning the ball. The partner acts as an extension of the player. This applies both on the putting green and elsewhere.",
    tags: ["four-ball", "best-ball", "partner", "green"],
  },

  // r81 — Four-ball: one partner disqualified (competitor)
  {
    id: "r81",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In a Four-Ball (best ball) match, one partner is disqualified from a hole for a rules breach. What happens to the team?",
    choices: [
      "The other partner continues and their score counts for the team on that hole — the team is not disqualified",
      "Both partners are disqualified from that hole",
      "The team forfeits the hole",
      "The disqualified partner's score is replaced with a penalty score",
    ],
    correct: 0,
    rule: "Rule 23.8a",
    explanation:
      "In Four-Ball, if one partner is disqualified from a hole (or the round for that hole), the other partner can continue to play for the side. The remaining partner's score counts for the team. Only certain serious breaches (like agreeing to ignore a rule) result in both partners being disqualified.",
    tags: [
      "four-ball",
      "best-ball",
      "partner",
      "disqualification",
      "match-play",
    ],
  },

  // r82 — Foursomes: alternate shot basics (weekend)
  {
    id: "r82",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In Foursomes (alternate shot), partners share one ball and alternate hitting shots. Who tees off on each hole?",
    choices: [
      "Partners alternate teeing off — one partner tees off on odd-numbered holes, the other on even-numbered holes",
      "The partner with the lower handicap tees off on every hole",
      "The partner who holed out on the previous hole tees off next",
      "Either partner may choose who tees off on each hole",
    ],
    correct: 0,
    rule: "Rule 22.3",
    explanation:
      "In Foursomes, partners decide which of them will play from the first teeing area on odd-numbered holes and which will play from the first teeing area on even-numbered holes. They must alternate tee shots throughout the round, regardless of who holed out on the previous hole.",
    tags: ["foursomes", "partner", "tee"],
  },

  // r83 — Foursomes: wrong partner plays (official)
  {
    id: "r83",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In Foursomes, the wrong partner tees off on a hole. The error is discovered before either partner plays a second stroke. In stroke play, what happens?",
    choices: [
      "The side gets the general penalty (two strokes) and the correct partner must now play the second stroke",
      "No penalty — the correct partner just plays the next shot",
      "The stroke is cancelled and the correct partner re-tees",
      "Disqualification of the side",
    ],
    correct: 0,
    rule: "Rule 22.3",
    explanation:
      "In Foursomes in stroke play, if the wrong partner plays, the side incurs the general penalty (two strokes). The error must be corrected: the correct partner must play the next stroke. The stroke made by the wrong partner counts, plus two penalty strokes are added.",
    tags: ["foursomes", "partner", "penalty", "stroke-play", "tee"],
  },

  // r84 — Match play: conceding the match (weekend)
  {
    id: "r84",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In match play, you are 4 down with 5 holes to play. You are frustrated and tell your opponent, 'I concede the match.' Can you change your mind on the next tee?",
    choices: [
      "No — a concession of the match is final and cannot be withdrawn",
      "Yes — you can retract a concession before the next hole starts",
      "Yes — you can retract as long as neither player has teed off on the next hole",
      "Only if your opponent agrees to continue the match",
    ],
    correct: 0,
    rule: "Rule 3.2b(1)",
    explanation:
      "Just as with conceding a stroke or a hole, conceding the match is final and cannot be withdrawn. Once you concede the match, it is over. Your opponent wins. You cannot change your mind, even if your opponent would prefer to continue playing.",
    tags: ["match-play", "concession"],
  },
];

