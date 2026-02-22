import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://technosia.web.id";
const SITE_NAME = "Technosia";
const SITE_DESCRIPTION =
  "Portal berita dan informasi terkini seputar teknologi, keuangan, fintech, dan programming di Indonesia. Membawa inovasi untuk masa depan Anda.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} — Portal Berita Teknologi & Keuangan Indonesia`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "teknologi",
    "keuangan",
    "fintech",
    "programming",
    "berita teknologi",
    "investasi",
    "cryptocurrency",
    "AI",
    "machine learning",
    "Indonesia",
  ],

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Portal Berita Teknologi & Keuangan Indonesia`,
    description: SITE_DESCRIPTION,
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Portal Berita Teknologi & Keuangan Indonesia`,
    description: SITE_DESCRIPTION,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",

  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },

  other: {
    "70b3de18186dd048db2aaa806c225c9907c188ab":
      "70b3de18186dd048db2aaa806c225c9907c188ab",
    monetag: "0be7013df1b872d24e3f8dbbba1f8b86",
  },
};

export const viewport: Viewport = {
  themeColor: "#4F46E5",
};

import InPagePush from "@/components/InPagePush";
import Popunder from "@/components/Popunder";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="min-h-screen bg-white dark:bg-gray-950">
          {children}
        </main>
        <InPagePush />
        <Popunder />
      </body>
    </html>
  );
}
