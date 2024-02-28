import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://space-tourism-project-emtd0ytaa-alauraoliva.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://space-tourism-project-emtd0ytaa-alauraoliva.vercel.app/destination",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://space-tourism-project-emtd0ytaa-alauraoliva.vercel.app/crew",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://space-tourism-project-emtd0ytaa-alauraoliva.vercel.app/technology",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
