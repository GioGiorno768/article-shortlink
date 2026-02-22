"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MousePointerClick, Timer, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdClickModalProps {
  isOpen: boolean;
  onContinue: () => void;
  waitSeconds?: number;
  adClicksRequired?: number;
  timeReductionPerClick?: number;
  adUrl?: string; // Step-specific direct link URL
}

export default function AdClickModal({
  isOpen,
  onContinue,
  waitSeconds = 60,
  adClicksRequired = 5,
  timeReductionPerClick = 10,
  adUrl = "/ad",
}: AdClickModalProps) {
  const [countdown, setCountdown] = useState(waitSeconds);
  const [adClicks, setAdClicks] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Countdown timer
  useEffect(() => {
    if (!isOpen || isReady) return;

    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setIsReady(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isOpen, isReady]);

  // Check if ad clicks complete
  useEffect(() => {
    if (adClicks >= adClicksRequired) {
      setIsReady(true);
      setCountdown(0);
    }
  }, [adClicks, adClicksRequired]);

  // Handle ad click
  const handleAdClick = useCallback(() => {
    window.open(adUrl, "_blank");

    setAdClicks((prev) => {
      const newCount = prev + 1;
      return newCount;
    });

    // Reduce countdown
    setCountdown((prev) => {
      const reduced = prev - timeReductionPerClick;
      if (reduced <= 0) {
        setIsReady(true);
        return 0;
      }
      return reduced;
    });
  }, [timeReductionPerClick]);

  // Format seconds as mm:ss or just seconds
  const formatTime = (seconds: number) => {
    if (seconds >= 60) {
      const min = Math.floor(seconds / 60);
      const sec = seconds % 60;
      return `${min}:${sec.toString().padStart(2, "0")}`;
    }
    return `${seconds}s`;
  };

  // Progress for ad clicks
  const clickProgress = Math.min(adClicks / adClicksRequired, 1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 text-center">
              <h2 className="text-lg font-bold text-white">
                Pilih salah satu untuk melanjutkan
              </h2>
              <p className="mt-1 text-sm text-blue-100/80">
                Klik iklan atau tunggu countdown selesai
              </p>
            </div>

            <div className="p-6 space-y-5">
              {/* Option 1: Click Ads */}
              <div className="space-y-3">
                <button
                  onClick={handleAdClick}
                  disabled={adClicks >= adClicksRequired}
                  className={cn(
                    "w-full flex items-center justify-center gap-3 rounded-xl px-5 py-4 text-base font-semibold transition-all active:scale-[0.98]",
                    adClicks >= adClicksRequired
                      ? "bg-green-100 text-green-700 cursor-default dark:bg-green-900/30 dark:text-green-400"
                      : "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:brightness-110",
                  )}
                >
                  {adClicks >= adClicksRequired ? (
                    <>
                      <Check className="h-5 w-5" />
                      Klik Iklan Selesai!
                    </>
                  ) : (
                    <>
                      <ExternalLink className="h-5 w-5" />
                      Klik Iklan ({adClicks}/{adClicksRequired})
                    </>
                  )}
                </button>

                {/* Click progress bar */}
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${clickProgress * 100}%` }}
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500"
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {adClicks > 0 && adClicks < adClicksRequired && (
                  <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                    Klik {adClicksRequired - adClicks} kali lagi untuk skip
                    countdown
                  </p>
                )}
              </div>

              {/* Separator */}
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
                <span className="text-sm font-medium text-gray-400">atau</span>
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700" />
              </div>

              {/* Option 2: Wait */}
              <button
                onClick={isReady ? onContinue : undefined}
                disabled={!isReady}
                className={cn(
                  "w-full flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-base font-semibold transition-all",
                  isReady
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 active:scale-[0.98] cursor-pointer"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-500",
                )}
              >
                {isReady ? (
                  <>
                    <Check className="h-5 w-5" />
                    Lanjutkan
                  </>
                ) : (
                  <>
                    <Timer className="h-5 w-5" />
                    Tunggu {formatTime(countdown)}
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
