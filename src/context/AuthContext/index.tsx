"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

import { initFirebase } from "@/firebase/firebaseApp";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { LoginIndex } from "@/screens";

const AuthContext = createContext({});

export function AuthProvider({ children }: any) {
  const app = initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const router = useRouter();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      router.push("/home");
    }
  };

  const value = { user, signInWithGoogle };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
