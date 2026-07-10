import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { tonicConditions } from "@/lib/tonic-conditions";
import { buildSearchDescription, programImageMetadata } from "@/lib/seo";
import { tonicSeoTitles } from "@/lib/seo-titles";

export function generateStaticParams() {
  return tonicConditions
    .filter((condition) => condition.slug !== "gout")
    .map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const condition = tonicConditions.find((item) => item.slug === slug);

  if (!condition) {
    return {
      title: "보약·웰니스 치료 안내 | 초근목피한의원",
    };
  }

  const title =
    tonicSeoTitles[condition.slug] ??
    `대전 ${condition.title} 유성구 한의원 한약 - 초근목피한의원 대전 반석동`;
  const description = buildSearchDescription(condition.title, condition.summary);

  return {
    title,
    description,
    alternates: {
      canonical: `/programs/tonic/${slug}`,
    },
    ...programImageMetadata({
      title,
      description,
      url: `/programs/tonic/${slug}`,
      image: condition.heroImage,
      alt: condition.heroAlt,
    }),
  };
}

function IconCalendar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h6" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5 14.9 9l7.1.6-5.4 4.6 1.7 7-6.3-3.9L5.7 21.2l1.7-7-5.4-4.6L9.1 9 12 2.5Z" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="16" height="11" x="4" y="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-root">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="ch-section-title keep-words">{title}</h2>
      {copy ? <p className="ch-section-copy keep-words">{copy}</p> : null}
    </div>
  );
}

export default async function TonicConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const condition = tonicConditions.find((item) => item.slug === slug);

  if (!condition) notFound();

  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-6xl px-5 py-5 text-sm text-ink-soft">
          <Link href="/" className="hover:text-root">홈</Link>
          <span className="mx-2">›</span>
          <Link href="/programs/tonic" className="hover:text-root">보약·웰니스</Link>
          <span className="mx-2">›</span>
          <span className="font-semibold text-ink">{condition.title}</span>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-paper-soft">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[0.92fr_1.08fr] md:py-20">
          <div>
            <div className="mb-16 inline-flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3 shadow-sm">
              <span className="relative h-10 w-10 overflow-hidden rounded-full bg-paper">
                <Image src="/images/doctors/lee-ho-geun.png" alt="이호근 원장" fill sizes="40px" className="object-cover" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink-soft">의료 감수</p>
                <p className="text-sm font-bold text-ink">이호근 대표원장</p>
              </div>
            </div>

            <p className="mb-4 text-sm font-semibold text-root">{condition.category}</p>
            <p className="mb-5 text-base font-semibold leading-7 text-ink-soft">{condition.aliases}</p>
            <h1 className="font-display text-[3.25rem] leading-[1.05] text-ink sm:text-[4.2rem] md:text-[5.7rem]">
              {condition.title}
            </h1>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-9 text-ink">
              {condition.headline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/reserve" className="ch-btn-primary">
                <IconCalendar /> 진료 예약하기
              </Link>
              <a href="#diagnosis" className="ch-btn-secondary">
                <IconClipboard /> 자세히 보기
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[22px] border border-line bg-card shadow-xl shadow-ink/10">
              <Image
                src={condition.heroImage}
                alt={condition.heroAlt}
                fill
                priority
                quality={95}
                sizes="(max-width: 768px) 92vw, 540px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-line bg-card/95 p-5 shadow-xl shadow-ink/10 backdrop-blur md:left-auto md:w-[82%]">
              <div className="space-y-3">
                {condition.badges.map((badge) => (
                  <div key={badge} className="flex items-center gap-3 text-sm font-bold text-ink">
                    <span className="text-root"><IconStar /></span>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            title={`${condition.title}, 이런 불편이 반복되나요?`}
            copy="증상은 겉으로 드러난 결과입니다. 반복되는 이유를 찾기 위해 몸의 흐름을 함께 살핍니다."
          />
          <div className="grid gap-5 md:grid-cols-4">
            {condition.concerns.map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-card p-6 shadow-sm shadow-ink/5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-paper-soft text-root">
                  <IconStar />
                </div>
                <p className="text-base font-semibold leading-8 text-ink keep-words">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnosis" className="border-y border-line bg-paper-soft py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="rounded-[22px] border border-ink bg-card p-7 shadow-xl shadow-ink/10 md:p-12">
            <span className="mb-7 inline-flex rounded-full border border-ink px-4 py-2 text-xs font-bold text-ink">
              특별 진단 시스템
            </span>
            <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">
              {condition.diagnosisTitle}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-9 text-ink-soft md:text-lg">
              {condition.diagnosis.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-9 border-t border-ink pt-5 text-sm font-bold text-ink">
              초근목피한의원은 증상명보다 몸이 무너진 방향을 먼저 봅니다.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-root">
              Core Solution
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              {condition.coreTitle}
            </h2>
            <div className="mt-10 space-y-7">
              {condition.principles.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[3.25rem_1fr] gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper-soft text-lg font-bold text-ink">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-ink">{item.title}</h3>
                    <p className="text-base leading-8 text-ink-soft">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[22px] border border-line bg-paper-soft shadow-xl shadow-ink/10">
            <Image
              src={condition.heroImage}
              alt={`${condition.title} 핵심 치료 원리`}
              width={900}
              height={900}
              quality={92}
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Personalized Care"
            title="유형별 맞춤 솔루션"
            copy="같은 진단명이라도 체질과 증상 패턴에 따라 치료 방향은 달라집니다."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {condition.patterns.map((pattern, index) => (
              <article key={pattern.title} className="rounded-[18px] border border-line bg-card p-6 shadow-sm shadow-ink/5">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-base font-bold text-paper-soft">
                  {index + 1}
                </span>
                <h3 className="mb-5 text-2xl font-bold leading-snug text-ink">{pattern.title}</h3>
                <div className="mb-5 rounded-2xl bg-paper-soft p-4">
                  <p className="mb-2 text-sm font-bold text-root">주요 증상</p>
                  <ul className="space-y-1.5 text-sm leading-7 text-ink-soft">
                    {pattern.symptoms.map((symptom) => (
                      <li key={symptom}>• {symptom}</li>
                    ))}
                  </ul>
                </div>
                <p className="mb-2 text-sm font-bold text-root">진단 패턴</p>
                <p className="mb-5 text-base font-semibold text-ink">{pattern.pattern}</p>
                <p className="mb-2 text-sm font-bold text-root">추천 치료</p>
                <p className="mb-3 text-lg font-bold text-ink">{pattern.treatment}</p>
                <p className="text-sm leading-7 text-ink-soft">{pattern.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Program"
            title={`초근목피 ${condition.title} 치료 프로그램`}
            copy="몸이 회복할 수 있는 환경을 만들기 위해 처방과 생활 관리를 함께 설계합니다."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {condition.programs.map((program) => (
              <div key={program.title} className="rounded-2xl border border-line bg-card p-7 text-center shadow-sm shadow-ink/5">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-paper-soft text-root">
                  <IconStar />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight">{program.title}</h3>
                <p className="text-sm leading-7 text-ink-soft">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-root">Clinic Notes</p>
              <h2 className="ch-section-title">진료 노트</h2>
              <p className="ch-section-copy">제목은 보이되, 자세한 내용은 로그인 후 확인하실 수 있습니다.</p>
            </div>
            <Link href="/community/reviews" className="hidden font-bold text-ink hover:text-root md:inline-flex">
              전체 후기 보기 →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {condition.reviews.map((review) => (
              <Link key={review.title} href="/community/reviews" className="group block rounded-2xl border border-line bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-ink hover:shadow-lg hover:shadow-ink/10">
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-sm font-bold text-ink">치료 사례</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/30 bg-paper text-root">
                    <LockIcon />
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-snug text-ink">{review.title}</h3>
                <div className="relative mt-5 overflow-hidden">
                  <p className="line-clamp-2 select-none text-base leading-7 text-ink-soft blur-sm">
                    로그인하면 실제 치료 과정과 처방 방향, 경과를 확인하실 수 있습니다.
                  </p>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/85" />
                </div>
                <p className="mt-7 border-t border-line pt-4 text-sm font-semibold text-ink-soft">
                  환자: {review.patient} | 담당의: 이호근
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-ink bg-card px-6 py-8 text-center">
            <p className="text-lg font-bold text-ink">3+개의 실제 치료 사례가 더 있습니다</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/community/reviews" className="rounded-xl bg-white px-7 py-4 font-bold text-ink shadow-lg shadow-ink/10 transition hover:-translate-y-1">
                회원가입하고 후기 보기
              </Link>
              <Link href="/community/reviews" className="rounded-xl border-2 border-ink px-7 py-4 font-bold text-ink transition hover:bg-ink hover:text-white">
                로그인
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-16 rounded-[18px] border border-line bg-paper-soft p-7 md:flex md:items-center md:gap-8 md:p-10">
            <div className="relative mb-6 h-24 w-24 shrink-0 overflow-hidden rounded-full bg-paper md:mb-0">
              <Image src="/images/doctors/lee-ho-geun.png" alt="이호근 대표원장" fill sizes="96px" className="object-cover" />
            </div>
            <div>
              <p className="mb-2 text-sm font-bold text-root">담당 의료진</p>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-ink">대표원장 이호근</h3>
              <p className="max-w-3xl text-base leading-8 text-ink-soft">{condition.doctorNote}</p>
              <Link href="/about/doctors/lee-ho-geun" className="mt-5 inline-flex items-center gap-2 font-bold text-ink hover:text-root">
                의료진 소개 더보기 <ArrowIcon />
              </Link>
            </div>
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-root">Treatment Process</p>
          <h2 className="ch-section-title mb-12">진료 절차</h2>
          <div className="grid gap-5 md:grid-cols-4">
            {condition.process.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-line bg-card p-6">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-bold text-paper-soft">
                  {index + 1}
                </span>
                <h3 className="mb-3 text-lg font-bold tracking-tight">{step.title}</h3>
                <p className="text-sm leading-7 text-ink-soft">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-root">FAQ</p>
            <h2 className="ch-section-title">자주 묻는 질문</h2>
            <div className="mt-8 divide-y divide-line rounded-[18px] border border-line bg-card">
              {condition.faqs.map((faq) => (
                <details key={faq.q} className="group p-5">
                  <summary className="cursor-pointer list-none text-lg font-bold text-ink">
                    Q. {faq.q}
                  </summary>
                  <p className="mt-4 text-base leading-8 text-ink-soft">A. {faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="rounded-[18px] border border-line bg-card p-7 md:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-root">Next</p>
            <h2 className="mb-5 text-2xl font-bold tracking-tight">함께 보면 좋은 문서</h2>
            <p className="mb-6 text-base leading-8 text-ink-soft">
              현재 보고 있는 문서와 이어서 확인하면 이해가 더 빠른 진료 정보입니다.
            </p>
            <div className="space-y-4">
              {condition.related.map((item) => (
                <Link key={item.href + item.title} href={item.href} className="group block rounded-2xl border border-line bg-paper-soft p-5 transition hover:-translate-y-1 hover:border-ink hover:bg-white">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-root">같이 이어서 보기</p>
                  <h3 className="mb-2 text-lg font-bold text-ink">{item.title}</h3>
                  <p className="text-sm leading-7 text-ink-soft">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ink group-hover:text-root">
                    보기 <ArrowIcon />
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl rounded-[18px] border border-line bg-paper-soft px-6 py-8 text-base leading-8 text-ink-soft md:px-8">
          <p className="font-bold text-ink">의료 정보 안내</p>
          <p className="mt-2">
            본 콘텐츠는 일반적인 한방 의료 정보 제공을 위한 참고 자료이며, 개별 환자의 진단·처방을 대신할 수 없습니다.
            정확한 진단과 치료 계획은 한의사 진료를 통해 결정해 주세요.
          </p>
        </div>
      </section>
    </main>
  );
}
