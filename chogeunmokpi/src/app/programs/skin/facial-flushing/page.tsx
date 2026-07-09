import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { programImageMetadata } from "@/lib/seo";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 안면홍조 한의원 얼굴붉어짐 한약 - 초근목피한의원 대전 반석동",
  description:
    "대전 유성구 반석동 초근목피한의원의 안면홍조 한방진료 안내입니다. 얼굴 붉어짐, 상열감, 갱년기 홍조, 감정 홍조를 몸속 열 조절과 자율신경 균형 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/skin/facial-flushing",
  },
  ...programImageMetadata({
    title: "?? ???? ???? | ???????",
    description: "?? ??? ??? ???????? ???? ???? ?????.",
    url: "/programs/skin/facial-flushing",
    image: "/images/programs/skin-facial-flushing-detail.png",
    alt: "???? ?? ?? ???",
  }),
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
  ["진료 질환", "안면홍조, 얼굴 붉어짐, 상열감, 감정 홍조, 갱년기 홍조, 면열"],
  ["주요 증상", "얼굴·목 열감, 피부 붉어짐, 화끈거림, 혈관 확장, 가슴 두근거림"],
  ["치료 방향", "속열 조절, 수승화강 회복, 자율신경 안정, 피부 장벽 회복"],
  ["상담 대상", "레이저 후 재발, 연고 중단 후 악화, 긴장·온도차·음주 후 홍조"],
];

const visitReasons = [
  "긴장하면 얼굴이 터질 것처럼 빨개지고 쉽게 가라앉지 않습니다.",
  "레이저를 여러 번 받아도 끊으면 다시 붉어집니다.",
  "조금만 덥거나 감정이 변해도 얼굴로 열이 훅 올라옵니다.",
  "술 마셨냐는 말을 자주 들어 사람 만나는 일이 부담스럽습니다.",
  "겨울에 실내로 들어가면 얼굴이 불타는 것처럼 화끈거립니다.",
  "갱년기 이후 식은땀과 얼굴 열감이 함께 심해졌습니다.",
  "스테로이드 연고를 끊은 뒤 피부가 얇아지고 홍조가 심해졌습니다.",
  "피부 겉만 만지는 치료가 아니라 속부터 다스리고 싶습니다.",
];

const causes = [
  {
    title: "자율신경 과흥분",
    desc: "긴장과 스트레스가 누적되면 교감신경이 예민해져 얼굴 혈관이 순식간에 확장됩니다.",
  },
  {
    title: "상열하한과 열 조절 실패",
    desc: "아래는 차고 위로만 열이 몰리는 순환 불균형은 얼굴과 목의 반복 열감을 만듭니다.",
  },
  {
    title: "갱년기와 호르몬 변화",
    desc: "호르몬 변화로 체온 조절 중추가 예민해지면 작은 자극에도 열이 훅 치밀 수 있습니다.",
  },
  {
    title: "위열과 자극 식습관",
    desc: "맵고 뜨거운 음식, 음주, 과식은 소화기 열을 만들어 얼굴로 열이 오르는 흐름을 키웁니다.",
  },
  {
    title: "피부 장벽 손상",
    desc: "과도한 시술, 강한 연고, 반복 염증은 피부를 얇고 민감하게 만들어 홍조를 오래 남깁니다.",
  },
];

const symptoms = [
  { title: "갑작스러운 상열감", desc: "가슴 위쪽으로 열이 확 치밀며 얼굴과 목이 달아오릅니다." },
  { title: "지속적인 붉은기", desc: "한번 붉어지면 오래 가라앉지 않고 피부 톤이 늘 붉어 보입니다." },
  { title: "따가움과 건조", desc: "열로 피부 진액이 마르면 당김, 따가움, 가려움이 함께 나타납니다." },
  { title: "눈 충혈과 건조", desc: "열이 머리와 눈 주변으로 몰리며 눈이 뻑뻑하고 충혈되기도 합니다." },
  { title: "두근거림과 불면", desc: "가슴 답답함, 심장 두근거림, 얕은 잠이나 야간 열감이 동반될 수 있습니다." },
  { title: "감정 홍조", desc: "사람들 앞에 서거나 당황하면 얼굴이 붉어져 더 위축되는 악순환이 생깁니다." },
];

const patterns = [
  {
    type: "심화항성형",
    sign: "스트레스와 화병 뒤 가슴 두근거림, 불면, 홍조가 함께 오는 타입",
    method: "청심사화",
    desc: "심장과 상부로 치솟는 열을 낮춰 두근거림, 불면, 얼굴 열감을 함께 안정시킵니다.",
  },
  {
    type: "간기울결형",
    sign: "감정 기복과 긴장에 따라 홍조가 출렁이는 감정 홍조 타입",
    method: "소간해울",
    desc: "막힌 기운을 풀고 자율신경 긴장을 낮춰 사람 앞에서 확 붉어지는 반응을 줄입니다.",
  },
  {
    type: "음허화왕형",
    sign: "밤마다 열이 오르고 손발 화끈거림, 식은땀, 갱년기 증상이 동반되는 타입",
    method: "자음강화",
    desc: "몸을 식혀주는 진액을 보충해 만성 열감과 피부 건조, 야간 상열감을 다룹니다.",
  },
  {
    type: "위열형",
    sign: "음주, 매운 음식, 과식 뒤 얼굴이 붉어지고 속열이 올라오는 타입",
    method: "청위사화",
    desc: "소화기에 쌓인 열을 낮춰 식후 홍조, 입마름, 얼굴 번들거림을 함께 살핍니다.",
  },
];

const treatmentSteps = [
  {
    title: "1개월 차: 치솟는 열의 기세 낮추기",
    desc: "상열감의 빈도와 강도를 줄이고 긴장 시 붉어지는 지속 시간을 짧게 만드는 데 집중합니다.",
    goals: ["상열감 빈도 감소", "두근거림·입마름 완화", "피부 따가움 진정"],
  },
  {
    title: "2~3개월 차: 피부 장벽과 자율신경 안정",
    desc: "온도 차나 감정 변화에도 쉽게 붉어지지 않도록 열 조절력과 피부 회복력을 함께 높입니다.",
    goals: ["홍조 지속 시간 감소", "피부 건조와 예민감 완화", "수면 질 개선"],
  },
  {
    title: "3~4개월 차: 재발 방지와 체질 관리",
    desc: "한약 없이도 일상 자극에 스스로 열을 조절할 수 있도록 생활 습관과 체질 관리를 정리합니다.",
    goals: ["재발 간격 연장", "피부 장벽 안정", "음주·식습관 관리 루틴 형성"],
  },
];

const differentialDiseases = [
  { title: "지루성피부염", href: "/programs/skin/seborrheic-dermatitis", desc: "얼굴·두피의 기름진 각질과 홍반" },
  { title: "습진", href: "/programs/skin/eczema", desc: "진물, 갈라짐, 가려움이 동반되는 피부염" },
  { title: "소양증", href: "/programs/skin/itching", desc: "팽진 없이 지속되는 전신·만성 가려움" },
  { title: "두드러기", href: "/programs/skin/urticaria", desc: "팽진이 올라왔다 사라지는 면역 반응" },
  { title: "건선", href: "/programs/skin/psoriasis", desc: "은백색 각질과 경계가 뚜렷한 판상 홍반" },
  { title: "피부질환 클리닉", href: "/programs/skin", desc: "난치성 피부질환 전체 안내" },
];

const faqItems = [
  {
    q: "안면홍조는 피부가 얇아서만 생기나요?",
    a: "피부가 얇아 보이는 것은 결과일 수 있습니다. 속에서 열이 반복적으로 올라와 혈관이 확장되고 피부 장벽이 손상되면 홍조가 오래 남기 쉽습니다.",
  },
  {
    q: "레이저를 받아도 다시 붉어지는 이유는 무엇인가요?",
    a: "혈관을 줄이는 시술이 도움이 되는 경우도 있지만, 몸속 열 조절과 자율신경 과민이 그대로라면 다시 확장될 수 있습니다. 내부 원인을 함께 살피는 이유입니다.",
  },
  {
    q: "갱년기 홍조도 같이 볼 수 있나요?",
    a: "가능합니다. 갱년기 홍조는 진액 부족과 체온 조절 민감도가 함께 작용하는 경우가 많아 식은땀, 불면, 두근거림까지 함께 봅니다.",
  },
  {
    q: "주사 피부염과 안면홍조는 다른가요?",
    a: "겹치는 부분이 많습니다. 구진, 농포, 모세혈관 확장이 뚜렷하면 주사 피부염 가능성을 함께 살피며, 위열과 혈열, 피부 장벽 상태를 함께 평가합니다.",
  },
  {
    q: "치료 기간은 얼마나 걸리나요?",
    a: "기능성 홍조는 비교적 빠르게 안정되기도 하지만, 오래된 홍조나 연고·시술 후 피부 장벽이 약해진 경우에는 3~6개월 이상의 관리가 필요할 수 있습니다.",
  },
  {
    q: "비대면 상담도 가능한가요?",
    a: "가능합니다. 붉어졌을 때의 사진, 악화 상황, 시술·연고 이력, 갱년기 증상, 수면과 식습관을 함께 확인하면 상담 방향을 잡는 데 도움이 됩니다.",
  },
];

const flushingReviews = [
  {
    title: "[42세, 여성] 갱년기 열감과 야간 식은땀이 동반된 안면홍조",
    desc: "밤마다 열감과 식은땀이 반복되던 경우. 음허화왕 패턴을 중심으로 수면과 얼굴 열감을 함께 관리했습니다.",
    patient: "최**",
  },
  {
    title: "[31세, 남성] 긴장하면 얼굴이 확 붉어지는 감정 홍조",
    desc: "면접과 발표 상황에서 홍조가 심해지던 사례. 자율신경 긴장과 간기울결 흐름을 함께 살폈습니다.",
    patient: "김**",
  },
  {
    title: "[38세, 여성] 레이저 반복 후에도 재발한 만성 얼굴 붉어짐",
    desc: "피부 장벽이 예민하고 열감이 오래 남던 경우. 속열과 피부 회복력을 함께 관리했습니다.",
    patient: "박**",
  },
];

export default function FacialFlushingPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 한방 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">안면홍조</span>
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
            <p className="mb-5 text-lg font-semibold leading-8 text-brown keep-words">피부 겉이 아니라 속의 열 조절을 함께 봅니다.</p>
            <h1 className="font-serif text-[clamp(3.4rem,7.5vw,6.3rem)] leading-[0.95] tracking-normal text-ink keep-words">
              안면홍조<br />한방 진료
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-ink-soft keep-words">
              조금만 긴장해도 얼굴이 붉어지고 열이 훅 오른다면 피부만의 문제가 아닐 수 있습니다. 자율신경과 속열의 흐름을 함께 살핍니다.
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
                src="/images/programs/skin-facial-flushing-detail.png"
                alt="안면홍조 한방 진료 이미지"
                width={900}
                height={1100}
                priority
                className="h-[620px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-line bg-white/92 p-6 shadow-xl backdrop-blur">
              <p className="mb-4 font-bold text-ink">안면홍조 한방 진료</p>
              <div className="space-y-3 text-base font-semibold text-ink">
                <p className="flex items-center gap-3"><StarIcon /> 얼굴 열감·피부 붉어짐</p>
                <p className="flex items-center gap-3"><StarIcon /> 속열 조절·자율신경 안정</p>
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
            title="왜 겉을 치료해도 다시 붉어질까요?"
            desc="얼굴 혈관만의 문제가 아니라 속열, 자율신경, 피부 장벽 손상이 함께 얽혀 있을 수 있습니다."
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
              안면홍조는 열 조절 시스템이 흔들린 신호입니다
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-ink-soft keep-words">
              <p>건강한 몸은 위로 오른 열을 아래로 내리고 아래의 차가운 기운을 위로 올립니다. 이 흐름이 깨지면 얼굴과 목으로 열이 몰립니다.</p>
              <p>초근목피한의원은 붉어지는 상황, 지속 시간, 식습관, 수면, 갱년기 증상, 시술·연고 이력까지 함께 확인합니다.</p>
              <p>겉의 붉은기만 낮추는 데서 끝나지 않고 속열과 자율신경, 피부 장벽을 함께 회복하는 방향을 찾습니다.</p>
            </div>
            <div className="mt-8 border-t border-ink pt-6 text-sm font-bold">맥진·문진 기반 전신 진단</div>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-line bg-white shadow-xl">
            <Image
              src="/images/programs/skin-mechanism.png"
              alt="안면홍조 열 조절 진단"
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
              반복 홍조를 줄이는<br />핵심 치료 원리
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
              alt="안면홍조 핵심 치료 원리"
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
            title="얼굴만이 아니라 몸 전체가 보내는 열 신호"
            desc="홍조 환자분들은 피부 증상과 함께 수면, 심장 두근거림, 눈 건조, 갱년기 증상을 함께 겪는 경우가 많습니다."
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
            title="얼굴로 열을 올리는 몸속 원인"
            desc="같은 홍조라도 스트레스, 갱년기, 위열, 피부 장벽 손상 중 어디가 중심인지에 따라 치료 방향이 달라집니다."
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
            title="단계별 안면홍조 치료 흐름"
            desc="치솟는 열을 낮추고, 피부 장벽과 자율신경을 안정시킨 뒤 재발 방지로 이어갑니다."
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
            <h2 className="font-serif text-[clamp(2.2rem,4.8vw,4rem)] leading-tight keep-words">비슷한 붉은 얼굴도 원인이 다릅니다</h2>
            <p className="mt-6 text-lg leading-9 text-ink-soft keep-words">
              안면홍조는 주사, 지루성피부염, 접촉성 피부염, 갱년기 증후군과 겹쳐 보일 수 있습니다. 각질, 구진, 농포, 가려움, 식은땀 여부를 함께 살핍니다.
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
              <p className="mt-4 text-lg text-ink-soft">초근목피한의원에서 안면홍조와 열 조절 균형을 함께 살핀 사례입니다.</p>
            </div>
            <Link href="/community/reviews" className="inline-flex items-center gap-2 font-bold text-brown">
              전체 후기 보기 <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {flushingReviews.map((review) => (
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
              안면홍조는 얼굴에 보이지만, 그 바탕에는 몸의 열 조절과 자율신경, 피부 장벽의 피로가 함께 있습니다. 반복되는 붉어짐의 이유를 차분히 찾겠습니다.
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
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight keep-words">붉어졌을 때의 사진과 악화 상황을 함께 봅니다</h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft keep-words">
              홍조 사진, 악화되는 상황, 시술·연고 이력, 음주와 식습관, 갱년기 증상과 수면 패턴을 함께 확인하면 진료 방향을 더 선명하게 잡을 수 있습니다.
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
