import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Technosia — Portal Berita Teknologi & Keuangan",
    short_name: "Technosia",
    description:
      "Portal berita dan informasi terkini seputar teknologi, keuangan, fintech, dan programming di Indonesia.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#4F46E5",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
