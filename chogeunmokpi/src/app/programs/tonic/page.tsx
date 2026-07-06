import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import TonicQuiz from "@/components/programs/TonicQuiz";
import { tonicConditions } from "@/lib/tonic-conditions";
import { doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 보약·웰니스 클리닉 | 만성피로·면역력·공진단·경옥고 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 보약·웰니스 클리닉입니다. 만성 피로, 면역력 저하, 병후 회복, 공진단·경옥고와 맞춤 보약을 체질에 맞게 설계합니다.",
  alternates: {
    canonical: "/programs/tonic",
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

function IconBattery() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="16" height="10" rx="2" />
      <path d="M21 11v2M7 11h4" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6 3 3 0 0 0 3 3M15 6a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6 3 3 0 0 1-3 3" />
      <path d="M9 6c0-2 6-2 6 0v12c0 2-6 2-6 0V6Z" />
    </svg>
  );
}

function IconPulse() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l2-6 4 12 2-6h6" />
    </svg>
  );
}

function ProgramImage({ src, alt, children }: { src: string; alt: string; children?: ReactNode }) {
  return (
    <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl border border-line bg-paper shadow-sm shadow-ink/5">
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 90vw, 500px" quality={95} className="object-cover" priority={src.includes("hero")} />
      {children}
    </div>
  );
}

const symptoms = [
  {
    Icon: IconBattery,
    title: "만성 피로·번아웃",
    desc: "자고 일어나도 개운하지 않고 오후만 되면 방전된 것처럼 지칩니다.",
  },
  {
    Icon: IconPulse,
    title: "수술·병후 회복",
    desc: "큰 병을 앓거나 수술 이후 체력이 예전처럼 돌아오지 않습니다.",
  },
  {
    Icon: IconShield,
    title: "면역력 저하",
    desc: "감기에 자주 걸리고 대상포진처럼 잔병치레가 늘었습니다.",
  },
  {
    Icon: IconBrain,
    title: "기억력·집중력 저하",
    desc: "머리가 멍하고 깜빡하는 일이 늘며 업무 효율이 떨어집니다.",
  },
];

const mechanisms = [
  { n: "1", title: "정과 기 보충", desc: "생명 에너지의 바탕인 정기와 기운을 채워 기초 체력을 다집니다." },
  { n: "2", title: "오장육부 균형", desc: "약해진 장부 기능을 돕고 과한 열과 정체를 덜어 균형을 맞춥니다." },
  { n: "3", title: "해독·순환 개선", desc: "몸속 노폐물 배출과 기혈 순환을 도와 무거운 몸을 가볍게 합니다." },
  { n: "4", title: "항노화·재생", desc: "진액과 회복력을 보강해 생기와 신체 나이를 관리합니다." },
];

const solutions = [
  {
    n: "1",
    title: "과로와 스트레스에 시달리는\n직장인·CEO",
    symptoms: ["만성 피로와 숙취", "뒷목이 뻣뻣하고 눈이 침침함", "중요한 프로젝트 전 컨디션 저하"],
    pattern: "간기 울결, 심신 과로",
    treatment: "공진단 / 사향 공진단",
    desc: "막힌 기운을 풀고 원기를 빠르게 끌어올려 집중력과 체력을 돕습니다.",
  },
  {
    n: "2",
    title: "체력이 중요한\n수험생·운동선수",
    symptoms: ["집중력이 떨어지고 졸림", "체력 소모가 심함", "시험·시합 전 컨디션 관리"],
    pattern: "기혈 양허, 비위 허약",
    treatment: "수험생 총명 보약",
    desc: "기혈과 소화 흡수력을 보강해 지구력과 집중 유지력을 높입니다.",
  },
  {
    n: "3",
    title: "노화 방지와 면역력이 필요한\n부모님·어르신",
    symptoms: ["기력이 없고 입맛이 없음", "피부가 거칠고 진액 부족", "호흡기가 약하고 마른기침"],
    pattern: "폐신 음허, 정기 고갈",
    treatment: "경옥고 / 쌍화탕",
    desc: "진액을 보충하고 면역 기반을 튼튼히 해 회복력을 높입니다.",
  },
];

const treatments = [
  { title: "공진단", desc: "원기 회복과 집중력 보강을 위해 정기와 순환을 함께 다스리는 프리미엄 처방입니다." },
  { title: "경옥고", desc: "만성 피로와 허약 체질, 진액 부족을 보강해 장기적인 회복을 돕습니다." },
  { title: "맞춤 녹용 보약", desc: "체질과 증상에 맞춰 녹용과 보강 약재를 구성해 면역력과 체력을 높입니다." },
];

const reviews = [
  { title: "[42세 직장인, 만성 피로] 오후 방전감이 줄고 업무 집중이 편해졌습니다.", summary: "과로와 음주 후 회복이 느렸고, 맞춤 보약으로 기력 회복을 도왔습니다.", patient: "김**" },
  { title: "[58세 여성, 병후 회복] 수술 후 떨어진 체력이 서서히 돌아왔습니다.", summary: "입맛 저하와 무기력이 오래 이어져 체질 보강 처방을 진행했습니다.", patient: "박**" },
  { title: "[19세 수험생, 집중력 저하] 졸림과 피로가 줄어 공부 리듬이 안정됐습니다.", summary: "비위 허약과 기혈 부족을 함께 보고 총명 보약을 처방했습니다.", patient: "이**" },
];

const process = [
  { n: "1", title: "진맥 & 상담", desc: "현재 몸 상태와 부족한 기운, 생활 습관을 정밀하게 봅니다." },
  { n: "2", title: "맞춤 약재 선정", desc: "체질과 증상에 꼭 맞는 최적의 약재 구성을 정합니다." },
  { n: "3", title: "정성 탕전", desc: "엄선된 약재로 깨끗하고 정성스럽게 달입니다." },
  { n: "4", title: "복약 지도", desc: "약효를 높이는 복용법과 생활 관리법을 안내합니다." },
];

const faqs = [
  { q: "보약은 언제 먹는 게 좋나요?", a: "환절기나 체력이 떨어졌을 때 좋고, 봄·가을 정기 관리로도 도움이 됩니다." },
  { q: "녹용이 들어가면 살이 찌나요?", a: "녹용은 기혈을 보충하는 약재입니다. 체질과 목적에 맞게 쓰면 살을 찌우는 처방과는 다릅니다." },
  { q: "체질에 따라 보약이 다른가요?", a: "네. 기, 혈, 음, 양 중 무엇이 부족한지에 따라 처방 방향이 달라져 진맥 후 맞춤 처방이 중요합니다." },
];

const tonicDoctor = doctors[0];

export default function TonicProgramPage() {
  return (
    <main className="tonic-page">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:py-14 md:min-h-[720px] md:grid-cols-[0.95fr_1.05fr] md:gap-12 md:py-20">
          <div className="flex flex-col items-start">
            <div className="mb-12 inline-flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-2.5 shadow-sm shadow-ink/5 md:mb-24">
              <span className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image src={tonicDoctor.photo} alt={tonicDoctor.name} fill sizes="32px" quality={90} className="object-cover" />
              </span>
              <span className="text-xs leading-tight text-ink-soft">
                의료 감수
                <br />
                <span className="text-sm font-semibold text-ink">{tonicDoctor.name} {tonicDoctor.role}</span>
              </span>
            </div>
            <p className="mb-5 max-w-md text-[15px] leading-7 text-ink-soft sm:text-base">
              내 몸을 위한 가치 있는 투자.
              <br />
              만성 피로, 면역력 저하, 항노화 관리.
            </p>
            <h1 className="font-display text-[3.35rem] leading-[1.08] text-ink sm:text-[4.25rem] md:text-[5.75rem]">
              웰니스·보약
              <br />
              클리닉
            </h1>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <Link href="/reserve" className="ch-btn-primary px-5 py-3.5 text-sm sm:px-7 sm:py-4 sm:text-base">
                <IconCalendar /> 진료 예약하기
              </Link>
              <a href="#quiz" className="ch-btn-secondary px-5 py-3.5 text-sm sm:px-7 sm:py-4 sm:text-base">
                <IconClipboard /> 피로도 자가진단
              </a>
            </div>
          </div>
          <div className="relative">
            <ProgramImage src="/images/programs/tonic-hero.png" alt="웰니스 보약 상담을 기다리는 한의원 공간" />
            <div className="ch-card absolute -bottom-7 left-1/2 w-[88%] -translate-x-1/2 p-4 md:-bottom-8 md:left-auto md:right-4 md:w-[82%] md:translate-x-0 md:p-5">
              <div className="space-y-2.5 text-sm text-ink sm:text-base">
                <p className="flex items-center gap-2"><span className="text-root"><IconStar /></span> 프리미엄 공진단·경옥고</p>
                <p className="flex items-center gap-2"><span className="text-root"><IconStar /></span> 1:1 맞춤 녹용 보약</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="ch-section-title">쉬어도 풀리지 않는 피로, 방전된 체력</h2>
            <p className="ch-section-copy">
              몸이 예전 같지 않다고 느끼시나요?
              <br />
              부족한 기운을 채워야 할 때입니다.
            </p>
          </div>
          <div className="mb-14 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {symptoms.map((s) => (
              <div key={s.title} className="ch-card ch-card-hover flex min-h-[220px] flex-col items-start">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-paper-soft text-root"><s.Icon /></span>
                <p className="mb-3 text-lg font-semibold leading-snug text-ink">{s.title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="ch-card-lg mx-auto max-w-4xl border-line md:p-10">
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-root/10 px-3 py-1 text-xs font-medium text-root"><IconCheck /> 특별 진단 시스템</span>
            <h3 className="mb-6 font-display text-2xl text-ink md:text-3xl">피로, 내 몸의 에너지를 채워야 합니다</h3>
            <div className="space-y-4 text-[15px] leading-loose text-ink-soft">
              <p>피로는 잠을 못 자서만 생기는 것이 아닙니다. 오장육부의 기능이 떨어져 에너지를 만들어내지 못하거나, 만들어진 에너지가 전신으로 돌지 못할 때 만성 피로가 찾아옵니다.</p>
              <p>기운이 부족하면 몸이 무겁고, 혈이 부족하면 머리가 멍하며, 진액이 마르면 피부와 점막이 건조하고 노화가 빨라집니다.</p>
              <p>초근목피에서는 진맥과 상담을 통해 오장육부의 허실과 기혈의 과부족을 살펴, 내 몸에 부족한 기운을 채우는 방향을 찾습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-root">CORE SOLUTION</p>
            <h2 className="ch-section-title mb-8 leading-snug">내 몸의 활력을 깨우는<br />핵심 치료 원리</h2>
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
          <ProgramImage src="/images/programs/tonic-mechanism.png" alt="웰니스 보약의 핵심 원리를 상징하는 한약재와 차" />
        </div>
      </section>

      <section id="quiz" className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="ch-section-title">웰니스 미니 진단</h2>
            <p className="ch-section-copy">1분이면 충분합니다. 지금 내 몸에 맞는 회복 방향을 확인해보세요.</p>
          </div>
          <TonicQuiz />
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="ch-section-title">상황별 맞춤 보약</h2>
            <p className="ch-section-copy">나의 생활 리듬과 건강 목표에 따라 필요한 보강은 달라집니다.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {solutions.map((s) => (
              <div key={s.n} className="ch-card ch-card-hover relative flex min-h-[500px] flex-col p-7">
                <span className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-line text-sm text-ink-soft">{s.n}</span>
                <p className="mb-5 min-h-[3.5rem] whitespace-pre-line pr-12 text-lg font-semibold leading-snug text-ink">{s.title}</p>
                <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-ink-soft"><IconCheck /> 주요 증상</p>
                <ul className="mb-5 space-y-1 text-sm text-ink-soft">
                  {s.symptoms.map((symptom) => <li key={symptom}>• {symptom}</li>)}
                </ul>
                <div className="mb-4 rounded-xl bg-paper px-4 py-3">
                  <p className="mb-1 flex items-center gap-1.5 text-xs text-ink-soft"><IconClipboard /> 진단 패턴</p>
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
            <ProgramImage src="/images/programs/tonic-treatment.png" alt="맞춤 보약 조제를 준비하는 한의원 공간" />
            <div>
              <h2 className="ch-section-title mb-3">초근목피 명품 보약 프로그램</h2>
              <p className="ch-section-copy">엄선된 약재로 내 몸의 부족한 기운을 정성껏 채웁니다.</p>
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
              <p className="ch-section-copy">활력과 회복감을 되찾은 분들의 이야기입니다.</p>
            </div>
            <Link href="/community/reviews" className="whitespace-nowrap text-sm text-ink-soft hover:text-root">전체 후기 보기 →</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <Link key={r.title} href="/community/reviews" className="ch-card ch-card-hover group min-h-[190px]">
                <span className="mb-3 inline-block rounded-full bg-paper px-2.5 py-0.5 text-xs text-ink-soft">치료 사례</span>
                <p className="mb-3 line-clamp-2 font-medium leading-snug text-ink">{r.title}</p>
                <p className="mb-4 line-clamp-2 text-sm text-ink-soft">{r.summary}</p>
                <p className="text-xs text-ink-soft/70">환자: {r.patient} | 담당의: {tonicDoctor.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="ch-card-lg mb-16 flex flex-col gap-6 bg-paper-soft md:flex-row md:items-center md:p-10">
            <div className="relative aspect-square w-full max-w-[180px] shrink-0 overflow-hidden rounded-2xl border border-line bg-card shadow-sm shadow-ink/5">
              <Image src={tonicDoctor.photo} alt={`${tonicDoctor.role} ${tonicDoctor.name}`} fill sizes="180px" quality={95} className="object-cover" />
            </div>
            <div>
              <p className="mb-2 text-xs text-ink-soft">담당 의료진</p>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-ink">{tonicDoctor.role} {tonicDoctor.name}</h3>
              <p className="mb-4 leading-relaxed text-ink-soft">진정한 건강은 병이 없는 상태가 아닙니다.<br />활력이 넘치고 삶의 질이 높은 상태입니다.</p>
              <Link href={`/about/doctors/${tonicDoctor.slug}`} className="text-sm font-medium text-root hover:text-root-dark">의료진 소개 더보기 →</Link>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-2 text-xs font-semibold tracking-wide text-root">TREATMENT PROCESS</p>
            <h2 className="ch-section-title mb-12">처방 절차</h2>
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
              <p className="mb-6 text-sm leading-relaxed text-ink-soft">내원하지 않아도 진료와 처방 상담이 가능합니다.<br />간편하게 상담받아보세요.</p>
              <Link href="/reserve" className="ch-btn-primary">보약 상담 예약</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <p className="mb-2 text-xs text-ink-soft">세부 질환 안내</p>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="ch-section-title">보약·웰니스 질환별 치료 안내</h2>
              <p className="mt-3 text-sm text-ink-soft">해당 주제를 클릭하면 상세 치료 정보를 확인하실 수 있습니다.</p>
            </div>
            <Link href="/reserve" className="ch-btn-primary px-5 py-2.5">상담 예약</Link>
          </div>
          <div className="mb-4 border-b border-line pb-3 text-sm text-root">보약·웰니스</div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {tonicConditions.map((condition) => (
              <Link key={condition.slug} href={`/programs/tonic/${condition.slug}`} className="ch-card ch-card-hover flex min-h-[96px] items-start justify-between gap-4 p-5">
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
