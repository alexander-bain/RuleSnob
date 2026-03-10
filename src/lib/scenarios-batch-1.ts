import { Scenario } from "@/types";

export const SCENARIOS_BATCH_1: Scenario[] = [
  // ============================================================
  // RULES 1-2: THE GAME, PLAYER CONDUCT (10 scenarios)
  // ============================================================

  // f6 — weekend
  {
    id: "f6",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "In stroke play, you realize you played your partner's ball from the fairway instead of your own. Your partner's ball is identical to yours. What happens?",
    choices: [
      "Two-stroke penalty; you must go back and play your own ball",
      "No penalty if the balls are the same brand and model",
      "One-stroke penalty; play your own ball from where the wrong ball lies",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 6.3c",
    explanation:
      "Playing a wrong ball results in a two-stroke penalty in stroke play, regardless of whether the balls look identical. Strokes made with the wrong ball do not count toward your score. You must correct the error by playing your own ball before making a stroke on the next tee, or you are disqualified.",
    tags: ["wrong-ball", "stroke-play", "fairway", "penalty"],
  },

  // f7 — competitor
  {
    id: "f7",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In match play, your opponent deliberately gives you incorrect information about the number of strokes they have taken on a hole. You discover the error before the result of the hole is finalized. What happens?",
    choices: [
      "Your opponent loses the hole",
      "Your opponent gets a two-stroke penalty",
      "No penalty if they correct it before the next tee",
      "Your opponent is disqualified from the match",
    ],
    correct: 0,
    rule: "Rule 3.2d(1)",
    explanation:
      "In match play, a player must tell the opponent the correct number of strokes taken when asked, or as soon as reasonably possible. Deliberately giving wrong information about stroke count is a serious breach. If discovered before the result of the hole is final, the opponent loses the hole.",
    tags: ["match-play", "scoring", "opponent", "penalty"],
  },

  // f8 — competitor
  {
    id: "f8",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In match play, you concede your opponent's next putt by saying 'That's good.' Your opponent then putts anyway and misses. What is the status of the hole?",
    choices: [
      "The concession stands — your opponent has completed the hole with the conceded score",
      "Since they missed the putt, the actual result counts",
      "The concession is void because they chose to putt",
      "Your opponent must re-putt from the original spot",
    ],
    correct: 0,
    rule: "Rule 3.2b(1)",
    explanation:
      "A concession in match play cannot be declined or withdrawn once made. When you said 'That's good,' the concession was final. Your opponent's subsequent putt is irrelevant — they completed the hole with the conceded score, regardless of what happened after.",
    tags: ["match-play", "green", "opponent"],
  },

  // f9 — weekend
  {
    id: "f9",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is the maximum score a player can make on any hole in stroke play under the Rules of Golf?",
    choices: [
      "There is no maximum — you must hole out regardless of how many strokes it takes",
      "Double par (e.g., 10 on a par 5)",
      "Triple bogey",
      "10 strokes",
    ],
    correct: 0,
    rule: "Rule 3.3c",
    explanation:
      "Under standard stroke play, there is no maximum score on a hole — you must hole out. However, the Committee may adopt a Maximum Score form of competition (Rule 21.2) where players have a maximum set by the Committee (such as double par), but this is a separate form of play that must be specifically adopted.",
    tags: ["stroke-play", "scoring"],
  },

  // f10 — official
  {
    id: "f10",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In match play, you and your opponent both make a 5 on a hole. Later, you realize your opponent actually made a 6 but neither of you noticed. The result of the match has been finalized. Can the result of that hole be changed?",
    choices: [
      "No — once the result of the match is final, it stands even if based on wrong information, unless the opponent knew they gave wrong information",
      "Yes — the hole is automatically corrected to a win for you",
      "Yes — any scoring error can be corrected at any time",
      "No — but only because both players already left the course",
    ],
    correct: 0,
    rule: "Rule 3.2d(3)",
    explanation:
      "Once the result of a match is final, it stands even if later found to be based on a wrong ruling or wrong stroke count — UNLESS the opponent deliberately gave wrong information. If the opponent simply miscounted without intent to deceive, the finalized result stands.",
    tags: ["match-play", "scoring", "opponent"],
  },

  // f11 — competitor
  {
    id: "f11",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A player in your group is consistently slow, taking well over a minute for routine shots. The Committee has a pace of play policy. What penalty can the Committee impose?",
    choices: [
      "One-stroke penalty for the first breach, with increasing penalties for further breaches up to disqualification",
      "A verbal warning only — pace of play is not penalized under the Rules",
      "Immediate disqualification",
      "Two-stroke penalty for each hole where pace was slow",
    ],
    correct: 0,
    rule: "Rule 5.6b",
    explanation:
      "Under Rule 5.6b, the Committee may adopt a pace of play policy with time limits. The recommended penalty structure is one stroke for the first breach, two strokes for the second, and disqualification for the third. Without a Committee policy, the Rules still require players not to unreasonably delay play.",
    tags: ["pace-of-play", "committee", "penalty", "stroke-play"],
  },

  // f12 — official
  {
    id: "f12",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "Under the Standards of Player Conduct (Rule 1.2), what action can a Committee take for serious misconduct by a player?",
    choices: [
      "Disqualify the player for serious misconduct, even if there is no specific Rule violation for the action",
      "Only penalize the player if a specific Rule was broken",
      "Issue a formal warning but cannot disqualify",
      "Suspend the player for the next round only",
    ],
    correct: 0,
    rule: "Rule 1.2a",
    explanation:
      "Rule 1.2a requires all players to act in the spirit of the game. The Committee has the authority under Rule 1.2a to disqualify a player for serious misconduct that is contrary to the spirit of the game — even if no other specific Rule of Golf was violated. This covers acts like deliberate damage to the course, physical altercations, or extreme verbal abuse.",
    tags: ["committee", "disqualification", "penalty"],
  },

  // f13 — weekend
  {
    id: "f13",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You are playing a casual round with friends using your own personal rules (like mulligans and gimmes). Does the Rules of Golf have anything to say about this?",
    choices: [
      "The Rules only apply when you choose to play under them; casual rounds can use any agreed format",
      "The Rules of Golf must always be followed on any golf course",
      "Using mulligans is a violation that can result in a golf handicap being revoked",
      "The Rules prohibit any modification to the standard rules of play",
    ],
    correct: 0,
    rule: "Rule 1.1",
    explanation:
      "Rule 1.1 states the Rules apply when you choose to play under them — in a competition organized by a Committee, or when playing on your own and choosing to play by the Rules. Casual rounds with friends using house rules like mulligans are not governed by the Rules of Golf, though scores from such rounds should not be posted for handicap purposes.",
    tags: ["stroke-play", "scoring"],
  },

  // f14 — weekend
  {
    id: "f14",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You realize you accidentally broke a Rule two holes ago. No one noticed. What should you do?",
    choices: [
      "You should report the penalty to your marker or the Committee — the game relies on player honesty to call penalties on themselves",
      "Since no one noticed, there's nothing to do",
      "Only report it if someone asks",
      "It's too late to add a penalty after the hole is completed",
    ],
    correct: 0,
    rule: "Rule 1.3a",
    explanation:
      "Under Rule 1.3a, players are expected to recognize when they have breached a Rule, be honest in applying penalties, and self-report. The Rules of Golf are unique in sport — players are their own referees. Failing to apply a known penalty could lead to disqualification for returning an incorrect scorecard.",
    tags: ["penalty", "scoring", "scorecard"],
  },

  // f15 — competitor
  {
    id: "f15",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In match play, can you concede the match to your opponent at any point?",
    choices: [
      "Yes — a player may concede a stroke, a hole, or the match at any time before the outcome is determined",
      "No — a match must be played to completion",
      "Only if you are 3 or more holes down",
      "Only with the Committee's approval",
    ],
    correct: 0,
    rule: "Rule 3.2a",
    explanation:
      "In match play, a player may concede the opponent's next stroke, a hole, or the entire match at any time. A concession is final and cannot be declined or withdrawn. This is a fundamental feature of match play that does not exist in stroke play.",
    tags: ["match-play", "opponent"],
  },

  // ============================================================
  // RULE 3: THE COMPETITION (8 scenarios)
  // ============================================================

  // f16 — weekend
  {
    id: "f16",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "In stroke play, you sign and return your scorecard. You then realize you wrote a 4 on a hole where you actually made a 5. What happens?",
    choices: [
      "You are disqualified for returning a scorecard with a score lower than actually taken",
      "You can correct the scorecard since you realized the error",
      "The Committee adds a two-stroke penalty and changes the score to 5",
      "No penalty — the Committee will review video and correct it",
    ],
    correct: 0,
    rule: "Rule 3.3b(3)",
    explanation:
      "In stroke play, if you return a scorecard with a score on any hole that is lower than the actual score, you are disqualified. The player is responsible for the accuracy of their hole scores. However, if the score returned is higher than actually taken, the higher score stands.",
    tags: ["stroke-play", "scoring", "scorecard", "disqualification"],
  },

  // f17 — competitor
  {
    id: "f17",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, you return your scorecard and later realize you wrote a 6 on a hole where you actually scored a 5. What happens?",
    choices: [
      "The higher score (6) stands — the Committee will not change it",
      "The Committee corrects it to the actual score of 5",
      "You are disqualified for an incorrect scorecard",
      "You may request the Committee to change it before results are official",
    ],
    correct: 0,
    rule: "Rule 3.3b(3)",
    explanation:
      "If the score returned on a hole is higher than the actual score, the higher score stands. This is different from returning a lower score, which results in disqualification. The player bears the consequence of their error — the Committee will not lower a score on a returned card.",
    tags: ["stroke-play", "scoring", "scorecard"],
  },

  // f18 — weekend
  {
    id: "f18",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "In stroke play, who is responsible for adding up the total score on the scorecard?",
    choices: [
      "The Committee — the player is only responsible for each individual hole score",
      "The player who signs the card",
      "The marker who attests the card",
      "Both the player and the marker share responsibility",
    ],
    correct: 0,
    rule: "Rule 3.3b(2)",
    explanation:
      "The player is responsible for making sure each hole score is correct. The Committee is responsible for adding up the hole scores and applying any handicap. If there is an addition error, the Committee corrects it without penalty to the player.",
    tags: ["stroke-play", "scoring", "scorecard", "committee"],
  },

  // f19 — competitor
  {
    id: "f19",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, you incur a penalty but do not include the penalty stroke(s) in the score you record on the hole. You return your signed scorecard. What happens?",
    choices: [
      "You are disqualified, because the recorded score is lower than the actual score",
      "The Committee adds the penalty strokes and your corrected score stands",
      "Two additional penalty strokes are added on top of the original penalty",
      "No consequence if you verbally reported the penalty to a Committee member",
    ],
    correct: 0,
    rule: "Rule 3.3b(3)",
    explanation:
      "If you fail to include a known penalty in your score and return a card with a lower score than actually taken on a hole, you are disqualified. It is the player's responsibility to know the Rules and include all penalty strokes before returning the scorecard. However, if you were unaware you had a penalty, the Committee adds the strokes and you are not disqualified.",
    tags: ["stroke-play", "scoring", "scorecard", "penalty", "disqualification"],
  },

  // f20 — competitor
  {
    id: "f20",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, you arrive at the first tee 3 minutes after your assigned starting time. The Committee has not disqualified you. What is the penalty?",
    choices: [
      "Two-stroke penalty applied to the first hole",
      "Disqualification — there is no grace period",
      "No penalty if you arrive within 5 minutes",
      "One-stroke penalty applied to the first hole",
    ],
    correct: 0,
    rule: "Rule 5.3a",
    explanation:
      "Under Rule 5.3a, the player must start at the time set by the Committee. If you are late but arrive within 5 minutes of your starting time, the penalty is the general penalty (two strokes) applied to your first hole instead of disqualification. Arriving more than 5 minutes late results in disqualification.",
    tags: ["stroke-play", "penalty", "pace-of-play"],
  },

  // f21 — official
  {
    id: "f21",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In a handicap stroke play competition, you return your scorecard without your handicap written on it. What happens?",
    choices: [
      "You are disqualified",
      "The Committee looks up your handicap and applies it — no penalty",
      "You receive a two-stroke penalty",
      "Your gross score stands without handicap adjustment",
    ],
    correct: 0,
    rule: "Rule 3.3b(4)",
    explanation:
      "In a handicap competition, the player is responsible for ensuring the correct handicap is on the scorecard before returning it. If the handicap is missing or is higher than the actual handicap (resulting in a lower net score), the player is disqualified. If the handicap on the card is lower than the actual handicap, the lower handicap stands.",
    tags: ["stroke-play", "scoring", "scorecard", "handicap", "disqualification"],
  },

  // f22 — weekend
  {
    id: "f22",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is the fundamental difference between stroke play and match play?",
    choices: [
      "In stroke play, total strokes for all holes determine the winner; in match play, you win individual holes and the player who wins more holes wins the match",
      "In stroke play, you play against the course; in match play, all players play the same ball",
      "Stroke play has penalties; match play does not",
      "Match play is only for two players; stroke play allows any number",
    ],
    correct: 0,
    rule: "Rules 3.1, 3.2",
    explanation:
      "In stroke play (Rule 3.1), the competitor with the fewest total strokes over all rounds wins. In match play (Rule 3.2), you compete hole by hole against your opponent — the player winning more holes wins the match. The penalty structures also differ (general penalty is two strokes in stroke play, loss of hole in match play).",
    tags: ["stroke-play", "match-play"],
  },

  // f23 — competitor
  {
    id: "f23",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, you and another player tie at the end of the round. How is the tie broken?",
    choices: [
      "It depends on the Committee — they may use a playoff, countback, or declare co-winners; the Rules do not prescribe one method",
      "The player with the lower score on the 18th hole wins",
      "There is always a sudden-death playoff starting at hole 1",
      "Whoever had the lower front nine score wins",
    ],
    correct: 0,
    rule: "Rule 3.3a",
    explanation:
      "The Rules of Golf do not prescribe a specific tiebreaking method. The Committee determines in its Terms of the Competition how ties will be broken — this could be a hole-by-hole playoff, a scorecard countback (using last 9, last 6, last 3 holes), or co-winners. The method must be announced in advance.",
    tags: ["stroke-play", "scoring", "committee"],
  },

  // ============================================================
  // RULE 4: PLAYER'S EQUIPMENT (15 scenarios)
  // ============================================================

  // f24 — weekend
  {
    id: "f24",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is the maximum number of clubs you may carry during a round?",
    choices: [
      "14",
      "12",
      "No limit",
      "15",
    ],
    correct: 0,
    rule: "Rule 4.1b(1)",
    explanation:
      "Under Rule 4.1b(1), a player must not start a round with more than 14 clubs, or have more than 14 clubs during the round. There is no restriction on which 14 clubs you choose — any combination of woods, irons, wedges, and putters is allowed.",
    tags: ["clubs", "penalty"],
  },

  // f25 — competitor
  {
    id: "f25",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In match play, you discover on the 5th tee that you have 15 clubs in your bag. You had 15 from the start of the round. What is the penalty?",
    choices: [
      "You must declare a club out of play; the match score is adjusted by deducting one hole for each hole played with the extra club, maximum deduction of two holes",
      "Two-stroke penalty per hole, max four strokes",
      "You lose only the current hole",
      "No penalty if you declare the extra club out of play immediately",
    ],
    correct: 0,
    rule: "Rule 4.1b(1)",
    explanation:
      "In match play, the penalty for carrying excess clubs is applied by deducting one hole from the match score for each hole where a breach occurred, with a maximum deduction of two holes. You must immediately declare which club is out of play. So if you played 4 holes with 15 clubs, you deduct 2 holes from the match score.",
    tags: ["clubs", "match-play", "penalty"],
  },

  // f26 — weekend
  {
    id: "f26",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You start the round with 13 clubs. During the round, can you add another club?",
    choices: [
      "Yes, as long as you don't exceed 14 clubs and you don't unduly delay play",
      "No — you must play with whatever clubs you started the round with",
      "Only if a club breaks during the round",
      "Yes, but only before the 10th hole",
    ],
    correct: 0,
    rule: "Rule 4.1b(1)",
    explanation:
      "If you start with fewer than 14 clubs, you may add clubs during the round up to the 14-club limit. However, you must not unduly delay play to do so, and you must not add a club by borrowing one that another player is using on the course (you could get one from the pro shop, your car, etc.).",
    tags: ["clubs"],
  },

  // f27 — competitor
  {
    id: "f27",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "During the round, you and your playing partner both carry 14 clubs. Can you borrow one of their clubs for a shot?",
    choices: [
      "No — you cannot use a club selected for play by anyone else playing on the course",
      "Yes — borrowing a club for one shot is always allowed",
      "Yes, but only if they are not using it at the time",
      "Only in a casual round, not in competition",
    ],
    correct: 0,
    rule: "Rule 4.1b(2)",
    explanation:
      "Under Rule 4.1b(2), you must not make a stroke with a club being used by anyone else who is playing on the course. This prohibition applies even if the other player has fewer than 14 clubs. Sharing clubs is not permitted during a round.",
    tags: ["clubs", "partner"],
  },

  // f28 — weekend
  {
    id: "f28",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Your 7-iron head comes loose from the shaft during a swing on the 10th hole. Can you continue using it after reattaching the head?",
    choices: [
      "Yes — you may repair a club damaged during the round and continue using it, as long as you don't unduly delay play",
      "No — once a club is damaged, it must be declared out of play",
      "Yes, but only if a rules official approves the repair",
      "No — you must finish the round with 13 clubs",
    ],
    correct: 0,
    rule: "Rule 4.1a(2)",
    explanation:
      "Under Rule 4.1a(2), if a conforming club is damaged during the round (in the normal course of play), the player may repair it or have it repaired, keeping the club as close to its original state as possible. The player may continue using the damaged or repaired club for the rest of the round.",
    tags: ["clubs"],
  },

  // f29 — competitor
  {
    id: "f29",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "Frustrated after a bad shot, you slam your putter on the ground and bend the shaft. Can you continue using the putter?",
    choices: [
      "Yes, but you cannot repair it — you must use it in its damaged state or replace it (if you started with fewer than 14 clubs or it is unfit for play)",
      "No — a club damaged in anger must be immediately declared out of play",
      "Yes — you can repair it and continue using it normally",
      "You are disqualified for damaging equipment",
    ],
    correct: 0,
    rule: "Rule 4.1a(2)",
    explanation:
      "When you damage a club through abuse (slamming it in anger), you may still use it in its damaged condition for the rest of the round. However, unlike clubs damaged in the normal course of play, you may NOT repair an abuse-damaged club. If it's unfit for play, you may replace it only if you started with fewer than 14, or under certain other conditions.",
    tags: ["clubs", "penalty"],
  },

  // f30 — weekend
  {
    id: "f30",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You want to use a distance-measuring device (rangefinder) during your round. Is this allowed?",
    choices: [
      "Yes — the Rules allow distance-measuring devices by default; a Committee can prohibit them with a Local Rule",
      "No — rangefinders are prohibited unless the Committee allows them",
      "Only GPS devices are allowed, not laser rangefinders",
      "Only in casual rounds, never in competition",
    ],
    correct: 0,
    rule: "Rule 4.3a",
    explanation:
      "Under the 2023 Rules, distance-measuring devices are permitted by default (Rule 4.3a). Players may use devices to measure distance. However, the Committee may adopt a Local Rule prohibiting their use. Devices that measure slope or other conditions beyond distance are prohibited unless the slope feature is disabled.",
    tags: ["rangefinder", "committee"],
  },

  // f31 — competitor
  {
    id: "f31",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "Your rangefinder has a slope-adjustment feature that accounts for elevation changes. Can you use it during a competition?",
    choices: [
      "Only if the slope feature is turned off or disabled — using slope is a breach of Rule 4.3",
      "Yes — all rangefinder features are permitted under the Rules",
      "No — any device with slope capability is banned, even if the feature is off",
      "Only if the Committee specifically allows slope-enabled devices",
    ],
    correct: 0,
    rule: "Rule 4.3a(1)",
    explanation:
      "A player may use a distance-measuring device, but it must only measure distance. If the device has a slope feature, that feature must be turned off or the device must be in a mode where slope is not used. Using slope data is a breach. However, simply owning a device with slope capability is not a violation — the feature just must not be active.",
    tags: ["rangefinder", "penalty"],
  },

  // f32 — official
  {
    id: "f32",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "During the round, you use a weighted training aid to make practice swings between holes to loosen up. Is this permitted?",
    choices: [
      "No — using a training aid or non-conforming device to warm up during a round is a breach of Rule 4.3a",
      "Yes — you can use any training aid between holes",
      "Only if it is not shaped like a golf club",
      "Only during a weather delay",
    ],
    correct: 0,
    rule: "Rule 4.3a(6)",
    explanation:
      "Under Rule 4.3a, you must not use any type of training or swing aid (including weighted donuts, swing trainers, or alignment sticks used for swing guidance) during a round to assist with your play. This applies between holes as well. Using such a device results in the general penalty for the first breach and disqualification for subsequent breaches.",
    tags: ["clubs", "penalty"],
  },

  // f33 — weekend
  {
    id: "f33",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Can you use a glove during play under the Rules of Golf?",
    choices: [
      "Yes — gloves are permitted as long as they are plain and do not provide undue assistance with grip",
      "No — gloves are not permitted under the Rules",
      "Only on one hand at a time",
      "Only with Committee approval",
    ],
    correct: 0,
    rule: "Rule 4.3a",
    explanation:
      "Gloves are permitted under the Rules of Golf. They must be plain (no aids built in that would help grip beyond what a normal glove provides) and must conform to the equipment standards. Players may wear gloves on one or both hands.",
    tags: ["glove"],
  },

  // f34 — weekend
  {
    id: "f34",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You find a golf ball on the course and want to switch to it mid-hole. Are you allowed to change balls during a hole?",
    choices: [
      "No — you generally cannot substitute another ball while a hole is in progress, unless a Rule permits it (e.g., ball is cut, taking relief)",
      "Yes — you can change balls at any time",
      "Only between holes, never during a hole",
      "Only if the found ball is the same brand as yours",
    ],
    correct: 0,
    rule: "Rule 6.3a",
    explanation:
      "Under Rule 6.3a, you must hole out with the same ball played from the teeing area, unless a Rule permits or requires substitution (such as when taking relief under penalty, the ball is cut or cracked, or the ball is lost). You cannot simply choose to swap balls mid-hole. If you do, you get the general penalty.",
    tags: ["ball", "penalty"],
  },

  // f35 — competitor
  {
    id: "f35",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "Between holes, you switch to a different ball before teeing off on the next hole. Is this allowed?",
    choices: [
      "Yes — you may change balls between holes without restriction",
      "No — you must use the same ball for the entire round",
      "Only if the previous ball is damaged",
      "Only if the Committee has adopted a One Ball Local Rule",
    ],
    correct: 0,
    rule: "Rule 6.3a",
    explanation:
      "Under Rule 6.3a, a player may always substitute a different ball between the play of two holes. There is no restriction on changing balls between holes under the default Rules. (The Committee may adopt a 'One Ball' Local Rule in elite competitions requiring the same brand/model throughout, but this is uncommon.)",
    tags: ["ball", "tee"],
  },

  // f36 — official
  {
    id: "f36",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "During a round, you apply tape to the grip of your club to improve your hold. Is this allowed?",
    choices: [
      "No — adding material to the grip during a round that changes the club's playing characteristics is not permitted",
      "Yes — players may modify grips at any time",
      "Only if the tape was already on the club before the round",
      "Only if you get Committee approval",
    ],
    correct: 0,
    rule: "Rule 4.1a(3)",
    explanation:
      "Under Rule 4.1a(3), a player must not make any adjustments to a club during a round that change the club's playing characteristics. Adding tape to a grip during the round would change the grip's characteristics and is not permitted. You may add tape between rounds but not during play.",
    tags: ["clubs", "penalty"],
  },

  // f37 — competitor
  {
    id: "f37",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "You realize after 9 holes that one of your 14 clubs does not conform to the equipment rules (the grooves are non-conforming). What happens?",
    choices: [
      "You are penalized as if you carried an excess club — two strokes per hole (max four) in stroke play, and the club must be declared out of play",
      "No penalty if you stop using it immediately",
      "Disqualification",
      "The club is simply declared out of play with no penalty",
    ],
    correct: 0,
    rule: "Rule 4.1a(1)",
    explanation:
      "Under Rule 4.1a, all clubs must conform to the equipment rules. If you carry or use a non-conforming club, the penalty is the same as for excess clubs: in stroke play, two penalty strokes for each hole where the breach occurred, maximum four strokes. The non-conforming club must be declared out of play immediately.",
    tags: ["clubs", "penalty", "stroke-play"],
  },

  // f38 — competitor
  {
    id: "f38",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "Two players are sharing a set of clubs (7 clubs each, 14 total between them). Is this allowed?",
    choices: [
      "Yes — two players may share clubs if the total between them is no more than 14, and each player can only use the clubs they selected at the start",
      "No — each player must have their own set of clubs",
      "Yes — and either player can use any of the 14 clubs at any time",
      "Only in match play, not stroke play",
    ],
    correct: 0,
    rule: "Rule 4.1b(2)",
    explanation:
      "Two or more players may share clubs, provided the total number of clubs among the sharing players is no more than 14. Each player must designate which clubs are theirs at the start and can only use those specific clubs. A player cannot use a club that has been selected by another player.",
    tags: ["clubs", "partner"],
  },

  // ============================================================
  // RULE 5: PLAYING THE ROUND (15 scenarios)
  // ============================================================

  // r6 — weekend
  {
    id: "r6",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Before your stroke play round, you hit a few practice balls on the course near the first tee. Is this allowed?",
    choices: [
      "No — practicing on the competition course before a stroke play round on the day of the competition is prohibited (unless the Committee allows it)",
      "Yes — you can always practice on the course before your round",
      "Only putting is allowed, not full swings",
      "Only within 30 minutes of your tee time",
    ],
    correct: 0,
    rule: "Rule 5.2b",
    explanation:
      "In stroke play, a player must not practice on the competition course before a round on the day of that round, unless the Committee allows it. The penalty for breach is the general penalty (two strokes) applied to the first hole. In match play, the default rule is different — you may practice on the course before the round.",
    tags: ["practice", "stroke-play", "penalty"],
  },

  // r7 — competitor
  {
    id: "r7",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "Between holes in stroke play, you chip a ball toward the next tee to practice. Is this a penalty?",
    choices: [
      "No — between holes you may practice putting, chipping, or similar shots on or near the putting green just completed, a practice green, or the next teeing area",
      "Yes — two-stroke penalty; you cannot practice during a round",
      "Only putting is allowed between holes, not chipping",
      "Only if it delays play",
    ],
    correct: 0,
    rule: "Rule 5.5b",
    explanation:
      "Between the play of two holes, you may practice putting or chipping on or near the putting green of the hole just completed, any practice green, or the next teeing area — provided you don't unreasonably delay play and the Committee hasn't prohibited it. Full swing practice shots from the fairway or rough are not permitted.",
    tags: ["practice", "stroke-play", "tee"],
  },

  // r8 — weekend
  {
    id: "r8",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "What is the difference between a practice swing and a practice stroke?",
    choices: [
      "A practice swing is swinging without intending to hit a ball; a practice stroke is actually hitting a ball for practice — practice strokes are generally not allowed during a round",
      "There is no difference — they are the same thing",
      "A practice swing uses a different club; a practice stroke uses the same club as your next shot",
      "A practice swing is before addressing the ball; a practice stroke is after",
    ],
    correct: 0,
    rule: "Rule 5.5a",
    explanation:
      "A practice swing is simply swinging your club without the intent to hit a ball — these are always allowed during a round. A practice stroke means actually hitting a ball for practice — this is prohibited during the play of a hole (Rule 5.5a). Between holes, limited practice (putting/chipping near the green or tee) is allowed.",
    tags: ["practice"],
  },

  // r9 — competitor
  {
    id: "r9",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "During a round, you hit a practice stroke (actually hitting a ball) from the rough while waiting for the group ahead. What is the penalty in stroke play?",
    choices: [
      "Two-stroke penalty (general penalty)",
      "One-stroke penalty",
      "No penalty as long as it didn't delay play",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 5.5a",
    explanation:
      "Under Rule 5.5a, you must not make a practice stroke during the play of a hole. A practice stroke means actually hitting a ball. The penalty in stroke play is the general penalty (two strokes). This is different from a practice swing (swinging without hitting a ball), which is always allowed.",
    tags: ["practice", "stroke-play", "penalty", "general-area"],
  },

  // r10 — weekend
  {
    id: "r10",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "Play is suspended by the Committee with a normal suspension signal (not for dangerous situation). Where must you stop play?",
    choices: [
      "You may complete the hole you are playing before stopping, or stop immediately if between holes",
      "You must stop immediately, wherever you are on the course",
      "You may continue playing for 15 minutes",
      "You must return to the clubhouse within 5 minutes",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "For a normal suspension of play (not for a dangerous situation), players who are between holes must stop immediately. Players who are playing a hole may choose to stop immediately or complete the hole before stopping. For an immediate suspension (dangerous situation like lightning), all players must stop play immediately.",
    tags: ["suspension", "committee"],
  },

  // r11 — competitor
  {
    id: "r11",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "After an immediate suspension (lightning), you continue playing and hole out before stopping. What is the penalty?",
    choices: [
      "Disqualification",
      "Two-stroke penalty",
      "No penalty if you holed out quickly",
      "One-stroke penalty per hole played",
    ],
    correct: 0,
    rule: "Rule 5.7a",
    explanation:
      "When play is suspended immediately for a dangerous situation (such as lightning), all players must stop play at once. The penalty for failing to discontinue play promptly after an immediate suspension is disqualification. This is the most serious suspension type — player safety is paramount.",
    tags: ["lightning", "suspension", "disqualification", "penalty"],
  },

  // r12 — weekend
  {
    id: "r12",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "After a suspension of play, you return to the course to resume. Where do you resume play?",
    choices: [
      "From where you stopped — you must resume from the exact spot where you discontinued play",
      "From the nearest tee",
      "From the beginning of the hole you were playing",
      "From the clubhouse tee closest to where you stopped",
    ],
    correct: 0,
    rule: "Rule 5.7c",
    explanation:
      "Under Rule 5.7c, when play resumes after a suspension, you must resume from where you stopped. If you stopped between holes, you start on the next teeing area. If you stopped during a hole, you play from where your ball was when play stopped (or if you completed the hole, from the next tee).",
    tags: ["suspension"],
  },

  // r13 — official
  {
    id: "r13",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "During a suspension for dangerous weather, you take shelter in your car and use the time to watch a video of your swing on your phone. Is this a problem?",
    choices: [
      "No — viewing video of your own swing is not a breach during a suspension; it would only matter if you used it as an alignment aid during a stroke",
      "Yes — watching swing videos is prohibited during any part of a round",
      "Only if a coach sent it to you",
      "Yes — all electronic device use is prohibited during a round",
    ],
    correct: 0,
    rule: "Rule 4.3a",
    explanation:
      "Under Rule 4.3a, you may use a device to watch video, including your own swing, as long as you do not use it to assist your play in a way that gives you an unfair advantage (such as using it as an alignment aid during a stroke). Simply reviewing video during a delay is not a breach.",
    tags: ["suspension", "lightning"],
  },

  // r14 — weekend
  {
    id: "r14",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You arrive at the first tee ready to play but your starting time is not for another 10 minutes. Can you hit practice putts on the nearby practice putting green?",
    choices: [
      "Yes — you may practice on any practice area (putting green, range) before your round at any time",
      "No — you cannot practice within 30 minutes of your tee time",
      "Only on the driving range, not the practice green",
      "Only if the Committee designates a warm-up area",
    ],
    correct: 0,
    rule: "Rule 5.2",
    explanation:
      "You are always free to practice on designated practice areas (putting greens, driving ranges) before your round. The restriction in Rule 5.2b (for stroke play) is about practicing on the competition course itself, not on practice facilities. You can use practice facilities right up until your tee time.",
    tags: ["practice", "green"],
  },

  // r15 — competitor
  {
    id: "r15",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In a 36-hole stroke play competition (two rounds in one day), can you practice on the course between the two rounds?",
    choices: [
      "No — in stroke play, you may not practice on the competition course between rounds played on the same day, unless the Committee allows it",
      "Yes — you can always practice between rounds",
      "Only on the practice green near the clubhouse",
      "Only putting, not full shots",
    ],
    correct: 0,
    rule: "Rule 5.2b",
    explanation:
      "In stroke play, you may not practice on the competition course between two rounds played on the same day, unless the Committee allows it. This includes hitting practice shots on the course. You may, however, use any practice area (range, practice green) between rounds.",
    tags: ["practice", "stroke-play", "committee"],
  },

  // r16 — weekend
  {
    id: "r16",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You are playing in a competition. Your round starts when you make a stroke to begin your first hole. When does your round end?",
    choices: [
      "When you hole out on your last hole (or otherwise complete the final hole)",
      "When you sign your scorecard",
      "When you return to the clubhouse",
      "When you leave the 18th green",
    ],
    correct: 0,
    rule: "Rule 5.3",
    explanation:
      "Your round ends when you hole out on your final hole (including any strokes needed to correct an error or complete a penalty). The round does not extend to when you sign your scorecard — that is a separate obligation. However, certain actions between finishing the last hole and returning the card (like practicing) may still be penalized.",
    tags: ["scoring"],
  },

  // r17 — official
  {
    id: "r17",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "During a round, you use headphones to listen to music while playing. Is this a breach of the Rules?",
    choices: [
      "Yes — listening to music or any audio content during a round is a breach of Rule 4.3a (using equipment to eliminate distractions or aid play)",
      "No — headphones are always allowed during a round",
      "Only if it is instructional golf content",
      "Only if the Committee has specifically prohibited headphones",
    ],
    correct: 0,
    rule: "Rule 4.3a(4)",
    explanation:
      "Under Rule 4.3a(4), you must not listen to music or other audio content during a round, as it eliminates outside distractions or aids play. This includes both headphones and speakers. The penalty is the general penalty for the first breach and disqualification for subsequent breaches.",
    tags: ["penalty"],
  },

  // r18 — competitor
  {
    id: "r18",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "You are playing a stroke play round and realize on the 2nd hole that you forgot to put your name on the scorecard. You also haven't had anyone designated as your marker. What should you do?",
    choices: [
      "Have your marker (fellow competitor) identified as soon as possible — this can be done at any point during the round; there is no penalty for a late start on recording",
      "You are disqualified — a marker must be assigned before the first tee",
      "Continue playing and sign your own card at the end",
      "Stop play and go back to the clubhouse to get it sorted",
    ],
    correct: 0,
    rule: "Rule 3.3b",
    explanation:
      "A marker must certify your score on each hole, but there is no penalty for not having the administrative details settled immediately at the start. You should get it sorted as soon as possible. The key requirement is that the scorecard is properly certified before it is returned to the Committee.",
    tags: ["scorecard", "stroke-play", "scoring"],
  },

  // r19 — weekend
  {
    id: "r19",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "The Rules of Golf recommend a maximum time for making a stroke. Approximately how long should a player take to make a stroke (once it is their turn)?",
    choices: [
      "No more than 40 seconds, and usually should be able to play more quickly",
      "No more than 2 minutes",
      "No more than 60 seconds",
      "There is no recommended time limit in the Rules",
    ],
    correct: 0,
    rule: "Rule 5.6b",
    explanation:
      "Rule 5.6b recommends that a player make a stroke in no more than 40 seconds after being able to play without interference or distraction, and should usually be able to play more quickly. The Committee can adopt pace of play policies with specific time limits and penalties.",
    tags: ["pace-of-play"],
  },

  // r20 — official
  {
    id: "r20",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "During a round, you pick up a golf ball from near a water hazard and roll it down the fairway to test the green speed. Is this a penalty?",
    choices: [
      "Yes — this is a practice stroke during the play of a hole, which results in the general penalty (two strokes in stroke play)",
      "No — rolling a ball is not a stroke",
      "Only if it was your ball in play",
      "No penalty since you used a found ball, not your own",
    ],
    correct: 0,
    rule: "Rule 5.5a",
    explanation:
      "Under Rule 5.5a, a practice stroke is any stroke made at a ball during the play of a hole that is not part of your play of that hole. Rolling a ball to test conditions is considered a practice stroke. It doesn't matter whether it is your ball in play or a found ball — the penalty is the general penalty (two strokes in stroke play).",
    tags: ["practice", "penalty", "green", "stroke-play"],
  },

  // ============================================================
  // RULE 6: PLAYING A HOLE (17 scenarios)
  // ============================================================

  // r21 — weekend
  {
    id: "r21",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You tee your ball two club-lengths behind the front edge of the tee markers. Is this a valid teeing position?",
    choices: [
      "Yes — the teeing area extends two club-lengths behind the front edge of the tee markers",
      "No — you must tee within one club-length of the markers",
      "Yes — the teeing area extends three club-lengths back",
      "No — you must tee between the markers, not behind them",
    ],
    correct: 0,
    rule: "Rule 6.2b(1)",
    explanation:
      "The teeing area is a rectangle that is two club-lengths deep, with the front edge defined by a line between the forward-most points of two tee markers. Your ball must be within this rectangle, but you may stand outside it (e.g., with your feet behind the markers). The ball can be anywhere within those two club-lengths of depth.",
    tags: ["tee", "teeing-area", "tee-marker"],
  },

  // r22 — weekend
  {
    id: "r22",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You tee your ball and address it. Before you swing, the ball falls off the tee. What do you do?",
    choices: [
      "Re-tee without penalty — the ball is not yet in play",
      "Play the ball from the ground without re-teeing",
      "One-stroke penalty; re-tee",
      "It counts as a stroke; play from where the ball lies",
    ],
    correct: 0,
    rule: "Rule 6.2b(5)",
    explanation:
      "A ball on a tee in the teeing area is not yet in play until a stroke is made. If it falls off the tee or is knocked off accidentally before you make a stroke, you may simply re-tee it without penalty. It is not a stroke because there was no intent to hit the ball.",
    tags: ["tee", "teeing-area"],
  },

  // r23 — weekend
  {
    id: "r23",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In stroke play, you play your tee shot from in front of the tee markers. What happens?",
    choices: [
      "Two-stroke penalty; you must cancel the stroke and replay from within the teeing area",
      "No penalty if the ball lands in the fairway",
      "Your opponent may ask you to replay (match play rule only)",
      "One-stroke penalty; the ball is in play where it lies",
    ],
    correct: 0,
    rule: "Rule 6.1b(2)",
    explanation:
      "In stroke play, if you play from outside the teeing area, you get a two-stroke penalty and must correct the error by playing from within the teeing area. The stroke from outside the teeing area does not count. If you don't correct it before making a stroke on the next tee, you are disqualified.",
    tags: ["tee", "teeing-area", "tee-marker", "stroke-play", "penalty"],
  },

  // r24 — competitor
  {
    id: "r24",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In match play, you play your tee shot from outside the teeing area. Your opponent says nothing and you play the hole. On the next tee, your opponent mentions the error. What happens?",
    choices: [
      "Nothing — the opponent must request you to cancel and replay before either player makes another stroke; since they waited, the result stands",
      "You lose the hole retroactively",
      "You must go back and replay the hole",
      "Two-stroke penalty applied to the next hole",
    ],
    correct: 0,
    rule: "Rule 6.1b(1)",
    explanation:
      "In match play, if you play from outside the teeing area, there is no penalty, but your opponent may cancel the stroke and require you to replay. However, the opponent must do this promptly — before either player makes another stroke. If the opponent waits and doesn't invoke the cancellation in time, the stroke stands and the result of the hole is final.",
    tags: ["tee", "teeing-area", "match-play", "opponent"],
  },

  // r25 — weekend
  {
    id: "r25",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "In stroke play, who should play first from the teeing area?",
    choices: [
      "The player with the lowest score on the previous hole has the honor; on the first hole, the Committee determines the order",
      "Any player can go first — order doesn't matter in stroke play",
      "The player farthest from the hole always plays first",
      "Alphabetical order by last name",
    ],
    correct: 0,
    rule: "Rule 6.4a",
    explanation:
      "On the first teeing area, the order is set by the Committee (draw, tee times, etc.). After that, the player with the lowest gross score on the previous hole has the honor. In stroke play, playing out of turn is not penalized, but players are encouraged to play in the correct order or use 'ready golf' to maintain pace.",
    tags: ["tee", "teeing-area", "stroke-play", "pace-of-play"],
  },

  // r26 — competitor
  {
    id: "r26",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, you play out of turn — you hit before a player who had the honor. What is the penalty?",
    choices: [
      "No penalty — there is no penalty for playing out of turn in stroke play",
      "Two-stroke penalty",
      "One-stroke penalty",
      "You must replay the shot in the correct order",
    ],
    correct: 0,
    rule: "Rule 6.4b",
    explanation:
      "In stroke play, there is no penalty for playing out of turn. The Rules encourage 'ready golf' (playing when ready) to help pace of play. However, if two or more players deliberately agree to play out of turn to give one player an advantage, they are each disqualified.",
    tags: ["stroke-play", "pace-of-play"],
  },

  // r27 — competitor
  {
    id: "r27",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In match play, you play out of turn. What can your opponent do?",
    choices: [
      "Your opponent may cancel the stroke and require you to replay in the correct order, with no penalty",
      "Your opponent gets to add a stroke to your score",
      "Nothing — order of play doesn't matter in match play either",
      "Your opponent may choose to skip their turn and play next",
    ],
    correct: 0,
    rule: "Rule 6.4a(2)",
    explanation:
      "In match play, if you play out of turn, there is no penalty, but your opponent has the right to cancel the stroke. If they choose to cancel it, you must replay in the correct order. The opponent must act promptly — before making their own next stroke. If they don't cancel, the stroke stands.",
    tags: ["match-play", "opponent"],
  },

  // r28 — weekend
  {
    id: "r28",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "After hitting your tee shot, you are uncertain whether your ball went out of bounds. You play a provisional ball. As you walk forward, you find your original ball clearly in bounds. What must you do?",
    choices: [
      "Play the original ball; the provisional must be abandoned",
      "Choose whichever ball is in a better position",
      "Play the provisional since you already hit it",
      "Play both balls and report to the Committee",
    ],
    correct: 0,
    rule: "Rule 18.3c(2)",
    explanation:
      "When you find your original ball in bounds within the 3-minute search time, the provisional ball must be abandoned. You must continue with the original ball. Any strokes made with the provisional after it should have been abandoned do not count, but you could incur a penalty for playing a wrong ball if you continue with the provisional.",
    tags: ["provisional", "out-of-bounds", "tee"],
  },

  // r29 — competitor
  {
    id: "r29",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "You want to play a provisional ball from the teeing area. What must you announce before playing it?",
    choices: [
      "You must clearly state that you are playing a provisional ball before making the stroke",
      "You must say 'I am playing a second ball'",
      "No announcement is required — any second ball from the tee is automatically provisional",
      "You must tell the Committee before playing a provisional",
    ],
    correct: 0,
    rule: "Rule 18.3a(1)",
    explanation:
      "You must announce your intention to play a provisional ball before making the stroke, using the word 'provisional' or otherwise clearly indicating you are playing under Rule 18.3. Simply saying 'I'll hit another one' or 'I'm reloading' is NOT sufficient — those phrases may mean the player is putting a new ball in play under stroke and distance, making the original lost.",
    tags: ["provisional", "tee", "teeing-area"],
  },

  // r30 — weekend
  {
    id: "r30",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "You are on the teeing area and whiff your tee shot — you swing and completely miss the ball. Does this count as a stroke?",
    choices: [
      "Yes — it counts as a stroke because you intended to hit the ball",
      "No — a miss doesn't count; you can try again",
      "Only if the ball moved",
      "Only in competition, not in casual play",
    ],
    correct: 0,
    rule: "Definition of Stroke",
    explanation:
      "A stroke is defined as the forward movement of the club made with the intention of striking and moving the ball. Even if you miss entirely, it counts as a stroke because you intended to hit the ball. Your ball is now in play (even still on the tee) and your next swing will be stroke 2.",
    tags: ["tee", "teeing-area"],
  },

  // r31 — weekend
  {
    id: "r31",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "After whiffing on the tee (missing the ball entirely), your ball is still sitting on the tee. Can you re-tee it or move the tee peg?",
    choices: [
      "Yes — the ball is in the teeing area and you may re-tee it or move the tee to a different spot within the teeing area without penalty",
      "No — you must play it from where it sits without touching the tee",
      "You can re-tee but only at the same spot",
      "No — after a stroke is made, the ball is in play and cannot be re-teed",
    ],
    correct: 0,
    rule: "Rule 6.2b(6)",
    explanation:
      "Even though the whiff counted as a stroke, the ball is still in the teeing area. Under Rule 6.2b(6), a ball in play in the teeing area may be lifted or moved without penalty, and may be played from anywhere in the teeing area (including from a tee). So you can re-tee it or move it to a different spot within the teeing area.",
    tags: ["tee", "teeing-area"],
  },

  // r32 — competitor
  {
    id: "r32",
    category: "PLAYING_ROUND",
    tier: "competitor",
    text: "In stroke play, can you agree with another player to play out of order to save time?",
    choices: [
      "Yes — 'ready golf' is encouraged; you may play out of turn without penalty unless you agree to do so specifically to give one player an advantage",
      "No — you must always play in the correct order",
      "Only with the Committee's permission",
      "Only on the tee, not during the hole",
    ],
    correct: 0,
    rule: "Rule 6.4b(1)(2)",
    explanation:
      "In stroke play, there is no penalty for playing out of turn, and 'ready golf' (playing when ready, safely) is encouraged for pace of play. However, if two or more players deliberately agree to play out of turn to give one of them an advantage, they are each penalized with disqualification.",
    tags: ["stroke-play", "pace-of-play"],
  },

  // r33 — official
  {
    id: "r33",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In match play, after both players hole out, they agree the hole was halved. They then realize one player actually won the hole. The next hole has already been started. Can they correct the result?",
    choices: [
      "No — the conceded/agreed result stands once both players made a stroke on the next tee, even if it was wrong",
      "Yes — match play results can always be corrected",
      "Only if a referee saw the error",
      "Yes — but only within the next two holes",
    ],
    correct: 0,
    rule: "Rule 3.2d(3)",
    explanation:
      "In match play, once the result of a hole is final (both players have agreed to the result or a new hole has started), it generally cannot be changed unless there was a deliberate breach of giving wrong information. An innocent mistake in scoring a hole cannot be corrected after the result is final.",
    tags: ["match-play", "scoring"],
  },

  // r34 — weekend
  {
    id: "r34",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "On the teeing area, can you use a tee to elevate your ball?",
    choices: [
      "Yes — in the teeing area you may place the ball on a tee, on the ground, or on any natural object on the ground surface",
      "You must use a tee in the teeing area",
      "You can only use a conforming tee, not mound the ball on sand",
      "Only for the first shot of each hole",
    ],
    correct: 0,
    rule: "Rule 6.2b(2)",
    explanation:
      "When playing from the teeing area, you may play the ball from a conforming tee, from the ground, or from any natural object that is on the ground surface (like a mound of sand or a leaf). You are not required to use a tee — you may play directly off the ground if you prefer.",
    tags: ["tee", "teeing-area"],
  },

  // r35 — official
  {
    id: "r35",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In stroke play, you pick up your ball on a hole without holing out (you give up on the hole mid-play). What happens?",
    choices: [
      "You are disqualified unless you correct the error by going back, replacing the ball, and completing the hole before playing from the next tee",
      "You get a two-stroke penalty and record a maximum score",
      "No penalty — you can pick up on any hole in stroke play",
      "You get a one-stroke penalty and move to the next hole",
    ],
    correct: 0,
    rule: "Rule 3.3c",
    explanation:
      "In stroke play, you must hole out on every hole. If you fail to hole out and don't correct the error before making a stroke on the next tee (or, for the last hole, before returning the scorecard), you are disqualified. Unlike casual golf, you cannot simply 'pick up' in a stroke play competition.",
    tags: ["stroke-play", "disqualification", "scoring"],
  },

  // r36 — official
  {
    id: "r36",
    category: "PLAYING_ROUND",
    tier: "official",
    text: "In stroke play, your marker (the person attesting your card) refuses to sign your scorecard because they disagree with your score on a hole. What can you do?",
    choices: [
      "You may have another witness (such as another player in the group) attest the disputed score, or ask the Committee to validate the score",
      "You are disqualified — the assigned marker must sign",
      "You must accept the marker's version of the score",
      "You can sign as both player and marker",
    ],
    correct: 0,
    rule: "Rule 3.3b(2)",
    explanation:
      "If the marker refuses to certify a score, the player may have another person who witnessed the hole (such as another player in the group) certify it instead. The player can also refer the dispute to the Committee. A player is never required to accept a score they believe to be incorrect just because the marker disagrees.",
    tags: ["scorecard", "scoring", "stroke-play", "committee"],
  },

  // r37 — weekend
  {
    id: "r37",
    category: "PLAYING_ROUND",
    tier: "weekend",
    text: "After all players in the group have teed off, who plays their second shot first?",
    choices: [
      "The player whose ball is farthest from the hole plays first",
      "The player with the lowest score on the previous hole",
      "The player who teed off last",
      "Any player can go — order doesn't matter after the tee",
    ],
    correct: 0,
    rule: "Rule 6.4a(2)",
    explanation:
      "After all players have teed off, the ball farthest from the hole is played first. This is the standard order of play throughout the hole. In stroke play, playing out of order has no penalty and 'ready golf' is encouraged, but the farthest-from-the-hole convention is the default order.",
    tags: ["stroke-play", "pace-of-play"],
  },
];

