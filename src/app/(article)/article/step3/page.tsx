"use client";

import { Suspense } from "react";
import ArticleLayout from "@/components/ArticleLayout";
import SafelinkPanel from "@/components/SafelinkPanel";
import { useSession } from "@/hooks/useSession";

function Step3Content() {
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
        title="Cybersecurity Best Practices for 2025"
        category="Security"
        date="December 18, 2025"
        image="https://picsum.photos/seed/security-cyber/1200/675"
      >
        {/* Article Content */}
        <p className="lead text-xl text-gray-600 dark:text-gray-300">
          As cyber threats become more sophisticated, protecting your digital
          life has never been more important. Learn the essential security
          practices everyone should follow in 2025.
        </p>

        {/* Ad Placeholder - Level 3+ Aggressive */}
        <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl text-center text-sm text-gray-500">
          <p className="text-xs uppercase tracking-wide mb-2">Advertisement</p>
          <div className="h-[250px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            Large Ad Slot (300x250)
          </div>
        </div>

        <h2>Password Security</h2>
        <p>
          The foundation of digital security starts with strong, unique
          passwords for every account. Use a password manager to generate and
          store complex passwords securely.
        </p>

        <h2>Two-Factor Authentication</h2>
        <p>
          Enable 2FA on all accounts that support it. Authenticator apps are
          more secure than SMS-based codes. Hardware security keys provide the
          highest level of protection.
        </p>

        {/* Inline Ad - Level 3+ */}
        <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl text-center text-sm text-gray-500">
          <p className="text-xs uppercase tracking-wide mb-2">Sponsored</p>
          <div className="h-[90px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            Inline Banner Ad
          </div>
        </div>

        <div className="my-8 rounded-xl border border-red-100 bg-red-50 p-6 dark:border-red-900/50 dark:bg-red-900/20">
          <h3 className="mb-2 text-lg font-semibold text-red-900 dark:text-red-100">
            ⚠️ Warning
          </h3>
          <p className="text-red-700 dark:text-red-300">
            Never share your passwords, 2FA codes, or security keys with anyone.
            Legitimate companies will never ask for this information.
          </p>
        </div>

        <h2>Recognizing Phishing Attempts</h2>
        <p>
          Phishing attacks are becoming increasingly sophisticated. Always
          verify the sender's email address, check for spelling errors, and
          never click suspicious links.
        </p>

        <h2>Keeping Software Updated</h2>
        <p>
          Regular updates patch security vulnerabilities. Enable automatic
          updates for your operating system, browsers, and apps to stay
          protected against the latest threats.
        </p>

        <p>
          Cybersecurity is a continuous process, not a one-time setup. Stay
          informed about the latest threats and regularly review your security
          practices.
        </p>

        {/* Related Posts */}
        <hr className="my-12 border-gray-100 dark:border-gray-800" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
            <h4 className="font-bold">VPN Guide for Beginners</h4>
            <p className="mt-2 text-sm text-gray-500">
              Protect your privacy with a virtual private network...
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
            <h4 className="font-bold">Secure Your Smart Home</h4>
            <p className="mt-2 text-sm text-gray-500">
              IoT security tips for modern households...
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

export default function Step3Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <Step3Content />
    </Suspense>
  );
}
