import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AtopicQuiz from "@/components/programs/AtopicQuiz";
import { clinicInfo, doctors, reviews } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "아토피 피부염 | 대전 유성구 반석동 초근목피 한의원",
  description:
    "스테로이드 의존과 반복 재발을 줄이고 피부 장벽, 면역, 장부 균형을 함께 회복하는 아토피 피부염 상세 치료 안내입니다.",
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

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5 14.9 9l7.1.6-5.4 4.6 1.7 7-6.3-3.9L5.7 21.2l1.7-7-5.4-4.6L9.1 9 12 2.5Z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

function IconDrop() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3C8 8 6 11 6 15a6 6 0 0 0 12 0c0-4-2-7-6-12Z" />
    </svg>
  );
}

function IconFlame() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22a7 7 0 0 0 7-7c0-3.2-2-5.3-4-7.4-.7 2.2-2.2 3.5-4.3 4.3.4-3.2-.7-5.6-3.2-7.9C6.5 7 5 9.8 5 15a7 7 0 0 0 7 7Z" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.4 15.2A8 8 0 0 1 8.8 3.6 8.5 8.5 0 1 0 20.4 15.2Z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

const doctor = doctors[0];
const atopicReviews = reviews.filter((review) => review.programSlug === "atopic-dermatitis");

const symptoms = [
  { Icon: IconDrop, title: "가려움증", desc: "밤마다 심해지고 긁을수록 더 예민해지는 반복 가려움" },
  { Icon: IconFlame, title: "홍반", desc: "얼굴, 목, 팔오금이 붉어지고 열감이 올라오는 상태" },
  { Icon: IconShield, title: "진물", desc: "긁은 자리에서 삼출이 나오고 상처가 반복되는 피부" },
  { Icon: IconMoon, title: "태선화", desc: "피부가 거칠고 두꺼워지며 색소침착이 남는 만성 변화" },
];

const quotes = [
  "스테로이드를 끊으면 그때부터 다시 시작되는 것 같아요",
  "밤마다 가려워 잠을 제대로 못 자요",
  "피부가 두꺼워지고 거칠거칠해져요",
  "아이가 긁다가 피가 나면 부모로서 마음이 무너져요",
  "비염이랑 같이 오니 면역력이 바닥난 것 같아요",
  "얼굴이 빨개지는 바람에 사람 만나는 게 자꾸 두려워요",
  "약한 데 말고 체질을 바꿔서 뿌리를 뽑고 싶어요",
  "땀 나면 따갑고 가려워서 운동도 못 하겠어요",
  "겨울만 되면 피부가 갈라지고 피가 나요",
  "좋다는 화장품을 써도 결국 또 뒤집어져요",
  "긁지 말라고 소리 지르는 것도 이제 지쳐요",
  "스트레스 받으면 바로 피부부터 뒤집어져요",
  "진물이 나기 시작하면 진정이 안 돼서 무서워요",
  "약 없이도 깨끗한 피부로 살고 싶어요",
];

const causes = [
  { title: "장내 환경과 비위 기능 저하", desc: "소화와 흡수가 흔들리면 습열과 노폐물이 피부로 드러나기 쉽습니다." },
  { title: "스테로이드 의존성과 반동 현상", desc: "증상을 누르는 동안 피부 장벽과 면역 회복이 늦어질 수 있습니다." },
  { title: "만성 스트레스와 상열", desc: "긴장과 수면 부족은 열을 위로 띄우고 가려움 민감도를 높입니다." },
  { title: "유전적 소인과 알레르기 체질", desc: "비염, 천식, 식품 민감성과 이어지는 알레르기 행진을 함께 봅니다." },
  { title: "환경 자극과 건조함", desc: "계절 변화, 땀, 세제, 화장품, 건조한 공기가 반복 악화 요인이 됩니다." },
];

const patternCards = [
  {
    title: "습열형",
    hanja: "濕熱型",
    desc: "진물이 많고 피부가 붉으며 열감이 심한 급성기",
    treatment: "청열화습",
  },
  {
    title: "비허습곤형",
    hanja: "脾虛濕困型",
    desc: "소화가 약하고 피로하며 피부가 칙칙하고 잘 붓는 타입",
    treatment: "건비화습",
  },
  {
    title: "혈허풍조형",
    hanja: "血虛風燥型",
    desc: "매우 건조하고 가려움이 극심하며 피부가 두꺼워진 만성기",
    treatment: "자음양혈",
  },
  {
    title: "혈열형",
    hanja: "血熱型",
    desc: "영유아기, 얼굴과 두피 위주로 붉고 열이 많은 경우",
    treatment: "청열양혈",
  },
];

const timeline = [
  {
    title: "염증 진정 및 독소 배출",
    points: ["진물 감소와 열감 완화", "야간 가려움 개선", "스테로이드 사용은 의료진과 상의하며 조절"],
  },
  {
    title: "피부 장벽 재생 및 보습력 강화",
    points: ["태선화 완화와 피부결 회복", "각질 탈락 주기 정상화", "땀 분비와 체온 조절 회복"],
  },
  {
    title: "면역 안정 및 재발 방지",
    points: ["약 없이도 가려움이 거의 없는 상태 유지", "계절과 스트레스에도 크게 뒤집힘 감소", "생활 습관 내재화"],
  },
];

const differentials = [
  { title: "건선", href: "/programs/skin/psoriasis", desc: "두꺼운 판상 각질과 경계가 뚜렷한 홍반이 반복됩니다." },
  { title: "지루성 피부염", href: "/programs/skin/seborrheic-dermatitis", desc: "피지와 각질, 얼굴 열감이 함께 나타납니다." },
  { title: "접촉성 피부염", href: "/programs/skin", desc: "특정 물질 접촉 뒤 국소적으로 악화되는 양상을 봅니다." },
  { title: "한포진", href: "/programs/skin/pompholyx", desc: "손발의 작은 수포와 갈라짐, 심한 가려움이 특징입니다." },
  { title: "만성 두드러기", href: "/programs/skin/urticaria", desc: "부풀어 오르는 팽진과 이동하는 가려움이 반복됩니다." },
];

const faqs = [
  {
    q: "스테로이드를 오래 썼는데 한방 치료로 전환할 수 있나요?",
    a: "갑작스러운 중단은 반동 악화를 만들 수 있습니다. 현재 사용량과 피부 상태를 확인한 뒤 의료진과 상의하며 단계적으로 줄이는 방향을 잡습니다.",
  },
  {
    q: "성인이 되어 갑자기 얼굴 아토피가 생길 수도 있나요?",
    a: "가능합니다. 스트레스, 수면 부족, 장내 환경 변화, 화장품 자극, 상열 패턴이 겹치면 성인 얼굴 아토피처럼 나타날 수 있습니다.",
  },
  {
    q: "밤에 가려워 잠을 못 자는 것도 치료 대상인가요?",
    a: "수면 장애는 아토피 악화의 중요한 신호입니다. 야간 가려움을 낮추고 수면 리듬을 회복해야 피부 재생도 빨라집니다.",
  },
  {
    q: "아이의 비염이나 천식과도 관련이 있나요?",
    a: "아토피, 비염, 천식은 알레르기 행진으로 이어질 수 있습니다. 피부만 따로 보지 않고 호흡기와 면역 상태를 함께 평가합니다.",
  },
  {
    q: "치료 기간은 얼마나 걸리나요?",
    a: "초기라면 비교적 짧게 안정될 수 있지만, 태선화와 반복 감염이 있는 만성 아토피는 3개월 이상 꾸준한 관리가 필요할 수 있습니다.",
  },
  {
    q: "음식 관리는 꼭 해야 하나요?",
    a: "모든 음식을 무조건 제한하지는 않습니다. 악화 반응이 뚜렷한 음식, 과도한 당류, 음주, 자극적인 식습관부터 현실적으로 조정합니다.",
  },
];

const related = [
  { title: "습진", href: "/programs/skin/eczema" },
  { title: "두드러기", href: "/programs/skin/urticaria" },
  { title: "안면홍조", href: "/programs/skin/facial-flushing" },
  { title: "피부질환 클리닉", href: "/programs/skin" },
];

export default function AtopicDermatitisPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="transition-colors hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="transition-colors hover:text-ink">피부질환 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">아토피 피부염</span>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line bg-paper-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(111,92,67,0.13),transparent_32%),radial-gradient(circle_at_16%_88%,rgba(38,45,35,0.09),transparent_30%)]" />
        <div className="relative mx-auto grid min-h-[760px] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:px-8 lg:py-24">
          <div>
            <div className="mb-20 inline-flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-3 shadow-sm">
              <Image
                src={doctor.photo}
                alt={doctor.name}
                width={42}
                height={42}
                className="rounded-full object-cover"
              />
              <div className="text-sm leading-tight">
                <p className="text-xs font-medium text-ink-soft">의료 감수</p>
                <p className="font-bold text-ink">{doctor.name} 대표원장</p>
              </div>
            </div>

            <p className="mb-5 text-lg font-semibold leading-relaxed text-root md:text-xl">
              스테로이드에 의존하는 피부가 아니라<br />
              스스로 회복하는 피부로 돌아갑니다
            </p>
            <h1 className="font-display text-6xl leading-[1.05] text-ink md:text-7xl lg:text-8xl">
              아토피<br />피부염
            </h1>
            <p className="mt-5 text-sm font-medium tracking-[0.14em] text-ink-soft">
              소양증 · 만성 염증성 피부염 · Atopic Dermatitis
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/reserve" className="ch-btn-primary">
                <IconCalendar />
                진료 예약하기
              </Link>
              <Link href="#quiz" className="ch-btn-secondary">
                <IconClipboard />
                피부질환 자가진단
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/4.7] overflow-hidden rounded-2xl border border-line bg-card shadow-xl shadow-ink/10">
              <Image
                src="/images/programs/skin-hero.png"
                alt="아토피 피부염 치료를 상징하는 피부질환 클리닉 이미지"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-7 left-8 right-4 rounded-2xl border border-line bg-card/95 p-6 shadow-xl shadow-ink/10 backdrop-blur">
              <div className="space-y-4 text-sm font-bold text-ink">
                <p className="flex items-center gap-3"><IconStar />스테로이드 없는 치료</p>
                <p className="flex items-center gap-3"><IconStar />재발 방지 면역 관리</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ch-section-pad mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-root">피부가 보내는 신호</p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            연고를 바를 때뿐,<br />돌아서면 다시 올라오나요?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            내시경도, 피부과 검사도 정상이라는데, 가려움과 건조함은 그대로입니다.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {symptoms.map(({ Icon, title, desc }) => (
            <article key={title} className="ch-card ch-card-hover bg-card">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-paper text-root">
                <Icon />
              </div>
              <h3 className="mb-3 text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {quotes.map((quote) => (
            <div key={quote} className="rounded-2xl border border-line bg-card px-5 py-4 text-sm font-medium leading-relaxed text-ink-soft shadow-sm shadow-ink/5">
              “{quote}”
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="ch-section-pad mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-root">Atopic Dermatitis</p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              아토피 피부염이란?
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-loose text-ink-soft">
            <p>
              아토피 피부염은 검사 수치나 알레르기 항목만으로 설명되지 않는 경우가 많습니다. 연고를 바르면 잠깐 가라앉지만, 중단하면 다시 올라오는 반복 속에서 피부는 점점 더 예민해집니다.
            </p>
            <p>
              서양의학적으로는 유전, 환경, 피부장벽 손상, 면역 과민 반응이 함께 작용하는 만성 염증성 질환입니다. 한의학에서는 비위 기능 저하로 독소와 습열이 쌓이고, 이것이 피부로 드러나는 흐름을 중요하게 봅니다.
            </p>
            <p>
              목표는 불치병이라는 이름에 갇히는 것이 아니라, 관리와 회복이 필요한 만성질환으로 다루는 것입니다. 약 없이 일상을 지켜도 흔들리지 않는 안정된 상태를 만드는 것이 치료의 방향입니다.
            </p>
            <p>
              초근목피한의원은 유전과 환경, 면역 반응을 확인하는 현대적 관점과 장부 균형, 체질 개선을 보는 한의학적 관점을 함께 놓고 피부가 스스로 회복하는 길을 찾습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="ch-section-pad mx-auto max-w-5xl px-5 md:px-8">
        <article className="grid gap-8 rounded-2xl border border-line bg-card p-6 shadow-sm shadow-ink/5 md:grid-cols-[auto_1fr] md:p-8">
          <Image
            src={doctor.photo}
            alt={doctor.name}
            width={120}
            height={120}
            className="rounded-2xl border border-line object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-root">담당 의료진</p>
            <h2 className="mt-2 font-display text-3xl text-ink">대표원장 {doctor.name}</h2>
            <p className="mt-5 text-lg leading-loose text-ink">
              “스테로이드를 바를 때만 잠깐 괜찮고 끊으면 다시 올라오는 데 지치신 분들이 많습니다. 아토피는 피부만의 문제가 아니라 면역과 장부 균형이 깨졌다는 신호입니다. 피부가 스스로 회복할 수 있는 힘을 기르는 길을 함께 찾아드리겠습니다.”
            </p>
          </div>
        </article>
      </section>

      <section className="border-y border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-root">Root Cause Flow</p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              재발을 만드는 다섯 가지 흐름
            </h2>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {causes.map((cause, index) => (
              <article key={cause.title} className="ch-card ch-card-hover bg-card">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-sm font-bold text-root">
                  {index + 1}
                </span>
                <h3 className="mb-3 text-lg font-bold leading-snug text-ink">{cause.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{cause.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ch-section-pad mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "피부 영역",
              items: ["참기 힘든 가려움증, 특히 밤에 심화", "홍반과 부종", "진물과 삼출", "태선화, 거칠고 두꺼워짐", "심한 건조와 각질"],
            },
            {
              title: "동반 전신 증상",
              items: ["알레르기 비염과 천식", "야간 가려움으로 인한 불면증", "만성피로", "소화불량과 변비", "사회적 위축감"],
            },
          ].map((group) => (
            <article key={group.title} className="rounded-2xl border border-line bg-card p-7">
              <h2 className="mb-6 font-display text-3xl text-ink">{group.title}</h2>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper text-root">
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="quiz" className="border-y border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-root">Mini Diagnosis</p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              아토피 피부염 미니 진단
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              1분이면 충분합니다. 현재 피부 상태가 어느 단계인지 확인해보세요.
            </p>
          </div>
          <AtopicQuiz />
        </div>
      </section>

      <section className="ch-section-pad mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-root">Pattern Diagnosis</p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            같은 아토피라도 체질 패턴은 다릅니다
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {patternCards.map((card) => (
            <article key={card.title} className="ch-card ch-card-hover bg-card">
              <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-root">{card.hanja}</p>
              <h3 className="mb-4 text-xl font-bold text-ink">{card.title}</h3>
              <p className="min-h-20 text-sm leading-relaxed text-ink-soft">{card.desc}</p>
              <div className="mt-6 rounded-2xl bg-paper px-4 py-3 text-sm font-bold text-ink">
                치법: {card.treatment}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="ch-section-pad mx-auto max-w-6xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-root">Treatment Timeline</p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              피부가 다시 안정되는 세 단계
            </h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {timeline.map((stage, index) => (
              <article key={stage.title} className="rounded-2xl border border-line bg-paper p-7">
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-sm font-bold text-paper">
                  {index + 1}
                </span>
                <h3 className="mb-5 text-xl font-bold text-ink">{stage.title}</h3>
                <ul className="space-y-3">
                  {stage.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                      <span className="mt-1 text-root"><IconCheck /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-root/30 bg-root/5 p-6 text-[15px] font-semibold leading-loose text-ink">
            10년 이상 앓으셨거나 전신 증상이 함께 있는 분은 6개월에서 1년 이상 긴 호흡이 필요할 수 있습니다. 조급해하지 않고 천천히 뿌리부터 바꾸는 것이 결국 가장 빠른 길입니다.
          </div>
        </div>
      </section>

      <section className="ch-section-pad mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-root">Differential Guide</p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            비슷해 보여도 다른 피부질환
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {differentials.map((item) => (
            <Link key={item.title} href={item.href} className="ch-card ch-card-hover block bg-card">
              <h3 className="mb-3 text-lg font-bold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              <span className="mt-5 inline-block text-sm font-bold text-root">자세히 보기</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-root">Clinic Note</p>
              <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
                아토피 치료 사례
              </h2>
            </div>
            <Link href="/reviews" className="text-sm font-bold text-root">전체 후기 보기</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {atopicReviews.map((review) => (
              <article key={review.id} className="ch-card ch-card-hover bg-card">
                <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-root">치료 사례</p>
                <h3 className="mb-4 text-lg font-bold leading-relaxed text-ink">{review.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{review.summary}</p>
                <div className="mt-6 border-t border-line pt-4 text-xs font-semibold text-ink-soft">
                  환자: {review.patient} | 담당의: {review.doctor}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ch-section-pad mx-auto max-w-5xl px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-root">FAQ</p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">자주 묻는 질문</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.q} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="mb-3 text-lg font-bold text-ink">Q. {faq.q}</h3>
              <p className="text-[15px] leading-loose text-ink-soft">A. {faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="ch-section-pad mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-8">
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-root">Related</p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              함께 보면 좋은 피부질환 안내
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {related.map((item) => (
              <Link key={item.title} href={item.href} className="flex items-center justify-between rounded-2xl border border-line bg-paper px-5 py-4 font-bold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-root hover:shadow-lg hover:shadow-ink/10">
                {item.title}
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="ch-section-pad mx-auto max-w-4xl px-5 text-center md:px-8">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-paper/70">{clinicInfo.address}</p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            반복되는 가려움,<br />피부가 스스로 회복하는 방향으로 보겠습니다.
          </h2>
          <div className="mt-9 flex justify-center gap-3">
            <Link href="/reserve" className="rounded-full bg-paper px-6 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-1">
              진료 예약하기
            </Link>
            <Link href="/programs/skin" className="rounded-full border border-paper/35 px-6 py-3 text-sm font-bold text-paper transition-transform hover:-translate-y-1">
              피부질환 클리닉 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-8 md:px-8">
        <p className="mx-auto max-w-5xl text-xs leading-relaxed text-ink-soft">
          본 콘텐츠는 일반적인 한방 의료 정보 제공을 위한 참고 자료이며, 개별 환자의 진단과 처방을 대신할 수 없습니다. 정확한 진단과 치료 계획은 한의사 진료를 통해 결정해주세요.
        </p>
      </section>
    </main>
  );
}
