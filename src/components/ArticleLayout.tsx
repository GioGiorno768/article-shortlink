import { ReactNode } from "react";

interface ArticleLayoutProps {
  title: string;
  category: string;
  date: string;
  image: string;
  children: ReactNode;
}

export default function ArticleLayout({
  title,
  category,
  date,
  image,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 md:py-20">
      <header className="mb-10 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            {category}
          </span>
          <span className="text-sm text-gray-400">•</span>
          <time className="text-sm text-gray-500">{date}</time>
        </div>
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          {title}
        </h1>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </header>

      <div className="prose prose-lg mx-auto dark:prose-invert">{children}</div>
    </article>
  );
}
