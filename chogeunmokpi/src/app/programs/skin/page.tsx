import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import SkinQuiz from "@/components/programs/SkinQuiz";
import { skinConditions } from "@/lib/skin-conditions";
import { doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 피부질환 클리닉 | 아토피·습진·건선·두드러기 한방치료 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 난치성 피부질환 클리닉입니다. 아토피, 습진, 건선, 지루성 피부염, 두드러기를 피부 장벽과 면역 균형 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/skin",
  },
};

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

function IconCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
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

function IconLeaf() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 21c8-4 12-10 14-18-8 1-14 5-16 12 0 3 1 5 2 6Z" />
      <path d="M9 15c2-2 4-4 8-7" />
    </svg>
  );
}

function IconHeat() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-3.2-2-5.3-4-7.4-.7 2.2-2.2 3.5-4.3 4.3.4-3.2-.7-5.6-3.2-7.9C6.5 7 5 9.8 5 15a7 7 0 0 0 7 7Z" />
    </svg>
  );
}

function IconBarrier() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function IconDrop() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3C8 8 6 11 6 15a6 6 0 0 0 12 0c0-4-2-7-6-12Z" />
    </svg>
  );
}

function ProgramImage({ src, alt, children }: { src: string; alt: string; children?: ReactNode }) {
  return (
    <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl border border-line bg-paper shadow-sm shadow-ink/5">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 90vw, 500px"
        quality={95}
        className="object-cover"
        priority={src.includes("hero")}
      />
      {children}
    </div>
  );
}

const symptoms = [
  {
    Icon: IconLeaf,
    title: "아토피·건선",
    desc: "극심한 가려움과 건조함이 반복되고, 연고를 줄이면 다시 심해집니다.",
  },
  {
    Icon: IconHeat,
    title: "난치성 여드름",
    desc: "성인이 되어서도 염증성 여드름이 반복되고 얼굴 열감이 함께 올라옵니다.",
  },
  {
    Icon: IconBarrier,
    title: "지루성 피부염",
    desc: "얼굴이 붉어지고 각질이 일어나며, 피지와 열감이 반복됩니다.",
  },
  {
    Icon: IconDrop,
    title: "두드러기·습진",
    desc: "밤마다 가려워 잠을 설치고, 긁으면 진물과 상처가 남습니다.",
  },
];

const mechanisms = [
  {
    n: "1",
    title: "청열해독",
    desc: "체내에 쌓인 열독과 노폐물을 덜어내 가려움과 염증 반응을 낮춥니다.",
  },
  {
    n: "2",
    title: "면역 안정",
    desc: "과민해진 면역 반응과 비위·간 해독 기능을 함께 살펴 재발 흐름을 줄입니다.",
  },
  {
    n: "3",
    title: "피부 장벽 회복",
    desc: "손상된 피부가 다시 촉촉하게 회복되도록 재생력과 보습력을 높입니다.",
  },
];

const solutions = [
  {
    n: "1",
    title: "진물이 나고 가려운\n습진·아토피",
    symptoms: ["밤에 가려움이 심함", "긁으면 진물과 피딱지", "피부가 붉고 열감"],
    pattern: "비위습열, 혈열",
    treatment: "청열 해독 한약",
    desc: "습열을 제거하고 염증을 가라앉혀 가려움과 붉은기를 줄입니다.",
  },
  {
    n: "2",
    title: "피부가 건조하고 갈라지는\n건선·만성 아토피",
    symptoms: ["하얀 각질이 일어남", "피부가 두꺼워짐", "추우면 더 심해짐"],
    pattern: "혈허풍조, 음허",
    treatment: "보혈 윤조 한약",
    desc: "혈을 보충하고 피부를 촉촉하게 해 장벽 회복과 재생을 돕습니다.",
  },
  {
    n: "3",
    title: "얼굴에 열이 오르고 붉어지는\n안면홍조·지루성 피부염",
    symptoms: ["감정 변화 시 얼굴이 붉어짐", "상열감이 심함", "피지와 각질이 많음"],
    pattern: "상열하한, 심화",
    treatment: "수승화강 한약",
    desc: "위로 뜬 열을 내리고 순환을 도와 붉은기와 열감을 다스립니다.",
  },
];

const treatments = [
  {
    title: "체질 맞춤 한약",
    desc: "습열, 혈허, 상열 등 개인의 피부 패턴에 맞춰 독소 배출과 면역 회복을 돕습니다.",
  },
  {
    title: "배독 침·약침 치료",
    desc: "피부의 열과 독소 배출을 돕는 경혈을 자극해 염증과 가려움을 완화합니다.",
  },
  {
    title: "한방 외용 관리",
    desc: "스테로이드 의존을 줄이도록 피부 장벽을 보호하고 진정시키는 외용 관리를 병행합니다.",
  },
];

const reviews = [
  {
    title: "[28세 남성, 화농성 여드름] 턱과 볼 주변 염증성 여드름이 반복됐습니다.",
    summary: "피부과 치료 후 재발을 반복했고 소화 불량과 상열감을 함께 호소했습니다.",
    patient: "이**",
  },
  {
    title: "[35세 여성, 만성 아토피] 목과 팔 오금의 태선화와 가려움이 심했습니다.",
    summary: "어릴 때부터 지속된 아토피와 장기간 연고 사용 후 피부 얇아짐이 있었습니다.",
    patient: "박**",
  },
  {
    title: "[42세 여성, 안면홍조] 감정 변화와 온도차에 얼굴이 쉽게 붉어졌습니다.",
    summary: "상열하한 흐름과 스트레스가 겹치며 얼굴 열감과 화끈거림이 반복됐습니다.",
    patient: "최**",
  },
];

const process = [
  { n: "1", title: "4축 기능평가", desc: "맥진과 설문을 통해 피부 질환의 내과적 원인을 찾습니다." },
  { n: "2", title: "해독·면역 치료", desc: "한약과 침 치료로 독소를 배출하고 면역계를 안정시킵니다." },
  { n: "3", title: "피부 재생 관리", desc: "약침과 외용 관리로 손상된 피부 장벽 회복을 돕습니다." },
  { n: "4", title: "생활 습관 교정", desc: "식이와 수면, 보습 관리를 조정해 재발을 줄입니다." },
];

const faqs = [
  {
    q: "스테로이드를 끊어도 되나요?",
    a: "갑자기 중단하면 리바운드가 올 수 있습니다. 피부 면역을 회복시키며 서서히 줄이는 방향을 안내합니다.",
  },
  {
    q: "치료 기간은 얼마나 걸리나요?",
    a: "피부 턴오버와 만성도에 따라 다르지만, 반복성 피부질환은 보통 3개월 이상 꾸준한 관리가 필요합니다.",
  },
  {
    q: "명현현상이 있나요?",
    a: "치료 초기 배출 반응처럼 일시적인 변화가 있을 수 있어, 경과를 보며 처방과 관리를 조정합니다.",
  },
];

const skinDoctor = doctors[0];

export default function SkinProgramPage() {
  return (
    <main className="skin-page">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:py-14 md:min-h-[720px] md:grid-cols-[0.95fr_1.05fr] md:gap-12 md:py-20">
          <div className="flex flex-col items-start">
            <div className="mb-12 inline-flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-2.5 shadow-sm shadow-ink/5 md:mb-24">
              <span className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image src={skinDoctor.photo} alt={skinDoctor.name} fill sizes="32px" quality={90} className="object-cover" />
              </span>
              <span className="text-xs leading-tight text-ink-soft">
                의료 감수
                <br />
                <span className="text-sm font-semibold text-ink">
                  {skinDoctor.name} {skinDoctor.role}
                </span>
              </span>
            </div>

            <p className="mb-5 max-w-md text-[15px] leading-7 text-ink-soft sm:text-base">
              피부는 내 몸의 거울,
              <br />
              속부터 맑아져야 끝납니다.
            </p>
            <h1 className="font-display text-[3.35rem] leading-[1.08] text-ink sm:text-[4.25rem] md:text-[5.75rem]">
              난치성
              <br />
              피부질환
            </h1>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <Link href="/reserve" className="ch-btn-primary px-5 py-3.5 text-sm sm:px-7 sm:py-4 sm:text-base">
                <IconCalendar /> 진료 예약하기
              </Link>
              <a href="#quiz" className="ch-btn-secondary px-5 py-3.5 text-sm sm:px-7 sm:py-4 sm:text-base">
                <IconClipboard /> 피부질환 자가진단
              </a>
            </div>
          </div>

          <div className="relative">
            <ProgramImage src="/images/programs/skin-hero.png" alt="난치성 피부질환 상담을 기다리는 한의원 공간" />
            <div className="ch-card absolute -bottom-7 left-1/2 w-[88%] -translate-x-1/2 p-4 md:-bottom-8 md:left-auto md:right-4 md:w-[82%] md:translate-x-0 md:p-5">
              <div className="space-y-2.5 text-sm text-ink sm:text-base">
                <p className="flex items-center gap-2">
                  <span className="text-root"><IconStar /></span> 스테로이드 없는 치료
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-root"><IconStar /></span> 재발 방지 면역 관리
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="ch-section-title">연고를 바를 때뿐, 돌아서면 다시 올라오나요?</h2>
            <p className="ch-section-copy">
              피부 증상은 빙산의 일각입니다.
              <br />
              몸속의 열독과 면역 불균형을 함께 해결해야 합니다.
            </p>
          </div>

          <div className="mb-14 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {symptoms.map((s) => (
              <div key={s.title} className="ch-card ch-card-hover flex min-h-[220px] flex-col items-start">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-paper-soft text-root">
                  <s.Icon />
                </span>
                <p className="mb-3 text-lg font-semibold leading-snug text-ink">{s.title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="ch-card-lg mx-auto max-w-4xl border-line md:p-10">
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-root/10 px-3 py-1 text-xs font-medium text-root">
              <IconCheck /> 특별 진단 시스템
            </span>
            <h3 className="mb-6 font-display text-2xl text-ink md:text-3xl">피부, 속부터 맑아져야 낫습니다</h3>
            <div className="space-y-4 text-[15px] leading-loose text-ink-soft">
              <p>
                반복되는 피부 질환은 단순히 피부만의 문제가 아닙니다. 몸속 열독과 습담을 배출하지 못하고 면역계가 과민하게 반응하면 피부로 신호가 터져 나옵니다.
              </p>
              <p>
                비위가 약해 노폐물이 쌓이거나 간의 해독 흐름이 막히고, 체온 조절이 무너지면 증상은 가라앉아도 다시 재발하기 쉽습니다.
              </p>
              <p>
                초근목피에서는 맥진과 문진을 통해 어느 장부가 약해졌는지, 열독과 습담이 어디에 뭉쳐 있는지 확인하고 피부가 스스로 회복할 환경을 만듭니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-root">CORE SOLUTION</p>
            <h2 className="ch-section-title mb-8 leading-snug">
              피부 본연의 힘을 되찾는
              <br />
              핵심 치료 원리
            </h2>
            <div className="space-y-5">
              {mechanisms.map((m) => (
                <div key={m.n} className="flex gap-4 rounded-2xl border border-line bg-card p-5 shadow-sm shadow-ink/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper-soft">{m.n}</span>
                  <div>
                    <p className="mb-1 text-lg font-semibold leading-snug text-ink">{m.title}</p>
                    <p className="text-sm leading-relaxed text-ink-soft">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ProgramImage src="/images/programs/skin-mechanism.png" alt="피부질환 치료 원리를 상징하는 한약재와 차" />
        </div>
      </section>

      <section id="quiz" className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="ch-section-title">피부질환 미니 진단</h2>
            <p className="ch-section-copy">1분이면 충분합니다. 지금 피부에 필요한 치료 방향을 확인해보세요.</p>
          </div>
          <SkinQuiz />
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="ch-section-title">증상별 맞춤 솔루션</h2>
            <p className="ch-section-copy">피부 질환의 종류와 체질에 따라 치료 중심도 달라야 합니다.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {solutions.map((s) => (
              <div key={s.n} className="ch-card ch-card-hover relative flex min-h-[500px] flex-col p-7">
                <span className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-line text-sm text-ink-soft">{s.n}</span>
                <p className="mb-5 min-h-[3.5rem] whitespace-pre-line pr-12 text-lg font-semibold leading-snug text-ink">{s.title}</p>
                <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-ink-soft">
                  <IconCheck /> 주요 증상
                </p>
                <ul className="mb-5 space-y-1 text-sm text-ink-soft">
                  {s.symptoms.map((symptom) => (
                    <li key={symptom}>• {symptom}</li>
                  ))}
                </ul>
                <div className="mb-4 rounded-xl bg-paper px-4 py-3">
                  <p className="mb-1 flex items-center gap-1.5 text-xs text-ink-soft">
                    <IconClipboard /> 진단 패턴
                  </p>
                  <p className="text-sm font-medium text-ink">{s.pattern}</p>
                </div>
                <p className="mb-1 text-xs text-root">추천 치료</p>
                <p className="mb-1 font-medium text-ink">{s.treatment}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 grid items-center gap-8 md:grid-cols-2">
            <ProgramImage src="/images/programs/skin-treatment.png" alt="피부질환 맞춤 한약과 외용 관리를 준비하는 과정" />
            <div>
              <h2 className="ch-section-title mb-3">초근목피 피부질환 치료 프로그램</h2>
              <p className="ch-section-copy">스테로이드에만 기대지 않고, 속부터 맑아지는 회복 환경을 만듭니다.</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {treatments.map((t) => (
              <div key={t.title} className="ch-card ch-card-hover min-h-[210px]">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-paper-soft text-root"><IconCheck /></span>
                <p className="mb-2 text-lg font-semibold leading-snug text-ink">{t.title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="ch-section-title">치료후기</h2>
              <p className="ch-section-copy">깨끗한 피부와 편안한 일상을 되찾은 분들의 이야기입니다.</p>
            </div>
            <Link href="/community/reviews" className="whitespace-nowrap text-sm text-ink-soft hover:text-root">전체 후기 보기 →</Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <LockedReviewCard
                key={r.title}
                title={r.title}
                summary={r.summary}
                patient={r.patient}
                doctor={skinDoctor.name}
              />
            ))}
          </div>
          <LockedReviewGate count={3} />
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="ch-card-lg mb-16 flex flex-col gap-6 bg-paper-soft md:flex-row md:items-center md:p-10">
            <div className="relative aspect-square w-full max-w-[180px] shrink-0 overflow-hidden rounded-2xl border border-line bg-card shadow-sm shadow-ink/5">
              <Image src={skinDoctor.photo} alt={`${skinDoctor.role} ${skinDoctor.name}`} fill sizes="180px" quality={95} className="object-cover" />
            </div>
            <div>
              <p className="mb-2 text-xs text-ink-soft">담당 의료진</p>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-ink">{skinDoctor.role} {skinDoctor.name}</h3>
              <p className="mb-4 leading-relaxed text-ink-soft">
                피부는 내장 기관의 거울입니다.
                <br />
                겉만 덮지 않고 속부터 맑게 하여 재발을 줄입니다.
              </p>
              <Link href={`/about/doctors/${skinDoctor.slug}`} className="text-sm font-medium text-root hover:text-root-dark">의료진 소개 더보기 →</Link>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-2 text-xs font-semibold tracking-wide text-root">TREATMENT PROCESS</p>
            <h2 className="ch-section-title mb-12">진료 절차</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {process.map((p) => (
              <div key={p.n} className="ch-card flex min-h-[190px] flex-col items-center text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-line text-lg font-medium text-ink">{p.n}</span>
                <p className="mb-2 text-lg font-semibold leading-snug text-ink">{p.title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{p.desc}</p>
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
                {faqs.map((f) => (
                  <div key={f.q} className="ch-card p-5">
                    <p className="mb-2 font-medium text-ink">Q. {f.q}</p>
                    <p className="text-sm leading-relaxed text-ink-soft">A. {f.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="ch-card-lg flex flex-col justify-center text-center">
              <h3 className="mb-3 text-xl font-bold tracking-tight text-ink">비대면 진료 안내</h3>
              <p className="mb-6 text-sm leading-relaxed text-ink-soft">
                내원하지 않아도 증상 흐름을 상담하고,
                <br />
                필요한 치료 방향을 안내받을 수 있습니다.
              </p>
              <Link href="/reserve" className="ch-btn-primary">피부질환 상담 예약</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <p className="mb-2 text-xs text-ink-soft">세부 질환 안내</p>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="ch-section-title">피부질환 질환별 치료 안내</h2>
              <p className="mt-3 text-sm text-ink-soft">해당 질환을 클릭하면 상세 치료 정보를 확인하실 수 있습니다.</p>
            </div>
            <Link href="/reserve" className="ch-btn-primary px-5 py-2.5">상담 예약</Link>
          </div>
          <div className="mb-4 border-b border-line pb-3 text-sm text-root">피부질환 클리닉</div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {skinConditions.map((condition) => (
              <Link key={condition.slug} href={`/programs/skin/${condition.slug}`} className="ch-card ch-card-hover flex min-h-[96px] items-start justify-between gap-4 p-5">
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
