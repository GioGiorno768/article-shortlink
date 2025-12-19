// src/hooks/useSession.ts
"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export interface SessionData {
  code: string;
  token: string;
  step: number;
  max_steps: number;
  ad_level: number;
  is_guest: boolean;
}

interface UseSessionResult {
  sessionId: string | null;
  sessionData: SessionData | null;
  isLoading: boolean;
  error: string | null;
}

export function useSession(): UseSessionResult {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sessionId = searchParams.get("s");

  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setError("Session ID tidak ditemukan.");
      setIsLoading(false);
      return;
    }

    const fetchSession = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/links/session/${sessionId}`
        );

        const data = await response.json();

        if (!response.ok) {
          setError(data.message || "Session tidak valid.");
          setIsLoading(false);
          return;
        }

        setSessionData(data.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching session:", err);
        setError("Gagal memuat session.");
        setIsLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  return { sessionId, sessionData, isLoading, error };
}
