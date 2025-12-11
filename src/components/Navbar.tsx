import Link from "next/link";
import { Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 px-6 py-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Techno<span className="text-indigo-600">Logy</span>.
          </Link>
          <div className="hidden gap-6 text-sm font-medium text-gray-500 md:flex dark:text-gray-400">
            <Link
              href="/"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Home
            </Link>
            <Link
              href="#"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Gadgets
            </Link>
            <Link
              href="#"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Software
            </Link>
            <Link
              href="#"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Reviews
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
            <Search className="h-5 w-5" />
          </button>
          <button className="md:hidden rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
            <Menu className="h-5 w-5" />
          </button>
          <button className="hidden rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 md:block dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
}
