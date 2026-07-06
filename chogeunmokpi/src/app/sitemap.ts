import type { MetadataRoute } from "next";
import { getClinicPage } from "@/lib/clinic-pages";
import { mindConditions } from "@/lib/mind-conditions";
import { skinConditions } from "@/lib/skin-conditions";
import { tonicConditions } from "@/lib/tonic-conditions";

const SITE_URL = "https://chogeunmokpi.vercel.app";

const staticRoutes = [
  "",
  "/about/doctors",
  "/about/doctors/lee-ho-geun",
  "/about/location",
  "/about/notices",
  "/community/column",
  "/community/guide",
  "/community/reviews",
  "/programs",
  "/programs/diet",
  "/programs/digestive",
  "/programs/mind",
  "/programs/pediatric",
  "/programs/head",
  "/programs/head-face",
  "/programs/skin",
  "/programs/tonic",
  "/programs/women",
];

const clinicDetailRoutes = [
  ...getClinicPage("pediatric").conditions.map(
    (condition) => `/programs/pediatric/${condition.slug}`,
  ),
  ...getClinicPage("head-face").conditions.map(
    (condition) => `/programs/head-face/${condition.slug}`,
  ),
  ...getClinicPage("women").conditions.map(
    (condition) => `/programs/women/${condition.slug}`,
  ),
];

const conditionRoutes = [
  ...mindConditions.map((condition) => `/programs/psy/${condition.slug}`),
  ...skinConditions.map((condition) => `/programs/skin/${condition.slug}`),
  ...tonicConditions.map((condition) => `/programs/tonic/${condition.slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [...staticRoutes, ...clinicDetailRoutes, ...conditionRoutes];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route.split("/").length <= 3 ? 0.8 : 0.6,
  }));
}
