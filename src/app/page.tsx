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
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-dark-green">
          RuleSnob
        </h1>
        
        {/* Tagline */}
        <p className="mb-2 text-sm font-semibold text-golf-green">
          Master the Rules of Golf
        </p>
        
        <p className="mb-10 text-base leading-relaxed text-pencil">
          Learn through spaced repetition with 300+ scenario-based questions. Track your Rules IQ and compete with golfers worldwide.
        </p>

        {/* Sign in Button */}
        <div className="flex justify-center">
          <AuthButton />
        </div>

        {/* Social proof or CTA */}
        <div className="mt-10 flex items-center justify-center gap-1 text-xs text-textMuted">
          <span>✓</span>
          <span>Trusted by golfers everywhere</span>
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-textMuted">
          Based on the 2023 Rules of Golf
        </p>
      </div>
    </div>
  );
}
