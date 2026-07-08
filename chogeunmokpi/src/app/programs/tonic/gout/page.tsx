import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "통풍 한방 치료 | 대전 유성구 반석동 초근목피한의원",
  description:
    "바람만 스쳐도 아픈 통풍, 요산 수치 조절을 넘어 습열·어혈·대사 환경을 함께 관리합니다. 대전 유성구 반석동 초근목피한의원 통풍 한방 진료 안내.",
  alternates: {
    canonical: "/programs/tonic/gout",
  },
  openGraph: {
    title: "통풍 한방 치료 | 초근목피한의원",
    description:
      "반복되는 통풍 발작과 엄지발가락 통증을 관절만이 아니라 대사 환경의 문제로 살펴봅니다.",
    url: "/programs/tonic/gout",
    images: [
      {
        url: "/images/programs/tonic-detail-gout.png",
        width: 1200,
        height: 1200,
        alt: "통풍 발 관절 통증 한방 치료 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "통풍 한방 치료 | 초근목피한의원",
    description:
      "반복되는 통풍 발작과 관절 통증을 대사 환경의 문제로 살피는 초근목피한의원 통풍 진료 안내입니다.",
    images: [
      {
        url: "/images/programs/tonic-detail-gout.png",
        alt: "통풍 및 관절 통증 한방 치료 이미지",
      },
    ],
  },
};

const heroBadges = ["요산 수치 너머 대사 환경 관리", "습열·어혈·관절 순환 개선"];

const painSignals = [
  "엄지발가락이 갑자기 붓고, 이불만 닿아도 아픕니다.",
  "술자리나 회식 뒤 발작이 올까 봐 늘 불안합니다.",
  "요산 수치는 조절 중인데도 관절 통증이 반복됩니다.",
  "진통제로 버티지만 붓기와 열감이 오래 남습니다.",
  "발목과 무릎까지 번질까 걱정됩니다.",
  "재발할수록 걷는 것 자체가 두려워집니다.",
];

const keyFacts = [
  { label: "주요 부위", value: "엄지발가락, 발목, 무릎, 손가락 관절" },
  { label: "대표 증상", value: "극심한 통증, 붓기, 열감, 발적, 압통" },
  { label: "관련 요인", value: "고요산혈증, 음주, 과식, 비만, 신장 대사 부담" },
  { label: "한방 관점", value: "습열, 어혈, 담음, 비위 대사 저하" },
];

const causes = [
  {
    title: "습열이 관절로 몰리는 경우",
    body: "기름진 음식, 음주, 야식이 반복되면 몸속 습열이 쌓이고 관절 부위에서 붓기와 열감으로 터져 나올 수 있습니다.",
  },
  {
    title: "요산과 노폐물 배출이 더딘 경우",
    body: "수치만 낮추는 것과 별개로 몸이 노폐물을 처리하고 배출하는 환경이 약하면 발작이 반복될 수 있습니다.",
  },
  {
    title: "어혈과 담음이 남아 관절이 뻣뻣한 경우",
    body: "급성 통증이 지나간 뒤에도 잔통증, 뻣뻣함, 부종이 남는다면 관절 주변 순환 정체를 봐야 합니다.",
  },
];

const visitPhrases = [
  "바람만 불어도 아프다는 말이 뭔지 알 것 같아요.",
  "요산약을 먹는데도 왜 또 붓는지 모르겠어요.",
  "맥주 한 잔만 마셔도 다음 날 발가락이 불안합니다.",
  "발목이 뜨겁고 빨개져서 신발을 신기 힘듭니다.",
  "통풍 발작이 올까 봐 회식 자리가 무섭습니다.",
  "진통제를 먹으면 잠깐 괜찮지만 반복됩니다.",
  "수치보다 실제 통증이 더 걱정입니다.",
  "걸을 때마다 관절 안에 모래가 낀 것 같습니다.",
];

const principles = [
  {
    title: "청열이습",
    subtitle: "습열을 내려 급성 염증 반응을 줄입니다.",
    body: "붓고 뜨겁고 빨갛게 달아오르는 급성기에는 관절로 몰린 열과 습을 낮추는 것이 우선입니다.",
  },
  {
    title: "활혈통락",
    subtitle: "막힌 순환을 풀어 잔통증과 부종을 줄입니다.",
    body: "발작 후에도 남는 뻣뻣함과 압통은 어혈과 정체를 풀어 관절 주변 순환을 회복해야 합니다.",
  },
  {
    title: "비위대사 개선",
    subtitle: "요산과 노폐물이 쌓이는 체질 환경을 바꿉니다.",
    body: "소화와 대사가 약한 상태에서는 노폐물이 쌓이기 쉽습니다. 비위 기능과 수분 대사를 함께 살핍니다.",
  },
  {
    title: "재발 관리",
    subtitle: "음주·식습관·체중·수면을 현실적으로 조정합니다.",
    body: "통풍은 생활 패턴과 깊게 연결됩니다. 무조건 금지만이 아니라 오래 지속 가능한 기준을 세웁니다.",
  },
];

const patterns = [
  {
    title: "붓고 뜨거운 급성 습열형",
    symptoms: ["관절 열감", "붉은 발적", "이불도 못 덮는 통증"],
    pattern: "습열, 열독",
    treatment: "청열이습 처방",
    desc: "관절로 몰린 열과 습을 낮춰 급성 염증 반응을 완화하는 방향입니다.",
  },
  {
    title: "반복 발작 뒤 뻣뻣한 어혈형",
    symptoms: ["잔통증", "관절 뻣뻣함", "발목·무릎으로 번지는 느낌"],
    pattern: "어혈, 담음, 기혈 울체",
    treatment: "활혈통락 처방",
    desc: "발작 이후 남은 정체와 순환 저하를 풀어 재발과 잔통증을 줄입니다.",
  },
  {
    title: "복부 비만과 소화 더딤이 있는 대사형",
    symptoms: ["잦은 회식", "복부 비만", "소화 더딤과 피로"],
    pattern: "비위습담, 대사 저하",
    treatment: "비위 대사 개선 처방",
    desc: "요산과 노폐물이 쌓이기 쉬운 몸의 처리 능력을 함께 개선합니다.",
  },
  {
    title: "체력 저하와 재발 불안이 큰 허약형",
    symptoms: ["회복 지연", "잔병치레", "발작 이후 기력 저하"],
    pattern: "정기 부족, 간신 허약",
    treatment: "재발 방지 보강 처방",
    desc: "반복 발작으로 약해진 회복력과 관절 방어력을 함께 보강합니다.",
  },
];

const process = [
  {
    title: "1. 발작 이력 확인",
    body: "통증이 시작된 부위, 발작 빈도, 지속 시간, 유발 음식과 음주 패턴을 정리합니다.",
  },
  {
    title: "2. 대사 환경 평가",
    body: "요산 수치뿐 아니라 체중, 소화, 수분 섭취, 수면, 스트레스 반응을 함께 확인합니다.",
  },
  {
    title: "3. 급성기·완화기 구분",
    body: "붓고 뜨거운 시기와 잔통증이 남은 시기를 나누어 처방 방향을 다르게 잡습니다.",
  },
  {
    title: "4. 재발 기준 세우기",
    body: "회식, 운동, 식단, 수분 섭취를 현실적으로 조정해 발작 가능성을 줄입니다.",
  },
];

const timeline = [
  {
    phase: "급성기",
    title: "열감과 붓기를 먼저 낮춥니다",
    body: "통증이 심하고 관절이 뜨거운 시기에는 청열·이습 방향으로 염증 반응을 가라앉히는 것을 우선합니다.",
  },
  {
    phase: "완화기",
    title: "잔통증과 관절 순환을 정리합니다",
    body: "통증이 줄어도 관절이 뻣뻣하거나 압통이 남으면 어혈과 담음을 풀어 회복 속도를 돕습니다.",
  },
  {
    phase: "재발 관리기",
    title: "요산이 쌓이는 몸의 환경을 바꿉니다",
    body: "반복되는 발작을 줄이기 위해 비위 대사와 생활 습관, 체중, 음주 패턴을 함께 관리합니다.",
  },
];

const differential = [
  "봉와직염처럼 피부 감염으로 붓고 열이 나는 경우",
  "류마티스 관절염처럼 여러 관절이 대칭적으로 아픈 경우",
  "외상이나 염좌 뒤 특정 부위만 붓고 아픈 경우",
  "가성통풍처럼 칼슘 결정이 관절에 쌓이는 경우",
];

const reviews = [
  { title: "[45세, 남성] 회식 뒤 반복되던 엄지발가락 통풍 발작", patient: "전**" },
  { title: "[59세, 남성] 요산 수치 관리 중에도 불안하던 재발 통풍", patient: "송**" },
  { title: "[52세, 여성] 발목 붓기와 통증이 반복되던 대사성 관절 통증", patient: "권**" },
];

const faqs = [
  {
    q: "요산 수치가 정상이어도 통풍일 수 있나요?",
    a: "급성 발작 시기나 약 복용 상태에 따라 수치가 다르게 보일 수 있습니다. 수치와 함께 통증 양상, 부위, 반복 패턴을 같이 봐야 합니다.",
  },
  {
    q: "요산약을 먹고 있어도 한방 치료가 가능한가요?",
    a: "복용 중인 약을 확인한 뒤 병행 여부와 복용 간격을 안내합니다. 임의로 약을 중단하지 않는 것이 중요합니다.",
  },
  {
    q: "발작 중에도 진료받을 수 있나요?",
    a: "통증이 심한 급성기에는 염증과 통증 완화 방향을 우선 고려합니다. 걷기 어렵다면 먼저 전화로 상태를 알려주세요.",
  },
  {
    q: "술은 완전히 끊어야 하나요?",
    a: "초기 재발이 잦은 시기에는 강한 조절이 필요합니다. 이후에는 발작 빈도와 체질에 맞춰 현실적인 기준을 함께 세웁니다.",
  },
];

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

export default function GoutPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto max-w-6xl px-5 py-5 text-sm text-ink-soft">
          <Link href="/" className="hover:text-root">홈</Link>
          <span className="mx-2">›</span>
          <Link href="/programs/tonic" className="hover:text-root">보약·웰니스</Link>
          <span className="mx-2">›</span>
          <span className="font-semibold text-ink">통풍</span>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-paper-soft">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-card/60 to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:py-20">
          <div>
            <div className="mb-14 inline-flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3 shadow-sm">
              <span className="relative h-10 w-10 overflow-hidden rounded-full bg-paper">
                <Image src="/images/doctors/lee-ho-geun.png" alt="이호근 원장" fill sizes="40px" className="object-cover" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink-soft">의료 감수</p>
                <p className="text-sm font-bold text-ink">이호근 대표원장</p>
              </div>
            </div>

            <p className="mb-4 text-sm font-semibold text-root">대사 · 관절 한방 진료</p>
            <p className="mb-5 text-base font-semibold leading-7 text-ink-soft">
              통풍 · 역절풍 · 고요산혈증 · Gout
            </p>
            <h1 className="font-display text-[3.7rem] leading-[0.98] text-ink sm:text-[4.7rem] md:text-[6.4rem]">
              통풍
            </h1>
            <p className="mt-7 max-w-xl text-xl font-semibold leading-9 text-ink">
              바람만 불어도 아픈 통풍,
              <br className="hidden sm:block" />
              수치 조절을 넘어 대사 환경을 회복합니다.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-ink-soft">
              엄지발가락의 극심한 통증은 관절 하나의 문제가 아니라 몸속 습열,
              요산 대사, 노폐물 배출 능력이 흔들렸다는 신호일 수 있습니다.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/reserve" className="ch-btn-primary">
                <IconCalendar /> 진료 예약하기
              </Link>
              <a href="#core" className="ch-btn-secondary">
                <IconClipboard /> 통풍 치료 원리
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[22px] border border-line bg-card shadow-xl shadow-ink/10">
              <Image
                src="/images/programs/tonic-detail-gout.png"
                alt="통풍 발 관절 통증 한방 치료 이미지"
                fill
                priority
                quality={95}
                sizes="(max-width: 768px) 92vw, 540px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-line bg-card/95 p-5 shadow-xl shadow-ink/10 backdrop-blur md:left-auto md:w-[84%]">
              <div className="space-y-3">
                {heroBadges.map((badge) => (
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
            title="이런 통증, 그냥 관절염으로 넘기지 마세요"
            copy="통풍은 어느 날 갑자기 온 것처럼 보이지만, 실제로는 몸속 대사 부담이 오래 쌓인 결과인 경우가 많습니다."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {painSignals.map((signal) => (
              <div key={signal} className="rounded-2xl border border-line bg-card p-6 shadow-sm shadow-ink/5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-paper-soft text-root">
                  <IconStar />
                </div>
                <p className="text-base font-semibold leading-8 text-ink">{signal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-root">
              Disease Summary
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              통풍은 요산 결정이
              <br />
              관절을 찌르는 병입니다
            </h2>
            <p className="mt-6 text-base leading-8 text-ink-soft">
              혈액 속 요산이 높아지고 배출이 더뎌지면 바늘 같은 결정이 관절에 쌓입니다.
              이 결정이 면역 반응을 자극하면 붓기, 발적, 열감, 극심한 통증이 나타납니다.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {keyFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-line bg-card p-6">
                <p className="mb-3 text-sm font-bold text-root">{fact.label}</p>
                <p className="text-lg font-bold leading-8 text-ink">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Why It Returns"
            title="왜 통풍은 반복될까요?"
            copy="통풍 치료의 핵심은 통증을 가라앉히는 것에서 멈추지 않고, 발작이 반복되는 몸의 환경을 바꾸는 데 있습니다."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {causes.map((cause, index) => (
              <article key={cause.title} className="rounded-[18px] border border-line bg-card p-7 shadow-sm shadow-ink/5">
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-base font-bold text-paper-soft">
                  {index + 1}
                </span>
                <h3 className="mb-4 text-2xl font-bold leading-snug text-ink">{cause.title}</h3>
                <p className="text-base leading-8 text-ink-soft">{cause.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="rounded-[22px] border border-ink bg-card p-7 shadow-xl shadow-ink/10 md:p-12">
            <span className="mb-7 inline-flex rounded-full border border-ink px-4 py-2 text-xs font-bold text-ink">
              특별 진단 시스템
            </span>
            <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">
              수치만 보지 않고,
              <br />
              통풍이 생기는 몸의 조건을 봅니다
            </h2>
            <div className="mt-8 space-y-5 text-base leading-9 text-ink-soft md:text-lg">
              <p>
                요산 수치는 중요한 기준입니다. 하지만 통풍 발작은 숫자 하나만으로 설명되지 않을 때가 많습니다.
                같은 수치라도 어떤 분은 통증이 반복되고, 어떤 분은 비교적 안정적으로 지냅니다.
              </p>
              <p>
                초근목피한의원은 급성 발작의 열감과 부종, 발작 후 남는 잔통증, 음주와 식습관,
                소화와 수분 대사, 체중 변화까지 함께 확인합니다.
              </p>
              <p>
                한의학적으로는 습열이 관절로 몰렸는지, 어혈과 담음이 남아 순환을 막는지,
                비위 대사가 약해 노폐물이 쌓이는지에 따라 치료 방향을 나눕니다.
              </p>
            </div>
            <div className="mt-9 border-t border-ink pt-5 text-sm font-bold text-ink">
              통풍은 관절 통증이지만, 치료는 대사 환경에서 시작합니다.
            </div>
          </div>
        </div>
      </section>

      <section id="core" className="bg-paper py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-root">
              Core Solution
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              통풍 재발을 줄이는
              <br />
              핵심 치료 원리
            </h2>
            <div className="mt-10 space-y-7">
              {principles.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[3.25rem_1fr] gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper-soft text-lg font-bold text-ink">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold tracking-tight text-ink">{item.title}</h3>
                    <p className="mb-2 text-base font-semibold leading-7 text-root">{item.subtitle}</p>
                    <p className="text-base leading-8 text-ink-soft">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[22px] border border-line bg-paper-soft shadow-xl shadow-ink/10">
            <Image
              src="/images/programs/tonic-detail-gout.png"
              alt="통풍 핵심 치료 원리"
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
            eyebrow="Clinic Voice"
            title="진료실에서 자주 듣는 표현"
            copy="본인 이야기처럼 느껴진다면, 통풍의 재발 패턴을 점검해볼 필요가 있습니다."
          />
          <div className="grid gap-4 md:grid-cols-4">
            {visitPhrases.map((phrase) => (
              <div key={phrase} className="rounded-2xl border border-line bg-card p-5">
                <p className="text-sm font-semibold leading-7 text-ink-soft">“{phrase}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Pattern Care"
            title="통풍 유형별 맞춤 솔루션"
            copy="같은 통풍이라도 급성 열감인지, 발작 후 정체인지, 대사형 체질인지에 따라 치료 방향이 달라집니다."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {patterns.map((pattern, index) => (
              <article key={pattern.title} className="rounded-[18px] border border-line bg-card p-6 shadow-sm shadow-ink/5">
                <div className="mb-5 flex items-start justify-between gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-base font-bold text-paper-soft">
                    {index + 1}
                  </span>
                  <p className="rounded-full bg-paper-soft px-3 py-1 text-xs font-bold text-root">{pattern.pattern}</p>
                </div>
                <h3 className="mb-5 text-2xl font-bold leading-snug text-ink">{pattern.title}</h3>
                <div className="mb-5 rounded-2xl bg-paper-soft p-4">
                  <p className="mb-2 text-sm font-bold text-root">주요 증상</p>
                  <ul className="space-y-1.5 text-sm leading-7 text-ink-soft">
                    {pattern.symptoms.map((symptom) => (
                      <li key={symptom}>• {symptom}</li>
                    ))}
                  </ul>
                </div>
                <p className="mb-2 text-sm font-bold text-root">추천 치료</p>
                <p className="mb-3 text-lg font-bold text-ink">{pattern.treatment}</p>
                <p className="text-sm leading-7 text-ink-soft">{pattern.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="Treatment Timeline"
            title="통풍 치료는 시기별로 달라야 합니다"
            copy="급성기와 완화기, 재발 관리기는 목표가 다릅니다. 같은 처방을 반복하지 않고 단계에 맞춰 조정합니다."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.phase} className="rounded-[18px] border border-line bg-card p-7">
                <p className="mb-4 text-sm font-bold text-root">{item.phase}</p>
                <h3 className="mb-4 text-2xl font-bold leading-snug text-ink">{item.title}</h3>
                <p className="text-base leading-8 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-root">
              Differential Check
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              통풍처럼 보여도
              <br />
              다른 질환일 수 있습니다
            </h2>
            <p className="mt-6 text-base leading-8 text-ink-soft">
              관절이 붓고 뜨거운 증상은 통풍 외에도 여러 질환에서 나타납니다.
              통증 위치와 양상, 발열, 외상 여부, 반복 패턴을 함께 확인해야 합니다.
            </p>
          </div>
          <div className="rounded-[18px] border border-line bg-card p-7">
            <ul className="space-y-4">
              {differential.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-8 text-ink-soft">
                  <span className="mt-2 text-root"><IconStar /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
            {reviews.map((review) => (
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
              <p className="max-w-3xl text-base leading-8 text-ink-soft">
                통풍은 관절 통증으로 시작하지만, 실제로는 대사와 생활 리듬의 문제로 반복됩니다.
                발작만 가라앉히는 데서 멈추지 않고 재발을 줄이는 몸의 조건을 함께 찾아드리겠습니다.
              </p>
              <Link href="/about/doctors/lee-ho-geun" className="mt-5 inline-flex items-center gap-2 font-bold text-ink hover:text-root">
                의료진 소개 더보기 <ArrowIcon />
              </Link>
            </div>
          </div>

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-root">Treatment Process</p>
          <h2 className="ch-section-title mb-12">진료 절차</h2>
          <div className="grid gap-5 md:grid-cols-4">
            {process.map((step) => (
              <div key={step.title} className="rounded-2xl border border-line bg-card p-6">
                <h3 className="mb-3 text-lg font-bold tracking-tight">{step.title}</h3>
                <p className="text-sm leading-7 text-ink-soft">{step.body}</p>
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
              {faqs.map((faq) => (
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
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-root">Remote Care</p>
            <h2 className="mb-5 text-2xl font-bold tracking-tight">비대면 진료 안내</h2>
            <p className="mb-6 text-base leading-8 text-ink-soft">
              반복되는 통풍 발작이나 약 복용 중인 상태도 사진과 현재 복용약, 검사 결과를 바탕으로 상담이 가능합니다.
              내원 전 상태를 먼저 공유해 주세요.
            </p>
            <Link href="/reserve" className="ch-btn-primary">
              통풍 상담 예약
            </Link>

            <div className="mt-10 border-t border-line pt-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-root">Next</p>
              <h3 className="mb-4 text-xl font-bold">함께 보면 좋은 문서</h3>
              <div className="space-y-4">
                {[
                  { href: "/programs/tonic", title: "보약·웰니스 클리닉", desc: "기력과 대사 회복을 함께 관리합니다." },
                  { href: "/programs/digestive", title: "소화기질환", desc: "소화와 흡수, 대사 부담을 함께 봅니다." },
                  { href: "/programs/skin", title: "피부질환", desc: "몸속 열과 면역 반응이 드러나는 질환을 함께 살핍니다." },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="group block rounded-2xl border border-line bg-paper-soft p-5 transition hover:-translate-y-1 hover:border-ink hover:bg-white">
                    <h4 className="mb-2 text-lg font-bold text-ink">{item.title}</h4>
                    <p className="text-sm leading-7 text-ink-soft">{item.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ink group-hover:text-root">
                      보기 <ArrowIcon />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-6xl rounded-[18px] border border-line bg-paper-soft px-6 py-8 text-base leading-8 text-ink-soft md:px-8">
          <p className="font-bold text-ink">의료 정보 안내</p>
          <p className="mt-2">
            본 콘텐츠는 일반적인 한방 의료 정보 제공을 위한 참고 자료이며, 개별 환자의 진단·처방을 대신할 수 없습니다.
            급성 관절 통증, 발열, 심한 부종이 있거나 복용 중인 약이 있다면 반드시 의료진과 상담해 주세요.
          </p>
        </div>
      </section>
    </main>
  );
}
