import Link from "next/link";
import Image from "next/image";

// Dummy Articles Data
const FEATURED_POST = {
  slug: "future-of-ai-2025",
  title: "The Future of Artificial Intelligence: What to Expect in 2025",
  excerpt:
    "As we approach the mid-decade, AI continues to evolve at a breakneck pace. Here are the top trends specifically shaping the industry.",
  image: "https://picsum.photos/seed/ai/1200/600",
  category: "Artificial Intelligence",
  date: "Dec 10, 2025",
};

const RECENT_POSTS = [
  {
    slug: "iphone-18-rumors",
    title: "iPhone 18: Everything We Know So Far",
    category: "Gadgets",
    date: "Dec 09, 2025",
    image: "https://picsum.photos/seed/iphone/800/600",
  },
  {
    slug: "best-coding-laptops",
    title: "Top 5 Laptops for Developers in 2025",
    category: "Hardware",
    date: "Dec 08, 2025",
    image: "https://picsum.photos/seed/laptop/800/600",
  },
  {
    slug: "react-19-features",
    title: "React 19: The Game Changer",
    category: "Software",
    date: "Dec 07, 2025",
    image: "https://picsum.photos/seed/react/800/600",
  },
  {
    slug: "cybersecurity-tips",
    title: "Essential Cybersecurity Tips for Remote Workers",
    category: "Security",
    date: "Dec 06, 2025",
    image: "https://picsum.photos/seed/security/800/600",
  },
];

const SIDEBAR_LINKS = [
  "How to build a PC",
  "Understanding Blockchain",
  "The state of EV cars",
  "Smart Home Guide",
  "Best VS Code Extensions",
];

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <Link
            href={`/article/${FEATURED_POST.slug}`}
            className="group block relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="aspect-[21/9] w-full relative">
              <img
                src={FEATURED_POST.image}
                alt={FEATURED_POST.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="mb-3 inline-block rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                {FEATURED_POST.category}
              </span>
              <h1 className="mb-3 max-w-2xl text-3xl font-bold font-heading text-white md:text-5xl">
                {FEATURED_POST.title}
              </h1>
              <p className="max-w-xl text-gray-200 line-clamp-2 md:text-lg">
                {FEATURED_POST.excerpt}
              </p>
            </div>
          </Link>
        </section>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="h-8 w-1 bg-indigo-600 rounded-full"></span>
              Latest Articles
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {RECENT_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/article/${post.slug}`}
                  className="group block"
                >
                  <div className="mb-4 overflow-hidden rounded-xl bg-gray-200 aspect-[4/3]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {post.category}
                  </div>
                  <h3 className="mb-2 text-xl font-bold leading-tight text-gray-900 decoration-indigo-600 decoration-2 group-hover:underline dark:text-white">
                    {post.title}
                  </h3>
                  <time className="text-sm text-gray-500">{post.date}</time>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* About Widget */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                About Us
              </h3>
              <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                We are a team of tech enthusiasts sharing the latest news and
                insights from the digital world.
              </p>
              <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                Follow
              </button>
            </div>

            {/* Trending Widget */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                Trending Now
              </h3>
              <ul className="space-y-4">
                {SIDEBAR_LINKS.map((link, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500 group-hover:bg-indigo-100 group-hover:text-indigo-600 dark:bg-gray-800 dark:text-gray-400">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 dark:text-gray-300">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="rounded-2xl bg-gray-900 p-6 text-white shadow-lg dark:bg-indigo-950">
              <h3 className="mb-2 text-lg font-bold">Newsletter</h3>
              <p className="mb-4 text-sm text-gray-400">
                Get the latest tech news delivered to your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="mb-2 w-full rounded-lg border-none bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
              />
              <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500">
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
