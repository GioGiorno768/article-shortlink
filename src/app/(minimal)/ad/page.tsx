"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Gift, Sparkles, Clock } from "lucide-react";

export default function AdPage() {
  const [countdown, setCountdown] = useState(5);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanClose(true);
    }
  }, [countdown]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-yellow-400" />
          <span className="font-bold text-lg">Shortlinkmu Ads</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4" />
          {canClose ? (
            <button
              onClick={() => window.close()}
              className="px-4 py-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              Close This Tab
            </button>
          ) : (
            <span className="text-gray-300">
              Please wait {countdown} seconds...
            </span>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4 py-20">
        {/* Ad Banner Placeholder 1 */}
        <div className="w-full max-w-3xl mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <p className="text-white/60 text-xs uppercase tracking-wider mb-4">
              Advertisement
            </p>
            <div className="h-[250px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center border border-white/10">
              <div className="text-center">
                <Gift className="h-16 w-16 text-white/50 mx-auto mb-4" />
                <p className="text-white/70 text-lg font-medium">
                  Premium Ad Space
                </p>
                <p className="text-white/50 text-sm mt-1">300x250 Banner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Promotional Content */}
        <div className="w-full max-w-3xl mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">
              🎉 Thank You for Using Shortlinkmu!
            </h2>
            <p className="text-white/70 mb-6">
              Your destination link has opened in a new tab. This page helps
              support our free service.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-3xl font-bold text-green-400">10M+</p>
                <p className="text-white/60 text-sm">Links Shortened</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-3xl font-bold text-blue-400">50K+</p>
                <p className="text-white/60 text-sm">Active Users</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5">
                <p className="text-3xl font-bold text-purple-400">99%</p>
                <p className="text-white/60 text-sm">Uptime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ad Banner Placeholder 2 */}
        <div className="w-full max-w-3xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <p className="text-white/60 text-xs uppercase tracking-wider mb-4">
              Advertisement
            </p>
            <div className="h-[90px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center border border-white/10">
              <div className="text-center">
                <p className="text-white/70 font-medium">
                  Leaderboard Ad Space
                </p>
                <p className="text-white/50 text-sm">728x90 Banner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        {canClose && (
          <button
            onClick={() => window.close()}
            className="mt-8 px-8 py-3 bg-white text-indigo-900 font-semibold rounded-full hover:bg-white/90 transition-all flex items-center gap-2"
          >
            <ExternalLink className="h-5 w-5" />
            Close This Tab
          </button>
        )}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 text-center text-white/40 text-sm">
        &copy; 2025 Shortlinkmu. All rights reserved.
      </footer>
    </div>
  );
}
