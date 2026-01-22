"use client";

import { Suspense } from "react";
import ArticleLayout from "@/components/ArticleLayout";
import SafelinkPanel from "@/components/SafelinkPanel";
import { useSession } from "@/hooks/useSession";

function Step1Content() {
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
        title="The Future of AI Technology in 2025"
        category="Technology"
        date="December 18, 2025"
        image="https://picsum.photos/seed/ai-future/1200/675"
      >
        {/* Article Content */}
        <p className="lead text-xl text-gray-600 dark:text-gray-300">
          Artificial Intelligence has rapidly evolved from a futuristic concept
          to an essential part of our daily lives. In 2025, we're witnessing
          unprecedented advancements that are reshaping industries across the
          globe.
        </p>

        <h2>The Rise of Generative AI</h2>
        <p>
          Generative AI models have become incredibly sophisticated, capable of
          creating content that is nearly indistinguishable from human-made
          work. From writing and coding to art and music, these tools are
          democratizing creativity and productivity.
        </p>

        {/* Ad Placeholder - Level 1+ */}
        <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl text-center text-sm text-gray-500">
          {/* Banner Ad Slot */}
          <p className="text-xs uppercase tracking-wide mb-2">Advertisement</p>
          <div className="h-[90px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            Banner Ad (728x90)
          </div>
        </div>

        <h2>Machine Learning in Healthcare</h2>
        <p>
          The healthcare industry is experiencing a revolution powered by AI.
          From early disease detection to personalized treatment plans, machine
          learning algorithms are helping doctors make better decisions and save
          more lives.
        </p>

        <div className="my-8 rounded-xl border border-indigo-100 bg-indigo-50 p-6 dark:border-indigo-900/50 dark:bg-indigo-900/20">
          <h3 className="mb-2 text-lg font-semibold text-indigo-900 dark:text-indigo-100">
            Key Insight
          </h3>
          <p className="text-indigo-700 dark:text-indigo-300">
            By 2025, AI-powered diagnostics are expected to achieve accuracy
            rates exceeding 95% in detecting certain types of cancer,
            significantly improving patient outcomes.
          </p>
        </div>

        <h2>The Ethical Considerations</h2>
        <p>
          As AI becomes more prevalent, ethical considerations become paramount.
          Issues of privacy, bias, and accountability require careful attention
          from developers, regulators, and society as a whole.
        </p>

        <p>
          The future of AI is bright, but it requires responsible development
          and deployment to ensure that its benefits are distributed equitably
          across society.
        </p>

        {/* Related Posts Section */}
        <hr className="my-12 border-gray-100 dark:border-gray-800" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
            <h4 className="font-bold">Top 10 AI Tools for Developers</h4>
            <p className="mt-2 text-sm text-gray-500">
              Discover the best AI-powered tools to boost your productivity...
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
            <h4 className="font-bold">Understanding Neural Networks</h4>
            <p className="mt-2 text-sm text-gray-500">
              A beginner's guide to the building blocks of AI...
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

export default function Step1Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <Step1Content />
    </Suspense>
  );
}
