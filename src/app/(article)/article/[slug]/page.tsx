import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/articles";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ArticlePageClient from "./ArticlePageClient";

const SITE_URL = "https://technosia.web.id";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
      description: "Artikel yang Anda cari tidak tersedia.",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [article.category, "Indonesia", "Technosia", article.title],

    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/article/${article.slug}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 675,
          alt: article.title,
        },
      ],
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  return (
    <>
      {article && (
        <>
          <ArticleJsonLd
            title={article.title}
            description={article.excerpt}
            url={`${SITE_URL}/article/${article.slug}`}
            image={article.image}
            datePublished={article.date}
            author={article.author}
            category={article.category}
          />
          <BreadcrumbJsonLd
            items={[
              { name: "Beranda", url: SITE_URL },
              {
                name: article.category,
                url: `${SITE_URL}/${article.category.toLowerCase()}`,
              },
              {
                name: article.title,
                url: `${SITE_URL}/article/${article.slug}`,
              },
            ]}
          />
        </>
      )}
      <ArticlePageClient />
    </>
  );
}
