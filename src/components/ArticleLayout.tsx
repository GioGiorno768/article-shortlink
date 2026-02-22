import { ReactNode } from "react";
import Link from "next/link";
import { ARTICLES } from "@/data/articles";
import AdBanner from "@/components/AdBanner";
import AdsterraBanner from "@/components/AdsterraBanner";

interface ArticleLayoutProps {
  title: string;
  category: string;
  date: string;
  image: string;
  children: ReactNode;
  author?: string;
  readTime?: string;
  tags?: string[];
  currentSlug?: string;
}

// Get recent posts (latest 5 articles)
const getRecentPosts = (excludeSlug?: string) => {
  return ARTICLES.filter((a) => a.slug !== excludeSlug).slice(0, 5);
};

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

export default function ArticleLayout({
  title,
  category,
  date,
  image,
  children,
  author,
  readTime,
  tags = ["Teknologi", "Inovasi", "Digital", "Indonesia"],
  currentSlug,
}: ArticleLayoutProps) {
  const recentPosts = getRecentPosts(currentSlug);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Header */}
      <header className="relative h-[60vh] min-h-[400px] overflow-hidden bg-gray-900">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/70 to-gray-900/30" />

        <div className="relative h-full flex items-end">
          <div className="mx-auto max-w-6xl px-6 pb-12 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`px-3 py-1 text-sm font-semibold text-white rounded-full ${getCategoryColor(
                    category,
                  )}`}
                >
                  {category}
                </span>
                <span className="text-gray-400 text-sm">{date}</span>
                {readTime && (
                  <>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400 text-sm">{readTime}</span>
                  </>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {title}
              </h1>
              {author && (
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-white">{author}</p>
                    <p className="text-sm text-gray-400">Penulis</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <article className="lg:col-span-2">
            <AdBanner size="728x90" />
            <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg">
              {children}
            </div>

            {/* Tags Section */}
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Bagikan Artikel
              </h3>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition-colors">
                  𝕏
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
                  f
                </button>
                <button className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white transition-colors">
                  ✉
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 transition-colors">
                  🔗
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            {/* Sidebar Banner Ad — Adsterra 300x250 */}
            <AdsterraBanner
              adKey="99db77243a2505d965580fa975ec22ca"
              width={300}
              height={250}
            />

            {/* Recent Posts Widget */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Postingan Terbaru
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <Link
                    key={post.slug}
                    href={`/article/${post.slug}`}
                    className="group flex gap-4"
                  >
                    <div className="relative w-20 h-16 shrink-0 overflow-hidden rounded-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm leading-snug line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags Widget */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Tags Populer
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Teknologi",
                  "AI",
                  "Fintech",
                  "Startup",
                  "Investasi",
                  "Crypto",
                  "Programming",
                  "Gadget",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* About Author Widget */}
            {author && (
              <div className="rounded-2xl bg-linear-to-br from-indigo-600 to-purple-700 p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{author}</h3>
                    <p className="text-indigo-200 text-sm">Penulis</p>
                  </div>
                </div>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  Tech enthusiast dan content creator yang passionate tentang
                  teknologi dan inovasi digital.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-white hover:text-indigo-200 transition-colors"
                >
                  Lihat Profil →
                </Link>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
