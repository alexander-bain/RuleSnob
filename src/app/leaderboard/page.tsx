"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  getUserGroups,
  createGroup,
  joinGroup,
  leaveGroup,
  subscribeToGroupMembers,
} from "@/lib/firestore";
import { GroupDoc, GroupMember } from "@/types";
import { getTitle, getTitleColor } from "@/lib/scoring";
import {
  trackGroupCreated,
  trackGroupJoined,
  trackGroupLeft,
  trackInviteCodeCopied,
  trackLeaderboardViewed,
  trackScreenTransition,
} from "@/lib/analytics";

type GroupWithId = { id: string } & GroupDoc;

function LeaderboardContent() {
  const { user } = useAuth();
  const router = useRouter();
  const [groups, setGroups] = useState<GroupWithId[]>([]);
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
  const [members, setMembers] = useState<GroupMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showInviteCode, setShowInviteCode] = useState(false);

  const loadGroups = useCallback(async () => {
    if (!user) return;
    try {
      const userGroups = await getUserGroups(user.uid);
      setGroups(userGroups);
      if (userGroups.length > 0 && !selectedGroupId) {
        setSelectedGroupId(userGroups[0].id);
      }
    } catch (err) {
      console.error("Failed to load groups:", err);
    } finally {
      setLoading(false);
    }
  }, [user, selectedGroupId]);

  useEffect(() => {
    loadGroups();
  }, [loadGroups]);

  // Subscribe to real-time leaderboard updates
  useEffect(() => {
    if (!selectedGroupId) return;
    const unsubscribe = subscribeToGroupMembers(selectedGroupId, (updated) => {
      setMembers(updated);
      // Track leaderboard view when members first load
      if (user && updated.length > 0) {
        const currentUser = updated.find((m) => m.uid === user.uid);
        const leader = updated[0];
        if (currentUser && leader) {
          const userRank = updated.findIndex((m) => m.uid === user.uid) + 1;
          trackLeaderboardViewed({
            group_member_count: updated.length,
            user_rank: userRank,
            user_rules_iq: currentUser.rulesIQ,
            leader_rules_iq: leader.rulesIQ,
            iq_gap_to_leader: leader.rulesIQ - currentUser.rulesIQ,
          });
        }
      }
    });
    return unsubscribe;
  }, [selectedGroupId, user]);

  const handleCreateGroup = async () => {
    if (!user || !newGroupName.trim()) return;
    setError(null);
    try {
      const { groupId, inviteCode } = await createGroup(
        user.uid,
        newGroupName.trim()
      );
      setNewGroupName("");
      setShowCreate(false);
      setSuccessMessage(`Group created! Invite code: ${inviteCode}`);
      setSelectedGroupId(groupId);
      await loadGroups();
      trackGroupCreated({
        group_name_length: newGroupName.trim().length,
        total_groups_after: groups.length + 1,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create group");
    }
  };

  const handleJoinGroup = async () => {
    if (!user || !joinCode.trim()) return;
    setError(null);
    try {
      const { groupName, memberCount } = await joinGroup(user.uid, joinCode.trim());
      setJoinCode("");
      setShowJoin(false);
      setSuccessMessage(`Joined "${groupName}"!`);
      await loadGroups();
      trackGroupJoined({
        group_member_count: memberCount,
        total_groups_after: groups.length + 1,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to join group");
    }
  };

  const handleLeaveGroup = async (groupId: string) => {
    if (!user) return;
    if (!confirm("Leave this group?")) return;
    try {
      const leavingGroup = groups.find((g) => g.id === groupId);
      await leaveGroup(user.uid, groupId);
      if (selectedGroupId === groupId) {
        setSelectedGroupId(null);
        setMembers([]);
      }
      await loadGroups();
      trackGroupLeft({
        group_member_count: leavingGroup?.memberUids.length ?? 0,
        total_groups_after: groups.length - 1,
      });
    } catch (err) {
      console.error("Failed to leave group:", err);
    }
  };

  const copyInviteCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setSuccessMessage("Invite code copied!");
    setTimeout(() => setSuccessMessage(null), 2000);
    if (selectedGroup) {
      trackInviteCodeCopied({
        group_member_count: selectedGroup.memberUids.length,
      });
    }
  };

  const selectedGroup = groups.find((g) => g.id === selectedGroupId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] to-[#F0EDE8]">
      <div className="mx-auto max-w-[520px] px-5 py-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 pt-8">
          <button
            onClick={() => {
              trackScreenTransition({ from_screen: "leaderboard", to_screen: "play" });
              router.push("/play");
            }}
            className="text-sm font-medium text-[#757575] hover:text-[#2D2D2D]"
          >
            &larr; Back
          </button>
          <div className="text-sm font-semibold uppercase tracking-[2px] text-[#2E7D32]">
            Leaderboard
          </div>
          <div className="w-14" />
        </div>

        {/* Success/Error Messages */}
        {successMessage && (
          <div className="mb-4 rounded-xl bg-[#E8F5E9] px-4 py-3 text-sm font-medium text-[#2E7D32]">
            {successMessage}
          </div>
        )}
        {error && (
          <div className="mb-4 rounded-xl bg-[#FFEBEE] px-4 py-3 text-sm font-medium text-[#C62828]">
            {error}
          </div>
        )}

        {/* Group Actions */}
        <div className="mb-5 flex gap-2">
          <button
            onClick={() => {
              setShowCreate(true);
              setShowJoin(false);
              setError(null);
            }}
            className="flex-1 rounded-xl bg-[#1B5E20] px-4 py-3 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(27,94,32,0.3)]"
          >
            Create Group
          </button>
          <button
            onClick={() => {
              setShowJoin(true);
              setShowCreate(false);
              setError(null);
            }}
            className="flex-1 rounded-xl border-[1.5px] border-[#1B5E20] bg-white px-4 py-3 text-sm font-semibold text-[#1B5E20]"
          >
            Join Group
          </button>
        </div>

        {/* Create Group Form */}
        {showCreate && (
          <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white p-5 shadow-sm">
            <div className="mb-3 text-[13px] font-semibold uppercase tracking-[1px] text-[#757575]">
              New Group
            </div>
            <input
              type="text"
              placeholder='e.g., "Sunday Foursome"'
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleCreateGroup()}
              className="mb-3 w-full rounded-lg border border-[#EEEEEE] bg-[#FAF8F5] px-4 py-3 text-[15px] text-[#2D2D2D] outline-none focus:border-[#2E7D32]"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={() => setShowCreate(false)}
                className="flex-1 rounded-lg border border-[#EEEEEE] bg-white px-3 py-2.5 text-sm font-medium text-[#757575]"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateGroup}
                disabled={!newGroupName.trim()}
                className="flex-1 rounded-lg bg-[#1B5E20] px-3 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
              >
                Create
              </button>
            </div>
          </div>
        )}

        {/* Join Group Form */}
        {showJoin && (
          <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white p-5 shadow-sm">
            <div className="mb-3 text-[13px] font-semibold uppercase tracking-[1px] text-[#757575]">
              Enter Invite Code
            </div>
            <input
              type="text"
              placeholder="e.g., A3X7K2"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && handleJoinGroup()}
              maxLength={6}
              className="mb-3 w-full rounded-lg border border-[#EEEEEE] bg-[#FAF8F5] px-4 py-3 text-center text-xl font-bold tracking-[4px] text-[#2D2D2D] outline-none focus:border-[#2E7D32]"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                onClick={() => setShowJoin(false)}
                className="flex-1 rounded-lg border border-[#EEEEEE] bg-white px-3 py-2.5 text-sm font-medium text-[#757575]"
              >
                Cancel
              </button>
              <button
                onClick={handleJoinGroup}
                disabled={joinCode.length < 6}
                className="flex-1 rounded-lg bg-[#1B5E20] px-3 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
              >
                Join
              </button>
            </div>
          </div>
        )}

        {/* Group Tabs */}
        {groups.length > 0 && (
          <div className="mb-5 rounded-2xl border border-[#EEEEEE] bg-white shadow-sm">
            <div className="flex overflow-x-auto border-b border-[#EEEEEE]">
              {groups.map((group) => (
                <button
                  key={group.id}
                  onClick={() => setSelectedGroupId(group.id)}
                  className="shrink-0 px-4 py-3 text-sm font-medium"
                  style={{
                    color:
                      selectedGroupId === group.id ? "#1B5E20" : "#757575",
                    borderBottom:
                      selectedGroupId === group.id
                        ? "2px solid #1B5E20"
                        : "2px solid transparent",
                  }}
                >
                  {group.name}
                </button>
              ))}
            </div>

            {/* Group Info Bar */}
            {selectedGroup && (
              <div className="flex items-center justify-between border-b border-[#EEEEEE] px-4 py-2.5">
                <span className="text-xs text-[#757575]">
                  {selectedGroup.memberUids.length} member
                  {selectedGroup.memberUids.length !== 1 ? "s" : ""}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setShowInviteCode(!showInviteCode);
                    }}
                    className="text-xs font-medium text-[#2E7D32]"
                  >
                    {showInviteCode ? "Hide Code" : "Invite"}
                  </button>
                  <span className="text-[#EEEEEE]">|</span>
                  <button
                    onClick={() => handleLeaveGroup(selectedGroup.id)}
                    className="text-xs font-medium text-[#C62828]"
                  >
                    Leave
                  </button>
                </div>
              </div>
            )}

            {/* Invite Code Display */}
            {showInviteCode && selectedGroup && (
              <div className="flex items-center justify-between border-b border-[#EEEEEE] bg-[#E8F5E9] px-4 py-3">
                <div>
                  <div className="text-xs text-[#757575]">Invite code:</div>
                  <div className="text-lg font-bold tracking-[3px] text-[#1B5E20]">
                    {selectedGroup.inviteCode}
                  </div>
                </div>
                <button
                  onClick={() =>
                    copyInviteCode(selectedGroup.inviteCode)
                  }
                  className="rounded-lg bg-[#1B5E20] px-3 py-1.5 text-xs font-semibold text-white"
                >
                  Copy
                </button>
              </div>
            )}

            {/* Leaderboard Table */}
            <div className="divide-y divide-[#EEEEEE]">
              {members.map((member, index) => {
                const isCurrentUser = member.uid === user?.uid;
                const rankColors = ["#D4A76A", "#BDBDBD", "#CD7F32"];
                const title = getTitle(member.rulesIQ);
                const titleColor = getTitleColor(member.rulesIQ);

                return (
                  <div
                    key={member.uid}
                    className="flex items-center gap-3 px-4 py-3"
                    style={{
                      backgroundColor: isCurrentUser
                        ? "#E8F5E9"
                        : "transparent",
                    }}
                  >
                    {/* Rank */}
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                      style={{
                        backgroundColor:
                          index < 3 ? `${rankColors[index]}20` : "#F5F5F5",
                        color: index < 3 ? rankColors[index] : "#757575",
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* Avatar */}
                    {member.photoURL ? (
                      <img
                        src={member.photoURL}
                        alt=""
                        className="h-10 w-10 shrink-0 rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E8F5E9] text-sm font-bold text-[#2E7D32]">
                        {member.displayName.charAt(0).toUpperCase()}
                      </div>
                    )}

                    {/* Name & Title */}
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold text-[#2D2D2D]">
                        {member.displayName}
                        {isCurrentUser && (
                          <span className="ml-1 text-xs font-normal text-[#757575]">
                            (you)
                          </span>
                        )}
                      </div>
                      <div
                        className="text-xs font-medium"
                        style={{ color: titleColor }}
                      >
                        {title}
                      </div>
                    </div>

                    {/* Rules IQ Score */}
                    <div className="shrink-0 text-right">
                      <div className="text-lg font-bold text-[#1B5E20]">
                        {member.rulesIQ}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.5px] text-[#757575]">
                        Rules IQ
                      </div>
                    </div>
                  </div>
                );
              })}

              {members.length === 0 && !loading && (
                <div className="px-4 py-8 text-center text-sm text-[#757575]">
                  No members yet. Share the invite code!
                </div>
              )}
            </div>
          </div>
        )}

        {/* Empty State */}
        {groups.length === 0 && !loading && !showCreate && !showJoin && (
          <div className="rounded-2xl border border-[#EEEEEE] bg-white p-8 text-center shadow-sm">
            <div className="mb-3 text-4xl">&#9971;</div>
            <div className="mb-2 text-base font-semibold text-[#2D2D2D]">
              No groups yet
            </div>
            <div className="text-sm leading-relaxed text-[#757575]">
              Create a group and invite your golf buddies to compete on the
              leaderboard.
            </div>
          </div>
        )}

        {loading && (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#EEEEEE] border-t-[#1B5E20]" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function LeaderboardPage() {
  return (
    <ProtectedRoute>
      <LeaderboardContent />
    </ProtectedRoute>
  );
}
