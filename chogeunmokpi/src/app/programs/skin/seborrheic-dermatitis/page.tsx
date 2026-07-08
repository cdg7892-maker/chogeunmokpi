import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { programImageMetadata } from "@/lib/seo";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 지루성피부염 한방진료 | 지루성두피염·얼굴 홍반·면유풍 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 지루성피부염 한방진료 안내입니다. 얼굴 홍반, 지루성두피염, 기름진 각질과 반복 재발을 습열과 피부 면역 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/skin/seborrheic-dermatitis",
  },
  ...programImageMetadata({
    title: "?? ?????? ???? | ???????",
    description: "?? ??? ??? ???????? ?????? ???? ?????.",
    url: "/programs/skin/seborrheic-dermatitis",
    image: "/images/programs/skin-seborrheic-detail.png",
    alt: "?????? ?? ?? ???",
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
  ["진료 질환", "지루성피부염, 지루성두피염, 면유풍, 백설풍, 반복성 얼굴 홍반"],
  ["주요 증상", "코 주변 붉음, 눈썹·두피 각질, 기름진 비듬, 가려움, 따가움"],
  ["치료 방향", "습열 진정, 상열하한 조절, 피부 장벽 회복, 연고 의존도 완화"],
  ["상담 대상", "연고를 끊으면 재발, 두피 가려움·비듬, 얼굴 열감, 스트레스 악화"],
];

const visitReasons = [
  "연고를 바를 때는 괜찮다가 끊으면 1~2주 안에 다시 뒤집어집니다.",
  "눈썹 사이, 코 주변, 입가가 붉고 각질이 계속 일어납니다.",
  "검은 옷을 입으면 어깨에 비듬이 떨어져 신경 쓰입니다.",
  "머리가 너무 가렵고 두피 뾰루지가 아파서 집중이 어렵습니다.",
  "세안 직후에는 건조한데 조금 지나면 바로 번들거립니다.",
  "기름진 음식이나 술을 마신 다음 날 얼굴이 확 붉어집니다.",
  "스트레스받으면 얼굴로 열이 올라오고 따갑습니다.",
  "화장품을 바꾸어도 그때뿐이고 재발 고리는 그대로입니다.",
];

const causes = [
  {
    title: "체내 습열 누적",
    desc: "기름진 음식, 음주, 불규칙한 식사가 반복되면 몸속 습열이 얼굴과 두피의 염증으로 드러나기 쉽습니다.",
  },
  {
    title: "상열하한",
    desc: "아래는 차고 위로 열이 몰리는 순환 불균형은 얼굴 홍반, 두피 열감, 눈가·코 주변 염증을 부추깁니다.",
  },
  {
    title: "스트레스와 간기울결",
    desc: "긴장과 분노가 쌓이면 열이 위로 치밀어 피부 면역을 예민하게 만들고 갑작스러운 악화를 유발합니다.",
  },
  {
    title: "피부 장벽 약화",
    desc: "강한 세정, 잦은 연고 사용, 반복 염증은 피부 장벽을 얇고 민감하게 만들어 회복을 더디게 합니다.",
  },
  {
    title: "수면 부족과 면역 저하",
    desc: "밤에 회복되어야 할 피부가 충분히 쉬지 못하면 가려움, 비듬, 붉은기가 오래 지속됩니다.",
  },
];

const symptoms = [
  { title: "얼굴 홍반", desc: "이마, 미간, 눈썹, 코 주변, 입가가 붉고 화끈거립니다." },
  { title: "기름진 각질", desc: "세안 후에도 금방 번들거리며 노란빛의 끈적한 각질이 올라옵니다." },
  { title: "두피 비듬과 가려움", desc: "마른 비듬부터 끈적한 비듬까지 반복되고 밤에 가려움이 심해집니다." },
  { title: "두피 뾰루지", desc: "만지면 아픈 모낭염 같은 염증이 생기고 두피 열감이 동반됩니다." },
  { title: "귀 뒤·가슴·등 병변", desc: "귀 뒤가 갈라지거나 가슴 중앙, 등 가운데에 붉은 반점과 각질이 생깁니다." },
  { title: "탈모 불안", desc: "염증이 오래가면 모근이 약해진 느낌과 머리카락 빠짐을 호소하기도 합니다." },
];

const patterns = [
  {
    type: "습열내저형",
    sign: "기름진 각질, 홍반, 가려움이 함께 심한 전형적인 타입",
    method: "청화습열",
    desc: "피부와 두피에 쌓인 습한 열을 낮춰 번들거림, 붉은기, 가려움을 함께 다룹니다.",
  },
  {
    type: "혈열형",
    sign: "얼굴이 갑자기 붉어지고 열감과 따가움이 강한 타입",
    method: "량혈청열",
    desc: "혈분의 열을 식혀 급성 홍반과 화끈거림, 예민한 피부 반응을 진정시킵니다.",
  },
  {
    type: "비위습열형",
    sign: "소화가 더디고 기름진 음식 뒤 바로 악화되는 타입",
    method: "건비화습",
    desc: "비위 기능을 도와 몸속 습담이 얼굴과 두피 염증으로 올라오는 흐름을 줄입니다.",
  },
  {
    type: "간울화화형",
    sign: "스트레스, 불면, 화병 뒤 얼굴 열감이 확 올라오는 타입",
    method: "소간해울",
    desc: "막힌 기운을 풀고 위로 치솟는 열을 내려 재발의 정서적 방아쇠를 낮춥니다.",
  },
];

const treatmentSteps = [
  {
    title: "1개월 차: 열감과 가려움 진정",
    desc: "급한 붉은기와 따가움, 두피 가려움을 먼저 낮추고 연고 사용량 변화를 세심하게 관찰합니다.",
    goals: ["얼굴 열감 감소", "두피 가려움 완화", "리바운드 반응 관리"],
  },
  {
    title: "2~3개월 차: 피부 장벽 회복",
    desc: "각질과 번들거림의 반복을 줄이고 피부가 자극에 덜 흔들리도록 회복력을 높입니다.",
    goals: ["새 염증 빈도 감소", "각질과 비듬 완화", "수면·소화 리듬 개선"],
  },
  {
    title: "3~4개월 차: 안정과 재발 방지",
    desc: "화장품, 세정, 식습관, 스트레스 관리까지 정리해 약 없이도 버티는 피부 환경을 목표로 합니다.",
    goals: ["재발 간격 연장", "연고 의존도 감소", "자가 관리 루틴 형성"],
  },
];

const differentialDiseases = [
  { title: "습진", href: "/programs/skin/eczema", desc: "진물, 갈라짐, 손·얼굴 피부염" },
  { title: "건선", href: "/programs/skin/psoriasis", desc: "은백색 각질과 경계가 뚜렷한 판상 홍반" },
  { title: "아토피 피부염", href: "/programs/skin/atopic-dermatitis", desc: "심한 가려움과 만성 습진성 염증" },
  { title: "안면홍조", href: "/programs/skin/facial-flushing", desc: "열감과 붉어짐이 중심인 얼굴 증상" },
  { title: "두드러기", href: "/programs/skin/urticaria", desc: "갑자기 올라왔다 사라지는 팽진과 가려움" },
  { title: "피부질환 클리닉", href: "/programs/skin", desc: "난치성 피부질환 전체 안내" },
];

const faqItems = [
  {
    q: "지루성피부염은 피지가 많아서만 생기나요?",
    a: "피지 분비가 많은 부위에 잘 생기지만 피지만의 문제는 아닙니다. 피부 면역이 예민해지고 몸속 습열, 스트레스, 수면 부족이 겹치면서 반복되는 경우가 많습니다.",
  },
  {
    q: "말라세지아 균을 없애면 낫나요?",
    a: "말라세지아는 누구에게나 존재할 수 있는 상재균입니다. 균 자체보다 그 균에 과민하게 반응하는 피부 환경과 면역 균형을 함께 살피는 것이 중요합니다.",
  },
  {
    q: "스테로이드 연고를 바로 끊어야 하나요?",
    a: "갑작스러운 중단은 리바운드로 이어질 수 있습니다. 현재 사용량과 피부 상태를 확인하면서 피부가 버틸 수 있는 방향으로 단계적으로 줄여갑니다.",
  },
  {
    q: "두피 비듬도 지루성피부염인가요?",
    a: "심한 비듬, 가려움, 두피 붉음, 뾰루지가 반복된다면 지루성두피염 가능성을 확인해야 합니다. 건선, 두피 습진과도 감별이 필요합니다.",
  },
  {
    q: "치료 기간은 얼마나 걸리나요?",
    a: "반복 기간과 연고 사용 이력, 얼굴·두피 범위에 따라 다릅니다. 만성 재발형은 보통 2~3개월 이상 피부 장벽 회복과 생활 관리를 함께 진행합니다.",
  },
  {
    q: "비대면 상담도 가능한가요?",
    a: "가능합니다. 얼굴과 두피 사진, 악화 시기, 사용 중인 연고·샴푸, 식습관과 수면 패턴을 함께 확인해 상담 방향을 잡을 수 있습니다.",
  },
];

const seborrheicReviews = [
  {
    title: "[34세, 여성] 코 주변과 눈썹 사이 홍반이 반복된 사례",
    desc: "화장품을 바꾸어도 계속 따갑고 붉어지던 경우. 상열감과 소화 상태를 함께 살피며 붉은기와 각질 빈도가 줄었습니다.",
    patient: "정**",
  },
  {
    title: "[41세, 남성] 두피 가려움과 기름진 비듬이 심한 사례",
    desc: "검은 옷에 비듬이 떨어져 스트레스가 컸던 경우. 두피 열감과 음주 후 악화 패턴을 함께 관리했습니다.",
    patient: "한**",
  },
  {
    title: "[29세, 여성] 스트레스 뒤 얼굴 열감이 확 오르는 사례",
    desc: "업무 스트레스와 수면 부족 뒤 얼굴이 뒤집어지던 경우. 간울화화 패턴을 중심으로 열감과 재발 간격을 관리했습니다.",
    patient: "이**",
  },
];

export default function SeborrheicDermatitisPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 한방 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">지루성피부염</span>
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
            <p className="mb-5 text-lg font-semibold leading-8 text-brown keep-words">연고에만 의존하던 만성 염증, 몸속 습열부터 살핍니다.</p>
            <h1 className="font-serif text-[clamp(3.1rem,7.2vw,6.2rem)] leading-[0.95] tracking-normal text-ink keep-words">
              지루성<br />피부염
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-ink-soft keep-words">
              얼굴은 붉고 두피는 가려운데 반복된다면 피부 겉의 문제만이 아닙니다. 열과 습, 피부 면역의 흐름을 함께 조절해야 합니다.
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
                src="/images/programs/skin-seborrheic-detail.png"
                alt="지루성피부염 한방 진료 이미지"
                width={900}
                height={1100}
                priority
                className="h-[620px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-line bg-white/92 p-6 shadow-xl backdrop-blur">
              <p className="mb-4 font-bold text-ink">지루성피부염 한방 진료</p>
              <div className="space-y-3 text-base font-semibold text-ink">
                <p className="flex items-center gap-3"><StarIcon /> 얼굴 홍반·두피 각질</p>
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
            title="연고를 끊으면 왜 다시 올라올까요?"
            desc="증상은 눌러도 얼굴과 두피로 열이 몰리는 몸의 환경이 그대로라면 재발은 반복될 수 있습니다."
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
              지루성피부염은 피부에 드러난 습열의 신호입니다
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-ink-soft keep-words">
              <p>지루성피부염은 피지 분비가 많은 부위에 생기지만, 단순히 얼굴을 깨끗이 씻지 않아서 생기는 질환은 아닙니다.</p>
              <p>초근목피한의원은 얼굴과 두피의 붉은기, 각질, 가려움뿐 아니라 소화 상태, 수면, 스트레스, 음주 후 악화 여부를 함께 확인합니다.</p>
              <p>겉의 염증을 억지로 누르는 데서 끝나지 않고, 위로 몰린 열과 몸속 습한 환경을 조절해 피부가 스스로 안정될 수 있는 방향을 찾습니다.</p>
            </div>
            <div className="mt-8 border-t border-ink pt-6 text-sm font-bold">맥진·문진 기반 전신 진단</div>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-line bg-white shadow-xl">
            <Image
              src="/images/programs/skin-mechanism.png"
              alt="지루성피부염 습열 진단"
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
              붉은 얼굴과 두피 각질을<br />가라앉히는 핵심 치료 원리
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
              alt="지루성피부염 핵심 치료 원리"
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
            title="부위별로 다르게 나타나는 지루성피부염"
            desc="얼굴, 두피, 귀 뒤, 가슴과 등까지 피지 분비가 많은 부위에서 반복되는 양상을 확인합니다."
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
            title="반복되는 붉은기 뒤에 있는 원인"
            desc="피부 겉의 피지와 각질만이 아니라 몸속 열, 소화, 수면, 스트레스 흐름까지 함께 살핍니다."
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
            title="단계별 지루성피부염 치료 흐름"
            desc="급한 열을 낮추는 과정과 피부 장벽을 회복하는 과정이 함께 진행되어야 재발 간격이 길어집니다."
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
              두피 각질은 건선과, 얼굴의 붉은기는 안면홍조나 접촉성 피부염과 헷갈릴 수 있습니다. 병변의 위치, 각질의 질감, 악화 요인을 함께 봐야 합니다.
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
              <p className="mt-4 text-lg text-ink-soft">초근목피한의원에서 얼굴과 두피 염증의 재발 고리를 함께 살핀 사례입니다.</p>
            </div>
            <Link href="/community/reviews" className="inline-flex items-center gap-2 font-bold text-brown">
              전체 후기 보기 <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {seborrheicReviews.map((review) => (
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
              지루성피부염은 피부 겉의 기름기만 닦아내서는 반복되기 쉽습니다. 얼굴과 두피로 몰리는 열, 몸속 습한 환경, 생활 리듬을 함께 조정하겠습니다.
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
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight keep-words">사진과 생활 패턴으로 먼저 상담할 수 있습니다</h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft keep-words">
              얼굴과 두피 사진, 사용 중인 연고와 샴푸, 악화되는 음식과 스트레스 패턴을 함께 확인하면 진료 방향을 더 선명하게 잡을 수 있습니다.
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
