import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const routes = ["", "/foundation", "/philosophy", "/stephanie"]

  return routes.map((route) => ({
    url: `https://piza.bearified.co${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route ? 0.8 : 1,
  }))
}
