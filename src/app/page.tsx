"use client";

import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AuthButton from "@/components/AuthButton";

export default function LandingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/play");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#EEEEEE] border-t-[#1B5E20]" />
      </div>
    );
  }

  if (user) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        {/* Logo / Title */}
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-[#1B5E20]">
          RuleSnob
        </h1>
        <p className="mb-8 text-base leading-relaxed text-[#757575]">
          Master the Rules of Golf with spaced repetition.
          <br />
          49 scenario-based questions. Track your Rules IQ.
          <br />
          Become a Rules Official.
        </p>

        {/* Sign in */}
        <div className="flex justify-center">
          <AuthButton />
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-[#BDBDBD]">
          Based on the 2023 Rules of Golf
        </p>
      </div>
    </div>
  );
}
