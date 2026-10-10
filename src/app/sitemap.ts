import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

const routes = ["", "/book", "/audit", "/gyms", "/yoga", "/salons", "/restaurants", "/plumbers", "/work", "/about", "/careers", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/book" || path === "/audit" ? 0.9 : 0.7,
  }));
}
