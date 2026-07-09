import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { programImageMetadata } from "@/lib/seo";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 건선 유성구 한의원 각질 피부 한약 - 초근목피한의원 대전 반석동",
  description:
    "대전 유성구 반석동 초근목피한의원의 건선 한방치료 안내입니다. 은백색 각질, 붉은 판상 홍반, 두피 건선과 재발을 면역 균형 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/skin/psoriasis",
  },
  ...programImageMetadata({
    title: "?? ?? ???? | ???????",
    description: "?? ??? ??? ???????? ?? ???? ?????.",
    url: "/programs/skin/psoriasis",
    image: "/images/programs/skin-psoriasis-detail.png",
    alt: "?? ?? ?? ???",
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
  ["진료 질환", "건선, 마른버짐, 홍반성 구진, 두피 건선, 손발톱 건선"],
  ["주요 증상", "은백색 각질, 경계가 뚜렷한 붉은 판, 가려움, 갈라짐, 재발"],
  ["치료 방향", "면역 과반응 진정, 혈열·습열·혈조 패턴 조절, 피부 재생력 회복"],
  ["상담 대상", "스테로이드 반복 사용, 두피·팔꿈치·무릎 병변, 관절통 동반, 만성 재발"],
];

const visitReasons = [
  "하얀 각질이 비늘처럼 떨어져 옷과 침구에 계속 묻어납니다.",
  "팔꿈치, 무릎, 두피에 붉은 판이 두껍게 올라와 잘 사라지지 않습니다.",
  "연고를 바르면 잠깐 옅어지지만 스트레스 받으면 다시 번집니다.",
  "가려움과 갈라짐 때문에 긁다 보면 피가 맺히고 따갑습니다.",
  "손발톱이 두꺼워지고 들뜨며 모양이 변해 걱정됩니다.",
  "피부뿐 아니라 손가락, 발가락 관절까지 뻣뻣하고 아픕니다.",
  "건선이 전염되는 병처럼 보일까 봐 사람 만나는 일이 위축됩니다.",
  "증상만 덮는 치료보다 재발 고리까지 줄이고 싶습니다.",
];

const causes = [
  {
    title: "면역계의 과민 반응",
    desc: "건선은 피부 세포가 너무 빠르게 증식하는 만성 염증성 질환입니다. 면역 반응이 과해지면 각질과 홍반이 반복됩니다.",
  },
  {
    title: "스트레스와 수면 부족",
    desc: "긴장, 과로, 불면은 피부 열감을 높이고 염증 조절력을 떨어뜨려 갑작스러운 악화의 방아쇠가 됩니다.",
  },
  {
    title: "소화·해독 기능 저하",
    desc: "속이 더부룩하고 배출이 원활하지 않으면 몸속 습열과 노폐물이 피부 염증으로 드러나기 쉽습니다.",
  },
  {
    title: "외상과 반복 자극",
    desc: "긁힘, 마찰, 상처가 난 부위에 새로운 건선 병변이 생기는 코브너 현상이 나타날 수 있습니다.",
  },
  {
    title: "음주·흡연·대사 불균형",
    desc: "음주, 흡연, 체중 증가, 대사 문제는 만성 염증을 키워 치료 반응을 더디게 만들 수 있습니다.",
  },
];

const symptoms = [
  { title: "은백색 인설", desc: "붉은 판 위로 마른 비늘 같은 각질이 겹겹이 쌓입니다." },
  { title: "뚜렷한 경계의 홍반", desc: "팔꿈치, 무릎, 두피, 허리 주변에 선명한 붉은 판이 생깁니다." },
  { title: "가려움과 갈라짐", desc: "건조감이 깊어지면 피부가 갈라지고 통증이나 출혈이 동반됩니다." },
  { title: "두피 각질", desc: "비듬처럼 보이지만 두껍고 딱딱한 각질이 반복되어 일상 스트레스가 큽니다." },
  { title: "손발톱 변화", desc: "손발톱이 두꺼워지거나 들뜨고 작은 점 모양의 함몰이 생길 수 있습니다." },
  { title: "관절 불편감", desc: "손가락, 발가락, 무릎 관절 통증이 동반되면 건선 관절염 여부도 살펴야 합니다." },
];

const patterns = [
  {
    type: "혈열형",
    sign: "붉은 기가 강하고 열감, 가려움, 빠른 악화가 두드러지는 타입",
    method: "청열량혈",
    desc: "피부와 혈분에 몰린 열을 낮춰 홍반, 화끈거림, 급성 악화를 먼저 안정시킵니다.",
  },
  {
    type: "습열형",
    sign: "몸이 무겁고 소화가 더디며 병변이 두껍고 끈질긴 타입",
    method: "청열거습",
    desc: "비위 기능과 배출 흐름을 도와 몸속 습열이 피부에 쌓이는 고리를 줄입니다.",
  },
  {
    type: "혈허풍조형",
    sign: "오래된 건선으로 건조, 갈라짐, 비늘각질이 깊은 만성 타입",
    method: "양혈윤조",
    desc: "피부를 윤택하게 하는 혈과 진액을 보충해 각질, 건조감, 갈라짐을 다룹니다.",
  },
  {
    type: "간울화열형",
    sign: "스트레스 뒤 악화되고 옆구리 답답함, 불면, 예민함이 동반되는 타입",
    method: "소간청열",
    desc: "막힌 기운을 풀고 위로 치솟는 열을 내려 재발의 심리·신체적 방아쇠를 낮춥니다.",
  },
];

const treatmentSteps = [
  {
    title: "1개월 차: 염증 진정과 각질 배출 정리",
    desc: "붉은기, 열감, 가려움을 낮추고 두꺼운 인설이 무리 없이 떨어질 수 있는 피부 환경을 만듭니다.",
    goals: ["가려움 강도 감소", "홍반과 열감 완화", "과한 각질 증식 진정"],
  },
  {
    title: "2~3개월 차: 피부 재생 주기 회복",
    desc: "너무 빨라진 피부 턴오버를 안정시키고 병변의 두께와 범위를 줄이는 데 집중합니다.",
    goals: ["판상 병변 두께 감소", "두피와 손발톱 변화 점검", "수면·소화 상태 개선"],
  },
  {
    title: "4~6개월 차: 재발 방지와 체질 관리",
    desc: "좋아진 피부가 다시 흔들리지 않도록 스트레스, 식습관, 체중, 음주 같은 재발 요인을 함께 조정합니다.",
    goals: ["재발 간격 연장", "연고 의존도 감소", "자가 관리 루틴 형성"],
  },
];

const differentialDiseases = [
  { title: "아토피 피부염", href: "/programs/skin/atopic-dermatitis", desc: "심한 가려움과 만성 습진성 염증" },
  { title: "습진", href: "/programs/skin/eczema", desc: "진물, 갈라짐, 손·얼굴 피부염" },
  { title: "지루성 피부염", href: "/programs/skin/seborrheic-dermatitis", desc: "두피, 얼굴 중심의 피지·각질 염증" },
  { title: "두드러기", href: "/programs/skin/urticaria", desc: "갑자기 올라왔다 사라지는 팽진과 가려움" },
  { title: "한포진", href: "/programs/skin/pompholyx", desc: "손발의 작은 수포와 반복 가려움" },
  { title: "피부질환 클리닉", href: "/programs/skin", desc: "난치성 피부질환 전체 안내" },
];

const faqItems = [
  {
    q: "건선은 전염되나요?",
    a: "전염되지 않습니다. 곰팡이나 세균 감염이 아니라 면역 불균형과 피부 재생 주기의 이상으로 반복되는 만성 염증성 피부질환입니다.",
  },
  {
    q: "스테로이드 연고를 바로 끊어야 하나요?",
    a: "갑자기 중단하면 반동으로 악화될 수 있습니다. 현재 사용량과 병변 상태를 확인한 뒤 피부가 버틸 수 있는 방향으로 단계적으로 줄이는 것이 좋습니다.",
  },
  {
    q: "건선 치료는 얼마나 걸리나요?",
    a: "범위, 유병 기간, 두피·손발톱·관절 동반 여부에 따라 다릅니다. 오래된 만성 건선은 보통 3개월 이상 꾸준한 관찰과 체질 관리가 필요합니다.",
  },
  {
    q: "두피 건선과 지루성 피부염은 어떻게 다른가요?",
    a: "두피 건선은 경계가 뚜렷하고 두꺼운 은백색 각질이 특징인 경우가 많습니다. 지루성 피부염은 피지, 붉음, 기름진 각질이 두드러지지만 실제 진료에서 함께 감별합니다.",
  },
  {
    q: "관절이 아픈 것도 관련이 있나요?",
    a: "손가락, 발가락, 무릎, 허리 통증이 동반된다면 건선 관절염 가능성을 확인해야 합니다. 이런 경우에는 피부와 관절 증상을 함께 살핍니다.",
  },
  {
    q: "비대면 상담도 가능한가요?",
    a: "사진, 병변 위치, 악화 시기, 사용 중인 연고와 약을 확인해 상담 방향을 잡을 수 있습니다. 필요한 경우 내원 진료를 함께 안내합니다.",
  },
];

const psoriasisReviews = [
  {
    title: "[39세, 남성] 두피와 팔꿈치 건선이 반복된 사례",
    desc: "두피 각질과 팔꿈치 판상 병변이 오래 반복되던 경우. 소화 상태와 음주, 수면 패턴을 함께 조정하며 병변 두께와 가려움이 완화되었습니다.",
    patient: "김**",
  },
  {
    title: "[46세, 여성] 스트레스 뒤 악화되는 붉은 판상 건선",
    desc: "업무 스트레스와 불면 뒤 병변이 넓어지던 경우. 열감과 가려움을 낮추는 처방과 생활 관리를 병행했습니다.",
    patient: "박**",
  },
  {
    title: "[28세, 남성] 손발톱 변화가 동반된 만성 건선",
    desc: "손발톱 들뜸과 무릎 주변 병변을 함께 호소한 사례. 만성 염증과 체질적 건조를 함께 살피며 장기 재발 관리를 진행했습니다.",
    patient: "이**",
  },
];

export default function PsoriasisPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 한방 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">건선</span>
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
            <p className="mb-5 text-lg font-semibold leading-8 text-brown keep-words">피부 겉만의 문제가 아니라, 몸 안 면역 균형의 신호입니다.</p>
            <h1 className="font-serif text-[clamp(3.5rem,8vw,6.6rem)] leading-[0.95] tracking-normal text-ink keep-words">
              건선<br />한방 진료
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-ink-soft keep-words">
              은백색 각질과 붉은 판상 병변이 반복된다면 피부 재생 주기와 몸속 염증 흐름을 함께 살펴야 합니다.
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
                src="/images/programs/skin-psoriasis-detail.png"
                alt="건선 한방 진료 이미지"
                width={900}
                height={1100}
                priority
                className="h-[620px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-line bg-white/92 p-6 shadow-xl backdrop-blur">
              <p className="mb-4 font-bold text-ink">건선 한방 진료</p>
              <div className="space-y-3 text-base font-semibold text-ink">
                <p className="flex items-center gap-3"><StarIcon /> 은백색 각질·판상 홍반</p>
                <p className="flex items-center gap-3"><StarIcon /> 면역 균형·재발 방지 관리</p>
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
            eyebrow="When Psoriasis Repeats"
            title="왜 계속 다시 올라올까요?"
            desc="건선은 단순한 각질 문제가 아니라 면역 반응, 피부 재생 주기, 생활 리듬이 함께 흔들릴 때 반복됩니다."
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
              건선은 피부 재생 주기의 속도가 무너진 질환입니다
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-ink-soft keep-words">
              <p>건선은 피부가 너무 빨리 만들어지고 충분히 성숙하기 전에 쌓이면서 은백색 각질과 붉은 판상 병변을 만듭니다.</p>
              <p>초근목피한의원은 병변의 모양만 보지 않고 열감, 소화 상태, 수면, 스트레스, 음주, 손발톱과 관절 증상까지 함께 확인합니다.</p>
              <p>피부에 몰린 열과 습을 낮추고, 건조해진 피부를 윤택하게 하며, 재발을 부르는 생활 요인까지 정리하는 것이 치료의 핵심입니다.</p>
            </div>
            <div className="mt-8 border-t border-ink pt-6 text-sm font-bold">특화된 진단 시스템</div>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-line bg-white shadow-xl">
            <Image
              src="/images/programs/skin-mechanism.png"
              alt="건선 면역 균형 진단"
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
              건선 재발 고리를 줄이는<br />핵심 치료 원리
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
              alt="건선 핵심 치료 원리"
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
            title="건선에서 자주 확인하는 증상"
            desc="병변의 두께, 색, 범위, 위치와 함께 몸 전체의 컨디션을 같이 봅니다."
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
            title="겉으로 보이는 각질 뒤에 있는 원인"
            desc="같은 건선이라도 어떤 사람은 스트레스에, 어떤 사람은 음주나 소화 문제에 더 민감하게 반응합니다."
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
            title="단계별 건선 치료 흐름"
            desc="오래된 건선일수록 피부가 안정되는 시간과 재발 관리 시간이 함께 필요합니다."
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
            <h2 className="font-serif text-[clamp(2.2rem,4.8vw,4rem)] leading-tight keep-words">건선은 감별과 장기 관리가 중요합니다</h2>
            <p className="mt-6 text-lg leading-9 text-ink-soft keep-words">
              두피 각질은 지루성 피부염과, 몸의 붉은 반점은 습진이나 곰팡이 질환과 헷갈릴 수 있습니다. 병변이 넓거나 관절 증상이 있으면 더 세심한 확인이 필요합니다.
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
              <p className="mt-4 text-lg text-ink-soft">초근목피한의원에서 건선과 피부 면역을 함께 살핀 사례입니다.</p>
            </div>
            <Link href="/community/reviews" className="inline-flex items-center gap-2 font-bold text-brown">
              전체 후기 보기 <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {psoriasisReviews.map((review) => (
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
              건선은 피부만 보는 질환이 아닙니다. 피부에 드러난 염증의 흐름과 몸 전체의 균형을 함께 살펴 재발을 줄이는 방향을 찾겠습니다.
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
              병변 부위, 악화 시기, 복용 중인 약, 사용 중인 연고를 함께 확인하면 내원 전에도 치료 방향을 더 선명하게 잡을 수 있습니다.
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
