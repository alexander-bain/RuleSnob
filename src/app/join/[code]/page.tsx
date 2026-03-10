"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import {
  getGroupByInviteCode,
  joinGroup,
  ensureUserDoc,
  updateDisplayName,
  getUserDisplayName,
} from "@/lib/firestore";

export default function JoinPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = use(params);
  const { user, loading: authLoading, signIn } = useAuth();
  const router = useRouter();

  const [groupInfo, setGroupInfo] = useState<{
    groupId: string;
    name: string;
    memberCount: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [joining, setJoining] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [joined, setJoined] = useState(false);
  const [needsName, setNeedsName] = useState(false);
  const [displayName, setDisplayName] = useState("");

  // Look up the group by invite code
  useEffect(() => {
    async function lookupGroup() {
      try {
        const info = await getGroupByInviteCode(code);
        setGroupInfo(info);
      } catch (err) {
        console.error("Failed to look up group:", err);
      } finally {
        setLoading(false);
      }
    }
    lookupGroup();
  }, [code]);

  // Once signed in, check if user has a display name
  useEffect(() => {
    if (!user || authLoading) return;
    async function checkName() {
      await ensureUserDoc(user!);
      const name = await getUserDisplayName(user!.uid);
      if (!name && !user!.displayName) {
        setNeedsName(true);
      } else {
        setDisplayName(name || user!.displayName || "");
      }
    }
    checkName();
  }, [user, authLoading]);

  const handleSetName = async () => {
    if (!user || !displayName.trim()) return;
    await updateDisplayName(user.uid, displayName.trim());
    setNeedsName(false);
  };

  const handleJoin = async () => {
    if (!user || !groupInfo) return;
    setJoining(true);
    setError(null);
    try {
      await joinGroup(user.uid, code);
      setJoined(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to join group"
      );
    } finally {
      setJoining(false);
    }
  };

  // Loading states
  if (loading || authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#EEEEEE] border-t-[#1B5E20]" />
      </div>
    );
  }

  // Invalid invite code
  if (!groupInfo) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
        <div className="mx-auto w-full max-w-[400px] px-5">
          <div className="rounded-2xl border border-[#EEEEEE] bg-white p-8 text-center shadow-sm">
            <div className="mb-3 text-4xl">&#10060;</div>
            <div className="mb-2 text-lg font-bold text-[#2D2D2D]">
              Invalid Invite Link
            </div>
            <p className="mb-6 text-sm text-[#757575]">
              This invite code doesn&apos;t match any group. Check with the
              person who sent you the link.
            </p>
            <button
              onClick={() => router.push("/")}
              className="rounded-xl bg-[#1B5E20] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(27,94,32,0.3)]"
            >
              Go to RuleSnob
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Successfully joined
  if (joined) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
        <div className="mx-auto w-full max-w-[400px] px-5">
          <div className="rounded-2xl border border-[#EEEEEE] bg-white p-8 text-center shadow-sm">
            <div className="mb-3 text-4xl">&#9971;</div>
            <div className="mb-2 text-lg font-bold text-[#2D2D2D]">
              You&apos;re in!
            </div>
            <p className="mb-6 text-sm text-[#757575]">
              You&apos;ve joined <strong>{groupInfo.name}</strong>. Play a
              session to get on the leaderboard.
            </p>
            <button
              onClick={() => router.push("/play")}
              className="w-full rounded-xl bg-[#1B5E20] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(27,94,32,0.3)]"
            >
              Start Playing
            </button>
            <button
              onClick={() => router.push("/leaderboard")}
              className="mt-3 w-full rounded-xl border-[1.5px] border-[#EEEEEE] bg-white px-6 py-3 text-sm font-semibold text-[#2D2D2D]"
            >
              View Leaderboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Not signed in — show sign-in prompt
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
        <div className="mx-auto w-full max-w-[400px] px-5">
          <div className="rounded-2xl border border-[#EEEEEE] bg-white p-8 text-center shadow-sm">
            <div className="mb-1 text-sm font-semibold uppercase tracking-[2px] text-[#2E7D32]">
              RuleSnob
            </div>
            <div className="mb-6 text-4xl">&#9971;</div>
            <div className="mb-2 text-lg font-bold text-[#2D2D2D]">
              Join &ldquo;{groupInfo.name}&rdquo;
            </div>
            <p className="mb-2 text-sm text-[#757575]">
              {groupInfo.memberCount} member
              {groupInfo.memberCount !== 1 ? "s" : ""} already playing
            </p>
            <p className="mb-6 text-sm text-[#757575]">
              Sign in to join the group and compete on the leaderboard.
            </p>
            <button
              onClick={signIn}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-7 py-3 text-base font-semibold text-gray-700 shadow-md transition-all hover:border-gray-300 hover:shadow-lg active:scale-[0.98]"
            >
              <svg width="20" height="20" viewBox="0 0 48 48">
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Signed in but needs a display name
  if (needsName) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
        <div className="mx-auto w-full max-w-[400px] px-5">
          <div className="rounded-2xl border border-[#EEEEEE] bg-white p-8 text-center shadow-sm">
            <div className="mb-3 text-4xl">&#9971;</div>
            <div className="mb-2 text-lg font-bold text-[#2D2D2D]">
              What should we call you?
            </div>
            <p className="mb-5 text-sm text-[#757575]">
              This is how you&apos;ll appear on the leaderboard.
            </p>
            <input
              type="text"
              placeholder="Your name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSetName()}
              className="mb-4 w-full rounded-lg border border-[#EEEEEE] bg-[#FAF8F5] px-4 py-3 text-center text-[15px] text-[#2D2D2D] outline-none focus:border-[#2E7D32]"
              autoFocus
            />
            <button
              onClick={handleSetName}
              disabled={!displayName.trim()}
              className="w-full rounded-xl bg-[#1B5E20] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(27,94,32,0.3)] disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Signed in, has name — show join confirmation
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="mx-auto w-full max-w-[400px] px-5">
        <div className="rounded-2xl border border-[#EEEEEE] bg-white p-8 text-center shadow-sm">
          <div className="mb-1 text-sm font-semibold uppercase tracking-[2px] text-[#2E7D32]">
            RuleSnob
          </div>
          <div className="mb-6 text-4xl">&#9971;</div>
          <div className="mb-2 text-lg font-bold text-[#2D2D2D]">
            Join &ldquo;{groupInfo.name}&rdquo;
          </div>
          <p className="mb-6 text-sm text-[#757575]">
            {groupInfo.memberCount} member
            {groupInfo.memberCount !== 1 ? "s" : ""} already playing
          </p>

          {error && (
            <div className="mb-4 rounded-xl bg-[#FFEBEE] px-4 py-3 text-sm font-medium text-[#C62828]">
              {error}
            </div>
          )}

          <button
            onClick={handleJoin}
            disabled={joining}
            className="w-full rounded-xl bg-[#1B5E20] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(27,94,32,0.3)] disabled:opacity-60"
          >
            {joining ? "Joining..." : `Join as ${displayName}`}
          </button>
          <button
            onClick={() => router.push("/")}
            className="mt-3 w-full rounded-xl border-[1.5px] border-[#EEEEEE] bg-white px-6 py-3 text-sm font-semibold text-[#757575]"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
