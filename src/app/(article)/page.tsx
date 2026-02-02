"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ARTICLES, TRENDING_TOPICS } from "@/data/articles";

// Get featured articles for slider (top 4)
const SLIDER_ARTICLES = ARTICLES.slice(0, 4);

// Get articles by category
const getArticlesByCategory = (category: string) => {
  return ARTICLES.filter((a) => a.category === category).slice(0, 3);
};

// Category colors
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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDER_ARTICLES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Slider Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-gray-900">
        {/* Slides */}
        {SLIDER_ARTICLES.map((article, index) => (
          <Link
            key={article.slug}
            href={`/article/${article.slug}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={article.image}
              alt={article.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Gradient Overlay - Dark from left, fade to reveal image on right */}
            <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/80 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto max-w-7xl px-6 w-full">
                <div className="max-w-xl">
                  <span className="inline-block px-4 py-1.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-700 to-purple-700 rounded mb-6">
                    {article.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                    {article.title}
                  </h1>
                  <p className="text-gray-300 text-base max-w-lg line-clamp-3 mb-8">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                        ▶
                      </span>
                      Read Story
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                        👤
                      </span>
                      {article.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs">
                        📅
                      </span>
                      {article.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Pagination - Bottom Right Position */}
        <div className="absolute bottom-8 right-25 z-20 flex items-center gap-3">
          {/* Dots with Progress */}
          <div className="flex items-center gap-1.5">
            {SLIDER_ARTICLES.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentSlide(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : index < currentSlide
                      ? "w-1.5 bg-gray-500"
                      : "w-1.5 bg-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(
                (prev) =>
                  (prev - 1 + SLIDER_ARTICLES.length) % SLIDER_ARTICLES.length,
              );
            }}
            className="w-10 h-10 rounded-full border border-gray-600 hover:border-gray-400 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            ←
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide((prev) => (prev + 1) % SLIDER_ARTICLES.length);
            }}
            className="w-10 h-10 rounded-full border border-gray-600 hover:border-gray-400 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            →
          </button>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Category Sections */}
            {["Teknologi", "Keuangan", "Fintech"].map((category) => {
              const categoryArticles = getArticlesByCategory(category);
              if (categoryArticles.length === 0) return null;

              return (
                <section key={category} id={category.toLowerCase()}>
                  {/* Section Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-3 h-3 rounded-full ${getCategoryColor(
                          category,
                        )}`}
                      ></span>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {category}
                      </h2>
                    </div>
                    <Link
                      href={`/#${category.toLowerCase()}`}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      Lihat Semua →
                    </Link>
                  </div>

                  {/* Article Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {categoryArticles.slice(0, 2).map((article) => (
                      <Link
                        key={article.slug}
                        href={`/article/${article.slug}`}
                        className="group block"
                      >
                        <div className="relative overflow-hidden rounded-xl aspect-video mb-4">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-3">
                          <div className="w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                            <span className="text-gray-600 dark:text-gray-400 font-medium text-xs">
                              {article.author.charAt(0)}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500">
                            {article.author} · {article.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Programming & Gadget Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Programming & Gadget
                </h2>
              </div>

              <div className="space-y-4">
                {[
                  ...getArticlesByCategory("Programming"),
                  ...getArticlesByCategory("Gadget"),
                ]
                  .slice(0, 4)
                  .map((article) => (
                    <Link
                      key={article.slug}
                      href={`/article/${article.slug}`}
                      className="group flex gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                      <div className="relative w-28 h-20 shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className={`inline-block px-2 py-0.5 text-xs font-medium text-white rounded-full mb-1 ${getCategoryColor(
                            article.category,
                          )}`}
                        >
                          {article.category}
                        </span>
                        <h3 className="font-bold text-gray-900 dark:text-white leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2 text-sm">
                          {article.title}
                        </h3>
                        <p className="mt-1 text-xs text-gray-400">
                          {article.date}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 sticky top-24 self-start">
            {/* About Widget */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    Technologia
                  </h3>
                  <p className="text-xs text-gray-500">Portal Berita Tech</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Kami menyajikan cerita lengkap di balik teknologi dan keuangan
                di Indonesia.
              </p>
              <button className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-700 transition-colors">
                Ikuti Kami
              </button>
            </div>

            {/* Tagline Widget */}
            <div className="rounded-2xl bg-linear-to-br from-indigo-600 to-purple-700 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">
                We go beyond the headlines
              </h3>
              <p className="text-sm text-indigo-100 mb-4">
                to bring you the <span className="font-bold">[fullstory]</span>
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">
                  #teknologi
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">
                  #keuangan
                </span>
              </div>
            </div>

            {/* Trending Widget */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Trending Topik
              </h3>
              <ul className="space-y-4">
                {TRENDING_TOPICS.map((topic, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 group cursor-pointer"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500 group-hover:bg-indigo-100 group-hover:text-indigo-600 dark:bg-gray-800 dark:text-gray-400 transition-colors">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 dark:text-gray-300 transition-colors">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Articles Widget */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                Artikel Terbaru
              </h3>
              <div className="space-y-4">
                {ARTICLES.slice(4, 8).map((article) => (
                  <Link
                    key={article.slug}
                    href={`/article/${article.slug}`}
                    className="group block"
                  >
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">{article.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
