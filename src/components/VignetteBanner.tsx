"use client";

import { useState, useEffect, useRef } from "react";

const IS_LIVE = process.env.NEXT_PUBLIC_AD_MODE === "live";

// Dummy vignette ad creatives (dev mode only)
const vignetteAds = [
  {
    icon: "🛡️",
    iconBg: "bg-red-500",
    title: "NordVPN",
    description: "Protect Your Online Privacy with #1 VPN",
    cta: "Get 70% OFF",
  },
  {
    icon: "📦",
    iconBg: "bg-blue-500",
    title: "WPS Office",
    description: "The Best Alternative to Microsoft Office",
    cta: "Free Download",
  },
  {
    icon: "🎮",
    iconBg: "bg-purple-500",
    title: "Epic Games",
    description: "Download Free Games Every Week",
    cta: "Play Now",
  },
  {
    icon: "⚡",
    iconBg: "bg-green-500",
    title: "CleanMaster",
    description: "Speed Up Your Device in One Click",
    cta: "Download Free",
  },
  {
    icon: "🔒",
    iconBg: "bg-orange-500",
    title: "Avast Antivirus",
    description: "Keep Your Device Safe from Threats",
    cta: "Scan Now",
  },
];

interface VignetteBannerProps {
  /** Delay in seconds before the vignette appears (dev mode only) */
  delaySeconds?: number;
}

export default function VignetteBanner({
  delaySeconds = 3,
}: VignetteBannerProps) {
  const scriptLoaded = useRef(false);

  // Live mode: inject Monetag vignette script (they handle everything)
  useEffect(() => {
    if (!IS_LIVE || scriptLoaded.current) return;

    const script = document.createElement("script");
    script.dataset.zone = "10635779";
    script.src = "https://gizokraijaw.net/vignette.min.js";
    script.async = true;

    document.head.appendChild(script);
    scriptLoaded.current = true;
  }, []);

  // Live mode: Monetag handles the vignette UI, nothing to render
  if (IS_LIVE) return null;

  // ---- Dev mode: show dummy vignette ----
  return <DummyVignette delaySeconds={delaySeconds} />;
}

// Separated dummy component to keep hooks clean
function DummyVignette({ delaySeconds }: { delaySeconds: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [adIndex, setAdIndex] = useState(0);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("vignette_dismissed");
    if (dismissed) return;

    setAdIndex(Math.floor(Math.random() * vignetteAds.length));

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delaySeconds * 1000);

    return () => clearTimeout(timer);
  }, [delaySeconds]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("vignette_dismissed", "true");
  };

  const handleCTA = () => {
    window.open("/ad", "_blank");
    handleClose();
  };

  if (!isVisible) return null;

  const ad = vignetteAds[adIndex];

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 z-9998 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Vignette card */}
      <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 pointer-events-none">
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden pointer-events-auto animate-in zoom-in-95 fade-in duration-300">
          {/* Header */}
          <div className="px-5 pt-4 pb-2 text-center">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Sebelum Melanjutkan
            </p>
          </div>

          {/* Ad badge */}
          <span className="absolute top-3 left-3 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white bg-yellow-500 rounded">
            Ad
          </span>

          {/* Content */}
          <div className="px-5 py-4 flex items-center gap-4">
            <div
              className={`w-12 h-12 ${ad.iconBg} rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-lg`}
            >
              {ad.icon}
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-gray-900 dark:text-white text-base">
                {ad.title}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">
                {ad.description}
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="px-5 pb-5 flex items-center gap-3">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleCTA}
              className="flex-1 px-4 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-500/25 transition-all active:scale-[0.98]"
            >
              {ad.cta}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
