import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";
  const routes = ["", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
  return routes;
}


