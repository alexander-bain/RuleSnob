"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { getFirebaseAuth } from "./firebase";
import {
  trackSignInAttempt,
  trackSignInSuccess,
  trackSignInError,
  trackSignOut,
} from "./analytics";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const firebaseAuth = getFirebaseAuth();
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    trackSignInAttempt();
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(getFirebaseAuth(), provider);
      trackSignInSuccess(result.user.uid);
    } catch (error: unknown) {
      const firebaseError = error as { code?: string; message?: string };
      trackSignInError(firebaseError.code || "unknown");

      // Show user-friendly error
      if (firebaseError.code === "auth/unauthorized-domain") {
        const currentDomain = window.location.hostname;
        alert(`Auth domain not authorized.\n\nPlease add this domain to Firebase:\n${currentDomain}\n\nGo to Firebase Console → Authentication → Settings → Authorized domains`);
      } else if (firebaseError.code === "auth/popup-blocked") {
        alert("Popup was blocked. Please allow popups for this site.");
      } else {
        alert(`Sign-in failed: ${firebaseError.message || "Unknown error"}`);
      }
    }
  };

  const handleSignOut = async () => {
    trackSignOut();
    await getFirebaseAuth().signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn: handleSignIn,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
