"use client";

import { useState, useEffect } from "react";

const AD_REDIRECT_URL =
  process.env.NEXT_PUBLIC_AD_MODE === "live"
    ? "https://www.effectivegatecpm.com/maa3nwdixq?key=4138ad4277e9895bed2bddfe7239d368"
    : "/ad";

type AdSize = "728x90" | "300x250" | "320x100" | "468x60";

interface AdBannerProps {
  size?: AdSize;
  className?: string;
}

const sizeMap: Record<AdSize, { w: string; h: string }> = {
  "728x90": { w: "w-full max-w-[728px]", h: "h-[90px]" },
  "300x250": { w: "w-full max-w-[300px]", h: "h-[250px]" },
  "320x100": { w: "w-full max-w-[320px]", h: "h-[100px]" },
  "468x60": { w: "w-full max-w-[468px]", h: "h-[60px]" },
};

// Dummy ad creatives — mimic real ads
const adCreatives = [
  {
    title: "🔥 Limited Offer!",
    subtitle: "Get 90% OFF Premium VPN",
    cta: "Claim Now →",
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    title: "⚡ Free Download",
    subtitle: "Speed Up Your PC Today",
    cta: "Download Free",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
  },
  {
    title: "🎮 Play Now!",
    subtitle: "The #1 Strategy Game of 2025",
    cta: "Play Free →",
    gradient: "from-purple-600 via-violet-500 to-indigo-500",
  },
  {
    title: "💰 Earn Money Online",
    subtitle: "Start making $500/day from home",
    cta: "Learn How →",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
  {
    title: "🛡️ Your PC is at Risk!",
    subtitle: "Scan now with Premium Antivirus",
    cta: "Scan Now",
    gradient: "from-red-600 via-rose-500 to-orange-500",
  },
];

export default function AdBanner({
  size = "728x90",
  className = "",
}: AdBannerProps) {
  // Use state to avoid hydration mismatch from Math.random()
  const [creativeIndex, setCreativeIndex] = useState(0);
  useEffect(() => {
    setCreativeIndex(Math.floor(Math.random() * adCreatives.length));
  }, []);

  const creative = adCreatives[creativeIndex];
  const sizeConfig = sizeMap[size];
  const isSmall = size === "728x90" || size === "468x60" || size === "320x100";

  return (
    <div className={`my-6 flex justify-center not-prose ${className}`}>
      <a
        href={AD_REDIRECT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          ${sizeConfig.w} ${sizeConfig.h}
          block rounded-xl overflow-hidden cursor-pointer
          bg-linear-to-r ${creative.gradient}
          shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300
          relative group
        `}
      >
        {/* Ad content */}
        <div
          className={`h-full flex ${isSmall ? "flex-row items-center justify-between px-6" : "flex-col items-center justify-center"} gap-2`}
        >
          <div className={isSmall ? "" : "text-center"}>
            <p
              className={`text-white ${isSmall ? "text-base" : "text-xl"} font-bold leading-tight`}
            >
              {creative.title}
            </p>
            <p
              className={`text-white ${isSmall ? "text-xs" : "text-sm"} opacity-90`}
            >
              {creative.subtitle}
            </p>
          </div>
          <span
            className={`
            inline-block rounded-full bg-white/20 backdrop-blur-sm
            ${isSmall ? "px-4 py-1.5 text-xs" : "px-6 py-2 text-sm mt-2"}
            font-bold text-white
            group-hover:bg-white/30 transition-colors
            border border-white/30
          `}
          >
            {creative.cta}
          </span>
        </div>

        {/* "Ad" badge */}
        <span className="absolute top-1 right-1 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white/60 bg-black/20 rounded">
          Ad
        </span>
      </a>
    </div>
  );
}
