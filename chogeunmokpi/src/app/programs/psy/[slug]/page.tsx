import { notFound } from "next/navigation";
import Link from "next/link";
import { mindConditions } from "@/lib/mind-conditions";

export function generateStaticParams() {
  return mindConditions.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = mindConditions.find((item) => item.slug === slug);

  if (!condition) {
    return {
      title: "마음건강 질환 안내",
    };
  }

  return {
    title: `${condition.title} | 마음건강 질환 안내`,
    description: condition.summary,
  };
}

export default async function MindConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = mindConditions.find((item) => item.slug === slug);

  if (!condition) notFound();

  return (
    <main className="bg-paper">
      <section className="border-b border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-root">
            마음건강 질환 안내
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
              증상 체크, 한의학적 관점, 진료 과정, 생활 관리법을 한 페이지에서 읽을 수 있도록 구성하겠습니다.
            </p>
            <p>
              이후 백록담 세부질환 페이지의 정보 구조를 벤치마킹해, 초근목피의 진료 철학과 문체에 맞게 새로 정리할 계획입니다.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/programs/mind" className="ch-btn-secondary">
              마음건강 클리닉으로
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
