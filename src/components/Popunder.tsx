"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";

const IS_LIVE = process.env.NEXT_PUBLIC_AD_MODE === "live";

export default function Popunder() {
  // Live mode: load HilltopAds popunder script
  // The full script is stored in public/scripts/popunder.js
  // It is self-executing with anti-adblock, handles click interception,
  // frequency capping (3x/hour), and popunder window automatically
  if (IS_LIVE) {
    return <Script src="/scripts/popunder.js" strategy="afterInteractive" />;
  }

  // Dev mode: show dummy popunder notification
  return <DummyPopunder />;
}

// --- Dummy Popunder for dev mode ---
function DummyPopunder() {
  const [showNotice, setShowNotice] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    // Simulate popunder on any click (like the real script does)
    const handleClick = () => {
      if (triggered.current) return;
      const dismissed = sessionStorage.getItem("popunder_dismissed");
      if (dismissed) return;

      triggered.current = true;
      setShowNotice(true);

      // Auto dismiss after 4 seconds
      setTimeout(() => {
        setShowNotice(false);
        sessionStorage.setItem("popunder_dismissed", "true");
      }, 4000);
    };

    // Add click listener with a small delay (like real popunder behavior)
    const timer = setTimeout(() => {
      document.addEventListener("click", handleClick, { once: true });
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!showNotice) return null;

  return (
    <div className="fixed bottom-4 left-4 z-9999 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="bg-gray-900 text-white rounded-lg shadow-xl px-4 py-3 max-w-xs border border-gray-700">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 bg-yellow-400/10 px-1.5 py-0.5 rounded">
            Popunder (Dev)
          </span>
        </div>
        <p className="text-xs text-gray-300">
          🪟 A popunder window would open behind this tab in production
          (HilltopAds)
        </p>
      </div>
    </div>
  );
}
