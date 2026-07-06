import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 피부클리닉 한방진료 | 반복 피부염·가려움·홍반·진물 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 피부클리닉 안내입니다. 반복되는 피부염, 가려움, 홍반, 진물, 각질과 피부 장벽 손상을 면역 균형과 장부 기능 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/skin/skin-clinic",
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
  ["진료 범위", "반복 피부염, 가려움, 홍반, 진물, 각질, 태선화, 피부 장벽 손상"],
  ["주요 질환", "아토피, 습진, 건선, 한포진, 지루성피부염, 두드러기, 소양증"],
  ["치료 방향", "면역 균형 안정, 습열 조절, 피부 장벽 회복, 재발 고리 차단"],
  ["상담 대상", "연고 의존, 검사상 원인 불명, 소화·비염 동반, 밤마다 가려움"],
];

const visitReasons = [
  "피부가 갑자기 뒤집어졌는데 원인을 알기 어렵습니다.",
  "연고를 바르면 잠깐 괜찮고 끊으면 다시 올라옵니다.",
  "밤마다 가려워 잠을 못 자고 낮에는 피로가 심합니다.",
  "붉은기, 진물, 각질, 갈라짐이 번갈아 반복됩니다.",
  "소화가 안 좋을 때 얼굴이나 몸 피부가 더 심해집니다.",
  "비염, 천식, 알레르기와 피부 문제가 같이 있습니다.",
  "스테로이드 부작용이 걱정되어 다른 방향을 찾고 싶습니다.",
  "병명보다 왜 반복되는지 몸 전체의 원인을 알고 싶습니다.",
];

const causes = [
  {
    title: "무너진 면역 균형",
    desc: "스트레스와 과로가 누적되면 면역 반응이 예민해지고 정상 피부까지 염증 반응에 휘말릴 수 있습니다.",
  },
  {
    title: "소화기 습열",
    desc: "밀가루, 음주, 가공식품, 불규칙한 식사는 몸속 습열을 쌓아 피부의 붉음과 진물을 악화시킬 수 있습니다.",
  },
  {
    title: "피부 장벽 약화",
    desc: "잦은 연고, 과도한 세정, 반복 염증은 피부 보호막을 얇고 예민하게 만들어 재발을 쉽게 만듭니다.",
  },
  {
    title: "체질적 취약성",
    desc: "호흡기, 소화기, 간 기능, 수면 리듬이 예민한 체질은 피부가 먼저 몸의 흔들림을 표현하기 쉽습니다.",
  },
  {
    title: "환경과 직업 자극",
    desc: "금속, 세제, 물, 습한 환경, 화장품 같은 외부 자극이 내부 원인과 만나 염증을 반복시킵니다.",
  },
];

const symptoms = [
  { title: "참기 힘든 가려움", desc: "밤에 더 심해져 피가 날 때까지 긁게 되고 수면이 무너집니다." },
  { title: "진물과 홍반", desc: "붉게 붓고 투명하거나 노란 진물이 나며 화끈거림이 동반됩니다." },
  { title: "각질과 갈라짐", desc: "피부가 마르고 비늘처럼 벗겨지며 손발은 찢어지는 통증이 생길 수 있습니다." },
  { title: "태선화", desc: "반복 염증으로 피부가 두껍고 딱딱해져 오래된 피부염 양상을 보입니다." },
  { title: "알레르기 동반", desc: "비염, 천식, 결막염처럼 면역 과민 신호가 함께 나타나기도 합니다." },
  { title: "소화·수면 저하", desc: "복부 팽만, 만성 피로, 얕은 잠이 피부 회복을 더디게 만듭니다." },
];

const patterns = [
  {
    type: "습열형",
    sign: "붉고 뜨겁고 진물이 많으며 가려움이 극심한 급성 타입",
    method: "청열해독",
    desc: "피부에 몰린 열과 습을 낮춰 진물, 붉은기, 화끈거림을 먼저 안정시킵니다.",
  },
  {
    type: "혈허풍조형",
    sign: "오래된 피부염으로 피부가 두껍고 건조하며 각질이 깊은 타입",
    method: "양혈윤조",
    desc: "피부를 윤택하게 하는 혈과 진액을 보충해 건조, 갈라짐, 만성 가려움을 다룹니다.",
  },
  {
    type: "비허습성형",
    sign: "소화가 약하고 몸이 잘 붓거나 증상이 지지부진하게 오래가는 타입",
    method: "건비거습",
    desc: "비위 기능을 도와 몸속 습담이 피부로 반복 배출되는 흐름을 줄입니다.",
  },
  {
    type: "간울형",
    sign: "스트레스와 정서 변화에 따라 피부 증상이 급격히 출렁이는 타입",
    method: "소간해울",
    desc: "막힌 기운을 풀고 자율신경 긴장을 낮춰 스트레스성 재발을 관리합니다.",
  },
];

const treatmentSteps = [
  {
    title: "1단계: 염증 진정과 독소 배출",
    desc: "가려움, 진물, 붉은기처럼 당장 불편한 증상을 줄이고 피부가 쉴 수 있는 상태를 만듭니다.",
    goals: ["가려움 강도 감소", "진물과 붉은기 진정", "리바운드 반응 관리"],
  },
  {
    title: "2단계: 피부 장벽 재건",
    desc: "새살이 올라오고 보호막이 회복되도록 도우며 소화, 수면, 피로도까지 함께 살핍니다.",
    goals: ["각질과 갈라짐 완화", "피부결 회복", "전신 컨디션 개선"],
  },
  {
    title: "3단계: 면역 안정과 재발 방지",
    desc: "치료를 중단해도 피부가 스스로 버틸 수 있도록 체질적 약점과 생활 습관을 정리합니다.",
    goals: ["연고 의존도 감소", "재발 간격 연장", "자가 관리 루틴 형성"],
  },
];

const relatedDiseases = [
  { title: "아토피 피부염", href: "/programs/skin/atopic-dermatitis", desc: "뿌리 깊은 만성 가려움과 피부 장벽 손상" },
  { title: "습진", href: "/programs/skin/eczema", desc: "진물, 갈라짐, 손·얼굴 피부염" },
  { title: "건선", href: "/programs/skin/psoriasis", desc: "은백색 각질과 판상 홍반" },
  { title: "한포진", href: "/programs/skin/pompholyx", desc: "손발 수포와 극심한 가려움" },
  { title: "지루성피부염", href: "/programs/skin/seborrheic-dermatitis", desc: "얼굴·두피의 기름진 각질과 홍반" },
  { title: "두드러기", href: "/programs/skin/urticaria", desc: "팽진이 올라왔다 사라지는 면역 반응" },
];

const faqItems = [
  {
    q: "피부 클리닉은 어떤 질환을 보나요?",
    a: "아토피, 습진, 건선, 한포진, 지루성피부염, 두드러기, 만성 소양증처럼 반복되는 염증성 피부질환을 폭넓게 살핍니다.",
  },
  {
    q: "검사상 이상이 없어도 치료가 필요한가요?",
    a: "검사에서 뚜렷한 이상이 없어도 가려움, 홍반, 진물, 각질이 반복된다면 자율신경, 소화기, 피부 장벽, 면역 균형을 함께 볼 필요가 있습니다.",
  },
  {
    q: "스테로이드 연고는 바로 끊어야 하나요?",
    a: "갑자기 중단하면 리바운드가 생길 수 있습니다. 현재 사용량과 피부 상태를 확인하며 피부가 버틸 수 있는 방향으로 단계적으로 조정합니다.",
  },
  {
    q: "소화기 문제와 피부가 관련 있나요?",
    a: "한의학에서는 비위 기능과 습열이 피부 염증과 깊게 연결된다고 봅니다. 실제로 속이 불편할 때 얼굴과 몸 피부가 더 악화되는 분들이 많습니다.",
  },
  {
    q: "치료 기간은 얼마나 걸리나요?",
    a: "급성 염증은 비교적 빠르게 진정되기도 하지만, 오래 반복된 만성 피부염과 연고 의존이 있는 경우 3~6개월 이상의 체계적 관리가 필요할 수 있습니다.",
  },
  {
    q: "비대면 상담도 가능한가요?",
    a: "가능합니다. 환부 사진, 악화 시기, 사용 중인 연고와 약, 소화·수면·스트레스 상태를 함께 확인하면 상담 방향을 잡는 데 도움이 됩니다.",
  },
];

const clinicReviews = [
  {
    title: "[35세, 여성] 반복되는 얼굴 홍반과 진물로 내원한 피부염",
    desc: "화장품과 스트레스에 따라 증상이 출렁이던 경우. 습열과 피부 장벽 회복을 함께 살폈습니다.",
    patient: "박**",
  },
  {
    title: "[42세, 남성] 10년 이상 반복된 팔꿈치 각질과 가려움",
    desc: "만성 각질과 태선화가 깊었던 사례. 혈허풍조와 면역 안정 흐름을 함께 관리했습니다.",
    patient: "이**",
  },
  {
    title: "[28세, 여성] 소화불량과 함께 심해지는 피부 붉어짐",
    desc: "복부 팽만과 얼굴 열감이 피부 악화와 맞물린 경우. 비위 기능과 습열을 함께 살폈습니다.",
    patient: "김**",
  },
];

export default function SkinClinicPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 한방 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">피부 클리닉</span>
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
            <p className="mb-5 text-lg font-semibold leading-8 text-brown keep-words">반복되는 염증의 고리, 피부와 몸을 함께 봅니다.</p>
            <h1 className="font-serif text-[clamp(3.4rem,7.5vw,6.3rem)] leading-[0.95] tracking-normal text-ink keep-words">
              피부<br />클리닉
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-ink-soft keep-words">
              화장으로도 가려지지 않는 붉은기와 밤마다 잠 못 들게 하는 가려움. 피부 겉만이 아니라 면역과 장부의 신호를 함께 살핍니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/reserve" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-bold text-white shadow-lg shadow-black/10 transition hover:-translate-y-1">
                <CalendarIcon />
                진료 예약하기
              </Link>
              <Link href="/programs/skin" className="inline-flex items-center gap-2 rounded-full border border-line bg-white/75 px-7 py-4 text-base font-bold text-ink transition hover:-translate-y-1 hover:border-ink">
                <ClipboardIcon />
                피부질환 전체 보기
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[18px] border border-line bg-white shadow-2xl shadow-black/10">
              <Image
                src="/images/programs/skin-hero.png"
                alt="피부 클리닉 한방 진료 이미지"
                width={900}
                height={1100}
                priority
                className="h-[620px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-line bg-white/92 p-6 shadow-xl backdrop-blur">
              <p className="mb-4 font-bold text-ink">피부 면역 재건 클리닉</p>
              <div className="space-y-3 text-base font-semibold text-ink">
                <p className="flex items-center gap-3"><StarIcon /> 가려움·홍반·진물·각질</p>
                <p className="flex items-center gap-3"><StarIcon /> 면역 균형·피부 장벽 회복</p>
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
            title="왜 피부는 계속 다시 뒤집어질까요?"
            desc="증상은 눌러도 면역, 소화, 수면, 스트레스, 피부 장벽의 흔들림이 그대로라면 재발은 반복될 수 있습니다."
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
              피부는 내 몸의 면역 균형을 비추는 거울입니다
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-ink-soft keep-words">
              <p>피부 클리닉은 하나의 병명보다 반복되는 염증 패턴을 함께 살피는 진료입니다. 이름이 달라도 가려움, 홍반, 진물, 각질, 장벽 손상이라는 공통 흐름이 있습니다.</p>
              <p>초근목피한의원은 환부 모양만 보지 않고 소화, 수면, 비염·알레르기, 스트레스, 연고 사용 이력을 함께 확인합니다.</p>
              <p>피부를 억지로 누르기보다 염증이 생기지 않는 몸의 환경을 만들어 재발 고리를 줄이는 데 집중합니다.</p>
            </div>
            <div className="mt-8 border-t border-ink pt-6 text-sm font-bold">맥진·문진 기반 전신 진단</div>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-line bg-white shadow-xl">
            <Image
              src="/images/programs/skin-mechanism.png"
              alt="피부 면역 재건 진단"
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
              반복 염증을 줄이는<br />핵심 치료 원리
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
              alt="피부 클리닉 핵심 치료 원리"
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
            title="피부와 몸이 함께 보내는 신호"
            desc="피부 증상만이 아니라 알레르기, 소화, 수면, 피로까지 이어지는지 함께 봅니다."
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
            title="피부 염증을 반복시키는 원인"
            desc="같은 피부염이라도 습열, 건조, 소화기, 스트레스, 환경 자극 중 무엇이 중심인지에 따라 치료 방향이 달라집니다."
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
            title="단계별 피부 클리닉 치료 흐름"
            desc="염증을 먼저 안정시키고, 피부 장벽을 회복한 뒤 재발을 줄이는 방향으로 이어갑니다."
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
            <h2 className="font-serif text-[clamp(2.2rem,4.8vw,4rem)] leading-tight keep-words">정확한 감별이 치료의 시작입니다</h2>
            <p className="mt-6 text-lg leading-9 text-ink-soft keep-words">
              반복 피부염은 아토피, 습진, 건선, 한포진, 지루성피부염, 두드러기와 겹쳐 보일 수 있습니다. 병변 모양과 전신 증상을 함께 확인해야 합니다.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedDiseases.map((item) => (
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
              <p className="mt-4 text-lg text-ink-soft">초근목피한의원에서 반복 피부염과 면역 균형을 함께 살핀 사례입니다.</p>
            </div>
            <Link href="/community/reviews" className="inline-flex items-center gap-2 font-bold text-brown">
              전체 후기 보기 <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {clinicReviews.map((review) => (
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
              피부는 몸 안의 흐름을 가장 먼저 보여주는 곳입니다. 병명 하나보다 현재 피부가 왜 반복해서 흔들리는지, 몸 전체의 균형 속에서 보겠습니다.
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
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight keep-words">사진과 증상 기록으로 먼저 상담할 수 있습니다</h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft keep-words">
              환부 사진, 악화 시기, 사용 중인 연고와 약, 소화·수면·스트레스 상태를 함께 확인하면 진료 방향을 더 선명하게 잡을 수 있습니다.
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
