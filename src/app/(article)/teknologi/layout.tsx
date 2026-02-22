import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teknologi — Berita & Inovasi Digital Terkini",
  description:
    "Berita dan informasi terkini seputar perkembangan teknologi, inovasi digital, dan transformasi industri teknologi di Indonesia dan dunia.",
  openGraph: {
    title: "Teknologi — Berita & Inovasi Digital Terkini",
    description:
      "Berita teknologi terkini di Indonesia dan dunia. AI, cloud computing, cybersecurity, dan inovasi digital.",
    url: "https://technosia.web.id/teknologi",
  },
};

export default function TeknologiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
