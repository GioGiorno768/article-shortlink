"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Link as LinkIcon, Lock, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SafelinkPanelProps {
  token: string;
  code: string;
  articleSlug: string;
  onTimerComplete?: () => void;
}

export default function SafelinkPanel({
  token,
  code,
  articleSlug,
  onTimerComplete,
}: SafelinkPanelProps) {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsReady(true);
      if (onTimerComplete) onTimerComplete();
    }
  }, [timeLeft, onTimerComplete]);

  const handleGetLink = async () => {
    setIsLoading(true);

    try {
      // 1. Aktivasi token dulu via backend
      const response = await fetch(
        `http://localhost:8000/api/links/${code}/activate-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Gagal aktivasi
        console.error("Token activation failed:", data);
        alert(data.message || "Gagal mengaktifkan token. Silakan coba lagi.");
        setIsLoading(false);
        return;
      }

      // 2. Token berhasil diaktivasi, redirect ke continue page
      setTimeout(() => {
        const mainAppUrl = `http://localhost:3000/continue?code=${code}&token=${token}`;
        window.location.href = mainAppUrl;
      }, 500);
    } catch (error) {
      console.error("Error activating token:", error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="mx-auto max-w-xl overflow-hidden rounded-2xl bg-white/90 shadow-2xl backdrop-blur-md border border-gray-200/50 ring-1 ring-gray-200/50 dark:bg-gray-900/90 dark:border-gray-800 dark:ring-gray-800">
        <div className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <Lock className="h-5 w-5 text-indigo-500" />
              Secured Link
            </h3>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              Wait {timeLeft}s
            </span>
          </div>

          <div className="space-y-4">
            {/* Progress Bar */}
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: `${((10 - timeLeft) / 10) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <AnimatePresence mode="wait">
              {!isReady ? (
                <motion.div
                  key="waiting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-800/50"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Generating your secure link destination...
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="ready"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col gap-3"
                >
                  <button
                    onClick={handleGetLink}
                    disabled={isLoading}
                    className={cn(
                      "group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:shadow-indigo-500/25 active:scale-[0.98]",
                      isLoading && "cursor-wait opacity-80"
                    )}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Validating...
                      </>
                    ) : (
                      <>
                        <LinkIcon className="h-5 w-5" />
                        Get Link
                      </>
                    )}
                  </button>
                  <div className="flex items-center justify-center gap-2 text-xs text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Link safe & scanned</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
