import Image from "next/image";
import Link from "next/link";
import type { ClinicPageData } from "@/lib/clinic-pages";
import { doctors } from "@/lib/site-data";

function IconCalendar() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h6" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5 14.9 9l7.1.6-5.4 4.6 1.7 7-6.3-3.9L5.7 21.2l1.7-7-5.4-4.6L9.1 9 12 2.5Z" />
    </svg>
  );
}

const doctor = doctors[0];

export default function ClinicProgramPage({ data }: { data: ClinicPageData }) {
  return (
    <main className="bg-paper">
      <section className="relative overflow-hidden border-b border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-14 md:grid-cols-[0.92fr_1.08fr]">
          <div>
            <div className="mb-16 inline-flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3 shadow-sm shadow-ink/5">
              <div className="relative h-9 w-9 overflow-hidden rounded-full bg-paper-soft">
                <Image src={doctor.photo} alt={doctor.name} fill sizes="36px" quality={90} className="object-cover" />
              </div>
              <div className="leading-tight">
                <p className="text-xs text-ink-soft">의료 감수</p>
                <p className="text-sm font-semibold text-ink">{doctor.name} {doctor.role}</p>
              </div>
            </div>

            <p className="mb-4 keep-words text-base font-semibold leading-relaxed text-ink">{data.subtitle}</p>
            <h1 className="font-display text-[4.3rem] leading-[0.98] tracking-normal text-ink md:text-[5.5rem]">
              {data.title.replace(" 클리닉", "")}
              <span className="block">클리닉</span>
            </h1>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/reserve" className="ch-btn-primary gap-2">
                <IconCalendar /> 진료 예약하기
              </Link>
              <a href="#mini-diagnosis" className="ch-btn-secondary gap-2">
                <IconClipboard /> 자가진단
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/4.65] overflow-hidden rounded-2xl border border-line bg-card shadow-sm shadow-ink/5">
              <Image src={data.heroImage} alt={data.heroAlt} fill sizes="(max-width: 768px) 92vw, 540px" quality={95} priority className="object-cover" />
            </div>
            <div className="absolute -bottom-8 left-8 right-8 rounded-2xl border border-line bg-card/95 p-6 shadow-2xl shadow-ink/10 backdrop-blur">
              <p className="mb-4 font-semibold text-ink">{data.eyebrow}</p>
              <div className="space-y-3 keep-words text-sm font-medium text-ink">
                {data.badges.map((badge) => (
                  <p key={badge} className="flex items-center gap-3">
                    <span className="text-root"><IconStar /></span>
                    {badge}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="ch-section-title keep-words">{data.concernsTitle}</h2>
            <p className="mx-auto mt-4 max-w-2xl keep-words leading-relaxed text-ink-soft">{data.concernsLead}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {data.concerns.map((item) => (
              <div key={item.title} className="ch-card ch-card-hover min-h-[190px]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-paper-soft text-2xl">{item.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="keep-words text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative aspect-[4/3.45] overflow-hidden rounded-2xl border border-line bg-card shadow-sm shadow-ink/5">
            <Image src={data.heroImage} alt={data.heroAlt} fill sizes="(max-width: 768px) 92vw, 460px" quality={92} className="object-cover" />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-root">{data.diagnosisLabel}</p>
            <h2 className="ch-section-title keep-words">{data.diagnosisTitle}</h2>
            <div className="mt-7 space-y-4 keep-words leading-loose text-ink-soft">
              {data.diagnosisParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold tracking-wide text-root">CORE SOLUTION</p>
            <h2 className="ch-section-title">핵심 치료 원리</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {data.principles.map((item, index) => (
              <div key={item.title} className="ch-card ch-card-hover">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-line text-lg font-medium text-ink">{index + 1}</span>
                <h3 className="mb-3 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="keep-words text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mini-diagnosis" className="border-y border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="ch-section-title">{data.quizTitle}</h2>
            <p className="mt-3 text-ink-soft">1분이면 충분합니다. 현재 필요한 관리 방향을 확인해보세요.</p>
          </div>
          <div className="ch-card-lg bg-card md:p-10">
            <p className="mb-6 text-lg font-semibold text-ink">{data.quizQuestion}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.quizOptions.map((option) => (
                <Link key={option} href="/reserve" className="rounded-2xl border border-line bg-paper-soft px-5 py-4 text-sm font-medium text-ink transition hover:-translate-y-1 hover:border-root/40 hover:bg-card hover:shadow-lg hover:shadow-ink/10">
                  {option}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="ch-section-title">{data.solutionTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl keep-words text-ink-soft">{data.solutionLead}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {data.solutions.map((solution, index) => (
              <div key={solution.title} className="ch-card ch-card-hover">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-card">{index + 1}</span>
                <h3 className="mb-5 keep-words text-xl font-bold leading-snug text-ink">{solution.title}</h3>
                <p className="mb-3 text-sm font-semibold text-root">주요 증상</p>
                <ul className="mb-5 space-y-2 text-sm text-ink-soft">
                  {solution.symptoms.map((symptom) => (
                    <li key={symptom}>• {symptom}</li>
                  ))}
                </ul>
                <p className="mb-2 text-sm font-semibold text-root">진단 패턴</p>
                <p className="mb-5 text-sm text-ink-soft">{solution.pattern}</p>
                <p className="mb-2 text-sm font-semibold text-root">추천 치료</p>
                <p className="mb-3 font-semibold text-ink">{solution.treatment}</p>
                <p className="keep-words text-sm leading-relaxed text-ink-soft">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="ch-section-title">{data.programTitle}</h2>
            <p className="mt-3 text-ink-soft">개인의 체질과 생활 리듬에 맞춘 한방 치료 프로그램입니다.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {data.programs.map((program) => (
              <div key={program.title} className="ch-card ch-card-hover text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-paper-soft text-2xl">{program.icon}</div>
                <h3 className="mb-3 text-lg font-semibold text-ink">{program.title}</h3>
                <p className="keep-words text-sm leading-relaxed text-ink-soft">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="ch-card-lg mb-16 flex flex-col gap-6 bg-paper-soft md:flex-row md:items-center md:p-10">
            <div className="relative aspect-square w-full max-w-[180px] shrink-0 overflow-hidden rounded-2xl border border-line bg-card shadow-sm shadow-ink/5">
              <Image src={doctor.photo} alt={`${doctor.role} ${doctor.name}`} fill sizes="180px" quality={95} className="object-cover" />
            </div>
            <div>
              <p className="mb-2 text-xs text-ink-soft">담당 의료진</p>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-ink">{doctor.role} {doctor.name}</h3>
              <p className="mb-4 keep-words leading-relaxed text-ink-soft">{data.doctorMessage}</p>
              <Link href={`/about/doctors/${doctor.slug}`} className="text-sm font-medium text-root hover:text-root-dark">의료진 소개 더보기 →</Link>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-2 text-xs font-semibold tracking-wide text-root">TREATMENT PROCESS</p>
            <h2 className="ch-section-title mb-12">{data.processTitle}</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {data.process.map((item, index) => (
              <div key={item.title} className="ch-card flex min-h-[190px] flex-col items-center text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-line text-lg font-medium text-ink">{index + 1}</span>
                <p className="mb-2 text-lg font-semibold leading-snug text-ink">{item.title}</p>
                <p className="keep-words text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="ch-section-title mb-6 text-2xl md:text-3xl">자주 묻는 질문</h2>
              <div className="space-y-3">
                {data.faqs.map((faq) => (
                  <div key={faq.q} className="ch-card p-5">
                    <p className="mb-2 font-medium text-ink">Q. {faq.q}</p>
                    <p className="keep-words text-sm leading-relaxed text-ink-soft">A. {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="ch-card-lg flex flex-col justify-center text-center">
              <h3 className="mb-3 text-xl font-bold tracking-tight text-ink">비대면 진료 안내</h3>
              <p className="mb-6 keep-words text-sm leading-relaxed text-ink-soft">내원하지 않아도 진료와 처방 상담이 가능합니다. 간편하게 상담받아보세요.</p>
              <Link href="/reserve" className="ch-btn-primary">상담 예약</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <p className="mb-2 text-xs text-ink-soft">세부 질환 안내</p>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="ch-section-title">{data.conditionsTitle}</h2>
              <p className="mt-3 keep-words text-sm text-ink-soft">해당 질환을 클릭하면 블로그형 상세 치료 안내 페이지로 이동합니다.</p>
            </div>
            <Link href="/reserve" className="ch-btn-primary px-5 py-2.5">상담 예약</Link>
          </div>
          <div className="mb-4 border-b border-line pb-3 text-sm text-root">{data.title}</div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {data.conditions.map((condition) => (
              <Link key={condition.slug} href={`/programs/${data.slug}/${condition.slug}`} className="ch-card ch-card-hover flex min-h-[96px] items-start justify-between gap-4 p-5">
                <span className="font-medium text-ink">{condition.title}</span>
                <span className="whitespace-nowrap text-sm text-root">자세히 보기 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
