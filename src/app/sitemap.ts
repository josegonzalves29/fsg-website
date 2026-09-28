import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

const BASE_URL = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/about", "/contact"].map((p) => ({ url: `${BASE_URL}${p}` }));
  const projectPages = projects.map((p) => ({ url: `${BASE_URL}/projects/${p.slug}` }));
  return [...pages, ...projectPages];
}
