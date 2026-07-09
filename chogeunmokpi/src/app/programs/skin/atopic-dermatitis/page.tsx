import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { programImageMetadata } from "@/lib/seo";
import AtopicQuiz from "@/components/programs/AtopicQuiz";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors, reviews } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 아토피 유성구 한의원 피부염 한약 - 초근목피한의원 대전 반석동",
  description:
    "대전 유성구 반석동 아토피 피부염, 신생아 얼굴태열, 아토피성 피부염으로 고민하는 분께. 한약과 한방 치료로 피부 회복력과 면역 균형을 함께 살핍니다.",
  alternates: {
    canonical: "/programs/skin/atopic-dermatitis",
  },
  ...programImageMetadata({
    title: "?? ??? ??? ???? | ???????",
    description: "?? ??? ??? ???????? ??? ??? ???? ?????.",
    url: "/programs/skin/atopic-dermatitis",
    image: "/images/programs/atopic-hero.png",
    alt: "??? ??? ?? ?? ???",
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
      <path d="M12 3C8 8 6 11 6 15a6 6 0 0 0 12 0c0-4-2-7-6-12Z" />
      <path d="M9.5 15.5c1.3 1.1 3.7 1.1 5 0" />
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
const atopicReviews = reviews.filter((review) => review.programSlug === "atopic-dermatitis");

const summaryRows = [
  ["진료 질환", "아토피 피부염, 신생아 얼굴태열, 아토피성 피부염, 만성 소양증"],
  ["주요 증상", "가려움, 홍반, 진물, 건조, 태선화, 수면 장애"],
  ["치료 방향", "피부 장벽 회복, 면역 과민 안정, 습열·혈허·상열 패턴 조절"],
  ["상담 대상", "스테로이드 반복 사용, 재발성 아토피, 소아·성인 아토피, 비염 동반 피부염"],
];

const visitReasons = [
  "스테로이드 연고를 끊으면 다시 심해집니다.",
  "밤마다 가려워 잠을 깊게 못 잡니다.",
  "얼굴과 목에 붉은기가 올라와 사람 만나는 일이 부담스럽습니다.",
  "아이가 긁다가 피가 나고 진물이 생깁니다.",
  "비염, 천식, 소화불량까지 같이 있어 전신 면역이 걱정됩니다.",
  "오래 긁은 부위가 두꺼워지고 검게 변했습니다.",
  "화장품과 보습제를 바꿔도 계절마다 반복됩니다.",
  "약 없이도 피부가 버티는 상태를 만들고 싶습니다.",
];

const symptoms = [
  { title: "가려움과 야간 소양증", desc: "밤에 심해지는 가려움은 수면을 깨뜨리고 피부 재생 시간을 빼앗습니다." },
  { title: "홍반과 열감", desc: "얼굴, 목, 팔오금, 무릎 뒤에 붉은 열감이 오르며 쉽게 가라앉지 않습니다." },
  { title: "진물과 반복 상처", desc: "긁은 자리에 삼출이 나오고 딱지가 생기며 2차 감염 위험이 커집니다." },
  { title: "건조와 각질", desc: "피부 장벽이 약해지면서 보습을 해도 금세 당기고 갈라집니다." },
  { title: "태선화와 색소침착", desc: "오래 긁은 부위가 두꺼워지고 거칠어지며 피부 톤이 어두워질 수 있습니다." },
  { title: "알레르기 동반 증상", desc: "비염, 천식, 결막염, 소화불량이 함께 나타나는 경우도 많습니다." },
];

const causes = [
  {
    title: "피부 장벽 손상",
    desc: "피부가 수분을 붙잡지 못하면 작은 자극에도 염증 반응이 쉽게 올라옵니다.",
  },
  {
    title: "면역 과민 반응",
    desc: "알레르기 체질과 스트레스가 겹치면 면역계가 과하게 반응하며 피부를 공격합니다.",
  },
  {
    title: "비위 기능 저하와 습열",
    desc: "소화 흡수가 약하고 노폐물 배출이 늦어지면 습열이 피부로 드러나기 쉽습니다.",
  },
  {
    title: "혈허와 피부 건조",
    desc: "피부에 필요한 영양과 진액이 부족하면 가려움, 각질, 태선화가 깊어집니다.",
  },
  {
    title: "스테로이드 반동과 재발",
    desc: "증상을 빠르게 누르는 동안 근본 회복이 따라오지 않으면 끊을 때 다시 흔들립니다.",
  },
];

const patterns = [
  {
    type: "습열형",
    sign: "붉고 뜨겁고 진물이 많을 때",
    method: "청열화습",
    desc: "피부에 몰린 열과 습을 덜어 염증, 진물, 화끈거림을 진정시키는 방향입니다.",
  },
  {
    type: "혈허풍조형",
    sign: "건조하고 두꺼워지고 밤에 가려울 때",
    method: "자음양혈",
    desc: "피부를 윤택하게 하는 기혈과 진액을 보충해 만성 가려움과 태선화를 다룹니다.",
  },
  {
    type: "비허습곤형",
    sign: "소화가 약하고 잘 붓고 피로할 때",
    method: "건비화습",
    desc: "비위 기능을 돕고 습담을 줄여 반복되는 피부 염증의 내부 환경을 정리합니다.",
  },
  {
    type: "혈열형",
    sign: "영유아 태열, 얼굴과 두피가 붉을 때",
    method: "청열양혈",
    desc: "열이 위로 치솟는 흐름을 낮추고 민감한 피부 반응을 안정시키는 방향입니다.",
  },
];

const treatmentSteps = [
  {
    title: "급성 염증과 가려움 진정",
    desc: "진물, 홍반, 열감, 야간 가려움을 먼저 낮춰 잠을 잘 수 있는 상태를 만듭니다.",
    goals: ["야간 소양증 완화", "진물과 상처 감소", "감염 의심 부위 확인"],
  },
  {
    title: "피부 장벽과 체질 회복",
    desc: "피부가 스스로 수분을 붙잡고 외부 자극을 견디도록 장벽과 면역 균형을 회복합니다.",
    goals: ["건조와 각질 완화", "태선화 부위 부드러움 회복", "소화·수면·스트레스 조절"],
  },
  {
    title: "연고 의존도 조절과 재발 방지",
    desc: "의료진과 상의하며 기존 연고 사용을 조절하고, 계절 변화에도 덜 흔들리는 몸 상태를 목표로 합니다.",
    goals: ["재발 간격 늘리기", "생활 관리 내재화", "피부 안정 상태 유지"],
  },
];

const differentialDiseases = [
  { title: "건선", href: "/programs/skin/psoriasis", desc: "두꺼운 판상 각질과 뚜렷한 경계의 홍반" },
  { title: "지루성 피부염", href: "/programs/skin/seborrheic-dermatitis", desc: "얼굴과 두피의 기름진 각질, 붉은 염증" },
  { title: "만성 두드러기", href: "/programs/skin/urticaria", desc: "올라왔다 사라지는 팽진과 극심한 가려움" },
  { title: "한포진", href: "/programs/skin/pompholyx", desc: "손발의 수포, 갈라짐, 반복 가려움" },
  { title: "습진", href: "/programs/skin/eczema", desc: "진물, 홍반, 가려움이 반복되는 피부 염증" },
];

const faqItems = [
  {
    q: "스테로이드 연고를 오래 썼는데 한약 치료를 병행할 수 있나요?",
    a: "가능합니다. 다만 갑자기 중단하면 반동 악화가 생길 수 있어 현재 사용량과 피부 상태를 확인하고, 피부 회복력에 맞춰 의료진과 단계적으로 조절합니다.",
  },
  {
    q: "성인 얼굴 아토피도 한방 치료 대상인가요?",
    a: "성인 아토피는 스트레스, 수면 부족, 상열, 화장품 자극이 겹치며 얼굴에 두드러지는 경우가 많습니다. 속의 열과 피부 장벽을 함께 봅니다.",
  },
  {
    q: "밤에 가려워 잠을 못 자는 것도 좋아질 수 있나요?",
    a: "야간 소양증은 아토피 치료에서 중요한 지표입니다. 가려움 강도를 낮춰 수면을 회복해야 피부 재생도 함께 좋아질 수 있습니다.",
  },
  {
    q: "아이 비염과 천식이 아토피와 관련 있나요?",
    a: "아토피, 비염, 천식은 알레르기 체질의 흐름 안에서 함께 나타나는 경우가 있습니다. 피부만 보지 않고 호흡기와 면역 상태를 함께 살핍니다.",
  },
  {
    q: "비대면 진료로도 피부 상태를 확인할 수 있나요?",
    a: "고화질 사진, 증상 기록, 기존 치료 이력을 바탕으로 현재 피부 상태와 악화 요인을 확인할 수 있습니다. 필요 시 내원 진료를 안내합니다.",
  },
  {
    q: "치료 기간은 보통 얼마나 걸리나요?",
    a: "초기라면 비교적 빠르게 안정될 수 있지만, 오래된 태선화나 반복 감염, 장기간 스테로이드 사용이 있으면 3개월 이상 꾸준한 관리가 필요할 수 있습니다.",
  },
  {
    q: "식단 관리는 어디까지 해야 하나요?",
    a: "무조건 제한하기보다 내 몸이 견디지 못하는 자극을 찾는 것이 중요합니다. 소화 상태와 피부 반응을 보며 현실적인 식사 가이드를 제안합니다.",
  },
];

const longtailAreas = [
  "반석동", "노은동", "지족동", "전민동", "관평동", "도안동", "봉명동", "궁동", "죽동", "유성구",
];

export default function AtopicDermatitisPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">아토피 피부염</span>
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
              스테로이드에 의존하는 피부가 아니라<br />
              스스로 회복하는 피부로 돌아갑니다.
            </p>
            <h1 className="font-display text-6xl leading-[1.05] text-ink md:text-7xl lg:text-8xl">
              아토피<br />피부염
            </h1>
            <p className="mt-5 text-sm font-medium tracking-[0.14em] text-ink-soft">
              신생아 얼굴태열 · 아토피성 피부염 · 만성 소양증
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/reserve" className="ch-btn-primary">
                <CalendarIcon />
                진료 예약하기
              </Link>
              <Link href="#quiz" className="ch-btn-secondary">
                <ClipboardIcon />
                아토피 자가진단
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/4.8] overflow-hidden rounded-2xl border border-line bg-card shadow-xl shadow-ink/10">
              <Image
                src="/images/programs/atopic-hero.png"
                alt="아토피 피부염 한방 치료 상담 이미지"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-7 left-8 right-4 rounded-2xl border border-line bg-card/95 p-6 shadow-xl shadow-ink/10 backdrop-blur">
              <div className="space-y-4 text-sm font-bold text-ink">
                <p className="flex items-center gap-3"><StarIcon />피부 회복력 중심 치료</p>
                <p className="flex items-center gap-3"><StarIcon />재발 방지 면역 관리</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:px-8 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0 space-y-16">
          <section className="rounded-2xl border border-line bg-card p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-xl font-bold text-ink">아토피 피부염 핵심 정보</h2>
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
              title="이런 증상으로 진료실을 찾습니다"
              desc="아토피는 단순한 피부 트러블이 아닙니다. 가려움, 수면, 감정, 사회생활까지 흔들리게 만드는 만성 염증성 질환입니다."
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
              초근목피한의원은 피부 표면의 염증만 보지 않고, 왜 반복되는지와 어디서부터 회복력이 떨어졌는지를 함께 봅니다.
            </div>
          </section>

          <section className="rounded-2xl border border-line bg-card p-6 md:p-9">
            <SectionTitle eyebrow="Medical Column" title="아토피 피부염은 어떤 질환인가요?" />
            <div className="mt-8 space-y-5 text-[15px] leading-loose text-ink-soft">
              <p>
                아토피 피부염은 피부가 건조하고 붉어지며 참기 힘든 가려움이 반복되는 만성 염증성 피부질환입니다. 영유아의 얼굴태열처럼 시작되기도 하고, 성인이 된 뒤 얼굴과 목, 팔오금, 손 부위에 갑자기 나타나기도 합니다.
              </p>
              <p>
                겉으로는 피부 문제처럼 보이지만 실제로는 피부 장벽 손상, 면역 과민 반응, 장내 환경, 수면, 스트레스, 알레르기 체질이 함께 얽혀 있습니다. 그래서 연고로 잠깐 가라앉아도 생활 리듬이 무너지거나 계절이 바뀌면 다시 올라오기 쉽습니다.
              </p>
              <p>
                한의학에서는 아토피를 몸속의 습열, 혈허, 상열, 비위 기능 저하가 피부로 드러나는 상태로 봅니다. 피부를 덮는 치료에서 멈추지 않고, 피부가 스스로 수분을 붙잡고 자극을 견딜 수 있는 바탕을 만드는 것이 중요합니다.
              </p>
            </div>
          </section>

          <section className="grid gap-6 rounded-2xl border border-line bg-card p-6 md:grid-cols-[220px_1fr] md:p-8">
            <Image src={doctor.photo} alt={doctor.name} width={180} height={180} className="rounded-2xl border border-line object-cover" />
            <div>
              <p className="text-sm font-semibold text-root">담당 의료진</p>
              <h2 className="mt-2 font-display text-3xl text-ink">대표원장 {doctor.name}</h2>
              <p className="mt-5 text-[15px] leading-loose text-ink-soft">
                “오래된 아토피 환자분들은 연고를 바를 때만 잠깐 편하고, 끊으면 다시 올라오는 반복에 지쳐 계십니다. 아토피는 피부만의 문제가 아니라 면역과 장부 균형이 깨졌다는 신호입니다. 피부가 스스로 회복할 수 있는 힘을 기르는 길을 함께 찾아드리겠습니다.”
              </p>
            </div>
          </section>

          <section>
            <SectionTitle
              eyebrow="Cause Cascade"
              title="아토피는 한 가지 원인보다 여러 흐름이 겹쳐 깊어집니다"
              desc="피부 장벽, 면역, 소화기, 혈액과 진액의 부족, 기존 연고 사용 패턴까지 함께 확인해야 재발의 방향을 읽을 수 있습니다."
            />
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
            <SectionTitle eyebrow="Symptoms" title="아토피 피부염에서 자주 보이는 증상" />
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
              <SectionTitle eyebrow="Special Diagnosis" title="피부만 보지 않고 몸의 흐름을 함께 확인합니다" />
              <div className="mt-7 space-y-4 text-[15px] leading-loose text-ink-soft">
                <p>
                  아토피는 같은 이름의 질환이라도 급성 진물형인지, 건조와 태선화가 깊은 만성형인지, 소화기와 비염이 함께 약한 체질인지에 따라 접근이 달라집니다.
                </p>
                <p>
                  초근목피한의원에서는 문진, 맥진, 복진, 피부 사진과 악화 요인 기록을 함께 살펴 현재 피부가 어떤 단계에 있는지 정리합니다.
                </p>
                <p>
                  목표는 단순히 붉은기를 덮는 것이 아니라 가려움의 강도를 낮추고, 피부 장벽과 면역 반응을 안정시켜 재발의 폭을 줄이는 것입니다.
                </p>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-line bg-paper">
              <Image src="/images/programs/atopic-diagnosis.png" alt="아토피 피부염 진단 상담 이미지" fill sizes="(max-width: 768px) 90vw, 360px" className="object-cover" />
            </div>
          </section>

          <section id="quiz" className="rounded-2xl border border-line bg-paper-soft p-6 md:p-9">
            <SectionTitle
              eyebrow="Mini Diagnosis"
              title="아토피 피부염 미니 진단"
              desc="현재 증상 기간, 피부 상태, 연고 사용 패턴, 수면 영향을 기준으로 대략적인 관리 단계를 확인해보세요."
              center
            />
            <div className="mt-9">
              <AtopicQuiz />
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="Pattern Treatment" title="변증에 따라 치료 방향이 달라집니다" />
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
            <SectionTitle eyebrow="Treatment Journey" title="아토피 피부가 안정되는 치료 여정" />
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
              오래된 태선화, 전신 아토피, 장기간 스테로이드 사용 이력이 있는 분은 긴 호흡이 필요합니다. 조급하게 억누르기보다 피부가 흔들리지 않는 바탕을 만드는 것이 결국 빠른 길입니다.
            </div>
          </section>

          <section className="grid gap-8 rounded-2xl border border-line bg-card p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-line bg-paper md:min-h-full">
              <Image src="/images/programs/atopic-remote-care.png" alt="아토피 비대면 진료와 한약 관리 이미지" fill sizes="(max-width: 768px) 90vw, 380px" className="object-cover" />
            </div>
            <div>
              <SectionTitle eyebrow="Remote Care" title="내원하지 않아도 상담과 처방이 가능합니다" />
              <p className="mt-6 text-[15px] leading-loose text-ink-soft">
                고화질 피부 사진, 증상 변화 기록, 기존 검사와 치료 이력을 바탕으로 비대면 상담을 진행할 수 있습니다. 필요한 경우 내원 진료를 안내하며, 처방 후에도 사진 체크와 생활 관리로 경과를 함께 살핍니다.
              </p>
              <Link href="/reserve" className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-paper transition-transform hover:-translate-y-1">
                비대면 상담 신청
                <ArrowIcon />
              </Link>
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="Differential Guide" title="아토피와 함께 구분해야 할 피부질환" />
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
            <SectionTitle eyebrow="Treatment Reviews" title="아토피 치료 사례" desc="실제 치료 경과는 개인 상태에 따라 다르지만, 비슷한 고민을 가진 분들의 회복 흐름을 참고할 수 있습니다." />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {atopicReviews.map((review) => (
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
            <SectionTitle eyebrow="FAQ" title="아토피 피부염 자주 묻는 질문" />
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
            <SectionTitle eyebrow="Related Conditions" title="아토피와 함께 살펴볼 수 있는 피부 질환" />
            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {[...differentialDiseases, { title: "피부질환 클리닉 전체", href: "/programs/skin", desc: "난치성 피부질환 프로그램 전체 보기" }].map((item) => (
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
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-paper/65">상담 예약</p>
              <h3 className="mt-4 font-display text-2xl leading-tight">
                아토피 피부염,<br />지금 상담하세요
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/75">
                증상 기록과 기존 치료 이력을 바탕으로 상담이 가능합니다.
              </p>
              <Link href="/reserve" className="mt-6 flex items-center justify-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-bold text-ink">
                상담 신청
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
          반복되는 가려움,<br />피부 회복력부터 다시 보겠습니다.
        </h2>
        <Link href="/reserve" className="mt-8 inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-1">
          아토피 상담 예약
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
