import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/options", "/options/", "/pitch", "/v2", "/v3"],
      },
    ],
    sitemap: "https://piza.bearified.co/sitemap.xml",
  }
}
