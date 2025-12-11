"use client";

import { useSearchParams, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ArticleLayout from "@/components/ArticleLayout";
import SafelinkPanel from "@/components/SafelinkPanel";

// Dummy Content Generator based on slug
const getArticleData = (slug: string) => {
  // In real app, fetch from Headless CMS
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: title || "The Future of Digital Technology in 2025",
    category: "Technology",
    date: "December 10, 2025",
    image: `https://picsum.photos/seed/${slug}/1200/675`, // Random aesthetic image
  };
};

export default function ArticlePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;

  const [hasToken, setHasToken] = useState(false);
  const [token, setToken] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    const t = searchParams.get("token");
    const c = searchParams.get("code");

    if (t && c) {
      setHasToken(true);
      setToken(t);
      setCode(c);
    }
  }, [searchParams]);

  const article = getArticleData(slug);

  return (
    <>
      <ArticleLayout
        title={article.title}
        category={article.category}
        date={article.date}
        image={article.image}
      >
        <p className="lead text-xl text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <h2>The Evolution of Interfaces</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Update your developer tools today.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>

        <div className="my-8 rounded-xl border border-indigo-100 bg-indigo-50 p-6 dark:border-indigo-900/50 dark:bg-indigo-900/20">
          <h3 className="mb-2 text-lg font-semibold text-indigo-900 dark:text-indigo-100">
            Key Takeaway
          </h3>
          <p className="text-indigo-700 dark:text-indigo-300">
            Modern web development requires focusing on both performance and
            user experience. Safelink systems can be elegant if designed
            correctly.
          </p>
        </div>

        <h2>Why Performance Matters</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet.
        </p>

        {/* Fake Related Posts to make it look real */}
        <hr className="my-12 border-gray-100 dark:border-gray-800" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
            <h4 className="font-bold">Top 10 Gadgets</h4>
            <p className="mt-2 text-sm text-gray-500">
              Read more about the latest tech...
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
            <h4 className="font-bold">Coding Best Practices</h4>
            <p className="mt-2 text-sm text-gray-500">
              How to write clean code...
            </p>
          </div>
        </div>
      </ArticleLayout>

      {/* SAFELINK PANEL - Only shows if token is present */}
      {hasToken && (
        <SafelinkPanel token={token} code={code} articleSlug={slug} />
      )}
    </>
  );
}
