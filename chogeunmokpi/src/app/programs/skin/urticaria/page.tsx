import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 두드러기 한방진료 | 만성 두드러기·콜린성·한랭 두드러기 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 두드러기 한방진료 안내입니다. 만성 두드러기, 콜린성·한랭 두드러기, 팽진과 가려움을 면역 균형과 피부 자생력 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/skin/urticaria",
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
  ["진료 질환", "두드러기, 만성 두드러기, 콜린성 두드러기, 한랭 두드러기, 혈관부종"],
  ["주요 증상", "팽진, 홍반, 극심한 가려움, 화끈거림, 따가움, 눈·입술 부종"],
  ["치료 방향", "면역 과민 안정, 위장습열 조절, 피부 자생력 회복, 약 의존도 완화"],
  ["상담 대상", "항히스타민제 반복 복용, 6주 이상 재발, 운동·온도·음식 후 악화"],
];

const visitReasons = [
  "항히스타민제를 먹을 때만 잠깐 괜찮고 끊으면 다음 날 바로 올라옵니다.",
  "밤마다 가려워 잠을 설치고 다음 날 피로가 심합니다.",
  "운동하거나 더워지면 따갑고 가려운 작은 두드러기가 올라옵니다.",
  "찬 바람이나 찬물에 닿으면 피부가 부풀어 오릅니다.",
  "얼굴과 목이 붉어져 사람 만나는 일이 불안합니다.",
  "비염, 소화불량, 복통이나 설사도 함께 있어 면역이 걱정됩니다.",
  "음식을 먹을 때마다 두드러기가 날까 봐 불안합니다.",
  "약 없이도 깨끗한 피부로 하루를 보내고 싶습니다.",
];

const causes = [
  {
    title: "면역 체계의 과민 반응",
    desc: "비만세포가 불안정해지면 해롭지 않은 자극에도 히스타민이 과다 분비되어 팽진과 가려움이 반복됩니다.",
  },
  {
    title: "소화기 독소와 습열",
    desc: "불규칙한 식사, 음주, 기름진 음식으로 장내 환경이 흔들리면 피부 면역이 더 예민해질 수 있습니다.",
  },
  {
    title: "자율신경 불균형",
    desc: "스트레스, 과로, 수면 부족은 신경계와 면역계의 균형을 깨뜨려 두드러기를 악화시킵니다.",
  },
  {
    title: "기혈 부족과 피부 방어력 저하",
    desc: "과로 후 오후에 심해지거나 만성화된 경우 피부를 보호하는 기혈과 진액의 부족을 함께 살핍니다.",
  },
  {
    title: "약물 의존과 리바운드",
    desc: "증상 억제에만 의존하면 몸이 스스로 진정하는 힘이 약해져 끊을 때 다시 올라오는 흐름이 생길 수 있습니다.",
  },
];

const symptoms = [
  { title: "팽진과 홍반", desc: "모기 물린 것처럼 부풀어 오르고 주변이 붉어졌다가 사라집니다." },
  { title: "극심한 가려움", desc: "밤에 심해져 수면을 방해하고 긁으면 더 넓게 번질 수 있습니다." },
  { title: "화끈거림과 따가움", desc: "콜린성 두드러기에서는 바늘로 찌르는 듯한 따가움이 동반됩니다." },
  { title: "혈관부종", desc: "눈꺼풀, 입술, 손발이 깊게 붓고 묵직하거나 통증처럼 느껴질 수 있습니다." },
  { title: "소화기 동반 증상", desc: "복통, 메스꺼움, 설사, 더부룩함이 함께 나타나기도 합니다." },
  { title: "불안과 피로", desc: "언제 올라올지 모른다는 불안과 수면 부족으로 일상이 무너질 수 있습니다." },
];

const patterns = [
  {
    type: "풍열형",
    sign: "팽진이 붉고 뜨거우며 밤이나 더운 환경에서 심한 타입",
    method: "청열해독·거풍지양",
    desc: "피부와 혈분에 몰린 열을 낮춰 붉은 팽진, 화끈거림, 급성 가려움을 진정시킵니다.",
  },
  {
    type: "풍한형",
    sign: "팽진이 희고 찬바람, 찬물, 추운 환경에서 악화되는 타입",
    method: "거풍산한",
    desc: "찬 자극에 과민한 피부 반응을 줄이고 말초 순환과 방어력을 함께 살핍니다.",
  },
  {
    type: "위장습열형",
    sign: "소화불량, 복통, 설사와 함께 특정 음식 뒤 올라오는 타입",
    method: "건비화습·소도",
    desc: "비위 기능과 장내 환경을 조정해 음식과 습열이 피부 반응으로 이어지는 고리를 줄입니다.",
  },
  {
    type: "기혈양허형",
    sign: "과로 후 심해지고 오래 반복되며 피부가 건조하고 기력이 약한 타입",
    method: "익기양혈",
    desc: "피부를 지탱하는 기혈과 진액을 보강해 만성화된 면역 과민과 재발을 관리합니다.",
  },
];

const treatmentSteps = [
  {
    title: "1개월 차: 가려움과 팽진 빈도 낮추기",
    desc: "가장 불편한 가려움과 부풀어 오르는 빈도, 지속 시간을 줄이며 몸의 반응을 살핍니다.",
    goals: ["팽진 지속 시간 감소", "야간 가려움 완화", "열감·소화 상태 변화 확인"],
  },
  {
    title: "2~3개월 차: 면역 안정과 약 의존도 점검",
    desc: "피부 면역의 예민도를 낮추고 항히스타민제 사용 간격을 줄여도 버틸 수 있는지 확인합니다.",
    goals: ["새 증상 빈도 감소", "피부 붉은기 안정", "피로·스트레스 반응 완화"],
  },
  {
    title: "3~4개월 차: 자생력 회복과 재발 방지",
    desc: "약 없이도 피부가 스스로 진정되는 상태를 목표로 식단, 수면, 운동 자극 관리까지 정리합니다.",
    goals: ["리바운드 최소화", "재발 간격 연장", "생활 관리 루틴 형성"],
  },
];

const differentialDiseases = [
  { title: "소양증", href: "/programs/skin/itching", desc: "팽진 없이 지속되는 전신·만성 가려움" },
  { title: "아토피 피부염", href: "/programs/skin/atopic-dermatitis", desc: "접히는 부위 중심의 만성 염증과 건조" },
  { title: "습진", href: "/programs/skin/eczema", desc: "진물, 갈라짐, 붉은 반점이 반복되는 피부염" },
  { title: "건선", href: "/programs/skin/psoriasis", desc: "은백색 각질과 경계가 뚜렷한 판상 홍반" },
  { title: "지루성피부염", href: "/programs/skin/seborrheic-dermatitis", desc: "얼굴·두피의 기름진 각질과 홍반" },
  { title: "피부질환 클리닉", href: "/programs/skin", desc: "난치성 피부질환 전체 안내" },
];

const faqItems = [
  {
    q: "두드러기는 왜 계속 재발하나요?",
    a: "두드러기는 피부만의 문제가 아니라 면역 세포가 사소한 자극에 과민하게 반응하는 상태입니다. 음식, 온도, 스트레스, 수면, 소화 상태가 함께 영향을 줄 수 있습니다.",
  },
  {
    q: "6주 이상 지속되면 만성인가요?",
    a: "일반적으로 6주 이상 반복되면 만성 두드러기로 봅니다. 이때는 단순 회피보다 면역 균형과 장부 기능, 생활 리듬을 함께 관리하는 계획이 필요합니다.",
  },
  {
    q: "항히스타민제를 계속 먹어도 되나요?",
    a: "필요한 시기에는 도움을 받을 수 있지만, 끊을 때마다 바로 재발한다면 몸이 스스로 진정하는 힘을 함께 회복해야 합니다. 복용 중인 약은 임의로 중단하지 않습니다.",
  },
  {
    q: "콜린성 두드러기도 한방 진료가 가능한가요?",
    a: "운동, 목욕, 긴장처럼 체온이 올라갈 때 따갑고 작은 팽진이 생기는 경우도 몸의 열 조절과 자율신경 균형을 함께 살핍니다.",
  },
  {
    q: "눈이나 입술이 붓는 혈관부종은 위험한가요?",
    a: "입술이나 눈꺼풀이 붓는 정도라면 진료로 원인을 살피되, 호흡곤란이나 목 안쪽 부종감이 있으면 즉시 응급 진료가 필요합니다.",
  },
  {
    q: "비대면 상담도 가능한가요?",
    a: "가능합니다. 증상이 올라왔을 때의 사진, 지속 시간, 유발 요인, 복용 중인 약과 기저질환을 함께 확인하면 상담 방향을 잡는 데 도움이 됩니다.",
  },
];

const urticariaReviews = [
  {
    title: "[40세, 여성] 1년째 항히스타민제에 의존하던 만성 두드러기",
    desc: "매일 약을 먹어야 버티던 경우. 위장습열과 수면 리듬을 함께 관리하며 증상 빈도와 약 의존도를 점검했습니다.",
    patient: "정**",
  },
  {
    title: "[27세, 남성] 운동 후 따갑게 올라오는 콜린성 두드러기",
    desc: "체온이 오르면 얼굴과 몸에 작은 팽진이 올라오던 사례. 열 조절과 자율신경 긴장을 함께 살폈습니다.",
    patient: "최**",
  },
  {
    title: "[52세, 여성] 갱년기 열감과 함께 반복된 두드러기",
    desc: "얼굴 열감, 불면, 피로와 함께 두드러기가 반복된 경우. 기혈과 진액 부족을 함께 고려해 관리했습니다.",
    patient: "박**",
  },
];

export default function UrticariaPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 한방 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">두드러기</span>
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
            <p className="mb-5 text-lg font-semibold leading-8 text-brown keep-words">끊이지 않는 재발, 면역 균형부터 다시 살핍니다.</p>
            <h1 className="font-serif text-[clamp(3.4rem,7.5vw,6.3rem)] leading-[0.95] tracking-normal text-ink keep-words">
              두드러기<br />한방 진료
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-ink-soft keep-words">
              약을 먹을 때만 잠깐 괜찮고 다시 올라온다면 피부가 예민한 것만은 아닙니다. 면역 과민과 몸속 자극 흐름을 함께 봅니다.
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
                src="/images/programs/skin-urticaria-detail.png"
                alt="두드러기 한방 진료 이미지"
                width={900}
                height={1100}
                priority
                className="h-[620px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-line bg-white/92 p-6 shadow-xl backdrop-blur">
              <p className="mb-4 font-bold text-ink">두드러기 한방 진료</p>
              <div className="space-y-3 text-base font-semibold text-ink">
                <p className="flex items-center gap-3"><StarIcon /> 팽진·홍반·야간 가려움</p>
                <p className="flex items-center gap-3"><StarIcon /> 면역 안정·재발 방지 관리</p>
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
            title="왜 항히스타민제를 끊으면 다시 올라올까요?"
            desc="두드러기는 히스타민을 억제하는 것만으로 끝나지 않을 때가 많습니다. 몸이 과잉 반응하는 이유를 찾아야 합니다."
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
              두드러기는 피부병이 아니라 면역 반응의 신호입니다
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-ink-soft keep-words">
              <p>두드러기는 혈관 투과성이 높아지며 피부가 부풀고 붉어지는 질환입니다. 증상이 나타났다 사라져도 몸의 과민 반응은 남아 있을 수 있습니다.</p>
              <p>초근목피한의원은 팽진의 모양, 지속 시간, 유발 요인, 소화 상태, 수면과 스트레스, 비염·천식 같은 알레르기 동반 증상까지 함께 확인합니다.</p>
              <p>증상만 막는 치료를 넘어, 히스타민이 과잉 분비되지 않는 몸 상태와 피부 자생력을 회복하는 방향을 찾습니다.</p>
            </div>
            <div className="mt-8 border-t border-ink pt-6 text-sm font-bold">맥진·문진 기반 전신 진단</div>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-line bg-white shadow-xl">
            <Image
              src="/images/programs/skin-mechanism.png"
              alt="두드러기 면역 균형 진단"
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
              두드러기 재발 고리를 줄이는<br />핵심 치료 원리
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
              alt="두드러기 핵심 치료 원리"
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
            title="두드러기가 보내는 피부와 전신 신호"
            desc="피부 팽진뿐 아니라 소화기, 호흡기, 자율신경 증상이 함께 나타나는지 확인합니다."
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
            title="면역을 예민하게 만드는 몸속 원인"
            desc="같은 두드러기라도 음식, 온도, 스트레스, 기력 저하 등 중심 원인이 다르면 치료 방향도 달라집니다."
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
            title="단계별 두드러기 치료 흐름"
            desc="가려움과 팽진을 줄이는 것에서 시작해 면역 반응의 예민도를 낮추고 재발 방지로 이어갑니다."
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
              두드러기는 팽진이 올라왔다 사라지는 것이 특징입니다. 오래 남는 습진, 각질이 뚜렷한 건선, 팽진 없이 지속되는 소양증과는 접근이 다릅니다.
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
              <p className="mt-4 text-lg text-ink-soft">초근목피한의원에서 두드러기와 면역 균형을 함께 살핀 사례입니다.</p>
            </div>
            <Link href="/community/reviews" className="inline-flex items-center gap-2 font-bold text-brown">
              전체 후기 보기 <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {urticariaReviews.map((review) => (
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
              두드러기는 피부에 올라오는 증상이지만, 그 배경에는 면역과 소화, 스트레스, 수면의 흐름이 함께 있습니다. 반복되는 재발의 이유를 차분히 찾겠습니다.
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
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight keep-words">증상이 올라왔을 때의 사진이 중요합니다</h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft keep-words">
              팽진 사진, 지속 시간, 유발 요인, 복용 중인 약, 음식·온도·운동 반응을 함께 확인하면 진료 방향을 더 선명하게 잡을 수 있습니다.
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
