import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://www.a1securitys.com",
    sitemap: "https://www.a1securitys.com/sitemap.xml",
  };
}
