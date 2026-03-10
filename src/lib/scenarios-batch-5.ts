import { Scenario } from "@/types";

export const SCENARIOS_BATCH_5: Scenario[] = [
  // =====================================================================
  // FUNDAMENTALS — Rules 1 & 2 Deep Dive — 93 scenarios
  // Rule 1: The Game, Player Conduct, and the Rules (~45 scenarios)
  // Rule 2: The Course (~48 scenarios)
  // Tier distribution: ~37 weekend, ~33 competitor, ~23 official
  // =====================================================================

  // =====================================================================
  // RULE 1 — THE GAME, PLAYER CONDUCT, AND THE RULES
  // =====================================================================

  // --- Rule 1.1: Standards of Player Conduct ---

  {
    id: "b5_001",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What does Rule 1.1 expect of all players on the course?",
    choices: [
      "Act with integrity, show consideration for others, and take care of the course",
      "Simply follow all penalty rules and keep an accurate score",
      "Play at a reasonable pace and not talk during other players' swings",
      "Wear proper attire and maintain silence on the tee",
    ],
    correct: 0,
    rule: "Rule 1.1",
    explanation:
      "Rule 1.1 states that all players are expected to play in the spirit of the game by acting with integrity, showing consideration to others, and taking good care of the course. This is the overarching standard of conduct in golf.",
    tags: ["conduct", "spirit of the game", "integrity"],
  },
  {
    id: "b5_002",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "A player fixes a pitch mark on the green, repairs a divot in the fairway, and rakes a bunker after playing from it. Which standard of conduct does this best reflect?",
    choices: [
      "Taking good care of the course, as expected under Rule 1.1",
      "Avoiding a penalty under Rule 1.2",
      "Meeting the requirements of Rule 8.1 (improving conditions)",
      "Fulfilling the Code of Conduct requirement",
    ],
    correct: 0,
    rule: "Rule 1.1",
    explanation:
      "Rule 1.1 expects players to take good care of the course. Fixing pitch marks, replacing divots, and raking bunkers are all examples of this expectation. These are not penalty-related — they reflect the spirit of the game.",
    tags: ["conduct", "course care", "spirit of the game"],
  },

  // --- Rule 1.2: Standards of Player Conduct —
  //     Code of Conduct, Serious Misconduct, DQ ---

  {
    id: "b5_003",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "After three-putting, a player slams their putter into the green and causes visible damage. What can happen?",
    choices: [
      "The Committee may disqualify the player for serious misconduct under Rule 1.2a",
      "The player gets a two-stroke penalty automatically",
      "The player must repair the damage but faces no penalty",
      "The player's opponent or fellow competitors decide the penalty",
    ],
    correct: 0,
    rule: "Rule 1.2a",
    explanation:
      "Under Rule 1.2a, if a player acts contrary to the spirit of the game — such as deliberately damaging the putting green — the Committee may disqualify the player for serious misconduct. The Committee has broad discretion to protect the integrity of the game.",
    tags: ["serious misconduct", "disqualification", "conduct", "committee"],
  },
  {
    id: "b5_004",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A Committee adopts a Code of Conduct under Rule 1.2b. The Code sets a one-stroke penalty for a first offense of using abusive language. A player receives this penalty. Is this valid?",
    choices: [
      "Yes — the Committee can set penalties in its Code of Conduct, including one-stroke penalties",
      "No — the Rules only allow two-stroke penalties or disqualification",
      "No — conduct penalties can only be applied between holes",
      "Yes, but only in match play",
    ],
    correct: 0,
    rule: "Rule 1.2b",
    explanation:
      "Under Rule 1.2b, the Committee may adopt its own Code of Conduct and set penalties for breaches, including a one-stroke penalty, the general penalty, or disqualification. The Committee has flexibility in choosing the severity of penalties for conduct violations.",
    tags: ["code of conduct", "committee", "penalty", "conduct"],
  },
  {
    id: "b5_005",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A Committee's Code of Conduct under Rule 1.2b allows escalating penalties. A player receives a warning for a first offense and a one-stroke penalty for a second offense. For a third offense, what is the Committee authorized to impose?",
    choices: [
      "Disqualification",
      "A maximum of two additional penalty strokes",
      "Suspension for the next tournament only",
      "A fine, but not disqualification from the current round",
    ],
    correct: 0,
    rule: "Rule 1.2b",
    explanation:
      "Under Rule 1.2b, the Committee may set escalating penalties in its Code of Conduct, up to and including disqualification. Common escalation is: warning, one-stroke penalty, general penalty, disqualification.",
    tags: ["code of conduct", "disqualification", "escalating penalties", "committee"],
  },
  {
    id: "b5_006",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A player verbally abuses a volunteer marshal during a stroke play competition. The Committee has NOT adopted a Code of Conduct. Can the Committee still take action?",
    choices: [
      "Yes — the Committee can disqualify for serious misconduct under Rule 1.2a even without a Code of Conduct",
      "No — without an adopted Code of Conduct, the Committee has no authority to penalize conduct",
      "Yes, but only a two-stroke penalty can be applied",
      "No — only fellow competitors can file a complaint",
    ],
    correct: 0,
    rule: "Rule 1.2a",
    explanation:
      "Rule 1.2a gives the Committee the independent authority to disqualify a player for serious misconduct, regardless of whether a Code of Conduct has been adopted. The Code of Conduct (Rule 1.2b) provides additional tools for lesser offenses, but disqualification for serious misconduct is always available.",
    tags: ["serious misconduct", "disqualification", "committee", "conduct"],
  },
  {
    id: "b5_007",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In stroke play, a player deliberately damages an opponent's ball marker on the putting green. What is the most appropriate action?",
    choices: [
      "The Committee may disqualify the player for serious misconduct under Rule 1.2a",
      "Two-stroke penalty under Rule 1.3",
      "No penalty, but the marker must be replaced",
      "One-stroke penalty and a warning",
    ],
    correct: 0,
    rule: "Rule 1.2a",
    explanation:
      "Deliberately interfering with another player's equipment on the course — especially an action intended to damage or disadvantage another player — is contrary to the spirit of the game. Under Rule 1.2a, the Committee may disqualify the player for serious misconduct.",
    tags: ["serious misconduct", "disqualification", "conduct", "spirit of the game"],
  },
  {
    id: "b5_008",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "During a casual tournament, a player throws a club in frustration and it lands near another group. The Committee has a Code of Conduct with a warning for first offense. What happens?",
    choices: [
      "The player receives a warning per the Code of Conduct, but the Committee could still disqualify for serious misconduct if they deem it warranted",
      "Only the Code of Conduct penalty applies — no further action is possible",
      "The player is automatically disqualified for endangering others",
      "The player's group must agree on the penalty",
    ],
    correct: 0,
    rule: "Rule 1.2a, Rule 1.2b",
    explanation:
      "Even when a Code of Conduct is in place, the Committee retains the authority under Rule 1.2a to disqualify a player for serious misconduct. The Code of Conduct and the serious misconduct provision work independently. If throwing the club endangered others, the Committee could view it as serious misconduct warranting disqualification regardless of the Code of Conduct's first-offense penalty.",
    tags: ["code of conduct", "serious misconduct", "disqualification", "club throwing"],
  },

  // --- Rule 1.3: Playing by the Rules ---

  {
    id: "b5_009",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Before a match play round, two players agree that they will not count any penalty for hitting into penalty areas. What is the result?",
    choices: [
      "Both players are disqualified for agreeing to waive a Rule",
      "The agreement is void but no penalty applies",
      "Only the player who suggested it is penalized",
      "The match stands, but a two-stroke penalty is added to each player's score",
    ],
    correct: 0,
    rule: "Rule 1.3b(1)",
    explanation:
      "Under Rule 1.3b(1), players must not agree to ignore any Rule or any penalty. If they do, both players are disqualified. This applies whether the agreement is made before or during the round.",
    tags: ["waive rules", "disqualification", "match play", "agreement"],
  },
  {
    id: "b5_010",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, two players agree to play 'ready golf' and ignore the order of play rules entirely. Is there a penalty?",
    choices: [
      "No — in stroke play, there is no penalty for playing out of turn, so 'ready golf' is fine",
      "Both players are disqualified for agreeing to waive a Rule",
      "Two-stroke penalty for each occurrence of playing out of turn",
      "No penalty, but the Committee should be notified",
    ],
    correct: 0,
    rule: "Rule 6.4b",
    explanation:
      "In stroke play, there is no penalty for playing out of turn (Rule 6.4b). Playing 'ready golf' is actually encouraged to help pace of play. Since no Rule is being waived — playing out of turn simply carries no penalty in stroke play — the agreement is harmless.",
    tags: ["stroke play", "order of play", "ready golf", "pace of play"],
  },
  {
    id: "b5_011",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In match play, your opponent tells you that a particular relief procedure requires a two-club-length drop, when it actually requires a one-club-length drop. You follow this wrong advice. Who is penalized?",
    choices: [
      "You are responsible for knowing the Rules — you get the applicable penalty for dropping in the wrong place",
      "Your opponent gets a two-stroke penalty for giving wrong advice",
      "No penalty for either player if the mistake was honest",
      "Both players share the penalty equally",
    ],
    correct: 0,
    rule: "Rule 1.3a",
    explanation:
      "Under Rule 1.3a, each player is responsible for knowing and applying the Rules. If you take a wrong relief procedure based on bad information from your opponent, the penalty falls on you. Your opponent has no obligation to give you correct rules information in match play (though deliberately giving wrong information could be a conduct issue under Rule 1.2a).",
    tags: ["match play", "player responsibility", "rules knowledge", "relief"],
  },
  {
    id: "b5_012",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In stroke play, a player realizes after signing their scorecard that they applied a wrong handicap that resulted in fewer strokes received. What is the ruling?",
    choices: [
      "The score stands — applying a lower handicap disadvantages the player, so there is no disqualification",
      "The player is disqualified for signing an incorrect scorecard",
      "The player receives a two-stroke penalty and the correct handicap is applied",
      "The round must be replayed",
    ],
    correct: 0,
    rule: "Rule 3.3b(4)",
    explanation:
      "Under Rule 3.3b(4), if a player applies a handicap that is lower than the correct one, the scores stand as returned. The player effectively disadvantaged themselves. However, if the player applies a handicap higher than their actual handicap and this affects the number of strokes received, the player is disqualified.",
    tags: ["handicap", "scorecard", "stroke play", "disqualification"],
  },
  {
    id: "b5_013",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In a handicap stroke play event, a player knowingly applies a handicap HIGHER than their actual handicap, receiving extra strokes. After turning in the scorecard, this is discovered. What happens?",
    choices: [
      "The player is disqualified",
      "The scores are adjusted to reflect the correct handicap, but no other penalty",
      "The player receives a two-stroke penalty on each hole where extra strokes were received",
      "The round result stands because the scorecard was already signed",
    ],
    correct: 0,
    rule: "Rule 3.3b(4)",
    explanation:
      "Under Rule 3.3b(4), if a player knowingly applies a handicap higher than their correct handicap and this affects the number of strokes received, the player is disqualified. This is true even if it does not actually change the competition result.",
    tags: ["handicap", "disqualification", "scorecard", "stroke play"],
  },

  // --- Rule 1.3a: Meaning of "Penalty" ---

  {
    id: "b5_014",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is the 'general penalty' in match play?",
    choices: [
      "Loss of hole",
      "Two-stroke penalty",
      "One-stroke penalty",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 1.3c(1)",
    explanation:
      "The general penalty differs between match play and stroke play. In match play, the general penalty is loss of hole. In stroke play, the general penalty is two penalty strokes.",
    tags: ["general penalty", "match play", "loss of hole"],
  },
  {
    id: "b5_015",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is the 'general penalty' in stroke play?",
    choices: [
      "Two penalty strokes",
      "One penalty stroke",
      "Loss of hole",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 1.3c(1)",
    explanation:
      "In stroke play, the general penalty is two penalty strokes added to the player's score for the hole. In match play, the general penalty is loss of hole.",
    tags: ["general penalty", "stroke play", "two strokes"],
  },
  {
    id: "b5_016",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In match play, a player accidentally breaches a Rule on one hole but doesn't realize it until two holes later. Can the penalty still be applied?",
    choices: [
      "Yes — if neither player knew about the breach, the penalty is applied when discovered, even retroactively",
      "No — penalties in match play must be applied immediately or they are waived",
      "Only if the opponent raises the issue before the next tee shot",
      "The Committee must decide within 24 hours",
    ],
    correct: 0,
    rule: "Rule 1.3c(2)",
    explanation:
      "Under Rule 1.3c(2), if a breach of the Rules is discovered after the fact, the penalty can still be applied as long as the player did not deliberately ignore the Rule. In match play, if neither player knew about the breach, the penalty applies when discovered — unless the facts were known or reasonably available and the opponent chose not to raise the issue (which would amount to an implied agreement to waive).",
    tags: ["match play", "late discovery", "penalty application", "retroactive"],
  },

  // --- Rule 1.3b: Applying the Rules ---

  {
    id: "b5_017",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A player's ball came to rest somewhere in heavy rough but the exact spot cannot be determined. How should the player proceed?",
    choices: [
      "Use reasonable judgment to estimate the spot based on all available information",
      "Treat the ball as lost and take stroke-and-distance relief",
      "Drop at the nearest point of known position",
      "Ask a fellow competitor to determine the spot",
    ],
    correct: 0,
    rule: "Rule 1.3b(2)",
    explanation:
      "Rule 1.3b(2) allows players to use reasonable judgment to estimate a spot when the exact location cannot be determined. This applies to any situation where the Rules require determining a spot, point, line, or area — including where a ball came to rest. Note: this assumes the ball has been found; if the ball itself cannot be found within 3 minutes, it is lost.",
    tags: ["estimation", "reasonable judgment", "ball position", "applying rules"],
  },
  {
    id: "b5_018",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A player must estimate the point where their ball last crossed the edge of a penalty area. Video evidence later shows the estimate was wrong by 10 yards. Is the player penalized?",
    choices: [
      "No — as long as the player used reasonable judgment at the time, there is no penalty even if later shown to be wrong",
      "Yes — two-stroke penalty for playing from the wrong place",
      "Yes — one-stroke penalty for an incorrect estimation",
      "The player must replay the shot from the correct position",
    ],
    correct: 0,
    rule: "Rule 1.3b(2)",
    explanation:
      "Under Rule 1.3b(2), a player's reasonable judgment in estimating a spot, point, line, or area is accepted even if later shown to be wrong by video or other evidence. The standard is whether the player used reasonable judgment at the time, not whether the estimate was objectively correct.",
    tags: ["estimation", "video evidence", "reasonable judgment", "penalty area"],
  },
  {
    id: "b5_019",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A player needs to reconstruct the conditions that existed before their ball was moved (e.g., a lie in a bunker). How should they proceed?",
    choices: [
      "Use reasonable judgment and all available evidence to recreate the original conditions as closely as possible",
      "Always place the ball in the worst possible lie to avoid any advantage",
      "Ask a Rules official to determine the conditions",
      "Drop the ball within one club-length of the estimated spot",
    ],
    correct: 0,
    rule: "Rule 1.3b(2)",
    explanation:
      "Rule 1.3b(2) states that when a player must reconstruct the original lie or other conditions, they must use reasonable judgment and all available information. The goal is to recreate the conditions as faithfully as possible — not to assume the worst or best case.",
    tags: ["reconstruction", "reasonable judgment", "lie", "applying rules"],
  },
  {
    id: "b5_020",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A player suspects their opponent in match play broke a Rule but has no proof. The player raises the issue with the Committee. How should the Committee decide?",
    choices: [
      "Apply the Rules based on all reasonably available evidence, giving the benefit of the doubt when facts cannot be determined",
      "Always rule against the accused player to maintain strict standards",
      "Ignore the claim unless there is video evidence",
      "Split the difference and apply a lesser penalty",
    ],
    correct: 0,
    rule: "Rule 1.3b(2)",
    explanation:
      "Under Rule 1.3b(2), when applying the Rules, anyone making a determination must use reasonable judgment and give appropriate weight to all reasonably available evidence. When the facts cannot be conclusively determined, the decision should be made based on the balance of available evidence, with the benefit of the doubt going to the player.",
    tags: ["committee", "reasonable judgment", "evidence", "match play"],
  },

  // --- Rule 1.3c: Penalties ---

  {
    id: "b5_021",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, a player's single action breaches two different Rules, each carrying a two-stroke penalty. How many penalty strokes does the player receive?",
    choices: [
      "Two penalty strokes (only the higher or equal penalty applies when caused by a single action)",
      "Four penalty strokes (penalties stack)",
      "One penalty stroke (reduced for a single action)",
      "Disqualification for multiple breaches",
    ],
    correct: 0,
    rule: "Rule 1.3c(4)",
    explanation:
      "Under Rule 1.3c(4), when a single act or related acts breach multiple Rules, the player receives only the higher (or equal, if the same) penalty. Two separate two-stroke penalties from one action result in only two penalty strokes total, not four.",
    tags: ["multiple penalties", "single action", "stroke play", "penalty"],
  },
  {
    id: "b5_022",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In stroke play, between two strokes a player commits two SEPARATE breaches of Rules that each carry a two-stroke penalty (e.g., improving their lie AND testing the surface of the green). What is the total penalty?",
    choices: [
      "Four penalty strokes (two separate penalties apply because they are unrelated acts)",
      "Two penalty strokes (only the higher penalty applies)",
      "Disqualification for multiple breaches",
      "Three penalty strokes (one is reduced)",
    ],
    correct: 0,
    rule: "Rule 1.3c(4)",
    explanation:
      "Under Rule 1.3c(4), when a player commits separate, unrelated breaches between two strokes, each penalty applies independently. Two separate two-stroke penalties result in four total penalty strokes. The single-action exception only applies when the breaches result from one act or related acts.",
    tags: ["multiple penalties", "separate acts", "stroke play", "penalty stacking"],
  },
  {
    id: "b5_023",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In stroke play, a player's single action breaches one Rule carrying a one-stroke penalty and another Rule carrying the general penalty (two strokes). How many penalty strokes?",
    choices: [
      "Two penalty strokes (the higher of the two penalties applies)",
      "Three penalty strokes (penalties stack)",
      "One penalty stroke (the lower penalty applies)",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 1.3c(4)",
    explanation:
      "Under Rule 1.3c(4), when a single act breaches multiple Rules, only the higher penalty applies. Since the general penalty (two strokes) is higher than one stroke, the player receives two penalty strokes total.",
    tags: ["multiple penalties", "single action", "general penalty", "stroke play"],
  },
  {
    id: "b5_024",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A player accidentally takes an action that gives them a potential advantage but did NOT result in an improved lie, area of intended stance, or area of intended swing. Under Rule 1.3c, what happens?",
    choices: [
      "No penalty unless a specific Rule was actually breached — good intentions alone do not create penalties",
      "One-stroke penalty for any action giving a potential advantage",
      "Two-stroke penalty regardless of whether a Rule was breached",
      "The Committee must review and decide",
    ],
    correct: 0,
    rule: "Rule 1.3c",
    explanation:
      "Penalties under the Rules are triggered by specific breaches of specific Rules. An action only results in a penalty if it actually violates a Rule. If the action did not breach any Rule, there is no penalty regardless of whether it could have given an advantage.",
    tags: ["potential advantage", "penalty", "rules application"],
  },

  // --- Rule 1.3 Additional Edge Cases ---

  {
    id: "b5_025",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "You are playing a casual stroke play round and are unsure whether a Rule requires you to take a penalty drop or play the ball as it lies. What should you do?",
    choices: [
      "Play two balls under Rule 20.1c(3) — one under each interpretation — and report to the Committee",
      "Choose whichever option gives you a better score",
      "Always take the penalty drop to be safe",
      "Ask your playing partners to vote on the ruling",
    ],
    correct: 0,
    rule: "Rule 20.1c(3)",
    explanation:
      "In stroke play, if you are uncertain about the correct procedure, Rule 20.1c(3) allows you to play two balls. You announce which ball you want to count if the Rules allow, play out the hole with both balls, and report the situation to the Committee before signing your scorecard.",
    tags: ["two balls", "uncertainty", "stroke play", "committee"],
  },
  {
    id: "b5_026",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "In match play, two players cannot agree on a ruling during the round. What should they do?",
    choices: [
      "Either player may request a ruling from the Committee; if no referee is available, continue the match and seek a ruling later",
      "The player furthest from the hole always gets to decide",
      "They must stop play until a Rules official is found",
      "The ruling defaults in favor of the player who is trailing in the match",
    ],
    correct: 0,
    rule: "Rule 20.1b",
    explanation:
      "Under Rule 20.1b, in match play, either player may make a timely request for a ruling. If no referee is available, they should continue play and raise the issue with the Committee as soon as possible. The Committee will then rule on the disputed hole.",
    tags: ["match play", "ruling request", "dispute", "committee"],
  },
  {
    id: "b5_027",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "Before a stroke play round, two players agree that they will not penalize each other for accidentally stepping on each other's putting lines. Is this allowed?",
    choices: [
      "No — both players are disqualified for agreeing to waive a Rule",
      "Yes — it is just a courtesy agreement with no rules impact",
      "No — only a one-stroke penalty for each player",
      "Yes — stepping on a putting line has no penalty anyway",
    ],
    correct: 0,
    rule: "Rule 1.3b(1)",
    explanation:
      "Under Rule 1.3b(1), players must not agree to exclude the operation of any Rule or to waive any penalty. Even if the agreement seems minor, the penalty for doing so is disqualification for both players. Note: In practice, accidentally stepping on a line is not penalized under the Rules, so the agreement itself is misguided — but making the agreement to waive a perceived Rule still triggers disqualification.",
    tags: ["waive rules", "disqualification", "agreement", "stroke play"],
  },
  {
    id: "b5_028",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "A player in a match is winning easily and tells their opponent, 'Let's just skip the last three holes and call it a win for me.' The opponent agrees. What happens?",
    choices: [
      "Both players are disqualified for agreeing to stop play before the match was completed under the Rules",
      "The match result stands as agreed by both players",
      "Only the winning player is penalized",
      "The Committee can accept this result if both agree",
    ],
    correct: 0,
    rule: "Rule 1.3b(1), Rule 3.2a(1)",
    explanation:
      "Under Rule 1.3b(1), players cannot agree to waive any Rule. A match is complete only when one player leads by more holes than remain, or by agreement regarding a concession of a specific hole or putt. Agreeing to skip holes and declare a winner violates the Rules, and both players are disqualified.",
    tags: ["waive rules", "match play", "disqualification", "agreement"],
  },
  {
    id: "b5_029",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A player deliberately plays from a wrong place to gain an advantage. What is the ruling in stroke play?",
    choices: [
      "Disqualification for a serious breach of playing from a wrong place",
      "Two-stroke penalty only",
      "One-stroke penalty and the player must replay from the correct spot",
      "The Committee issues a warning for a first offense",
    ],
    correct: 0,
    rule: "Rule 14.7b",
    explanation:
      "Under Rule 14.7b, if a player plays from a wrong place and gains a significant advantage by doing so (a serious breach), the player is disqualified unless they correct the error. Deliberately playing from a wrong place to gain an advantage is considered a serious breach.",
    tags: ["wrong place", "serious breach", "disqualification", "stroke play"],
  },

  // --- More Rule 1 Edge Cases ---

  {
    id: "b5_030",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "A player accidentally plays a wrong ball in the general area. They realize after one stroke with it. What is the ruling in stroke play?",
    choices: [
      "Two-stroke penalty; the stroke with the wrong ball does not count, and the player must then play the correct ball",
      "One-stroke penalty and play continues with the correct ball",
      "No penalty if the player corrects the mistake immediately",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 6.3c(1)",
    explanation:
      "Under Rule 6.3c(1), playing a wrong ball in stroke play results in the general penalty (two strokes). The stroke(s) made with the wrong ball do not count. The player must correct the mistake by playing the correct ball before making a stroke on the next hole (or before leaving the final green).",
    tags: ["wrong ball", "general penalty", "stroke play", "correction"],
  },
  {
    id: "b5_031",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Is a player required to know every Rule in the Rules of Golf?",
    choices: [
      "While not required to know every Rule, a player is responsible for the penalties under any Rule they breach",
      "Yes — ignorance of a Rule is never an excuse and doubles the penalty",
      "No — players can rely on opponents or fellow competitors to know the Rules",
      "Only Committee members need to know all the Rules",
    ],
    correct: 0,
    rule: "Rule 1.3a",
    explanation:
      "Under Rule 1.3a, players are expected to apply their own penalties when they breach a Rule. While players are not explicitly required to memorize every Rule, they are responsible for the penalties that result from any breach — ignorance of a Rule does not excuse the penalty.",
    tags: ["player responsibility", "rules knowledge", "penalty"],
  },
  {
    id: "b5_032",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In stroke play, a player fails to include a penalty they did not know about when signing their scorecard. After the competition closes, the omission is discovered. What happens?",
    choices: [
      "The player is disqualified for returning a score lower than actually taken",
      "The missed penalty is added to the player's score, but no further penalty",
      "The scorecard is corrected and a two-stroke penalty is added",
      "The result stands — nothing can change after the competition closes",
    ],
    correct: 0,
    rule: "Rule 3.3b(3)",
    explanation:
      "Under Rule 3.3b(3), a player is disqualified if they return a score for any hole lower than actually taken (including unknown penalties). However, an exception exists: if the player did not know about the penalty before the competition closed AND the penalty was for a failure to include penalty strokes the player did not know about before returning the scorecard, the penalty is added rather than DQ. But if the player should have known (e.g., clear breach), DQ applies. This is a nuanced area — the Committee determines whether the exception applies.",
    tags: ["scorecard", "disqualification", "stroke play", "unknown penalty"],
  },
  {
    id: "b5_033",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "After a round, a TV viewer calls in to report that a player in a stroke play event grounded their club in a penalty area (which is no longer penalized under the current Rules). Should the Committee act on this call?",
    choices: [
      "No — grounding a club in a penalty area is allowed under the 2023 Rules, so no breach occurred",
      "Yes — the Committee must investigate all viewer reports",
      "Yes — and the player receives a two-stroke penalty",
      "No — viewer call-ins are never accepted",
    ],
    correct: 0,
    rule: "Rule 17.1b",
    explanation:
      "Under the 2019 modernization of the Rules (carried forward in the 2023 Rules), players ARE allowed to ground their club in penalty areas (Rule 17.1b). This was a major change from the old Rules. The viewer is applying an outdated rule. The Committee should confirm no breach occurred.",
    tags: ["penalty area", "grounding club", "rules modernization", "committee"],
  },
  {
    id: "b5_034",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In match play, a player gives their opponent INCORRECT information about their score on a hole. The opponent discovers the error three holes later. What happens?",
    choices: [
      "The player who gave wrong information loses the hole where the wrong information was given, unless the error is corrected before the opponent makes their next stroke",
      "No penalty — the opponent should have been keeping track",
      "The match must be replayed from the hole in question",
      "Two-stroke penalty added to the offending player's overall score",
    ],
    correct: 0,
    rule: "Rule 3.2d(1)",
    explanation:
      "Under Rule 3.2d(1), a player must tell their opponent the correct number of strokes taken when asked, or as soon as reasonably possible. If a player gives wrong information and does not correct it before the opponent makes their next stroke, the player gets the general penalty (loss of the hole where the wrong information was given). If it's discovered later, the Committee may need to adjust the match status.",
    tags: ["wrong information", "match play", "loss of hole", "scoring"],
  },
  {
    id: "b5_035",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "A player realizes they have 15 clubs in their bag at the start of a stroke play round (the limit is 14). What must they do?",
    choices: [
      "Immediately declare the excess club out of play and take the applicable penalty (two strokes per hole played with the excess, max four strokes)",
      "Remove the club and continue with no penalty since the round hasn't started",
      "The club can remain in the bag as long as it's not used",
      "The player is automatically disqualified",
    ],
    correct: 0,
    rule: "Rule 4.1b(1)",
    explanation:
      "Under Rule 4.1b, if a player starts the round with more than 14 clubs, they must immediately declare the excess club(s) out of play. The penalty in stroke play is two strokes for each hole where a breach occurred, with a maximum of four penalty strokes (applied to the first two holes). In match play, the match score is adjusted by deducting one hole for each hole at which a breach occurred (maximum two holes).",
    tags: ["excess clubs", "14 clubs", "penalty", "stroke play"],
  },

  // --- Additional Rule 1 scenarios ---

  {
    id: "b5_036",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "A player is uncertain whether their ball moved due to wind or because they addressed it. Under Rule 1.3b, how should this uncertainty be resolved?",
    choices: [
      "Consider all reasonably available evidence; if the evidence shows it is more likely than not that the player caused the ball to move, the player is considered to have caused it",
      "Always assume the player caused the ball to move",
      "Always assume natural forces caused the movement",
      "The player must replay the shot regardless of the cause",
    ],
    correct: 0,
    rule: "Rule 1.3b(2), Rule 9.2",
    explanation:
      "Under Rule 1.3b(2), facts must be determined using all reasonably available evidence and applying a 'more likely than not' standard. Under Rule 9.2, if it is more likely than not that the player caused the ball to move, the player is treated as having caused it. If it is not more likely than not, natural forces are assumed.",
    tags: ["ball moved", "reasonable judgment", "evidence", "wind"],
  },
  {
    id: "b5_037",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In stroke play, a player deliberately plays two balls on a hole under Rule 20.1c(3) because of a rules uncertainty. They forget to report the facts to the Committee before signing their scorecard. What happens?",
    choices: [
      "The player is disqualified",
      "The Committee uses the higher score of the two balls",
      "The Committee uses the lower score of the two balls",
      "A two-stroke penalty is added but the scorecard is accepted",
    ],
    correct: 0,
    rule: "Rule 20.1c(3)",
    explanation:
      "Under Rule 20.1c(3), when a player plays two balls due to uncertainty, they must report the facts to the Committee before returning the scorecard. Failure to do so results in disqualification.",
    tags: ["two balls", "disqualification", "committee", "scorecard"],
  },
  {
    id: "b5_038",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A player in stroke play calls a penalty on themselves for accidentally moving their ball. A fellow competitor disagrees and says no penalty should apply. What should the player do?",
    choices: [
      "Apply the penalty as they see it — each player is responsible for their own penalties",
      "Accept the fellow competitor's opinion since they had a better view",
      "Play two balls: one with the penalty and one without",
      "Ask the group to vote on whether the ball moved",
    ],
    correct: 0,
    rule: "Rule 1.3a",
    explanation:
      "Under Rule 1.3a, each player is responsible for applying their own penalties. If the player believes they caused the ball to move and a penalty applies, they should apply it regardless of what fellow competitors think. The player can also seek a ruling from the Committee or play two balls under Rule 20.1c(3) if genuinely uncertain.",
    tags: ["self-policing", "player responsibility", "penalty", "ball moved"],
  },
  {
    id: "b5_039",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A player in match play discovers AFTER the match is over that their opponent made an incorrect drop during the match. Can the result be changed?",
    choices: [
      "The result stands unless the opponent deliberately gave wrong information about the number of strokes taken",
      "Yes — the match must be replayed if any Rule was breached",
      "Yes — the Committee must adjust the match score retroactively",
      "No — match play results can never be changed after the match ends",
    ],
    correct: 0,
    rule: "Rule 3.2d(3)",
    explanation:
      "Under Rule 3.2d(3), after the result of a match is final, a ruling stands even if later found to be wrong. The exception is if a player deliberately gave wrong information about their score (Rule 3.2d(1)) — that can change the result even after the match is final.",
    tags: ["match play", "final result", "wrong information", "committee"],
  },
  {
    id: "b5_040",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A player in stroke play marks and lifts their ball on the putting green without being asked to by anyone. Under the current Rules, is this allowed?",
    choices: [
      "Yes — a player may always mark and lift their ball on the putting green without penalty",
      "No — the ball can only be lifted if it interferes with another player's play",
      "Yes, but a one-stroke penalty applies for unnecessary lifting",
      "Only if the player intends to clean the ball",
    ],
    correct: 0,
    rule: "Rule 13.1b",
    explanation:
      "Under Rule 13.1b, a ball on the putting green may always be lifted and cleaned. There is no requirement for a reason — the player may lift it at any time, for any reason, as long as they first mark its position.",
    tags: ["putting green", "mark and lift", "cleaning ball"],
  },
  {
    id: "b5_041",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Which of the following best describes a player's fundamental obligation under the Rules of Golf?",
    choices: [
      "Play the course as you find it and play the ball as it lies",
      "Hit the ball as far as possible and never take a penalty",
      "Always follow the advice of more experienced players in the group",
      "Complete every hole in the fewest strokes without exceptions",
    ],
    correct: 0,
    rule: "Rule 1.1",
    explanation:
      "The fundamental principles of golf, as described in Rule 1.1 and the preamble to the Rules, include playing the course as you find it and playing your ball as it lies. While there are many exceptions and relief options in the Rules, this principle underpins the game.",
    tags: ["fundamentals", "play it as it lies", "spirit of the game"],
  },
  {
    id: "b5_042",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "In match play, a player's caddie deliberately deflects the player's ball in motion. Under the Rules, what is the penalty?",
    choices: [
      "The general penalty (loss of hole) applies to the player",
      "The caddie is disqualified but the player continues without penalty",
      "One-stroke penalty to the player",
      "No penalty — the player did not personally do it",
    ],
    correct: 0,
    rule: "Rule 11.2a, Rule 1.3a",
    explanation:
      "Under Rule 1.3a, a player is responsible for the actions of their caddie. If the caddie deliberately deflects or stops the player's own ball in motion, the general penalty applies (loss of hole in match play, two strokes in stroke play). The player is treated as though they took the action themselves.",
    tags: ["caddie", "deflection", "match play", "player responsibility"],
  },
  {
    id: "b5_043",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A player who is losing badly in match play begins deliberately playing slowly to frustrate their opponent. The Committee has adopted a pace-of-play Code of Conduct. What can happen?",
    choices: [
      "Penalties under the Code of Conduct for pace of play AND potential disqualification for serious misconduct under Rule 1.2a",
      "Only the pace-of-play penalty from the Code of Conduct applies",
      "Only disqualification under Rule 1.2a can apply",
      "No penalty unless the round exceeds a specific time limit",
    ],
    correct: 0,
    rule: "Rule 1.2a, Rule 1.2b, Rule 5.6b",
    explanation:
      "Deliberately playing slowly to frustrate an opponent may violate both the Code of Conduct (if one is adopted under Rule 1.2b) and constitute serious misconduct under Rule 1.2a. The Committee can apply penalties under the Code of Conduct and additionally may disqualify for serious misconduct, as these provisions operate independently.",
    tags: ["slow play", "serious misconduct", "code of conduct", "match play"],
  },
  {
    id: "b5_044",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "In stroke play, a player unknowingly plays from a teeing area that was set up for a different competition. The player completes the hole. What is the ruling?",
    choices: [
      "The player has played from a wrong place — the general penalty (two strokes) applies and the player must not correct the error if no serious breach occurred",
      "No penalty — the player didn't know it was the wrong tee",
      "The player must replay the hole from the correct teeing area without penalty",
      "Disqualification for playing from outside the course",
    ],
    correct: 0,
    rule: "Rule 6.1b, Rule 14.7a",
    explanation:
      "Under Rule 6.1b, each hole must be started from within the teeing area. Playing from outside the correct teeing area means the player played from a wrong place. Under Rule 14.7a in stroke play, the player gets the general penalty (two strokes). If the error is not a serious breach, the player continues with the score from the wrong place. If it IS a serious breach, the player must correct the error or be disqualified.",
    tags: ["wrong teeing area", "wrong place", "general penalty", "stroke play"],
  },
  {
    id: "b5_045",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "A player calls a Rules official to get a ruling during a stroke play round. While waiting for the official, can the player continue playing?",
    choices: [
      "The player can play on, and if uncertain about the ruling, may play two balls under Rule 20.1c(3)",
      "The player must stop play completely until the official arrives",
      "The player must skip the hole and return to it later",
      "The player's group must all stop and wait together",
    ],
    correct: 0,
    rule: "Rule 20.1c(3), Rule 5.6a",
    explanation:
      "In stroke play, if a ruling is not immediately available, the player may play two balls under Rule 20.1c(3) to keep play moving. The player announces which ball they want to count if the ruling permits, plays out the hole with both, and reports the facts to the Committee.",
    tags: ["ruling request", "two balls", "pace of play", "stroke play"],
  },

  // =====================================================================
  // RULE 2 — THE COURSE
  // =====================================================================

  // --- Rule 2.1: Course Boundaries and Out of Bounds ---

  {
    id: "b5_046",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Out of bounds is defined by white stakes. If your ball is resting against the inside of a white stake, is it out of bounds?",
    choices: [
      "No — the ball is in bounds because the out of bounds line is determined by the course-side edge of the stakes at ground level",
      "Yes — any ball touching a white stake is out of bounds",
      "It depends on whether more than half the ball is past the stake",
      "Only a Rules official can determine this",
    ],
    correct: 0,
    rule: "Rule 2.1, Definition of Out of Bounds",
    explanation:
      "The out of bounds boundary is determined by the nearest inside (course-side) points of the boundary stakes at ground level. A ball resting against the inside of a stake is still on the course side of the line and therefore in bounds.",
    tags: ["OB", "boundary", "white stakes", "in bounds"],
  },
  {
    id: "b5_047",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What color are the stakes or lines that define out of bounds?",
    choices: [
      "White",
      "Red",
      "Yellow",
      "Blue",
    ],
    correct: 0,
    rule: "Rule 2.1, Definition of Out of Bounds",
    explanation:
      "Out of bounds is defined by white stakes, white lines, or other white boundary markers. Red marks penalty areas (lateral), yellow marks penalty areas (regular), and blue marks no play zones or other Committee-defined areas.",
    tags: ["OB", "boundary", "white stakes", "course markings"],
  },
  {
    id: "b5_048",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "A white line is painted on the ground to mark out of bounds. Where exactly is the out of bounds boundary?",
    choices: [
      "The inside edge (course side) of the line at ground level",
      "The center of the line",
      "The outside edge of the line",
      "The line itself — any ball touching the line is out of bounds",
    ],
    correct: 0,
    rule: "Rule 2.1, Definition of Out of Bounds",
    explanation:
      "When out of bounds is defined by a painted line, the boundary is the course-side (inside) edge of the line at ground level. A ball is out of bounds only when all of it is beyond the inside edge of the line.",
    tags: ["OB", "boundary", "painted line", "course markings"],
  },
  {
    id: "b5_049",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A ball lies just outside the white stakes. The player can stand in bounds and swing at the ball. Is the ball out of bounds?",
    choices: [
      "Yes — the ball's position determines whether it is out of bounds, not where the player stands",
      "No — as long as the player is in bounds, the ball is playable",
      "Only if the ball is more than two club-lengths past the stakes",
      "The player can declare it in bounds if they can reach it",
    ],
    correct: 0,
    rule: "Rule 2.1, Definition of Out of Bounds",
    explanation:
      "A ball is out of bounds when all of it lies outside the boundary edge of the course. It does not matter where the player stands. The player may stand out of bounds to play a ball that is in bounds, but they cannot play a ball that is out of bounds even if they can reach it from in bounds.",
    tags: ["OB", "boundary", "ball position", "player stance"],
  },
  {
    id: "b5_050",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A ball is sitting on the out of bounds line, with part of the ball on each side. Is the ball out of bounds?",
    choices: [
      "No — a ball is out of bounds only when ALL of it lies outside the boundary edge; if any part is in bounds, it is in bounds",
      "Yes — if any part of the ball is past the boundary line, it is out of bounds",
      "It depends on whether the center of the ball is past the line",
      "The player must drop a new ball on the boundary line",
    ],
    correct: 0,
    rule: "Rule 2.1, Definition of Out of Bounds",
    explanation:
      "Under the definition of Out of Bounds, a ball is out of bounds only when all of it lies outside the boundary edge. If any part of the ball is on or inside the boundary edge, the ball is in bounds.",
    tags: ["OB", "boundary", "ball position", "in bounds"],
  },
  {
    id: "b5_051",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "A player's ball lands out of bounds. What is the penalty and procedure?",
    choices: [
      "One-stroke penalty; the player must play again from where the previous stroke was made (stroke and distance)",
      "Two-stroke penalty; drop a ball within two club-lengths of where it crossed the boundary",
      "No penalty; drop a ball at the nearest point in bounds",
      "One-stroke penalty; drop a ball at the nearest point in bounds",
    ],
    correct: 0,
    rule: "Rule 18.2b",
    explanation:
      "When a ball is out of bounds, the player must take stroke-and-distance relief under Rule 18.2b. This means adding one penalty stroke and playing again from where the previous stroke was made. There is no option to drop near where the ball went out (unless a Local Rule provides an alternative).",
    tags: ["OB", "stroke and distance", "penalty", "re-play"],
  },
  {
    id: "b5_052",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A boundary fence runs along the edge of the course. A player's ball lies in bounds, but the fence interferes with the player's swing. Can the player get free relief from the fence?",
    choices: [
      "No — boundary fences and walls are not obstructions and no free relief is available",
      "Yes — fences are immovable obstructions and free relief is available",
      "Yes — one club-length relief from the fence, not nearer the hole",
      "Only in stroke play, not match play",
    ],
    correct: 0,
    rule: "Rule 2.1, Definition of Obstruction",
    explanation:
      "Under the definitions, boundary objects (including walls, fences, stakes, and railings defining out of bounds) are not obstructions. They are fixed and no free relief is available from them. The player must play the ball as it lies or take an unplayable ball option under Rule 19.",
    tags: ["OB", "boundary fence", "no relief", "obstruction"],
  },
  {
    id: "b5_053",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "White OB stakes are typically fixed in the ground. Can a player remove a white stake if it interferes with their stance or swing?",
    choices: [
      "No — boundary stakes defining out of bounds may NOT be moved, even if they interfere with play",
      "Yes — any stake can be removed if it interferes with a stroke",
      "Yes — but only if the stake is loose and easily removable",
      "Only with the Committee's permission",
    ],
    correct: 0,
    rule: "Rule 2.1, Rule 8.1a",
    explanation:
      "Boundary objects defining out of bounds (including white stakes) are not movable obstructions and may not be moved by the player. Moving a boundary stake to improve the area of intended swing or stance would be a breach of Rule 8.1a (improving conditions of the stroke). The penalty is the general penalty.",
    tags: ["OB", "boundary stakes", "cannot move", "improving conditions"],
  },
  {
    id: "b5_054",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A Committee defines out of bounds with a wall. Where exactly is the out of bounds boundary in this case?",
    choices: [
      "The inside edge (course side) of the wall at ground level",
      "The top of the wall",
      "The outside edge of the wall",
      "The center of the wall",
    ],
    correct: 0,
    rule: "Rule 2.1, Definition of Out of Bounds",
    explanation:
      "When out of bounds is defined by a wall, fence, or similar structure, the boundary is the nearest inside edge at ground level. This is consistent with how all boundary markers work — the course-side edge determines the line.",
    tags: ["OB", "boundary", "wall", "inside edge"],
  },
  {
    id: "b5_055",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A Committee's Local Rule defines out of bounds by a row of trees. The trees have large root systems that extend several feet in all directions. Where is the OB boundary?",
    choices: [
      "The nearest inside (course-side) points of the trees at ground level, not including the roots",
      "The edge of the root systems on the course side",
      "The center of each tree trunk",
      "Two club-lengths from the nearest tree trunk",
    ],
    correct: 0,
    rule: "Rule 2.1, Definition of Out of Bounds",
    explanation:
      "When out of bounds is defined by other physical features like trees, the boundary is determined by the nearest course-side points at ground level, as identified by the Committee. Typically, this means the nearest inside points of the tree trunks at ground level, not the root systems.",
    tags: ["OB", "boundary", "trees", "committee", "local rule"],
  },
  {
    id: "b5_056",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Can out of bounds exist within the boundaries of a golf course (e.g., between two holes)?",
    choices: [
      "Yes — the Committee can define any area as out of bounds, including internal boundaries between holes",
      "No — out of bounds only exists beyond the perimeter of the course",
      "Only if a public road runs through the course",
      "Only in match play",
    ],
    correct: 0,
    rule: "Rule 2.1",
    explanation:
      "Under Rule 2.1, the Committee can define out of bounds anywhere, including internal boundaries. A common example is when a Committee declares a neighboring hole or a practice area as out of bounds for a particular hole. Internal OB can be for specific holes only.",
    tags: ["OB", "internal boundary", "committee", "course setup"],
  },

  // --- Rule 2.2: Defined Areas of the Course ---

  {
    id: "b5_057",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "How many defined areas does the course have?",
    choices: [
      "Five: the general area, the teeing area, penalty areas, bunkers, and the putting green",
      "Three: the fairway, the rough, and the green",
      "Four: tee box, fairway, rough, and green",
      "Six: tee, fairway, rough, bunkers, water, and green",
    ],
    correct: 0,
    rule: "Rule 2.2",
    explanation:
      "Under Rule 2.2, there are five defined areas of the course: (1) the general area, (2) the teeing area you must play from in starting each hole, (3) all penalty areas, (4) all bunkers, and (5) the putting green of the hole being played. The general area covers everything not in the other four specific areas.",
    tags: ["course areas", "general area", "defined areas"],
  },
  {
    id: "b5_058",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is the 'general area' of the course?",
    choices: [
      "The entire course EXCEPT the teeing area, penalty areas, bunkers, and putting green of the hole being played",
      "Just the fairway",
      "The fairway and the rough combined",
      "Everything inside the boundary stakes",
    ],
    correct: 0,
    rule: "Rule 2.2a",
    explanation:
      "The general area is the broadest area of the course. It covers the entire course except for the four specific areas: the teeing area, all penalty areas, all bunkers, and the putting green of the hole being played. The general area includes the fairway, rough, trees, paths (if not defined as obstructions), and any other areas not specifically defined.",
    tags: ["general area", "course areas", "definition"],
  },
  {
    id: "b5_059",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Your ball lies in a part of the course with no special markings — just mowed grass between two holes. What area of the course is it in?",
    choices: [
      "The general area",
      "The fairway (which is a defined area under the Rules)",
      "It depends on the height of the grass cut",
      "The teeing area of the next hole",
    ],
    correct: 0,
    rule: "Rule 2.2a",
    explanation:
      "The 'fairway' is not a defined area under the Rules of Golf. All parts of the course that are not the teeing area, a penalty area, a bunker, or the putting green are in the general area. This includes fairways, rough, trees, and any other unmarked areas.",
    tags: ["general area", "fairway", "course areas", "definition"],
  },
  {
    id: "b5_060",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A ball lies partly in a bunker and partly in the general area. What area is the ball in?",
    choices: [
      "The ball is in the bunker — when a ball lies in two areas, special areas take priority, and a bunker takes priority over the general area",
      "The ball is in the general area because more than half is outside the bunker",
      "The player chooses which area the ball is in",
      "A Rules official must make the determination",
    ],
    correct: 0,
    rule: "Rule 2.2c",
    explanation:
      "Under Rule 2.2c, when a ball lies in two different areas of the course, it is treated as lying in the specific area with the most restrictive rules. The priority order is: penalty area > bunker > putting green > general area. So a ball partly in a bunker and partly in the general area is treated as being in the bunker.",
    tags: ["ball in two areas", "bunker", "general area", "priority"],
  },
  {
    id: "b5_061",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A ball lies partly in a penalty area and partly in a bunker. What area is the ball treated as being in?",
    choices: [
      "The penalty area — it has higher priority than the bunker",
      "The bunker — it has higher priority than the penalty area",
      "The player chooses which area to treat it as",
      "The general area — neither special area applies",
    ],
    correct: 0,
    rule: "Rule 2.2c",
    explanation:
      "Under Rule 2.2c, when a ball lies in two different areas, it is treated as lying in the area with the most specific rules. The penalty area takes priority over the bunker because a penalty area can exist within or alongside a bunker, and the penalty area rules would apply.",
    tags: ["ball in two areas", "penalty area", "bunker", "priority"],
  },
  {
    id: "b5_062",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Red stakes or red lines define what type of area on the course?",
    choices: [
      "A penalty area (specifically, a red penalty area where lateral relief is available)",
      "Out of bounds",
      "A no play zone",
      "Ground under repair",
    ],
    correct: 0,
    rule: "Rule 2.2, Definition of Penalty Area",
    explanation:
      "Red stakes or lines define a red penalty area, which was formerly called a 'lateral water hazard.' In a red penalty area, the player has the option of lateral relief (dropping within two club-lengths of where the ball last crossed the edge) in addition to back-on-the-line relief and stroke-and-distance relief.",
    tags: ["penalty area", "red stakes", "lateral relief", "course markings"],
  },
  {
    id: "b5_063",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Yellow stakes or yellow lines define what type of area on the course?",
    choices: [
      "A penalty area (specifically, a yellow penalty area — lateral relief is NOT available)",
      "Out of bounds",
      "Ground under repair",
      "A temporary immovable obstruction",
    ],
    correct: 0,
    rule: "Rule 2.2, Definition of Penalty Area",
    explanation:
      "Yellow stakes or lines define a yellow penalty area (formerly called a 'water hazard'). From a yellow penalty area, the player may take stroke-and-distance relief or back-on-the-line relief, but lateral relief is NOT available (unlike from a red penalty area).",
    tags: ["penalty area", "yellow stakes", "no lateral relief", "course markings"],
  },
  {
    id: "b5_064",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "The Committee decides to mark an area of dense bushes — with no water — as a red penalty area. Is this allowed?",
    choices: [
      "Yes — a penalty area does not need to contain water; the Committee can mark any area as a penalty area",
      "No — penalty areas can only exist where there is water",
      "Only if the Committee provides a Local Rule",
      "Only yellow penalty areas can be designated without water",
    ],
    correct: 0,
    rule: "Rule 2.2, Definition of Penalty Area",
    explanation:
      "Under the 2023 Rules, the Committee can designate any area as a penalty area, whether or not it contains water. This was a key change in the 2019 rules modernization. Dense vegetation, cliffs, or other difficult areas can be marked as penalty areas to help pace of play.",
    tags: ["penalty area", "no water", "committee", "course setup"],
  },
  {
    id: "b5_065",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "The edge of a penalty area is defined by red stakes. Do the stakes themselves define the boundary, or is there an imaginary line between them?",
    choices: [
      "The edge is defined by the line between the nearest course-side points of the stakes at ground level",
      "The boundary is only at each individual stake",
      "The boundary extends two club-lengths from each stake",
      "The stakes are just visual references — the natural edge of water defines the boundary",
    ],
    correct: 0,
    rule: "Rule 2.2, Definition of Penalty Area",
    explanation:
      "When stakes define a penalty area, the edge is the line between the nearest course-side (inside) points of consecutive stakes at ground level. The stakes themselves are inside the penalty area. This creates a continuous boundary around the entire area.",
    tags: ["penalty area", "edge", "stakes", "boundary"],
  },
  {
    id: "b5_066",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "Both stakes and a painted line are used to mark a penalty area, but the line and stakes don't perfectly align. Which defines the edge?",
    choices: [
      "The painted line defines the edge — when both exist, the line takes precedence over the stakes",
      "The stakes define the edge — stakes always take priority",
      "Whichever is more favorable to the player",
      "The player must ask the Committee to clarify",
    ],
    correct: 0,
    rule: "Rule 2.2, Definition of Penalty Area",
    explanation:
      "When both stakes and a painted line are used to mark a penalty area and they do not align, the painted line defines the edge. The stakes are there to help identify the area from a distance, but the line is the actual boundary.",
    tags: ["penalty area", "line vs stakes", "boundary", "course markings"],
  },
  {
    id: "b5_067",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "A penalty area stake is leaning and appears to be in the wrong position. Can a player move it?",
    choices: [
      "No — penalty area stakes are movable obstructions and CAN be moved, but doing so to change the defined edge of the penalty area would be a breach of Rule 8.1a",
      "Yes — penalty area stakes are movable obstructions and can be freely removed",
      "No — penalty area stakes can never be moved under any circumstances",
      "Only the Committee can move penalty area stakes",
    ],
    correct: 1,
    rule: "Rule 2.2, Rule 15.2a",
    explanation:
      "Penalty area stakes are movable obstructions (unlike boundary/OB stakes, which cannot be moved). Under Rule 15.2a, a player may remove a movable obstruction anywhere on or off the course without penalty. However, the defined edge of the penalty area is determined by the stakes' positions as set by the Committee.",
    tags: ["penalty area", "movable obstruction", "stakes", "removal"],
  },
  {
    id: "b5_068",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A ball lies in a bunker. The sand extends a few inches beyond the bunker's grassy edge. Is the sand beyond the edge part of the bunker?",
    choices: [
      "No — a bunker is defined by its prepared area; sand beyond the defined edge (lip or wall) is not part of the bunker",
      "Yes — any sand is always considered part of the bunker",
      "It depends on whether the sand was placed there intentionally",
      "The player can choose to treat it as bunker or general area",
    ],
    correct: 0,
    rule: "Rule 2.2, Definition of Bunker",
    explanation:
      "Under the definition of Bunker, a bunker is a specially prepared area of sand. Sand that has spilled over the edge or lip of the bunker, or that is in other parts of the course (like sand on the fairway), is NOT part of the bunker. The bunker's edge defines its boundary — sand beyond that edge is in the general area.",
    tags: ["bunker", "edge", "sand", "definition", "general area"],
  },
  {
    id: "b5_069",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "What is the edge of a bunker defined by?",
    choices: [
      "The edge where the prepared area of sand meets the surrounding grass, soil, or similar material — including any stacked turf or constructed wall",
      "Only by painted lines around the bunker",
      "By an imaginary line two club-lengths from the nearest sand",
      "By the lowest point of the sand surface",
    ],
    correct: 0,
    rule: "Rule 2.2, Definition of Bunker",
    explanation:
      "The edge of a bunker is where the prepared area of sand begins. This includes any lip, wall, or face of the bunker (including stacked turf or a constructed retaining wall). Anything inside that edge — including the sand, the walls, and any ground within those walls — is part of the bunker.",
    tags: ["bunker", "edge", "definition", "lip", "wall"],
  },
  {
    id: "b5_070",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Grass growing inside a bunker — is it part of the bunker?",
    choices: [
      "No — grass-covered ground within a bunker is not part of the bunker; it is in the general area",
      "Yes — everything within the bunker edge is part of the bunker",
      "Only if the grass is less than one inch tall",
      "It depends on whether the Committee has mowed it",
    ],
    correct: 0,
    rule: "Rule 2.2, Definition of Bunker",
    explanation:
      "Under the definition of Bunker, grass-covered ground within a bunker (such as an island of grass in the middle of a large bunker, or grass growing on the walls) is NOT part of the bunker. Only the sand area and non-grass ground within the bunker edges are part of the bunker.",
    tags: ["bunker", "grass island", "definition", "general area"],
  },
  {
    id: "b5_071",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Your ball lies on the putting green of the hole you are playing. You mark and lift it. Before replacing it, a gust of wind blows your ball marker off the green. What should you do?",
    choices: [
      "Replace the ball (or a new ball marker) on the estimated original spot without penalty",
      "Play from where the marker was blown to",
      "Re-tee and replay the hole",
      "Take a one-stroke penalty and drop at the nearest point",
    ],
    correct: 0,
    rule: "Rule 13.1d(2)",
    explanation:
      "If a ball marker is moved by natural forces (wind, water), the player should replace the ball on its estimated original spot without penalty. Under Rule 13.1d(2), when a ball or ball-marker on the putting green is moved by natural forces, the player replaces the ball on its original spot (which must be estimated if not known).",
    tags: ["putting green", "ball marker", "wind", "replace"],
  },
  {
    id: "b5_072",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "The putting green of the hole being played is a specific defined area. Does the same treatment apply to a player's ball on a WRONG putting green (a green for a different hole)?",
    choices: [
      "No — on a wrong green, the player MUST take free relief; they cannot play from a wrong putting green",
      "Yes — the player can play from any putting green",
      "No — the player gets a one-stroke penalty and must drop off the green",
      "Yes, but only in match play",
    ],
    correct: 0,
    rule: "Rule 13.1f",
    explanation:
      "Under Rule 13.1f, when a ball lies on a wrong putting green (a green for another hole, including practice greens if defined by the Committee), the player must NOT play the ball as it lies. The player must take free relief by dropping in the general area at the nearest point of complete relief, not nearer the hole. The penalty for playing from a wrong green is the general penalty.",
    tags: ["wrong green", "free relief", "mandatory relief", "putting green"],
  },
  {
    id: "b5_073",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "The teeing area is defined as a rectangle. How deep is this rectangle?",
    choices: [
      "Two club-lengths deep, measured back from the front edges of the tee markers",
      "One club-length deep",
      "As deep as the flat area behind the tee markers",
      "Three club-lengths deep",
    ],
    correct: 0,
    rule: "Rule 2.2, Definition of Teeing Area",
    explanation:
      "The teeing area is a rectangle that is two club-lengths deep. Its front edge is defined by a line between the forward-most points of the two tee markers set by the Committee. Its sides extend back two club-lengths from the outside of each tee marker.",
    tags: ["teeing area", "two club-lengths", "tee markers", "definition"],
  },
  {
    id: "b5_074",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A player tees their ball one inch in front of the line between the tee markers on the teeing area. What happens in stroke play?",
    choices: [
      "General penalty (two strokes) and the player must correct the error by playing from within the teeing area",
      "No penalty — the tee markers are just visual guides",
      "One-stroke penalty but the stroke counts",
      "Disqualification",
    ],
    correct: 0,
    rule: "Rule 6.1b(1)",
    explanation:
      "Under Rule 6.1b(1), the player must play from within the teeing area. In stroke play, playing from outside the teeing area results in the general penalty (two strokes) and the player must correct the error by playing a ball from within the teeing area before making a stroke on the next hole. The stroke from outside the teeing area does not count.",
    tags: ["teeing area", "outside tee markers", "general penalty", "correction"],
  },
  {
    id: "b5_075",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Can a player stand outside the teeing area while making a stroke, as long as the ball is teed within the teeing area?",
    choices: [
      "Yes — only the ball needs to be within the teeing area; the player can stand anywhere",
      "No — both feet must be within the teeing area",
      "No — at least one foot must be within the teeing area",
      "Only in match play",
    ],
    correct: 0,
    rule: "Rule 6.1b, Definition of Teeing Area",
    explanation:
      "The Rules require the ball to be played from within the teeing area. There is no requirement for the player's feet or body to be within the teeing area. A player may stand outside the teeing area (or even outside the tee markers) as long as the ball itself is properly teed within the teeing area.",
    tags: ["teeing area", "stance", "ball position", "tee shot"],
  },

  // --- Rule 2.3: Objects or Conditions That Can Affect Play ---

  {
    id: "b5_076",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "A sprinkler head near your ball interferes with your stance. The sprinkler head is an immovable obstruction. Are you entitled to free relief?",
    choices: [
      "Yes — free relief is available from immovable obstructions under Rule 16.1",
      "No — you must play the ball as it lies",
      "Only if the sprinkler head is within one club-length of your ball",
      "Yes, but only in stroke play",
    ],
    correct: 0,
    rule: "Rule 16.1, Rule 2.3",
    explanation:
      "Under Rule 16.1, a player is entitled to free relief when an immovable obstruction (like a sprinkler head, cart path, or drainage grate) interferes with the player's ball, stance, or area of intended swing. The player drops within one club-length of the nearest point of complete relief, not nearer the hole.",
    tags: ["immovable obstruction", "free relief", "sprinkler head", "interference"],
  },
  {
    id: "b5_077",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is the difference between a 'movable obstruction' and an 'immovable obstruction'?",
    choices: [
      "A movable obstruction can be moved with reasonable effort without damaging it or the course; an immovable obstruction cannot",
      "Movable obstructions are natural; immovable obstructions are man-made",
      "Movable obstructions are small; immovable obstructions are large",
      "There is no difference — both are treated the same under the Rules",
    ],
    correct: 0,
    rule: "Rule 2.3, Definitions of Movable Obstruction and Immovable Obstruction",
    explanation:
      "Under the definitions, a movable obstruction is an obstruction that can be moved with reasonable effort, without unreasonable delay, and without damaging the course. Examples include rakes, cans, and signs. An immovable obstruction cannot be reasonably moved, like cart paths, sprinkler heads, and permanent structures. Different relief procedures apply to each.",
    tags: ["movable obstruction", "immovable obstruction", "definition", "relief"],
  },
  {
    id: "b5_078",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A rake is lying in a bunker and your ball is resting against it. What should you do?",
    choices: [
      "Remove the rake (it is a movable obstruction); if the ball moves, replace the ball on its original spot without penalty",
      "Play the ball as it lies — you cannot move anything in a bunker",
      "Take a penalty drop outside the bunker",
      "Remove the rake but take a one-stroke penalty if the ball moves",
    ],
    correct: 0,
    rule: "Rule 15.2a(2)",
    explanation:
      "A rake is a movable obstruction. Under Rule 15.2a, movable obstructions may be removed anywhere on the course, including in bunkers. If the ball moves when the obstruction is removed, the ball must be replaced on its original spot without penalty.",
    tags: ["movable obstruction", "rake", "bunker", "ball moves", "replace"],
  },
  {
    id: "b5_079",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "The Committee declares a large boulder near a green to be an 'integral object.' Your ball is behind the boulder and it blocks your shot. Can you get relief?",
    choices: [
      "No — integral objects are treated as part of the course and no free relief is available",
      "Yes — boulders are always immovable obstructions with free relief available",
      "Yes — one club-length relief, not nearer the hole",
      "Only if the boulder was placed there by the maintenance crew",
    ],
    correct: 0,
    rule: "Rule 2.3, Definition of Integral Object",
    explanation:
      "Under Rule 2.3, the Committee may define certain artificial objects as integral objects (also known as integral parts of the course). These objects are treated as part of the course, not as obstructions. No free relief is available from integral objects. Common examples include walls, pilings, and decorative boulders that the Committee wants to be part of the course's challenge.",
    tags: ["integral object", "no relief", "committee", "course feature"],
  },
  {
    id: "b5_080",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A stone wall runs alongside a fairway. The Committee has NOT declared it an integral object. What is the wall's status?",
    choices: [
      "It is an immovable obstruction (assuming it is artificial and not a boundary wall), and free relief is available",
      "It is automatically an integral object because it is a wall",
      "It is a boundary object and no relief is available",
      "No relief is available from any wall under any circumstances",
    ],
    correct: 0,
    rule: "Rule 2.3, Definition of Obstruction",
    explanation:
      "An artificial object that is not a boundary object and has not been declared an integral object by the Committee is treated as an obstruction. If it cannot be moved with reasonable effort, it is an immovable obstruction, and free relief is available under Rule 16.1. Walls are only integral objects if the Committee specifically declares them as such.",
    tags: ["immovable obstruction", "wall", "integral object", "free relief"],
  },
  {
    id: "b5_081",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "An overhead power line crosses the course. Your ball hits the wire during flight. What happens?",
    choices: [
      "It depends — if a Local Rule requires, the stroke does not count and must be replayed; otherwise the ball is played as it lies",
      "The stroke always counts and you play the ball where it lands",
      "Automatic free drop at the point directly below where the ball hit the wire",
      "The player must take a penalty stroke and replay",
    ],
    correct: 0,
    rule: "Rule 2.3, Model Local Rule E-11",
    explanation:
      "Power lines and cables over the course are immovable obstructions. However, by default the stroke counts and you play the ball as it lies (or take appropriate relief). If the Committee has adopted the Model Local Rule E-11 for temporary power lines, wires, or cables, the stroke does not count and must be replayed. Many courses adopt this Local Rule.",
    tags: ["power line", "local rule", "obstruction", "replay stroke"],
  },
  {
    id: "b5_082",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Are cart paths considered obstructions?",
    choices: [
      "Yes — paved cart paths are immovable obstructions and free relief is available",
      "No — cart paths are part of the course and must be played as they are",
      "Only if they are paved; gravel paths are not obstructions",
      "Only in professional tournaments",
    ],
    correct: 0,
    rule: "Rule 2.3, Definition of Obstruction, Rule 16.1",
    explanation:
      "Cart paths are artificial and are not boundary objects or integral objects (unless the Committee declares them as such). Therefore, they are obstructions. Since they cannot be moved, they are immovable obstructions. Free relief is available under Rule 16.1 when the path interferes with the ball's lie, stance, or area of intended swing.",
    tags: ["cart path", "immovable obstruction", "free relief"],
  },
  {
    id: "b5_083",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "An ant hill is in the general area. Is it an obstruction or something else?",
    choices: [
      "An ant hill is a loose impediment (or an animal hole if it forms a hole/cast), NOT an obstruction — obstructions must be artificial",
      "An ant hill is a movable obstruction that can be removed",
      "An ant hill is an immovable obstruction with free relief available",
      "An ant hill is an integral object",
    ],
    correct: 0,
    rule: "Rule 2.3, Definition of Obstruction, Rule 16.1a",
    explanation:
      "Under the definitions, obstructions must be artificial objects. An ant hill is natural, so it is not an obstruction. An ant hill may be a loose impediment (which can be removed) or, if it creates a hole, it could constitute an animal hole — which is an abnormal course condition providing free relief under Rule 16.1a.",
    tags: ["obstruction", "loose impediment", "animal hole", "natural object"],
  },
  {
    id: "b5_084",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A drainage pipe is partially buried in the ground and protrudes slightly above the surface near a player's ball. The Committee has not declared it an integral object. What is its status?",
    choices: [
      "It is an immovable obstruction — free relief is available if it interferes with the player's lie, stance, or swing",
      "It is an integral object because it is partially buried",
      "No relief is available because the pipe is below ground level",
      "It is a boundary object",
    ],
    correct: 0,
    rule: "Rule 2.3, Definition of Obstruction, Rule 16.1",
    explanation:
      "A drainage pipe is an artificial object. Since it has not been declared an integral object or a boundary object by the Committee, it is an obstruction. Because it cannot be moved with reasonable effort, it is an immovable obstruction. Free relief is available under Rule 16.1 if it interferes with the player's lie, stance, or area of intended swing.",
    tags: ["immovable obstruction", "drainage", "free relief", "artificial object"],
  },
  {
    id: "b5_085",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A player's ball comes to rest on a paved maintenance road that the Committee uses for course access. The road is not marked as OB and has not been declared an integral object. What relief is available?",
    choices: [
      "The road is an immovable obstruction — free relief is available under Rule 16.1",
      "No relief — maintenance roads are always integral objects",
      "The player must take a penalty drop",
      "The player must play the ball as it lies on the road",
    ],
    correct: 0,
    rule: "Rule 2.3, Definition of Obstruction, Rule 16.1",
    explanation:
      "Artificial surfaces like paved roads are obstructions unless declared integral objects or boundary objects. Since the maintenance road has not been declared either, it is an immovable obstruction. The player is entitled to free relief under Rule 16.1.",
    tags: ["immovable obstruction", "maintenance road", "free relief"],
  },

  // --- Rule 2.4: No Play Zones ---

  {
    id: "b5_086",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "What is a 'no play zone'?",
    choices: [
      "An area defined by the Committee where play is prohibited — the player MUST take relief, even if the ball is playable",
      "Another term for out of bounds",
      "An area where a player receives a penalty stroke for entering",
      "A temporary area closed only during course maintenance",
    ],
    correct: 0,
    rule: "Rule 2.4",
    explanation:
      "Under Rule 2.4, a no play zone is a defined area of the course where the Committee has prohibited play. If a player's ball is in a no play zone, or if the no play zone interferes with the player's stance or area of intended swing, the player MUST take relief. Playing from a no play zone results in the general penalty.",
    tags: ["no play zone", "mandatory relief", "committee", "prohibited"],
  },
  {
    id: "b5_087",
    category: "FUNDAMENTALS",
    tier: "competitor",
    text: "A ball lies in a no play zone within a penalty area. How does the player take relief?",
    choices: [
      "The player must take penalty relief from the penalty area under Rule 17.1 (they cannot play from the no play zone even though the ball is in the penalty area)",
      "The player gets free relief to the nearest point outside the no play zone but still within the penalty area",
      "The player must take stroke-and-distance relief only",
      "The player may play the ball because penalty area rules override no play zone rules",
    ],
    correct: 0,
    rule: "Rule 2.4, Rule 17.1e",
    explanation:
      "Under Rule 17.1e, when a ball is in a no play zone within a penalty area, the player must not play the ball as it lies. The player must take penalty relief under Rule 17.1d (back-on-the-line, lateral relief for red areas, or stroke and distance), NOT free relief within the penalty area. The no play zone makes the ball unplayable from that specific spot.",
    tags: ["no play zone", "penalty area", "mandatory relief", "penalty relief"],
  },
  {
    id: "b5_088",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A ball lies in a no play zone within a bunker. What relief procedure applies?",
    choices: [
      "The player must take free relief in the bunker under Rule 16.1f, or may take penalty relief outside the bunker under Rule 16.1f(2)",
      "The player must take penalty relief under the unplayable ball Rule",
      "The player must take stroke-and-distance relief",
      "The player plays the ball as it lies — no play zones don't apply in bunkers",
    ],
    correct: 0,
    rule: "Rule 2.4, Rule 16.1f",
    explanation:
      "Under Rule 16.1f, when a ball is in a no play zone in a bunker (an abnormal course condition in a bunker), the player must take free relief within the bunker. The player drops in the bunker at the nearest point of complete relief. Alternatively, the player may take back-on-the-line relief in the bunker, or for one penalty stroke, take back-on-the-line relief outside the bunker.",
    tags: ["no play zone", "bunker", "free relief", "mandatory relief"],
  },
  {
    id: "b5_089",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "Your ball lies just outside a no play zone, but the no play zone interferes with your stance. Must you take relief?",
    choices: [
      "Yes — you must take relief if a no play zone interferes with your stance or area of intended swing, even though the ball is outside it",
      "No — you only need relief if the ball itself is in the no play zone",
      "No — stance interference from a no play zone is not covered by the Rules",
      "Only if the Committee specifically says stance interference applies",
    ],
    correct: 0,
    rule: "Rule 2.4",
    explanation:
      "Under Rule 2.4, a player must take relief not only when the ball is in a no play zone, but also when the no play zone interferes with the player's area of intended stance or area of intended swing. This is mandatory relief — the player may not play the ball if the no play zone would require standing in it.",
    tags: ["no play zone", "stance interference", "mandatory relief"],
  },
  {
    id: "b5_090",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A player deliberately plays their ball from within a no play zone. What is the penalty?",
    choices: [
      "The general penalty (two strokes in stroke play, loss of hole in match play)",
      "One-stroke penalty",
      "Disqualification",
      "No penalty, but the player must replay the shot",
    ],
    correct: 0,
    rule: "Rule 2.4, Rule 17.1e, Rule 16.1f",
    explanation:
      "Playing from a no play zone carries the general penalty. In stroke play, this is two penalty strokes; in match play, loss of hole. The general penalty applies because the player failed to take mandatory relief as required by the Rules.",
    tags: ["no play zone", "general penalty", "mandatory relief"],
  },
  {
    id: "b5_091",
    category: "FUNDAMENTALS",
    tier: "weekend",
    text: "What is a common reason a Committee might designate a no play zone?",
    choices: [
      "To protect environmentally sensitive areas, young tree plantings, or newly sodded areas",
      "To speed up pace of play on difficult holes",
      "To prevent players from using preferred lies",
      "To create additional penalty areas",
    ],
    correct: 0,
    rule: "Rule 2.4",
    explanation:
      "Committees commonly designate no play zones to protect areas such as environmentally sensitive habitats, young tree plantings, newly sodded areas, or areas with special landscaping. The no play zone ensures players take relief rather than walking into and playing from these protected areas.",
    tags: ["no play zone", "committee", "environmental", "course protection"],
  },

  // --- Additional Rule 2 Edge Cases ---

  {
    id: "b5_092",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A player's ball lies in the general area. An immovable obstruction (a pump house) is on their line of play but does not interfere with their stance, swing, or the ball's lie. Is the player entitled to free relief?",
    choices: [
      "No — free relief from an immovable obstruction in the general area requires physical interference with the ball, stance, or area of intended swing; line-of-play interference alone is not enough",
      "Yes — interference with the line of play always entitles the player to relief",
      "Yes — but only if the obstruction is within 20 yards of the ball",
      "No — unless the player is on the putting green",
    ],
    correct: 0,
    rule: "Rule 16.1a",
    explanation:
      "Under Rule 16.1a, interference from an immovable obstruction exists when the obstruction physically interferes with the player's ball (lies on, in, or against it), stance, or area of intended swing. Interference with the line of play alone does NOT entitle the player to relief in the general area. However, on the putting green, intervention on the line of putt IS a basis for relief.",
    tags: ["immovable obstruction", "line of play", "no relief", "general area"],
  },
  {
    id: "b5_093",
    category: "FUNDAMENTALS",
    tier: "official",
    text: "A ball lies in a penalty area that the Committee has NOT marked as either red or yellow. What color is the penalty area treated as?",
    choices: [
      "Red — when the Committee has not marked the color, the penalty area is treated as a red penalty area",
      "Yellow — the default is always yellow",
      "The player chooses the color",
      "The area is not a penalty area if it is not marked",
    ],
    correct: 0,
    rule: "Rule 2.2, Definition of Penalty Area",
    explanation:
      "Under the definition of Penalty Area, when a penalty area has not been marked as red or yellow by the Committee, it is treated as a red penalty area by default. This means the player has access to lateral relief in addition to back-on-the-line and stroke-and-distance relief.",
    tags: ["penalty area", "unmarked", "default red", "committee", "lateral relief"],
  },
];
