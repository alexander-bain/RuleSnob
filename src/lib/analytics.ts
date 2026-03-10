/**
 * RuleSnob Analytics — A comically exhaustive GA4 event taxonomy.
 *
 * Event naming convention: {domain}_{action}
 * All events carry structured parameters for maximum slice-and-dice potential.
 *
 * Dimensions tracked across every event:
 *   - user_rules_iq: current Rules IQ score
 *   - user_title: current title (Rookie → Rules Official)
 *   - user_total_sessions: lifetime session count
 *   - user_streak: current day streak
 *   - session_tier: active tier filter
 *   - session_length: 9 or 18
 */

// Typed wrapper for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(...args);
  }
}

// =============================================
// USER CONTEXT (set once, sent with every event)
// =============================================

export function setUserProperties(props: {
  rules_iq: number;
  title: string;
  total_sessions: number;
  streak: number;
  scenarios_seen: number;
  total_scenarios: number;
  coverage_pct: number;
  group_count: number;
}) {
  gtag("set", "user_properties", {
    rules_iq: props.rules_iq,
    user_title: props.title,
    total_sessions: props.total_sessions,
    streak: props.streak,
    scenarios_seen: props.scenarios_seen,
    total_scenarios: props.total_scenarios,
    coverage_pct: props.coverage_pct,
    group_count: props.group_count,
  });
}

// =============================================
// AUTH EVENTS
// =============================================

export function trackSignInAttempt() {
  gtag("event", "auth_sign_in_attempt", {
    method: "google",
  });
}

export function trackSignInSuccess(uid: string) {
  gtag("event", "auth_sign_in_success", {
    method: "google",
    user_id_hash: uid.slice(0, 8), // partial, not PII
  });
}

export function trackSignInError(errorCode: string) {
  gtag("event", "auth_sign_in_error", {
    error_code: errorCode,
    method: "google",
  });
}

export function trackSignOut() {
  gtag("event", "auth_sign_out");
}

// =============================================
// SESSION LIFECYCLE EVENTS
// =============================================

export function trackSessionStart(params: {
  tier: string;
  session_length: 9 | 18;
  queue_wrong_count: number;
  queue_due_count: number;
  queue_unseen_count: number;
  queue_ai_count: number;
  queue_total: number;
  total_scenarios_seen: number;
  total_scenarios_available: number;
  coverage_pct: number;
  rules_iq: number;
}) {
  gtag("event", "session_start_game", {
    tier: params.tier,
    session_length: params.session_length,
    queue_wrong_count: params.queue_wrong_count,
    queue_due_count: params.queue_due_count,
    queue_unseen_count: params.queue_unseen_count,
    queue_ai_count: params.queue_ai_count,
    queue_total: params.queue_total,
    total_scenarios_seen: params.total_scenarios_seen,
    total_scenarios_available: params.total_scenarios_available,
    coverage_pct: params.coverage_pct,
    rules_iq_at_start: params.rules_iq,
    time_of_day: new Date().getHours(),
    day_of_week: new Date().getDay(),
  });
}

export function trackSessionComplete(params: {
  tier: string;
  session_length: 9 | 18;
  scenarios_answered: number;
  correct_count: number;
  incorrect_count: number;
  accuracy_pct: number;
  duration_seconds: number;
  avg_time_per_scenario_seconds: number;
  rules_iq_before: number;
  rules_iq_after: number;
  rules_iq_delta: number;
  title_before: string;
  title_after: string;
  title_changed: boolean;
  guesses_marked: number;
  flags_submitted: number;
  categories_seen: string;
  weakest_category: string;
  strongest_category: string;
  perfect_session: boolean;
  zero_session: boolean;
  streak_after: number;
  ai_scenarios_count: number;
}) {
  gtag("event", "session_complete", {
    ...params,
    time_of_day: new Date().getHours(),
    day_of_week: new Date().getDay(),
  });
}

export function trackSessionAbandon(params: {
  tier: string;
  session_length: 9 | 18;
  scenarios_completed: number;
  scenarios_total: number;
  progress_pct: number;
  duration_seconds: number;
  last_scenario_category: string;
  last_scenario_correct: boolean | null;
}) {
  gtag("event", "session_abandon", params);
}

// =============================================
// SCENARIO-LEVEL EVENTS
// =============================================

export function trackScenarioPresented(params: {
  scenario_id: string;
  category: string;
  tier: string;
  position_in_queue: number;
  queue_total: number;
  is_ai_generated: boolean;
  is_repeat: boolean;
  times_previously_seen: number;
  previous_accuracy_on_this: number | null;
  ease_factor: number;
  interval_days: number;
}) {
  gtag("event", "scenario_presented", params);
}

export function trackScenarioAnswered(params: {
  scenario_id: string;
  category: string;
  tier: string;
  correct: boolean;
  time_to_answer_seconds: number;
  choice_selected: number;
  correct_choice: number;
  choice_position_bias: string; // "A" | "B" | "C" | "D"
  is_ai_generated: boolean;
  is_repeat: boolean;
  times_seen_including_this: number;
  position_in_queue: number;
  running_session_accuracy_pct: number;
  ease_factor_before: number;
  ease_factor_after: number;
  interval_before: number;
  interval_after: number;
  rule_cited: string;
}) {
  gtag("event", "scenario_answered", params);
}

export function trackGuessMarked(params: {
  scenario_id: string;
  category: string;
  tier: string;
  time_on_feedback_screen_seconds: number;
}) {
  gtag("event", "guess_marked", params);
}

export function trackScenarioFlagged(params: {
  scenario_id: string;
  category: string;
  tier: string;
  flag_reason: string;
  is_ai_generated: boolean;
  was_correct: boolean;
}) {
  gtag("event", "scenario_flagged", params);
}

// =============================================
// FEEDBACK SCREEN ENGAGEMENT
// =============================================

export function trackFeedbackScreenView(params: {
  scenario_id: string;
  correct: boolean;
  category: string;
}) {
  gtag("event", "feedback_screen_view", params);
}

export function trackFeedbackScreenDwell(params: {
  scenario_id: string;
  dwell_time_seconds: number;
  correct: boolean;
  category: string;
  read_explanation: boolean; // dwell > 3 seconds = "read"
}) {
  gtag("event", "feedback_screen_dwell", params);
}

// =============================================
// NAVIGATION & SCREEN EVENTS
// =============================================

export function trackScreenTransition(params: {
  from_screen: string;
  to_screen: string;
}) {
  gtag("event", "screen_transition", params);
}

export function trackTierChanged(params: {
  old_tier: string;
  new_tier: string;
}) {
  gtag("event", "tier_changed", params);
}

export function trackSessionLengthChanged(params: {
  old_length: number;
  new_length: number;
}) {
  gtag("event", "session_length_changed", params);
}

// =============================================
// GROUP & SOCIAL EVENTS
// =============================================

export function trackGroupCreated(params: {
  group_name_length: number;
  total_groups_after: number;
}) {
  gtag("event", "group_created", params);
}

export function trackGroupJoined(params: {
  group_member_count: number;
  total_groups_after: number;
}) {
  gtag("event", "group_joined", params);
}

export function trackGroupLeft(params: {
  group_member_count: number;
  total_groups_after: number;
}) {
  gtag("event", "group_left", params);
}

export function trackInviteCodeCopied(params: {
  group_member_count: number;
}) {
  gtag("event", "invite_code_copied", params);
}

export function trackLeaderboardViewed(params: {
  group_member_count: number;
  user_rank: number;
  user_rules_iq: number;
  leader_rules_iq: number;
  iq_gap_to_leader: number;
}) {
  gtag("event", "leaderboard_viewed", params);
}

// =============================================
// MASTERY & PROGRESSION MILESTONES
// =============================================

export function trackRulesIQMilestone(params: {
  milestone: number; // 50, 100, 150, 200
  rules_iq: number;
  sessions_to_reach: number;
  scenarios_seen: number;
}) {
  gtag("event", "rules_iq_milestone", params);
}

export function trackTitleChange(params: {
  old_title: string;
  new_title: string;
  rules_iq: number;
  sessions_played: number;
}) {
  gtag("event", "title_change", params);
}

export function trackStreakMilestone(params: {
  streak_days: number;
  rules_iq: number;
}) {
  gtag("event", "streak_milestone", {
    ...params,
    milestone_type:
      params.streak_days === 3
        ? "three_day"
        : params.streak_days === 7
          ? "week"
          : params.streak_days === 14
            ? "two_week"
            : params.streak_days === 30
              ? "month"
              : params.streak_days === 100
                ? "century"
                : `day_${params.streak_days}`,
  });
}

export function trackCategoryMastered(params: {
  category: string;
  mastery_pct: number;
  scenarios_seen_in_category: number;
  total_in_category: number;
}) {
  gtag("event", "category_mastered", params);
}

export function trackPerfectSession(params: {
  tier: string;
  session_length: number;
  scenarios_count: number;
  duration_seconds: number;
}) {
  gtag("event", "perfect_session", params);
}

// =============================================
// AI SCENARIO EVENTS
// =============================================

export function trackAIGenerationStarted(params: {
  scenarios_requested: number;
  tier: string;
  categories: string;
  reason: string; // "all_curated_seen" | "manual"
}) {
  gtag("event", "ai_generation_started", params);
}

export function trackAIGenerationComplete(params: {
  scenarios_requested: number;
  scenarios_received: number;
  scenarios_failed: number;
  duration_ms: number;
  avg_latency_ms: number;
}) {
  gtag("event", "ai_generation_complete", params);
}

// =============================================
// APP PERFORMANCE EVENTS
// =============================================

export function trackAppLoaded(params: {
  load_time_ms: number;
  firestore_hydration_ms: number;
  scenarios_loaded: number;
  card_states_loaded: number;
  returning_user: boolean;
}) {
  gtag("event", "app_loaded", params);
}

export function trackError(params: {
  error_type: string;
  error_message: string;
  context: string;
}) {
  gtag("event", "app_error", params);
}

// =============================================
// ENGAGEMENT HEURISTICS
// =============================================

export function trackReturnVisit(params: {
  days_since_last_visit: number;
  rules_iq: number;
  streak_before: number;
  streak_broken: boolean;
}) {
  gtag("event", "return_visit", params);
}

export function trackFirstEverSession() {
  gtag("event", "first_ever_session", {
    timestamp: new Date().toISOString(),
  });
}

export function trackScenarioVelocity(params: {
  scenarios_per_minute: number;
  session_tier: string;
  session_length: number;
}) {
  gtag("event", "scenario_velocity", params);
}
