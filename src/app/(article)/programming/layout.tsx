import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programming & Gadget — Tutorial, Tips, dan Review",
  description:
    "Tutorial programming, review gadget terbaru, dan tips teknologi untuk developer dan tech enthusiast di Indonesia.",
  openGraph: {
    title: "Programming & Gadget — Tutorial, Tips, dan Review",
    description:
      "Belajar programming, review gadget terbaru, dan tips untuk developer Indonesia.",
    url: "https://technosia.web.id/programming",
  },
};

export default function ProgrammingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
