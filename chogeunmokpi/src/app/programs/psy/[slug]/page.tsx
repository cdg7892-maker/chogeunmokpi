import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMindCondition, mindConditions } from "@/lib/mind-conditions";
import { buildSearchDescription, programImageMetadata } from "@/lib/seo";
import { mindSeoTitles } from "@/lib/seo-titles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return mindConditions.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getMindCondition(slug);

  if (!page) {
    return { title: "마음건강 질환 안내 | 초근목피한의원" };
  }

  const title =
    mindSeoTitles[page.slug] ??
    `대전 ${page.title} 유성구 한의원 한약 - 초근목피한의원 대전 반석동`;
  const description = buildSearchDescription(page.title, page.summary);

  return {
    title,
    description,
    alternates: {
      canonical: `/programs/psy/${page.slug}`,
    },
    ...programImageMetadata({
      title,
      description,
      url: `/programs/psy/${page.slug}`,
      image: page.heroImage,
      alt: page.heroAlt,
    }),
  };
}

export default async function MindConditionPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getMindCondition(slug);

  if (!page) notFound();

  return (
    <main className="min-h-screen bg-[#f6f2e8] text-[#1f241b]">
      <section className="border-b border-[#d8cfbd] bg-[#f6f2e8]">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-12 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
          <div>
            <nav className="mb-10 text-sm font-medium text-[#7c6f5a]">
              <Link href="/" className="hover:text-[#263020]">홈</Link>
              <span className="mx-2">›</span>
              <Link href="/programs/mind" className="hover:text-[#263020]">마음건강 클리닉</Link>
              <span className="mx-2">›</span>
              <span className="text-[#263020]">{page.title}</span>
            </nav>

            <div className="mb-12 inline-flex items-center gap-3 rounded-2xl border border-[#cdbf9f] bg-white/55 px-4 py-3 shadow-sm">
              <Image
                src="/images/doctors/lee-ho-geun.png"
                alt="이호근 대표원장"
                width={42}
                height={42}
                className="rounded-full object-cover"
              />
              <div className="leading-tight">
                <p className="text-xs font-semibold text-[#756850]">의료 감수</p>
                <p className="text-sm font-bold text-[#111827]">이호근 대표원장</p>
              </div>
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#7b5f38]">{page.category}</p>
            <p className="mb-5 text-base font-semibold text-[#594f3f] keep-words">{page.aliases}</p>
            <h1 className="font-serif text-[3.3rem] font-semibold leading-[1.08] tracking-normal text-[#22281e] sm:text-[4.4rem] lg:text-[5.2rem]">
              {page.title}
            </h1>
            <p className="mt-8 max-w-xl text-xl font-semibold leading-9 text-[#262f22] keep-words">{page.headline}</p>
            <p className="mt-5 max-w-xl text-lg leading-9 text-[#4b4335] keep-words">{page.intro}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="https://m.booking.naver.com/booking/13/bizes/1508188?theme=place&lang=ko&area=pll"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#20291d] px-6 text-base font-bold text-white shadow-[0_12px_24px_rgba(32,41,29,0.22)] transition hover:-translate-y-0.5"
              >
                <IconCalendar />
                진료 예약하기
              </Link>
              <Link
                href="/programs/mind"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#cdbf9f] bg-white/65 px-6 text-base font-bold text-[#263020] transition hover:-translate-y-0.5 hover:bg-white"
              >
                <IconClipboard />
                마음건강 클리닉
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[26px] border border-[#d2c5aa] bg-white shadow-[0_26px_55px_rgba(42,35,24,0.13)]">
              <Image
                src={page.heroImage}
                alt={page.heroAlt}
                width={1200}
                height={1200}
                priority
                className="aspect-[4/4.55] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-[#cdbf9f] bg-white/92 p-5 shadow-[0_18px_35px_rgba(42,35,24,0.16)] backdrop-blur">
              <div className="grid gap-3 sm:grid-cols-2">
                {page.badges.map((badge) => (
                  <div key={badge} className="flex items-center gap-3 text-base font-bold text-[#2b271f]">
                    <IconStar />
                    <span className="keep-words">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-nosnippet className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Symptom Language"
          title={`${page.title}, 이런 표현을 자주 하시나요?`}
          desc="진료실에서 실제로 자주 나오는 표현들입니다. 비슷한 문장이 있다면 몸의 조절력이 흔들리고 있다는 신호일 수 있습니다."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.phrases.map((phrase) => (
            <div key={phrase} className="rounded-2xl border border-[#d8cfbd] bg-white/72 p-6 shadow-sm">
              <p className="text-lg font-bold leading-8 text-[#20251c] keep-words">“{phrase}”</p>
            </div>
          ))}
        </div>
      </section>

      <section data-nosnippet className="border-y border-[#d8cfbd] bg-[#fffdf7]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Check Point"
            title="함께 살펴야 하는 신호"
            desc="마음건강 증상은 수면, 소화, 체온, 흉부 긴장, 피로와 연결되어 나타나는 경우가 많습니다."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.signals.map((signal, index) => (
              <div
                key={signal}
                className="rounded-2xl border border-[#d8cfbd] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(42,35,24,0.10)]"
              >
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#eef0e8] text-sm font-black text-[#263020]">
                  {index + 1}
                </span>
                <p className="text-lg font-bold leading-8 text-[#20251c] keep-words">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7b5f38]">Special Diagnosis</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#0f172a] sm:text-5xl keep-words">
            {page.diagnosisTitle}
          </h2>
          <div className="mt-8 overflow-hidden rounded-[24px] border border-[#d8cfbd] bg-white p-3 shadow-[0_20px_45px_rgba(42,35,24,0.08)]">
            <Image
              src={page.diagnosisImage}
              alt={page.diagnosisAlt}
              width={1200}
              height={1200}
              className="aspect-square w-full rounded-[18px] object-cover"
            />
          </div>
        </div>
        <div className="rounded-[24px] border border-[#1f2937] bg-white p-8 shadow-[0_20px_45px_rgba(17,24,39,0.08)] sm:p-10">
          <div className="space-y-6 text-lg leading-9 text-[#28311f] keep-words">
            {page.diagnosis.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-9 border-t border-[#1f2937] pt-6 text-sm font-black text-[#0f172a]">
            문진 · 복진 · 맥진 · 수면 리듬 평가
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8cfbd] bg-[#efe8d8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#263020]">Core Solution</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#0f172a] sm:text-5xl lg:text-6xl keep-words">
              {page.coreTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5a5040] keep-words">{page.coreLead}</p>

            <div className="mt-10 space-y-7">
              {page.principles.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[52px_1fr] gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-black text-[#0f172a]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#0f172a] keep-words">{item.title}</h3>
                    <p className="mt-2 text-lg leading-8 text-[#384231] keep-words">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#d8cfbd] bg-white p-4 shadow-[0_24px_45px_rgba(42,35,24,0.12)]">
            <Image
              src={page.careImage}
              alt={page.careAlt}
              width={1200}
              height={1200}
              className="aspect-square w-full rounded-[22px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Root Causes"
          title={`${page.title}을 반복시키는 주요 원인`}
          desc="겉으로 보이는 증상보다, 몸이 왜 계속 예민해지고 회복하지 못하는지를 찾는 것이 중요합니다."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {page.causes.map((cause, index) => (
            <article key={cause.title} className="rounded-[22px] border border-[#d8cfbd] bg-white/78 p-7 shadow-sm">
              <span className="text-3xl font-black text-[#b29a6d]">{index + 1}</span>
              <h3 className="mt-5 text-2xl font-black text-[#111827] keep-words">{cause.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#4b4335] keep-words">{cause.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d8cfbd] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Personalized Care"
            title="유형별 맞춤 치료 방향"
            desc="같은 질환명이라도 동반 증상과 몸의 약한 축에 따라 치료 방향은 달라집니다."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {page.patterns.map((pattern, index) => (
              <article key={pattern.title} className="rounded-[22px] border border-[#d2c5aa] bg-[#fffdf7] p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#20291d] text-lg font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-2xl font-black leading-8 text-[#111827] keep-words">{pattern.title}</h3>
                <div className="mt-6">
                  <p className="text-sm font-black text-[#7b5f38]">주요 증상</p>
                  <ul className="mt-3 space-y-2 text-base font-semibold text-[#394231]">
                    {pattern.symptoms.map((symptom) => (
                      <li key={symptom} className="flex gap-2">
                        <span className="text-[#9a7b48]">•</span>
                        <span className="keep-words">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 rounded-2xl bg-white p-5">
                  <p className="text-sm font-black text-[#7b5f38]">진단 패턴</p>
                  <p className="mt-2 text-base font-bold text-[#20251c] keep-words">{pattern.pattern}</p>
                </div>
                <div className="mt-5">
                  <p className="text-sm font-black text-[#7b5f38]">추천 치료</p>
                  <h4 className="mt-2 text-xl font-black text-[#111827] keep-words">{pattern.treatment}</h4>
                  <p className="mt-3 text-base leading-7 text-[#4b4335] keep-words">{pattern.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Program"
          title="마음건강 치료 프로그램"
          desc="증상을 누르는 데 그치지 않고 몸의 회복력과 생활 리듬을 함께 세웁니다."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {page.programs.map((program) => (
            <article key={program.title} className="rounded-[22px] border border-[#d8cfbd] bg-white/80 p-7 shadow-sm">
              <h3 className="text-2xl font-black text-[#111827] keep-words">{program.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#4b4335] keep-words">{program.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d8cfbd] bg-[#fffdf7]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Treatment Process"
            title="치료 경과의 흐름"
            desc="증상 억제가 아니라 회복 리듬이 돌아오는 과정을 단계별로 확인합니다."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {page.progress.map((item) => (
              <article key={item.phase} className="rounded-[22px] border border-[#d2c5aa] bg-white p-7 shadow-sm">
                <p className="text-sm font-black text-[#7b5f38]">{item.phase}</p>
                <h3 className="mt-4 text-2xl font-black text-[#111827] keep-words">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#4b4335] keep-words">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7b5f38]">Clinical Notes</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#0f172a]">진료 노트</h2>
            <p className="mt-3 text-base font-semibold text-[#4b4335]">제목은 확인하실 수 있으며, 자세한 내용은 로그인 후 열람됩니다.</p>
          </div>
          <Link href="/community/reviews" className="text-base font-black text-[#20291d] hover:text-[#7b5f38]">
            전체 후기 보기 →
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {page.reviews.map((review) => (
            <article key={review.title} className="relative overflow-hidden rounded-[22px] border border-[#d8cfbd] bg-white p-7 shadow-sm">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f3efe4] px-3 py-1 text-xs font-black text-[#263020]">
                치료 사례 <IconLock />
              </div>
              <h3 className="text-xl font-black leading-8 text-[#111827] keep-words">{review.title}</h3>
              <div className="mt-6 h-16 rounded-xl bg-gradient-to-r from-[#d8cfbd] via-[#f2ede3] to-[#d8cfbd] blur-sm" />
              <p className="mt-6 text-sm font-bold text-[#4b4335]">환자: {review.patient} | 담당의: 이호근</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[22px] border border-[#1f2937] bg-white p-8 text-center shadow-sm">
          <p className="text-lg font-black text-[#111827]">3+개의 실제 치료 사례가 더 있습니다</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/community/reviews" className="rounded-xl bg-[#20291d] px-6 py-3 text-sm font-black text-white shadow-sm">
              로그인하고 보기
            </Link>
            <Link href="/reserve" className="rounded-xl border border-[#1f2937] px-6 py-3 text-sm font-black text-[#111827]">
              상담 예약
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8cfbd] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" desc="진료 전 많이 궁금해하시는 내용을 정리했습니다." />
          <div className="mt-10 divide-y divide-[#d8cfbd] rounded-[22px] border border-[#d8cfbd] bg-[#fffdf7]">
            {page.faqs.map((faq) => (
              <details key={faq.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-black text-[#111827] keep-words">
                  {faq.q}
                  <span className="text-2xl text-[#7b5f38] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-base leading-8 text-[#4b4335] keep-words">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Next Reading"
          title="함께 보면 좋은 문서"
          desc="현재 증상과 연결된 다른 진료 정보를 이어서 확인해보세요."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {page.related.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-[22px] border border-[#d8cfbd] bg-white/80 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(42,35,24,0.10)]">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7b5f38]">같이 이어서 보기</p>
              <h3 className="mt-4 text-2xl font-black text-[#111827] keep-words">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#4b4335] keep-words">{item.body}</p>
              <span className="mt-6 inline-flex text-sm font-black text-[#20291d]">문서 보기 →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-[#d8cfbd] bg-[#20291d]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 text-white sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d8cfbd]">Remote Care</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold keep-words">{page.title}, 지금 상담하세요</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78 keep-words">
              증상 기록과 기존 검사 이력을 바탕으로 내원 및 비대면 상담 방향을 안내해드립니다.
            </p>
          </div>
          <Link
            href="https://m.booking.naver.com/booking/13/bizes/1508188?theme=place&lang=ko&area=pll"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 text-base font-black text-[#20291d] shadow-sm transition hover:-translate-y-0.5"
          >
            진료 예약하기
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="rounded-2xl border border-[#d8cfbd] bg-white/70 p-6 text-sm leading-7 text-[#5a5040]">
          <strong className="text-[#20291d]">의료 정보 안내</strong>
          <p className="mt-2 keep-words">
            본 콘텐츠는 일반적인 한방 의료 정보 제공을 위한 참고 자료이며, 개별 환자의 진단·처방을 대신할 수 없습니다. 정확한 진단과 치료 계획은 한의사 진료를 통해 결정해주세요.
          </p>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7b5f38]">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#0f172a] sm:text-5xl keep-words">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-[#4b4335] keep-words">{desc}</p>
    </div>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect x="4" y="5" width="16" height="16" rx="2" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 4h6l1 2h3v16H5V6h3l1-2Z" />
      <path d="M9 12h6M9 16h6" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#7b5f38]" fill="currentColor">
      <path d="m12 2 2.7 6.4 6.9.6-5.2 4.5 1.6 6.7-6-3.5-6 3.5 1.6-6.7L2.4 9l6.9-.6L12 2Z" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
