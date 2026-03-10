import { Scenario } from "@/types";

export const SCENARIOS_BATCH_4: Scenario[] = [
  // ============================================================
  // PENALTY RELIEF (Rules 17-19) — 45 scenarios
  // ============================================================

  // --- Rule 17: Penalty Areas ---

  {
    id: "gen_pr1",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your tee shot on a par 3 splashes into a pond marked with yellow stakes. You decide to take relief. Where can you drop?",
    choices: [
      "On a line from the hole through where the ball last crossed the edge of the penalty area, going back as far as you like — with one-stroke penalty",
      "Within two club-lengths of where the ball entered the water, not nearer the hole",
      "Anywhere on the fairway between the tee and the penalty area",
      "On either side of the penalty area within one club-length",
    ],
    correct: 0,
    rule: "Rule 17.1d(2)",
    explanation:
      "For a yellow penalty area, back-on-the-line relief lets you drop on a line going straight back from the hole through the point where the ball last crossed the edge. You can go as far back as you like. This costs one penalty stroke. Lateral relief is not available from yellow penalty areas.",
    tags: ["penalty area", "yellow stakes", "back on the line", "water"],
  },
  {
    id: "gen_pr2",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your approach shot lands in a red penalty area. You are not sure exactly where it crossed the edge. How do you determine the crossing point?",
    choices: [
      "Use your best estimate based on all available information",
      "You must have a witness confirm the exact spot",
      "Drop where you think it entered and accept a two-stroke penalty for uncertainty",
      "You must treat it as a lost ball and take stroke and distance",
    ],
    correct: 0,
    rule: "Rule 17.1d",
    explanation:
      "When the exact point where the ball last crossed the edge of a penalty area is not known, the player must use reasonable judgment to estimate that point. No witness or video evidence is required — your best estimate is sufficient.",
    tags: ["penalty area", "red stakes", "lateral relief", "estimation"],
  },
  {
    id: "gen_pr3",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is in a red penalty area on dry ground. You decide to play it as it lies. Can you remove a small rock behind your ball before swinging?",
    choices: [
      "Yes — you may remove loose impediments in a penalty area without penalty",
      "No — you cannot touch or move anything in a penalty area",
      "Yes, but with a one-stroke penalty",
      "Only if the rock is not within one club-length of the ball",
    ],
    correct: 0,
    rule: "Rule 17.1a, Rule 15.1a",
    explanation:
      "Under the current Rules, you may remove loose impediments (like rocks, leaves, twigs) anywhere on the course, including in penalty areas, without penalty. You may also ground your club in a penalty area.",
    tags: ["penalty area", "playing from penalty area", "loose impediment", "red stakes"],
  },
  {
    id: "gen_pr4",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You hit your ball toward a penalty area and see it splash. However, you are not 100% certain it is in the penalty area. What is the standard?",
    choices: [
      "It must be known or virtually certain (at least 95% likely) that the ball is in the penalty area to take penalty area relief",
      "If you saw it splash, that is automatic proof",
      "You need at least two witnesses",
      "Any reasonable doubt means you must treat it as lost",
    ],
    correct: 0,
    rule: "Rule 17.1c",
    explanation:
      "To take penalty area relief, it must be known or virtually certain that your ball is in the penalty area. 'Virtually certain' means at least 95% likely. If it is not known or virtually certain, the ball is treated as lost, and you must take stroke-and-distance relief.",
    tags: ["penalty area", "virtually certain", "lost ball", "water"],
  },
  {
    id: "gen_pr5",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is in a red penalty area. You take lateral relief but your drop rolls back into the penalty area. What are your options?",
    choices: [
      "Re-drop; if it rolls into the penalty area again, place it where the second drop first struck the ground",
      "Play it from the penalty area as it lies",
      "Take back-on-the-line relief instead, at no additional penalty",
      "You must accept the result and play from the penalty area",
    ],
    correct: 0,
    rule: "Rule 14.3c(2), Rule 17.1d(3)",
    explanation:
      "Normal drop procedures apply. If the ball rolls outside the relief area (including back into the penalty area), you re-drop. If it rolls out again on the second drop, you place it where the second drop first struck the ground. The relief area must be entirely outside the penalty area.",
    tags: ["penalty area", "red stakes", "lateral relief", "dropping procedure"],
  },
  {
    id: "gen_pr6",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You hit your second shot into a yellow penalty area from the fairway. Instead of taking relief, you play the ball from the penalty area — but your shot goes into the same penalty area again. Now what?",
    choices: [
      "You may take relief based on where the ball last crossed the edge, or play it again from within the penalty area — each option costs one penalty stroke",
      "You must take stroke and distance back to the fairway",
      "You get a free drop since you already tried to play from the penalty area",
      "You are penalized two strokes and must drop outside the penalty area",
    ],
    correct: 0,
    rule: "Rule 17.1d, Rule 17.2a(2)",
    explanation:
      "If you play from a penalty area and the ball comes to rest in the same or another penalty area, you may: (1) play it as it lies, (2) take penalty area relief using where it last crossed the edge (one-stroke penalty), or (3) take stroke-and-distance back to where you played from in the penalty area (one-stroke penalty), or (4) go all the way back to where you played the shot that first entered the penalty area (adding a penalty stroke).",
    tags: ["penalty area", "yellow stakes", "playing from penalty area", "stroke and distance"],
  },
  {
    id: "gen_pr7",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "A red penalty area runs along the left side of a hole. Your ball enters the penalty area on the left. When taking lateral relief, can you drop on the opposite side of the penalty area (the right side)?",
    choices: [
      "Not unless the Committee has adopted a specific Local Rule allowing opposite-side relief",
      "Yes — you may always drop on either side of a penalty area",
      "Only if the opposite side is closer to the hole",
      "Only if the penalty area is less than 30 yards wide",
    ],
    correct: 0,
    rule: "Rule 17.1d(3)",
    explanation:
      "Under the standard Rules, lateral relief for a red penalty area is measured from where the ball last crossed the edge — you drop within two club-lengths of that point, not nearer the hole. Dropping on the opposite side is only available if the Committee has adopted a Local Rule specifically permitting it.",
    tags: ["penalty area", "red stakes", "lateral relief", "local rule"],
  },
  {
    id: "gen_pr8",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You play from a penalty area and your ball lands in a different penalty area. You decide to take relief. You have an extra option available that you would not normally have. What is it?",
    choices: [
      "You may take stroke-and-distance relief by going back to where you played from inside the first penalty area, for one penalty stroke",
      "You may take a free drop between the two penalty areas",
      "You may drop on either side of the second penalty area",
      "You may replay your original shot from the fairway with no additional penalty",
    ],
    correct: 0,
    rule: "Rule 17.2a(2)",
    explanation:
      "When your ball played from a penalty area comes to rest in another penalty area, you have a special additional option: take stroke-and-distance relief back to where you last played (which was inside the first penalty area), for one penalty stroke. You also have the usual penalty area relief options based on where the ball last crossed the edge of the second penalty area.",
    tags: ["penalty area", "stroke and distance", "playing from penalty area"],
  },
  {
    id: "gen_pr9",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "In a penalty area, your ball is sitting next to a boundary fence (out of bounds). You cannot take a reasonable swing. You decide to take penalty area relief. Where is the reference point for back-on-the-line relief?",
    choices: [
      "The point where the ball last crossed the edge of the penalty area — not where the ball is lying now",
      "The spot where the ball is currently lying in the penalty area",
      "The nearest point on the penalty area edge to where the ball lies",
      "The midpoint of the penalty area edge closest to the fairway",
    ],
    correct: 0,
    rule: "Rule 17.1d(2)",
    explanation:
      "Back-on-the-line relief is always based on the point where the ball last crossed the edge of the penalty area, not where the ball actually lies within the penalty area. You draw a line from the hole through that crossing point and may drop anywhere on that line behind the crossing point.",
    tags: ["penalty area", "back on the line", "OB", "relief procedure"],
  },
  {
    id: "gen_pr10",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "Your ball is in a penalty area. You take a practice swing and accidentally move the ball. What is the ruling?",
    choices: [
      "No penalty in the penalty area — replace the ball or, if you prefer, take penalty area relief",
      "One-stroke penalty and you must replace the ball",
      "Two-stroke penalty because you caused the ball to move",
      "No penalty, but you must play the ball from its new position",
    ],
    correct: 0,
    rule: "Rule 17.1a, Exception to Rule 9.4",
    explanation:
      "When your ball is in a penalty area, there is no penalty if you accidentally cause it to move. You may replace the ball on its original spot, or you may take penalty area relief under Rule 17.1d (with a one-stroke penalty). This is an exception to the normal rule that penalizes you for moving your ball.",
    tags: ["penalty area", "ball moved", "practice swing", "playing from penalty area"],
  },
  {
    id: "gen_pr11",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You ground your club in a penalty area before making your stroke. Is this allowed?",
    choices: [
      "Yes — you may ground your club in a penalty area without penalty",
      "No — grounding your club in a penalty area results in a two-stroke penalty",
      "Only if the ball is on dry ground, not in water",
      "Only during a practice swing, not when addressing the ball",
    ],
    correct: 0,
    rule: "Rule 17.1a",
    explanation:
      "Under the current Rules (since 2019), you may ground your club in a penalty area without penalty. The old restriction against grounding your club in a water hazard was removed. You may also touch loose impediments and remove movable obstructions in a penalty area.",
    tags: ["penalty area", "grounding club", "playing from penalty area"],
  },
  {
    id: "gen_pr12",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball crosses into a red penalty area, bounces off a rock inside, and comes to rest outside the penalty area in the rough. What is the status of your ball?",
    choices: [
      "The ball is in the general area (the rough) — play it as it lies with no penalty",
      "It is still considered in the penalty area since it crossed the edge",
      "You must take penalty relief because the ball entered the penalty area",
      "You may choose to treat it as in the penalty area or play it from the rough",
    ],
    correct: 0,
    rule: "Rule 17.1, Definition of Penalty Area",
    explanation:
      "A ball is in a penalty area only when it lies in or touches the penalty area. Since your ball came to rest outside the penalty area (in the rough), it is in the general area. Play it as it lies with no penalty, regardless of the fact that it passed through the penalty area.",
    tags: ["penalty area", "red stakes", "ball position"],
  },

  // --- Rule 18: Stroke-and-Distance, Lost Ball, Out of Bounds, Provisional ---

  {
    id: "gen_pr13",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You hit your tee shot and cannot find the ball after searching. The 3-minute search period expires. What are you required to do?",
    choices: [
      "Go back to the tee and play another ball under stroke and distance (one-stroke penalty)",
      "Drop a ball near where you think the ball was lost with a one-stroke penalty",
      "Drop a ball within two club-lengths of where it was last seen, two-stroke penalty",
      "Estimate the spot and play from there with a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 18.2b",
    explanation:
      "When a ball is lost (not found within 3 minutes of searching), the only option under the Rules is stroke-and-distance relief: go back to where you last played and play again, adding one penalty stroke. You cannot drop near the estimated lost spot unless a Local Rule (E-5) is in effect.",
    tags: ["lost ball", "stroke and distance", "search time"],
  },
  {
    id: "gen_pr14",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You hit your drive toward the right side of the hole. White stakes mark the boundary on the right. Your ball comes to rest just beyond the white stakes. What do you do?",
    choices: [
      "Take stroke-and-distance relief: go back to the tee and play again with a one-stroke penalty",
      "Drop within two club-lengths of where it crossed the OB line, one-stroke penalty",
      "Play it from beyond the stakes with a one-stroke penalty",
      "Take a free drop at the nearest point of relief inside the course",
    ],
    correct: 0,
    rule: "Rule 18.2b",
    explanation:
      "A ball beyond white stakes is out of bounds. The only relief under the Rules is stroke-and-distance: return to where you last played and play again with a one-stroke penalty. Out-of-bounds areas are not part of the course, so you cannot play from there.",
    tags: ["out of bounds", "OB", "stroke and distance", "white stakes"],
  },
  {
    id: "gen_pr15",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You hit a provisional ball from the tee because you think your original might be out of bounds. As you walk up, you find your original ball in bounds in the rough. What happens to the provisional?",
    choices: [
      "You must abandon the provisional and play the original ball",
      "You may choose whichever ball you prefer",
      "The provisional is in play because you already hit it",
      "You must play the provisional because it is likely in a better position",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "When the original ball is found in bounds within the 3-minute search time, the provisional ball must be abandoned. You must continue with the original ball. You do not get to choose between them.",
    tags: ["provisional ball", "OB", "lost ball"],
  },
  {
    id: "gen_pr16",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You hit a provisional ball from the tee. Before searching for the original, you play the provisional from the fairway (your third stroke total). You then find the original ball. Can you still play the original?",
    choices: [
      "Only if the spot where you played the provisional from was not nearer the hole than the original ball",
      "No — once you play the provisional a second time, it automatically becomes the ball in play",
      "Yes — you can always return to the original if found within 3 minutes",
      "No — the original is considered lost as soon as you advance the provisional",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "The provisional becomes the ball in play only if you make a stroke at it from a spot that is nearer the hole than where the original ball is estimated to be. If the spot where you played the provisional was farther from or equidistant to the hole, you may still go back to the original.",
    tags: ["provisional ball", "ball in play", "stroke and distance"],
  },
  {
    id: "gen_pr17",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You hit a tee shot that might be lost. You announce 'I'm playing a provisional' and hit another ball. Your provisional also heads toward trouble, so you announce a second provisional. Is this allowed?",
    choices: [
      "Yes — you may play multiple provisional balls",
      "No — you may only play one provisional ball per shot",
      "Only if the first provisional is also potentially lost or OB",
      "Only with the Committee's permission",
    ],
    correct: 0,
    rule: "Rule 18.3a",
    explanation:
      "You may play a provisional ball for a provisional ball. If the first provisional might also be lost or out of bounds, you can hit another provisional for it. Each provisional must be properly announced before playing it.",
    tags: ["provisional ball", "lost ball", "OB", "multiple provisionals"],
  },
  {
    id: "gen_pr18",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You think your ball might be in a penalty area (red stakes) OR it might be lost in the woods outside the penalty area. Can you play a provisional ball?",
    choices: [
      "Yes, but only for the possibility that it is lost outside the penalty area — not for the ball potentially being in the penalty area",
      "No — you cannot play a provisional if there is a penalty area nearby",
      "Yes — a provisional covers both situations",
      "Only if a rules official approves",
    ],
    correct: 0,
    rule: "Rule 18.3a",
    explanation:
      "You may play a provisional ball when the ball might be lost outside a penalty area or might be out of bounds. A provisional ball is not allowed solely for a ball that might be in a penalty area. If the ball is in fact in the penalty area (known or virtually certain), you must abandon the provisional and use penalty area relief options.",
    tags: ["provisional ball", "penalty area", "lost ball"],
  },
  {
    id: "gen_pr19",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "You hit a ball toward the out-of-bounds line. Without announcing it as a provisional, you tee up and hit another ball. What is the status of the second ball?",
    choices: [
      "The second ball is your ball in play under stroke and distance — the original is abandoned even if found",
      "It is automatically treated as a provisional ball",
      "You get a two-stroke penalty but can still search for the original",
      "The shot does not count — you must re-tee and properly announce a provisional",
    ],
    correct: 0,
    rule: "Rule 18.3a",
    explanation:
      "To play a provisional ball, you must announce it as a provisional before making the stroke. If you simply play another ball without announcing it as a provisional, that ball is your ball in play under stroke and distance. The original ball is now irrelevant, even if found.",
    tags: ["provisional ball", "stroke and distance", "announcement", "OB"],
  },
  {
    id: "gen_pr20",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You hit a tee shot that might be OB. You play a provisional from the tee. Walking forward, before you search for the original, you play the provisional from a spot that is closer to the hole than where the original is estimated to be. What happens?",
    choices: [
      "The provisional automatically becomes your ball in play — the original is lost even if later found",
      "You can still go back and play the original if found within 3 minutes",
      "You receive a two-stroke penalty but can still choose",
      "The Committee must decide which ball counts",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "When you make a stroke at the provisional ball from a place that is nearer the hole than where the original ball is estimated to be, the provisional automatically becomes your ball in play under stroke-and-distance penalty. The original ball is now lost by definition, even if subsequently found.",
    tags: ["provisional ball", "ball in play", "OB", "stroke and distance"],
  },
  {
    id: "gen_pr21",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "Under the optional Local Rule E-5 (commonly called the 'two-stroke alternative to stroke and distance'), what relief is available when a ball is lost or out of bounds?",
    choices: [
      "Drop in a large relief area between the edge of the fairway and the estimated spot where the ball was lost or crossed OB, for a two-stroke penalty",
      "Drop within one club-length of where the ball was lost, one-stroke penalty",
      "Drop anywhere on the hole, two-stroke penalty",
      "Replay the shot from the original spot, two-stroke penalty instead of one",
    ],
    correct: 0,
    rule: "Model Local Rule E-5",
    explanation:
      "Local Rule E-5 allows a player whose ball is lost or OB to drop in a large relief area — bounded by two reference points (the estimated spot where the ball was lost or crossed OB and the nearest fairway edge point not nearer the hole) — for a two-stroke penalty. This is meant to speed up recreational play.",
    tags: ["lost ball", "OB", "local rule", "stroke and distance", "pace of play"],
  },
  {
    id: "gen_pr22",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You hit a shot that lands near the out-of-bounds stakes. When you arrive, your ball is touching a white OB stake but the ball is inside the boundary line. Is the ball out of bounds?",
    choices: [
      "No — the ball is in bounds if any part of it is inside the boundary line",
      "Yes — touching the stake means it is out of bounds",
      "It depends on which side of the stake the center of the ball is on",
      "You must get a ruling from the Committee",
    ],
    correct: 0,
    rule: "Definition of Out of Bounds",
    explanation:
      "A ball is out of bounds only when all of it lies outside the boundary edge. The boundary edge is defined by the inside points of the stakes at ground level. If any part of the ball is on or inside the boundary line, the ball is in bounds.",
    tags: ["out of bounds", "OB", "white stakes", "boundary"],
  },

  // --- Rule 19: Unplayable Ball ---

  {
    id: "gen_pr23",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is lodged in a bush and you cannot play it. You declare it unplayable. Which of the following is NOT one of your relief options?",
    choices: [
      "Drop in the nearest area of fairway within one club-length, with a one-stroke penalty",
      "Go back to where you played your previous stroke and play again (stroke and distance), with a one-stroke penalty",
      "Drop within two club-lengths of where the ball lies, not nearer the hole, with a one-stroke penalty",
      "Drop on a line going back from the hole through where the ball lies, as far back as you like, with a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 19.2",
    explanation:
      "The three unplayable ball options are: (1) stroke and distance, (2) back-on-the-line, and (3) lateral relief within two club-lengths. There is no option to drop in the fairway — the lateral relief must be measured from where the ball lies, which might keep you in the rough or trees.",
    tags: ["unplayable lie", "lateral relief", "back on the line", "stroke and distance"],
  },
  {
    id: "gen_pr24",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is against a fence post near some trees. You declare it unplayable and choose lateral relief. You must drop within two club-lengths, not nearer the hole. What club do you measure with?",
    choices: [
      "The longest club in your bag other than the putter",
      "The club you intend to use for the next shot",
      "Any club you choose",
      "A standard driver-length measurement",
    ],
    correct: 0,
    rule: "Definition of Club-Length",
    explanation:
      "A 'club-length' is defined as the length of the longest club in your bag, other than the putter. This is typically your driver. This same measurement applies whenever the Rules refer to club-lengths for relief areas.",
    tags: ["unplayable lie", "lateral relief", "club-length", "relief area"],
  },
  {
    id: "gen_pr25",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is in a deep fairway bunker. You declare it unplayable. You want to drop outside the bunker. What is the penalty?",
    choices: [
      "Two penalty strokes — you may drop outside the bunker on the back-on-the-line only",
      "One penalty stroke — you may drop anywhere outside the bunker within two club-lengths",
      "One penalty stroke — same options as anywhere else on the course",
      "You cannot declare an unplayable ball in a bunker",
    ],
    correct: 0,
    rule: "Rule 19.3b",
    explanation:
      "In a bunker, the three standard unplayable ball options (stroke and distance, back-on-the-line staying in the bunker, lateral relief staying in the bunker) cost one stroke each. But for an additional penalty stroke (two total), you may use back-on-the-line relief and drop outside the bunker.",
    tags: ["unplayable in bunker", "back on the line", "bunker relief"],
  },
  {
    id: "gen_pr26",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is buried in a greenside bunker. You declare it unplayable and choose lateral relief (staying in the bunker). After dropping, your ball rolls to a spot still in the bunker but closer to the hole than the original spot. Is this a valid drop?",
    choices: [
      "No — the ball must come to rest within the relief area (two club-lengths, not nearer the hole); re-drop",
      "Yes — as long as it stays in the bunker, there is no 'not nearer the hole' restriction",
      "Yes — the ball is in play wherever it comes to rest in the bunker",
      "No — you must place the ball, not drop it, when taking unplayable relief in a bunker",
    ],
    correct: 0,
    rule: "Rule 19.3a, Rule 14.3c",
    explanation:
      "Even in a bunker, the lateral relief option requires the ball to come to rest within two club-lengths of the original spot and not nearer the hole. If the dropped ball rolls nearer the hole or outside the two club-lengths, you must re-drop. After two failed drops, place it where the second drop first hit the ground.",
    tags: ["unplayable in bunker", "lateral relief", "dropping procedure"],
  },
  {
    id: "gen_pr27",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You hit your ball high into a tree and it is lodged in the branches, clearly visible but 20 feet up. Can you declare it unplayable?",
    choices: [
      "Yes — you may declare any ball unplayable at any time for any reason (except in a penalty area)",
      "No — you may only declare unplayable if you can reach the ball",
      "Yes, but only after attempting to dislodge it",
      "No — a ball in a tree is treated as lost",
    ],
    correct: 0,
    rule: "Rule 19.1",
    explanation:
      "You may declare your ball unplayable anywhere on the course except in a penalty area. You do not need to attempt to play it first. For a ball in a tree, the spot on the ground directly below is used as the reference point for back-on-the-line and lateral relief options.",
    tags: ["unplayable lie", "ball in tree", "stroke and distance"],
  },
  {
    id: "gen_pr28",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "Your ball is unplayable against the lip of a bunker. You take back-on-the-line relief, keeping the ball in the bunker. You drop, but the ball rolls back to the same unplayable spot against the lip. What can you do?",
    choices: [
      "Declare it unplayable again and take another relief option, adding another one-stroke penalty",
      "You must play it as it lies since you already took relief",
      "You get a free re-drop since the relief did not help",
      "Ask the Committee for a special ruling",
    ],
    correct: 0,
    rule: "Rule 19.1",
    explanation:
      "There is no limit to how many times you can declare a ball unplayable. Each time costs one penalty stroke. If back-on-the-line relief in the bunker keeps returning you to a bad spot, you can choose a different option — including the two-stroke back-on-the-line relief that lets you drop outside the bunker.",
    tags: ["unplayable in bunker", "repeated relief", "back on the line"],
  },
  {
    id: "gen_pr29",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You declare your ball unplayable in the general area and choose back-on-the-line relief. You walk 50 yards back along the line from the hole through where your ball was. You drop the ball. It lands on the line but rolls two feet to the side. Is this a valid drop?",
    choices: [
      "Yes — the relief area extends one club-length in any direction from where the ball first hits the ground on the line",
      "No — the ball must stay on the line",
      "Yes — the ball can roll up to two club-lengths from where it hit the ground",
      "No — you must re-drop because back-on-the-line requires the ball to stay on the line",
    ],
    correct: 0,
    rule: "Rule 19.2b, Rule 14.3c",
    explanation:
      "For back-on-the-line relief, you choose a spot on the line and drop on or behind that spot. The relief area is one club-length in any direction from where the dropped ball first strikes the ground, no nearer the hole than the chosen spot. A ball rolling two feet to the side is likely within one club-length and valid.",
    tags: ["unplayable lie", "back on the line", "relief area", "dropping procedure"],
  },
  {
    id: "gen_pr30",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "Your ball is in a penalty area and you consider it unplayable. Can you use the unplayable ball rule (Rule 19)?",
    choices: [
      "No — the unplayable ball rule does not apply in a penalty area; you must use penalty area relief or play it as it lies",
      "Yes — you can declare any ball unplayable anywhere on the course",
      "Yes, but with a two-stroke penalty instead of one",
      "Only if the ball is not in water",
    ],
    correct: 0,
    rule: "Rule 19.1",
    explanation:
      "Rule 19 explicitly does not apply to a ball in a penalty area. If your ball is in a penalty area and you cannot or do not want to play it, your only options are penalty area relief under Rule 17.1d (with a one-stroke penalty) or stroke and distance.",
    tags: ["unplayable lie", "penalty area", "relief options"],
  },
  {
    id: "gen_pr31",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "You declare your ball unplayable and choose to take stroke-and-distance relief. You played your last shot from a spot in the rough, 150 yards back. Must you drop in the exact same spot?",
    choices: [
      "You drop within one club-length of the original spot, not nearer the hole",
      "You must drop on the exact spot where you last played",
      "You may drop anywhere within two club-lengths of the original spot",
      "You may drop anywhere between the original spot and where the ball now lies",
    ],
    correct: 0,
    rule: "Rule 14.6, Rule 19.2a",
    explanation:
      "Stroke-and-distance relief requires you to play from where you last made a stroke. If that was from the general area, the relief area is one club-length from the original spot, not nearer the hole. If it was from the teeing area, you may tee up anywhere in the teeing area.",
    tags: ["unplayable lie", "stroke and distance", "relief area"],
  },
  {
    id: "gen_pr32",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball lands against a boundary fence (OB fence) but is in bounds. The fence interferes with your swing. Do you get free relief from the fence?",
    choices: [
      "No — a boundary fence is not an obstruction; there is no free relief. You may declare the ball unplayable (one-stroke penalty).",
      "Yes — any fence is an obstruction and you get free relief",
      "Yes — since the ball is in bounds, you get free relief from the fence",
      "No, but you may move the fence without penalty",
    ],
    correct: 0,
    rule: "Definition of Obstruction, Rule 19.1",
    explanation:
      "Boundary objects (fences, stakes, walls defining OB) are not obstructions and not movable obstructions. No free relief is available. Your options are to play it as it lies, or declare it unplayable under Rule 19 with a one-stroke penalty.",
    tags: ["out of bounds", "boundary fence", "unplayable lie", "no free relief"],
  },
  {
    id: "gen_pr33",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "You hit your tee shot and it might be lost. You play a provisional ball, which ends up in a penalty area. You then learn your original is indeed lost. What is the status of the provisional in the penalty area?",
    choices: [
      "The provisional is now your ball in play (under stroke-and-distance penalty); you may play it from the penalty area or take penalty area relief with an additional penalty stroke",
      "You must re-tee since both balls are in trouble",
      "You take a free drop from the penalty area since the provisional was forced upon you",
      "The provisional is void; you must go back and re-tee with a two-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 18.3c(2), Rule 17.1",
    explanation:
      "Once the original ball is confirmed lost and the provisional was played from a spot not nearer the hole, the provisional becomes your ball in play under stroke and distance. It is now in a penalty area, so you may play it as it lies or take penalty area relief (adding one more penalty stroke).",
    tags: ["provisional ball", "penalty area", "lost ball", "stroke and distance"],
  },
  {
    id: "gen_pr34",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "After hitting your tee shot into the woods, you search for exactly 3 minutes and cannot find it. On the way back to the tee, a spectator finds the ball. Can you play it?",
    choices: [
      "No — the 3-minute search time has expired and the ball is lost; you must take stroke-and-distance relief",
      "Yes — a found ball can always be played regardless of time",
      "Yes — as long as you have not made another stroke",
      "Only if the spectator found it within 30 seconds of the time expiring",
    ],
    correct: 0,
    rule: "Rule 18.2a(1)",
    explanation:
      "Once the 3-minute search time expires, the ball is lost by definition. Finding it afterward does not change its status. You must take stroke-and-distance relief (go back and play from where you last played, adding one penalty stroke).",
    tags: ["lost ball", "search time", "stroke and distance"],
  },
  {
    id: "gen_pr35",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You hit your approach shot toward the green. The ball is heading toward a penalty area behind the green. You want to play a provisional. Can you?",
    choices: [
      "No — a provisional ball cannot be played for a ball that may be in a penalty area (only for lost or OB)",
      "Yes — you can play a provisional anytime you are unsure about your ball's location",
      "Yes — but only if the penalty area is marked with red stakes",
      "Only if there are also woods behind the penalty area where it might be lost",
    ],
    correct: 0,
    rule: "Rule 18.3a",
    explanation:
      "A provisional ball is only allowed when the ball might be lost outside a penalty area or might be out of bounds. If the ball might be in a penalty area, you cannot play a provisional for that reason. You must go forward and determine if the ball is in the penalty area before deciding on relief.",
    tags: ["provisional ball", "penalty area", "lost ball"],
  },
  {
    id: "gen_pr36",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "In stroke play, you play from the teeing area, realize the ball is heading OB, and immediately tee up and hit another ball without saying 'provisional.' What is the status?",
    choices: [
      "The second ball is your ball in play under stroke and distance — you are hitting 3 from the tee; the original is abandoned",
      "It is treated as a provisional since it was hit from the tee",
      "You receive a two-stroke penalty but can still search for the original",
      "The second shot does not count; you must wait for the original to be found or confirmed lost",
    ],
    correct: 0,
    rule: "Rule 18.3a, Rule 18.1",
    explanation:
      "A provisional ball must be announced as such before making the stroke. If you simply tee up and hit another ball without announcing it as a provisional, you have put a new ball in play under stroke and distance. Your original ball is abandoned, and your next shot from the tee is stroke 3.",
    tags: ["provisional ball", "stroke and distance", "OB", "announcement"],
  },

  // --- Additional Penalty Area / Relief Scenarios ---

  {
    id: "gen_pr37",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "The entire left side of a hole is lined with a creek marked by red stakes. Your ball is right on the red line painted on the ground. Is your ball in the penalty area?",
    choices: [
      "Yes — when a line defines the penalty area, the line itself is in the penalty area",
      "No — the ball must be fully past the line to be in the penalty area",
      "Only if more than half the ball is past the line",
      "You need a ruling from the Committee",
    ],
    correct: 0,
    rule: "Definition of Penalty Area",
    explanation:
      "When a painted line defines a penalty area, the line itself is part of the penalty area. A ball is in the penalty area when any part of it lies on or touches the line. Even if most of the ball is outside, touching the line means the ball is in the penalty area.",
    tags: ["penalty area", "red stakes", "boundary line", "ball position"],
  },
  {
    id: "gen_pr38",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is in a yellow penalty area. You take back-on-the-line relief. When choosing where to drop on the line, is there a limit to how far back you can go?",
    choices: [
      "No — you may go as far back as you like on the line from the hole through the crossing point",
      "You may only go back up to two club-lengths from the edge of the penalty area",
      "You may only go back within the same hole's playing corridor",
      "You may go back a maximum of 50 yards",
    ],
    correct: 0,
    rule: "Rule 17.1d(2)",
    explanation:
      "When taking back-on-the-line relief from a penalty area, there is no limit to how far back you can go on the line extending from the hole through the point where the ball last crossed the edge of the penalty area. You could theoretically go all the way back to the tee if you wanted.",
    tags: ["penalty area", "yellow stakes", "back on the line", "relief area"],
  },
  {
    id: "gen_pr39",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "You find your ball in a penalty area. You try to play it but whiff (miss the ball entirely). The ball does not move. Can you now take penalty area relief?",
    choices: [
      "Yes — the ball is still in the penalty area and you may take relief at any time; the whiff counts as a stroke",
      "No — once you attempt a stroke, you must continue playing from the penalty area",
      "Yes, but with a two-stroke penalty instead of one",
      "Only if the ball moved during the attempt",
    ],
    correct: 0,
    rule: "Rule 17.1, Definition of Stroke",
    explanation:
      "A whiff (missing the ball) counts as a stroke because you intended to hit the ball. However, the ball is still in the penalty area. You may at any time choose to take penalty area relief (one-stroke penalty), or continue trying to play from the penalty area. The whiff stroke still counts toward your score.",
    tags: ["penalty area", "playing from penalty area", "whiff", "stroke"],
  },
  {
    id: "gen_pr40",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Your ball is in a penalty area surrounded by tall grass. Can you move the grass behind your ball to improve your backswing area?",
    choices: [
      "No — you must not improve the conditions affecting your stroke; bending or breaking growing grass is a penalty",
      "Yes — you may do anything in a penalty area",
      "Yes — you are entitled to see your ball before playing",
      "Only if the grass is dead and counts as a loose impediment",
    ],
    correct: 0,
    rule: "Rule 8.1a",
    explanation:
      "While you may ground your club and remove loose impediments in a penalty area (Rule 17.1a), you still cannot improve the conditions affecting your stroke (Rule 8.1a). Bending or breaking growing grass to improve your area of intended swing or line of play is not allowed, whether in a penalty area or anywhere else.",
    tags: ["penalty area", "improving conditions", "playing from penalty area"],
  },
  {
    id: "gen_pr41",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "You take lateral relief from a red penalty area. The point where the ball last crossed the edge is on a steep hillside. Your drop rolls more than two club-lengths from the crossing point. After a re-drop, it rolls away again. What do you do?",
    choices: [
      "Place the ball where the second drop first struck the ground",
      "Keep dropping until it stays within the relief area",
      "Choose a different relief option (back-on-the-line or stroke and distance) at no additional penalty",
      "Ask the Committee to designate a drop zone",
    ],
    correct: 0,
    rule: "Rule 14.3c(2)",
    explanation:
      "Standard dropping procedures apply. If a properly dropped ball rolls outside the relief area twice, you place the ball on the spot where the second drop first struck the ground. You never drop more than twice for the same relief situation.",
    tags: ["penalty area", "red stakes", "lateral relief", "dropping procedure"],
  },
  {
    id: "gen_pr42",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "You hit your ball into a penalty area. It is known that the ball is in the penalty area, but after searching you cannot find it. What are your options?",
    choices: [
      "Take penalty area relief using the estimated point where the ball last crossed the edge — same options as if you found it",
      "You must treat it as a lost ball and take stroke and distance",
      "You must drop at the center of the penalty area, one-stroke penalty",
      "You must play a provisional ball",
    ],
    correct: 0,
    rule: "Rule 17.1c, Rule 17.1d",
    explanation:
      "If it is known or virtually certain that your ball is in a penalty area but you cannot find it, you may take penalty area relief under Rule 17.1d. You use your best estimate for where the ball last crossed the edge of the penalty area. This is not treated as a lost ball.",
    tags: ["penalty area", "virtually certain", "lost ball", "relief options"],
  },
  {
    id: "gen_pr43",
    category: "PENALTY_RELIEF",
    tier: "official",
    text: "You take back-on-the-line relief from a penalty area. You drop the ball on the line, but it rolls forward (closer to the hole) and comes to rest in front of the reference point you chose on the line. Is this a valid drop?",
    choices: [
      "Only if the ball is still within one club-length of where it first hit the ground and not nearer the hole than your chosen reference point",
      "No — the ball can never roll forward on back-on-the-line relief",
      "Yes — as long as it stays on the line",
      "Yes — the ball is always in play once it hits the ground after a drop",
    ],
    correct: 0,
    rule: "Rule 14.3c, Rule 17.1d(2)",
    explanation:
      "For back-on-the-line relief, the relief area is one club-length in any direction from where the dropped ball first strikes the ground, but the ball must not come to rest nearer the hole than the reference point on the line that you chose. If it rolls nearer the hole than that reference point, you must re-drop.",
    tags: ["penalty area", "back on the line", "dropping procedure", "relief area"],
  },
  {
    id: "gen_pr44",
    category: "PENALTY_RELIEF",
    tier: "weekend",
    text: "Can you test the condition of the ground inside a penalty area before deciding whether to play your ball or take relief?",
    choices: [
      "Yes — you may touch the ground, ground your club, and take practice swings in a penalty area",
      "No — you cannot touch or test the ground in a penalty area",
      "Only if you have already decided to play the ball from the penalty area",
      "Only with a practice swing, not by touching the ground with your hand",
    ],
    correct: 0,
    rule: "Rule 17.1a",
    explanation:
      "The 2019 Rules removed the old restrictions on touching or testing the ground in a penalty area (formerly called a water hazard). You may now ground your club, take practice swings touching the ground, remove loose impediments, and touch the water — all without penalty.",
    tags: ["penalty area", "grounding club", "playing from penalty area", "testing conditions"],
  },
  {
    id: "gen_pr45",
    category: "PENALTY_RELIEF",
    tier: "competitor",
    text: "Your ball is in a red penalty area. Your caddie accidentally kicks the ball while walking to help you. What happens?",
    choices: [
      "No penalty — when a ball is in a penalty area, there is no penalty for accidentally moving it; replace it or take penalty area relief",
      "One-stroke penalty on you; replace the ball",
      "Two-stroke penalty since the caddie moved it",
      "Your caddie gets a warning, and you must play from the new spot",
    ],
    correct: 0,
    rule: "Rule 17.1a, Exception to Rule 9.4b",
    explanation:
      "When a ball is in a penalty area, the exception to Rule 9.4b applies: there is no penalty if the player, their caddie, or anyone else accidentally moves the ball. The ball may be replaced or the player may take penalty area relief. This is an important exception unique to penalty areas.",
    tags: ["penalty area", "ball moved", "caddie", "red stakes"],
  },

  // ============================================================
  // RESOLVING ISSUES (Rules 20-24) — 30 scenarios
  // ============================================================

  // --- Rule 20: Resolving Rules Issues During Round ---

  {
    id: "gen_ri1",
    category: "RESOLVING",
    tier: "weekend",
    text: "In stroke play, you are unsure whether you are entitled to free relief from an immovable obstruction. What is the safest way to protect yourself?",
    choices: [
      "Play two balls: one as it lies and one with relief, then report the situation to the Committee before signing your scorecard",
      "Take the relief and hope it is correct",
      "Play the ball as it lies and report after the round",
      "Ask your fellow competitor to decide",
    ],
    correct: 0,
    rule: "Rule 20.1c(3)",
    explanation:
      "The two-ball procedure in stroke play lets you protect yourself when uncertain. Play the hole with two balls, announce which ball you want to count if the Rules allow, and report the full situation to the Committee before returning your scorecard.",
    tags: ["stroke play", "two balls", "doubt about rules", "committee"],
  },
  {
    id: "gen_ri2",
    category: "RESOLVING",
    tier: "competitor",
    text: "In stroke play, you invoke the two-ball rule but forget to announce which ball you want to count before playing either ball. How does the Committee decide?",
    choices: [
      "The score with the original ball (played as it lies) counts, unless the Rules say the procedure used for the other ball was correct",
      "The lower score automatically counts",
      "The higher score automatically counts",
      "The player is disqualified for failing to announce",
    ],
    correct: 0,
    rule: "Rule 20.1c(3)",
    explanation:
      "If a player does not announce a choice in advance, the ball played under the original procedure (as it lies) is treated as the default chosen ball. However, if the Committee determines that the other procedure was in fact correct, that score counts instead — regardless of the player's choice.",
    tags: ["two balls", "stroke play", "committee", "doubt about rules"],
  },
  {
    id: "gen_ri3",
    category: "RESOLVING",
    tier: "official",
    text: "In stroke play, you play two balls on a hole under the two-ball procedure. The Committee determines that the ball you did NOT choose counts. That ball had a higher score. What happens?",
    choices: [
      "The score with the ball the Committee selects counts, including any penalty strokes; a two-stroke penalty may apply if the other ball was played from a wrong place as a serious breach",
      "The lower score always counts regardless of the Committee's determination",
      "You receive the average of the two scores",
      "You are disqualified for playing the wrong ball",
    ],
    correct: 0,
    rule: "Rule 20.1c(3)",
    explanation:
      "The Committee determines which ball counts. The score with that ball stands, including any penalties. If the player played the other ball from a wrong place and it was a serious breach, an additional two-stroke penalty is added to the score that counts. Strokes with the ball that does not count are disregarded.",
    tags: ["two balls", "stroke play", "committee", "serious breach", "wrong place"],
  },
  {
    id: "gen_ri4",
    category: "RESOLVING",
    tier: "competitor",
    text: "In match play, you believe your opponent has taken an improper drop. When must you make a timely request for a ruling?",
    choices: [
      "Before either player makes a stroke to begin the next hole (or for the last hole, before the result is finalized)",
      "Immediately, before the opponent plays from the dropped position",
      "Within 24 hours of the match",
      "Before the end of the round",
    ],
    correct: 0,
    rule: "Rule 20.1b(2)",
    explanation:
      "In match play, a request for a ruling must be made in a timely way. Generally, this means before either player makes a stroke to begin the next hole. For the last hole of the match, it must be before the match result is finalized. Late requests are only considered if based on facts the player did not know.",
    tags: ["match play", "rules dispute", "referee", "timely request"],
  },
  {
    id: "gen_ri5",
    category: "RESOLVING",
    tier: "official",
    text: "In match play, after a hole is completed, your opponent tells you they played a wrong ball during the hole but you had already moved to the next tee without objecting. What happens?",
    choices: [
      "The result of the hole stands — the request is too late since a stroke was made on the next hole",
      "Your opponent loses the hole retroactively",
      "The hole must be replayed",
      "Your opponent is disqualified from the match",
    ],
    correct: 0,
    rule: "Rule 20.1b(2)",
    explanation:
      "In match play, once both players have made a stroke on the next tee, the result of the previous hole stands and cannot be changed — even if a breach is later discovered. The exception is if the opponent gave wrong information about their penalty count.",
    tags: ["match play", "rules dispute", "wrong ball", "timely request"],
  },
  {
    id: "gen_ri6",
    category: "RESOLVING",
    tier: "weekend",
    text: "In match play, your opponent concedes your 3-foot putt by saying 'That's good.' Can the concession be withdrawn?",
    choices: [
      "No — a concession is final and cannot be declined or withdrawn",
      "Yes — the opponent can change their mind before you pick up the ball",
      "Yes — either player can withdraw a concession",
      "Only the Committee can overrule a concession",
    ],
    correct: 0,
    rule: "Rule 3.2b(1)",
    explanation:
      "Once a concession is made (of a stroke, hole, or match), it is final. It cannot be declined or withdrawn. Once your opponent says the putt is good, you pick up the ball and the hole is complete with your next stroke deemed to have been made.",
    tags: ["match play", "concession"],
  },
  {
    id: "gen_ri7",
    category: "RESOLVING",
    tier: "competitor",
    text: "In stroke play, you accidentally play from a wrong place (you took relief incorrectly). You realize the error before playing from the next tee. Is there any way to avoid disqualification?",
    choices: [
      "If the breach is not serious, you add two penalty strokes and the score counts; if it was a serious breach, you must correct it by replaying from the right place before teeing off on the next hole",
      "You are always disqualified for playing from a wrong place",
      "You may simply add one penalty stroke and move on",
      "No correction is needed if you did not gain a significant advantage",
    ],
    correct: 0,
    rule: "Rule 14.7a, Rule 14.7b",
    explanation:
      "In stroke play, playing from a wrong place results in a two-stroke penalty. If the breach is not a serious breach, the score stands. If it is a serious breach (gained a significant advantage), you must correct the error by going back and playing from the correct spot before making a stroke on the next tee — or you are disqualified.",
    tags: ["stroke play", "wrong place", "serious breach", "disqualification"],
  },
  {
    id: "gen_ri8",
    category: "RESOLVING",
    tier: "official",
    text: "In stroke play, you realize after signing and returning your scorecard that you played from a wrong place on hole 7 and it was a serious breach. The competition has not closed. What happens?",
    choices: [
      "You are disqualified — a serious breach must be corrected before the scorecard is returned",
      "You may go back and correct it as long as the competition has not closed",
      "The Committee adds two penalty strokes and your score stands",
      "Nothing — once the card is signed, the round is final",
    ],
    correct: 0,
    rule: "Rule 14.7b",
    explanation:
      "If a player played from a wrong place that was a serious breach and did not correct it before returning the scorecard, the player is disqualified — regardless of whether the competition has closed. The correction must happen before the scorecard is returned.",
    tags: ["stroke play", "wrong place", "serious breach", "disqualification", "scoring"],
  },
  {
    id: "gen_ri9",
    category: "RESOLVING",
    tier: "weekend",
    text: "In stroke play, you return your scorecard with a hole score of 5 on a hole where you actually made a 6. You signed the card already. What happens?",
    choices: [
      "You are disqualified for returning a scorecard with a score lower than actually taken",
      "The Committee corrects it to 6 and adds a two-stroke penalty",
      "Since you signed it, the 5 stands",
      "You receive a one-stroke penalty and the score is corrected to 7",
    ],
    correct: 0,
    rule: "Rule 3.3b(3)",
    explanation:
      "If a player returns a scorecard with a hole score lower than actually taken (excluding unknown penalty strokes), the player is disqualified. The player is responsible for the correctness of each hole score. Note: if the score is higher than actually taken, the higher score stands.",
    tags: ["scoring", "disqualification", "stroke play", "scorecard"],
  },
  {
    id: "gen_ri10",
    category: "RESOLVING",
    tier: "competitor",
    text: "In stroke play, you return your scorecard with a score of 6 on a hole where you actually made a 5 (you accidentally added an extra stroke). What happens?",
    choices: [
      "The higher score of 6 stands — the Committee cannot change it to the correct lower score",
      "The Committee corrects it to 5",
      "You are disqualified for an incorrect scorecard",
      "You receive a two-stroke penalty and the score becomes 7",
    ],
    correct: 0,
    rule: "Rule 3.3b(3)",
    explanation:
      "If a hole score on the returned scorecard is higher than actually taken, the higher score stands. The Committee does not correct it downward. The penalty only applies to scores recorded lower than actually taken (which result in disqualification).",
    tags: ["scoring", "stroke play", "scorecard"],
  },
  {
    id: "gen_ri11",
    category: "RESOLVING",
    tier: "official",
    text: "In match play, your opponent accidentally gives you wrong information about their penalty count on a hole. You discover this two holes later. What can be done?",
    choices: [
      "The claim is valid even though two holes have passed — wrong information about penalties is an exception to the normal time limit for claims",
      "Nothing — the result of that hole stands since two holes have been played",
      "The match must be restarted from the hole in question",
      "Your opponent is disqualified from the match",
    ],
    correct: 0,
    rule: "Rule 3.2d(3)",
    explanation:
      "In match play, if a player gives wrong information about their score or penalties and the opponent does not discover this until later, the claim can still be made — even if strokes have been played on subsequent holes. This is an exception to the normal 'before a stroke on the next tee' deadline. The Committee adjusts the match score.",
    tags: ["match play", "rules dispute", "wrong information", "penalty count"],
  },

  // --- Rule 21: Other Forms of Stroke Play ---

  {
    id: "gen_ri12",
    category: "RESOLVING",
    tier: "weekend",
    text: "In a Stableford competition, what happens if you make a double bogey or worse on a hole?",
    choices: [
      "You score zero points for that hole — you should pick up and move on to save time",
      "You lose two points from your total",
      "You must still hole out and record the actual score",
      "You are penalized one point for each stroke over double bogey",
    ],
    correct: 0,
    rule: "Rule 21.1b",
    explanation:
      "In Stableford, you earn zero points for a double bogey or worse. Since there is nothing to gain, you should pick up your ball and move to the next hole to maintain pace of play. There is no requirement to hole out when you cannot score any points.",
    tags: ["stroke play", "Stableford", "scoring"],
  },
  {
    id: "gen_ri13",
    category: "RESOLVING",
    tier: "competitor",
    text: "In Stableford scoring, how many points do you earn for a birdie?",
    choices: [
      "3 points",
      "2 points",
      "4 points",
      "1 point",
    ],
    correct: 0,
    rule: "Rule 21.1b",
    explanation:
      "In Stableford, the fixed points are: double bogey or worse = 0, bogey = 1, par = 2, birdie = 3, eagle = 4, double eagle (albatross) or better = 5. The player with the highest total points wins.",
    tags: ["stroke play", "Stableford", "scoring"],
  },
  {
    id: "gen_ri14",
    category: "RESOLVING",
    tier: "official",
    text: "In a Maximum Score competition (where the Committee has set a maximum score per hole), a player reaches the maximum on a hole. What should they do?",
    choices: [
      "Pick up the ball and record the maximum score for that hole — no need to hole out",
      "They must still hole out regardless of the maximum",
      "They are disqualified from the competition",
      "They must record the actual score, and the Committee adjusts it later",
    ],
    correct: 0,
    rule: "Rule 21.2b",
    explanation:
      "In a Maximum Score competition, once a player has reached the maximum set by the Committee (e.g., double bogey, triple bogey, or a fixed number like 8), they may pick up the ball and record the maximum score for that hole. This format helps maintain pace of play.",
    tags: ["stroke play", "maximum score", "scoring"],
  },
  {
    id: "gen_ri15",
    category: "RESOLVING",
    tier: "competitor",
    text: "In a Par/Bogey competition (a form of stroke play scored like match play against the course), what does a player record on each hole?",
    choices: [
      "A win, loss, or tie against the fixed target score (par or bogey) for that hole",
      "The actual number of strokes taken",
      "Points based on the Stableford system",
      "Only whether the hole was completed or not",
    ],
    correct: 0,
    rule: "Rule 21.3",
    explanation:
      "In a Par/Bogey competition, each hole is scored as a win (score better than the fixed target), a loss (score worse than the fixed target), or a tie (score equals the fixed target). The player with the most wins versus losses wins the competition.",
    tags: ["stroke play", "par/bogey", "scoring"],
  },
  {
    id: "gen_ri16",
    category: "RESOLVING",
    tier: "official",
    text: "In a Par/Bogey competition, a player breaches a Rule and incurs the general penalty (two strokes). How is this applied?",
    choices: [
      "The player automatically loses the hole where the breach occurred, regardless of their actual score",
      "Two strokes are added to their total score for the round",
      "They lose the current hole and the next hole",
      "They are disqualified",
    ],
    correct: 0,
    rule: "Rule 21.3c",
    explanation:
      "In a Par/Bogey competition, the general penalty is adjusted to fit the format: instead of adding two penalty strokes, the player loses the hole where the breach occurred. If the breach occurred between holes, the player loses the next hole.",
    tags: ["stroke play", "par/bogey", "scoring", "general penalty"],
  },

  // --- Rule 22: Foursomes ---

  {
    id: "gen_ri17",
    category: "RESOLVING",
    tier: "weekend",
    text: "In a Foursomes (alternate shot) competition, partners take turns hitting shots. Who tees off on the odd-numbered holes?",
    choices: [
      "The partners decide who plays from the odd-numbered tees and who plays from the even-numbered tees",
      "The partner with the lower handicap must tee off on odd holes",
      "The order is determined by a coin flip on the first tee and alternates from there",
      "The partner who did not hit the last shot on the previous hole must tee off",
    ],
    correct: 0,
    rule: "Rule 22.3",
    explanation:
      "In Foursomes, the side (team of two) decides which partner plays from the odd-numbered teeing areas and which plays from the even-numbered teeing areas. Once the round starts, this order must be maintained throughout the round.",
    tags: ["foursomes", "alternate shot", "teeing order"],
  },
  {
    id: "gen_ri18",
    category: "RESOLVING",
    tier: "competitor",
    text: "In Foursomes, the partners must alternate strokes on each hole. What happens if they play out of order (the wrong partner makes a stroke)?",
    choices: [
      "The general penalty applies (two strokes in stroke play / loss of hole in match play), and the correct order must be restored",
      "No penalty, but they must correct the order on the next shot",
      "The stroke does not count and must be replayed by the correct partner",
      "Only a one-stroke penalty, and the stroke stands",
    ],
    correct: 0,
    rule: "Rule 22.3",
    explanation:
      "In Foursomes, if the wrong partner plays out of order, the side receives the general penalty (two strokes in stroke play, loss of hole in match play). The stroke counts and the side must correct the order going forward — the partner who should have played next must play the next stroke.",
    tags: ["foursomes", "alternate shot", "out of order", "general penalty"],
  },
  {
    id: "gen_ri19",
    category: "RESOLVING",
    tier: "official",
    text: "In a Foursomes match play competition, one partner hits the tee shot into a penalty area. Which partner drops and plays the next shot?",
    choices: [
      "The other partner — they must continue the alternating order of play",
      "The same partner who hit the tee shot",
      "Either partner may play the next shot after a penalty",
      "The partner with the lower handicap",
    ],
    correct: 0,
    rule: "Rule 22.3",
    explanation:
      "In Foursomes, the alternating order is never interrupted — even by penalties, drops, or relief situations. If Partner A hit the tee shot (stroke 1), and the ball is in a penalty area, Partner B must play the next stroke (stroke 3, counting the penalty stroke). The penalty stroke does not affect the alternation.",
    tags: ["foursomes", "alternate shot", "penalty area", "match play"],
  },

  // --- Rule 23: Four-Ball ---

  {
    id: "gen_ri20",
    category: "RESOLVING",
    tier: "weekend",
    text: "In a Four-Ball (Best Ball) competition, your partner picks up on a hole after making a triple bogey. Can you still finish the hole?",
    choices: [
      "Yes — in Four-Ball, each partner plays their own ball and either partner's score can count for the side",
      "No — both partners must stop once one picks up",
      "Yes, but your score for the hole cannot be better than your partner's",
      "Only in stroke play, not in match play",
    ],
    correct: 0,
    rule: "Rule 23.1",
    explanation:
      "In Four-Ball, each partner plays their own ball. The side's score for the hole is the lower score of the two partners. If one partner picks up or is disqualified from a hole, the other partner's score counts for the side. There is no requirement for both partners to hole out.",
    tags: ["four-ball", "best ball", "picking up"],
  },
  {
    id: "gen_ri21",
    category: "RESOLVING",
    tier: "competitor",
    text: "In a Four-Ball stroke play competition, one partner accidentally improves their lie. What is the effect on the other partner?",
    choices: [
      "Only the partner who breached the Rule is penalized — the other partner is not affected unless the breach also helped them",
      "Both partners are penalized equally",
      "The side is disqualified from the hole",
      "No penalty to either partner since it was accidental",
    ],
    correct: 0,
    rule: "Rule 23.8a",
    explanation:
      "In Four-Ball, a penalty for a breach of a Rule normally applies only to the partner who committed the breach. The other partner is not penalized unless the breach also assisted or affected their play (e.g., improving a shared line of play).",
    tags: ["four-ball", "best ball", "penalty", "stroke play"],
  },
  {
    id: "gen_ri22",
    category: "RESOLVING",
    tier: "official",
    text: "In a Four-Ball match play competition, one partner gives advice to an opponent. Who receives the penalty?",
    choices: [
      "The partner who gave advice receives the penalty (loss of hole), and the other partner is not penalized",
      "Both partners share the loss-of-hole penalty",
      "The side is disqualified from the match",
      "The opponents choose which player is penalized",
    ],
    correct: 0,
    rule: "Rule 23.8a, Rule 10.2a",
    explanation:
      "In Four-Ball, if one partner gives advice to an opponent (or another player outside their partnership), only that partner receives the penalty. In match play, this would be loss of hole. The other partner is not affected by their partner's breach.",
    tags: ["four-ball", "best ball", "match play", "advice"],
  },
  {
    id: "gen_ri23",
    category: "RESOLVING",
    tier: "competitor",
    text: "In a Four-Ball stroke play competition, both partners hole out on a hole. Partner A scores 4 and Partner B scores 5. What score does the side record?",
    choices: [
      "4 — the side records the lower score of the two partners",
      "9 — the combined total of both partners",
      "4.5 — the average of the two scores",
      "The side chooses which score to record",
    ],
    correct: 0,
    rule: "Rule 23.2a",
    explanation:
      "In Four-Ball (Best Ball), the side's score for each hole is the lower (better) score of the two partners. If only one partner holes out, that partner's score is the side's score. The side records 4 for this hole.",
    tags: ["four-ball", "best ball", "scoring", "stroke play"],
  },
  {
    id: "gen_ri24",
    category: "RESOLVING",
    tier: "official",
    text: "In a Four-Ball competition, one partner is disqualified from the entire round for a serious breach. What happens to the other partner?",
    choices: [
      "The other partner may continue playing alone — their individual scores count for the side on all remaining holes",
      "The side is disqualified from the competition",
      "The other partner may continue but receives a two-stroke penalty on each remaining hole",
      "The other partner may recruit a substitute",
    ],
    correct: 0,
    rule: "Rule 23.8b",
    explanation:
      "In Four-Ball, if one partner is disqualified, the other partner may continue as an individual, and their score counts for the side. Disqualification of one partner does not automatically disqualify the side — unless the breach is one that results in disqualification of the side (such as agreeing to ignore a Rule).",
    tags: ["four-ball", "disqualification", "best ball"],
  },

  // --- Rule 24: Team Competitions ---

  {
    id: "gen_ri25",
    category: "RESOLVING",
    tier: "competitor",
    text: "In a team match play competition, a team captain wants to give one of their team's players advice on club selection during the round. Is this allowed?",
    choices: [
      "Only if the Committee has authorized the captain as an advice-giver in the Terms of the Competition",
      "Yes — captains can always give advice to their team members",
      "No — no one outside the match can give advice",
      "Only between holes, not during play of a hole",
    ],
    correct: 0,
    rule: "Rule 24.4",
    explanation:
      "In team competitions, the Committee may allow each team to appoint a person (such as a captain) who may give advice to team members during the round. This is an exception to the normal advice rule. However, this must be specifically authorized by the Committee in the Terms of the Competition.",
    tags: ["match play", "team competition", "advice", "captain"],
  },
  {
    id: "gen_ri26",
    category: "RESOLVING",
    tier: "official",
    text: "In a team competition, the Committee has designated each team captain as an advice-giver. Can the captain also help read putting lines?",
    choices: [
      "Yes — an authorized advice-giver may give any advice a partner could give, including reading lines, but must follow the restrictions in Rule 10.2b",
      "No — reading putting lines is always restricted to the player and their caddie",
      "Only if the captain is standing off the green",
      "Only in stroke play team events, not match play",
    ],
    correct: 0,
    rule: "Rule 24.4, Rule 10.2b",
    explanation:
      "An authorized advice-giver in a team competition has the same rights as a partner — they may give advice and read lines. However, they must follow the same restrictions as any player: they cannot stand on an extension of the putting line behind the ball while the player takes their stance (Rule 10.2b(4)).",
    tags: ["team competition", "advice", "putting line", "captain"],
  },
  {
    id: "gen_ri27",
    category: "RESOLVING",
    tier: "weekend",
    text: "In match play, your opponent makes a stroke at a ball on the putting green and it hits the flagstick, which was left in the hole. Is there a penalty?",
    choices: [
      "No penalty — the flagstick may be left in or removed; hitting it is not a penalty",
      "Two-stroke penalty for hitting the flagstick from the putting green",
      "Loss of hole in match play",
      "No penalty, but the stroke must be replayed",
    ],
    correct: 0,
    rule: "Rule 13.2a(2)",
    explanation:
      "Under the current Rules (since 2019), there is no penalty if your ball hits the flagstick, regardless of whether you are on the putting green or not. The player may choose to leave the flagstick in, have it removed, or have it attended. There is no penalty in any case.",
    tags: ["match play", "flagstick", "putting"],
  },
  {
    id: "gen_ri28",
    category: "RESOLVING",
    tier: "official",
    text: "In stroke play, a player unknowingly breaches a Rule (carrying 15 clubs). A fellow competitor notices after the round but before the competition closes. What should the fellow competitor do?",
    choices: [
      "Inform the player or the Committee — all players have a responsibility to protect the field",
      "Nothing — it is not their responsibility to report another player's breach",
      "Notify the player but not the Committee",
      "File a formal protest before the next round",
    ],
    correct: 0,
    rule: "Rule 20.3a",
    explanation:
      "In stroke play, all players have a responsibility to protect the field. If a player knows about another player's breach, they should inform the player or the Committee. While there is no penalty for failing to report, players are expected to protect the integrity of the competition.",
    tags: ["stroke play", "committee", "penalty", "protecting the field"],
  },
  {
    id: "gen_ri29",
    category: "RESOLVING",
    tier: "competitor",
    text: "In stroke play, a player incurs a penalty but is not aware of it. They sign and return their scorecard without including the penalty strokes. Before the competition closes, the Committee learns of the breach. What happens?",
    choices: [
      "The Committee adds the penalty strokes to the player's score — the player is not disqualified because they were unaware of the penalty",
      "The player is disqualified for returning an incorrect scorecard",
      "The scorecard stands as signed — it cannot be changed",
      "The Committee can only act if a fellow competitor reports it",
    ],
    correct: 0,
    rule: "Rule 3.3b(3), Exception",
    explanation:
      "If a player did not know about a penalty before returning their scorecard, the Committee adds the penalty strokes to the score. The player is NOT disqualified for the incorrect card, because there is an exception when the player was not aware of the penalty. This applies only before the competition is closed.",
    tags: ["scoring", "stroke play", "committee", "penalty", "disqualification"],
  },
  {
    id: "gen_ri30",
    category: "RESOLVING",
    tier: "official",
    text: "In stroke play, a player accidentally moves their ball on the putting green and replaces it (no penalty under the Rules). However, they did not know this and added a penalty stroke to their score. They return the card with the extra stroke included. What happens?",
    choices: [
      "The higher score stands — even though the penalty stroke was incorrectly self-assessed, the Committee does not reduce a signed hole score",
      "The Committee corrects the score by removing the phantom penalty",
      "The player is disqualified for not knowing the Rules",
      "The player may request a correction before the competition closes",
    ],
    correct: 0,
    rule: "Rule 3.3b(3)",
    explanation:
      "Once a scorecard is signed and returned, if a hole score is higher than the actual score (including self-assessed penalties that should not have applied), the higher score stands. The Committee cannot reduce a hole score that has been returned, even if a penalty was incorrectly included by the player.",
    tags: ["scoring", "stroke play", "scorecard", "self-assessed penalty"],
  },
];
