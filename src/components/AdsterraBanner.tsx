"use client";

import { useEffect, useRef } from "react";

const IS_LIVE = process.env.NEXT_PUBLIC_AD_MODE === "live";

interface AdsterraBannerProps {
  adKey: string;
  width: number;
  height: number;
  className?: string;
}

export default function AdsterraBanner({
  adKey,
  width,
  height,
  className = "",
}: AdsterraBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!IS_LIVE || scriptLoaded.current || !containerRef.current) return;

    // Set atOptions on window
    (window as unknown as Record<string, unknown>).atOptions = {
      key: adKey,
      format: "iframe",
      height,
      width,
      params: {},
    };

    // Inject the invoke script
    const script = document.createElement("script");
    script.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
    script.async = true;
    containerRef.current.appendChild(script);
    scriptLoaded.current = true;
  }, [adKey, width, height]);

  // Dummy banner for dev mode
  if (!IS_LIVE) {
    return (
      <div className={`my-4 flex justify-center ${className}`}>
        <div
          className="rounded-xl overflow-hidden bg-linear-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg flex items-center justify-center"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <div className="text-center text-white p-4">
            <p className="font-bold text-sm">🔥 Ad Banner</p>
            <p className="text-xs opacity-80">
              {width}x{height} — Adsterra
            </p>
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
      className={`my-4 flex justify-center ${className}`}
    />
  );
}
