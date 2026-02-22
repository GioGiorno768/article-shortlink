"use client";

import { useEffect, useRef } from "react";

const IS_LIVE = process.env.NEXT_PUBLIC_AD_MODE === "live";

interface HilltopAdsBannerProps {
  className?: string;
}

export default function HilltopAdsBanner({
  className = "",
}: HilltopAdsBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!IS_LIVE || scriptLoaded.current || !containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      "//mistymeat.com/bsX.V_s/dkG/lm0oYDWBcQ/oeMmq9VuUZPUGlCkdPVTuYr3TNMjnIL2QM/jegItJNRjOcx2OMXjMYLynORQf";
    script.async = true;
    script.referrerPolicy = "no-referrer-when-downgrade";
    containerRef.current.appendChild(script);
    scriptLoaded.current = true;
  }, []);

  // Dummy banner for dev mode
  if (!IS_LIVE) {
    return (
      <div className={`my-6 flex justify-center not-prose ${className}`}>
        <div
          className="rounded-xl overflow-hidden bg-linear-to-r from-purple-600 via-violet-500 to-indigo-500 shadow-lg flex items-center justify-center"
          style={{ width: "300px", height: "250px" }}
        >
          <div className="text-center text-white p-4">
            <p className="font-bold text-sm">🎯 Ad Banner</p>
            <p className="text-xs opacity-80">300x250 — HilltopAds</p>
            <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-xs font-medium border border-white/30">
              Dev Mode
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`my-6 flex justify-center not-prose ${className}`}
    />
  );
}
