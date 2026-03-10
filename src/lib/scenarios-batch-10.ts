import { Scenario } from "@/types";

export const SCENARIOS_BATCH_10: Scenario[] = [
  // =====================================================================
  // RULE 14 — Procedures for Ball: Marking, Lifting, Cleaning,
  //           Dropping, Placing (LIFTING_RETURNING) — 35 scenarios
  // =====================================================================

  // --- Rule 14.1: Marking, Lifting, and Replacing ---

  {
    id: "b10_001",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "You want to lift your ball in the fairway to identify it. Must you mark the spot before lifting?",
    choices: [
      "Yes — you must always mark the spot before lifting your ball",
      "No — marking is only required on the putting green",
      "No — you only need to mark when another player asks you to",
      "Yes, but only if you are in a bunker or penalty area",
    ],
    correct: 0,
    rule: "Rule 14.1a",
    explanation:
      "Under Rule 14.1a, before lifting a ball that must be replaced, the player must mark the spot. This applies everywhere on the course, not just on the putting green. Failure to mark before lifting results in one penalty stroke.",
    tags: ["marking", "lifting", "identification", "general area"],
  },
  {
    id: "b10_002",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "Who is allowed to lift your ball when it needs to be lifted under a Rule?",
    choices: [
      "Only you — no one else may touch your ball",
      "Only you or anyone you authorize",
      "You, your caddie, or your playing partner",
      "Anyone in the group, without needing authorization",
    ],
    correct: 1,
    rule: "Rule 14.1b",
    explanation:
      "Under Rule 14.1b, your ball may be lifted by you or by anyone you authorize. Your caddie may also lift your ball on the putting green without your specific authorization. No one else may lift it without your permission.",
    tags: ["lifting", "authorization", "caddie"],
  },
  {
    id: "b10_003",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "You lift your ball from the fairway to take free relief from a cart path, but you forget to mark its position before lifting. What is the penalty?",
    choices: [
      "No penalty — marking is not required when the ball will be dropped in a relief area rather than replaced",
      "One penalty stroke for failing to mark",
      "Two penalty strokes",
      "No penalty, but you must replace the ball and re-mark before dropping",
    ],
    correct: 0,
    rule: "Rule 14.1a",
    explanation:
      "Under Rule 14.1a, the spot must be marked before lifting only when the ball 'must be replaced.' When taking relief by dropping in a relief area, the ball is not being replaced on its original spot — it is being dropped in a new location. Therefore, marking the original spot is not required and there is no penalty for failing to do so.",
    tags: ["marking", "lifting", "relief", "cart path"],
  },
  {
    id: "b10_004",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "You lift your ball on the putting green to clean it. Are you allowed to clean the ball?",
    choices: [
      "No — you may only clean it if there is mud on it",
      "Yes, but only if you also repair ball marks",
      "Yes — a ball lifted from the putting green may always be cleaned",
      "No — cleaning is never permitted when lifting on the green",
    ],
    correct: 2,
    rule: "Rule 14.1c",
    explanation:
      "Under Rule 14.1c, a ball lifted from the putting green may always be cleaned. In fact, a ball lifted under most Rules may be cleaned. The only exception is when the ball is lifted to see if it is cut or cracked (Rule 4.2c(1)), to identify it (Rule 7.3), or because it interferes with play (Rule 15.3b(2)) — in those cases, cleaning is limited.",
    tags: ["cleaning", "putting green", "lifting"],
  },
  {
    id: "b10_005",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "You lift your ball to identify it in the rough. How much cleaning is permitted?",
    choices: [
      "Full cleaning is always allowed when you lift the ball",
      "No cleaning at all — you must identify it as-is",
      "You may clean one side of the ball only",
      "Only enough cleaning to identify it — no more",
    ],
    correct: 3,
    rule: "Rule 7.3",
    explanation:
      "Under Rule 7.3, when lifting a ball to identify it, the player may clean the ball only as much as needed to identify it. If the ball is cleaned beyond what is necessary for identification, the player gets one penalty stroke.",
    tags: ["identification", "cleaning", "lifting", "rough"],
  },
  {
    id: "b10_006",
    category: "LIFTING_RETURNING",
    tier: "official",
    text: "Your caddie lifts your ball from the putting green without your authorization and without marking it first. How many penalty strokes do you get?",
    choices: [
      "No penalty — caddies may lift on the green without authorization",
      "Two penalty strokes — one for no authorization, one for no mark",
      "No penalty, but the caddie receives a warning",
      "One penalty stroke — for failing to mark before lifting",
    ],
    correct: 3,
    rule: "Rule 14.1b",
    explanation:
      "Under Rule 14.1b, a player's caddie may lift the ball on the putting green without the player's specific authorization. However, Rule 14.1a still requires the spot to be marked before lifting. Since the caddie failed to mark the spot, the player gets one penalty stroke for breaching Rule 14.1a.",
    tags: ["caddie", "putting green", "marking", "penalty"],
  },

  // --- Rule 14.2: Dropping Ball in a Relief Area ---

  {
    id: "b10_007",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "When dropping a ball for relief, from what height must you drop it?",
    choices: [
      "Knee height",
      "Shoulder height",
      "Waist height",
      "Any height, as long as it falls straight down",
    ],
    correct: 0,
    rule: "Rule 14.3b(2)",
    explanation:
      "Under Rule 14.3b(2), the ball must be dropped from knee height, meaning the height of the player's knee when standing. This rule was changed from shoulder height starting in 2019. The ball must be dropped straight down without any spin or direction given to it.",
    tags: ["dropping", "knee height", "relief area"],
  },
  {
    id: "b10_008",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "You are taking free relief from a cart path. Who must drop the ball?",
    choices: [
      "You or your caddie",
      "Anyone in your group",
      "Only you — the player must drop the ball themselves",
      "You or anyone you authorize",
    ],
    correct: 2,
    rule: "Rule 14.3b",
    explanation:
      "Under Rule 14.3b, only the player may drop a ball. This is different from lifting and placing, where the player may authorize someone else. If anyone other than the player drops the ball, it must be re-dropped, and if the error is not corrected before making a stroke, the player gets one penalty stroke.",
    tags: ["dropping", "player only", "cart path", "relief"],
  },
  {
    id: "b10_009",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "You drop a ball from knee height in a relief area, but the ball rolls outside the relief area. What do you do?",
    choices: [
      "Play it from where it came to rest outside the relief area",
      "Place the ball at the edge of the relief area",
      "Drop again from shoulder height to reduce rolling",
      "Drop again — the ball must come to rest in the relief area",
    ],
    correct: 3,
    rule: "Rule 14.3c(1)",
    explanation:
      "Under Rule 14.3c(1), a dropped ball must come to rest in the relief area. If it rolls outside the relief area, the player must drop again. If the second drop also rolls outside the relief area, the player must then place the ball on the spot where the second drop first touched the ground (Rule 14.3c(2)).",
    tags: ["dropping", "relief area", "rolling", "re-drop"],
  },
  {
    id: "b10_010",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "You drop a ball in a relief area. It lands in the relief area but rolls and comes to rest nearer to the hole than the nearest point of complete relief. What must you do?",
    choices: [
      "Play it from where it lies since it landed in the relief area",
      "Drop again — the ball must come to rest in the relief area, which by definition is not nearer the hole",
      "Place it at the nearest point of complete relief",
      "Take a one-stroke penalty and re-drop",
    ],
    correct: 1,
    rule: "Rule 14.3c(1)",
    explanation:
      "The relief area is defined as being not nearer the hole than the reference point (nearest point of complete relief). If the ball rolls to a spot nearer the hole than that reference point, it has rolled outside the relief area. The player must drop again. If the second drop also rolls outside the relief area, the ball is placed where the second drop first touched the ground.",
    tags: ["dropping", "nearer the hole", "relief area", "re-drop"],
  },
  {
    id: "b10_011",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "You drop a ball and it accidentally hits your foot before coming to rest in the relief area. What is the ruling?",
    choices: [
      "No penalty — the drop counts as long as the ball comes to rest in the relief area",
      "One penalty stroke; you must re-drop",
      "Two penalty strokes; play the ball as it lies",
      "The drop does not count; you must re-drop without penalty",
    ],
    correct: 0,
    rule: "Rule 14.3c(1)",
    explanation:
      "Under Rule 14.3c(1), there is no penalty if a dropped ball accidentally hits the player or their equipment. As long as the ball comes to rest in the relief area, the drop is valid. The 2023 Rules removed the previous requirement to re-drop when the ball hits the player.",
    tags: ["dropping", "hits player", "relief area", "no penalty"],
  },
  {
    id: "b10_012",
    category: "FREE_RELIEF",
    tier: "official",
    text: "You drop the ball twice and both times it rolls out of the relief area. What happens next?",
    choices: [
      "Drop a third time",
      "Place the ball at the nearest point of complete relief",
      "You must play the ball from outside the relief area",
      "Place the ball on the spot where the second drop first touched the ground",
    ],
    correct: 3,
    rule: "Rule 14.3c(2)",
    explanation:
      "Under Rule 14.3c(2), if a ball dropped a second time also rolls out of the relief area, the player must place the ball on the spot where the ball first touched the ground on the second drop. This ensures the player can always complete the relief procedure.",
    tags: ["dropping", "placing", "two drops", "relief area"],
  },
  {
    id: "b10_013",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "You drop a ball but intentionally throw it with spin to keep it in the relief area. What is the ruling?",
    choices: [
      "The drop does not count; you must re-drop correctly without penalty",
      "One penalty stroke; play the ball as it lies",
      "Two penalty strokes for intentional spinning",
      "No penalty as long as the ball stays in the relief area",
    ],
    correct: 0,
    rule: "Rule 14.3b(2)",
    explanation:
      "Under Rule 14.3b(2), the ball must be dropped straight down from knee height without the player throwing, spinning, or rolling it, and without any other deliberate action to affect where the ball comes to rest. If dropped incorrectly, the drop does not count. The player must re-drop correctly. If the player does not correct the error and makes a stroke, they get one penalty stroke.",
    tags: ["dropping", "spinning", "incorrect drop", "re-drop"],
  },
  {
    id: "b10_014",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "You are taking relief and must drop in a relief area measured as one club-length from the nearest point of complete relief. Which club can you use to measure?",
    choices: [
      "Only the club you intend to use for your next stroke",
      "Any club in your bag, including the putter",
      "The longest club in your bag, except your putter",
      "A standard 48-inch club provided by the Committee",
    ],
    correct: 2,
    rule: "Rule 14.3b(1)",
    explanation:
      "Under the Definitions section for 'club-length,' a club-length is measured using the longest club in the player's bag other than the putter. This means you always use your longest non-putter club (typically the driver) to measure relief areas.",
    tags: ["club-length", "measuring", "relief area", "driver"],
  },

  // --- Rule 14.3: Placing Ball ---

  {
    id: "b10_015",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "After the second drop rolls out of the relief area, you must place the ball. Who may place it?",
    choices: [
      "Only you — just like dropping",
      "You or anyone you authorize",
      "Only you or your caddie",
      "Anyone in the group",
    ],
    correct: 1,
    rule: "Rule 14.2b",
    explanation:
      "Under Rule 14.2b, a ball may be placed by the player or by anyone the player authorizes. This differs from dropping, where only the player may drop. Placing is more flexible because the exact spot is already determined.",
    tags: ["placing", "authorization", "relief area"],
  },
  {
    id: "b10_016",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "You replace your ball on its original spot after lifting, but it will not stay at rest on that spot. What is the correct procedure?",
    choices: [
      "Keep trying until it stays — there is no limit on attempts",
      "Try to replace it a second time; if it still won't stay, place it on the nearest spot where it will stay at rest",
      "Press the ball into the ground until it stays at rest",
      "Drop the ball from knee height on the spot",
    ],
    correct: 1,
    rule: "Rule 14.2e",
    explanation:
      "Under Rule 14.2e, if a ball will not stay at rest on its required spot, the player must try a second time. If it still does not stay at rest, the player must place the ball on the nearest spot where it will stay at rest, subject to certain restrictions based on the area of the course (e.g., no nearer the hole on the putting green).",
    tags: ["replacing", "ball won't stay", "nearest spot"],
  },
  {
    id: "b10_017",
    category: "LIFTING_RETURNING",
    tier: "official",
    text: "On the putting green, you replace your ball but it will not stay at rest on the spot. After trying twice, where must you place it?",
    choices: [
      "On the nearest spot where it stays at rest, not nearer the hole and not in a different area of the course",
      "Anywhere on the putting green that is not nearer the hole",
      "On the nearest spot regardless of whether it is nearer the hole",
      "At the nearest point off the green where it stays at rest",
    ],
    correct: 0,
    rule: "Rule 14.2e",
    explanation:
      "Under Rule 14.2e, when a ball on the putting green will not stay at rest after two attempts, the player must place it on the nearest spot where it will stay at rest that is (1) not nearer the hole and (2) not in a different area of the course (i.e., it must stay on the putting green if the original spot was on the putting green, unless the nearest qualifying spot is in the general area).",
    tags: ["putting green", "ball won't stay", "nearest spot", "not nearer hole"],
  },
  {
    id: "b10_018",
    category: "LIFTING_RETURNING",
    tier: "official",
    text: "In the general area, you must replace your ball but it won't stay on the original spot even after two attempts. The nearest spot where it will stay at rest is in a bunker. Where do you place it?",
    choices: [
      "On the nearest spot in the general area where the ball will stay at rest, not in a different area of the course like a bunker",
      "In the bunker — that is the nearest spot",
      "Drop from knee height on the original spot",
      "On the nearest spot on the putting green",
    ],
    correct: 0,
    rule: "Rule 14.2e",
    explanation:
      "Under Rule 14.2e, when a ball in the general area will not stay at rest, the player must place it on the nearest spot where it will stay at rest. However, the spot must be in the same area of the course. Since the original spot was in the general area, the ball cannot be placed in a bunker (which is a different area). The player must find the nearest spot in the general area where it stays at rest.",
    tags: ["general area", "ball won't stay", "bunker", "same area"],
  },

  // --- Rule 14.4: When Ball Comes Back into Play ---

  {
    id: "b10_019",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "You lift your ball on the putting green and set it aside. At what point does the ball become a ball in play again?",
    choices: [
      "When you intend to make your next stroke",
      "Immediately after lifting — it never stops being in play",
      "When you address the ball after replacing it",
      "When it is replaced on the spot from which it was lifted",
    ],
    correct: 3,
    rule: "Rule 14.4",
    explanation:
      "Under Rule 14.4, a ball that has been lifted is no longer in play. It becomes the ball in play again when it is replaced on its original spot. Until replaced, it is not a ball in play, and the Rules that apply to a ball in play do not apply to it.",
    tags: ["ball in play", "lifting", "replacing", "putting green"],
  },

  // --- Rule 14.5: Correcting Mistake ---

  {
    id: "b10_020",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "You take relief from a cart path but realize you dropped the ball outside the relief area. You have not yet made a stroke. Can you correct this?",
    choices: [
      "No — once dropped, you must play it from there",
      "Yes, but with a one-stroke penalty",
      "Yes — you may correct the error without penalty by re-dropping in the correct relief area",
      "Only if your fellow competitor agrees",
    ],
    correct: 2,
    rule: "Rule 14.5b",
    explanation:
      "Under Rule 14.5b, before making a stroke, a player may correct a mistake in substituting, replacing, dropping, or placing a ball without penalty. The player must drop (or place) the ball in the correct way. If the player makes a stroke without correcting, they are playing from a wrong place under Rule 14.7.",
    tags: ["correcting mistake", "re-drop", "wrong place", "no penalty"],
  },
  {
    id: "b10_021",
    category: "LIFTING_RETURNING",
    tier: "official",
    text: "You accidentally substituted a different ball when replacing your ball on the putting green. You realize this after making a stroke. What is the penalty?",
    choices: [
      "One penalty stroke under Rule 6.3b for substituting when not allowed, and you must correct the error",
      "No penalty — any ball can be substituted at any time",
      "Two penalty strokes and you must replay with the original ball",
      "Disqualification for using a wrong ball",
    ],
    correct: 0,
    rule: "Rule 6.3b",
    explanation:
      "Under Rule 6.3b, if a player substitutes a ball when not allowed (replacing requires using the original ball), the player gets one penalty stroke. The substituted ball becomes the ball in play even if the player replaces it on a wrong spot or in a wrong way. If the player realizes before making a stroke, they can correct the error under Rule 14.5.",
    tags: ["substitution", "replacing", "wrong ball", "penalty"],
  },

  // --- Rule 14.6: Making Next Stroke from Where Previous Stroke Was Made ---

  {
    id: "b10_022",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "You hit your tee shot out of bounds and must play again under stroke and distance. Where do you play the next stroke from?",
    choices: [
      "From the exact spot where you teed it up before",
      "From within the teeing area — you may re-tee the ball",
      "From a spot one club-length behind the teeing area",
      "From wherever you find the ball near the boundary",
    ],
    correct: 1,
    rule: "Rule 14.6a",
    explanation:
      "Under Rule 14.6a, when playing from the teeing area (stroke and distance for an OB ball), the player may play from anywhere within the teeing area, including teeing the ball up. The player is not required to play from the exact same spot.",
    tags: ["stroke and distance", "out of bounds", "teeing area", "re-tee"],
  },
  {
    id: "b10_023",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "You hit your approach shot from the fairway into a penalty area and decide to take stroke-and-distance relief. How do you replay from the fairway?",
    choices: [
      "Place a ball on the exact spot of the previous stroke",
      "Drop a ball within one club-length of where the previous stroke was made, not nearer the hole",
      "Drop from shoulder height on the previous spot",
      "Tee up a ball on the previous spot since it was in the fairway",
    ],
    correct: 1,
    rule: "Rule 14.6b",
    explanation:
      "Under Rule 14.6b, when the previous stroke was made from the general area (including the fairway), the player must drop the original ball or a substituted ball in a relief area: within one club-length of the spot where the previous stroke was made, in the general area, and not nearer the hole.",
    tags: ["stroke and distance", "general area", "dropping", "penalty area"],
  },

  // --- Rule 14.7: Playing from Wrong Place ---

  {
    id: "b10_024",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "In stroke play, you take free relief from a sprinkler head but accidentally drop the ball two club-lengths away instead of one. You play the ball. What is the penalty?",
    choices: [
      "One penalty stroke",
      "No penalty if the ball was still near the sprinkler head",
      "Two penalty strokes for playing from a wrong place",
      "Disqualification",
    ],
    correct: 2,
    rule: "Rule 14.7a",
    explanation:
      "Under Rule 14.7a, if a player plays a ball from a wrong place in stroke play, the player gets the general penalty (two penalty strokes). The player must also determine whether there was a serious breach — if so, the player must correct the error by playing from the right place; otherwise, the player continues with the ball played from the wrong place.",
    tags: ["wrong place", "general penalty", "stroke play", "relief"],
  },
  {
    id: "b10_025",
    category: "LIFTING_RETURNING",
    tier: "official",
    text: "In stroke play, you play from a wrong place and it constitutes a serious breach. You do not correct the error before playing from the next teeing area. What is the result?",
    choices: [
      "Disqualification",
      "Four penalty strokes (two for wrong place, two for not correcting)",
      "Two penalty strokes only — correction is optional",
      "You must go back and replay the hole, adding two strokes",
    ],
    correct: 0,
    rule: "Rule 14.7b",
    explanation:
      "Under Rule 14.7b, if a player plays from a wrong place and it is a serious breach, the player must correct the error before making a stroke on the next hole (or, on the final hole, before returning the scorecard). Failure to correct a serious breach results in disqualification.",
    tags: ["wrong place", "serious breach", "disqualification", "stroke play"],
  },
  {
    id: "b10_026",
    category: "LIFTING_RETURNING",
    tier: "official",
    text: "In match play, you play from a wrong place. What is the penalty?",
    choices: [
      "No penalty under the Rules for wrong place in match play — but your opponent may cancel the stroke if it was made from a significantly wrong place",
      "Loss of hole",
      "Two penalty strokes",
      "One penalty stroke and the opponent may require you to replay",
    ],
    correct: 1,
    rule: "Rule 14.7a",
    explanation:
      "Under Rule 14.7a, in match play, a player who plays from a wrong place gets the general penalty, which is loss of hole. There is no option to correct the error — the hole is lost. This is a significant difference from stroke play, where the penalty is two strokes and the player may continue.",
    tags: ["wrong place", "match play", "loss of hole", "general penalty"],
  },

  // --- More Rule 14 scenarios ---

  {
    id: "b10_027",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "You are dropping a ball for relief. Can you use a substituted ball instead of the original?",
    choices: [
      "No — you must use the original ball whenever it is recoverable",
      "Only if the original ball is damaged",
      "Only with the Committee's permission",
      "Yes — you may always substitute a ball when taking relief by dropping",
    ],
    correct: 3,
    rule: "Rule 14.3a",
    explanation:
      "Under Rule 14.3a, when taking relief by dropping or placing in a relief area, the player may use the original ball or another (substituted) ball. There is no requirement to use the original ball when taking relief.",
    tags: ["substitution", "dropping", "relief", "another ball"],
  },
  {
    id: "b10_028",
    category: "FREE_RELIEF",
    tier: "official",
    text: "You drop a ball from knee height. It strikes the ground in the relief area, bounces up, and is deflected by a tree branch before coming to rest in the relief area. Is this a valid drop?",
    choices: [
      "Yes — the drop is valid as long as the ball comes to rest in the relief area",
      "No — the ball must not touch anything before coming to rest",
      "No — you must re-drop because the ball was deflected",
      "Yes, but only if the tree branch is within the relief area",
    ],
    correct: 0,
    rule: "Rule 14.3c(1)",
    explanation:
      "Under Rule 14.3c(1), a properly dropped ball is in play if it comes to rest in the relief area. There is no requirement that the ball avoid touching objects after being dropped. The ball may bounce off the ground, hit equipment, a tree, or any other object — as long as it ultimately comes to rest within the relief area, the drop is valid.",
    tags: ["dropping", "deflection", "tree", "relief area", "valid drop"],
  },
  {
    id: "b10_029",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "You mark and lift your ball on the putting green. Before replacing it, you accidentally drop your ball marker so it moves to a new spot. What should you do?",
    choices: [
      "Replace the ball on its original estimated spot — you know where it was",
      "Place the ball where the marker now lies",
      "Take a one-stroke penalty and replace the ball on the estimated original spot",
      "Re-mark the ball from its current marker position",
    ],
    correct: 0,
    rule: "Rule 14.1a",
    explanation:
      "If the ball marker is accidentally moved, the player should replace the ball on its original spot (estimated if necessary). There is no penalty for accidentally moving a ball marker, similar to Rule 13.1d(2) on the putting green, but the player must replace the ball on the correct spot.",
    tags: ["ball marker", "moved marker", "putting green", "replacing"],
  },
  {
    id: "b10_030",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "Your ball is embedded in the sand on the floor of a bunker. Are you entitled to embedded ball relief?",
    choices: [
      "Yes — embedded ball relief applies anywhere in the general area, including bunkers",
      "Yes — but you must drop within the bunker",
      "No — embedded ball relief only applies in the general area, and a bunker is not part of the general area",
      "Yes — but only if the Committee has adopted a Local Rule allowing it",
    ],
    correct: 2,
    rule: "Rule 16.3a",
    explanation:
      "Under Rule 16.3a, free relief for an embedded ball is only available when the ball is embedded in the general area. A bunker is a separate defined area of the course, not part of the general area. Therefore, no embedded ball relief is available in a bunker. The player must play the ball as it lies or take unplayable ball relief under Rule 19. Note: the earthen walls and stacked turf faces above the sand ARE part of the general area, so embedded ball relief would be available there.",
    tags: ["embedded ball", "bunker", "no relief", "general area only"],
  },
  {
    id: "b10_031",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "You want to lift your ball to check if it is cut or cracked. May you clean the ball while it is lifted?",
    choices: [
      "Yes — you may fully clean the ball any time you lift it",
      "Only if you are on the putting green",
      "No — you may not clean it beyond what is needed for inspection",
      "Yes, but only the damaged area",
    ],
    correct: 2,
    rule: "Rule 4.2c(1)",
    explanation:
      "Under Rule 4.2c(1), when lifting a ball to determine if it is cut or cracked, the player must not clean the ball (except to the extent needed to see if it is damaged). This is one of the exceptions to the general rule that a lifted ball may be cleaned.",
    tags: ["cleaning", "cut ball", "cracked ball", "inspection"],
  },
  {
    id: "b10_032",
    category: "LIFTING_RETURNING",
    tier: "official",
    text: "You drop a ball for relief but accidentally drop it from waist height instead of knee height. The ball comes to rest in the relief area. You realize the error before making a stroke. What must you do?",
    choices: [
      "The drop does not count — pick it up and re-drop from knee height without penalty",
      "Play the ball — the height does not matter if it's in the relief area",
      "Take a one-stroke penalty and play it as it lies",
      "Place the ball where it came to rest since it is in the relief area",
    ],
    correct: 0,
    rule: "Rule 14.3b(2)",
    explanation:
      "Under Rule 14.3b(2), the ball must be dropped from knee height. If the ball is dropped in a wrong way (such as from the wrong height), the drop does not count. The player must re-drop correctly. There is no penalty as long as the error is corrected before making a stroke (Rule 14.5b).",
    tags: ["dropping", "wrong height", "knee height", "re-drop"],
  },
  {
    id: "b10_033",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "After taking relief by dropping, you pick up your ball before making a stroke because you don't like the lie. You want to re-drop. Is this allowed?",
    choices: [
      "Yes — you may re-drop as many times as you like",
      "No — once the ball is properly dropped and at rest in the relief area, it is in play. Lifting it without a Rule permitting it results in one penalty stroke.",
      "Yes — but you must place it instead of dropping",
      "Yes, but with a one-stroke penalty for each additional drop",
    ],
    correct: 1,
    rule: "Rule 9.4",
    explanation:
      "Once a ball has been properly dropped and comes to rest in the relief area, it is in play (Rule 14.4). If the player lifts the ball without a Rule permitting it, the player gets one penalty stroke under Rule 9.4 and must replace the ball. There is no right to re-drop simply because the player dislikes the resulting lie.",
    tags: ["ball in play", "lifting without authority", "bad lie", "penalty"],
  },
  {
    id: "b10_034",
    category: "FREE_RELIEF",
    tier: "official",
    text: "You are taking back-on-the-line relief under a penalty area Rule. You drop the ball and it rolls forward (toward the hole) but stays on the line. Is this a valid drop?",
    choices: [
      "No — the ball must not come to rest nearer the hole than the reference point on the line where it was dropped",
      "Yes — the ball can roll in any direction as long as it stays within one club-length",
      "Yes — there is no 'not nearer the hole' restriction for back-on-the-line relief",
      "No — the ball must roll backward away from the hole",
    ],
    correct: 0,
    rule: "Rule 14.3c(1)",
    explanation:
      "Under back-on-the-line relief, the reference point is the spot on the line where the ball is dropped. The relief area extends one club-length in any direction from that reference point, but must not be nearer the hole than the reference point. If the ball rolls nearer the hole than the spot where it was dropped, it is outside the relief area and must be re-dropped.",
    tags: ["back-on-the-line", "nearer the hole", "penalty area", "relief area"],
  },
  {
    id: "b10_035",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "You take lateral relief from a red penalty area. After dropping, the ball rolls back into the penalty area. What do you do?",
    choices: [
      "Play the ball from the penalty area without penalty",
      "Take one additional penalty stroke and drop again",
      "Place the ball at the edge of the penalty area",
      "Drop again — the ball rolled outside the relief area (back into the penalty area)",
    ],
    correct: 3,
    rule: "Rule 14.3c(1)",
    explanation:
      "The relief area for lateral relief from a penalty area is in the general area, not in the penalty area. If the dropped ball rolls back into the penalty area, it has rolled outside the relief area. The player must drop again. If the second drop also rolls into the penalty area, the player places the ball where the second drop first touched the ground (Rule 14.3c(2)).",
    tags: ["lateral relief", "penalty area", "rolling back", "re-drop"],
  },

  // =====================================================================
  // RULE 15 — Relief from Loose Impediments and Movable Obstructions
  // ~20 scenarios
  // =====================================================================

  // --- Rule 15.1: Loose Impediments ---

  {
    id: "b10_036",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "Which of the following is a loose impediment?",
    choices: [
      "A sprinkler head embedded in the ground",
      "A boundary fence post",
      "A fallen leaf lying near your ball in the fairway",
      "Dew on the grass around your ball",
    ],
    correct: 2,
    rule: "Rule 15.1",
    explanation:
      "Under the Definitions, a loose impediment is any unattached natural object such as stones, loose grass, leaves, branches, insects, and worms. A sprinkler head is an immovable obstruction (artificial), a boundary fence is a boundary object (not an obstruction), and dew is not a loose impediment.",
    tags: ["loose impediment", "definition", "natural object"],
  },
  {
    id: "b10_037",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "You remove a loose twig near your ball in the rough, and your ball moves as a result. What is the ruling?",
    choices: [
      "No penalty; replace the ball",
      "One penalty stroke; you must replace the ball on its original spot",
      "No penalty; play the ball from its new position",
      "Two penalty strokes; replace the ball",
    ],
    correct: 1,
    rule: "Rule 15.1b",
    explanation:
      "Under Rule 15.1b, if removing a loose impediment causes the player's ball to move anywhere except on the putting green, the player gets one penalty stroke and must replace the ball. On the putting green, there is no penalty if the ball moves while removing a loose impediment (Rule 13.1d(2)).",
    tags: ["loose impediment", "ball moved", "penalty", "rough"],
  },
  {
    id: "b10_038",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "Your ball is on the putting green. You brush away a small leaf and your ball moves. What is the ruling?",
    choices: [
      "No penalty; replace the ball on its original spot",
      "One penalty stroke; replace the ball",
      "No penalty; play the ball from its new position",
      "One penalty stroke; play from the new position",
    ],
    correct: 0,
    rule: "Rule 15.1b (Exception)",
    explanation:
      "Under Rule 15.1b, there is an exception: on the putting green, if the player's ball moves while removing a loose impediment, there is no penalty. The ball must be replaced on its original spot (or estimated spot). This exception exists because balls on the green are more likely to move from minor disturbances.",
    tags: ["loose impediment", "putting green", "ball moved", "no penalty"],
  },
  {
    id: "b10_039",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "Your ball lies in a bunker. May you remove loose impediments (such as leaves and twigs) from the bunker?",
    choices: [
      "No — you may not touch or remove loose impediments in a bunker",
      "Only if the loose impediment is not touching the sand",
      "Only if the loose impediment is within one club-length of your ball",
      "Yes — loose impediments may be removed anywhere on the course, including in bunkers",
    ],
    correct: 3,
    rule: "Rule 15.1a",
    explanation:
      "Under Rule 15.1a, a player may remove a loose impediment anywhere on the course without penalty, including in bunkers and penalty areas. The old rule prohibiting removal of loose impediments in bunkers was eliminated starting in 2019.",
    tags: ["loose impediment", "bunker", "removal", "no penalty"],
  },
  {
    id: "b10_040",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "Is sand on the putting green considered a loose impediment that you can remove?",
    choices: [
      "No — sand is never a loose impediment",
      "Yes — sand and loose soil on the putting green may be removed as loose impediments",
      "Only if it was placed there by another player",
      "Only if it is in your line of play",
    ],
    correct: 1,
    rule: "Rule 15.1a",
    explanation:
      "Under the Definitions, sand and loose soil are loose impediments only when on the putting green. On the putting green, a player may remove sand and loose soil without penalty. Off the putting green, sand and loose soil are not loose impediments and may not be removed.",
    tags: ["sand", "loose impediment", "putting green", "removal"],
  },
  {
    id: "b10_041",
    category: "LIFTING_RETURNING",
    tier: "official",
    text: "A large tree branch has broken off and is lying across the fairway, partially resting on your ball. May you remove the branch?",
    choices: [
      "Yes — a detached branch is a loose impediment and may be removed, even if it moves your ball (but there may be a penalty if the ball moves)",
      "No — if it is touching your ball, it becomes a fixed natural object",
      "Only if you can remove it without moving the ball",
      "No — branches larger than 6 inches in diameter are not loose impediments",
    ],
    correct: 0,
    rule: "Rule 15.1a",
    explanation:
      "Under Rule 15.1a, a player may remove any loose impediment without penalty. A detached branch, no matter how large, is a loose impediment as long as it is not growing, solidly embedded, or attached. You may remove it, but if your ball moves as a result (outside the putting green), you get one penalty stroke under Rule 15.1b and must replace the ball.",
    tags: ["loose impediment", "large branch", "ball moved", "fairway"],
  },
  {
    id: "b10_042",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "A live insect is sitting on your ball in the fairway. Can you remove the insect?",
    choices: [
      "Yes — insects are loose impediments and may be removed without penalty",
      "No — a living creature attached to your ball is not a loose impediment",
      "Only if it is interfering with your ability to identify the ball",
      "Yes, but only with permission from a Rules official",
    ],
    correct: 0,
    rule: "Rule 15.1a",
    explanation:
      "Under the Definitions, loose impediments include insects and similar animals. A live insect on or near your ball is a loose impediment and may be removed without penalty under Rule 15.1a. If the ball moves when removing the insect (outside the putting green), there is a one-stroke penalty and the ball must be replaced.",
    tags: ["loose impediment", "insect", "living creature", "removal"],
  },
  {
    id: "b10_043",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "A half-eaten apple core is lying next to your ball. Is this a loose impediment or a movable obstruction?",
    choices: [
      "A movable obstruction — once detached fruit has been partially altered or manufactured, it becomes an artificial object",
      "A loose impediment — it is still a natural object",
      "Neither — it is refuse and cannot be moved",
      "It depends on whether it is touching your ball",
    ],
    correct: 1,
    rule: "Rule 15.1",
    explanation:
      "Under the Definitions, loose impediments are natural objects not fixed, growing, or solidly embedded. Fruit, even if partially eaten, remains a natural object and is therefore a loose impediment, not a movable obstruction. Movable obstructions are artificial (man-made) objects.",
    tags: ["loose impediment", "natural object", "fruit", "definition"],
  },

  // --- Rule 15.2: Movable Obstructions ---

  {
    id: "b10_044",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "A rake is lying in a bunker behind your ball. May you move the rake?",
    choices: [
      "No — you cannot move anything in a bunker before making your stroke",
      "Yes — a rake is a movable obstruction and can be moved without penalty anywhere on the course",
      "Yes, but only if it is within two club-lengths of your ball",
      "Only with your opponent's or fellow competitor's permission",
    ],
    correct: 1,
    rule: "Rule 15.2a",
    explanation:
      "Under Rule 15.2a, a movable obstruction (such as a rake, bottle, or towel) may be removed without penalty anywhere on the course, including in bunkers and penalty areas. If the ball moves while removing the movable obstruction, the ball must be replaced without penalty.",
    tags: ["movable obstruction", "rake", "bunker", "removal"],
  },
  {
    id: "b10_045",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball is resting against a movable distance marker (a small post you can pull out of the ground). You remove the marker and the ball moves. What is the ruling?",
    choices: [
      "No penalty; replace the ball on its original spot",
      "One penalty stroke; replace the ball",
      "No penalty; play the ball from its new position",
      "One penalty stroke; play from the new position",
    ],
    correct: 0,
    rule: "Rule 15.2a(2)",
    explanation:
      "Under Rule 15.2a(2), if a ball moves when a movable obstruction is removed, there is no penalty and the ball must be replaced on its original spot (estimated if necessary). This differs from loose impediments, where a one-stroke penalty applies if the ball moves off the putting green.",
    tags: ["movable obstruction", "ball moved", "no penalty", "replace"],
  },
  {
    id: "b10_046",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball lies in a red penalty area, and a movable bench is interfering with your stance. Can you move the bench?",
    choices: [
      "No — you cannot take relief from obstructions in a penalty area",
      "Only if the Committee has authorized it",
      "Yes, but only if the bench is within one club-length of your ball",
      "Yes — movable obstructions can be removed anywhere, including in penalty areas",
    ],
    correct: 3,
    rule: "Rule 15.2a",
    explanation:
      "Under Rule 15.2a, a movable obstruction may be removed without penalty anywhere on the course, including in penalty areas. This is different from immovable obstructions, where no relief is available in penalty areas under Rule 16.1e. The key distinction is that movable obstructions can simply be moved out of the way.",
    tags: ["movable obstruction", "penalty area", "bench", "removal"],
  },
  {
    id: "b10_047",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball comes to rest inside a movable trash can near the green. What is the relief procedure?",
    choices: [
      "Shake the ball out of the trash can and play it where it comes to rest",
      "Take a one-stroke penalty and drop within two club-lengths",
      "Lift the ball, remove the trash can, and drop the ball within one club-length of the spot directly below where the ball was in the obstruction, not nearer the hole",
      "Place the ball next to the trash can without penalty",
    ],
    correct: 2,
    rule: "Rule 15.2a(2)",
    explanation:
      "Under Rule 15.2a(2), when a ball is in or on a movable obstruction, the player may lift the ball, remove the obstruction, and drop the ball (or place it on the putting green) within one club-length of the estimated point directly below where the ball was at rest in the obstruction, not nearer the hole. There is no penalty.",
    tags: ["movable obstruction", "ball inside", "drop", "free relief"],
  },
  {
    id: "b10_048",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Your ball is lying under a folding chair (a movable obstruction) in a penalty area. The chair is removed and you want to take free relief. Where do you drop?",
    choices: [
      "Within one club-length of the spot directly below where the ball was in the obstruction, in the penalty area, not nearer the hole",
      "Outside the penalty area within one club-length of the nearest point of complete relief",
      "You cannot take free relief — you must play the ball as it lies or take penalty relief from the penalty area",
      "Anywhere in the penalty area",
    ],
    correct: 0,
    rule: "Rule 15.2a(2)",
    explanation:
      "Under Rule 15.2a(2), when a ball is in or on a movable obstruction, the player drops within one club-length of the estimated point directly below where the ball lay in the obstruction. Since the ball was in a penalty area, the drop must also be in the penalty area (same area of the course). There is no penalty for this relief from a movable obstruction, even in a penalty area.",
    tags: ["movable obstruction", "penalty area", "free relief", "drop"],
  },

  // --- Rule 15.3: Immovable Obstructions ---

  {
    id: "b10_049",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball is on a paved cart path in the fairway. What type of relief are you entitled to?",
    choices: [
      "One penalty stroke relief — drop within two club-lengths",
      "No relief — you must play it as it lies",
      "Free relief — a cart path is an immovable obstruction; drop within one club-length of the nearest point of complete relief, not nearer the hole",
      "Free relief — drop anywhere in the fairway within two club-lengths",
    ],
    correct: 2,
    rule: "Rule 16.1b",
    explanation:
      "Under Rule 16.1b, when a ball lies in the general area and there is interference from an immovable obstruction (such as a cart path), the player gets free relief by dropping within one club-length of the nearest point of complete relief, not nearer the hole, in the general area.",
    tags: ["immovable obstruction", "cart path", "free relief", "general area"],
  },
  {
    id: "b10_050",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is in a penalty area and lies on a concrete drain cover (an immovable obstruction). Are you entitled to free relief from the drain cover?",
    choices: [
      "Yes — free relief is available from immovable obstructions everywhere",
      "No — there is no free relief from immovable obstructions in a penalty area",
      "Yes, but only if the drain cover is man-made",
      "Only if the Committee has adopted a Local Rule",
    ],
    correct: 1,
    rule: "Rule 16.1e",
    explanation:
      "Under Rule 16.1e, there is no free relief from abnormal course conditions (including immovable obstructions) when the ball is in a penalty area. The player must either play the ball as it lies or take penalty relief from the penalty area under Rule 17.",
    tags: ["immovable obstruction", "penalty area", "no relief", "drain"],
  },
  {
    id: "b10_051",
    category: "FREE_RELIEF",
    tier: "official",
    text: "An immovable obstruction (a large scoreboard) does not interfere with your lie, stance, or swing, but it is directly in your line of play. Are you entitled to free relief?",
    choices: [
      "No — interference with the line of play alone does not entitle you to relief from an immovable obstruction (except on the putting green)",
      "Yes — interference with line of play always counts",
      "Only in stroke play, not match play",
      "Only if the ball is within two club-lengths of the obstruction",
    ],
    correct: 0,
    rule: "Rule 16.1a",
    explanation:
      "Under Rule 16.1a, interference from an abnormal course condition (including immovable obstructions) exists only when the condition interferes with the lie of the ball, the player's area of intended stance, or the player's area of intended swing. Interference with the line of play alone is not enough to claim relief — except on the putting green, where interference with the line of play is also covered.",
    tags: ["immovable obstruction", "line of play", "no relief", "interference"],
  },
  {
    id: "b10_052",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is near a cart path in the fairway. The nearest point of complete relief is in heavy rough behind a tree. Must you still take relief to that spot?",
    choices: [
      "No — you can choose a different side of the path with a better lie",
      "Yes — you must take relief and you must drop at the nearest point",
      "You can request the Committee assign a different relief point",
      "That is the required nearest point of complete relief, but you are not required to take relief — you may play from the cart path instead",
    ],
    correct: 3,
    rule: "Rule 16.1b",
    explanation:
      "Under Rule 16.1b, relief from an immovable obstruction is optional, not mandatory. If the nearest point of complete relief is in an unfavorable location (heavy rough, behind a tree), the player may choose to play the ball as it lies on the cart path. But if the player does take relief, the ball must be dropped within one club-length of the nearest point of complete relief — the player does not get to choose a more favorable spot.",
    tags: ["nearest point", "cart path", "unfavorable lie", "optional relief"],
  },

  // --- More Rule 15.1 scenarios ---

  {
    id: "b10_053",
    category: "LIFTING_RETURNING",
    tier: "competitor",
    text: "Are solidly embedded stones considered loose impediments that can be removed?",
    choices: [
      "No — a stone that is solidly embedded is not a loose impediment",
      "Yes — all stones are loose impediments",
      "Only on the putting green",
      "Only if they can be removed with one hand",
    ],
    correct: 0,
    rule: "Rule 15.1 (Definitions)",
    explanation:
      "Under the Definitions, a loose impediment is a natural object that is not fixed or growing, solidly embedded, or sticking to the ball. A solidly embedded stone is not a loose impediment. However, if a stone can be plucked from the ground without unreasonable effort, it is not considered 'solidly embedded' and is a loose impediment.",
    tags: ["loose impediment", "embedded stone", "definition", "solidly embedded"],
  },
  {
    id: "b10_054",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "Your ball lies in a penalty area near a pond. There are several loose leaves around your ball. May you remove them?",
    choices: [
      "No — you cannot touch or remove loose impediments in a penalty area",
      "Only if the leaves are not touching your ball",
      "Only with permission from a fellow competitor or opponent",
      "Yes — loose impediments may be removed in a penalty area without penalty",
    ],
    correct: 3,
    rule: "Rule 15.1a",
    explanation:
      "Under Rule 15.1a, a player may remove loose impediments without penalty anywhere on the course, including in penalty areas. The old rule restricting removal of loose impediments in hazards (now called penalty areas and bunkers) was eliminated in the 2019 Rules modernization.",
    tags: ["loose impediment", "penalty area", "leaves", "removal"],
  },
  {
    id: "b10_055",
    category: "LIFTING_RETURNING",
    tier: "weekend",
    text: "While removing a loose impediment near your ball in a bunker, your ball moves. What is the ruling?",
    choices: [
      "One penalty stroke; you must replace the ball",
      "No penalty; replace the ball — the same putting green exception applies in bunkers",
      "Two penalty strokes; play the ball from the new position",
      "No penalty; play the ball from the new position",
    ],
    correct: 0,
    rule: "Rule 15.1b",
    explanation:
      "Under Rule 15.1b, if the player's ball moves as a result of removing a loose impediment, the player gets one penalty stroke and must replace the ball. The no-penalty exception only applies on the putting green, not in bunkers. In a bunker (or anywhere else except the putting green), the one-stroke penalty applies.",
    tags: ["loose impediment", "bunker", "ball moved", "penalty"],
  },

  // =====================================================================
  // RULE 16 — Relief from Abnormal Course Conditions (FREE_RELIEF)
  // ~38 scenarios
  // =====================================================================

  // --- Rule 16.1: Abnormal Course Conditions (General) ---

  {
    id: "b10_056",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Which of the following is an 'abnormal course condition' under the Rules?",
    choices: [
      "Only ground under repair and temporary water",
      "Only animal holes and ground under repair",
      "All of these: animal holes, ground under repair, temporary water, and immovable obstructions",
      "Cart paths, temporary water, and divots",
    ],
    correct: 2,
    rule: "Rule 16.1",
    explanation:
      "Under the Definitions, an abnormal course condition includes four things: (1) animal holes, (2) ground under repair (GUR), (3) immovable obstructions, and (4) temporary water. An unfilled divot is not an abnormal course condition unless the Committee has marked it as GUR.",
    tags: ["abnormal course condition", "definition", "animal hole", "GUR", "temporary water"],
  },
  {
    id: "b10_057",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "After heavy rain, there is standing water around your ball in the fairway. What is this condition called, and what relief is available?",
    choices: [
      "Casual water — you must play the ball as it lies",
      "Temporary water — you get free relief by dropping within one club-length of the nearest point of complete relief, not nearer the hole",
      "Temporary water — you get free relief within two club-lengths",
      "Casual water — you take a one-stroke penalty for relief",
    ],
    correct: 1,
    rule: "Rule 16.1b",
    explanation:
      "Under the Definitions, temporary water (formerly called 'casual water') is any temporary accumulation of water on the surface of the ground that is not in a penalty area. Under Rule 16.1b, the player gets free relief in the general area by dropping within one club-length of the nearest point of complete relief, not nearer the hole.",
    tags: ["temporary water", "standing water", "free relief", "general area"],
  },

  // --- Rule 16.1a: When Relief is Allowed ---

  {
    id: "b10_058",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "A sprinkler head is directly in your line of play but does not affect your lie, stance, or swing. Your ball is in the general area (not on the putting green). Are you entitled to free relief?",
    choices: [
      "No — in the general area, relief requires interference with lie, stance, or area of intended swing, not just line of play",
      "Yes — interference with line of play always qualifies for relief",
      "Yes, but only if the sprinkler head is within 10 yards of the green",
      "Only if a Local Rule grants line-of-play relief",
    ],
    correct: 0,
    rule: "Rule 16.1a",
    explanation:
      "Under Rule 16.1a, interference exists when the abnormal course condition interferes with the lie of the ball, the area of the player's intended stance, or the area of the player's intended swing. Interference with the line of play does not give the right to relief — unless the ball is on the putting green, where interference with the line of play is also a basis for relief.",
    tags: ["interference", "line of play", "sprinkler head", "general area"],
  },
  {
    id: "b10_059",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is on the putting green, and a sprinkler head is on your line of putt between your ball and the hole. Are you entitled to relief?",
    choices: [
      "No — you must putt around the sprinkler head",
      "Only if the sprinkler head is raised above the surface",
      "Yes — on the putting green, interference with the line of play is a basis for free relief",
      "Only in stroke play, not match play",
    ],
    correct: 2,
    rule: "Rule 16.1a(3)",
    explanation:
      "Under Rule 16.1a, when a ball is on the putting green, interference exists if an abnormal course condition (including an immovable obstruction) is on the player's line of play. This is a special exception — off the putting green, line-of-play interference alone does not entitle the player to relief.",
    tags: ["putting green", "line of play", "sprinkler head", "relief"],
  },
  {
    id: "b10_060",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is in the general area. You could take free relief from an animal hole, but the relief would require you to stand on a cart path. Are you entitled to a second relief from the cart path?",
    choices: [
      "Yes — after taking relief from the animal hole, if the cart path now interferes, you take additional free relief from the cart path",
      "No — you only get one relief, and you must accept the cart path interference",
      "Yes, but only if both conditions were present before you took the first relief",
      "No — you should have factored in the cart path when determining the nearest point for the animal hole",
    ],
    correct: 0,
    rule: "Rule 16.1b",
    explanation:
      "Under the Rules, a player may take successive reliefs. After dropping for relief from the animal hole, if the ball now lies where a cart path (immovable obstruction) interferes with the lie, stance, or swing, the player is entitled to additional free relief from the cart path under Rule 16.1b. Each abnormal course condition is addressed independently.",
    tags: ["successive relief", "animal hole", "cart path", "multiple conditions"],
  },

  // --- Rule 16.1b: Relief in General Area ---

  {
    id: "b10_061",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball is in the fairway and sitting in a shallow puddle (temporary water). You determine the nearest point of complete relief. How large is the relief area?",
    choices: [
      "Two club-lengths from where the ball lies",
      "One club-length from the nearest point of complete relief, not nearer the hole, in the general area",
      "One club-length in any direction, including nearer the hole",
      "One club-length from the nearest edge of the temporary water",
    ],
    correct: 1,
    rule: "Rule 16.1b",
    explanation:
      "Under Rule 16.1b, when taking free relief in the general area, the relief area is within one club-length of the nearest point of complete relief, must not be nearer the hole than the reference point, and must be in the general area. The nearest point is the closest point where the condition no longer interferes with the lie, stance, and swing.",
    tags: ["temporary water", "relief area", "one club-length", "nearest point"],
  },
  {
    id: "b10_062",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "You determine the nearest point of complete relief from a cart path, and it is on a steep downhill slope with a terrible lie. Can you choose a different nearest point with a better lie?",
    choices: [
      "No — the nearest point of complete relief is a fixed spot determined by the Rules; you cannot choose a different one",
      "Yes — you can pick either side of the path",
      "Yes — you always get to choose the most favorable nearest point",
      "No, but you may drop within two club-lengths instead of one",
    ],
    correct: 0,
    rule: "Rule 16.1b",
    explanation:
      "Under Rule 16.1b, the nearest point of complete relief is a single specific point — the nearest spot where the abnormal course condition no longer interferes. The player cannot choose a more favorable spot. If the nearest point results in a poor lie, the player's option is to play the ball as it lies on the cart path or take the relief to the determined nearest point. The player may also take unplayable ball relief under Rule 19 from the new position if desired.",
    tags: ["nearest point", "unfavorable lie", "cart path", "no choice"],
  },
  {
    id: "b10_063",
    category: "FREE_RELIEF",
    tier: "official",
    text: "When determining the nearest point of complete relief, what must be completely avoided at the nearest point?",
    choices: [
      "Interference from the abnormal course condition with the lie of the ball, the area of intended stance, and the area of intended swing",
      "Only interference with the lie of the ball",
      "Only interference with the stance and swing",
      "Interference with the line of play to the hole",
    ],
    correct: 0,
    rule: "Rule 16.1b(1)",
    explanation:
      "Under the Definitions, the nearest point of complete relief is the estimated point where, if the ball were there, the abnormal course condition would no longer interfere with the lie, the area of intended stance, AND the area of intended swing. All three elements must be free of interference for complete relief. The player must simulate the stance and swing they would use from the original spot to determine this point.",
    tags: ["nearest point", "complete relief", "lie", "stance", "swing"],
  },

  // --- Rule 16.1c: Relief in Bunker ---

  {
    id: "b10_064",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball is in a bunker and lying in temporary water (a puddle). You want free relief. Where must you drop?",
    choices: [
      "Outside the bunker, within one club-length of the nearest point of complete relief",
      "Anywhere in the bunker or outside it — your choice",
      "In the bunker — the nearest point of complete relief must be in the bunker",
      "You have no relief option — you must play the ball as it lies in the bunker",
    ],
    correct: 2,
    rule: "Rule 16.1c(1)",
    explanation:
      "Under Rule 16.1c(1), when taking free relief from an abnormal course condition in a bunker, the nearest point of complete relief and the relief area must be in the bunker. The player may not drop outside the bunker for free relief. However, for one penalty stroke, the player may take back-on-the-line relief outside the bunker under Rule 16.1c(2).",
    tags: ["bunker", "temporary water", "free relief", "must stay in bunker"],
  },
  {
    id: "b10_065",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is in a bunker filled with temporary water, and there is no spot in the bunker free from the water. What are your options?",
    choices: [
      "You must play the ball as it lies — there is no relief if the entire bunker is flooded",
      "Free relief outside the bunker since no spot in the bunker is available",
      "Take free relief at the point of maximum available relief in the bunker, OR for one penalty stroke, drop outside the bunker on the back-on-the-line",
      "Take a two-stroke penalty and drop outside the bunker",
    ],
    correct: 2,
    rule: "Rule 16.1c",
    explanation:
      "Under Rule 16.1c(1), if there is no point of complete relief in the bunker, the player may take free relief at the point of maximum available relief in the bunker (the spot that gives the most relief, even if still in temporary water). Alternatively, under Rule 16.1c(2), for one penalty stroke, the player may drop outside the bunker on a line going straight back from the hole through the spot where the ball lay, with no limit on how far back.",
    tags: ["bunker", "flooded", "maximum available relief", "back-on-the-line"],
  },
  {
    id: "b10_066",
    category: "FREE_RELIEF",
    tier: "official",
    text: "You choose to take the one-penalty-stroke option to drop outside a waterlogged bunker (back-on-the-line relief under Rule 16.1c(2)). How far back from the bunker may you go?",
    choices: [
      "There is no limit — you may go as far back as you want on the line",
      "Two club-lengths behind the bunker",
      "One club-length behind the bunker",
      "You must stay within 50 yards of the bunker",
    ],
    correct: 0,
    rule: "Rule 16.1c(2)",
    explanation:
      "Under Rule 16.1c(2), when taking back-on-the-line relief outside a bunker for one penalty stroke, there is no limit on how far back the player may go on the line from the hole through the spot where the ball lay in the bunker. The player drops on that line, and the relief area is one club-length from the reference point on the line, not nearer the hole.",
    tags: ["bunker", "back-on-the-line", "no distance limit", "one penalty stroke"],
  },

  // --- Rule 16.1d: Relief on Putting Green ---

  {
    id: "b10_067",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball is on the putting green and there is temporary water between your ball and the hole. What relief is available?",
    choices: [
      "No relief — temporary water on the green must be played as it lies",
      "Free relief, but the nearest point must be on the putting green",
      "You may only squeegee the water off the green",
      "Free relief — place the ball at the nearest point of complete relief, which may be off the putting green",
    ],
    correct: 3,
    rule: "Rule 16.1d",
    explanation:
      "Under Rule 16.1d, when a ball is on the putting green and there is interference from an abnormal course condition (including temporary water on the line of play), the player gets free relief by placing (not dropping) the ball at the nearest point of complete relief. This point may be off the putting green, in the general area, if that is the nearest point.",
    tags: ["putting green", "temporary water", "free relief", "placing"],
  },
  {
    id: "b10_068",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is on the putting green and you are taking free relief from temporary water. How is the ball put into play at the relief spot?",
    choices: [
      "Drop from knee height",
      "Drop from any height",
      "Place the ball — on the putting green, relief is taken by placing, not dropping",
      "Roll the ball to the new spot",
    ],
    correct: 2,
    rule: "Rule 16.1d",
    explanation:
      "Under Rule 16.1d, when taking relief on the putting green, the ball is placed at the nearest point of complete relief, not dropped. This is different from relief in the general area or bunkers, where the ball is dropped. Placing ensures better precision on the putting surface.",
    tags: ["putting green", "placing", "relief", "temporary water"],
  },
  {
    id: "b10_069",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Your ball is on the putting green. The nearest point of complete relief from an immovable obstruction on your line of putt is in the fringe (general area). Must you place the ball in the fringe?",
    choices: [
      "Yes — the nearest point of complete relief may be off the putting green, and you must use that point",
      "No — the nearest point must always stay on the putting green",
      "You may choose between the fringe and the green",
      "Only if the fringe is within one club-length",
    ],
    correct: 0,
    rule: "Rule 16.1d",
    explanation:
      "Under Rule 16.1d, the nearest point of complete relief for a ball on the putting green can be on the putting green, in the general area, or in a bunker. If the nearest point is in the fringe (general area), the player must place the ball there. The Rules do not guarantee that the nearest point stays on the putting green.",
    tags: ["putting green", "fringe", "nearest point", "off the green"],
  },

  // --- Rule 16.1e: No Relief in Penalty Area ---

  {
    id: "b10_070",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball is in a yellow penalty area, and there is an animal hole right next to your ball affecting your stance. Can you take free relief?",
    choices: [
      "No — there is no free relief from abnormal course conditions in a penalty area",
      "Yes — animal holes always grant free relief",
      "Yes, but only for animal holes, not for other conditions",
      "Only if the animal hole is dangerous",
    ],
    correct: 0,
    rule: "Rule 16.1e",
    explanation:
      "Under Rule 16.1e, there is no free relief from abnormal course conditions (animal holes, GUR, temporary water, or immovable obstructions) when the ball is in a penalty area. The player must play the ball as it lies or take penalty relief from the penalty area under Rule 17. The only exception is for dangerous animal conditions under Rule 16.2.",
    tags: ["penalty area", "animal hole", "no free relief"],
  },

  // --- Rule 16.2: Dangerous Animal Condition ---

  {
    id: "b10_071",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "A venomous snake is coiled near your ball in the fairway. What relief is available?",
    choices: [
      "No relief — animals are part of the course",
      "Free relief for a dangerous animal condition — drop within one club-length of the nearest safe point, not nearer the hole",
      "One penalty stroke to drop away from the snake",
      "Free relief only if a Rules official is present to confirm the danger",
    ],
    correct: 1,
    rule: "Rule 16.2",
    explanation:
      "Under Rule 16.2, a dangerous animal condition (such as a venomous snake, bees, alligators, or fire ants near the ball) entitles the player to free relief. The player drops within one club-length of the nearest point that is safe, not nearer the hole, and in the same area of the course.",
    tags: ["dangerous animal", "snake", "free relief", "safety"],
  },
  {
    id: "b10_072",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is in a penalty area, and an alligator is lying between you and your ball. Can you take free relief from the dangerous animal condition?",
    choices: [
      "No — no relief of any kind is available in penalty areas",
      "Only if you take penalty relief from the penalty area",
      "Only in match play",
      "Yes — dangerous animal relief is available even in penalty areas, unlike other abnormal course conditions",
    ],
    correct: 3,
    rule: "Rule 16.2b",
    explanation:
      "Under Rule 16.2b, a player may take free relief from a dangerous animal condition even when the ball is in a penalty area. This is a critical exception to the general rule in 16.1e that no free relief is available in penalty areas. When taking this relief in a penalty area, the nearest safe point must also be in the penalty area (unless there is no safe point in the penalty area).",
    tags: ["dangerous animal", "alligator", "penalty area", "free relief", "exception"],
  },
  {
    id: "b10_073",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is in a bunker and a fire ant mound is near your ball. You take dangerous animal relief and the nearest safe point is outside the bunker. What happens?",
    choices: [
      "You must drop at the nearest safe point in the bunker; if no safe point exists in the bunker, you may drop outside with free relief",
      "You must take one penalty stroke to drop outside the bunker",
      "You must play the ball as it lies and deal with the ants",
      "You may choose to drop outside the bunker for free",
    ],
    correct: 0,
    rule: "Rule 16.2b",
    explanation:
      "Under Rule 16.2b, when taking dangerous animal relief, the relief must be in the same area of the course. For a ball in a bunker, the nearest safe point and relief area must be in the bunker. However, if there is no safe point in the bunker, the player may take free relief outside the bunker using the nearest safe point in the general area.",
    tags: ["dangerous animal", "fire ants", "bunker", "nearest safe point"],
  },

  // --- Rule 16.3: Embedded Ball ---

  {
    id: "b10_074",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball is embedded in its own pitch mark in the fairway. What relief is available?",
    choices: [
      "No relief — you must play the ball as it lies",
      "Free relief — drop within two club-lengths",
      "One penalty stroke; drop within one club-length",
      "Free relief — drop within one club-length of the spot right behind where the ball was embedded, not nearer the hole",
    ],
    correct: 3,
    rule: "Rule 16.3b",
    explanation:
      "Under Rule 16.3b, when a ball is embedded in the general area (which includes the fairway), the player gets free relief. The reference point is the spot right behind where the ball was embedded. The relief area is one club-length from that reference point, not nearer the hole, in the general area.",
    tags: ["embedded ball", "fairway", "free relief", "pitch mark"],
  },
  {
    id: "b10_075",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is embedded in the rough (not in a closely-mown area). Under the default Rules, are you entitled to free relief?",
    choices: [
      "No — embedded ball relief only applies in closely-mown areas unless a Local Rule extends it",
      "Only if the ball is completely below the surface",
      "Only in the first cut of rough, not deep rough",
      "Yes — embedded ball relief applies in the entire general area, including the rough, under the default Rule",
    ],
    correct: 3,
    rule: "Rule 16.3a",
    explanation:
      "Under Rule 16.3a, the default Rule provides free relief for an embedded ball anywhere in the general area, which includes both fairway and rough. However, the Committee may adopt a Local Rule (Model Local Rule F-2) restricting embedded ball relief to closely-mown areas only (cut to fairway height or less). Many competitions adopt this Local Rule.",
    tags: ["embedded ball", "rough", "general area", "Local Rule"],
  },
  {
    id: "b10_076",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "What does 'embedded' mean under the Rules of Golf?",
    choices: [
      "The ball is sitting down in thick grass",
      "The ball is in its own pitch mark created as a result of the player's previous stroke, and part of the ball is below the level of the ground",
      "The ball is partially covered by sand or soil",
      "Any ball that is below the surface of the ground by more than half",
    ],
    correct: 1,
    rule: "Rule 16.3a",
    explanation:
      "Under the Definitions, a ball is embedded when it is in its own pitch mark made as a result of the player's previous stroke, and part of the ball is below the level of the ground surface. The ball does not need to be touching soil — it can be embedded in its own pitch mark even if sitting on grass, as long as part of it is below ground level.",
    tags: ["embedded ball", "definition", "pitch mark", "ground level"],
  },
  {
    id: "b10_077",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Your ball is embedded in the earthen wall above the sand in a bunker (the stacked turf face). Are you entitled to embedded ball relief?",
    choices: [
      "No — the earthen wall is part of the bunker, so no embedded ball relief",
      "Yes — the earthen wall above the sand is part of the general area, so embedded ball relief is available under Rule 16.3",
      "Yes — embedded ball relief applies everywhere except penalty areas",
      "Only if the Committee has adopted Model Local Rule F-2",
    ],
    correct: 1,
    rule: "Rule 16.3a, Definition of Bunker",
    explanation:
      "Under the Definition of Bunker, grass-covered ground and walls (including stacked turf faces) bordering or within a bunker are NOT part of the bunker — they are part of the general area. The edge of a bunker does not extend upward. Since the earthen wall above the sand is in the general area, embedded ball relief IS available under Rule 16.3. Note: a Committee may adopt Model Local Rule F-2.2 to deny relief for balls embedded in stacked turf faces above bunkers.",
    tags: ["embedded ball", "bunker face", "general area", "stacked turf", "2026 clarification"],
  },
  {
    id: "b10_078",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Your ball is embedded in the putting green. What relief applies?",
    choices: [
      "No embedded ball relief is needed — on the putting green, the player may mark, lift, and repair the pitch mark under Rule 13.1c, then replace the ball",
      "Free relief by placing the ball at the nearest spot on the green without damage",
      "No relief — you must play it as it lies",
      "Drop within one club-length of the pitch mark",
    ],
    correct: 0,
    rule: "Rule 13.1c",
    explanation:
      "Rule 16.3 (embedded ball relief) does not apply on the putting green because there is already a separate procedure: under Rule 13.1c, a player may repair damage on the putting green, including ball marks and pitch marks, and may mark and lift the ball at any time on the putting green. The player simply lifts the ball, repairs the pitch mark, and replaces the ball.",
    tags: ["embedded ball", "putting green", "repair", "Rule 13.1c"],
  },

  // --- Rule 16.4: Lifting Ball to See If Condition Allows Relief ---

  {
    id: "b10_079",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "You believe your ball might be embedded but you're not sure. Can you lift it to check?",
    choices: [
      "No — you must make your best judgment without lifting",
      "Only if a Rules official gives you permission",
      "Yes — you may lift the ball to see if it is in a condition for which relief is allowed, but you must mark it first",
      "Yes, but only on the putting green",
    ],
    correct: 2,
    rule: "Rule 16.4",
    explanation:
      "Under Rule 16.4, if a player reasonably believes the ball may be in a condition where relief is allowed (such as being embedded or in an animal hole), the player may lift the ball to check. The player must mark the spot before lifting. If the ball is in such a condition, the player may take relief. If not, the ball must be replaced. There is no penalty for lifting to check.",
    tags: ["lifting to check", "embedded ball", "marking", "no penalty"],
  },
  {
    id: "b10_080",
    category: "FREE_RELIEF",
    tier: "official",
    text: "You lift your ball under Rule 16.4 to check if it's embedded. It turns out it was not embedded. You cleaned the ball while it was lifted. What is the penalty?",
    choices: [
      "One penalty stroke — you may not clean the ball when lifting under Rule 16.4 unless it turns out relief is allowed",
      "No penalty — you may always clean a lifted ball",
      "Two penalty strokes for unnecessary cleaning",
      "No penalty — cleaning is always allowed when checking a condition",
    ],
    correct: 0,
    rule: "Rule 16.4",
    explanation:
      "Under Rule 16.4, when lifting a ball to see if it lies in a condition where relief is allowed, the ball must not be cleaned (beyond what is necessary to see the condition), unless the player then takes relief. If the player cleans the ball and it turns out the ball was not in a condition allowing relief, the player gets one penalty stroke.",
    tags: ["lifting to check", "cleaning", "penalty", "not embedded"],
  },

  // --- More Rule 16.1 scenarios (deeper edge cases) ---

  {
    id: "b10_081",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball lies in an area marked with white lines and a 'GUR' sign. What does this mean?",
    choices: [
      "General Use Road — you must play the ball as it lies",
      "Ground Under Repair — you are entitled to free relief by dropping outside the marked area",
      "Green Under Renovation — the hole is closed",
      "Grounds Under Rules — a special penalty area",
    ],
    correct: 1,
    rule: "Rule 16.1",
    explanation:
      "GUR stands for Ground Under Repair, which is an abnormal course condition. Under Rule 16.1, the player is entitled to free relief. The player finds the nearest point of complete relief outside the GUR area and drops within one club-length, not nearer the hole. The Committee typically marks GUR with white lines or signs.",
    tags: ["ground under repair", "GUR", "free relief", "marking"],
  },
  {
    id: "b10_082",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "Your ball lies just outside an area marked as GUR, but your stance would be inside the GUR area. Are you entitled to relief?",
    choices: [
      "Yes — interference includes interference with the area of intended stance, not just the lie of the ball",
      "No — the ball is not in the GUR, so no relief is available",
      "Only if more than half your stance is in the GUR",
      "Only if the Committee has adopted a special Local Rule",
    ],
    correct: 0,
    rule: "Rule 16.1a",
    explanation:
      "Under Rule 16.1a, interference from an abnormal course condition exists when the condition physically interferes with the lie of the ball, the area of intended stance, OR the area of intended swing. Even if the ball is outside the GUR, if the player's stance would be in the GUR, the player is entitled to free relief.",
    tags: ["GUR", "stance interference", "relief", "outside the area"],
  },
  {
    id: "b10_083",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Your ball is in the general area and clearly interference exists from an immovable obstruction. However, the shot you want to play would be clearly unreasonable (e.g., you'd have to play left-handed backward into a bush). Are you entitled to relief?",
    choices: [
      "No — relief is not allowed if interference exists only because the player chooses a clearly unreasonable stroke, stance, or direction of play",
      "Yes — you are always entitled to relief if interference exists from an abnormal course condition",
      "Yes, but you get a one-stroke penalty for the unreasonable shot",
      "Only the Committee can decide if the shot is unreasonable",
    ],
    correct: 0,
    rule: "Rule 16.1a(3)",
    explanation:
      "Under Rule 16.1a(3), a player is NOT entitled to relief if interference exists only because the player uses a clearly unreasonable stroke, a clearly unreasonable stance, or plays in a clearly unreasonable direction. The Rules require the player to demonstrate that the stroke they would play is reasonable given the circumstances.",
    tags: ["unreasonable stroke", "no relief", "immovable obstruction", "interference"],
  },
  {
    id: "b10_084",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "An animal hole (gopher hole) is in the general area. Your ball is not near the hole, but your foot would be in the hole during your stance. Are you entitled to relief?",
    choices: [
      "No — the ball itself must be in or near the animal hole",
      "Yes — interference with the area of intended stance from an animal hole gives the right to free relief",
      "Only if the animal hole is within one club-length of your ball",
      "Yes, but you must prove the animal hole could cause injury",
    ],
    correct: 1,
    rule: "Rule 16.1a",
    explanation:
      "Under Rule 16.1a, interference from an abnormal course condition (including an animal hole) exists when the condition interferes with the lie, stance, or swing. If the player's foot would be in the animal hole during their intended stance, this is interference with the area of intended stance, and the player is entitled to free relief under Rule 16.1b.",
    tags: ["animal hole", "stance interference", "free relief", "general area"],
  },
  {
    id: "b10_085",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "After a heavy rain, temporary water has collected in a bunker where your ball lies. Can you take free relief outside the bunker?",
    choices: [
      "Yes — you always get free relief outside the bunker from temporary water",
      "No — you must play the ball as it lies in the bunker",
      "No — free relief from temporary water in a bunker must be taken within the bunker; to drop outside, you must pay one penalty stroke",
      "Yes, but only if the entire bunker is flooded",
    ],
    correct: 2,
    rule: "Rule 16.1c",
    explanation:
      "Under Rule 16.1c(1), free relief from temporary water in a bunker must be taken within the bunker. The player cannot leave the bunker for free. Under Rule 16.1c(2), the player may take back-on-the-line relief outside the bunker, but this costs one penalty stroke.",
    tags: ["temporary water", "bunker", "free relief inside", "penalty to leave"],
  },
  {
    id: "b10_086",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Your ball is in the general area. You are entitled to relief from an immovable obstruction. When you drop, the ball comes to rest in a position where a different immovable obstruction now interferes with your swing. What do you do?",
    choices: [
      "Take a new free relief from the second immovable obstruction — you are entitled to successive reliefs",
      "You must play the ball as it lies — you already took relief once",
      "Re-drop from the original relief area ignoring the second obstruction",
      "Take a one-stroke penalty for a second relief",
    ],
    correct: 0,
    rule: "Rule 16.1b",
    explanation:
      "Under the Rules, if after completing a relief procedure the ball comes to rest in a new position where a different abnormal course condition interferes, the player may take additional free relief from the new condition. Each interference is treated independently. The player does not lose the right to relief simply because they already took relief from something else.",
    tags: ["successive relief", "immovable obstruction", "multiple reliefs", "general area"],
  },
  {
    id: "b10_087",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball is under a large immovable bridge over a creek. The bridge is not in a penalty area. You have free relief from the bridge. The nearest point of complete relief is 40 yards away because the bridge is very wide. Must you drop there?",
    choices: [
      "No — if the nearest point is unreasonably far, you can drop at the edge of the bridge",
      "You are not entitled to relief from a bridge because it is a permanent structure",
      "You may drop within two club-lengths of the edge of the bridge",
      "Yes — the nearest point of complete relief is where it is, no matter how far away; alternatively, you can play from under the bridge",
    ],
    correct: 3,
    rule: "Rule 16.1b",
    explanation:
      "Under Rule 16.1b, the nearest point of complete relief is fixed by the Rules — it is the nearest point where the condition no longer interferes with all three elements (lie, stance, swing). Even if this is very far away (as with a large bridge), that is the proper relief point. The player always has the option to play the ball as it lies instead of taking relief.",
    tags: ["immovable obstruction", "bridge", "nearest point", "far away"],
  },
  {
    id: "b10_088",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Your ball is on the general area side of a boundary wall. An immovable obstruction (a maintenance shed) interferes with your swing. The nearest point of complete relief would be out of bounds. What are your options?",
    choices: [
      "You are not entitled to relief because the nearest point of complete relief is out of bounds — you must play the ball as it lies or take unplayable ball relief",
      "You must take relief even though it puts you out of bounds",
      "You may choose an alternative nearest point that is in bounds",
      "Free relief is mandatory; drop as close to the boundary as possible",
    ],
    correct: 0,
    rule: "Rule 16.1",
    explanation:
      "Under the Rules, the nearest point of complete relief must be on the course (not out of bounds). If the only nearest point of complete relief would be out of bounds, then there is effectively no relief available. The player must play the ball as it lies or take unplayable ball relief under Rule 19. This is a rare but important edge case.",
    tags: ["nearest point", "out of bounds", "no relief available", "boundary"],
  },
  {
    id: "b10_089",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "Your ball lies in an area of temporary water in the rough. The nearest point of complete relief is in the fairway, giving you a much better lie. Is this allowed?",
    choices: [
      "No — the nearest point cannot give you a better lie than your original position",
      "Only if the Committee approves",
      "Yes — the nearest point of complete relief goes where it goes, even if it results in a better lie",
      "No — you must find a nearest point that is also in the rough",
    ],
    correct: 2,
    rule: "Rule 16.1b",
    explanation:
      "Under Rule 16.1b, the nearest point of complete relief is determined objectively — it is the nearest point where the condition no longer interferes. If that point happens to be in the fairway (giving a better lie), the player is entitled to drop there. The player gets the benefit (or detriment) of wherever the nearest point happens to be. Similarly, the nearest point could result in a worse lie, and the player must accept that too.",
    tags: ["temporary water", "better lie", "nearest point", "rough to fairway"],
  },
  {
    id: "b10_090",
    category: "FREE_RELIEF",
    tier: "weekend",
    text: "A mole has created a large mound of dirt next to your ball in the fairway. Your ball is sitting on the mound. Is this an animal hole under the Rules?",
    choices: [
      "No — only actual holes in the ground qualify, not mounds of dirt",
      "Only if the mole is a burrowing animal native to the region",
      "Yes — animal holes include any hole, cast (pushed-up material), runway, or trail made by animals, and relief is available",
      "Only if the mound is within a marked GUR area",
    ],
    correct: 2,
    rule: "Rule 16.1",
    explanation:
      "Under the Definitions, an animal hole includes the hole itself and any material the animal has pushed up (cast), as well as any runway or trail leading to the hole. A mole mound (cast) created by a burrowing animal qualifies as part of the animal hole condition. The player is entitled to free relief under Rule 16.1b.",
    tags: ["animal hole", "mole mound", "cast", "free relief"],
  },
  {
    id: "b10_091",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Your ball is on a cart path (immovable obstruction). You determine the nearest point of complete relief, but that point is in a bush where you can't actually play a shot. You want to then take unplayable ball relief from that new position. Is this allowed?",
    choices: [
      "No — you must go back to the cart path and play from there",
      "Yes — after completing relief from the cart path, the ball is in play at the new position, and you may then take unplayable ball relief under Rule 19 with one penalty stroke",
      "Yes, but you must take the unplayable from the cart path, not the new position",
      "No — once you take free relief, you must play from the resulting position",
    ],
    correct: 1,
    rule: "Rule 19.1",
    explanation:
      "Under Rule 19.1, a player may take unplayable ball relief anywhere on the course except in a penalty area. After completing free relief from the cart path, the ball is in play at the new position. If that position is in a bush or otherwise unplayable, the player may take unplayable ball relief from that spot under Rule 19, with one penalty stroke. The player has multiple relief options chained together.",
    tags: ["cart path", "unplayable ball", "successive relief", "bush"],
  },
  {
    id: "b10_092",
    category: "FREE_RELIEF",
    tier: "competitor",
    text: "During your round, you find your ball sitting in a footprint in a bunker that was clearly made by a maintenance vehicle. The Committee has not marked the area as GUR. Is this ground under repair?",
    choices: [
      "Not automatically — only the Committee can define ground under repair; however, a player may request a ruling",
      "Yes — any damage by maintenance equipment is automatically GUR",
      "No — footprints and tire tracks in bunkers are never GUR",
      "Yes, but only if the damage is deeper than 2 inches",
    ],
    correct: 0,
    rule: "Rule 16.1",
    explanation:
      "Under the Definitions, ground under repair is any part of the course the Committee defines as GUR, whether by marking it or otherwise. Without a Committee designation, the area is not automatically GUR. However, a player who believes the damage constitutes GUR may request a ruling from the Committee. In the absence of a ruling, the player must play the ball as it lies.",
    tags: ["ground under repair", "bunker", "maintenance damage", "Committee ruling"],
  },
  {
    id: "b10_093",
    category: "FREE_RELIEF",
    tier: "official",
    text: "Your ball is in the general area near a drainage ditch that the Committee has marked as ground under repair with a 'play prohibited' designation. Must you take relief?",
    choices: [
      "No — relief from GUR is always optional",
      "Yes — when the Committee designates a GUR area as 'play prohibited,' relief is mandatory, not optional",
      "Only if your ball is inside the marked area",
      "Only in stroke play — in match play, you may play from the area",
    ],
    correct: 1,
    rule: "Rule 16.1f",
    explanation:
      "Under Rule 16.1f, the Committee may designate a ground under repair area as 'play prohibited.' When this designation is used, the player must take relief — playing from the area is not an option. If the player plays from a play-prohibited area, the general penalty applies (two strokes in stroke play, loss of hole in match play). This is used for areas under renovation, newly seeded areas, or environmentally sensitive zones.",
    tags: ["GUR", "play prohibited", "mandatory relief", "Committee designation"],
  },
];
