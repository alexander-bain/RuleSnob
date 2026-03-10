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
        <h1 className="mb-3 text-6xl font-bold tracking-tight" style={{ color: "#1B5E20" }}>
          RuleSnob
        </h1>
        
        {/* Tagline */}
        <p className="mb-3 text-sm font-semibold" style={{ color: "#2E7D32" }}>
          Master the Rules of Golf
        </p>
        
        <p className="mb-10 text-base leading-relaxed text-gray-700">
          Learn through spaced repetition with 300+ scenario-based questions. Track your Rules IQ and compete with golfers worldwide.
        </p>

        {/* Sign in Button */}
        <div className="flex justify-center">
          <AuthButton />
        </div>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-1.5 text-xs text-gray-600">
          <span className="text-lg" style={{ color: "#2E7D32" }}>✓</span>
          <span>Trusted by golfers everywhere</span>
        </div>

        {/* Footer */}
        <p className="mt-12 text-xs text-gray-500">
          Based on the 2023 Rules of Golf
        </p>
      </div>
    </div>
  );
}
