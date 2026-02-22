"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ARTICLES } from "@/data/articles";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/teknologi", label: "Teknologi" },
  { href: "/keuangan", label: "Keuangan" },
  { href: "/fintech", label: "Fintech" },
  { href: "/programming", label: "Programming" },
];

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(ARTICLES.slice(0, 5));
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter articles based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults(ARTICLES.slice(0, 5));
    } else {
      const filtered = ARTICLES.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.category.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSearchResults(filtered.slice(0, 5));
    }
  }, [searchQuery]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <nav className="top-0 z-40 w-full border-b border-gray-100 bg-white/80 px-6 py-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Techno<span className="text-indigo-600">sia</span>
            </Link>
            <div className="hidden gap-6 text-sm font-medium text-gray-500 md:flex dark:text-gray-400">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
              aria-label="Cari artikel"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="flex flex-col px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          />

          {/* Search Panel */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-100 dark:border-gray-800">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none text-lg"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {searchResults.length > 0 ? (
                <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                  {searchResults.map((article) => (
                    <li key={article.slug}>
                      <Link
                        href={`/article/${article.slug}`}
                        onClick={() => setIsSearchOpen(false)}
                        className="flex items-start gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                            {article.category}
                          </span>
                          <h4 className="font-medium text-gray-900 dark:text-white truncate">
                            {article.title}
                          </h4>
                          <p className="text-sm text-gray-500 line-clamp-1">
                            {article.excerpt}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <p>Tidak ada artikel yang ditemukan untuk "{searchQuery}"</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 bg-gray-50 dark:bg-gray-800/50 text-center text-xs text-gray-400">
              Tekan{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                ESC
              </kbd>{" "}
              untuk menutup
            </div>
          </div>
        </div>
      )}
    </>
  );
}
