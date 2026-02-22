import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami — Technosia",
  description:
    "Kenali tim di balik Technosia. Portal berita teknologi dan keuangan Indonesia yang menyajikan informasi terpercaya dan insight mendalam.",
  openGraph: {
    title: "Tentang Kami — Technosia",
    description:
      "Kenali tim di balik Technosia, portal berita teknologi dan keuangan Indonesia.",
    url: "https://technosia.web.id/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
