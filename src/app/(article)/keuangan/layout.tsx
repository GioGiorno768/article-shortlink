import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keuangan — Tips Investasi & Pengelolaan Keuangan",
  description:
    "Informasi terkini seputar dunia keuangan, investasi saham, cryptocurrency, dan tips pengelolaan keuangan untuk masa depan yang lebih baik.",
  openGraph: {
    title: "Keuangan — Tips Investasi & Pengelolaan Keuangan",
    description:
      "Panduan investasi, tips keuangan personal, dan berita keuangan terkini di Indonesia.",
    url: "https://technosia.web.id/keuangan",
  },
};

export default function KeuanganLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
