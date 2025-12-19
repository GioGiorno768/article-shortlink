"use client";

import { Suspense } from "react";
import ArticleLayout from "@/components/ArticleLayout";
import SafelinkPanel from "@/components/SafelinkPanel";
import { useSession } from "@/hooks/useSession";

function Step2Content() {
  const { sessionId, sessionData, isLoading, error } = useSession();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading session...</p>
        </div>
      </div>
    );
  }

  if (error || !sessionData || !sessionId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Session Error</h1>
          <p className="mt-2 text-gray-600">
            {error || "Session tidak valid."}
          </p>
        </div>
      </div>
    );
  }

  const { code, token, step, max_steps, ad_level } = sessionData;

  return (
    <>
      <ArticleLayout
        title="Best Smartphones of 2025: Complete Buying Guide"
        category="Gadgets"
        date="December 18, 2025"
        image="https://picsum.photos/seed/smartphones/1200/675"
      >
        {/* Article Content */}
        <p className="lead text-xl text-gray-600 dark:text-gray-300">
          The smartphone market in 2025 offers more choices than ever before.
          From flagship powerhouses to budget-friendly gems, here's everything
          you need to know before making your next purchase.
        </p>

        {/* Ad Placeholder - Level 2+ */}
        <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl text-center text-sm text-gray-500">
          <p className="text-xs uppercase tracking-wide mb-2">Advertisement</p>
          <div className="h-[250px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            Medium Rectangle Ad (300x250)
          </div>
        </div>

        <h2>Top Flagship Phones</h2>
        <p>
          The competition in the flagship segment is fierce. Samsung, Apple, and
          Google continue to push boundaries with their latest offerings, each
          bringing unique innovations to the table.
        </p>

        <h2>Best Value Options</h2>
        <p>
          You don't need to spend a fortune to get a great smartphone. Mid-range
          options from OnePlus, Xiaomi, and Samsung's A-series offer incredible
          value for money with features that rival flagships.
        </p>

        <div className="my-8 rounded-xl border border-green-100 bg-green-50 p-6 dark:border-green-900/50 dark:bg-green-900/20">
          <h3 className="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">
            Pro Tip
          </h3>
          <p className="text-green-700 dark:text-green-300">
            Consider what features matter most to you. If camera quality is your
            priority, look at the Pixel series. For battery life, Samsung and
            OnePlus excel.
          </p>
        </div>

        <h2>What to Look For</h2>
        <p>
          When choosing a smartphone, consider factors like display quality,
          battery life, camera capabilities, processing power, and software
          support. A phone that receives regular updates will serve you better
          in the long run.
        </p>

        <p>
          Remember, the best phone is the one that fits your specific needs and
          budget. Don't get caught up in specs wars – focus on real-world
          performance.
        </p>

        {/* Related Posts */}
        <hr className="my-12 border-gray-100 dark:border-gray-800" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
            <h4 className="font-bold">5G Coverage in 2025</h4>
            <p className="mt-2 text-sm text-gray-500">
              Everything you need to know about 5G networks...
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
            <h4 className="font-bold">Phone Accessories You Need</h4>
            <p className="mt-2 text-sm text-gray-500">
              Must-have accessories for your new smartphone...
            </p>
          </div>
        </div>
      </ArticleLayout>

      {/* Safelink Panel */}
      <SafelinkPanel
        token={token}
        code={code}
        step={step}
        maxSteps={max_steps}
        adLevel={ad_level}
        sessionId={sessionId}
      />
    </>
  );
}

export default function Step2Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <Step2Content />
    </Suspense>
  );
}
