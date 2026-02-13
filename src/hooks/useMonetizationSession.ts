"use client";

import { useState, useEffect, useCallback } from "react";

const COOKIE_NAME = "slm_session";
const SESSION_TTL_SECONDS = 30 * 60; // 30 minutes in seconds
const LEGACY_STORAGE_KEY = "monetization_session"; // Old localStorage key to cleanup

export interface MonetizationSession {
  sessionId: string;
  code: string;
  token: string;
  step: number;
  maxSteps: number;
  adLevel: number;
  minWaitSeconds: number;
}

/**
 * Cleanup legacy localStorage (migration from localStorage to cookie)
 */
function cleanupLegacyStorage(): void {
  if (typeof window === "undefined") return;

  if (localStorage.getItem(LEGACY_STORAGE_KEY)) {
    console.log("🧹 Cleaning up legacy localStorage data...");
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  }
}

/**
 * Get session ID from URL init param (for first load from shortlink)
 */
export function getSessionIdFromUrl(): string | null {
  if (typeof window === "undefined") return null;

  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("init");
}

/**
 * Get session ID from cookie
 */
export function getSessionIdFromCookie(): string | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split("; ");
  const sessionCookie = cookies.find((row) =>
    row.startsWith(`${COOKIE_NAME}=`),
  );
  if (!sessionCookie) return null;

  return decodeURIComponent(sessionCookie.split("=")[1]) || null;
}

/**
 * Set session cookie (client-side)
 */
export function setSessionCookie(sessionId: string): void {
  if (typeof document === "undefined") return;

  // Set cookie with max-age (30 minutes)
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(sessionId)}; max-age=${SESSION_TTL_SECONDS}; path=/; SameSite=Lax`;
}

/**
 * Clean URL by removing init param (for clean URL appearance)
 */
export function cleanUrlFromInitParam(): void {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  if (url.searchParams.has("init")) {
    url.searchParams.delete("init");
    // Use replaceState to clean URL without reload
    window.history.replaceState({}, "", url.pathname);
  }
}

/**
 * Clear session cookie
 */
export function clearSessionCookie(): void {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_NAME}=; max-age=0; path=/;`;
}

/**
 * Get random article slug for navigation
 */
export function getRandomArticleSlug(): string {
  const articleSlugs = [
    "ai-machine-learning-tren-2025",
    "cara-memilih-laptop-programmer",
    "5g-internet-of-things-konektivitas",
    "cybersecurity-pemula-lindungi-data",
    "cloud-computing-aws-azure-gcp",
    "framework-web-react-vue-angular",
    "optimasi-website-loading-cepat",
    "ai-kehidupan-sehari-hari",
    "investasi-saham-pemula",
    "panduan-cryptocurrency-bitcoin",
    "financial-planning-era-digital",
    "passive-income-5-cara",
    "tips-menabung-investasi-milenial",
    "fintech-revolution-perbankan",
    "blockchain-masa-depan-keuangan",
  ];
  return articleSlugs[Math.floor(Math.random() * articleSlugs.length)];
}

/**
 * Hook to use monetization session reactively
 * Priority: 1. URL init param (new session) → 2. Cookie (ongoing session)
 */
export function useMonetizationSession() {
  const [session, setSession] = useState<MonetizationSession | null>(null);
  const [isMonetized, setIsMonetized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch session data from API using session ID
  const fetchSessionData = useCallback(async (sessionId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/links/session/${sessionId}`,
      );

      if (!response.ok) {
        console.warn("Session not found or expired");
        return null;
      }

      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error("Error fetching session:", error);
      return null;
    }
  }, []);

  useEffect(() => {
    const initSession = async () => {
      setIsLoading(true);

      // Cleanup legacy localStorage (migration to cookie)
      cleanupLegacyStorage();

      // 1. Check URL for init param (new session from shortlink redirect)
      const initSessionId = getSessionIdFromUrl();
      if (initSessionId) {
        console.log("📦 Found init session ID from URL:", initSessionId);

        const apiData = await fetchSessionData(initSessionId);

        if (apiData) {
          const newSession: MonetizationSession = {
            sessionId: initSessionId,
            code: apiData.code,
            token: apiData.token,
            step: apiData.step,
            maxSteps: apiData.max_steps,
            adLevel: apiData.ad_level,
            minWaitSeconds: apiData.min_wait_seconds ?? 8,
          };

          // Store session ID to cookie (30 min auto-expiry)
          setSessionCookie(initSessionId);
          setSession(newSession);
          setIsMonetized(true);

          // Clean URL (remove ?init=xxx)
          cleanUrlFromInitParam();

          setIsLoading(false);
          return;
        }
      }

      // 2. Check cookie for existing session
      const cookieSessionId = getSessionIdFromCookie();
      if (cookieSessionId) {
        console.log("🍪 Found session ID in cookie:", cookieSessionId);

        const apiData = await fetchSessionData(cookieSessionId);

        if (apiData) {
          const existingSession: MonetizationSession = {
            sessionId: cookieSessionId,
            code: apiData.code,
            token: apiData.token,
            step: apiData.step,
            maxSteps: apiData.max_steps,
            adLevel: apiData.ad_level,
            minWaitSeconds: apiData.min_wait_seconds ?? 8,
          };

          setSession(existingSession);
          setIsMonetized(true);
          setIsLoading(false);
          return;
        } else {
          // Session expired in backend, clear cookie
          console.log("🗑️ Session expired, clearing cookie");
          clearSessionCookie();
        }
      }

      // 3. No valid session
      setSession(null);
      setIsMonetized(false);
      setIsLoading(false);
    };

    initSession();
  }, [fetchSessionData]);

  return {
    session,
    isMonetized,
    isLoading,
    clearSession: clearSessionCookie,
    getRandomSlug: getRandomArticleSlug,
  };
}
