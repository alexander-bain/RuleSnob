import {
  collection,
  getDocs,
  doc,
  writeBatch,
  getDoc,
  setDoc,
  query,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
  Timestamp,
  onSnapshot,
  documentId,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { getFirebaseDb } from "./firebase";
import { addDoc } from "firebase/firestore";
import { CardState, UserStats, GroupDoc, GroupMember } from "@/types";

export async function ensureUserDoc(user: User): Promise<void> {
  const db = getFirebaseDb();
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) {
    await setDoc(userRef, {
      displayName: user.displayName || "",
      email: user.email || "",
      photoURL: user.photoURL || "",
      createdAt: Timestamp.now(),
      lastActive: Timestamp.now(),
      rulesIQ: 0,
      title: "Rookie",
      totalSessions: 0,
      streak: 0,
      scenariosSeen: 0,
      groupIds: [],
    });
  }
}

export async function loadCardStates(
  uid: string
): Promise<Record<string, CardState>> {
  const db = getFirebaseDb();
  const cardStatesRef = collection(db, "users", uid, "cardStates");
  const snapshot = await getDocs(cardStatesRef);
  const states: Record<string, CardState> = {};
  snapshot.forEach((docSnap) => {
    const data = docSnap.data();
    states[docSnap.id] = {
      easeFactor: data.easeFactor,
      interval: data.interval,
      dueTime: data.dueTime?.toMillis?.() ?? data.dueTime ?? 0,
      timesSeen: data.timesSeen,
      timesCorrect: data.timesCorrect,
      lastSeen: data.lastSeen?.toMillis?.() ?? data.lastSeen ?? 0,
    };
  });
  return states;
}

export async function loadUserStats(
  uid: string
): Promise<{ totalSessions: number; streak: number; lastPlayedDate: string | null } | null> {
  const db = getFirebaseDb();
  const userRef = doc(db, "users", uid);
  const snap = await getDoc(userRef);
  if (!snap.exists()) return null;
  const data = snap.data();
  return {
    totalSessions: data.totalSessions ?? 0,
    streak: data.streak ?? 0,
    lastPlayedDate: data.lastPlayedDate ?? null,
  };
}

export async function saveSessionResults(
  uid: string,
  cardStates: Record<string, CardState>,
  changedIds: string[],
  userStats: UserStats
): Promise<void> {
  const db = getFirebaseDb();
  const batch = writeBatch(db);

  for (const id of changedIds) {
    const state = cardStates[id];
    if (!state) continue;
    const ref = doc(db, "users", uid, "cardStates", id);
    batch.set(ref, {
      easeFactor: state.easeFactor,
      interval: state.interval,
      dueTime: Timestamp.fromMillis(state.dueTime),
      timesSeen: state.timesSeen,
      timesCorrect: state.timesCorrect,
      lastSeen: Timestamp.fromMillis(state.lastSeen),
    });
  }

  const userRef = doc(db, "users", uid);
  batch.set(
    userRef,
    {
      rulesIQ: userStats.rulesIQ,
      title: userStats.title,
      totalSessions: userStats.totalSessions,
      streak: userStats.streak,
      scenariosSeen: userStats.scenariosSeen,
      lastActive: Timestamp.now(),
      lastPlayedDate: new Date().toISOString().slice(0, 10),
    },
    { merge: true }
  );

  await batch.commit();
}

// =============================================
// GROUP FUNCTIONS
// =============================================

function generateInviteCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no I/O/0/1 to avoid confusion
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export async function createGroup(
  uid: string,
  name: string
): Promise<{ groupId: string; inviteCode: string }> {
  const db = getFirebaseDb();
  const inviteCode = generateInviteCode();
  const groupRef = doc(collection(db, "groups"));
  const groupId = groupRef.id;

  await setDoc(groupRef, {
    name,
    createdBy: uid,
    inviteCode,
    memberUids: [uid],
    createdAt: Timestamp.now(),
  });

  // Add group to user's groupIds
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, {
    groupIds: arrayUnion(groupId),
  });

  return { groupId, inviteCode };
}

export async function joinGroup(
  uid: string,
  inviteCode: string
): Promise<{ groupId: string; groupName: string }> {
  const db = getFirebaseDb();
  const groupsRef = collection(db, "groups");
  const q = query(groupsRef, where("inviteCode", "==", inviteCode.toUpperCase()));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    throw new Error("Invalid invite code. Check the code and try again.");
  }

  const groupDoc = snapshot.docs[0];
  const groupId = groupDoc.id;
  const data = groupDoc.data();

  if (data.memberUids.includes(uid)) {
    throw new Error("You're already a member of this group.");
  }

  // Add user to group
  await updateDoc(doc(db, "groups", groupId), {
    memberUids: arrayUnion(uid),
  });

  // Add group to user's groupIds
  await updateDoc(doc(db, "users", uid), {
    groupIds: arrayUnion(groupId),
  });

  return { groupId, groupName: data.name };
}

export async function leaveGroup(uid: string, groupId: string): Promise<void> {
  const db = getFirebaseDb();

  await updateDoc(doc(db, "groups", groupId), {
    memberUids: arrayRemove(uid),
  });

  await updateDoc(doc(db, "users", uid), {
    groupIds: arrayRemove(groupId),
  });
}

export async function getUserGroups(
  uid: string
): Promise<Array<{ id: string } & GroupDoc>> {
  const db = getFirebaseDb();
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) return [];

  const groupIds: string[] = userSnap.data().groupIds || [];
  if (groupIds.length === 0) return [];

  const groups: Array<{ id: string } & GroupDoc> = [];
  // Firestore 'in' queries limited to 30 items
  const chunks = [];
  for (let i = 0; i < groupIds.length; i += 30) {
    chunks.push(groupIds.slice(i, i + 30));
  }

  for (const chunk of chunks) {
    const q = query(
      collection(db, "groups"),
      where(documentId(), "in", chunk)
    );
    const snap = await getDocs(q);
    snap.forEach((d) => {
      const data = d.data();
      groups.push({
        id: d.id,
        name: data.name,
        createdBy: data.createdBy,
        inviteCode: data.inviteCode,
        memberUids: data.memberUids,
        createdAt: data.createdAt?.toMillis?.() ?? 0,
      });
    });
  }

  return groups;
}

export async function getGroupMembers(
  groupId: string
): Promise<GroupMember[]> {
  const db = getFirebaseDb();
  const groupRef = doc(db, "groups", groupId);
  const groupSnap = await getDoc(groupRef);
  if (!groupSnap.exists()) return [];

  const memberUids: string[] = groupSnap.data().memberUids || [];
  if (memberUids.length === 0) return [];

  const members: GroupMember[] = [];
  const chunks = [];
  for (let i = 0; i < memberUids.length; i += 30) {
    chunks.push(memberUids.slice(i, i + 30));
  }

  for (const chunk of chunks) {
    const q = query(
      collection(db, "users"),
      where(documentId(), "in", chunk)
    );
    const snap = await getDocs(q);
    snap.forEach((d) => {
      const data = d.data();
      members.push({
        uid: d.id,
        displayName: data.displayName || "Anonymous",
        photoURL: data.photoURL || "",
        rulesIQ: data.rulesIQ || 0,
        title: data.title || "Rookie",
        totalSessions: data.totalSessions || 0,
        streak: data.streak || 0,
        scenariosSeen: data.scenariosSeen || 0,
      });
    });
  }

  // Sort by Rules IQ descending
  members.sort((a, b) => b.rulesIQ - a.rulesIQ);
  return members;
}

export function subscribeToGroupMembers(
  groupId: string,
  onUpdate: (members: GroupMember[]) => void
): () => void {
  const db = getFirebaseDb();
  const groupRef = doc(db, "groups", groupId);

  return onSnapshot(groupRef, async (groupSnap) => {
    if (!groupSnap.exists()) {
      onUpdate([]);
      return;
    }

    const memberUids: string[] = groupSnap.data().memberUids || [];
    if (memberUids.length === 0) {
      onUpdate([]);
      return;
    }

    // Fetch all member user docs
    const members: GroupMember[] = [];
    const chunks = [];
    for (let i = 0; i < memberUids.length; i += 30) {
      chunks.push(memberUids.slice(i, i + 30));
    }

    for (const chunk of chunks) {
      const q = query(
        collection(db, "users"),
        where(documentId(), "in", chunk)
      );
      const snap = await getDocs(q);
      snap.forEach((d) => {
        const data = d.data();
        members.push({
          uid: d.id,
          displayName: data.displayName || "Anonymous",
          photoURL: data.photoURL || "",
          rulesIQ: data.rulesIQ || 0,
          title: data.title || "Rookie",
          totalSessions: data.totalSessions || 0,
          streak: data.streak || 0,
          scenariosSeen: data.scenariosSeen || 0,
        });
      });
    }

    members.sort((a, b) => b.rulesIQ - a.rulesIQ);
    onUpdate(members);
  });
}

// =============================================
// SCENARIO FLAG FUNCTIONS
// =============================================

export async function flagScenario(
  uid: string,
  scenarioId: string,
  reason: "wrong_answer" | "unclear" | "outdated" | "other",
  comment?: string
): Promise<void> {
  const db = getFirebaseDb();
  await addDoc(collection(db, "flags"), {
    scenarioId,
    uid,
    reason,
    comment: comment || "",
    createdAt: Timestamp.now(),
  });
}
