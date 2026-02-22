import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/ad", "/ad-step2", "/ad-step3", "/go", "/banned"],
      },
    ],
    sitemap: "https://technosia.web.id/sitemap.xml",
  };
}
