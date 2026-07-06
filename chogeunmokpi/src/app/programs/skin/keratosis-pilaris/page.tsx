import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 모공각화증 한방진료 | 닭살피부·모낭각화증·팔뚝 돌기 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 모공각화증 한방진료 안내입니다. 닭살피부, 팔·다리 오돌토돌한 돌기, 피부 건조와 색소 침착을 피부 재생력과 장벽 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/skin/keratosis-pilaris",
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
  ["진료 질환", "모공각화증, 모낭각화증, 닭살피부, 팔뚝 돌기, Keratosis Pilaris"],
  ["주요 증상", "팔·다리 오돌토돌한 돌기, 거친 촉감, 피부 건조, 붉은기, 색소 침착"],
  ["치료 방향", "피부 재생력 회복, 각질 대사 조절, 보습 장벽 강화, 색소 침착 관리"],
  ["상담 대상", "스크럽 후 악화, 반팔 스트레스, 아토피 동반, 건조한 닭살피부"],
];

const visitReasons = [
  "팔뚝과 허벅지에 닭살 같은 돌기가 계속 올라옵니다.",
  "연고나 스크럽을 해도 그때뿐이고 다시 거칠어집니다.",
  "여름에 반팔 입기가 창피하고 남들이 팔을 만질까 신경 쓰입니다.",
  "때밀이로 밀었더니 오히려 빨갛고 따가워졌습니다.",
  "샤워하고 보습제를 발라도 금방 건조하고 까칠합니다.",
  "갈색 점처럼 남은 자국과 색소 침착이 오래 갑니다.",
  "아토피가 있었고 피부가 예민해 자극적인 치료가 걱정됩니다.",
  "깎아내는 치료 말고 피부결 자체를 매끄럽게 만들고 싶습니다.",
];

const causes = [
  {
    title: "각질 대사 저하",
    desc: "모낭 입구에 케라틴 각질이 과하게 쌓이면 통로가 막히고 오돌토돌한 돌기로 만져집니다.",
  },
  {
    title: "피부 진액 부족",
    desc: "한의학에서는 혈과 진액이 부족해 피부가 충분히 윤택하지 못하면 각질이 딱딱하게 굳는다고 봅니다.",
  },
  {
    title: "폐기와 피부 방어력 약화",
    desc: "피부를 주관하는 폐의 기운이 약하면 외부 자극에 민감하고 각질 탈락 주기가 더뎌질 수 있습니다.",
  },
  {
    title: "잘못된 각질 관리",
    desc: "때밀이, 강한 스크럽, 반복 필링은 피부 장벽을 손상시켜 오히려 각질 과생성을 부추길 수 있습니다.",
  },
  {
    title: "스트레스와 건조 환경",
    desc: "수험 생활, 과로, 건조한 계절은 피부 재생 주기를 흔들고 닭살 돌기와 붉은기를 더 도드라지게 합니다.",
  },
];

const symptoms = [
  { title: "오돌토돌한 돌기", desc: "팔뚝, 허벅지, 어깨 바깥쪽에 작은 돌기가 빽빽하게 만져집니다." },
  { title: "사포 같은 촉감", desc: "피부를 만졌을 때 까칠하고 거친 느낌이 강해집니다." },
  { title: "피부 건조와 각질", desc: "샤워 후 당김이 심하고 하얗게 각질이 일어나기 쉽습니다." },
  { title: "붉은기와 홍반", desc: "모공 주변이 붉어지고 자극 후 더 빨갛게 도드라질 수 있습니다." },
  { title: "갈색 색소 침착", desc: "오래된 돌기와 염증 자국이 갈색 점처럼 남아 피부 톤이 얼룩져 보입니다." },
  { title: "2차 모낭염", desc: "손으로 짜거나 긁으면 고름, 통증, 염증성 모낭염으로 이어질 수 있습니다." },
];

const patterns = [
  {
    type: "혈허풍조형",
    sign: "피부가 매우 건조하고 거칠며 가려움이 함께 있는 타입",
    method: "양혈윤조",
    desc: "피부를 윤택하게 하는 혈과 진액을 보충해 건조와 각질 과다를 완화합니다.",
  },
  {
    type: "폐기허약형",
    sign: "피부 면역이 약하고 외부 자극에 민감하며 각질 탈락이 느린 타입",
    method: "보폐익기",
    desc: "피부 방어력과 재생력을 도와 스스로 각질을 밀어내는 힘을 회복하도록 돕습니다.",
  },
  {
    type: "어혈저체형",
    sign: "오래되어 피부색이 탁하고 붉거나 갈색 색소 침착이 심한 타입",
    method: "활혈거어",
    desc: "정체된 순환을 풀어 모공 주변의 붉은기와 오래된 자국을 함께 관리합니다.",
  },
  {
    type: "간울기체형",
    sign: "스트레스가 심하면 돌기와 열감이 더 도드라지는 타입",
    method: "소간해울",
    desc: "긴장으로 흔들리는 피부 재생 리듬을 안정시키고 자극 반응을 줄입니다.",
  },
];

const treatmentSteps = [
  {
    title: "1개월 차: 재생 준비와 자극 진정",
    desc: "피부 건조와 붉은기를 먼저 낮추고 장벽을 보호하며 재생을 위한 토양을 만듭니다.",
    goals: ["피부 건조 완화", "붉은기와 따가움 진정", "과한 스크럽 중단"],
  },
  {
    title: "2~3개월 차: 피부결 개선",
    desc: "피부가 스스로 각질을 밀어내며 돌기의 높이가 낮아지고 촉감이 부드러워지는 시기입니다.",
    goals: ["돌기 높이 감소", "촉감 부드러움 회복", "피부 톤 개선"],
  },
  {
    title: "3~4개월 차: 색소 정리와 유지",
    desc: "남은 갈색 자국과 얼룩진 피부 톤을 정리하고 재발을 줄이는 보습·생활 루틴을 만듭니다.",
    goals: ["색소 침착 완화 관리", "보습력 유지", "재발 방지 습관 형성"],
  },
];

const differentialDiseases = [
  { title: "아토피 피부염", href: "/programs/skin/atopic-dermatitis", desc: "심한 가려움과 진물, 태선화가 동반되는 질환" },
  { title: "습진", href: "/programs/skin/eczema", desc: "붉은 반점, 진물, 갈라짐이 반복되는 피부염" },
  { title: "소양증", href: "/programs/skin/itching", desc: "돌기보다 전신 가려움이 중심인 증상" },
  { title: "건선", href: "/programs/skin/psoriasis", desc: "은백색 각질과 경계가 뚜렷한 판상 홍반" },
  { title: "지루성피부염", href: "/programs/skin/seborrheic-dermatitis", desc: "얼굴·두피의 기름진 각질과 홍반" },
  { title: "피부질환 클리닉", href: "/programs/skin", desc: "난치성 피부질환 전체 안내" },
];

const faqItems = [
  {
    q: "모공각화증은 전염되나요?",
    a: "전염되지 않습니다. 세균이나 곰팡이 감염이 아니라 모낭 입구에 각질이 과하게 쌓이고 피부 재생 주기가 느려지며 생기는 체질적 피부 변화입니다.",
  },
  {
    q: "스크럽이나 때밀이를 하면 좋아지나요?",
    a: "일시적으로 매끈해 보일 수 있지만 강한 마찰은 피부 장벽을 손상시켜 붉은기, 색소 침착, 각질 과생성을 더 심하게 만들 수 있습니다.",
  },
  {
    q: "유전이라면 치료가 어렵나요?",
    a: "체질적 경향은 있을 수 있지만 피부 장벽과 각질 대사, 보습력을 개선하면 거친 촉감과 붉은기, 색소 침착을 줄이는 데 도움이 됩니다.",
  },
  {
    q: "아토피와 같이 있어도 볼 수 있나요?",
    a: "가능합니다. 아토피 병력이 있으면 피부 장벽이 약하고 자극에 민감한 경우가 많아 각질 제거보다 장벽 회복과 진정이 우선입니다.",
  },
  {
    q: "치료 기간은 얼마나 걸리나요?",
    a: "피부 재생 주기에 맞춘 치료가 필요합니다. 단순 돌기 중심은 2~3개월, 오래된 색소 침착이나 아토피 동반형은 3~6개월 이상 관리가 필요할 수 있습니다.",
  },
  {
    q: "비대면 상담도 가능한가요?",
    a: "가능합니다. 팔·다리 사진, 색소 침착 정도, 스크럽·필링 이력, 건조감과 아토피 병력을 함께 확인하면 상담 방향을 잡는 데 도움이 됩니다.",
  },
];

const keratosisReviews = [
  {
    title: "[19세, 여성] 수험 스트레스 뒤 팔뚝 닭살이 급격히 도드라진 사례",
    desc: "피부 건조와 붉은 돌기가 함께 심해진 경우. 혈허풍조와 스트레스 반응을 함께 관리했습니다.",
    patient: "김**",
  },
  {
    title: "[28세, 여성] 웨딩 촬영 전 팔뚝 모공각화증과 색소 침착",
    desc: "스크럽 후 붉은기와 갈색 자국이 남은 사례. 장벽 회복과 피부결 개선을 함께 살폈습니다.",
    patient: "정**",
  },
  {
    title: "[34세, 남성] 겨울마다 심해지는 다리 닭살피부",
    desc: "건조한 계절에 각질과 거친 촉감이 심해지는 경우. 보습력과 각질 대사 회복을 중심으로 관리했습니다.",
    patient: "윤**",
  },
];

export default function KeratosisPilarisPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 한방 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">모공각화증</span>
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
            <p className="mb-5 text-lg font-semibold leading-8 text-brown keep-words">깎아내기보다 피부가 스스로 밀어내는 힘을 봅니다.</p>
            <h1 className="font-serif text-[clamp(3.2rem,7.2vw,6.1rem)] leading-[0.95] tracking-normal text-ink keep-words">
              모공각화증<br />한방 진료
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-ink-soft keep-words">
              오돌토돌한 닭살피부는 각질을 억지로 깎는다고 끝나지 않습니다. 피부 재생력과 장벽, 진액의 바탕을 함께 살핍니다.
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
                src="/images/programs/skin-keratosis-pilaris-detail.png"
                alt="모공각화증 한방 진료 이미지"
                width={900}
                height={1100}
                priority
                className="h-[620px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-line bg-white/92 p-6 shadow-xl backdrop-blur">
              <p className="mb-4 font-bold text-ink">모공각화증 한방 진료</p>
              <div className="space-y-3 text-base font-semibold text-ink">
                <p className="flex items-center gap-3"><StarIcon /> 닭살피부·거친 촉감</p>
                <p className="flex items-center gap-3"><StarIcon /> 각질 대사·피부 장벽 회복</p>
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
            title="왜 깎아내도 다시 오돌토돌해질까요?"
            desc="모공각화증은 표면 각질만의 문제가 아니라 피부가 각질을 정상적으로 밀어내는 힘이 약해진 신호일 수 있습니다."
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
              닭살피부는 피부 재생력이 느려진 신호입니다
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-ink-soft keep-words">
              <p>모공각화증은 모낭 입구에 각질이 쌓여 돌기처럼 만져지는 피부 변화입니다. 전염되는 병은 아니지만, 오래 두면 붉은기와 색소 침착이 남을 수 있습니다.</p>
              <p>초근목피한의원은 돌기의 위치, 건조감, 아토피 병력, 스크럽·필링 이력, 색소 침착과 생활 자극을 함께 확인합니다.</p>
              <p>각질을 무리하게 깎아내기보다 피부가 스스로 턴오버를 회복하고 매끄러운 결을 유지하도록 돕는 방향을 찾습니다.</p>
            </div>
            <div className="mt-8 border-t border-ink pt-6 text-sm font-bold">맥진·문진 기반 전신 진단</div>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-line bg-white shadow-xl">
            <Image
              src="/images/programs/skin-mechanism.png"
              alt="모공각화증 피부 재생 진단"
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
              매끄러운 피부결을 위한<br />핵심 치료 원리
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
              alt="모공각화증 핵심 치료 원리"
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
            title="모공각화증에서 함께 확인하는 변화"
            desc="돌기의 높이뿐 아니라 촉감, 건조감, 붉은기, 색소 침착까지 같이 봅니다."
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
            title="피부결을 거칠게 만드는 원인"
            desc="같은 닭살피부라도 건조, 아토피 체질, 색소 침착, 스트레스 반응 중 어디가 중심인지에 따라 관리 방향이 달라집니다."
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
            title="단계별 모공각화증 치료 흐름"
            desc="피부 장벽을 먼저 진정시키고, 각질 대사를 회복한 뒤 남은 색소와 피부결을 정리합니다."
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
            <h2 className="font-serif text-[clamp(2.2rem,4.8vw,4rem)] leading-tight keep-words">비슷해 보여도 감별이 필요합니다</h2>
            <p className="mt-6 text-lg leading-9 text-ink-soft keep-words">
              모공각화증은 아토피 피부염, 모낭염, 등·가슴 여드름, 어린선과 헷갈릴 수 있습니다. 가려움, 고름, 통증, 각질 범위를 함께 확인해야 합니다.
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
              <p className="mt-4 text-lg text-ink-soft">초근목피한의원에서 모공각화증과 피부 재생력을 함께 살핀 사례입니다.</p>
            </div>
            <Link href="/community/reviews" className="inline-flex items-center gap-2 font-bold text-brown">
              전체 후기 보기 <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {keratosisReviews.map((review) => (
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
              모공각화증은 피부 표면만 깎는다고 끝나지 않습니다. 피부가 스스로 각질을 정리하고 촉촉함을 유지하는 힘을 함께 살피겠습니다.
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
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight keep-words">피부결 사진과 관리 이력을 함께 확인합니다</h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft keep-words">
              팔·다리 사진, 돌기의 높이, 붉은기와 색소 침착, 스크럽·필링 이력, 보습 습관과 아토피 병력을 함께 확인하면 진료 방향을 더 선명하게 잡을 수 있습니다.
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
