import type { MetadataRoute } from "next";
import { getContent } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const c = getContent("en");
  const pages = ["", ...c.CASE_STUDIES.map((s) => `/work/${s.slug}`)];
  return pages.map((path) => ({
    url: `${c.META_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path ? 0.8 : 1,
    alternates: { languages: { en: `${c.META_URL}${path}`, fr: `${c.META_URL}/fr${path}` } },
  }));
}
