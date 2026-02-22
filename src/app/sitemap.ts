import type { MetadataRoute } from "next";
import { ARTICLES } from "@/data/articles";

const SITE_URL = "https://technosia.web.id";

// Map category names to URL slugs
const CATEGORY_SLUGS: Record<string, string> = {
  Teknologi: "teknologi",
  Keuangan: "keuangan",
  Fintech: "fintech",
  Programming: "programming",
  Gadget: "programming", // Gadget shares the programming page
};

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Category pages (deduplicated)
  const uniqueCategorySlugs = [...new Set(Object.values(CATEGORY_SLUGS))];
  const categoryPages: MetadataRoute.Sitemap = uniqueCategorySlugs.map(
    (slug) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    }),
  );

  // Article pages
  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE_URL}/article/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...articlePages];
}
