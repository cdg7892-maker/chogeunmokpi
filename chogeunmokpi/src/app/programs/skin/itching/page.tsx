import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { programImageMetadata } from "@/lib/seo";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 가려움증 한방진료 | 소양증·전신 가려움·만성 피부 가려움 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 소양증·가려움증 한방진료 안내입니다. 항히스타민제 반복, 야간 가려움, 전신 가려움과 피부 건조를 몸속 열과 진액 균형 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/skin/itching",
  },
  ...programImageMetadata({
    title: "?? ???? ???? | ???????",
    description: "?? ??? ??? ???????? ???? ???? ?????.",
    url: "/programs/skin/itching",
    image: "/images/programs/skin-itching-detail.png",
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
  ["진료 질환", "소양증, 전신 가려움, 만성 가려움증, 노인성 가려움, 야간 소양증"],
  ["주요 증상", "참기 힘든 가려움, 피부 건조, 발적, 긁은 상처, 색소 침착, 수면 장애"],
  ["치료 방향", "혈열·혈조·습열 조절, 피부 장벽 회복, 수면 안정, 약 의존도 완화"],
  ["상담 대상", "항히스타민제 반복 복용, 검사상 원인 불명, 밤마다 가려움, 전신 건조감"],
];

const visitReasons = [
  "약을 먹을 때는 괜찮다가 끊으면 바로 가려움이 다시 올라옵니다.",
  "밤마다 가려워 잠을 설치고 낮에는 피로가 쌓입니다.",
  "검사에서는 이상이 없다는데 온몸이 따갑고 가렵습니다.",
  "샤워하고 나오면 피부가 당기면서 미치게 가렵습니다.",
  "긁어서 생긴 상처와 색소 침착 때문에 반팔 입기가 부담스럽습니다.",
  "술이나 기름진 음식을 먹으면 다음 날 가려움이 심해집니다.",
  "스트레스를 받으면 피부가 예민해지고 손이 계속 갑니다.",
  "항히스타민제와 연고 없이 버틸 수 있는 몸 상태를 만들고 싶습니다.",
];

const causes = [
  {
    title: "체내 열과 독소 누적",
    desc: "음주, 기름진 음식, 불규칙한 식사가 오래되면 혈열과 습열이 피부 신경을 자극해 가려움이 반복될 수 있습니다.",
  },
  {
    title: "혈액·진액 부족",
    desc: "노화, 과로, 수면 부족으로 피부를 윤택하게 하는 진액이 부족해지면 건조감과 야간 가려움이 깊어집니다.",
  },
  {
    title: "자율신경 불균형",
    desc: "긴장과 스트레스는 피부 감각 신경을 예민하게 만들고, 사소한 자극도 강한 가려움으로 느끼게 합니다.",
  },
  {
    title: "피부 장벽 약화",
    desc: "잦은 샤워, 강한 세정, 반복적인 긁음과 연고 사용은 피부 장벽을 약하게 만들어 악순환을 만듭니다.",
  },
  {
    title: "대사·내과적 요인",
    desc: "당뇨, 간·신장 기능, 약물 복용, 갱년기 변화 등 전신 상태가 가려움과 연결되는 경우도 함께 살펴야 합니다.",
  },
];

const symptoms = [
  { title: "발작적인 가려움", desc: "한번 시작되면 피가 날 때까지 긁어야 멈추는 느낌이 듭니다." },
  { title: "피부 건조와 각질", desc: "피부가 종잇장처럼 얇고 건조해지며 하얀 가루가 떨어집니다." },
  { title: "붉음과 부종", desc: "가려운 부위가 붉게 달아오르고 긁은 뒤 퉁퉁 붓기도 합니다." },
  { title: "태선화와 색소 침착", desc: "반복적으로 긁은 부위가 두꺼워지고 검게 변할 수 있습니다." },
  { title: "수면 장애", desc: "밤에 가려움이 심해져 여러 번 깨고 낮 동안 무기력해집니다." },
  { title: "불안과 집중력 저하", desc: "언제 가려울지 모른다는 불안과 업무 집중도 저하가 함께 옵니다." },
];

const patterns = [
  {
    type: "풍열형",
    sign: "갑자기 가렵고 열감이 있으며 가려운 부위가 이동하는 타입",
    method: "거풍청열",
    desc: "피부 표면의 열과 예민한 반응을 낮춰 급성 가려움과 붉은기를 진정시킵니다.",
  },
  {
    type: "습열형",
    sign: "붉고 붓거나 진물, 습진 양상이 함께 나타나는 타입",
    method: "청열이습",
    desc: "몸속 습열을 배출해 진물, 붓기, 끈질긴 가려움이 반복되는 흐름을 줄입니다.",
  },
  {
    type: "혈허풍조형",
    sign: "피부가 매우 건조하고 밤에 가려움이 심한 만성·노인성 타입",
    method: "양혈윤조",
    desc: "혈과 진액을 보충해 피부를 윤택하게 만들고 건조로 인한 가려움을 다룹니다.",
  },
  {
    type: "간울기체형",
    sign: "스트레스와 긴장 뒤 가려움이 폭발적으로 심해지는 타입",
    method: "소간해울",
    desc: "막힌 기운을 풀고 자율신경의 긴장을 낮춰 피부 감각 과민을 안정시킵니다.",
  },
];

const treatmentSteps = [
  {
    title: "1개월 차: 열감과 가려움 강도 낮추기",
    desc: "가장 먼저 밤에 깨는 횟수와 가려움의 강도를 줄여 피부와 신경이 쉴 수 있는 시간을 만듭니다.",
    goals: ["야간 가려움 완화", "붉은기와 열감 진정", "진물·상처 악화 관리"],
  },
  {
    title: "2~3개월 차: 독소 배출과 피부 재생",
    desc: "가려움이 올라오는 주기를 늦추고 긁어서 생긴 상처와 거친 피부결이 회복되도록 돕습니다.",
    goals: ["새 가려움 빈도 감소", "상처 회복과 피부결 개선", "약·연고 의존도 점검"],
  },
  {
    title: "3~4개월 차: 장벽 강화와 재발 방지",
    desc: "피부 장벽과 수면 리듬을 안정시켜 외부 자극에도 쉽게 가렵지 않은 상태를 목표로 합니다.",
    goals: ["재발 간격 연장", "색소 침착 완화 관리", "생활 관리 루틴 형성"],
  },
];

const differentialDiseases = [
  { title: "아토피 피부염", href: "/programs/skin/atopic-dermatitis", desc: "접히는 부위 중심의 만성 염증과 가려움" },
  { title: "두드러기", href: "/programs/skin/urticaria", desc: "팽진이 올라왔다 사라지는 급성·만성 가려움" },
  { title: "습진", href: "/programs/skin/eczema", desc: "진물, 갈라짐, 붉은 반점이 동반되는 피부염" },
  { title: "건선", href: "/programs/skin/psoriasis", desc: "은백색 각질과 경계가 뚜렷한 판상 홍반" },
  { title: "지루성피부염", href: "/programs/skin/seborrheic-dermatitis", desc: "얼굴·두피의 기름진 각질과 홍반" },
  { title: "피부질환 클리닉", href: "/programs/skin", desc: "난치성 피부질환 전체 안내" },
];

const faqItems = [
  {
    q: "검사상 이상이 없는데도 왜 계속 가려울까요?",
    a: "가려움은 혈액검사나 피부검사에 명확히 잡히지 않는 자율신경 과민, 피부 건조, 열과 습의 불균형으로도 반복될 수 있습니다. 그래서 증상 부위뿐 아니라 수면, 소화, 스트레스, 복용약까지 함께 봅니다.",
  },
  {
    q: "항히스타민제를 계속 먹어도 괜찮나요?",
    a: "필요한 시기에는 도움을 받을 수 있지만, 약을 끊을 때마다 반복된다면 가려움을 만드는 몸의 환경을 함께 조정해야 합니다. 복용 중인 약은 임의로 중단하지 않고 상태에 맞춰 조율합니다.",
  },
  {
    q: "밤에 더 가려운 이유가 있나요?",
    a: "밤에는 체온과 자율신경 리듬이 바뀌고 외부 자극이 줄어 피부 감각이 더 크게 느껴질 수 있습니다. 건조한 피부와 스트레스성 긴장이 겹치면 야간 소양증이 심해집니다.",
  },
  {
    q: "노인성 가려움도 한방 진료가 가능한가요?",
    a: "가능합니다. 노화로 진액이 부족하고 피부 장벽이 약해진 경우에는 열을 무작정 내리기보다 보혈, 윤조, 피부 장벽 회복을 중심으로 살핍니다.",
  },
  {
    q: "치료 기간은 얼마나 걸리나요?",
    a: "급성 가려움은 비교적 빠르게 진정되는 경우도 있지만, 2년 이상 반복된 만성 소양증은 3~6개월 이상 피부와 몸 상태를 함께 관리하는 계획이 필요할 수 있습니다.",
  },
  {
    q: "비대면 상담도 가능한가요?",
    a: "가능합니다. 가려운 부위 사진, 긁은 흔적, 악화 시간대, 복용 중인 약과 기저질환 정보를 함께 확인하면 상담 방향을 잡는 데 도움이 됩니다.",
  },
];

const itchingReviews = [
  {
    title: "[62세, 여성] 밤마다 전신 가려움으로 잠을 설친 사례",
    desc: "검사상 큰 이상은 없었지만 야간 가려움과 피부 건조가 심했던 경우. 혈허풍조 패턴을 중심으로 수면과 피부 장벽을 함께 관리했습니다.",
    patient: "오**",
  },
  {
    title: "[38세, 남성] 스트레스 뒤 온몸 가려움이 반복된 사례",
    desc: "업무 긴장 뒤 가려움이 폭발하고 항히스타민제에 의존하던 경우. 자율신경 긴장과 열감을 함께 살폈습니다.",
    patient: "강**",
  },
  {
    title: "[45세, 여성] 샤워 후 따가움과 건조 가려움이 심한 사례",
    desc: "피부가 얇고 건조해 작은 자극에도 가려움이 올라오던 경우. 생활 관리와 윤조 방향의 처방을 병행했습니다.",
    patient: "박**",
  },
];

export default function ItchingPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 한방 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">소양증·가려움증</span>
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
            <p className="mb-5 text-lg font-semibold leading-8 text-brown keep-words">피부 겉이 아니라 몸속에서 보내는 신호를 살핍니다.</p>
            <h1 className="font-serif text-[clamp(3.1rem,7.2vw,6.2rem)] leading-[0.95] tracking-normal text-ink keep-words">
              소양증<br />가려움증
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-ink-soft keep-words">
              항히스타민제는 먹을 때뿐이고 밤마다 다시 가렵다면 피부만의 문제가 아닐 수 있습니다. 열, 건조, 신경 과민의 흐름을 함께 봅니다.
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
                src="/images/programs/skin-itching-detail.png"
                alt="소양증 가려움증 한방 진료 이미지"
                width={900}
                height={1100}
                priority
                className="h-[620px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-line bg-white/92 p-6 shadow-xl backdrop-blur">
              <p className="mb-4 font-bold text-ink">소양증 한방 진료</p>
              <div className="space-y-3 text-base font-semibold text-ink">
                <p className="flex items-center gap-3"><StarIcon /> 야간 가려움·전신 소양증</p>
                <p className="flex items-center gap-3"><StarIcon /> 혈열·혈조·습열 균형 관리</p>
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
            title="왜 약을 끊으면 다시 가려울까요?"
            desc="가려움은 피부 감각, 수면, 스트레스, 몸속 열과 건조가 함께 만든 결과일 수 있습니다."
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
              가려움은 몸속 균형이 깨졌다는 신호입니다
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-ink-soft keep-words">
              <p>검사상 이상이 없는데도 전신이 가렵다면 피부 겉만 볼 일이 아닙니다. 열, 건조, 신경 과민, 수면 리듬까지 함께 봐야 합니다.</p>
              <p>초근목피한의원은 가려운 부위와 시간대, 피부 건조, 소화·배변, 스트레스, 복용 중인 약과 기저질환을 함께 확인합니다.</p>
              <p>증상을 억누르는 데서 끝나지 않고 가려움이 반복되지 않는 몸의 환경을 만드는 것을 목표로 합니다.</p>
            </div>
            <div className="mt-8 border-t border-ink pt-6 text-sm font-bold">맥진·문진 기반 전신 진단</div>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-line bg-white shadow-xl">
            <Image
              src="/images/programs/skin-mechanism.png"
              alt="소양증 가려움증 원인 진단"
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
              가려움의 뿌리를 줄이는<br />핵심 치료 원리
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
              alt="소양증 가려움증 핵심 치료 원리"
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
            title="가려움이 삶을 흔들 때 나타나는 신호"
            desc="단순히 긁는 문제에서 끝나지 않고 수면, 감정, 집중력까지 흔들 수 있습니다."
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
            title="가려움을 반복시키는 몸속 원인"
            desc="같은 가려움이라도 어떤 분은 열이, 어떤 분은 건조가, 어떤 분은 스트레스와 수면 문제가 중심일 수 있습니다."
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
            title="단계별 소양증 치료 흐름"
            desc="피부와 신경이 쉴 시간을 만들고, 장벽과 수면 리듬을 회복하는 순서로 진행합니다."
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
            <h2 className="font-serif text-[clamp(2.2rem,4.8vw,4rem)] leading-tight keep-words">가려움은 감별이 먼저입니다</h2>
            <p className="mt-6 text-lg leading-9 text-ink-soft keep-words">
              소양증은 아토피, 두드러기, 습진, 건선, 지루성피부염과 겹쳐 보일 수 있습니다. 팽진이 있는지, 진물이 있는지, 각질 양상이 어떤지에 따라 접근이 달라집니다.
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
              <p className="mt-4 text-lg text-ink-soft">초근목피한의원에서 만성 가려움과 피부 장벽을 함께 살핀 사례입니다.</p>
            </div>
            <Link href="/community/reviews" className="inline-flex items-center gap-2 font-bold text-brown">
              전체 후기 보기 <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {itchingReviews.map((review) => (
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
              가려움은 작은 증상처럼 보여도 수면과 마음을 크게 흔듭니다. 피부에 드러난 신호를 통해 몸속 열, 건조, 긴장의 흐름을 함께 살피겠습니다.
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
              가려운 부위, 시간대, 악화 음식, 복용 중인 약, 기저질환과 수면 패턴을 함께 확인하면 진료 방향을 더 선명하게 잡을 수 있습니다.
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
