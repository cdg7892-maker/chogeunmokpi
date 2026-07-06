import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors, reviews } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 유성구 반석동 | 습진 피부염 한방 진료 | 초근목피한의원",
  description:
    "대전 유성구 반석동 습진, 피부염, 습창으로 반복되는 가려움·진물·각질을 겪는 분께. 한약과 한방 진료로 피부 면역 환경과 재발 고리를 함께 살핍니다.",
  alternates: {
    canonical: "/programs/skin/eczema",
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h6" />
    </svg>
  );
}

function SkinIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 19c2-4 2-8 0-12 4 2 8 2 14 0-2 4-2 8 0 12-6-2-10-2-14 0Z" />
      <path d="M9 10c1.5 1 4.5 1 6 0M8.5 14c2 1.2 5 1.2 7 0" />
    </svg>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-root">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-5 text-base leading-loose text-ink-soft md:text-lg">
          {desc}
        </p>
      )}
    </div>
  );
}

const doctor = doctors[0];
const eczemaReviews = reviews.filter((review) => review.programSlug === "eczema");

const summaryRows = [
  ["진료 질환", "습진, 피부염, 습창, 접촉성 피부염, 만성 손습진"],
  ["주요 증상", "가려움, 붉은 반점, 진물, 각질, 갈라짐, 피부 두꺼워짐"],
  ["치료 방향", "피부 면역 환경 안정, 습열·혈허·비허습성·간울 패턴 조절"],
  ["상담 대상", "반복 재발, 스테로이드 의존, 손·얼굴·몸 습진, 비염·소화불량 동반"],
];

const visitReasons = [
  "스테로이드 연고를 바르면 그때뿐이고 끊으면 다시 심해집니다.",
  "손가락 마디마다 갈라져 물이 닿는 일상이 힘듭니다.",
  "갑자기 손등이 붓고 가려워 긁다 보면 진물이 납니다.",
  "얼굴이 붉고 각질이 일어나 사람 만나는 일이 부담스럽습니다.",
  "밤마다 긁느라 잠을 설쳐 다음 날 생활이 무너집니다.",
  "비염이나 소화불량까지 같이 있어 몸속 면역이 걱정됩니다.",
  "좋다는 보습제를 써도 계절이 바뀌면 다시 올라옵니다.",
  "연고 없이도 깨끗한 피부로 지내고 싶습니다.",
];

const causes = [
  {
    title: "무너진 면역 균형",
    desc: "스트레스와 과로가 누적되면 면역 반응이 예민해지고 정상 피부까지 공격받기 쉽습니다.",
  },
  {
    title: "잘못된 생활 습관",
    desc: "밀가루, 가공식품, 음주, 수면 부족은 체내 습열을 늘려 피부 염증을 악화시킬 수 있습니다.",
  },
  {
    title: "스테로이드 의존과 반동",
    desc: "연고에만 의존하면 피부 자체의 재생력과 장벽 회복이 늦어져 끊을 때 다시 흔들릴 수 있습니다.",
  },
  {
    title: "체질적 취약성",
    desc: "피부가 약하거나 비위, 폐, 간 기능이 예민한 체질은 습진이 반복될 가능성이 높습니다.",
  },
  {
    title: "주거와 작업 환경",
    desc: "세제, 금속, 장갑, 물, 건조한 공기 같은 반복 자극이 피부 염증의 방아쇠가 됩니다.",
  },
];

const symptoms = [
  { title: "참기 힘든 가려움", desc: "밤에 심해져 피가 날 때까지 긁게 되는 경우가 많습니다." },
  { title: "진물과 붉은 반점", desc: "피부가 붓고 투명하거나 노란 진물이 반복될 수 있습니다." },
  { title: "태선화", desc: "반복 염증으로 피부가 두꺼워지고 코끼리 가죽처럼 거칠어집니다." },
  { title: "각질과 갈라짐", desc: "피부가 마르고 비늘처럼 벗겨지며 손발은 찢어지는 통증이 생깁니다." },
  { title: "소화기 동반 증상", desc: "만성 소화불량, 복부 팽만, 피로감이 함께 나타날 수 있습니다." },
  { title: "알레르기 동반 증상", desc: "비염, 천식, 결막염처럼 면역 과민 증상이 같이 보이기도 합니다." },
];

const patterns = [
  {
    type: "습열형",
    sign: "붉고 뜨겁고 진물이 많은 급성기",
    method: "청열해독",
    desc: "피부에 몰린 열과 습을 줄여 진물, 붉은기, 화끈거림을 먼저 가라앉힙니다.",
  },
  {
    type: "혈허풍조형",
    sign: "오래된 습진으로 건조, 각질, 태선화가 깊은 만성기",
    method: "양혈윤조",
    desc: "피부를 윤택하게 하는 기혈과 진액을 보충해 가려움과 갈라짐을 다룹니다.",
  },
  {
    type: "비허습성형",
    sign: "소화기가 약하고 몸이 잘 붓고 습진이 오래 가는 타입",
    method: "건비거습",
    desc: "비위 기능을 도와 몸속 습담이 피부로 반복 배출되는 흐름을 줄입니다.",
  },
  {
    type: "간울형",
    sign: "스트레스와 감정 변화에 따라 갑자기 심해지는 타입",
    method: "소간해울",
    desc: "막힌 기운을 풀고 열이 피부로 치솟는 반응을 낮추는 방향입니다.",
  },
];

const treatmentSteps = [
  {
    title: "1개월 차: 염증 진정과 독소 배출",
    desc: "가려움의 강도와 진물, 붉은기를 먼저 줄여 피부가 쉴 수 있는 상태를 만듭니다.",
    goals: ["가려움 강도 감소", "진물과 붉은기 진정", "일시적 배출 반응 확인"],
  },
  {
    title: "2~3개월 차: 피부 장벽 재건",
    desc: "속살이 회복되고 보호막이 다시 만들어지도록 피부 재생 주기를 살핍니다.",
    goals: ["각질과 갈라짐 완화", "피부결 부드러움 회복", "소화와 수면 상태 개선"],
  },
  {
    title: "3~6개월 차: 면역 안정과 재발 방지",
    desc: "치료를 중단해도 피부가 스스로 버틸 수 있는 상태를 목표로 생활 관리까지 정리합니다.",
    goals: ["연고 의존도 감소", "재발 고리 차단", "자가 관리 습관 형성"],
  },
];

const differentialDiseases = [
  { title: "아토피 피부염", href: "/programs/skin/atopic-dermatitis", desc: "뿌리 깊은 만성 염증과 가려움" },
  { title: "건선", href: "/programs/skin/psoriasis", desc: "은백색 각질과 경계가 뚜렷한 판상 홍반" },
  { title: "한포진", href: "/programs/skin/pompholyx", desc: "손발의 작은 수포와 극심한 가려움" },
  { title: "접촉성 피부염", href: "/programs/skin", desc: "특정 물질 접촉 뒤 반복되는 피부염" },
  { title: "지루성 피부염", href: "/programs/skin/seborrheic-dermatitis", desc: "얼굴과 두피의 기름진 염증과 각질" },
];

const faqItems = [
  {
    q: "습진은 왜 자꾸 재발하나요? 연고를 바르면 그때뿐입니다.",
    a: "겉의 염증만 빠르게 누르면 피부 면역 환경과 장벽 회복은 남아 있을 수 있습니다. 재발이 잦다면 원인 체질과 생활 자극을 함께 확인해야 합니다.",
  },
  {
    q: "스테로이드 연고를 오래 썼는데 한약으로 바꿀 수 있나요?",
    a: "가능합니다. 다만 갑자기 끊으면 반동 현상이 생길 수 있어 피부 상태와 사용 기간을 확인한 뒤 단계적으로 조절합니다.",
  },
  {
    q: "습진인데 소화가 안 되고 비염도 같이 옵니다. 관련이 있나요?",
    a: "한의학에서는 습진을 피부만이 아니라 몸 전체 면역과 소화기 기능의 문제로 봅니다. 소화불량, 비염, 피로가 함께 있으면 전신 균형을 같이 살핍니다.",
  },
  {
    q: "치료 기간은 어느 정도 걸리나요?",
    a: "급성 습진은 빠르게 안정될 수 있지만, 오래된 손습진이나 태선화가 있는 경우 3개월 이상 꾸준한 관리가 필요할 수 있습니다.",
  },
  {
    q: "비대면으로도 피부 상태를 볼 수 있나요?",
    a: "고화질 사진과 증상 기록, 생활 환경, 기존 치료 이력을 바탕으로 상담이 가능합니다. 필요 시 내원 진료를 안내합니다.",
  },
  {
    q: "한약을 먹을 때 피해야 할 음식이 있나요?",
    a: "무조건 제한하기보다 피부를 악화시키는 개인별 자극을 찾습니다. 기름진 음식, 음주, 과도한 당류, 수면 부족부터 현실적으로 조정합니다.",
  },
];

const remoteSteps = ["온라인 진료 신청", "증상·생활습관·병력 사전 작성", "원장 전화 또는 화상 상담", "한약 조제 후 배송", "복약 지도와 경과 체크"];
const longtailAreas = ["반석동", "노은동", "지족동", "전민동", "관평동", "도안동", "봉명동", "궁동", "죽동", "유성구"];

export default function EczemaPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 한방 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">습진</span>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-paper-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(111,92,67,0.14),transparent_32%),radial-gradient(circle_at_8%_90%,rgba(38,45,35,0.08),transparent_28%)]" />
        <div className="relative mx-auto grid min-h-[760px] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:px-8 lg:py-24">
          <div>
            <div className="mb-16 inline-flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3 shadow-sm">
              <Image src={doctor.photo} alt={doctor.name} width={42} height={42} className="rounded-full object-cover" />
              <div className="text-sm leading-tight">
                <p className="text-xs font-medium text-ink-soft">의료 감수</p>
                <p className="font-bold text-ink">{doctor.name} 대표원장</p>
              </div>
            </div>
            <p className="mb-5 text-lg font-semibold leading-relaxed text-root md:text-xl">
              반복되는 염증의 고리를 끊는<br />
              한의학적 피부 면역 재건
            </p>
            <h1 className="font-display text-6xl leading-[1.05] text-ink md:text-7xl lg:text-8xl">
              습진
            </h1>
            <p className="mt-5 text-sm font-medium tracking-[0.14em] text-ink-soft">
              습진 · 피부염 · 습창 · Eczema
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/reserve" className="ch-btn-primary">
                <CalendarIcon />
                진료 예약하기
              </Link>
              <Link href="#consult" className="ch-btn-secondary">
                <ClipboardIcon />
                비대면 상담 안내
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/4.8] overflow-hidden rounded-2xl border border-line bg-card shadow-xl shadow-ink/10">
              <Image
                src="/images/programs/eczema-hero.png"
                alt="습진 한방 진료 상담 이미지"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-7 left-8 right-4 rounded-2xl border border-line bg-card/95 p-6 shadow-xl shadow-ink/10 backdrop-blur">
              <div className="space-y-4 text-sm font-bold text-ink">
                <p className="flex items-center gap-3"><StarIcon />피부 면역 환경 재건</p>
                <p className="flex items-center gap-3"><StarIcon />연고 의존도 조절과 재발 관리</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:px-8 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-16">
          <section className="rounded-2xl border border-line bg-card p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-xl font-bold text-ink">습진 핵심 정보</h2>
            <div className="divide-y divide-line">
              {summaryRows.map(([label, value]) => (
                <div key={label} className="grid gap-2 py-4 text-sm md:grid-cols-[150px_1fr]">
                  <p className="font-bold text-root">{label}</p>
                  <p className="leading-relaxed text-ink-soft">{value}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle
              eyebrow="Why Patients Visit"
              title="이런 표현으로 진료실을 찾습니다"
              desc="습진은 단순히 피부 겉면의 염증이 아니라 몸속 면역 불균형이 밖으로 드러난 결과인 경우가 많습니다."
              center
            />
            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {visitReasons.map((reason) => (
                <div key={reason} className="rounded-2xl border border-line bg-card px-5 py-4 text-sm font-medium leading-relaxed text-ink-soft shadow-sm">
                  “{reason}”
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-ink px-6 py-5 text-sm font-semibold leading-loose text-paper">
              비슷한 표현이 있다면 습진을 한 번 의심해볼 수 있습니다. 겉의 염증만 누르기보다 몸속 환경을 함께 보아야 합니다.
            </div>
          </section>

          <section className="rounded-2xl border border-line bg-card p-6 md:p-9">
            <SectionTitle eyebrow="Medical Column" title="습진이란 무엇인가요?" />
            <div className="mt-8 space-y-5 text-[15px] leading-loose text-ink-soft">
              <p>
                습진은 가려움, 붉은 반점, 진물, 각질이 동반되는 염증성 피부질환을 통칭하는 말입니다. 아토피 피부염, 한포진, 접촉성 피부염, 만성 손습진처럼 이름은 달라도 피부 장벽이 무너지고 면역 반응이 과열된다는 공통점이 있습니다.
              </p>
              <p>
                병원에서 원인이 명확하지 않다거나 평생 관리해야 한다는 말을 듣는 분들이 많습니다. 하지만 습진은 감염성 질환이라기보다 피부와 몸속 면역 환경의 취약성이 누적되어 나타나는 경우가 많습니다.
              </p>
              <p>
                한의학에서는 몸속의 습과 열, 혈의 부족, 소화기 기능 저하, 스트레스성 울체가 피부로 터져 나오는 흐름을 살핍니다. 연고에만 의존하지 않고 재발의 고리를 줄이는 몸 상태를 만드는 것이 치료의 핵심입니다.
              </p>
            </div>
          </section>

          <section className="grid gap-6 rounded-2xl border border-line bg-card p-6 md:grid-cols-[220px_1fr] md:p-8">
            <Image src={doctor.photo} alt={doctor.name} width={180} height={180} className="rounded-2xl border border-line object-cover" />
            <div>
              <p className="text-sm font-semibold text-root">담당 의료진</p>
              <h2 className="mt-2 font-display text-3xl text-ink">대표원장 {doctor.name}</h2>
              <p className="mt-5 text-[15px] leading-loose text-ink-soft">
                “연고를 바르면 잠시 가라앉다가, 끊으면 다시 올라오는 상황을 반복하며 지친 분들이 많습니다. 습진은 단순히 피부 겉면의 문제가 아닙니다. 몸속 면역 체계가 보내는 신호로 보고, 염증이 반복되는 환경을 바꾸는 길을 함께 찾아드리겠습니다.”
              </p>
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="Cause Cascade" title="습진의 원인은 어떻게 누적되나요?" />
            <div className="mt-10 space-y-4">
              {causes.map((cause, index) => (
                <article key={cause.title} className="grid gap-4 rounded-2xl border border-line bg-card p-5 shadow-sm md:grid-cols-[60px_1fr]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper text-lg font-bold text-root">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{cause.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{cause.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="Symptoms" title="습진 주요 증상" desc="습진은 피부 증상만이 아니라 전신 컨디션과도 이어져 나타나는 경우가 많습니다." />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {symptoms.map((symptom) => (
                <article key={symptom.title} className="ch-card ch-card-hover bg-card">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-paper text-root">
                    <SkinIcon />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-ink">{symptom.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{symptom.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 rounded-2xl border border-line bg-card p-6 md:grid-cols-[1fr_0.85fr] md:p-8">
            <div>
              <SectionTitle eyebrow="Special Diagnosis" title="문진, 맥진, 복진으로 몸속 환경을 함께 봅니다" />
              <div className="mt-7 space-y-4 text-[15px] leading-loose text-ink-soft">
                <p>
                  습진은 같은 이름이어도 원인이 모두 다릅니다. 급성 진물형인지, 오래된 건조·태선화형인지, 소화기가 약해 습이 쌓이는 타입인지, 스트레스에 따라 갑자기 번지는 타입인지 확인해야 합니다.
                </p>
                <p>
                  초근목피한의원에서는 증상 사진, 생활 환경, 연고 사용 이력, 소화와 수면, 스트레스 반응을 함께 살피고 변증에 따라 한약의 방향을 조절합니다.
                </p>
                <p>
                  목표는 겉의 증상만 덮는 것이 아니라 약 없이도 피부가 스스로 회복하는 몸 상태를 만드는 것입니다.
                </p>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-line bg-paper">
              <Image src="/images/programs/eczema-diagnosis.png" alt="습진 한방 진단 상담 이미지" fill sizes="(max-width: 768px) 90vw, 360px" className="object-cover" />
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="Pattern Treatment" title="습진은 변증에 따라 치료 방향이 달라집니다" />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {patterns.map((pattern) => (
                <article key={pattern.type} className="rounded-2xl border border-line bg-card p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-root">{pattern.method}</p>
                  <h3 className="mt-3 text-2xl font-bold text-ink">{pattern.type}</h3>
                  <p className="mt-3 text-sm font-semibold text-ink">{pattern.sign}</p>
                  <p className="mt-4 text-sm leading-loose text-ink-soft">{pattern.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-line bg-card p-6 md:p-9">
            <SectionTitle eyebrow="Treatment Journey" title="습진 치료 단계별 경과" />
            <div className="mt-10 space-y-0">
              {treatmentSteps.map((step, index) => (
                <article key={step.title} className="relative grid gap-4 pb-8 last:pb-0 md:grid-cols-[56px_1fr]">
                  {index < treatmentSteps.length - 1 && (
                    <span className="absolute left-7 top-14 hidden h-[calc(100%-56px)] w-px bg-line md:block" />
                  )}
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-lg font-bold text-paper">
                    {index + 1}
                  </span>
                  <div className="rounded-2xl border border-line bg-paper p-5">
                    <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                    <p className="mt-3 text-sm leading-loose text-ink-soft">{step.desc}</p>
                    <ul className="mt-4 space-y-2">
                      {step.goals.map((goal) => (
                        <li key={goal} className="flex gap-3 text-sm text-ink-soft">
                          <span className="mt-0.5 text-root"><CheckIcon /></span>
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-root/25 bg-root/5 p-5 text-sm font-semibold leading-loose text-ink">
              오래 연고를 써온 분들은 반동 현상을 조절하며 6개월 이상 긴 호흡이 필요할 수 있습니다. 조급함보다 본질적인 회복에 집중하는 것이 결국 빠른 길입니다.
            </div>
          </section>

          <section id="consult" className="grid gap-8 rounded-2xl border border-line bg-card p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-line bg-paper md:min-h-full">
              <Image src="/images/programs/eczema-remote-care.png" alt="습진 비대면 한약 상담 이미지" fill sizes="(max-width: 768px) 90vw, 380px" className="object-cover" />
            </div>
            <div>
              <SectionTitle eyebrow="Remote Care" title="습진, 전국 어디서나 비대면 상담 가능합니다" />
              <p className="mt-6 text-[15px] leading-loose text-ink-soft">
                피부를 꾸준히 관찰하며 약을 조절하는 것이 습진 치료의 핵심입니다. 집에서도 증상 기록과 사진을 바탕으로 상담하고, 필요한 경우 한약 처방과 복약 지도를 받을 수 있습니다.
              </p>
              <ol className="mt-6 space-y-3">
                {remoteSteps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-sm font-medium text-ink-soft">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper text-xs font-bold text-root">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <Link href="/reserve" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper transition-transform hover:-translate-y-1">
                비대면 상담 신청
                <ArrowIcon />
              </Link>
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="Differential Guide" title="습진과 헷갈리는 피부 질환" desc="겉으로 비슷해 보여도 관리법은 달라집니다. 정확한 감별이 치료의 시작입니다." />
            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {differentialDiseases.map((disease) => (
                <Link key={disease.title} href={disease.href} className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-root hover:shadow-lg hover:shadow-ink/10">
                  <div>
                    <h3 className="font-bold text-ink">{disease.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{disease.desc}</p>
                  </div>
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="Treatment Reviews" title="습진 치료 후기" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {eczemaReviews.map((review) => (
                <LockedReviewCard
                  key={review.id}
                  title={review.title}
                  summary={review.summary}
                  patient={review.patient}
                  doctor={doctor.name}
                />
              ))}
            </div>
            <LockedReviewGate count={3} />
          </section>

          <section>
            <SectionTitle eyebrow="FAQ" title="습진 자주 묻는 질문" />
            <div className="mt-10 space-y-3">
              {faqItems.map((faq) => (
                <details key={faq.q} className="group rounded-2xl border border-line bg-card p-5">
                  <summary className="cursor-pointer list-none text-base font-bold text-ink">
                    Q. {faq.q}
                  </summary>
                  <p className="mt-4 text-sm leading-loose text-ink-soft">A. {faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="Related Conditions" title="습진과 함께 살펴볼 수 있는 피부 질환" />
            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {[...differentialDiseases, { title: "피부질환 클리닉 전체", href: "/programs/skin", desc: "피부 면역 프로그램 전체 보기" }].map((item) => (
                <Link key={item.title} href={item.href} className="flex items-center justify-between rounded-2xl border border-line bg-card px-5 py-4 font-bold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-root hover:shadow-lg hover:shadow-ink/10">
                  <span>
                    {item.title}
                    <span className="mt-1 block text-sm font-normal text-ink-soft">{item.desc}</span>
                  </span>
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-4">
            <div className="rounded-2xl bg-ink p-6 text-paper shadow-xl shadow-ink/10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/65">비대면 상담</p>
              <h3 className="mt-4 font-display text-2xl leading-tight">
                습진,<br />지금 상담하세요
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/75">
                증상 기록과 기존 치료 이력을 바탕으로 상담이 가능합니다.
              </p>
              <Link href="/reserve" className="mt-6 flex items-center justify-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-bold text-ink">
                습진 상담 신청
                <ArrowIcon />
              </Link>
              <a href={`tel:${clinicInfo.phone}`} className="mt-3 flex items-center justify-center rounded-full border border-paper/25 px-5 py-3 text-sm font-bold text-paper">
                전화 문의: {clinicInfo.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-line bg-card p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-root">프로그램</p>
              <Link href="/programs/skin" className="mt-4 flex items-center justify-between text-sm font-bold text-ink">
                피부질환 한방 클리닉
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <section className="border-y border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
          <details>
            <summary className="cursor-pointer text-sm font-bold text-ink">주변 진료 가능 지역 ({longtailAreas.length})</summary>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-xs text-ink-soft">
              {longtailAreas.map((area) => (
                <li key={area}>{area} 한의원</li>
              ))}
            </ul>
          </details>
        </div>
      </section>

      <section className="bg-ink px-5 py-14 text-center text-paper md:px-8">
        <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-paper/65">{clinicInfo.address}</p>
        <h2 className="font-display text-3xl leading-tight md:text-5xl">
          반복되는 습진,<br />피부 면역 환경부터 다시 보겠습니다.
        </h2>
        <Link href="/reserve" className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-1">
          습진 상담 예약
          <ArrowIcon />
        </Link>
      </section>

      <section className="bg-paper px-5 py-8 md:px-8">
        <p className="mx-auto max-w-5xl text-xs leading-relaxed text-ink-soft">
          본 콘텐츠는 일반적인 한방 의료 정보 제공을 위한 참고 자료이며, 개별 환자의 진단과 처방을 대신할 수 없습니다. 정확한 진단과 치료 계획은 한의사 진료를 통해 결정해주세요.
        </p>
      </section>
    </main>
  );
}
