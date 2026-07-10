import { notFound } from "next/navigation";
import Link from "next/link";
import { skinConditions } from "@/lib/skin-conditions";
import { buildSearchDescription, programImageMetadata } from "@/lib/seo";
import { skinSeoTitles } from "@/lib/seo-titles";

const skinImageBySlug: Record<string, string> = {
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

export function generateStaticParams() {
  return skinConditions.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = skinConditions.find((item) => item.slug === slug);

  if (!condition) {
    return { title: "피부질환 치료 안내 | 초근목피한의원" };
  }

  const title =
    skinSeoTitles[condition.slug] ??
    `대전 ${condition.title} 유성구 한의원 피부치료 한약 - 초근목피한의원 대전 반석동`;
  const description = buildSearchDescription(condition.title, condition.summary);
  const image = skinImageBySlug[condition.slug] ?? "/images/programs/skin-hero.png";

  return {
    title,
    description,
    alternates: {
      canonical: `/programs/skin/${slug}`,
    },
    ...programImageMetadata({
      title,
      description,
      url: `/programs/skin/${slug}`,
      image,
      alt: `${condition.title} 피부질환 한방 진료 이미지`,
    }),
  };
}

export default async function SkinConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = skinConditions.find((item) => item.slug === slug);

  if (!condition) notFound();

  return (
    <main className="bg-paper">
      <section className="border-b border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-root">
            피부질환 치료 안내
          </p>
          <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            {condition.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {condition.summary}
          </p>
        </div>
      </section>

      <section className="ch-section-pad mx-auto max-w-4xl">
        <article className="ch-card-lg bg-card md:p-10">
          <span className="mb-5 inline-flex rounded-full bg-paper-soft px-3 py-1 text-xs font-medium text-ink-soft">
            {condition.group}
          </span>
          <h2 className="mb-5 font-display text-2xl text-ink md:text-3xl">
            상세 칼럼을 준비 중입니다
          </h2>
          <div className="space-y-4 text-[15px] leading-loose text-ink-soft">
            <p>
              이 페이지는 {condition.title}에 대한 블로그형 치료 안내 칼럼으로 확장될 예정입니다.
              증상 체크, 한의학적 원인, 치료 과정, 생활 관리법을 차례로 정리하겠습니다.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/programs/skin" className="ch-btn-secondary">
              피부질환 클리닉으로
            </Link>
            <Link href="/reserve" className="ch-btn-primary">
              상담 예약하기
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
