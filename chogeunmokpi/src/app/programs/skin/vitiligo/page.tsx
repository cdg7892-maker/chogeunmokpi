import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { clinicInfo, doctors } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 백반증 한방진료 | 백전풍·하얀 반점·색소 탈실 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 백반증 한방진료 안내입니다. 하얀 반점, 백전풍, 색소 탈실과 재발을 면역 균형과 기혈 순환 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/skin/vitiligo",
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
  ["진료 질환", "백반증, 백전풍, 백박, 색소 탈실, 하얀 반점, Vitiligo"],
  ["주요 증상", "경계가 뚜렷한 하얀 반점, 백모증, 대칭성 분포, 노출 부위 색소 탈실"],
  ["치료 방향", "면역 균형 안정, 기혈 순환 회복, 멜라닌 생성 환경 조성, 확산 방지"],
  ["상담 대상", "레이저 후 재발, 갑작스러운 확산, 갑상선 질환 동반, 스트레스 후 발생"],
];

const visitReasons = [
  "눈가나 입가, 손등에 하얀 반점이 갑자기 생겨 당황스럽습니다.",
  "레이저를 오래 받았는데 끊으면 다시 번지는 느낌이 듭니다.",
  "여름이 되면 피부색 차이가 더 도드라져 반팔 입기가 부담스럽습니다.",
  "전염되는 병 아니냐는 말을 들을 때마다 마음이 무너집니다.",
  "갑상선 문제나 아토피가 함께 있어 면역이 걱정됩니다.",
  "스트레스를 크게 받은 뒤 반점이 빠르게 커진 것 같습니다.",
  "아이 얼굴에 하얀 점이 생겼는데 독한 치료는 걱정됩니다.",
  "피부색이 유지되는 몸 상태를 만들고 싶습니다.",
];

const causes = [
  {
    title: "자가면역 불균형",
    desc: "몸을 지켜야 할 면역 세포가 멜라닌 세포를 공격하거나 기능을 멈추게 만들 때 색소 탈실이 나타날 수 있습니다.",
  },
  {
    title: "극심한 스트레스",
    desc: "시험, 면접, 이별, 과로 같은 큰 자극은 자율신경과 면역 균형을 흔들어 백반증의 시작점이 되기도 합니다.",
  },
  {
    title: "간신 기능 저하",
    desc: "한의학에서는 간과 신의 기운이 약해지면 피부 재생력과 색소 형성의 바탕이 약해진다고 봅니다.",
  },
  {
    title: "기혈 순환 정체",
    desc: "피부 말단까지 영양이 충분히 공급되지 않으면 멜라닌 세포가 회복될 환경이 더디게 만들어집니다.",
  },
  {
    title: "피부 외상과 산화 스트레스",
    desc: "상처 부위에 병변이 생기는 퀘브너 현상이나 활성산소 증가가 멜라닌 세포 손상을 키울 수 있습니다.",
  },
];

const symptoms = [
  { title: "경계가 뚜렷한 하얀 반점", desc: "처음에는 작게 시작했다가 점차 커지거나 주변 병변과 합쳐질 수 있습니다." },
  { title: "백모증", desc: "눈썹, 머리카락, 체모가 있는 부위의 털까지 하얗게 변하기도 합니다." },
  { title: "대칭성 분포", desc: "손, 발, 팔꿈치, 무릎처럼 양쪽에 비슷하게 나타나는 경우가 많습니다." },
  { title: "노출 부위 악화감", desc: "얼굴, 손등처럼 햇빛에 자주 노출되는 곳은 색 차이가 더 눈에 띕니다." },
  { title: "심리적 위축", desc: "타인의 시선과 오해 때문에 자신감 저하, 대인 회피, 우울감을 겪을 수 있습니다." },
  { title: "자가면역 동반 신호", desc: "갑상선 질환, 아토피, 만성 피로처럼 면역 관련 증상을 함께 확인합니다." },
];

const patterns = [
  {
    type: "기혈양허형",
    sign: "과로와 스트레스 뒤 발생하고 쉽게 피로하며 반점 색이 비교적 흐릿한 타입",
    method: "보익기혈",
    desc: "피부에 영양을 공급하는 기혈을 보강해 멜라닌 세포가 회복될 바탕을 마련합니다.",
  },
  {
    type: "간신부족형",
    sign: "체질적으로 허약하고 만성적으로 탈색소가 진행된 타입",
    method: "보간신",
    desc: "간신의 기능을 보강해 피부 재생력과 색소 형성의 근본 에너지를 회복하도록 돕습니다.",
  },
  {
    type: "풍습혈어형",
    sign: "반점 경계가 뚜렷하고 오래되었으며 순환 정체가 깊은 타입",
    method: "활혈거어",
    desc: "정체된 기혈 순환을 풀어 피부 말단까지 회복 신호와 영양이 닿도록 돕습니다.",
  },
  {
    type: "간기울결형",
    sign: "정서적 충격이나 극심한 스트레스 뒤 급격히 번지는 타입",
    method: "소간해울",
    desc: "막힌 기운과 자율신경 긴장을 풀어 스트레스성 면역 교란을 낮추는 데 집중합니다.",
  },
];

const treatmentSteps = [
  {
    title: "1~2개월 차: 진행 차단과 몸 만들기",
    desc: "새로운 반점이 생기거나 커지는 속도를 늦추고, 소화·수면·피로도 같은 전신 컨디션을 먼저 정리합니다.",
    goals: ["확산 속도 둔화", "수면과 피로도 개선", "면역 균형 재정비"],
  },
  {
    title: "3~4개월 차: 색소 반응 관찰",
    desc: "반점 안쪽에 점처럼 색소가 올라오거나 경계가 흐려지는지 확인하며 처방 방향을 세밀하게 조정합니다.",
    goals: ["색소 점 반응 확인", "반점 경계 변화 관찰", "피부 재생력 회복"],
  },
  {
    title: "5~6개월 차 이상: 안정과 유지",
    desc: "올라온 색소가 유지되고 다시 번지지 않도록 생활 습관과 면역 안정 상태를 장기적으로 관리합니다.",
    goals: ["색소 유지", "재확산 방지", "자생력 관리 루틴 형성"],
  },
];

const differentialDiseases = [
  { title: "아토피 피부염", href: "/programs/skin/atopic-dermatitis", desc: "염증 후 탈색소와 감별이 필요한 만성 가려움" },
  { title: "습진", href: "/programs/skin/eczema", desc: "진물과 염증 뒤 하얗게 남는 피부 변화" },
  { title: "건선", href: "/programs/skin/psoriasis", desc: "은백색 각질과 판상 홍반이 뚜렷한 질환" },
  { title: "소양증", href: "/programs/skin/itching", desc: "색 변화보다 전신 가려움이 중심인 질환" },
  { title: "안면홍조", href: "/programs/skin/facial-flushing", desc: "얼굴 붉어짐과 열감이 중심인 증상" },
  { title: "피부질환 클리닉", href: "/programs/skin", desc: "난치성 피부질환 전체 안내" },
];

const faqItems = [
  {
    q: "백반증은 전염되나요?",
    a: "전염되지 않습니다. 균이나 바이러스가 옮는 질환이 아니라 멜라닌 세포 기능과 면역 균형이 흔들리며 나타나는 색소 질환입니다.",
  },
  {
    q: "레이저 치료와 병행할 수 있나요?",
    a: "상태에 따라 병행을 고려할 수 있습니다. 다만 레이저로 피부를 자극하는 것만으로 부족했다면 면역 균형과 기혈 순환, 전신 컨디션을 함께 살피는 것이 중요합니다.",
  },
  {
    q: "색이 다시 돌아오는 데 얼마나 걸리나요?",
    a: "백반증은 회복 속도 차이가 큽니다. 초기에는 확산을 막는 것이 먼저이고, 색소 반응은 보통 몇 개월 단위로 관찰합니다. 오래된 전신형은 1년 이상의 긴 호흡이 필요할 수 있습니다.",
  },
  {
    q: "아이 백반증도 한방 진료가 가능한가요?",
    a: "가능합니다. 아이의 경우 성장, 수면, 소화, 스트레스, 아토피 동반 여부를 함께 보며 자극이 과하지 않은 방향으로 접근합니다.",
  },
  {
    q: "갑상선 질환과 관련이 있나요?",
    a: "백반증은 자가면역 질환과 함께 나타나는 경우가 있어 갑상선 상태, 피로감, 체중 변화, 다른 면역 증상도 함께 확인하는 것이 좋습니다.",
  },
  {
    q: "비대면 상담도 가능한가요?",
    a: "가능합니다. 병변 사진, 시작 시기, 확산 속도, 레이저·연고 이력, 동반 질환과 생활 리듬을 함께 확인하면 상담 방향을 잡는 데 도움이 됩니다.",
  },
];

const vitiligoReviews = [
  {
    title: "[27세, 여성] 면접 스트레스 뒤 눈가 백반이 급격히 번진 사례",
    desc: "정서적 충격 뒤 얼굴 병변이 커지던 경우. 간기울결과 기혈 회복을 중심으로 확산 속도와 전신 컨디션을 함께 살폈습니다.",
    patient: "김**",
  },
  {
    title: "[43세, 여성] 갑상선 질환과 함께 나타난 만성 백반증",
    desc: "손등과 목 주변 색소 탈실이 오래 반복된 사례. 자가면역 경향과 간신부족 패턴을 함께 고려했습니다.",
    patient: "이**",
  },
  {
    title: "[12세, 남아] 얼굴 하얀 반점으로 내원한 소아 백반증",
    desc: "피부 자극을 줄이면서 수면, 소화, 성장 컨디션을 함께 살핀 사례입니다.",
    patient: "박**",
  },
];

export default function VitiligoPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-5 text-sm text-ink-soft md:px-8">
          <Link href="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link href="/programs/skin" className="hover:text-ink">피부질환 한방 클리닉</Link>
          <span>/</span>
          <span className="font-semibold text-ink">백반증</span>
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
            <p className="mb-5 text-lg font-semibold leading-8 text-brown keep-words">피부 겉이 아니라 몸 안의 면역 균형을 함께 봅니다.</p>
            <h1 className="font-serif text-[clamp(3.4rem,7.5vw,6.3rem)] leading-[0.95] tracking-normal text-ink keep-words">
              백반증<br />한방 진료
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-9 text-ink-soft keep-words">
              하얀 반점은 겉으로 보이는 결과입니다. 멜라닌 세포가 다시 일할 수 있도록 면역과 기혈의 바탕을 함께 살핍니다.
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
                src="/images/programs/skin-vitiligo-detail.png"
                alt="백반증 한방 진료 이미지"
                width={900}
                height={1100}
                priority
                className="h-[620px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl border border-line bg-white/92 p-6 shadow-xl backdrop-blur">
              <p className="mb-4 font-bold text-ink">백반증 한방 진료</p>
              <div className="space-y-3 text-base font-semibold text-ink">
                <p className="flex items-center gap-3"><StarIcon /> 하얀 반점·색소 탈실</p>
                <p className="flex items-center gap-3"><StarIcon /> 면역 균형·기혈 순환 관리</p>
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
            title="왜 자꾸 번지는 것처럼 느껴질까요?"
            desc="하얀 반점은 통증이 적어도 면역과 기혈의 균형이 흔들리고 있다는 신호일 수 있습니다."
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
              백반증은 멜라닌 세포가 쉬어버린 몸의 신호입니다
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-9 text-ink-soft keep-words">
              <p>백반증은 멜라닌 세포의 기능이 약해지거나 소실되며 하얀 반점이 나타나는 질환입니다. 전염되는 병이 아니며, 면역 균형과 관련이 깊습니다.</p>
              <p>초근목피한의원은 병변 위치와 확산 속도, 스트레스 계기, 갑상선 질환, 수면·피로도, 피부 외상 여부를 함께 확인합니다.</p>
              <p>겉의 색만 자극하는 데서 끝나지 않고 멜라닌 세포가 다시 활동할 수 있는 몸의 토양을 만드는 데 집중합니다.</p>
            </div>
            <div className="mt-8 border-t border-ink pt-6 text-sm font-bold">맥진·문진 기반 전신 진단</div>
          </div>
          <div className="relative overflow-hidden rounded-[22px] border border-line bg-white shadow-xl">
            <Image
              src="/images/programs/skin-mechanism.png"
              alt="백반증 면역 균형 진단"
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
              색소 회복의 바탕을 만드는<br />핵심 치료 원리
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
              alt="백반증 핵심 치료 원리"
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
            title="백반증에서 함께 확인하는 신호"
            desc="색소 탈실의 양상과 함께 심리적 위축, 피로, 동반 면역 질환까지 함께 살핍니다."
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
            title="색소 회복을 방해하는 몸속 원인"
            desc="같은 백반증이라도 스트레스성 확산, 만성 허약, 순환 정체, 자가면역 동반 여부에 따라 접근이 달라집니다."
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
            title="단계별 백반증 치료 흐름"
            desc="먼저 확산을 늦추고, 색소 반응을 관찰한 뒤 유지와 재발 방지로 이어갑니다."
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
            <h2 className="font-serif text-[clamp(2.2rem,4.8vw,4rem)] leading-tight keep-words">하얀 반점이라고 모두 백반증은 아닙니다</h2>
            <p className="mt-6 text-lg leading-9 text-ink-soft keep-words">
              어루러기, 염증 후 탈색소 침착, 탈색소성 모반, 백색 비강진과 감별이 필요합니다. 경계, 각질, 가려움, 발생 시기와 변화 속도를 함께 봅니다.
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
              <p className="mt-4 text-lg text-ink-soft">초근목피한의원에서 백반증과 면역 균형을 함께 살핀 사례입니다.</p>
            </div>
            <Link href="/community/reviews" className="inline-flex items-center gap-2 font-bold text-brown">
              전체 후기 보기 <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {vitiligoReviews.map((review) => (
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
              백반증은 겉으로 보이는 색의 문제 같지만, 몸의 면역과 기혈 순환, 회복력의 문제와 맞닿아 있습니다. 조급함보다 꾸준한 방향으로 함께 보겠습니다.
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
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight keep-words">병변 사진과 확산 흐름을 함께 확인합니다</h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft keep-words">
              반점 사진, 시작 시기, 확산 속도, 레이저·연고 이력, 갑상선 등 동반 질환과 생활 리듬을 함께 확인하면 진료 방향을 더 선명하게 잡을 수 있습니다.
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
