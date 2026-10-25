import { digestiveDetailPages } from "./digestive-detail-pages";
import { headFaceDetailPages } from "./head-face-detail-pages";
import { mindConditions } from "./mind-conditions";
import { pediatricDetailPages } from "./pediatric-detail-pages";
import { skinConditions } from "./skin-conditions";
import { tonicConditions } from "./tonic-conditions";
import { womenDetailPages } from "./women-detail-pages";

export type ProgramGuide = {
  title: string;
  description: string;
  path: string;
  image: string;
};

type Detail = { slug: string; title: string; summary: string; heroImage: string };
const guides = (base: string, pages: Detail[]): ProgramGuide[] => pages.map(page => ({
  title: page.title, description: page.summary,
  path: `${base}/${page.slug}`, image: page.heroImage,
}));

export const skinGuideImages: Record<string, string> = {
  "atopic-dermatitis": "/images/programs/atopic-hero.png",
  eczema: "/images/programs/eczema-hero.png",
  psoriasis: "/images/programs/skin-psoriasis-detail.png",
  "seborrheic-dermatitis": "/images/programs/skin-seborrheic-detail.png",
  itching: "/images/programs/skin-itching-detail.png",
  urticaria: "/images/programs/skin-urticaria-detail.png",
  pompholyx: "/images/programs/skin-pompholyx-detail.png",
  "facial-flushing": "/images/programs/skin-facial-flushing-detail.png",
  vitiligo: "/images/programs/skin-vitiligo-detail.png",
  "keratosis-pilaris": "/images/programs/skin-keratosis-pilaris-detail.png",
  warts: "/images/programs/skin-warts-detail.png",
  "skin-clinic": "/images/programs/skin-hero.png",
};

export const programGuideGroups = {
  digestive: { title: "소화기", path: "/programs/digestive", items: guides("/programs/digestive", digestiveDetailPages) },
  mind: { title: "마음건강", path: "/programs/mind", items: guides("/programs/psy", mindConditions) },
  pediatric: { title: "소아·성장", path: "/programs/pediatric", items: guides("/programs/pediatric", pediatricDetailPages) },
  "head-face": { title: "두면부", path: "/programs/head-face", items: guides("/programs/head-face", headFaceDetailPages) },
  women: { title: "여성건강", path: "/programs/women", items: guides("/programs/women", womenDetailPages) },
  tonic: { title: "보약·웰니스", path: "/programs/tonic", items: guides("/programs/tonic", tonicConditions) },
  skin: { title: "피부", path: "/programs/skin", items: guides("/programs/skin", skinConditions.map(page => ({ ...page, heroImage: skinGuideImages[page.slug] }))) },
};

export type ProgramGuideGroup = keyof typeof programGuideGroups;
