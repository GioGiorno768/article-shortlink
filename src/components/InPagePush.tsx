"use client";

import { useState, useEffect, useRef } from "react";

const IS_LIVE = process.env.NEXT_PUBLIC_AD_MODE === "live";

export default function InPagePush() {
  const scriptLoaded = useRef(false);

  // Live mode: inject Monetag in-page push script to <head>
  useEffect(() => {
    if (!IS_LIVE || scriptLoaded.current) return;

    const script = document.createElement("script");
    script.dataset.zone = "10635811";
    script.src = "https://nap5k.com/tag.min.js";
    script.async = true;
    document.head.appendChild(script);
    scriptLoaded.current = true;
  }, []);

  // Live mode: Monetag handles everything, nothing to render
  if (IS_LIVE) return null;

  // Dev mode: show dummy in-page push
  return <DummyInPagePush />;
}

// --- Dummy In-Page Push for dev mode ---
const dummyPushAds = [
  {
    icon: "🔔",
    title: "Update Available!",
    body: "A new version of Chrome is available. Update now for better security.",
    site: "chrome-update.com",
  },
  {
    icon: "🎁",
    title: "You Won a Gift Card!",
    body: "Congratulations! Claim your $100 Amazon Gift Card now.",
    site: "promo-rewards.com",
  },
  {
    icon: "⚠️",
    title: "Virus Detected!",
    body: "Your device may be at risk. Tap to scan now.",
    site: "secure-scan.com",
  },
  {
    icon: "💬",
    title: "New Message",
    body: "You have 3 unread messages. Click to view.",
    site: "chat-notify.com",
  },
];

function DummyInPagePush() {
  const [isVisible, setIsVisible] = useState(false);
  const [adIndex, setAdIndex] = useState(0);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("inpage_push_dismissed");
    if (dismissed) return;

    setAdIndex(Math.floor(Math.random() * dummyPushAds.length));

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("inpage_push_dismissed", "true");
  };

  if (!isVisible) return null;

  const ad = dummyPushAds[adIndex];

  return (
    <div className="fixed top-4 right-4 z-9999 animate-in slide-in-from-top-4 fade-in duration-300">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 w-80 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
          <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
            Ad • In-Page Push (Dev)
          </span>
          <button
            onClick={handleClose}
            className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-600 transition-colors text-xs"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <button
          onClick={() => {
            window.open("/ad", "_blank");
            handleClose();
          }}
          className="w-full px-4 py-3 flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-left"
        >
          <span className="text-2xl mt-0.5">{ad.icon}</span>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-sm text-gray-900 dark:text-white leading-tight">
              {ad.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">
              {ad.body}
            </p>
            <p className="text-[10px] text-gray-400 mt-1">{ad.site}</p>
          </div>
        </button>
      </div>
    </div>
  );
}
