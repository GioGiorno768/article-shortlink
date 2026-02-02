import Link from "next/link";

const CATEGORY_LINKS = [
  { href: "/teknologi", label: "Teknologi" },
  { href: "/keuangan", label: "Keuangan" },
  { href: "/fintech", label: "Fintech" },
  { href: "/programming", label: "Programming" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "Tentang Kami" },
  { href: "/contact", label: "Kontak" },
  { href: "/privacy", label: "Kebijakan Privasi" },
  { href: "/terms", label: "Syarat & Ketentuan" },
];

const SOCIAL_LINKS = [
  { href: "#", label: "Twitter" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="mb-4 block text-xl font-bold tracking-tighter"
            >
              Techno<span className="text-indigo-600">logia</span>
            </Link>
            <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400">
              Portal berita dan informasi terkini seputar teknologi, keuangan,
              dan fintech di Indonesia. Membawa inovasi untuk masa depan Anda.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Kategori
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Perusahaan
            </h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-sm text-gray-500 md:flex-row dark:border-gray-800 dark:text-gray-400">
          <p>© 2025 Technologia. Hak cipta dilindungi.</p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
