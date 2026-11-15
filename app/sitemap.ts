import type { MetadataRoute } from "next";

const publicRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/contents", priority: 0.9, changeFrequency: "daily" as const },
  { path: "/about-us", priority: 0.5, changeFrequency: "monthly" as const },
  {
    path: "/under-construction",
    priority: 0.1,
    changeFrequency: "yearly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  const vercelSiteUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;
  const siteUrl = configuredSiteUrl ?? vercelSiteUrl;

  // Never publish localhost or an invented production domain in a sitemap.
  if (!siteUrl) return [];

  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    priority: route.priority,
    changeFrequency: route.changeFrequency,
  }));
}
