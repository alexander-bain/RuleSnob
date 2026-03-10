import {
  collection,
  getDocs,
  doc,
  writeBatch,
  getDoc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { getFirebaseDb } from "./firebase";
import { CardState, UserStats } from "@/types";

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
