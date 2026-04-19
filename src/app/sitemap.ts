import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://paksiminfo-gules.vercel.app";
  const lastMod = "2026-04-19";

  const pages = [
    { url: baseUrl, lastModified: lastMod, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: lastMod, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: lastMod, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${baseUrl}/disclaimer`, lastModified: lastMod, changeFrequency: "yearly" as const, priority: 0.5 },
  ];

  const blogPosts = [
    { slug: "sim-owner-detail-pakistan", priority: 0.95 },
    { slug: "pak-sim-info-check-guide", priority: 0.9 },
    { slug: "cnic-sim-information", priority: 0.9 },
    { slug: "jazz-sim-owner-detail", priority: 0.85 },
    { slug: "telenor-sim-owner-check", priority: 0.85 },
    { slug: "zong-sim-ownership-check", priority: 0.85 },
    { slug: "ufone-sim-details-verification", priority: 0.85 },
    { slug: "latest-data-pakistan-sims-2026", priority: 0.9 },
    { slug: "report-illegal-sim-pakistan", priority: 0.8 },
    { slug: "block-lost-sim-pakistan", priority: 0.8 },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: post.priority,
  }));

  return [...pages, ...blogPages];
}
