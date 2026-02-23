"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface InvisibleDirectLinkProps {
  /** The ad URL to open */
  adUrl?: string;
  /** Seconds between each overlay activation */
  intervalSeconds?: number;
  /** Max clicks per session before stopping */
  maxClicks?: number;
  /** Unique key for sessionStorage (per step) */
  storageKey?: string;
  /** If true, overlay won't activate until enabled becomes true */
  enabled?: boolean;
}

export default function InvisibleDirectLink({
  adUrl = "/ad",
  intervalSeconds = 5,
  maxClicks = 3,
  storageKey = "inv_dl_clicks",
  enabled = true,
}: InvisibleDirectLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const isFirstMount = useRef(true);

  // Load click count from sessionStorage
  useEffect(() => {
    const stored = sessionStorage.getItem(storageKey);
    if (stored) {
      const count = parseInt(stored, 10);
      setClickCount(count);
      // If already clicked before, don't activate immediately
      if (count > 0) isFirstMount.current = false;
    }
  }, [storageKey]);

  // Activate overlay: immediately on first load, then after interval
  useEffect(() => {
    if (!enabled || clickCount >= maxClicks) return;

    if (isFirstMount.current) {
      // First time opening the page: activate immediately
      isFirstMount.current = false;
      setIsActive(true);
    } else {
      // After a click: wait for interval before re-activating
      const timer = setTimeout(() => {
        setIsActive(true);
      }, intervalSeconds * 1000);

      return () => clearTimeout(timer);
    }
  }, [intervalSeconds, clickCount, maxClicks, enabled]);

  const handleClick = useCallback(() => {
    window.open(adUrl, "_blank");
    setIsActive(false);

    const newCount = clickCount + 1;
    setClickCount(newCount);
    sessionStorage.setItem(storageKey, String(newCount));
  }, [clickCount, adUrl, storageKey]);

  if (!enabled || !isActive || clickCount >= maxClicks) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed inset-0 z-9990 cursor-default bg-transparent border-none p-0 m-0"
      style={{ opacity: 0 }}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
