"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Lock, ChevronDown, ExternalLink, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFingerprint } from "@/hooks/useFingerprint";

type PanelState = "IDLE" | "COUNTING" | "SCROLL" | "READY";

interface SafelinkPanelProps {
  token: string;
  code: string;
  step: number; // Current step (1, 2, or 3)
  maxSteps: number; // Total steps based on ad_level
  adLevel: number; // For ad intensity control
  sessionId: string; // 🔐 Session ID for clean URLs
}

export default function SafelinkPanel({
  token,
  code,
  step,
  maxSteps,
  adLevel,
  sessionId,
}: SafelinkPanelProps) {
  const [state, setState] = useState<PanelState>("IDLE");
  const [countdown, setCountdown] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const continueButtonRef = useRef<HTMLDivElement>(null);

  // 🛡️ Device Fingerprinting for Anti-Fraud
  const { visitorId } = useFingerprint();

  // Countdown effect - only runs when state is COUNTING
  useEffect(() => {
    if (state !== "COUNTING") return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setState("SCROLL");
    }
  }, [state, countdown]);

  // Handle "Open" button click
  const handleOpen = () => {
    setState("COUNTING");
  };

  // Handle "Scroll Down" button click
  const handleScrollDown = () => {
    setState("READY");
    // Scroll to continue button
    setTimeout(() => {
      continueButtonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  // Handle "Continue" button click
  const handleContinue = async () => {
    setIsLoading(true);

    console.log("🔍 DEBUG SafelinkPanel:", { step, maxSteps, adLevel });

    try {
      // 🛡️ Step 1: Call complete-step API to mark this step as completed
      const completeResponse = await fetch(
        `http://localhost:8000/api/links/${code}/complete-step`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token, step }),
        }
      );

      const completeData = await completeResponse.json();

      if (!completeResponse.ok) {
        console.error("Complete step failed:", completeData);
        // If step validation fails, redirect to step 1
        if (completeData.data?.redirect) {
          alert(completeData.message || "Langkah tidak valid.");
          window.open(`/article/step1?s=${sessionId}`, "_blank");
          return;
        }
        alert(completeData.message || "Gagal memproses langkah.");
        setIsLoading(false);
        return;
      }

      // 🛡️ Step 2: Check if all steps are complete
      const { is_complete, next_step } = completeData.data;

      if (is_complete) {
        // All steps done! Activate token and go to destination
        const activateResponse = await fetch(
          `http://localhost:8000/api/links/${code}/activate-token`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          }
        );

        const activateData = await activateResponse.json();

        if (!activateResponse.ok) {
          alert(activateData.message || "Gagal mengaktifkan token.");
          setIsLoading(false);
          return;
        }

        // Redirect to continue page (destination) - use session ID
        window.open(`http://localhost:3000/continue?s=${sessionId}`, "_blank");
      } else {
        // More steps to go - update session step and redirect to next step
        await fetch(
          `http://localhost:8000/api/links/session/${sessionId}/step`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ step: next_step }),
          }
        );

        window.open(`/article/step${next_step}?s=${sessionId}`, "_blank");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Fixed Bottom Panel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="mx-auto max-w-xl overflow-hidden rounded-2xl bg-white/95 shadow-2xl backdrop-blur-md border border-gray-200/50 dark:bg-gray-900/95 dark:border-gray-800">
          <div className="p-5">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Lock className="h-5 w-5 text-indigo-500" />
                Secured Link
              </h3>
              {state === "COUNTING" && (
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-bold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                  {countdown}s
                </span>
              )}
              {state === "IDLE" && (
                <span className="text-xs text-gray-500">
                  Step {step} of {maxSteps}
                </span>
              )}
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{
                  width:
                    state === "IDLE"
                      ? "0%"
                      : state === "COUNTING"
                      ? `${((5 - countdown) / 5) * 60}%`
                      : state === "SCROLL"
                      ? "60%"
                      : "100%",
                }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* State-based Content */}
            <AnimatePresence mode="wait">
              {state === "IDLE" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Click the button below to start verification
                  </p>
                  <button
                    onClick={handleOpen}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98] transition-all"
                  >
                    <Play className="h-5 w-5" />
                    Open
                  </button>
                </motion.div>
              )}

              {state === "COUNTING" && (
                <motion.div
                  key="counting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-800/50"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Please wait while we verify your access...
                  </p>
                </motion.div>
              )}

              {state === "SCROLL" && (
                <motion.div
                  key="scroll"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  <p className="text-sm text-green-600 dark:text-green-400 text-center font-medium">
                    ✓ Verification complete!
                  </p>
                  <button
                    onClick={handleScrollDown}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:shadow-green-500/25 active:scale-[0.98] transition-all"
                  >
                    <ChevronDown className="h-5 w-5 animate-bounce" />
                    Scroll Down
                  </button>
                </motion.div>
              )}

              {state === "READY" && (
                <motion.div
                  key="ready"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl bg-green-50 p-4 text-center dark:bg-green-900/20"
                >
                  <p className="text-sm text-green-700 dark:text-green-400 flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Scroll down and click Continue
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Continue Button at bottom of page */}
      {state === "READY" && (
        <motion.div
          ref={continueButtonRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 mb-32 flex justify-center"
        >
          <button
            onClick={handleContinue}
            disabled={isLoading}
            className={cn(
              "flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 text-lg font-bold text-white shadow-xl hover:shadow-indigo-500/30 active:scale-[0.98] transition-all",
              isLoading && "cursor-wait opacity-80"
            )}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <ExternalLink className="h-5 w-5" />
                Continue
              </>
            )}
          </button>
        </motion.div>
      )}
    </>
  );
}
