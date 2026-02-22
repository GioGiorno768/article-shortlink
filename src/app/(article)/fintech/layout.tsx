import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fintech — Inovasi Keuangan Digital & Teknologi Finansial",
  description:
    "Eksplorasi dunia Financial Technology, inovasi pembayaran digital, e-wallet, P2P lending, dan solusi keuangan modern di Indonesia.",
  openGraph: {
    title: "Fintech — Inovasi Keuangan Digital & Teknologi Finansial",
    description:
      "Berita fintech terkini: e-wallet, digital banking, blockchain, dan inovasi keuangan di Indonesia.",
    url: "https://technosia.web.id/fintech",
  },
};

export default function FintechLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
