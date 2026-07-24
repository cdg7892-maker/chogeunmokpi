import type { MetadataRoute } from "next";
import { digestiveDetailPages } from "@/lib/digestive-detail-pages";
import { headFaceDetailPages } from "@/lib/head-face-detail-pages";
import { healthColumns } from "@/lib/health-columns";
import { mindConditions } from "@/lib/mind-conditions";
import { pediatricDetailPages } from "@/lib/pediatric-detail-pages";
import { skinConditions } from "@/lib/skin-conditions";
import { tonicConditions } from "@/lib/tonic-conditions";
import { womenDetailPages } from "@/lib/women-detail-pages";

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
  "/events/diet-program",
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
  ...pediatricDetailPages.map((page) => `/programs/pediatric/${page.slug}`),
  ...headFaceDetailPages.map((page) => `/programs/head-face/${page.slug}`),
  ...womenDetailPages.map((page) => `/programs/women/${page.slug}`),
];

const conditionRoutes = [
  ...digestiveDetailPages.map((condition) => `/programs/digestive/${condition.slug}`),
  ...mindConditions.map((condition) => `/programs/psy/${condition.slug}`),
  ...skinConditions.map((condition) => `/programs/skin/${condition.slug}`),
  ...tonicConditions.map((condition) => `/programs/tonic/${condition.slug}`),
];

const columnRoutes = healthColumns.map(
  (column) => `/community/column/${column.slug}`,
);

const imageByRoute = new Map<string, string>([
  ["/", "/logo-icon.png"],
  ["/programs/diet", "/images/programs/diet-eno-product-hero.png"],
  ["/programs/digestive", "/images/programs/digestive-hero.png"],
  ["/programs/mind", "/images/programs/mind-hero.png"],
  ["/programs/pediatric", "/images/programs/pediatric-hero-v2.png"],
  ["/programs/head", "/images/programs/head-face-hero.png"],
  ["/programs/head-face", "/images/programs/head-face-hero.png"],
  ["/programs/skin", "/images/programs/skin-hero.png"],
  ["/programs/tonic", "/images/programs/tonic-hero.png"],
  ["/programs/women", "/images/programs/women-hero.png"],
  ...digestiveDetailPages.map((page) => [
    `/programs/digestive/${page.slug}`,
    page.heroImage,
  ] as const),
  ...mindConditions.map((page) => [
    `/programs/psy/${page.slug}`,
    page.heroImage,
  ] as const),
  ...pediatricDetailPages.map((page) => [
    `/programs/pediatric/${page.slug}`,
    page.heroImage,
  ] as const),
  ...headFaceDetailPages.map((page) => [
    `/programs/head-face/${page.slug}`,
    page.heroImage,
  ] as const),
  ...womenDetailPages.map((page) => [
    `/programs/women/${page.slug}`,
    page.heroImage,
  ] as const),
  ...tonicConditions.map((page) => [
    `/programs/tonic/${page.slug}`,
    page.heroImage,
  ] as const),
  ["/programs/skin/atopic-dermatitis", "/images/programs/atopic-hero.png"],
  ["/programs/skin/eczema", "/images/programs/eczema-hero.png"],
  ["/programs/skin/psoriasis", "/images/programs/skin-psoriasis-detail.png"],
  ["/programs/skin/seborrheic-dermatitis", "/images/programs/skin-seborrheic-detail.png"],
  ["/programs/skin/itching", "/images/programs/skin-itching-detail.png"],
  ["/programs/skin/urticaria", "/images/programs/skin-urticaria-detail.png"],
  ["/programs/skin/pompholyx", "/images/programs/skin-pompholyx-detail.png"],
  ["/programs/skin/facial-flushing", "/images/programs/skin-facial-flushing-detail.png"],
  ["/programs/skin/vitiligo", "/images/programs/skin-vitiligo-detail.png"],
  ["/programs/skin/keratosis-pilaris", "/images/programs/skin-keratosis-pilaris-detail.png"],
  ["/programs/skin/warts", "/images/programs/skin-warts-detail.png"],
  ["/programs/skin/skin-clinic", "/images/programs/skin-hero.png"],
]);

const LAST_MODIFIED = new Date("2026-07-24T00:00:00+09:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...new Set([...staticRoutes, ...clinicDetailRoutes, ...conditionRoutes, ...columnRoutes])];

  return routes.map((route) => {
    const image = imageByRoute.get(route);

    return {
      url: `${SITE_URL}${route}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : route.split("/").length <= 3 ? 0.8 : 0.6,
      images: image ? [`${SITE_URL}${image}`] : [],
    };
  });
}
