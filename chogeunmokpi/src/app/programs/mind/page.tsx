import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import MindQuiz from "@/components/programs/MindQuiz";
import { mindConditions } from "@/lib/mind-conditions";
import { doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 마음건강 클리닉 | 불면증·불안·공황·우울 한방치료 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 마음건강 클리닉입니다. 불면증, 불안장애, 공황장애, 우울감, 화병을 몸과 자율신경 균형 관점에서 함께 살핍니다.",
  alternates: {
    canonical: "/programs/mind",
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

function IconMoon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 7 7 0 1 0 20 15.5Z" />
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

function IconCloud() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 18H8a5 5 0 1 1 1.1-9.9A6 6 0 0 1 20 11.5 3.5 3.5 0 0 1 17.5 18Z" />
    </svg>
  );
}

function IconFlame() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-3.2-2-5.3-4-7.4-.7 2.2-2.2 3.5-4.3 4.3.4-3.2-.7-5.6-3.2-7.9C6.5 7 5 9.8 5 15a7 7 0 0 0 7 7Z" />
    </svg>
  );
}

function ProgramImage({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl border border-line bg-paper shadow-sm shadow-ink/5">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 90vw, 500px"
        quality={95}
        className="object-cover"
      />
      {children}
    </div>
  );
}

const symptoms = [
  {
    Icon: IconPulse,
    title: "불안·공황",
    desc: "갑자기 가슴이 뛰고 숨이 막히며, 별일 아닌 일에도 불안이 밀려옵니다.",
  },
  {
    Icon: IconCloud,
    title: "우울·무기력",
    desc: "아침이 무겁고 의욕이 줄며, 몸과 마음이 계속 가라앉아 있습니다.",
  },
  {
    Icon: IconMoon,
    title: "불면·수면장애",
    desc: "잠드는 데 오래 걸리고 자주 깨며, 자고 나도 개운하지 않습니다.",
  },
  {
    Icon: IconFlame,
    title: "화병·스트레스 과부하",
    desc: "가슴과 명치가 답답하고, 감정이 치밀어 오르며 몸 증상이 함께 옵니다.",
  },
];

const mechanisms = [
  {
    n: "1",
    title: "심·간·비 장부 균형",
    desc: "불안과 두근거림, 울체감, 생각 과다를 각각 몸의 기능 축에서 살펴 조절합니다.",
  },
  {
    n: "2",
    title: "기혈·음양의 회복",
    desc: "부족한 기운은 보하고, 막힌 흐름은 풀며, 위로 뜬 열과 긴장을 내려줍니다.",
  },
  {
    n: "3",
    title: "수면·이완 리듬 재건",
    desc: "밤에는 깊게 쉬고 낮에는 움직일 수 있도록 몸의 회복 리듬을 다시 세웁니다.",
  },
];

const solutions = [
  {
    n: "1",
    title: "밤에 잠이 안 오고\n자주 깨서 피곤한 분",
    symptoms: ["입면까지 시간이 오래 걸림", "새벽에 자주 깸", "아침에도 개운하지 않음"],
    pattern: "심담허겁, 심비 기혈 부족",
    treatment: "수면 회복 처방",
    desc: "긴장된 신경을 안정시키고 심비의 기혈을 보충해 깊은 수면을 돕습니다.",
  },
  {
    n: "2",
    title: "스트레스 후 가슴이 답답하고\n불안·공황이 오는 분",
    symptoms: ["가슴 두근거림", "숨막힘과 식은땀", "업무·관계 스트레스에 민감"],
    pattern: "간기울결, 자율신경 과항진",
    treatment: "간기 순환 처방",
    desc: "뭉친 기운을 풀고 위로 치미는 긴장을 낮춰 몸의 안정감을 회복합니다.",
  },
  {
    n: "3",
    title: "의욕이 떨어지고\n몸이 무겁게 가라앉는 분",
    symptoms: ["아침 기상 어려움", "무기력과 피로", "생각이 많고 집중이 어려움"],
    pattern: "심비양허, 기혈 저하",
    treatment: "기력 회복 처방",
    desc: "부족한 기혈을 채우고 소화·수면 리듬을 함께 살펴 회복력을 끌어올립니다.",
  },
];

const treatments = [
  {
    title: "체질·패턴 맞춤 한약",
    desc: "체질과 증상 흐름을 함께 보아 불면, 불안, 무기력의 신체적 원인을 다룹니다.",
  },
  {
    title: "침·약침 치료",
    desc: "심장, 간, 비위와 연결된 경혈을 자극해 긴장과 답답함을 완화합니다.",
  },
  {
    title: "수면·이완 생활지도",
    desc: "호흡, 수면 위생, 회복 루틴을 함께 조정해 스스로 안정되는 힘을 기릅니다.",
  },
];

const reviews = [
  {
    title: "[34세 직장인, 불면] 새벽 각성이 줄고 아침 피로가 덜해졌습니다.",
    summary: "긴장으로 잠들기 어려웠지만 수면 리듬과 처방을 함께 조정하며 회복감을 느꼈습니다.",
    patient: "한**",
  },
  {
    title: "[27세 취준생, 공황] 지하철에서 올라오던 불안이 줄었습니다.",
    summary: "가슴 답답함과 식은땀이 반복되어 상담했고, 몸의 긴장을 낮추는 치료를 진행했습니다.",
    patient: "박**",
  },
  {
    title: "[48세 여성, 화병] 명치 답답함과 치밀어 오름이 완화되었습니다.",
    summary: "오래 눌린 감정과 소화 불편이 함께 있었고, 순환과 안정 치료를 병행했습니다.",
    patient: "오**",
  },
];

const process = [
  { n: "1", title: "설문 & 맥진", desc: "증상 흐름과 수면, 소화, 긴장 반응을 함께 확인합니다." },
  { n: "2", title: "4축 기능평가", desc: "기혈, 음양, 장부 균형과 자율신경 반응을 종합해 봅니다." },
  { n: "3", title: "패턴별 치료 계획", desc: "한약, 침·약침, 생활관리를 개인 리듬에 맞춰 설계합니다." },
  { n: "4", title: "경과 확인", desc: "수면과 감정, 몸 증상의 변화를 보며 치료 강도를 조정합니다." },
];

const faqs = [
  {
    q: "정신과 약을 먹고 있어도 한방 치료가 가능한가요?",
    a: "복용 중인 약을 임의로 중단하지 않고, 현재 상태와 처방 내용을 확인한 뒤 병행 가능성을 살핍니다.",
  },
  {
    q: "상담 치료와 같은 방식인가요?",
    a: "심리 상담만으로 접근하기보다 수면, 소화, 긴장, 기력 등 몸의 회복 기반을 함께 다룹니다.",
  },
  {
    q: "불면과 소화불량이 같이 있는데 마음건강 진료를 받아도 되나요?",
    a: "네. 마음 증상은 소화, 흉부 답답함, 두통과 함께 나타나는 경우가 많아 몸 전체의 흐름을 같이 봅니다.",
  },
];

const mindDoctor = doctors[0];

export default function MindProgramPage() {
  return (
    <main className="mind-page">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:py-14 md:min-h-[720px] md:grid-cols-[0.95fr_1.05fr] md:gap-12 md:py-20">
          <div className="flex flex-col items-start">
            <div className="mb-12 inline-flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-2.5 shadow-sm shadow-ink/5 md:mb-24">
              <span className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image src={mindDoctor.photo} alt={mindDoctor.name} fill sizes="32px" quality={90} className="object-cover" />
              </span>
              <span className="text-xs leading-tight text-ink-soft">
                의료 감수
                <br />
                <span className="text-sm font-semibold text-ink">
                  {mindDoctor.name} {mindDoctor.role}
                </span>
              </span>
            </div>

            <p className="mb-5 max-w-md text-[15px] leading-7 text-ink-soft sm:text-base">
              잠 못 드는 밤, 이유 없는 불안.
              <br />
              몸의 균형을 되살려 마음이 쉴 자리를 만듭니다.
            </p>
            <h1 className="font-display text-[3.35rem] leading-[1.08] text-ink sm:text-[4.25rem] md:text-[5.75rem]">
              마음건강
              <br />
              클리닉
            </h1>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <Link href="/reserve" className="ch-btn-primary px-5 py-3.5 text-sm sm:px-7 sm:py-4 sm:text-base">
                <IconCalendar /> 진료 예약하기
              </Link>
              <a href="#quiz" className="ch-btn-secondary px-5 py-3.5 text-sm sm:px-7 sm:py-4 sm:text-base">
                <IconClipboard /> 마음건강 자가진단
              </a>
            </div>
          </div>

          <div className="relative">
            <ProgramImage
              src="/images/programs/mind-hero.png"
              alt="차분한 한의원 공간에서 마음건강 상담을 기다리는 모습"
            />
            <div className="ch-card absolute -bottom-7 left-1/2 w-[88%] -translate-x-1/2 p-4 md:-bottom-8 md:left-auto md:right-4 md:w-[82%] md:translate-x-0 md:p-5">
              <div className="space-y-2.5 text-sm text-ink sm:text-base">
                <p className="flex items-center gap-2">
                  <span className="text-root"><IconStar /></span> 불면·불안·우울 집중 진료
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-root"><IconStar /></span> 몸과 마음의 균형 평가
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="ch-section-title">검사는 정상인데, 마음과 몸이 동시에 지쳐 있나요?</h2>
            <p className="ch-section-copy">
              마음의 문제는 눈에만 보이지 않을 뿐,
              <br />
              몸은 수면과 호흡, 가슴 답답함으로 신호를 보냅니다.
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
              <IconCheck /> 몸과 마음 통합 진단
            </span>
            <h3 className="mb-6 font-display text-2xl text-ink md:text-3xl">
              마음만 붙잡고 버티는 치료로는 부족할 수 있습니다
            </h3>
            <div className="space-y-4 text-[15px] leading-loose text-ink-soft">
              <p>
                불면, 공황, 우울감은 생각의 문제처럼 보이지만 실제로는 수면 리듬, 소화력, 흉부 긴장, 기혈 저하와 함께 움직이는 경우가 많습니다.
              </p>
              <p>
                초근목피에서는 맥진과 복진, 증상 문진을 통해 심장·간·비위의 균형과 자율신경의 긴장도를 함께 살핍니다.
              </p>
              <p>
                몸이 먼저 안정되면 마음도 쉴 공간을 얻습니다. 억지로 참는 것이 아니라 회복할 수 있는 내부 환경을 만들어가는 것이 핵심입니다.
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
              마음이 쉴 수 있게 만드는
              <br />
              핵심 치료 원리
            </h2>
            <div className="space-y-5">
              {mechanisms.map((m) => (
                <div key={m.n} className="flex gap-4 rounded-2xl border border-line bg-card p-5 shadow-sm shadow-ink/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper-soft">
                    {m.n}
                  </span>
                  <div>
                    <p className="mb-1 text-lg font-semibold leading-snug text-ink">{m.title}</p>
                    <p className="text-sm leading-relaxed text-ink-soft">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ProgramImage
            src="/images/programs/mind-mechanism.png"
            alt="마음과 몸의 균형 회복을 상징하는 한약재와 차"
          />
        </div>
      </section>

      <section id="quiz" className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="ch-section-title">마음건강 미니 진단</h2>
            <p className="ch-section-copy">
              1분이면 충분합니다. 지금 필요한 회복 방향을 간단히 확인해보세요.
            </p>
          </div>
          <MindQuiz />
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="ch-section-title">이런 분들께, 이렇게 치료합니다</h2>
            <p className="ch-section-copy">겉으로는 비슷한 불편감이어도 몸의 패턴에 따라 치료 중심은 달라집니다.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {solutions.map((s) => (
              <div key={s.n} className="ch-card ch-card-hover relative flex min-h-[500px] flex-col p-7">
                <span className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-line text-sm text-ink-soft">
                  {s.n}
                </span>
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
            <ProgramImage
              src="/images/programs/mind-treatment.png"
              alt="마음건강 치료를 위한 맞춤 한약 준비 과정"
            />
            <div>
              <h2 className="ch-section-title mb-3">초근목피 마음건강 치료 프로그램</h2>
              <p className="ch-section-copy">
                수면, 감정, 소화, 호흡을 따로 보지 않고 몸과 마음의 회복 리듬을 함께 세웁니다.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {treatments.map((t) => (
              <div key={t.title} className="ch-card ch-card-hover min-h-[210px]">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-paper-soft text-root">
                  <IconCheck />
                </span>
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
              <p className="ch-section-copy">마음의 평온을 다시 찾아가는 분들의 이야기입니다.</p>
            </div>
            <Link href="/community/reviews" className="whitespace-nowrap text-sm text-ink-soft hover:text-root">
              전체 후기 보기 →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <Link key={r.title} href="/community/reviews" className="ch-card ch-card-hover group min-h-[190px]">
                <span className="mb-3 inline-block rounded-full bg-paper px-2.5 py-0.5 text-xs text-ink-soft">치료 사례</span>
                <p className="mb-3 line-clamp-2 font-medium leading-snug text-ink">{r.title}</p>
                <p className="mb-4 line-clamp-2 text-sm text-ink-soft">{r.summary}</p>
                <p className="text-xs text-ink-soft/70">환자: {r.patient} | 담당의: {mindDoctor.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="ch-card-lg mb-16 flex flex-col gap-6 bg-paper-soft md:flex-row md:items-center md:p-10">
            <div className="relative aspect-square w-full max-w-[180px] shrink-0 overflow-hidden rounded-2xl border border-line bg-card shadow-sm shadow-ink/5">
              <Image src={mindDoctor.photo} alt={`${mindDoctor.role} ${mindDoctor.name}`} fill sizes="180px" quality={95} className="object-cover" />
            </div>
            <div>
              <p className="mb-2 text-xs text-ink-soft">담당 의료진</p>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-ink">
                {mindDoctor.role} {mindDoctor.name}
              </h3>
              <p className="mb-4 leading-relaxed text-ink-soft">
                마음의 불편은 의지만으로 버티는 문제가 아닙니다.
                <br />
                무너진 몸의 균형을 되살려 스스로 회복할 힘을 길러드립니다.
              </p>
              <Link href={`/about/doctors/${mindDoctor.slug}`} className="text-sm font-medium text-root hover:text-root-dark">
                의료진 소개 더보기 →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-2 text-xs font-semibold tracking-wide text-root">TREATMENT PROCESS</p>
            <h2 className="ch-section-title mb-12">진료 절차</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {process.map((p) => (
              <div key={p.n} className="ch-card flex min-h-[190px] flex-col items-center text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-line text-lg font-medium text-ink">
                  {p.n}
                </span>
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
              <h3 className="mb-3 text-xl font-bold tracking-tight text-ink">비대면 상담 안내</h3>
              <p className="mb-6 text-sm leading-relaxed text-ink-soft">
                내원 전 증상 흐름을 먼저 상담하고,
                <br />
                필요한 진료 방향을 안내받을 수 있습니다.
              </p>
              <Link href="/reserve" className="ch-btn-primary">
                마음건강 상담 예약
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <p className="mb-2 text-xs text-ink-soft">세부 질환 안내</p>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="ch-section-title">마음건강 질환별 치료 안내</h2>
              <p className="mt-3 text-sm text-ink-soft">
                관련 증상을 눌러 상담이 필요한 방향을 확인해보세요.
              </p>
            </div>
            <Link href="/reserve" className="ch-btn-primary px-5 py-2.5">상담 예약</Link>
          </div>
          <div className="mb-4 border-b border-line pb-3 text-sm text-root">
            수면·정서·인지
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {mindConditions.map((condition) => (
              <Link
                key={condition.slug}
                href={`/programs/psy/${condition.slug}`}
                className="ch-card ch-card-hover flex min-h-[96px] items-start justify-between gap-4 p-5"
              >
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
