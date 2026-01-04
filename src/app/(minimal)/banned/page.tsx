"use client";

import { useSearchParams } from "next/navigation";
import { ShieldX, ArrowLeft, AlertTriangle, Home } from "lucide-react";
import Link from "next/link";

export default function BannedPage() {
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason") || "";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      {/* Main Card */}
      <div className="w-full max-w-md">
        {/* Icon Section */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-red-200 opacity-25" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-200">
              <ShieldX className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/50">
          <h1 className="mb-2 text-center text-2xl font-bold text-gray-900">
            Link Blocked
          </h1>
          <p className="mb-6 text-center text-gray-500">
            This link has been blocked by the administrator for violating our
            terms of service.
          </p>

          {/* Warning Box */}
          <div className="mb-6 flex items-start gap-3 rounded-xl bg-amber-50 p-4 border border-amber-100">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
            <div>
              <p className="text-sm font-medium text-amber-800">
                Why was this blocked?
              </p>
              <p className="mt-1 text-sm text-amber-600">
                {reason
                  ? reason
                  : "This link may contain harmful content, spam, or violate our community guidelines."}
              </p>
            </div>
          </div>

          
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-400">
          If you believe this is a mistake, please contact our support team.
        </p>
      </div>
    </div>
  );
}
