"use client";

import Link from "next/link";
import { useState } from "react";
import { ARTICLES } from "@/data/articles";

// Get all Programming and Gadget articles
const PROGRAMMING_GADGET_ARTICLES = ARTICLES.filter(
  (a) => a.category === "Programming" || a.category === "Gadget",
);

// Get featured (first) and rest
const FEATURED = PROGRAMMING_GADGET_ARTICLES[0];
const OTHER_ARTICLES = PROGRAMMING_GADGET_ARTICLES.slice(1);

// Category color helper
const getCategoryColor = (category: string) => {
  return category === "Programming" ? "bg-orange-500" : "bg-blue-500";
};

export default function ProgrammingGadgetPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState<"all" | "programming" | "gadget">("all");

  const filteredArticles = OTHER_ARTICLES.filter((article) => {
    if (filter === "all") return true;
    if (filter === "programming") return article.category === "Programming";
    if (filter === "gadget") return article.category === "Gadget";
    return true;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-gray-900">
        {/* Background Image */}
        {FEATURED && (
          <img
            src={FEATURED.image}
            alt="Programming & Gadget"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {/* Gradient Overlay - Dark from left, fade to transparent on right */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/80 to-gray-900/30" />

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 w-full">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></span>
                <span className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                  Kategori
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Programming & Gadget
              </h1>
              <p className="text-gray-300 text-lg max-w-lg">
                Tutorial programming, review gadget terbaru, dan tips teknologi
                untuk developer dan tech enthusiast.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                  {PROGRAMMING_GADGET_ARTICLES.length} Artikel
                </span>
                <span className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full text-orange-300 text-sm">
                  Programming
                </span>
                <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-300 text-sm">
                  Gadget
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {FEATURED && (
        <section className="mx-auto max-w-7xl px-6 -mt-8 relative z-10">
          <Link
            href={`/article/${FEATURED.slug}`}
            className="group block rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-4/3 md:aspect-auto overflow-hidden">
                <img
                  src={FEATURED.image}
                  alt={FEATURED.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-full">
                    Featured
                  </span>
                  <span
                    className={`inline-block px-3 py-1 text-white text-xs font-semibold rounded-full ${getCategoryColor(
                      FEATURED.category,
                    )}`}
                  >
                    {FEATURED.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-orange-600 transition-colors mb-4">
                  {FEATURED.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-6">
                  {FEATURED.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <span className="text-orange-600 font-semibold text-sm">
                      {FEATURED.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {FEATURED.author}
                    </p>
                    <p className="text-sm text-gray-500">{FEATURED.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Articles Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Semua Artikel
          </h2>
          <div className="flex items-center gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  filter === "all"
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setFilter("programming")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  filter === "programming"
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Programming
              </button>
              <button
                onClick={() => setFilter("gadget")}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  filter === "gadget"
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                }`}
              >
                Gadget
              </button>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                    : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
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
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span
                    className={`absolute top-3 left-3 px-2 py-1 text-white text-xs font-semibold rounded-full ${getCategoryColor(
                      article.category,
                    )}`}
                  >
                    {article.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3">
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
        )}

        {/* List View */}
        {viewMode === "list" && (
          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className="group flex gap-6 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                <div className="relative w-48 h-32 shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-2 left-2 px-2 py-0.5 text-white text-xs font-semibold rounded-full ${getCategoryColor(
                      article.category,
                    )}`}
                  >
                    {article.category}
                  </span>
                </div>
                <div className="flex-1 min-w-0 py-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{article.author}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400">
              Tidak ada artikel untuk filter ini.
            </p>
          </div>
        )}
      </section>

      {/* Back to Home */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium transition-colors"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
