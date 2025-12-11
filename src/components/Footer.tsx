import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="mb-4 block text-xl font-bold tracking-tighter"
            >
              Techno<span className="text-indigo-600">Logy</span>.
            </Link>
            <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400">
              The premier destination for the latest tech news, reviews, and
              detailed analysis. We bring the future to you, today.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Categories
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:text-indigo-600">
                  Gadgets
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-600">
                  Software
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-600">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-600">
                  Startups
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link href="#" className="hover:text-indigo-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-sm text-gray-500 md:flex-row dark:border-gray-800 dark:text-gray-400">
          <p>© 2025 TechnoLogy Blog. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
