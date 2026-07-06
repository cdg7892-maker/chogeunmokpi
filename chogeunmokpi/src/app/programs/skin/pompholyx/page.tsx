import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 한포진 한방진료 | 수포성 습진·손 습진·손발 물집 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 한포진 한방진료 안내입니다. 손가락·손바닥·발바닥 수포, 극심한 가려움, 갈라짐과 재발을 습열과 피부 장벽 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/skin/pompholyx",
  },
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5 14.9 9l7.1.6-5.4 4.6 1.7 7-6.3-3.9L5.7 21.2l1.7-7-5.4-4.6L9.1 9 12 2.5Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M8 12h8" />
      <path d="M8 16h6" />
    </svg>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brown">{eyebrow}</p> : null}
      <h2 className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-tight text-ink keep-words">{title}</h2>
      {desc ? <p className="mt-5 text-lg leading-8 text-ink-soft keep-words">{desc}</p> : null}
    </div>
  );
}

const doctor = doctors[0];

const summaryRows = [
  ["진료 질환", "한포진, 수포성 습진, 손 습진, 발바닥 습진, Dyshidrosis"],
  ["주요 증상", "손가락 수포, 손바닥·발바닥 물집, 극심한 가려움, 각질, 갈라짐"],
  ["치료 방향", "습열 배출, 피부 장벽 회복, 손발 말초 순환 안정, 재발 방지"],
  ["상담 대상", "스테로이드 반복 사용, 물·세제 노출 직업군, 다한증 동반, 만성 재발"],
];

const visitReasons = [
  "손가락 사이에 투명한 작은 물집이 반복해서 생깁니다.",
  "미친 듯이 가려워 밤에 잠을 설치고 긁다 보면 진물이 납니다.",
  "연고를 바를 때는 잠깐 괜찮지만 끊으면 바로 다시 올라옵니다.",
  "손바닥이 딱딱하게 굳고 갈라져 피가 나거나 따갑습니다.",
  "설거지, 미용, 간호, 요리처럼 물을 자주 묻히는 일이 괴롭습니다.",
  "발바닥 수포 때문에 걸을 때마다 통증이 심합니다.",
  "스트레스받으면 손에 열감이 오르고 수포가 확 올라옵니다.",
  "전염되는 병처럼 보일까 봐 손을 보이는 일이 부담스럽습니다.",
];

const causes = [
  {
    title: "내부 습열 누적",
    desc: "기름진 음식, 음주, 불규칙한 식습관으로 소화기에 쌓인 습과 열이 손발 끝 피부로 드러날 수 있습니다.",
  },
  {
    title: "만성 스트레스",
    desc: "긴장과 과로가 누적되면 열이 위와 말초로 몰리고 피부 면역이 예민해져 수포가 반복되기 쉽습니다.",
  },
  {
    title: "외부 자극과 직업 요인",
    desc: "물, 세제, 금속, 장갑, 소독제 같은 반복 자극은 손 피부 장벽을 무너뜨려 재발 고리를 만듭니다.",
  },
  {
    title: "다한증과 아토피 체질",
    desc: "손발 땀이 많거나 아토피 피부 경향이 있으면 피부 장벽이 약해 한포진이 더 쉽게 반복될 수 있습니다.",
  },
  {
    title: "연고 의존과 장벽 약화",
    desc: "증상 억제에만 의존하면 피부 재생력과 방어력이 떨어져 끊을 때 다시 흔들릴 수 있습니다.",
  },
];

const symptoms = [
  { title: "투명한 작은 수포", desc: "손가락 옆면, 손바닥, 발바닥에 좁쌀 같은 물집이 무리 지어 생깁니다." },
  { title: "극심한 가려움과 열감", desc: "수포가 보이기 전부터 가렵거나 손이 화끈거리는 느낌이 들 수 있습니다." },
  { title: "진물과 따가움", desc: "물집이 터지면 진물이 나고 작은 상처에도 따갑고 쓰라립니다." },
  { title: "각질과 껍질 벗겨짐", desc: "수포가 가라앉은 뒤 피부 껍질이 벗겨지고 지저분해 보일 수 있습니다." },
  { title: "갈라짐과 통증", desc: "만성화되면 손바닥이 두꺼워지고 갈라져 물만 닿아도 아픕니다." },
  { title: "세균 감염 위험", desc: "긁은 상처가 반복되면 노란 고름이나 붓기처럼 2차 감염 신호가 생길 수 있습니다." },
];

const patterns = [
  {
    type: "습열형",
    sign: "수포와 진물이 많고 가려움이 매우 심한 급성기 타입",
    method: "청열해독",
    desc: "손발 끝으로 몰린 습한 열을 낮춰 수포 확산, 진물, 화끈거림을 먼저 안정시킵니다.",
  },
  {
    type: "비허형",
    sign: "소화가 약하고 몸이 무거우며 증상이 지지부진하게 오래가는 타입",
    method: "건비제습",
    desc: "비위 기능을 도와 몸속 습담이 피부로 반복 배출되는 흐름을 줄입니다.",
  },
  {
    type: "혈허풍조형",
    sign: "피부가 두꺼워지고 딱딱하게 갈라지며 각질이 심한 만성 타입",
    method: "양혈윤조",
    desc: "피부를 윤택하게 하는 혈과 진액을 보충해 갈라짐, 건조, 태선화를 다룹니다.",
  },
  {
    type: "간울기체형",
    sign: "스트레스 뒤 손 열감과 수포가 갑자기 올라오는 타입",
    method: "소간해울",
    desc: "막힌 기운을 풀고 자율신경의 긴장을 낮춰 스트레스성 재발을 줄입니다.",
  },
];

const treatmentSteps = [
  {
    title: "1개월 차: 염증 진정과 수포 확산 억제",
    desc: "가장 괴로운 가려움과 새 수포가 올라오는 빈도를 줄이고 진물과 열감을 안정시킵니다.",
    goals: ["새 수포 빈도 감소", "가려움 강도 완화", "진물·열감 진정"],
  },
  {
    title: "2~3개월 차: 피부 재생과 장벽 강화",
    desc: "손상된 피부가 탈락하고 새살이 올라오도록 도와 갈라짐과 각질 반복을 줄입니다.",
    goals: ["갈라진 틈 회복", "각질과 껍질 벗겨짐 완화", "연고 사용량 점검"],
  },
  {
    title: "3~4개월 차: 면역 안정과 재발 방지",
    desc: "물, 세제, 스트레스 같은 일상 자극에도 쉽게 수포가 올라오지 않는 상태를 목표로 합니다.",
    goals: ["재발 간격 연장", "피부 장벽 안정", "직업·생활 관리 루틴 형성"],
  },
];

const differentialDiseases = [
  { title: "습진", href: "/programs/skin/eczema", desc: "진물, 갈라짐, 반복 피부염" },
  { title: "아토피 피부염", href: "/programs/skin/atopic-dermatitis", desc: "전신 면역 경향과 접히는 부위 가려움" },
  { title: "건선", href: "/programs/skin/psoriasis", desc: "은백색 각질과 두꺼운 판상 홍반" },
  { title: "소양증", href: "/programs/skin/itching", desc: "수포 없이 지속되는 만성 가려움" },
  { title: "두드러기", href: "/programs/skin/urticaria", desc: "팽진이 올라왔다 사라지는 면역 반응" },
  { title: "피부질환 클리닉", href: "/programs/skin", desc: "난치성 피부질환 전체 안내" },
];

const faqItems = [
  {
    q: "한포진은 전염되나요?",
    a: "전염되지 않습니다. 무좀처럼 곰팡이균이 옮는 질환이 아니라 손발 피부 장벽과 면역 반응이 흔들리며 반복되는 수포성 습진입니다.",
  },
  {
    q: "한포진과 무좀은 어떻게 다른가요?",
    a: "둘 다 발바닥 수포처럼 보일 수 있어 감별이 중요합니다. 무좀은 곰팡이 감염이라 항진균 치료가 필요하고, 한포진은 습진성 염증과 면역 불균형을 중심으로 봅니다.",
  },
  {
    q: "스테로이드 연고를 바로 끊어야 하나요?",
    a: "갑자기 중단하면 리바운드로 악화될 수 있습니다. 현재 사용량과 피부 상태를 확인하면서 피부가 버틸 수 있는 방향으로 단계적으로 줄이는 것이 좋습니다.",
  },
  {
    q: "손을 자주 쓰는 직업인데 치료가 가능할까요?",
    a: "가능합니다. 미용, 요리, 간호, 세척 업무처럼 손 자극을 피하기 어려운 경우에는 치료와 함께 장갑 사용, 보습, 세정 습관을 현실적으로 조정합니다.",
  },
  {
    q: "치료 기간은 얼마나 걸리나요?",
    a: "초기 수포 위주라면 비교적 빠르게 진정될 수 있지만, 2년 이상 반복되거나 피부가 두껍게 변한 만성 한포진은 3~6개월 이상의 관리가 필요할 수 있습니다.",
  },
  {
    q: "비대면 상담도 가능한가요?",
    a: "가능합니다. 손발 수포 사진, 진물 여부, 직업적 노출, 연고 사용 이력, 악화 시기를 함께 확인하면 상담 방향을 잡는 데 도움이 됩니다.",
  },
];

const pompholyxReviews = [
  {
    title: "[31세, 여성] 손가락 사이 수포와 진물이 반복된 한포진",
    desc: "손가락 옆면 수포와 야간 가려움이 심했던 경우. 습열과 직업적 물 노출을 함께 관리했습니다.",
    patient: "김**",
  },
  {
    title: "[36세, 남성] 미용 업무 중 갈라짐과 통증이 심한 손 습진",
    desc: "가위질과 샴푸 업무로 손 장벽이 약해진 사례. 피부 재생과 생활 관리 루틴을 함께 정리했습니다.",
    patient: "강**",
  },
  {
    title: "[24세, 여성] 시험 스트레스 뒤 발바닥 수포가 반복된 사례",
    desc: "스트레스와 다한증이 겹치며 발바닥 수포가 올라오던 경우. 간울과 습열 패턴을 함께 살폈습니다.",
    patient: "이**",
  },
];

export default function PompholyxPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 한방 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">한포진</span>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-paper-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(111,92,67,0.15),transparent_34%),radial-gradient(circle_at_8%_86%,rgba(38,45,35,0.08),transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[760px] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[0.92fr_1.08fr] md:px-8 lg:py-24">
          <div>
            <div className="mb-14 inline-flex items-center gap-3 rounded-full border border-line bg-white/70 px-4 py-3 shadow-sm">
              <Image src={doctor.photo} alt={`${doctor.name} ${doctor.role}`} width={42} height={42} className="h-10 w-10 rounded-full object-cover" />
              <div className="text-sm leading-snug">
                <p className="text-ink-soft">의료 감수</p>
                <p className="font-bold">{doctor.name} {doctor.role}</p>
              </div>
            </div>
            <p className="mb-5 text-lg font-semibold leading-8 text-brown keep-words">반복되는 수포와 갈라짐, 몸속 습열부터 살핍니다.</p>
            <h1 className="font-serif text-[clamp(3.4rem,7.5vw,6.3rem)] leading-[0.95] tracking-normal text-ink keep-words">
              한포진<br />한방 진료
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-ink-soft keep-words">
              손발의 작은 물집이 가려움, 진물, 갈라짐으로 이어진다면 피부 겉만의 문제가 아닐 수 있습니다. 습열과 피부 장벽을 함께 봅니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/reserve" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-bold text-white shadow-lg shadow-black/10 transition hover:-translate-y-1">
                <CalendarIcon />
                진료 예약하기
              </Link>
              <Link href="/programs/skin" className="inline-flex items-center gap-2 rounded-full border border-line bg-white/75 px-7 py-4 text-base font-bold text-ink transition hover:-translate-y-1 hover:border-ink">
                <ClipboardIcon />
                피부질환 클리닉
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[18px] border border-line bg-white shadow-2xl shadow-black/10">
              <Image
                src="/images/programs/skin-hero.png"
                alt="한포진 한방 진료 이미지"
                width={900}
                height={1100}
                priority
                className="h-[620px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-line bg-white/92 p-6 shadow-xl backdrop-blur">
              <p className="mb-4 font-bold text-ink">한포진 한방 진료</p>
              <div className="space-y-3 text-base font-semibold text-ink">
                <p className="flex items-center gap-3"><StarIcon /> 손발 수포·극심한 가려움</p>
                <p className="flex items-center gap-3"><StarIcon /> 습열 진정·피부 장벽 회복</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-4 md:px-8">
          {summaryRows.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-line bg-paper-soft p-6">
              <p className="mb-3 text-sm font-bold text-brown">{label}</p>
              <p className="text-lg font-semibold leading-7 keep-words">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Recurring Signals"
            title="왜 연고를 끊으면 다시 물집이 올라올까요?"
            desc="수포를 잠깐 눌러도 몸속 습열과 피부 장벽 약화가 그대로라면 손발 끝 재발은 반복될 수 있습니다."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {visitReasons.map((reason) => (
              <div key={reason} className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm">
                <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-white"><CheckIcon /></span>
                <p className="text-lg font-semibold leading-8 keep-words">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.02fr_0.98fr] md:px-8">
          <div className="rounded-[22px] border border-ink bg-white p-8 shadow-xl md:p-12">
            <span className="mb-6 inline-flex rounded-full border border-ink px-4 py-2 text-sm font-bold">특별 진단 시스템</span>
            <h2 className="font-serif text-[clamp(2.1rem,4.6vw,4rem)] leading-tight keep-words">
              한포진은 손발 끝에 드러난 습열과 장벽 약화의 신호입니다
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-ink-soft keep-words">
              <p>한포진은 손바닥, 발바닥, 손가락 측면에 투명한 수포가 생기는 만성 재발성 습진입니다. 물집이 터진 뒤에는 각질과 갈라짐, 통증이 남기 쉽습니다.</p>
              <p>초근목피한의원은 수포의 위치와 진물, 손발 땀, 직업적 노출, 소화 상태, 스트레스 후 악화 여부를 함께 확인합니다.</p>
              <p>겉의 염증만 누르기보다 습열을 낮추고 피부 장벽을 회복해 손발이 스스로 버틸 수 있는 환경을 만드는 데 집중합니다.</p>
            </div>
            <div className="mt-8 border-t border-ink pt-6 text-sm font-bold">맥진·문진 기반 전신 진단</div>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-line bg-white shadow-xl">
            <Image
              src="/images/programs/skin-mechanism.png"
              alt="한포진 습열과 피부 장벽 진단"
              width={900}
              height={760}
              className="h-[560px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1fr_0.96fr] md:px-8">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brown">Core Solution</p>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4.6rem)] leading-tight keep-words">
              수포 재발 고리를 줄이는<br />핵심 치료 원리
            </h2>
            <div className="mt-10 space-y-7">
              {patterns.map((pattern, index) => (
                <div key={pattern.type} className="grid grid-cols-[56px_1fr] gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-paper-soft text-lg font-bold">{index + 1}</div>
                  <div>
                    <p className="text-xl font-bold">{pattern.method} <span className="text-base text-brown">/{pattern.type}</span></p>
                    <p className="mt-2 text-base font-semibold leading-7 text-ink-soft keep-words">{pattern.sign}</p>
                    <p className="mt-2 text-lg leading-8 text-ink-soft keep-words">{pattern.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[22px] border border-line bg-paper-soft shadow-xl">
            <Image
              src="/images/programs/skin-treatment.png"
              alt="한포진 핵심 치료 원리"
              width={900}
              height={900}
              className="h-[560px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Main Symptoms"
            title="진행 단계에 따라 달라지는 한포진 증상"
            desc="초기에는 수포와 가려움, 만성기에는 각질·갈라짐·통증이 중심이 됩니다."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {symptoms.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-white p-7 shadow-sm">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-lg leading-8 text-ink-soft keep-words">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Why It Happens"
            title="손발 수포를 반복시키는 몸속 원인"
            desc="피부 자극만이 아니라 습열, 비위 기능, 스트레스, 직업적 노출이 함께 작용할 수 있습니다."
          />
          <div className="grid gap-5 md:grid-cols-5">
            {causes.map((cause) => (
              <div key={cause.title} className="rounded-2xl border border-line bg-paper-soft p-6">
                <h3 className="text-lg font-bold">{cause.title}</h3>
                <p className="mt-4 text-base leading-7 text-ink-soft keep-words">{cause.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionTitle
            eyebrow="Treatment Timeline"
            title="단계별 한포진 치료 흐름"
            desc="수포와 가려움을 먼저 안정시키고, 갈라진 피부를 회복한 뒤 재발을 줄이는 순서로 진행합니다."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {treatmentSteps.map((step, index) => (
              <article key={step.title} className="rounded-[18px] border border-line bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-lg font-bold text-white">{index + 1}</div>
                <h3 className="text-2xl font-bold leading-snug keep-words">{step.title}</h3>
                <p className="mt-4 text-lg leading-8 text-ink-soft keep-words">{step.desc}</p>
                <ul className="mt-6 space-y-3">
                  {step.goals.map((goal) => (
                    <li key={goal} className="flex items-center gap-3 text-base font-semibold">
                      <CheckIcon />
                      {goal}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brown">Care Note</p>
            <h2 className="font-serif text-[clamp(2.2rem,4.8vw,4rem)] leading-tight keep-words">무좀과 접촉성 피부염을 먼저 감별합니다</h2>
            <p className="mt-6 text-lg leading-9 text-ink-soft keep-words">
              한포진은 무좀, 접촉성 피부염, 손바닥 건선과 비슷해 보일 수 있습니다. 수포의 위치, 각질 양상, 진균 감염 가능성, 자극 물질 노출을 함께 살핍니다.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {differentialDiseases.map((item) => (
              <Link key={item.title} href={item.href} className="group rounded-2xl border border-line bg-paper-soft p-6 transition hover:-translate-y-1 hover:border-ink hover:bg-white">
                <h3 className="flex items-center justify-between text-xl font-bold">
                  {item.title}
                  <ArrowIcon />
                </h3>
                <p className="mt-3 text-base leading-7 text-ink-soft keep-words">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brown">Clinic Notes</p>
              <h2 className="font-serif text-[clamp(2.2rem,4.8vw,4rem)] leading-tight">진료 노트</h2>
              <p className="mt-4 text-lg text-ink-soft">초근목피한의원에서 한포진과 손발 피부 장벽을 함께 살핀 사례입니다.</p>
            </div>
            <Link href="/community/reviews" className="inline-flex items-center gap-2 font-bold text-brown">
              전체 후기 보기 <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {pompholyxReviews.map((review) => (
              <LockedReviewCard
                key={review.title}
                title={review.title}
                summary={review.desc}
                patient={review.patient}
                doctor={doctor.name}
              />
            ))}
          </div>
          <LockedReviewGate count={3} />
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.88fr_1.12fr] md:px-8">
          <aside className="rounded-[18px] border border-line bg-paper-soft p-8 md:sticky md:top-24 md:self-start">
            <p className="text-sm font-bold text-brown">담당 의료진</p>
            <h2 className="mt-3 font-serif text-4xl">{doctor.role} {doctor.name}</h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft keep-words">
              한포진은 손발에 보이는 질환이지만, 몸속 습열과 피부 장벽, 생활 자극이 함께 얽혀 있습니다. 반복되는 수포의 이유를 차분히 찾겠습니다.
            </p>
            <Link href={`/about/doctors/${doctor.slug}`} className="mt-7 inline-flex items-center gap-2 font-bold text-brown">
              의료진 소개 더보기 <ArrowIcon />
            </Link>
          </aside>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-brown">FAQ</p>
            <h2 className="font-serif text-[clamp(2.2rem,4.8vw,4rem)] leading-tight">자주 묻는 질문</h2>
            <div className="mt-8 divide-y divide-line rounded-[18px] border border-line bg-paper-soft">
              {faqItems.map((item) => (
                <details key={item.q} className="group p-6 open:bg-white">
                  <summary className="cursor-pointer list-none text-xl font-bold leading-snug keep-words">
                    Q. {item.q}
                  </summary>
                  <p className="mt-4 text-lg leading-8 text-ink-soft keep-words">A. {item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-[1fr_auto] md:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brown">Remote Care</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight keep-words">손발 사진과 생활 노출을 함께 확인합니다</h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft keep-words">
              수포 사진, 진물과 갈라짐 여부, 물·세제·장갑 노출, 연고 사용 이력, 악화되는 계절과 스트레스를 함께 확인하면 진료 방향을 더 선명하게 잡을 수 있습니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/reserve" className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 font-bold text-white">상담 예약</Link>
            <Link href="/programs/skin" className="inline-flex items-center justify-center rounded-full border border-line bg-white px-7 py-4 font-bold">피부질환 전체 보기</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl rounded-[18px] border border-line bg-paper-soft px-6 py-8 text-base leading-8 text-ink-soft md:px-8">
          <p className="font-bold text-ink">의료 정보 안내</p>
          <p className="mt-2 keep-words">
            본 콘텐츠는 일반적인 한방 의료 정보 제공을 위한 참고 자료이며, 개별 환자의 진단·처방을 대신할 수 없습니다. 정확한 진단과 치료 계획은 한의사 진료를 통해 결정해주세요.
          </p>
          <p className="mt-2">주소: {clinicInfo.address} · 전화: {clinicInfo.phone}</p>
        </div>
      </section>
    </main>
  );
}
