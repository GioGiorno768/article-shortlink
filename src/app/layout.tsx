import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechnoLogy - Tech News & Reviews",
  description: "The latest technology news and reviews.",
  other: {
    "70b3de18186dd048db2aaa806c225c9907c188ab":
      "70b3de18186dd048db2aaa806c225c9907c188ab",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="min-h-screen bg-white dark:bg-gray-950">
          {children}
        </main>
      </body>
    </html>
  );
}
