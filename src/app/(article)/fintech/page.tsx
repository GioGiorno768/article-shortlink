"use client";

import Link from "next/link";
import { useState } from "react";
import { ARTICLES } from "@/data/articles";

// Get all Fintech articles
const FINTECH_ARTICLES = ARTICLES.filter((a) => a.category === "Fintech");

// Get featured (first) and rest
const FEATURED = FINTECH_ARTICLES[0];
const OTHER_ARTICLES = FINTECH_ARTICLES.slice(1);

export default function FintechPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-gray-900">
        {/* Background Image */}
        {FEATURED && (
          <img
            src={FEATURED.image}
            alt="Fintech"
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
                <span className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                  Kategori
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Fintech
              </h1>
              <p className="text-gray-300 text-lg max-w-lg">
                Eksplorasi dunia Financial Technology, inovasi pembayaran
                digital, dan solusi keuangan modern yang mengubah cara kita
                bertransaksi.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                  {FINTECH_ARTICLES.length} Artikel
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                  Updated Daily
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
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold rounded-full mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-purple-600 transition-colors mb-4">
                  {FEATURED.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-6">
                  {FEATURED.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <span className="text-purple-600 font-semibold text-sm">
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
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Semua Artikel
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                  : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {OTHER_ARTICLES.map((article) => (
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
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-purple-600 transition-colors line-clamp-2 mb-2">
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
            {OTHER_ARTICLES.map((article) => (
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
                </div>
                <div className="flex-1 min-w-0 py-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-purple-600 transition-colors line-clamp-2 mb-2">
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
      </section>

      {/* Back to Home */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
