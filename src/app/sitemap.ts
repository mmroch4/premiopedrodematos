import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL + "/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: BASE_URL + "/sobre",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: BASE_URL + "/jogar",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: BASE_URL + "/guia",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
