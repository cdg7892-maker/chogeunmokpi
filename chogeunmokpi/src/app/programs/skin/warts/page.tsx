import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 사마귀 한방진료 | 발바닥·손가락·편평사마귀·곤지름 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 사마귀 한방진료 안내입니다. 발바닥 사마귀, 손가락 사마귀, 편평사마귀와 재발을 면역 균형과 피부 장벽 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/skin/warts",
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
  ["진료 질환", "사마귀, 우목, 발바닥 사마귀, 손가락 사마귀, 편평사마귀, 곤지름"],
  ["주요 증상", "딱딱한 구진, 발바닥 통증, 병변 확산, 점상 출혈, 편평한 돌기"],
  ["치료 방향", "면역 반응 유도, HPV 억제 환경 조성, 피부 장벽 회복, 재발 방지"],
  ["상담 대상", "냉동치료 후 재발, 아이 사마귀, 편평사마귀 확산, 티눈 감별 필요"],
];

const visitReasons = [
  "냉동치료 받을 때마다 너무 아파 치료 자체가 두렵습니다.",
  "깎아내면 2주 뒤 같은 자리에 다시 올라옵니다.",
  "티눈인 줄 알고 깎았더니 옆으로 번졌습니다.",
  "발바닥 사마귀 때문에 걸을 때마다 찌르는 통증이 있습니다.",
  "얼굴 편평사마귀가 번져 화장으로도 가려지지 않습니다.",
  "아이가 병원 문턱만 가도 울어서 치료를 못 하고 있습니다.",
  "아토피가 있는데 사마귀까지 생겨 피부가 더 예민해졌습니다.",
  "통증과 흉터 걱정 없이 면역부터 다스리고 싶습니다.",
];

const causes = [
  {
    title: "HPV 바이러스 감염",
    desc: "사마귀는 인유두종 바이러스가 피부 기저층에 침투해 피부 세포가 비정상적으로 증식하며 생깁니다.",
  },
  {
    title: "면역 체계 저하",
    desc: "스트레스, 과로, 수면 부족으로 바이러스를 억제하는 힘이 약해지면 병변이 커지거나 반복됩니다.",
  },
  {
    title: "피부 장벽 약화",
    desc: "아토피, 건선, 잦은 상처처럼 피부 장벽이 약한 경우 바이러스가 침투하고 번지기 쉬워집니다.",
  },
  {
    title: "잘못된 자가 처치",
    desc: "손톱깎이로 깎거나 뜯어내면 바이러스가 주변 피부로 퍼지고 점상 출혈이나 2차 감염이 생길 수 있습니다.",
  },
  {
    title: "반복 시술 후 재발",
    desc: "겉의 조직만 제거하고 면역 토양이 그대로라면 같은 자리나 주변에 다시 올라오는 흐름이 생길 수 있습니다.",
  },
];

const symptoms = [
  { title: "보통 사마귀", desc: "손등, 손가락, 발가락에 거칠고 딱딱한 돌기처럼 올라옵니다." },
  { title: "편평 사마귀", desc: "얼굴이나 팔에 작고 매끈한 구진이 여러 개 번져 잡티처럼 보일 수 있습니다." },
  { title: "발바닥 사마귀", desc: "체중에 눌려 안쪽으로 파고들며 걸을 때 칼로 찌르는 듯한 통증을 만듭니다." },
  { title: "물사마귀", desc: "아이들에게 흔하고 가운데가 살짝 들어간 모양으로 전염력이 강한 편입니다." },
  { title: "전염 불안", desc: "가족, 친구, 기숙사 생활에서 옮길까 봐 손발을 숨기고 위축되기도 합니다." },
  { title: "반복 시술 스트레스", desc: "냉동치료, 레이저 통증과 재발 경험이 치료 회피로 이어질 수 있습니다." },
];

const patterns = [
  {
    type: "풍열형",
    sign: "갑자기 생기고 붉은기나 가려움이 동반되는 급성 타입",
    method: "소풍청열",
    desc: "피부 표면의 열과 예민한 반응을 낮추며 초기 사마귀의 확산 흐름을 살핍니다.",
  },
  {
    type: "습열형",
    sign: "병변이 축축하거나 빠르게 주변으로 번지는 타입",
    method: "청열이습",
    desc: "몸속 습열을 줄여 피부 장벽이 바이러스 자극에 덜 흔들리도록 돕습니다.",
  },
  {
    type: "어혈형",
    sign: "오래되어 딱딱하고 색이 어두우며 통증이 심한 만성 타입",
    method: "활혈거어",
    desc: "정체된 순환을 풀어 딱딱하게 굳은 병변과 발바닥 통증을 함께 관리합니다.",
  },
  {
    type: "간신부족형",
    sign: "면역력이 약하고 여러 번 치료해도 잘 낫지 않는 허약 타입",
    method: "보익간신",
    desc: "몸의 기본 방어력을 보강해 바이러스가 다시 활동하지 못하는 토양을 만드는 데 집중합니다.",
  },
];

const treatmentSteps = [
  {
    title: "1개월 차: 면역 반응 유도",
    desc: "한약으로 몸의 방어 반응을 깨우며 사마귀 주변의 붉어짐, 가려움, 경계 변화를 관찰합니다.",
    goals: ["면역 반응 확인", "병변 경계 변화 관찰", "통증과 확산 여부 점검"],
  },
  {
    title: "2~3개월 차: 병변 변화와 탈락",
    desc: "사마귀가 검게 변하거나 딱딱해지고 조직이 들뜨며 스스로 탈락하는 흐름을 기다립니다.",
    goals: ["병변 색과 질감 변화", "발바닥 통증 감소", "자가 손상 방지"],
  },
  {
    title: "3~4개월 차: 재생과 재발 방지",
    desc: "사마귀가 떨어진 자리의 피부 회복을 돕고 바이러스가 다시 활동하지 않도록 면역을 안정시킵니다.",
    goals: ["피부 재생 관리", "재발 간격 차단", "생활·전염 관리 루틴 형성"],
  },
];

const differentialDiseases = [
  { title: "한포진", href: "/programs/skin/pompholyx", desc: "손발 수포와 가려움이 중심인 수포성 습진" },
  { title: "모공각화증", href: "/programs/skin/keratosis-pilaris", desc: "팔·다리의 닭살 같은 각질 돌기" },
  { title: "건선", href: "/programs/skin/psoriasis", desc: "은백색 각질과 두꺼운 판상 홍반" },
  { title: "습진", href: "/programs/skin/eczema", desc: "진물, 갈라짐, 반복 피부염" },
  { title: "아토피 피부염", href: "/programs/skin/atopic-dermatitis", desc: "피부 장벽 약화와 만성 가려움" },
  { title: "피부질환 클리닉", href: "/programs/skin", desc: "난치성 피부질환 전체 안내" },
];

const faqItems = [
  {
    q: "냉동치료를 여러 번 받아도 왜 다시 생기나요?",
    a: "겉의 조직을 제거해도 바이러스가 활동할 수 있는 면역 환경이 그대로라면 재발할 수 있습니다. 사마귀는 조직 제거와 함께 몸의 방어 반응을 살피는 것이 중요합니다.",
  },
  {
    q: "티눈과 사마귀는 어떻게 다른가요?",
    a: "티눈은 마찰로 생기며 중심 핵이 있고 전염성이 없습니다. 사마귀는 바이러스성이라 깎으면 점상 출혈이 보이거나 주변으로 번질 수 있어 감별이 필요합니다.",
  },
  {
    q: "아이 사마귀도 한방 진료가 가능한가요?",
    a: "가능합니다. 통증에 민감한 아이들은 면역 반응을 돕는 방향으로 접근하면서 피부 장벽, 수면, 식사, 아토피 동반 여부를 함께 살핍니다.",
  },
  {
    q: "다른 사람에게 옮길 수 있나요?",
    a: "사마귀는 HPV 바이러스 질환이라 접촉이나 상처를 통해 옮을 수 있습니다. 수건, 손톱깎이 공유를 피하고 병변을 뜯지 않는 것이 중요합니다.",
  },
  {
    q: "치료 기간은 어느 정도 걸리나요?",
    a: "초기 사마귀는 비교적 빠르게 반응할 수 있지만, 여러 번 재발했거나 발바닥처럼 깊은 병변은 3~6개월 이상의 관리가 필요할 수 있습니다.",
  },
  {
    q: "비대면 상담도 가능한가요?",
    a: "가능합니다. 병변 사진, 위치, 통증, 시술 이력, 번지는 속도, 가족 내 전염 여부를 함께 확인하면 상담 방향을 잡는 데 도움이 됩니다.",
  },
];

const wartReviews = [
  {
    title: "[32세, 남성] 냉동치료 반복 후 재발한 발바닥 사마귀",
    desc: "걷기 통증과 반복 시술 스트레스가 컸던 경우. 면역 반응과 병변 탈락 흐름을 함께 관찰했습니다.",
    patient: "김**",
  },
  {
    title: "[8세, 남아] 통증 치료를 무서워하던 손가락 사마귀",
    desc: "병원 치료 공포가 커서 내원한 사례. 소아 면역과 피부 장벽 상태를 함께 살폈습니다.",
    patient: "최**",
  },
  {
    title: "[24세, 여성] 얼굴 편평사마귀가 번져 대인 스트레스가 컸던 사례",
    desc: "잡티처럼 퍼지는 편평사마귀와 피부 예민함을 함께 관리했습니다.",
    patient: "이**",
  },
];

export default function WartsPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 한방 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">사마귀</span>
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
            <p className="mb-5 text-lg font-semibold leading-8 text-brown keep-words">깎아내도 다시 뿌리내린다면 면역 토양을 봐야 합니다.</p>
            <h1 className="font-serif text-[clamp(3.4rem,7.5vw,6.3rem)] leading-[0.95] tracking-normal text-ink keep-words">
              사마귀<br />한방 진료
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-ink-soft keep-words">
              사마귀는 단순한 굳은살이 아니라 바이러스성 피부 질환입니다. 겉을 제거하는 것과 함께 몸의 방어력을 함께 살펴야 합니다.
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
                alt="사마귀 한방 진료 이미지"
                width={900}
                height={1100}
                priority
                className="h-[620px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-line bg-white/92 p-6 shadow-xl backdrop-blur">
              <p className="mb-4 font-bold text-ink">사마귀 한방 진료</p>
              <div className="space-y-3 text-base font-semibold text-ink">
                <p className="flex items-center gap-3"><StarIcon /> HPV 바이러스·반복 재발</p>
                <p className="flex items-center gap-3"><StarIcon /> 면역 반응·피부 장벽 관리</p>
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
            title="왜 제거해도 같은 자리에 다시 생길까요?"
            desc="겉의 조직만 사라져도 바이러스를 밀어내는 면역 반응이 충분하지 않으면 재발할 수 있습니다."
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
              사마귀는 바이러스와 면역 토양이 만난 결과입니다
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-ink-soft keep-words">
              <p>사마귀는 HPV 바이러스가 피부에 자리 잡아 생기는 질환입니다. 티눈이나 굳은살처럼 보이지만 전염성과 재발 가능성이 다릅니다.</p>
              <p>초근목피한의원은 병변의 위치, 통증, 번지는 속도, 시술 이력, 아토피나 피부 장벽 약화, 수면과 피로도를 함께 확인합니다.</p>
              <p>겉의 병변을 억지로 떼어내는 데서 끝나지 않고 바이러스가 활동하기 어려운 면역 환경을 만드는 방향을 찾습니다.</p>
            </div>
            <div className="mt-8 border-t border-ink pt-6 text-sm font-bold">맥진·문진 기반 전신 진단</div>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-line bg-white shadow-xl">
            <Image
              src="/images/programs/skin-mechanism.png"
              alt="사마귀 면역 치료 진단"
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
              바이러스를 밀어내는<br />핵심 치료 원리
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
              alt="사마귀 핵심 치료 원리"
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
            title="유형에 따라 다르게 보이는 사마귀"
            desc="손발의 딱딱한 병변부터 얼굴 편평사마귀, 아이 물사마귀까지 양상이 다양합니다."
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
            title="재발을 반복시키는 몸속 원인"
            desc="같은 사마귀라도 바이러스 노출, 피부 장벽, 면역 저하, 자가 처치 이력에 따라 관리 방향이 달라집니다."
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
            title="단계별 사마귀 치료 흐름"
            desc="면역 반응을 깨우고, 병변 변화를 관찰한 뒤 새살 회복과 재발 방지로 이어갑니다."
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
            <h2 className="font-serif text-[clamp(2.2rem,4.8vw,4rem)] leading-tight keep-words">티눈과 굳은살을 먼저 감별합니다</h2>
            <p className="mt-6 text-lg leading-9 text-ink-soft keep-words">
              사마귀는 티눈, 굳은살, 지루성 각화증, 비립종과 헷갈릴 수 있습니다. 전염성, 점상 출혈, 통증 양상, 병변 표면을 함께 확인합니다.
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
              <p className="mt-4 text-lg text-ink-soft">초근목피한의원에서 사마귀와 면역 반응을 함께 살핀 사례입니다.</p>
            </div>
            <Link href="/community/reviews" className="inline-flex items-center gap-2 font-bold text-brown">
              전체 후기 보기 <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {wartReviews.map((review) => (
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
              사마귀는 겉으로 보이는 작은 돌기지만, 반복될수록 면역의 흐름을 함께 살펴야 합니다. 제거보다 재발하지 않는 몸의 토양을 보겠습니다.
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
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight keep-words">병변 사진과 시술 이력을 함께 확인합니다</h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft keep-words">
              사마귀 사진, 위치, 통증, 번지는 속도, 냉동·레이저 치료 이력, 가족 내 전염 여부를 함께 확인하면 진료 방향을 더 선명하게 잡을 수 있습니다.
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
