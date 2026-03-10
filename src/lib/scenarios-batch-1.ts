import { Scenario } from "@/types";

export const SCENARIOS_BATCH_1: Scenario[] = [
  // =====================================================================
  // FUNDAMENTALS (Rules 1–4) — 45 scenarios
  // Tier distribution: ~18 weekend, ~16 competitor, ~11 official
  // =====================================================================

  // --- Rule 1: The Game, Player Conduct, and the Rules ---

  {
    id: "gen_f1",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You accidentally step on your ball in the rough while walking to it, pushing it into the ground. What is the ruling?",
    choices: [
      "One-stroke penalty; replace the ball on its original spot",
      "No penalty; replace the ball on its original spot",
      "No penalty; play it from the new position",
      "Two-stroke penalty; replace the ball",
    ],
    correct: 0,
    rule: "Rule 9.4b",
    explanation:
      "Under Rule 9.4, if you accidentally cause your ball to move (other than while searching, which is covered by Rule 7.4), you get one penalty stroke and must replace the ball on its original spot.",
    tags: ["ball moved", "penalty", "general area", "replace ball"],
  },
  {
    id: "gen_f2",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is the maximum score you can make on a hole in stroke play under the standard Rules of Golf?",
    choices: [
      "There is no maximum — you keep playing until the ball is holed",
      "Double par (e.g., 10 on a par 5)",
      "Triple bogey",
      "10 strokes on any hole",
    ],
    correct: 0,
    rule: "Rule 3.3c",
    explanation:
      "Under the standard Rules, there is no maximum score on a hole in stroke play. You must hole out on every hole. (Note: the Committee may adopt a Maximum Score form of stroke play under Rule 21.2, but that is a separate format.)",
    tags: ["stroke play", "scoring", "hole out"],
  },
  {
    id: "gen_f3",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In match play, your opponent concedes your next putt. Can the concession be withdrawn?",
    choices: [
      "No — a concession is final and cannot be withdrawn",
      "Yes, if the opponent changes their mind before you pick up the ball",
      "Yes, but only if both players agree",
      "Only the Committee can reverse a concession",
    ],
    correct: 0,
    rule: "Rule 3.2b(1)",
    explanation:
      "Under Rule 3.2b, a concession is final once made. It cannot be declined or withdrawn. The ball is considered holed, and the concession stands even if the player who made it changes their mind.",
    tags: ["match play", "concession", "putt", "final"],
  },
  {
    id: "gen_f4",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "In match play, your opponent's ball is 3 feet from the hole. You say 'That's good, pick it up.' Your opponent misunderstands and putts anyway, missing the putt. What is the score for the hole?",
    choices: [
      "The putt was conceded — the ball was holed at the previous position regardless of the missed putt",
      "The missed putt counts — concession was cancelled when the opponent putted",
      "The hole must be replayed",
      "The opponent scores the putt as missed and adds a penalty stroke",
    ],
    correct: 0,
    rule: "Rule 3.2b(1)",
    explanation:
      "Once a concession is made, it is final and cannot be declined or withdrawn. Even though the opponent chose to putt and missed, the concession already counted the ball as holed at the moment it was given.",
    tags: ["match play", "concession", "putt", "final", "scoring"],
  },
  {
    id: "gen_f5",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In match play, you and your opponent both hole out. You scored 4 and your opponent scored 5. Before moving to the next tee, your opponent concedes the hole. Is this valid?",
    choices: [
      "No — you cannot concede a hole after the result has already been decided",
      "Yes — concessions can be made at any time during the round",
      "Yes, but only if the Committee approves",
      "Only if the opponent scored higher on the hole",
    ],
    correct: 0,
    rule: "Rule 3.2b(1)",
    explanation:
      "A concession of a hole can be made at any time before the result of the hole is decided. Once both players have holed out and the result is determined, the hole cannot be conceded because the outcome is already settled.",
    tags: ["match play", "concession", "hole result", "timing"],
  },
  {
    id: "gen_f6",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, you realize on the 5th tee that you never holed out on the 4th hole — you picked up your ball by mistake. What happens?",
    choices: [
      "You are disqualified",
      "Two-stroke penalty added to the 4th hole; your score stands",
      "You must go back and finish the 4th hole",
      "No penalty if you correct it before signing your scorecard",
    ],
    correct: 0,
    rule: "Rule 3.3c",
    explanation:
      "In stroke play, you must hole out on every hole. If you fail to hole out and do not correct the mistake before making a stroke on the next tee, you are disqualified.",
    tags: ["stroke play", "hole out", "disqualification", "scoring"],
  },
  {
    id: "gen_f7",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What color stakes define out of bounds?",
    choices: [
      "White stakes",
      "Red stakes",
      "Yellow stakes",
      "Blue stakes",
    ],
    correct: 0,
    rule: "Definition of Out of Bounds",
    explanation:
      "Out of bounds is defined by white stakes or white lines. Red stakes define red penalty areas, yellow stakes define yellow penalty areas, and blue stakes typically mark ground under repair.",
    tags: ["OB", "course markings", "white stakes", "boundary"],
  },
  {
    id: "gen_f8",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Your ball comes to rest touching a white out-of-bounds stake but is still on the course side of the boundary line. Is the ball out of bounds?",
    choices: [
      "No — the ball is in bounds if any part of it is on the course side of the boundary",
      "Yes — touching the stake means the ball is out of bounds",
      "Yes — the ball must be completely inside the boundary line",
      "It depends on whether the stake is movable",
    ],
    correct: 0,
    rule: "Definition of Out of Bounds",
    explanation:
      "A ball is out of bounds only when all of it lies outside the boundary edge. If any part of the ball is in bounds (on the course side of the boundary), the ball is in bounds. The boundary edge is determined by the inside points of the stakes at ground level.",
    tags: ["OB", "boundary", "white stakes", "ball position"],
  },

  // --- Rule 2: The Course ---

  {
    id: "gen_f9",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A white OB stake is interfering with your backswing. Your ball is in bounds. Can you remove the stake?",
    choices: [
      "No — OB stakes are boundary objects and are not obstructions; they may not be moved",
      "Yes — any stake that interferes with your swing may be removed",
      "Yes, but you must replace it after your stroke",
      "Only if the stake is loose in the ground",
    ],
    correct: 0,
    rule: "Definition of Boundary Object, Rule 8.1a",
    explanation:
      "Boundary objects (OB stakes, fences, walls) are not obstructions and are not movable obstructions. They are fixed and may not be moved. If a boundary object interferes with your play, you must play around it or declare the ball unplayable.",
    tags: ["OB", "boundary object", "immovable", "no relief", "swing"],
  },
  {
    id: "gen_f10",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Your ball lands directly on the painted line that marks the edge of a red penalty area. Is the ball in the penalty area?",
    choices: [
      "Yes — a ball is in a penalty area when any part of it touches or is above the edge",
      "No — the ball must be completely past the line",
      "Only if more than half the ball is past the line",
      "The player gets to choose",
    ],
    correct: 0,
    rule: "Definition of Penalty Area",
    explanation:
      "A ball is in a penalty area when any part of it lies on or touches the boundary edge of the penalty area. The edge extends both up and down, so a ball sitting on the line is in the penalty area.",
    tags: ["penalty area", "boundary", "red stakes", "ball position"],
  },
  {
    id: "gen_f11",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "The Committee has marked a garden bed next to the 9th green as a No Play Zone within ground under repair. Your ball lands in the garden bed. What must you do?",
    choices: [
      "You must take free relief — playing from a No Play Zone is not allowed",
      "You may play it as it lies since it is ground under repair",
      "You must take penalty relief since it is a No Play Zone",
      "You may play it but get a one-stroke penalty",
    ],
    correct: 0,
    rule: "Rule 16.1f",
    explanation:
      "A No Play Zone is an area where play is prohibited. If your ball is in a No Play Zone defined as part of an abnormal course condition (like GUR), you must take free relief under Rule 16.1f. You may not play the ball as it lies.",
    tags: ["no play zone", "GUR", "ground under repair", "mandatory relief", "free relief"],
  },

  // --- Rule 3: The Competition ---

  {
    id: "gen_f12",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, you sign and return your scorecard showing a 5 on the 7th hole, but you actually made a 4. The error is discovered later. What happens?",
    choices: [
      "The score of 5 stands — a higher score on a hole is not corrected after the card is returned",
      "You are disqualified for signing an incorrect scorecard",
      "The Committee corrects it to 4",
      "Two-stroke penalty and the score is corrected to 4",
    ],
    correct: 0,
    rule: "Rule 3.3b(3)",
    explanation:
      "If a player returns a scorecard with a score higher than actually taken on a hole, the higher score stands. Only a score lower than actually taken results in disqualification. The Committee is responsible for adding up the total score.",
    tags: ["stroke play", "scorecard", "signing", "higher score", "scoring"],
  },
  {
    id: "gen_f13",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, you return your scorecard with a 4 on a hole where you actually scored a 5. What is the ruling?",
    choices: [
      "You are disqualified",
      "The Committee changes it to 5 and adds a two-stroke penalty",
      "The score of 4 stands",
      "You must replay the hole",
    ],
    correct: 0,
    rule: "Rule 3.3b(3)",
    explanation:
      "If a player returns a scorecard with a score lower than actually taken on any hole, the player is disqualified. This is one of the most severe penalties in golf because it compromises the integrity of the competition.",
    tags: ["stroke play", "scorecard", "disqualification", "lower score", "signing"],
  },
  {
    id: "gen_f14",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In stroke play, the Committee posts the final results. A spectator then reports that the winner failed to include a two-stroke penalty on the 12th hole. What should the Committee do?",
    choices: [
      "If the competition is final, the result stands unless the player knew about the penalty and deliberately did not include it",
      "Disqualify the winner and re-rank all players",
      "Add the two-stroke penalty and adjust the standings",
      "The result is always final once posted — no changes can be made",
    ],
    correct: 0,
    rule: "Rule 20.2e",
    explanation:
      "Under Rule 20.2e, once the result of a competition is final, it stands even if a penalty was missed — unless the player knew they were breaching the Rules and deliberately ignored it. If the player was unaware, the result is not changed.",
    tags: ["stroke play", "committee", "final result", "penalty", "scoring"],
  },
  {
    id: "gen_f15",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "In match play, you win the 15th hole to go 4 up with 3 holes to play. Is the match over?",
    choices: [
      "Yes — you win 4&3 because your opponent cannot catch up even by winning all remaining holes",
      "No — you must finish all 18 holes",
      "No — the match continues until someone wins a hole",
      "The match is over only if both players agree",
    ],
    correct: 0,
    rule: "Rule 3.2a(3)",
    explanation:
      "A match is won when one player leads by more holes than remain to be played. Being 4 up with 3 holes to play means your opponent cannot catch up even by winning all 3 remaining holes. The match is over and you win 4&3.",
    tags: ["match play", "winning", "4 and 3", "match result"],
  },
  {
    id: "gen_f16",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In match play, you are 2 up after 16 holes. Your opponent wins the 17th, making you 1 up with 1 to play. You halve the 18th. What is the result?",
    choices: [
      "You win the match 1 up",
      "The match goes to extra holes",
      "The match is halved",
      "You must replay the 18th hole",
    ],
    correct: 0,
    rule: "Rule 3.2a(3)",
    explanation:
      "If you are 1 up after 17 holes and halve the 18th, you finish the match 1 up. A match is won when a player leads by more holes than remain. After 18 holes, if you are still 1 up, you have won the match.",
    tags: ["match play", "winning", "1 up", "match result"],
  },

  // --- Rule 4: The Player's Equipment ---

  {
    id: "gen_f17",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is the maximum number of clubs you may carry during a round?",
    choices: [
      "14",
      "12",
      "15",
      "There is no maximum",
    ],
    correct: 0,
    rule: "Rule 4.1b(1)",
    explanation:
      "Under Rule 4.1b, you may carry a maximum of 14 clubs during a round. You may start with fewer than 14 and add clubs during the round up to the 14-club limit.",
    tags: ["clubs", "14 clubs", "equipment"],
  },
  {
    id: "gen_f18",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "You start your round with 13 clubs. On the 4th hole, a friend who is not playing offers you a wedge. Can you add it to your bag?",
    choices: [
      "Yes — you may add clubs during a round up to the 14-club limit, as long as the club is not selected for play by another player on the course",
      "No — you cannot add any clubs after the round begins",
      "Yes — you can borrow any club from any player at any time",
      "Only if the Committee approves",
    ],
    correct: 0,
    rule: "Rule 4.1b(1)",
    explanation:
      "You may add clubs during a round up to the 14-club limit, but you must not add a club that is selected for play by another player who is playing on the course. A club from someone who is not playing may be added.",
    tags: ["clubs", "14 clubs", "adding clubs", "equipment"],
  },
  {
    id: "gen_f19",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "During your round, you slam your putter against your bag in frustration and the shaft bends. Can you continue to use the damaged putter?",
    choices: [
      "Yes — you may continue using a club damaged during the round, even if the damage was caused by abuse",
      "No — a damaged club must be declared out of play",
      "Only if it was an accident, not abuse",
      "No — you must replace it with another putter",
    ],
    correct: 0,
    rule: "Rule 4.1a(2)",
    explanation:
      "Under Rule 4.1a, if a club is damaged during the round (regardless of how — including abuse), you may continue to use it for the rest of the round in its damaged state. You may also have it repaired or replace it (under certain conditions).",
    tags: ["clubs", "damaged club", "equipment", "abuse"],
  },
  {
    id: "gen_f20",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "During your round, the head of your driver breaks off during a normal swing. What are your options?",
    choices: [
      "You may repair it without unreasonable delay, or replace it with any club (without exceeding 14 clubs total)",
      "You must continue the round without a driver",
      "You may replace it only with an identical club model",
      "You get a two-stroke penalty for equipment failure",
    ],
    correct: 0,
    rule: "Rule 4.1a(2)",
    explanation:
      "When a club is damaged during the round by normal use, you may (1) continue using it in its damaged state, (2) have it repaired without unreasonably delaying play, or (3) replace it with any club, as long as you do not unreasonably delay play. You still cannot exceed 14 clubs.",
    tags: ["clubs", "damaged club", "replacement", "equipment"],
  },
  {
    id: "gen_f21",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "You discover on the 2nd tee in match play that you have 15 clubs in your bag. What is the penalty?",
    choices: [
      "Declare the extra club out of play; the match score is adjusted by deducting one hole for each hole where the breach occurred, maximum deduction of two holes",
      "You are disqualified",
      "Two-stroke penalty per hole, maximum four strokes",
      "One-stroke penalty; remove the extra club",
    ],
    correct: 0,
    rule: "Rule 4.1b(1)",
    explanation:
      "In match play, the penalty for carrying excess clubs is adjusting the match score by deducting one hole for each hole at which a breach occurred, with a maximum deduction of two holes. You must immediately declare the excess club out of play.",
    tags: ["clubs", "15 clubs", "match play", "penalty", "equipment"],
  },
  {
    id: "gen_f22",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You want to use a laser rangefinder to measure distance to the flag during your round. Is this allowed?",
    choices: [
      "Yes — distance-measuring devices are allowed unless the Committee has prohibited them by Local Rule",
      "No — electronic devices are never allowed during a round",
      "Only in casual rounds, not in competitions",
      "Only if the device does not measure slope or wind",
    ],
    correct: 0,
    rule: "Rule 4.3a",
    explanation:
      "Under Rule 4.3a, players may use distance-measuring devices to measure distance only. The Committee may prohibit their use by Local Rule. Devices that also measure slope or other conditions are not allowed unless the slope feature can be disabled (or the Committee allows it).",
    tags: ["equipment", "rangefinder", "distance", "electronic device"],
  },
  {
    id: "gen_f23",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "During a competition, you use a smartphone app that provides real-time localized wind speed and direction. Is this a breach of the Rules?",
    choices: [
      "Yes — using a device to gauge wind or other weather conditions not available from a public source is a breach",
      "No — weather apps are always permitted",
      "Only if the information affects your club selection",
      "Only if the Committee specifically prohibited phones",
    ],
    correct: 0,
    rule: "Rule 4.3a(1)",
    explanation:
      "Under Rule 4.3a, you must not use equipment to gauge wind speed or direction, or other weather conditions that are not available from general public weather sources. A real-time localized wind app constitutes a breach. General weather forecasts from public sources are acceptable.",
    tags: ["equipment", "electronic device", "wind", "weather"],
  },
  {
    id: "gen_f24",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "On a cold morning, you place hand warmers inside your gloves between shots. Is this allowed during a competition round?",
    choices: [
      "Yes — hand warmers are permitted and are not considered equipment that gives an unfair advantage",
      "No — artificial warming devices are not allowed during a round",
      "Only if the Committee specifically permits it",
      "Only between holes, and they must be removed before each stroke",
    ],
    correct: 0,
    rule: "Rule 4.3a, Interpretation 4.3a/1",
    explanation:
      "Hand warmers are permitted under the Rules. They are not considered equipment that gives an unfair advantage. Players may use them to keep their hands warm at any point during the round.",
    tags: ["equipment", "hand warmers", "cold weather", "comfort"],
  },
  {
    id: "gen_f25",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You are playing a round and realize the ball you have been playing is not on the conforming ball list. What happens?",
    choices: [
      "In most rounds, nothing — the conforming ball list is only enforced when the Committee adopts it as a Local Rule",
      "You are disqualified from any round",
      "Two-stroke penalty per hole played with that ball",
      "You must substitute a conforming ball immediately",
    ],
    correct: 0,
    rule: "Rule 4.2a, Equipment Rules",
    explanation:
      "The List of Conforming Golf Balls is optional — it only applies when the Committee specifically adopts it as a Local Rule (common in elite competitions). In casual rounds or competitions without this Local Rule, any golf ball may be used.",
    tags: ["ball", "conforming ball", "equipment", "local rule"],
  },
  {
    id: "gen_f26",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "During a round, you use a weighted donut ring on your club to loosen up between holes. Is this allowed?",
    choices: [
      "No — you must not use any training or swing aid during a round",
      "Yes — you can swing any club you want between holes",
      "Only if it is one of your 14 clubs",
      "Only during a suspension of play",
    ],
    correct: 0,
    rule: "Rule 4.3a(6)",
    explanation:
      "Under Rule 4.3a, during a round you must not use any training or swing aid, or any abnormal equipment, to assist your play. A weighted donut or swing weight is a training aid and is not permitted during a round.",
    tags: ["equipment", "training aid", "swing aid", "between holes"],
  },
  {
    id: "gen_f27",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You find a ball in the woods that might be yours, but it is partially covered by leaves and mud. Can you lift it to identify it?",
    choices: [
      "Yes — you may lift to identify it, but first mark its position and give your opponent or marker the chance to observe",
      "No — you must play it as it lies if you think it might be yours",
      "Yes — just pick it up and check; no need to mark it",
      "Only a rules official can identify a ball in these circumstances",
    ],
    correct: 0,
    rule: "Rule 7.3",
    explanation:
      "Under Rule 7.3, if a ball might be yours but you cannot identify it as it lies, you may lift it to identify it. You must first mark the spot and may not clean the ball more than needed for identification. You should give your opponent (match play) or another player or marker (stroke play) the opportunity to observe the process.",
    tags: ["identification", "lift ball", "mark position", "search"],
  },
  {
    id: "gen_f28",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, both you and another player in your group play the same brand, model, and number of golf ball. Neither of you put an identifying mark on your balls. Both balls are found near each other in the rough. What happens?",
    choices: [
      "If neither player can identify which ball is theirs, both balls are considered lost",
      "Each player plays the ball closest to the hole",
      "The players flip a coin to decide",
      "Both players take a free drop in the area where the balls were found",
    ],
    correct: 0,
    rule: "Rule 7.2",
    explanation:
      "Under Rule 7.2, each player is responsible for playing the proper ball. If two identical balls are found and neither player can identify which is theirs, both balls are considered lost. Each player must take stroke-and-distance relief. This is why you should put unique identifying marks on your ball.",
    tags: ["identification", "lost ball", "same ball", "marking ball"],
  },

  // --- Rule 1: Player Conduct (additional) ---

  {
    id: "gen_f29",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In stroke play, a player repeatedly throws clubs and uses profanity. The Committee issues a warning. The behavior continues. What can the Committee do?",
    choices: [
      "Disqualify the player for serious misconduct under the Code of Player Conduct",
      "Only issue additional warnings — the Committee cannot disqualify for conduct",
      "Wait until after the round to take action",
      "Apply a two-stroke penalty but not disqualify",
    ],
    correct: 0,
    rule: "Rule 1.2b",
    explanation:
      "Under Rule 1.2b, the Committee may disqualify a player for serious misconduct that is contrary to the spirit of the game. If the Committee has adopted a Code of Player Conduct, it can set escalating penalties up to and including disqualification.",
    tags: ["player conduct", "disqualification", "misconduct", "committee", "sportsmanship"],
  },
  {
    id: "gen_f30",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You notice another player in your stroke-play group is not raking bunkers after playing from them. Is this a Rules violation?",
    choices: [
      "No — raking bunkers is expected etiquette but there is no penalty under the Rules for failing to do so",
      "Yes — failure to rake a bunker is a two-stroke penalty",
      "Yes — the Committee can impose a penalty for poor course care",
      "Only if another player's ball is affected by the unraked sand",
    ],
    correct: 0,
    rule: "Rule 1.2, Etiquette Section",
    explanation:
      "While the Rules encourage players to care for the course (including raking bunkers), there is no specific penalty for failing to rake a bunker. It falls under etiquette and the spirit of the game, not the penalty structure.",
    tags: ["etiquette", "bunker", "raking", "no penalty", "course care"],
  },

  // --- Rule 2: The Course (additional) ---

  {
    id: "gen_f31",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "The course has internal out-of-bounds (white stakes) between the 5th and 14th holes. Your tee shot on the 5th crosses the internal OB line and ends up on the 14th fairway. Is the ball out of bounds?",
    choices: [
      "Yes — internal OB means the ball is out of bounds for the hole you are playing, even though it is on another part of the course",
      "No — the ball is in bounds because it is still on the course",
      "Only if the Local Rule specifies internal OB applies on the 5th hole",
      "The ball is OB only if it cannot be played from the 14th fairway",
    ],
    correct: 0,
    rule: "Definition of Out of Bounds, Committee Procedures 8A",
    explanation:
      "Internal out of bounds is set by the Committee to keep players on the correct hole. Even though the ball is physically on another part of the course (the 14th fairway), it is out of bounds for the hole you are playing (the 5th). You must take stroke-and-distance relief.",
    tags: ["OB", "internal OB", "boundary", "course markings", "stroke and distance"],
  },
  {
    id: "gen_f32",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Your ball comes to rest on a bridge that crosses a creek marked as a red penalty area. The bridge has no special markings. Where is your ball?",
    choices: [
      "In the penalty area — a bridge over a penalty area is in the penalty area unless the Committee has declared otherwise",
      "On an immovable obstruction in the general area — you get free relief",
      "In the general area because the ball is on a man-made structure",
      "You must drop in the penalty area below the bridge",
    ],
    correct: 0,
    rule: "Definition of Penalty Area, Clarification",
    explanation:
      "The edge of a penalty area extends both upward and downward. A ball on a bridge over a penalty area is in the penalty area unless the Committee has specifically defined the bridge as being in the general area. You may play the ball as it lies or take penalty area relief.",
    tags: ["penalty area", "bridge", "red stakes", "course markings"],
  },
  {
    id: "gen_f33",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A retaining wall runs along the edge of a penalty area. Your ball rests against the wall on the course side (not in the penalty area). Do you get free relief from the wall?",
    choices: [
      "No — a wall bordering a penalty area is part of the penalty area, not an obstruction; no free relief in the general area",
      "Yes — a wall is an immovable obstruction and you get free relief",
      "Only if the wall interferes with your swing",
      "You must take penalty area relief",
    ],
    correct: 0,
    rule: "Definition of Obstruction, Rule 16.1",
    explanation:
      "Objects defining or bordering penalty areas (walls, stakes, etc.) are part of the penalty area and are not obstructions. If your ball is in the general area but the wall interferes with your play, you do not get free obstruction relief. You must play the ball as it lies or declare it unplayable.",
    tags: ["penalty area", "obstruction", "wall", "no relief"],
  },

  // --- Rule 4: Equipment (additional) ---

  {
    id: "gen_f34",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "You share a golf cart with another player. Between you, there are 16 clubs on the cart (your 14 and their 2 extras stored separately). Is this a penalty?",
    choices: [
      "No penalty — as long as each player's clubs are distinguishable and you only use your own",
      "Both players are penalized for 16 clubs being accessible",
      "Only a penalty if the extra clubs are used during the round",
      "The player with 14 clubs is penalized; the other player is fine",
    ],
    correct: 0,
    rule: "Rule 4.1b, Interpretation 4.1b(1)/1",
    explanation:
      "When players share a cart, each player's clubs must be clearly identifiable (typically in separate bags). As long as each player carries no more than 14 and does not use another player's clubs, there is no breach.",
    tags: ["clubs", "14 clubs", "shared cart", "equipment", "no penalty"],
  },
  {
    id: "gen_f35",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "During a round, you discover one of your clubs has a non-conforming groove pattern. You did not know this before the round. What happens?",
    choices: [
      "You are disqualified if you made a stroke with the non-conforming club; if not, declare it out of play with no penalty for carrying it",
      "No penalty as long as you did not intentionally modify it",
      "Two-stroke penalty per hole; declare it out of play",
      "The club is simply removed with no consequences",
    ],
    correct: 0,
    rule: "Rule 4.1a(1)",
    explanation:
      "If a club you started with does not conform to the Equipment Rules, you are disqualified if you made a stroke with it. The key is whether the non-conforming club was actually used to make a stroke during the round.",
    tags: ["clubs", "non-conforming", "equipment", "disqualification"],
  },
  {
    id: "gen_f36",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You change balls between holes even though the ball you were playing was not damaged. Is this allowed?",
    choices: [
      "Yes — under the standard Rules, you may substitute a different ball when starting a new hole",
      "No — you must play the same ball for the entire round",
      "Only if you lost the previous ball",
      "Only if the Committee has adopted the One Ball Rule",
    ],
    correct: 0,
    rule: "Rule 6.3a",
    explanation:
      "Under the standard Rules, you may always substitute a different ball when starting a new hole. The 'One Ball' condition (requiring the same brand and model throughout) is an optional Local Rule sometimes used in professional events.",
    tags: ["ball substitution", "between holes", "equipment", "no penalty"],
  },

  // --- Rule 3: Formats (additional) ---

  {
    id: "gen_f37",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In a four-ball match play format, your partner picks up on a hole because they cannot beat your score. Is this allowed?",
    choices: [
      "Yes — in four-ball, a partner may pick up at any time since only the better score of the side counts",
      "No — every player must hole out on every hole",
      "Only if the opponent concedes your partner's ball",
      "Only after the partner has made at least 3 strokes on the hole",
    ],
    correct: 0,
    rule: "Rule 23.4",
    explanation:
      "In four-ball formats, since only the best score of the side counts on each hole, a player may pick up at any point during a hole if they cannot help their side. This is explicitly permitted and is common practice.",
    tags: ["four-ball", "match play", "pick up", "partner", "format"],
  },
  {
    id: "gen_f38",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In foursomes (alternate shot) stroke play, Player A and Player B tee off in the wrong order — B tees off on a hole when A should have. What is the ruling?",
    choices: [
      "The stroke is cancelled, a two-stroke penalty is applied, and the correct partner (A) must play from the teeing area",
      "No penalty — the order is a suggestion, not a requirement",
      "Disqualification of the team",
      "One-stroke penalty; the ball is in play",
    ],
    correct: 0,
    rule: "Rule 22.3a",
    explanation:
      "In foursomes, partners must alternate tee shots on odd and even holes as agreed. If they play in the wrong order, the stroke is cancelled, the general penalty (two strokes) applies, and the correct partner must play from the teeing area.",
    tags: ["foursomes", "alternate shot", "stroke play", "wrong order", "penalty"],
  },
  {
    id: "gen_f39",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What does the old term 'through the green' refer to in the modern (2019+) Rules of Golf?",
    choices: [
      "This term was replaced by 'general area' in the 2019 Rules modernization",
      "The area between the tee and the putting green",
      "The entire course excluding hazards",
      "The fairway and rough only",
    ],
    correct: 0,
    rule: "Definition of General Area (2019 Rules modernization)",
    explanation:
      "The 2019 Rules replaced the old term 'through the green' with 'general area.' The general area covers the entire course except four specific areas: the teeing area of the hole being played, all penalty areas, all bunkers, and the putting green of the hole being played.",
    tags: ["general area", "through the green", "terminology", "2019 rules"],
  },

  // --- Rule 4: Ball (additional) ---

  {
    id: "gen_f40",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "While playing a hole, your ball splits into pieces after a full iron shot. What do you do?",
    choices: [
      "The stroke does not count — replay the stroke from the same spot with a new ball, no penalty",
      "Play the largest piece as your ball",
      "Take a one-stroke penalty and drop a new ball where the pieces came to rest",
      "The stroke counts; drop a new ball where the ball broke apart",
    ],
    correct: 0,
    rule: "Rule 4.2c(2)",
    explanation:
      "If a ball breaks into pieces as a result of a stroke, the stroke does not count. You must replay the stroke from the original spot without penalty, using a new ball.",
    tags: ["ball", "broken ball", "replay stroke", "no penalty", "substitution"],
  },
  {
    id: "gen_f41",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "You suspect your ball became out of round (no longer spherical) during a hole. What is the correct procedure to check?",
    choices: [
      "Announce your intention, mark and lift the ball, and examine it; if it is clearly out of round, substitute a new ball on the spot",
      "You may not check the ball during a hole — only between holes",
      "Ask a rules official to examine it for you",
      "Roll the ball on the putting green to see if it wobbles",
    ],
    correct: 0,
    rule: "Rule 4.2c",
    explanation:
      "Under Rule 4.2c, if you reasonably believe your ball has become cut, cracked, or out of round during the hole, you may mark and lift it to examine it. You should announce your intention and give your opponent (match play) or another player or marker (stroke play) the opportunity to observe. If the ball is damaged, substitute a new ball on the original spot.",
    tags: ["ball", "damaged ball", "out of round", "lift ball", "substitution"],
  },
  {
    id: "gen_f42",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Before your tee shot, you place a club on the ground behind your ball to help you aim. You remove it before making your stroke. Is there a penalty?",
    choices: [
      "Yes — you may not set down an object to help aim for a stroke, even if you remove it before swinging",
      "No penalty as long as you remove it before making the stroke",
      "Only a penalty during a competition, not a casual round",
      "Only a penalty on the putting green, not the tee",
    ],
    correct: 0,
    rule: "Rule 10.2b(3)",
    explanation:
      "Under Rule 10.2b(3), you must not set down an object (like a club, alignment stick, or any other item) on or near the line of play to help you aim for a stroke. The penalty applies even if you remove the object before actually making the stroke.",
    tags: ["alignment", "equipment", "aiming", "penalty", "teeing area"],
  },
  {
    id: "gen_f43",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "During a competition round, you listen to music through earbuds while playing. Is this allowed?",
    choices: [
      "No — listening to music or any audio content is not allowed during a round",
      "Yes — music is always permitted",
      "Only between holes, not during play of a hole",
      "Only if the volume is low enough to hear other players",
    ],
    correct: 0,
    rule: "Rule 4.3a(4)",
    explanation:
      "Under Rule 4.3a, you must not listen to music or other audio content during a round. The rationale is that it could help you play by eliminating distractions or creating a desired mood or tempo.",
    tags: ["equipment", "music", "earbuds", "electronic device", "penalty"],
  },
  {
    id: "gen_f44",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "Your caddie lifts your ball on the putting green to clean it but forgets to mark its position first. What is the ruling?",
    choices: [
      "One-stroke penalty for failing to mark before lifting; the ball must be replaced on its original spot",
      "No penalty — caddies can always lift on the putting green without marking",
      "Two-stroke penalty; the ball is replaced",
      "No penalty, but the ball must be replaced and a marker placed",
    ],
    correct: 0,
    rule: "Rule 14.1a, Rule 14.1b",
    explanation:
      "A player's caddie may lift the ball on the putting green, but must mark the spot before lifting (Rule 14.1a). Failure to mark before lifting results in a one-stroke penalty. The ball must be replaced on its original spot.",
    tags: ["caddie", "putting green", "lift ball", "marking", "penalty"],
  },
  {
    id: "gen_f45",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You use a tee to mark your ball on the putting green because you forgot your ball marker. Is this permitted?",
    choices: [
      "Yes — you may use any small object (tee, coin, etc.) as a ball marker",
      "No — only official ball markers are permitted",
      "Two-stroke penalty for improper marking",
      "Only a coin is acceptable as a marker",
    ],
    correct: 0,
    rule: "Rule 14.1a, Definition of Ball-Marker",
    explanation:
      "A ball-marker is defined as an artificial object used to mark the spot of a ball to be lifted. This includes a tee, coin, or any similar small piece of equipment. There is no requirement to use a purpose-made ball marker.",
    tags: ["ball marker", "equipment", "putting green", "marking", "no penalty"],
  },

  // =====================================================================
  // PLAYING THE ROUND (Rules 5–6) — 30 scenarios
  // Tier distribution: ~12 weekend, ~11 competitor, ~7 official
  // =====================================================================

  // --- Rule 5: Playing the Round ---

  {
    id: "gen_r1",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You arrive at the 1st tee 3 minutes after your tee time in a stroke play competition. What happens?",
    choices: [
      "Two-stroke penalty on the first hole, but you may start if you are ready within 5 minutes of your tee time",
      "You are disqualified",
      "No penalty as long as you arrive within 10 minutes",
      "One-stroke penalty applied to the 1st hole",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "Under Rule 5.3a, if you arrive at the starting tee ready to play within 5 minutes after your starting time, the penalty in stroke play is two strokes on the first hole (instead of disqualification). If you are more than 5 minutes late, you are disqualified.",
    tags: ["tee time", "late arrival", "penalty", "stroke play", "starting"],
  },
  {
    id: "gen_r2",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "You arrive at the 1st tee 6 minutes after your scheduled tee time. What is the ruling?",
    choices: [
      "You are disqualified — you were more than 5 minutes late",
      "Two-stroke penalty and you start on the 1st hole",
      "You start on the 2nd hole with a penalty",
      "The Committee may waive the penalty if you have a good excuse",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "Under Rule 5.3a, if you are not ready to play at your starting time and do not arrive within 5 minutes, the penalty is disqualification. The 5-minute grace period (with a two-stroke or loss-of-hole penalty) is the only exception.",
    tags: ["tee time", "late arrival", "disqualification", "stroke play", "starting"],
  },
  {
    id: "gen_r3",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Before your round, you warm up by hitting balls on the practice range toward the course. A few balls land on a fairway. Is there a penalty?",
    choices: [
      "No penalty for practicing before the round — though the Committee may restrict where you practice",
      "Two-stroke penalty if any ball lands on the course",
      "Disqualification for practicing on the course",
      "One-stroke penalty added to the first hole",
    ],
    correct: 0,
    rule: "Rule 5.2",
    explanation:
      "Under Rule 5.2, you may practice before a round unless the Committee restricts it. In stroke play, the Committee may prohibit practice on the competition course on the day of the round, but practice on designated ranges is permitted.",
    tags: ["practice", "warm up", "driving range", "before round"],
  },
  {
    id: "gen_r4",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, you hit a practice chip shot toward the next green while walking between holes. What is the penalty?",
    choices: [
      "Two-stroke penalty (the general penalty)",
      "No penalty — you may practice between holes",
      "One-stroke penalty",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 5.5b",
    explanation:
      "Between holes in stroke play, you may practice putting or chipping on or near the green of the last hole played, any practice green, or the next teeing area — but NOT by playing a practice stroke toward the next green or anywhere else on the course. Doing so incurs the general penalty (two strokes).",
    tags: ["practice", "between holes", "stroke play", "penalty", "chipping"],
  },
  {
    id: "gen_r5",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "During a suspension of play for a dangerous situation (lightning), a player continues to play. What is the penalty?",
    choices: [
      "Disqualification",
      "Two-stroke penalty",
      "The player's scores on those holes do not count",
      "Warning for the first offense; disqualification for the second",
    ],
    correct: 0,
    rule: "Rule 5.7b",
    explanation:
      "When play is suspended for a dangerous situation (typically lightning), all players must stop play immediately. If a player continues to play during such a suspension, the penalty is disqualification. Player safety is paramount.",
    tags: ["suspension", "lightning", "dangerous situation", "disqualification", "discontinue"],
  },
  {
    id: "gen_r6",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "The Committee suspends play for a non-dangerous reason (e.g., darkness approaching). You are in the middle of a hole. Must you stop immediately?",
    choices: [
      "Yes, you must stop immediately unless the Committee specifically allows players to finish the hole in progress",
      "You may always finish the hole you are on before stopping",
      "You must stop only after your next stroke",
      "You may continue playing for up to 5 more minutes",
    ],
    correct: 0,
    rule: "Rule 5.7b(1)",
    explanation:
      "When play is suspended for a non-dangerous reason, the default is that players must stop immediately. However, the Committee may offer the option to finish the hole in progress. Players should pay attention to how the Committee communicates the suspension.",
    tags: ["suspension", "discontinue", "committee", "non-dangerous", "finish hole"],
  },
  {
    id: "gen_r7",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Play is suspended while you are about to putt on the 9th green. When play resumes the next day, where do you start?",
    choices: [
      "You resume from exactly where you stopped — on the 9th green with your ball in its marked position",
      "You start at the 10th tee and come back to the 9th later",
      "You replay the entire 9th hole from the tee",
      "The Committee decides where you restart",
    ],
    correct: 0,
    rule: "Rule 5.7c",
    explanation:
      "When play resumes after a suspension, you resume from where you stopped. If you were on the 9th green, you resume play there with your ball in its marked position. You should always mark your ball when play is suspended.",
    tags: ["suspension", "resumption", "marking ball", "discontinue"],
  },
  {
    id: "gen_r8",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "The Committee has adopted a pace-of-play policy with time limits per hole. A group exceeds the time limit on a hole. Can the Committee penalize the players?",
    choices: [
      "Yes — if the Committee has adopted a pace-of-play policy with penalties, it can impose the stated penalties on players who breach the limits",
      "No — pace-of-play guidelines are suggestions only, with no enforceable penalties",
      "Only if all players in the group agree they were slow",
      "Only the slowest individual player can be penalized",
    ],
    correct: 0,
    rule: "Rule 5.6b",
    explanation:
      "Under Rule 5.6b, the Committee may adopt a pace-of-play policy that includes time limits and penalties for breach. When such a policy is in effect, the Committee can apply the specified penalties (typically escalating from warnings to strokes to disqualification).",
    tags: ["slow play", "pace of play", "committee", "penalty", "time limit"],
  },
  {
    id: "gen_r9",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You see lightning in the distance but the Committee has not yet suspended play. Can you stop playing on your own?",
    choices: [
      "Yes — you may discontinue play if you reasonably believe there is danger from lightning",
      "No — only the Committee can suspend play for any reason",
      "Only if all players in your group agree",
      "You may stop for 10 minutes but then must resume",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "Under Rule 5.7a, a player may discontinue play if they reasonably believe there is danger from lightning. This is the one situation where a player can stop without Committee authorization. For non-dangerous weather (rain, wind), you must continue unless the Committee suspends play.",
    tags: ["discontinue", "lightning", "danger", "player decision", "safety"],
  },

  // --- Rule 6: Playing a Hole ---

  {
    id: "gen_r10",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "On the teeing area, you tee your ball two feet behind the front edge of the tee markers. Is this allowed?",
    choices: [
      "Yes — you may tee the ball anywhere within the teeing area, which extends two club-lengths back from the front of the tee markers",
      "No — the ball must be between or in front of the tee markers",
      "Only one club-length behind the markers is allowed",
      "Yes, but your feet must also be within the teeing area",
    ],
    correct: 0,
    rule: "Rule 6.2b(2), Definition of Teeing Area",
    explanation:
      "The teeing area is a rectangle two club-lengths deep, measured from the front of the tee markers and extending back. Your ball must be within this rectangle, but your feet may be outside it. Two feet behind is well within the allowed depth.",
    tags: ["teeing area", "tee markers", "tee shot", "ball position"],
  },
  {
    id: "gen_r11",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, you play your tee shot from a spot three club-lengths behind the tee markers. What happens?",
    choices: [
      "Two-stroke penalty; you must cancel the stroke and replay from within the teeing area before making a stroke on the next hole",
      "No penalty — the ball is in play",
      "One-stroke penalty; play the ball as it lies",
      "Another player in your group may require you to replay or let it stand",
    ],
    correct: 0,
    rule: "Rule 6.1b(2)",
    explanation:
      "Three club-lengths behind the tee markers is outside the teeing area (which only extends two club-lengths back). In stroke play, playing from outside the teeing area is a two-stroke penalty. You must correct by playing from within the teeing area. Failure to correct before stroking on the next tee results in disqualification.",
    tags: ["teeing area", "outside teeing area", "stroke play", "penalty", "correction"],
  },
  {
    id: "gen_r12",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Your feet are standing outside the teeing area when you hit your tee shot, but the ball is properly teed within the markers. Is there a penalty?",
    choices: [
      "No penalty — only the ball must be within the teeing area, not your feet",
      "Two-stroke penalty — your body must be in the teeing area",
      "One-stroke penalty for improper stance",
      "No penalty in match play, but two strokes in stroke play",
    ],
    correct: 0,
    rule: "Rule 6.2b(2)",
    explanation:
      "The teeing area only defines where the ball must be teed. There is no requirement for your feet or body to be within the teeing area. You may stand outside it (even behind it) as long as the ball is properly teed within the rectangle.",
    tags: ["teeing area", "stance", "tee shot", "no penalty", "feet"],
  },
  {
    id: "gen_r13",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "On the tee, you accidentally knock your ball off the tee peg while waggling your club. Does this count as a stroke?",
    choices: [
      "No — a ball on a tee is not yet in play; re-tee without penalty",
      "Yes — any contact with the ball counts as a stroke",
      "No, but you get a one-stroke penalty",
      "Only if the ball goes past the tee markers",
    ],
    correct: 0,
    rule: "Rule 6.2b(5)",
    explanation:
      "A ball on a tee in the teeing area is not yet in play. If it is knocked off the tee before a stroke is made (including during a waggle or practice swing), it may be re-teed without penalty. A 'stroke' requires forward movement of the club made with the intention of striking the ball.",
    tags: ["teeing area", "tee", "not in play", "no penalty", "re-tee"],
  },
  {
    id: "gen_r14",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, after finishing a hole you realize you played from the wrong set of tees. What is the ruling?",
    choices: [
      "Two-stroke penalty; you must correct by replaying from the correct tees before making a stroke on the next hole, or you are disqualified",
      "No penalty — the score stands as played",
      "One-stroke penalty; the score counts",
      "Replay the hole at the end of the round",
    ],
    correct: 0,
    rule: "Rule 6.1b(2)",
    explanation:
      "Playing from the wrong teeing area is equivalent to playing from outside the teeing area. In stroke play, the penalty is two strokes and you must correct by replaying from the correct teeing area before stroking on the next hole. If you fail to correct, you are disqualified.",
    tags: ["teeing area", "wrong tees", "stroke play", "penalty", "correction"],
  },
  {
    id: "gen_r15",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In match play, you and your opponent tied (halved) the 1st hole. Who tees off first on the 2nd hole?",
    choices: [
      "The player who had the honor on the 1st tee retains it",
      "The player with the lower handicap",
      "The players must flip a coin",
      "Either player may go first",
    ],
    correct: 0,
    rule: "Rule 6.4a(1)",
    explanation:
      "In match play, the player who had the honor retains it when a hole is halved. The honor passes only when a player wins a hole. Since the 1st hole was halved, whoever teed off first on the 1st keeps the honor on the 2nd.",
    tags: ["match play", "honor", "order of play", "halved hole", "teeing area"],
  },
  {
    id: "gen_r16",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, your group decides to play 'ready golf' — whoever is ready plays first regardless of distance from the hole. Is this permitted?",
    choices: [
      "Yes — the Rules encourage playing out of turn to help pace of play; there is no penalty in stroke play",
      "No — the player farthest from the hole must always play first",
      "Only if all players in the group agree beforehand",
      "Only on the tee, not in the fairway or on the green",
    ],
    correct: 0,
    rule: "Rule 6.4b(2)",
    explanation:
      "In stroke play, there is no penalty for playing out of turn, and the Rules encourage 'ready golf' (playing in a safe and responsible way when ready) to help pace of play. The Committee may even explicitly promote this.",
    tags: ["order of play", "ready golf", "stroke play", "pace of play", "no penalty"],
  },
  {
    id: "gen_r17",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In match play, you play out of turn from the fairway. Your opponent says nothing. After you hit your next shot, your opponent brings up the out-of-turn stroke. Can they recall it?",
    choices: [
      "No — the opponent must request a recall before either player makes another stroke; it is too late now",
      "Yes — the opponent can recall it at any point during the hole",
      "No — playing out of turn is never penalized in match play",
      "Yes — but only if the out-of-turn stroke gave you an advantage",
    ],
    correct: 0,
    rule: "Rule 6.4a(2)",
    explanation:
      "In match play, if you play out of turn, your opponent may cancel the stroke and require you to replay in the correct order — but this must be done promptly, before either player makes another stroke. Once the next stroke is made, the opportunity to recall is lost.",
    tags: ["match play", "order of play", "out of turn", "cancel stroke", "timing"],
  },
  {
    id: "gen_r18",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "On the putting green, your ball is in your playing partner's line of putt. They ask you to mark and lift your ball. Must you comply?",
    choices: [
      "Yes — any player may require you to mark and lift if your ball might interfere with their play",
      "No — you only have to move it if it is within one club-length of their ball",
      "Only in match play, not stroke play",
      "You can decline unless a rules official asks",
    ],
    correct: 0,
    rule: "Rule 15.3b",
    explanation:
      "Under Rule 15.3b, if your ball at rest might help or interfere with any player's play, any player may require you to mark and lift your ball. You must comply. This is common on the putting green when balls are in each other's lines.",
    tags: ["putting green", "mark ball", "lift ball", "interference", "line of putt"],
  },
  {
    id: "gen_r19",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "You ask your caddie to find out what club another player in your group just used for their approach shot. Is this a breach of the advice rule?",
    choices: [
      "No — once a stroke is made, the club used is considered public information and asking about it is not advice",
      "Yes — asking about another player's club selection is giving or getting advice",
      "No penalty on you, but your caddie receives a penalty",
      "Only a penalty if the caddie tells you before you play your shot",
    ],
    correct: 0,
    rule: "Rule 10.2, Definition of Advice",
    explanation:
      "Information that is 'public' is not advice. Once a player has made a stroke, the club they used becomes public information. You may look in another player's bag, ask them what club they used, or have your caddie find out — none of this is a breach.",
    tags: ["advice", "caddie", "club selection", "public information", "no penalty"],
  },
  {
    id: "gen_r20",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "During your round, you ask a marshal about the distance to the flag. Is this allowed?",
    choices: [
      "Yes — distance is public information and asking anyone about it is not advice",
      "No — you may only get distance from your caddie or a rangefinder",
      "Only if the marshal volunteers the information",
      "Only in casual rounds, not competitions",
    ],
    correct: 0,
    rule: "Rule 10.2, Definition of Advice",
    explanation:
      "Distance is public information, not advice. You may ask anyone — caddie, spectator, marshal, another player — for distance information without penalty. 'Advice' only covers suggestions about club selection, shot technique, or playing strategy.",
    tags: ["advice", "distance", "public information", "marshal", "no penalty"],
  },
  {
    id: "gen_r21",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "Your caddie deliberately stands behind you on an extension of your line of play as you take your stance for a shot. You do not ask them to move. What is the penalty?",
    choices: [
      "Two-stroke penalty (general penalty) — your caddie must not stand on or close to an extension of your line of play behind you when you begin taking your stance for a stroke",
      "No penalty — caddies can stand anywhere on the course",
      "One-stroke penalty on the caddie (not the player)",
      "No penalty as long as the caddie moves before impact",
    ],
    correct: 0,
    rule: "Rule 10.2b(4)",
    explanation:
      "Under Rule 10.2b(4), from the time you begin taking your stance until the stroke is made, your caddie must not deliberately stand on or close to an extension of your line of play behind you. If the caddie does so, the player gets the general penalty (two strokes in stroke play).",
    tags: ["caddie", "line of play", "stance", "penalty", "alignment"],
  },
  {
    id: "gen_r22",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In stroke play, you play another player's ball from the rough. They then play your ball, neither of you realizing the swap. What happens?",
    choices: [
      "Both players get a two-stroke penalty; each must go back and play their correct ball from where the wrong ball was played",
      "No penalty since it was mutual and unintentional",
      "Both players are disqualified",
      "Only the player who played wrong first gets a penalty",
    ],
    correct: 0,
    rule: "Rule 6.3c(1)",
    explanation:
      "Each player who plays a wrong ball gets a two-stroke penalty. Strokes made with the wrong ball do not count. Each must go back and play their correct ball from where it was before it was wrongly played. Failure to correct before teeing off on the next hole results in disqualification.",
    tags: ["wrong ball", "stroke play", "penalty", "correction", "identification"],
  },
  {
    id: "gen_r23",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In match play, you play a wrong ball from the rough. The error is discovered before either player tees off on the next hole. What is the ruling?",
    choices: [
      "You lose the hole",
      "Two-stroke penalty; go back and play the correct ball",
      "No penalty; go back and play the correct ball",
      "The hole is halved",
    ],
    correct: 0,
    rule: "Rule 6.3c(1)",
    explanation:
      "In match play, playing a wrong ball results in loss of hole. Unlike stroke play (two-stroke penalty with correction required), match play imposes the immediate loss of hole. Strokes made with the wrong ball do not count.",
    tags: ["wrong ball", "match play", "loss of hole", "penalty"],
  },
  {
    id: "gen_r24",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Your ball is in a deep divot in the fairway. You want to declare it unplayable. Can you do this?",
    choices: [
      "Yes — you may declare your ball unplayable anywhere on the course except in a penalty area",
      "No — you can only declare unplayable in the rough or trees",
      "Yes, but only with Committee approval",
      "No — a divot does not qualify as an unplayable lie",
    ],
    correct: 0,
    rule: "Rule 19.1",
    explanation:
      "You may declare your ball unplayable at any spot on the course except when the ball is in a penalty area. This is entirely your decision — no justification is needed. You take relief under one of the three unplayable ball options, each with a one-stroke penalty.",
    tags: ["unplayable", "fairway", "divot", "penalty", "relief options"],
  },
  {
    id: "gen_r25",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "Your playing partner in stroke play tells you to 'keep your left arm straight' on the tee. What is the penalty?",
    choices: [
      "Your playing partner gets a two-stroke penalty for giving advice; you receive no penalty",
      "Both of you receive a two-stroke penalty",
      "No penalty — swing tips are not considered advice",
      "You receive a two-stroke penalty for receiving advice",
    ],
    correct: 0,
    rule: "Rule 10.2a(1)",
    explanation:
      "In individual stroke play, giving advice (including swing tips) to another player results in a two-stroke penalty on the player who gave the advice. The player who received the unsolicited advice does not receive a penalty.",
    tags: ["advice", "swing tip", "stroke play", "penalty"],
  },
  {
    id: "gen_r26",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In stroke play, you pick up your ball on the 15th hole without holing out, intending to withdraw. You then change your mind but have already teed off on the 16th hole. What is the ruling?",
    choices: [
      "You are disqualified — you failed to hole out and cannot correct after making a stroke on the next tee",
      "You may continue with a two-stroke penalty on the 15th",
      "You may replay the 15th hole from the tee",
      "The Committee decides whether you can continue",
    ],
    correct: 0,
    rule: "Rule 3.3c",
    explanation:
      "Under Rule 3.3c, if you fail to hole out on a hole, you must correct the mistake before making a stroke on the next teeing area. Once you have teed off on the 16th hole, it is too late to correct — you are disqualified. Had you changed your mind before teeing off on the 16th, you could have gone back, replaced the ball, and holed out (with a one-stroke penalty for lifting without authority under Rule 9.4b).",
    tags: ["stroke play", "hole out", "disqualification", "withdrawal", "pick up"],
  },
  {
    id: "gen_r27",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "A player on an adjacent fairway shouts to your group asking what club you just used on a par 3. You shout back '7-iron.' Is there a penalty?",
    choices: [
      "You receive a two-stroke penalty for giving advice to another competitor",
      "One-stroke penalty because it was unsolicited",
      "No penalty because the other player is not in your group",
      "No — what club was used after the stroke is public information, not advice",
    ],
    correct: 3,
    rule: "Rule 10.2a, Definition of Advice",
    explanation:
      "Information about what club was used after a stroke has been made is considered public information, not advice. Any player or person may share or ask about what club was used post-stroke. This is not a breach of the advice rule.",
    tags: ["advice", "club selection", "public information", "no penalty"],
  },
  {
    id: "gen_r28",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You arrive at the 1st tee on time but realize you left your golf shoes in the car. Can you play the round in sneakers?",
    choices: [
      "Yes — the Rules do not require specific footwear; you can play in any shoes",
      "No — golf shoes are required for competition rounds",
      "Only with the Committee's permission",
      "Yes, but with a two-stroke penalty on the first hole",
    ],
    correct: 0,
    rule: "Rule 4.3, Equipment Rules",
    explanation:
      "The Rules of Golf do not require specific footwear. As long as the shoes do not provide an unfair advantage, you may play in sneakers or any other reasonable footwear. Dress codes are set by the Committee or the club, but are separate from the Rules of Golf themselves.",
    tags: ["equipment", "footwear", "starting", "no penalty"],
  },
  {
    id: "gen_r29",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "During a round, you use binoculars to look at the line of play on a long par 5. Is this allowed?",
    choices: [
      "Yes — binoculars may be used to look ahead, as long as they do not include a rangefinder feature",
      "No — optical aids are not allowed during a round",
      "Only between holes, not during play of a hole",
      "Only if the Committee authorizes their use",
    ],
    correct: 0,
    rule: "Rule 4.3a",
    explanation:
      "Binoculars are permitted during a round to look at objects at a distance. They are not considered equipment that gives an unfair advantage. However, if they include a rangefinder feature, the distance-measuring device rules apply.",
    tags: ["equipment", "binoculars", "optical aid", "no penalty"],
  },
  {
    id: "gen_r30",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Between holes, you putt a few practice putts on the putting green you just finished. Is this allowed in stroke play?",
    choices: [
      "Yes — between holes you may practice putting or chipping on or near the green of the hole just completed",
      "No — you cannot practice at any time during a round in stroke play",
      "Only if no other groups are waiting behind you",
      "Only on a practice green, not the green you just played",
    ],
    correct: 0,
    rule: "Rule 5.5b",
    explanation:
      "Between the play of two holes, you may practice putting or chipping on or near the putting green of the hole just completed, any practice green, or the next teeing area. This is allowed as long as you do not unreasonably delay play and the Committee hasn't restricted it.",
    tags: ["practice", "between holes", "putting green", "stroke play", "no penalty"],
  },
];
