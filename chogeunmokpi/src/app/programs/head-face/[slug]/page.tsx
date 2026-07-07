import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getHeadFaceDetailPage, headFaceDetailPages } from "@/lib/head-face-detail-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return headFaceDetailPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getHeadFaceDetailPage(slug);

  if (!page) {
    return { title: "두면부 치료 안내 | 초근목피한의원" };
  }

  const title = `대전 ${page.title} 한방치료 | 두면부 클리닉 | 초근목피한의원`;
  const description = `${page.summary} 대전 유성구 반석동 초근목피한의원의 ${page.title} 한방 진료 안내입니다.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/programs/head-face/${page.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/programs/head-face/${page.slug}`,
      images: [
        {
          url: page.heroImage,
          width: 1200,
          height: 1200,
          alt: page.heroAlt,
        },
      ],
    },
  };
}

export default async function HeadFaceConditionPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getHeadFaceDetailPage(slug);

  if (!page) notFound();

  return (
    <main className="min-h-screen bg-[#f6f2e8] text-[#1f241b]">
      <section className="border-b border-[#d8cfbd] bg-[#f6f2e8]">
        <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 py-12 sm:px-8 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:py-20">
          <div>
            <nav className="mb-10 text-sm font-medium text-[#7c6f5a]">
              <Link href="/" className="hover:text-[#263020]">
                홈
              </Link>
              <span className="mx-2">›</span>
              <Link href="/programs/head-face" className="hover:text-[#263020]">
                두면부 클리닉
              </Link>
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

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#7b5f38]">
              {page.category}
            </p>
            <p className="mb-5 text-base font-semibold text-[#594f3f] keep-words">{page.aliases}</p>
            <h1 className="font-serif text-[3.3rem] font-semibold leading-[1.08] tracking-normal text-[#22281e] sm:text-[4.4rem] lg:text-[5.2rem]">
              {page.title}
            </h1>
            <p className="mt-8 max-w-xl text-xl font-semibold leading-9 text-[#262f22] keep-words">
              {page.headline}
            </p>
            <p className="mt-5 max-w-xl text-lg leading-9 text-[#4b4335] keep-words">
              {page.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="https://m.booking.naver.com/booking/13/bizes/1508188?theme=place&lang=ko&area=pll"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#20291d] px-6 text-base font-bold text-white shadow-[0_12px_24px_rgba(32,41,29,0.22)] transition hover:-translate-y-0.5"
              >
                <IconCalendar />
                진료 예약하기
              </Link>
              <Link
                href="/programs/head-face"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#cdbf9f] bg-white/65 px-6 text-base font-bold text-[#263020] transition hover:-translate-y-0.5 hover:bg-white"
              >
                <IconClipboard />
                두면부 클리닉
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

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Symptom Language"
          title={`${page.title}, 이런 표현을 자주 하시나요?`}
          desc="진료실에서 실제로 자주 나오는 표현입니다. 비슷한 문장이 있다면 원인 분류가 더 쉬워집니다."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {page.visitPhrases.map((phrase) => (
            <div key={phrase} className="rounded-2xl border border-[#d8cfbd] bg-white/72 p-6 shadow-sm">
              <p className="text-lg font-bold leading-8 text-[#20251c] keep-words">“{phrase}”</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d8cfbd] bg-[#fffdf7]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Check Point"
            title="함께 나타나는 신호를 확인하세요"
            desc="두면부 증상은 머리, 귀, 눈, 목, 위장, 수면이 서로 연결되어 나타나는 경우가 많습니다."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
        <div className="rounded-[24px] border border-[#1f2937] bg-white p-8 shadow-[0_20px_45px_rgba(17,24,39,0.08)] sm:p-10">
          <div className="space-y-6 text-lg leading-9 text-[#28311f] keep-words">
            {page.diagnosis.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-9 border-t border-[#1f2937] pt-6 text-sm font-black text-[#0f172a]">
            문진 · 맥진 · 복진 · 경항부 긴장 평가
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
              src={page.heroImage}
              alt={page.heroAlt}
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
          desc="겉으로 드러난 증상보다, 반복을 만드는 몸의 환경을 찾는 것이 중요합니다."
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
            title="유형별 맞춤 솔루션"
            desc="같은 증상명이라도 통증의 결, 동반 증상, 몸의 약점에 따라 치료 방향이 달라집니다."
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
                      <li key={symptom} className="flex gap-2 keep-words">
                        <span aria-hidden="true">•</span>
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 rounded-2xl bg-[#f1eadb] p-5">
                  <p className="text-sm font-black text-[#7b5f38]">진단 패턴</p>
                  <p className="mt-2 text-lg font-black text-[#111827] keep-words">{pattern.pattern}</p>
                </div>
                <div className="mt-5 border-t border-[#d8cfbd] pt-5">
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
          eyebrow="Recovery Timeline"
          title="치료 경과는 이렇게 봅니다"
          desc="만성 두면부 증상은 빠른 완화와 재발 방지 관리를 나누어 접근해야 합니다."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {page.progress.map((item) => (
            <article key={item.phase} className="rounded-[22px] border border-[#d8cfbd] bg-white/78 p-7">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#7b5f38]">{item.phase}</p>
              <h3 className="mt-4 text-2xl font-black text-[#111827] keep-words">{item.title}</h3>
              <p className="mt-4 text-lg leading-8 text-[#4b4335] keep-words">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#d8cfbd] bg-[#fffdf7]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <SectionHeading
            eyebrow="Treatment Program"
            title="초근목피 두면부 치료 프로그램"
            desc="증상 완화, 원인 관리, 재발 방지를 함께 설계합니다."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {page.programs.map((program) => (
              <article key={program.title} className="rounded-[22px] border border-[#d8cfbd] bg-white p-7 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ede8dc] text-[#263020]">
                  <IconLeaf />
                </div>
                <h3 className="text-2xl font-black text-[#111827] keep-words">{program.title}</h3>
                <p className="mt-4 text-lg leading-8 text-[#4b4335] keep-words">{program.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#7b5f38]">Clinical Notes</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-[#0f172a] sm:text-5xl">진료 노트</h2>
              <p className="mt-3 text-lg font-semibold text-[#394231] keep-words">
                초근목피와 함께 두면부 증상을 관리한 분들의 이야기입니다.
              </p>
            </div>
            <Link href="/community/reviews" className="text-base font-black text-[#111827] hover:underline">
              전체 후기 보기 →
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {page.reviews.map((review) => (
              <article key={review.title} className="relative overflow-hidden rounded-[22px] bg-[#f6f7f4] p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-sm font-black text-[#111827]">치료 사례</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#99a391] bg-white text-[#263020]">
                    <IconLock />
                  </span>
                </div>
                <h3 className="min-h-[96px] text-xl font-black leading-8 text-[#111827] keep-words">{review.title}</h3>
                <div className="mt-6 h-16 rounded-xl bg-gradient-to-r from-[#e6e8e1] via-[#f4f5f1] to-[#e6e8e1] blur-[3px]" />
                <p className="mt-6 text-sm font-bold text-[#111827]">
                  환자: {review.patient} <span className="mx-2">|</span> 담당의: 이호근
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#111827] bg-white p-8 text-center">
            <p className="text-lg font-black text-[#111827]">3+개의 실제 치료 사례가 더 있습니다</p>
            <div className="mt-6 flex justify-center gap-3">
              <Link href="/signup" className="rounded-xl bg-[#20291d] px-6 py-4 text-base font-black text-white">
                회원가입하고 후기 보기
              </Link>
              <Link href="/login" className="rounded-xl border border-[#111827] px-6 py-4 text-base font-black text-[#111827]">
                로그인
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8cfbd] bg-[#efe8d8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-24">
          <aside className="rounded-[24px] border border-[#d8cfbd] bg-white/78 p-8">
            <div className="flex items-center gap-4">
              <Image
                src="/images/doctors/lee-ho-geun.png"
                alt="이호근 대표원장"
                width={72}
                height={72}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-black text-[#7b5f38]">담당 의료진</p>
                <h2 className="text-2xl font-black text-[#111827]">대표원장 이호근</h2>
              </div>
            </div>
            <p className="mt-6 text-xl font-semibold leading-9 text-[#2c3526] keep-words">
              두면부 증상은 머리에 나타나지만 원인은 몸 전체의 순환, 긴장, 소화, 수면에 숨어 있는 경우가 많습니다.
            </p>
            <Link href="/about/doctors" className="mt-7 inline-flex font-black text-[#111827] hover:underline">
              의료진 소개 더보기 →
            </Link>
          </aside>

          <div>
            <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />
            <div className="mt-8 space-y-4">
              {page.faqs.map((faq) => (
                <details key={faq.q} className="group rounded-2xl border border-[#d8cfbd] bg-white p-6">
                  <summary className="cursor-pointer text-xl font-black text-[#111827] keep-words">
                    Q. {faq.q}
                  </summary>
                  <p className="mt-4 text-lg leading-8 text-[#4b4335] keep-words">A. {faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#20291d] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d6c59f]">Next Step</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl keep-words">
              반복되는 {page.title}, 원인을 나누어 보면 길이 보입니다
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#f2ead8] keep-words">
              진통제나 일시적인 휴식으로만 버티고 있다면, 증상을 반복시키는 몸의 흐름을 함께 확인해보세요.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="https://m.booking.naver.com/booking/13/bizes/1508188?theme=place&lang=ko&area=pll"
              className="flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-base font-black text-[#20291d]"
            >
              진료 예약하기
            </Link>
            <Link
              href="/programs/head-face"
              className="flex min-h-12 items-center justify-center rounded-full border border-white/35 px-6 text-base font-black text-white"
            >
              두면부 클리닉 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f2e8] px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-[#d8cfbd] bg-white/65 p-6 text-sm leading-7 text-[#5b5242] keep-words">
          <strong className="text-[#111827]">의료 정보 안내</strong>
          <br />
          본 콘텐츠는 일반적인 한방 의료 정보 제공을 위한 참고 자료이며, 개별 환자의 진단·처방을 대신할 수 없습니다. 갑작스러운 마비, 언어장애, 극심한 두통, 청력 저하 등 급성 신경학적 증상이 있으면 즉시 응급 진료를 받으세요.
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#7b5f38]">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[#0f172a] sm:text-5xl keep-words">
        {title}
      </h2>
      {desc ? <p className="mt-4 text-lg leading-8 text-[#5a5040] keep-words">{desc}</p> : null}
    </div>
  );
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

function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 14-9 0 10-4 14-9 14" />
      <path d="M4 20c4-7 8-10 14-14" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
