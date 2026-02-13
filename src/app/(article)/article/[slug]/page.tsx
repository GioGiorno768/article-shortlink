"use client";

import { useParams } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import SafelinkPanel from "@/components/SafelinkPanel";
import { getArticleBySlug, ARTICLES } from "@/data/articles";
import { useMonetizationSession } from "@/hooks/useMonetizationSession";
import Link from "next/link";

// Category color helper
const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Teknologi: "bg-indigo-500",
    Keuangan: "bg-emerald-500",
    Fintech: "bg-purple-500",
    Gadget: "bg-blue-500",
    Programming: "bg-orange-500",
  };
  return colors[category] || "bg-gray-500";
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  // Check for monetization session (reads from cookie + localStorage)
  const { session, isMonetized, isLoading } = useMonetizationSession();

  // Get article from data
  const article = getArticleBySlug(slug);

  // Fallback for unknown slugs
  if (!article) {
    const fallbackTitle = slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return (
      <ArticleLayout
        title={fallbackTitle}
        category="Teknologi"
        date="Februari 2025"
        image={`https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop`}
        currentSlug={slug}
      >
        <p className="lead text-xl text-gray-600 dark:text-gray-300">
          Artikel ini sedang dalam proses pembuatan. Silakan kembali lagi nanti
          untuk membaca konten lengkapnya.
        </p>
        <div className="my-8">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </ArticleLayout>
    );
  }

  // Get related articles (same category, different slug)
  const relatedArticles = ARTICLES.filter(
    (a) => a.category === article.category && a.slug !== article.slug,
  ).slice(0, 3);

  // Extract tags from article content or use defaults
  const articleTags = [
    article.category,
    "Indonesia",
    "Inovasi",
    "Digital",
    "2026",
  ];

  return (
    <>
      <ArticleLayout
        title={article.title}
        category={article.category}
        date={article.date}
        image={article.image}
        author={article.author}
        readTime={article.readTime}
        tags={articleTags}
        currentSlug={article.slug}
      >
        {/* Article Content */}
        <div dangerouslySetInnerHTML={{ __html: article.content }} />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-100 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
              Artikel Terkait
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/article/${related.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 text-white text-xs font-semibold rounded-full ${getCategoryColor(
                        related.category,
                      )}`}
                    >
                      {related.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </ArticleLayout>

      {/* Show SafelinkPanel if in monetization session */}
      {isMonetized && session && (
        <SafelinkPanel
          token={session.token}
          code={session.code}
          step={session.step}
          maxSteps={session.maxSteps}
          adLevel={session.adLevel}
          sessionId={session.sessionId}
          minWaitSeconds={session.minWaitSeconds}
        />
      )}
    </>
  );
}
