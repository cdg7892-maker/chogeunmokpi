import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import DigestiveQuiz from "@/components/programs/DigestiveQuiz";
import { LockedReviewCard, LockedReviewGate } from "@/components/programs/LockedReview";
import { doctors, reviews } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "대전 소화기질환 클리닉 | 담적·역류성식도염·만성소화불량 한방치료 | 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 소화기질환 클리닉입니다. 담적, 만성 소화불량, 역류성 식도염, 과민성 대장을 위장 운동성과 자율신경 균형 관점에서 살핍니다.",
  alternates: {
    canonical: "/programs/digestive",
  },
};

function IconCalendar() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function IconClipboard() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h6" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
    </svg>
  );
}

function IconIndigestion() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3c-1 3-1 5 0 7s1 4 0 6M12 3c-1 3-1 5 0 7s1 4 0 6M16 3c-1 3-1 5 0 7s1 4 0 6" />
    </svg>
  );
}

function IconReflux() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2c1.5 2 2.5 3.5 2.5 5.5 0 1.4-1 2-1 3.2 0 1 .8 1.5 1.5 1.5" />
      <path d="M9 8c-1.5 1.8-2 3.5-2 5a5 5 0 0 0 10 0c0-1.2-.4-2-1-2.8" />
    </svg>
  );
}

function IconIBS() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12c3 0 3-4 6-4a3 3 0 0 1 0 6c-6 0-6 6-12 6a3 3 0 1 1 0-6c3 0 3-2 6-2Z" />
    </svg>
  );
}

function IconStagnation() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M3.5 9.5h17M9.5 9.5v10M9.5 3.5v3M15.5 9.5v10M15.5 3.5v3M3.5 15.5h6M15.5 15.5h5" />
    </svg>
  );
}

function IconCup() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17M8 3c-.8 1-.8 1.6 0 2.6M12 3c-.8 1-.8 1.6 0 2.6" />
    </svg>
  );
}

function IconMoxa() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3c2 2.5 3 4.3 3 6.2A3 3 0 0 1 9 9.2C9 7.3 10 5.5 12 3Z" />
      <path d="M6 21c0-4 2.7-6.5 6-6.5S18 17 18 21" />
    </svg>
  );
}

function IconNeedle() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 5 5 19M15 3l6 6M3 21l3.5-1L5 16.5 3 21ZM11 9l4 4M9 11l4 4" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5 14.9 9l7.1.6-5.4 4.6 1.7 7-6.3-3.9L5.7 21.2l1.7-7-5.4-4.6L9.1 9 12 2.5Z" />
    </svg>
  );
}

const symptoms = [
  {
    Icon: IconIndigestion,
    title: "만성 소화불량",
    desc: "조금만 먹어도 체하고, 명치가 꽉 막힌 듯 답답합니다.",
  },
  {
    Icon: IconReflux,
    title: "역류성 식도염",
    desc: "신물이 올라오고 가슴이 타들어가며, 목에 이물감이 느껴집니다.",
  },
  {
    Icon: IconIBS,
    title: "과민성 대장",
    desc: "배에 가스가 차고 복통이 있으며, 설사와 변비가 반복됩니다.",
  },
  {
    Icon: IconStagnation,
    title: "담적병(위장 굳음)",
    desc: "위장이 굳어 움직이지 않고, 전신이 무겁고 피곤합니다.",
  },
];

const mechanism = [
  {
    n: "1",
    title: "위장 운동성 회복",
    desc: "지치고 멈춰버린 위장의 운동 리듬을 되살려 소화를 돕습니다.",
  },
  {
    n: "2",
    title: "담적(노폐물) 배출",
    desc: "위장 외벽에 쌓인 딱딱한 노폐물을 녹여 배출시킵니다.",
  },
  {
    n: "3",
    title: "염증 치료 & 점막 재생",
    desc: "식도와 위장의 염증을 가라앉히고 손상된 점막을 회복합니다.",
  },
  {
    n: "4",
    title: "자율신경 안정",
    desc: "스트레스로 예민해진 위장 신경을 안정시켜 재발을 막습니다.",
  },
];

const solutions = [
  {
    n: "1",
    title: "명치가 답답하고\n잘 체하는 분",
    symptoms: ["식후 더부룩함", "트림이 잦음", "명치를 누르면 아픔"],
    patternLabel: "진단 패턴",
    pattern: "위무력, 식적(食積)",
    treatment: "위장 운동 개선 한약",
    treatmentDesc: "위장 운동을 촉진하여 체기를 내리고 소화를 돕습니다.",
  },
  {
    n: "2",
    title: "신물이 올라오고\n가슴이 쓰린 분",
    symptoms: ["타는 듯한 가슴 통증", "목 이물감(매핵기)", "마른 기침"],
    patternLabel: "진단 패턴",
    pattern: "간위불화(肝胃不和), 위산 역류",
    treatment: "제산 및 점막 보호 한약",
    treatmentDesc: "위산을 조절하고 식도 점막의 염증을 치료합니다.",
  },
  {
    n: "3",
    title: "배가 차고\n설사/변비가 잦은 분",
    symptoms: ["찬 음식 먹으면 설사", "배에서 물소리", "항상 배가 살살 아픔"],
    patternLabel: "진단 패턴",
    pattern: "비신양허(脾腎陽虛), 장냉증",
    treatment: "장 기능 강화 한약",
    treatmentDesc: "장을 따뜻하게 하여 배변을 정상화하고 흡수력을 높입니다.",
  },
];

const treatments = [
  {
    Icon: IconCup,
    title: "맞춤 치료 한약",
    desc: "굳은 위장을 풀고 운동성을 높이며 염증을 치료하는 1:1 맞춤 한약입니다.",
  },
  {
    Icon: IconMoxa,
    title: "왕뜸 요법",
    desc: "복부 깊숙이 열을 전달하여 위장의 혈류량을 늘리고 냉기를 없앱니다.",
  },
  {
    Icon: IconNeedle,
    title: "약침 치료",
    desc: "위장과 연결된 경혈에 약침을 주입하여 위장 기능을 직접적으로 활성화합니다.",
  },
];

const process = [
  {
    n: "1",
    title: "복진 & 맥진",
    desc: "배를 직접 눌러 담적의 위치와 굳기 정도를 파악합니다.",
  },
  {
    n: "2",
    title: "원인 진단",
    desc: "위무력, 담적, 스트레스 등 소화불량의 근본 원인을 찾습니다.",
  },
  {
    n: "3",
    title: "집중 치료",
    desc: "한약, 침, 뜸으로 위장 기능을 집중적으로 회복시킵니다.",
  },
  {
    n: "4",
    title: "식습관 교정",
    desc: "위장에 부담을 주는 식습관을 교정하여 재발을 방지합니다.",
  },
];

const faqs = [
  {
    q: "내시경은 깨끗한데 왜 아픈가요?",
    a: "내시경은 점막의 염증이나 궤양을 보지만, 위장의 '움직임'이나 '담적'은 보지 못합니다. 기능적인 저하가 원인일 수 있습니다.",
  },
  {
    q: "치료하면 재발하지 않나요?",
    a: "위장 기능이 회복되고 식습관이 개선되면 재발률이 현저히 낮아집니다. 치료 후에도 꾸준한 관리가 중요합니다.",
  },
  {
    q: "밀가루 음식은 평생 못 먹나요?",
    a: "치료 중에는 피하는 것이 좋지만, 위장 기능이 회복되면 가끔 드시는 것은 괜찮습니다.",
  },
];

const digestiveDoctor = doctors[0];
const digestiveReviews = reviews.filter((r) => r.programSlug === "digestive");

export default function DigestiveProgramPage() {
  return (
    <main className="digestive-page">
      {/* 1. 히어로 */}
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:py-14 md:min-h-[720px] md:grid-cols-[0.95fr_1.05fr] md:gap-12 md:py-20">
          <div className="flex flex-col items-start">
            <div className="mb-12 inline-flex items-center gap-3 rounded-2xl border border-line bg-card px-4 py-2.5 shadow-sm shadow-ink/5 md:mb-24">
              <span className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={digestiveDoctor.photo}
                  alt={digestiveDoctor.name}
                  fill
                  sizes="32px"
                  quality={90}
                  className="object-cover"
                />
              </span>
              <span className="text-xs leading-tight text-ink-soft">
                의료 감수
                <br />
                <span className="text-sm font-semibold text-ink">
                  {digestiveDoctor.name} {digestiveDoctor.role}
                </span>
              </span>
            </div>

            <p className="mb-5 max-w-md text-[15px] leading-7 text-ink-soft sm:text-base">
              더부룩한 속, 쓰린 가슴.
              <br />
              위장의 운동성을 되살려 편안함을 드립니다.
            </p>
            <h1 className="font-display text-[3.35rem] leading-[1.08] text-ink sm:text-[4.25rem] md:text-[5.75rem]">
              소화기
              <br />
              클리닉
            </h1>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-10">
              <Link
                href="/reserve"
                className="ch-btn-primary px-5 py-3.5 text-sm sm:px-7 sm:py-4 sm:text-base"
              >
                <IconCalendar /> 진료 예약하기
              </Link>
              <a
                href="#quiz"
                className="ch-btn-secondary px-5 py-3.5 text-sm sm:px-7 sm:py-4 sm:text-base"
              >
                <IconClipboard /> 소화기 자가진단
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl border border-line shadow-sm shadow-ink/5">
              <Image
                src="/images/programs/digestive-hero.png"
                alt="배를 감싸쥔 손, 소화기 클리닉"
                fill
                sizes="(max-width: 768px) 90vw, 500px"
                quality={95}
                className="object-cover"
                priority
              />
            </div>
            <div className="ch-card absolute -bottom-7 left-1/2 w-[88%] -translate-x-1/2 p-4 md:-bottom-8 md:left-auto md:right-4 md:w-[82%] md:translate-x-0 md:p-5">
              <div className="space-y-2.5 text-sm text-ink sm:text-base">
                <p className="flex items-center gap-2">
                  <span className="text-root"><IconStar /></span> 만성 소화불량·담적병
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-root"><IconStar /></span> 역류성 식도염 집중 진료
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 공감 섹션 */}
      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="ch-section-title">
              먹는 즐거움을 잃어버리셨나요?
            </h2>
            <p className="ch-section-copy">
              내시경엔 이상이 없다는데,
              <br />
              나는 여전히 아프고 답답합니다.
            </p>
          </div>

          <div className="mb-14 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {symptoms.map((s) => (
              <div
                key={s.title}
                className="ch-card ch-card-hover flex min-h-[220px] flex-col items-start"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-paper-soft text-root">
                  <s.Icon />
                </span>
                <p className="mb-3 text-lg font-semibold leading-snug text-ink">{s.title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 3. 핵심 진단 원리 (특별 진단 시스템) */}
          <div className="ch-card-lg mx-auto max-w-4xl border-line md:p-10">
            <span className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-root/10 px-3 py-1 text-xs font-medium text-root">
              <IconCheck /> 특별 진단 시스템
            </span>
            <h3 className="mb-6 font-display text-2xl text-ink md:text-3xl">
              위장병, 움직임을 되살려야 낫습니다
            </h3>
            <div className="space-y-4 text-[15px] leading-loose text-ink-soft">
              <p>
                내시경 검사는 위장 내부의 염증이나 궤양을 확인하는 데는
                좋지만, 위장이 얼마나 잘 움직이는지, 기능적으로 문제가
                없는지는 알 수 없습니다.
              </p>
              <p>
                신경성 위염, 기능성 소화불량의 대부분은 위장의 운동성이
                떨어져 음식물이 쌓이고, 그로 인해 발생한 독소(담적)가 위장
                외벽을 딱딱하게 굳게 만드는 것이 원인입니다.
              </p>
              <p>
                초근목피한의원에서는{" "}
                <strong className="font-medium text-ink">복진(腹診)</strong>을
                통해 명치와 배꼽 주변의 굳어진 담적을 직접 찾아내고,{" "}
                <strong className="font-medium text-ink">맥진</strong>으로
                위장의 기운이 얼마나 약해져 있는지를 평가합니다.
              </p>
              <p>
                굳어진 위장을 풀어주고 차가워진 복부를 따뜻하게 하여, 위장이
                스스로 힘차게 움직일 수 있도록 돕는 것이 근본 치료입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 핵심 치료 원리 */}
      <section className="border-t border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-root">
              CORE SOLUTION
            </p>
            <h2 className="ch-section-title mb-8 leading-snug">
              위장을 다시 뛰게 하는
              <br />
              핵심 치료 원리
            </h2>
            <div className="space-y-5">
              {mechanism.map((m) => (
                <div key={m.n} className="flex gap-4 rounded-2xl border border-line bg-card p-5 shadow-sm shadow-ink/5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-semibold text-paper-soft">
                    {m.n}
                  </span>
                  <div>
                    <p className="mb-1 text-lg font-semibold leading-snug text-ink">{m.title}</p>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-paper shadow-sm shadow-ink/5">
            <Image
              src="/images/programs/digestive-mechanism.png"
              alt="소화기 순환 치료 원리 일러스트"
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              quality={95}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. 미니 진단 */}
      <section id="quiz" className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="ch-section-title">
              소화기 미니 진단
            </h2>
            <p className="ch-section-copy">
              1분이면 충분합니다. 나에게 딱 맞는 처방을 확인해보세요.
            </p>
          </div>
          <DigestiveQuiz />
        </div>
      </section>

      {/* 6. 증상별 맞춤 솔루션 */}
      <section className="border-t border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="ch-section-title">
              증상별 맞춤 솔루션
            </h2>
            <p className="ch-section-copy">
              같은 소화불량이라도 원인에 따라 치료법이 다릅니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {solutions.map((s) => (
              <div
                key={s.n}
                className="ch-card ch-card-hover relative flex min-h-[520px] flex-col p-7"
              >
                <span className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-line text-sm text-ink-soft">
                  {s.n}
                </span>
                <p className="mb-5 min-h-[3.5rem] whitespace-pre-line pr-12 text-lg font-semibold leading-snug text-ink">
                  {s.title}
                </p>

                <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-ink-soft">
                  <IconCheck /> 주요 증상
                </p>
                <ul className="mb-5 space-y-1 text-sm text-ink-soft">
                  {s.symptoms.map((sym) => (
                    <li key={sym}>· {sym}</li>
                  ))}
                </ul>

                <div className="mb-4 rounded-xl bg-paper px-4 py-3">
                  <p className="mb-1 flex items-center gap-1.5 text-xs text-ink-soft">
                    <IconClipboard /> {s.patternLabel}
                  </p>
                  <p className="text-sm font-medium text-ink">{s.pattern}</p>
                </div>

                <p className="mb-1 flex items-center gap-1.5 text-xs text-root">
                  <IconBolt /> 추천 치료
                </p>
                <p className="mb-1 font-medium text-ink">{s.treatment}</p>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {s.treatmentDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 치료 프로그램 소개 */}
      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-12 grid items-center gap-8 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-line shadow-sm shadow-ink/5">
              <Image
                src="/images/programs/digestive-treatment.png"
                alt="따뜻한 차를 든 손, 초근목피 소화기 치료 프로그램"
                fill
                sizes="(max-width: 768px) 90vw, 500px"
                quality={95}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="ch-section-title mb-3">
                초근목피 소화기 치료 프로그램
              </h2>
              <p className="ch-section-copy">
                위장의 기능을 근본적으로 살리는 치료입니다.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {treatments.map((t) => (
              <div
                key={t.title}
                className="ch-card ch-card-hover min-h-[210px]"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-paper-soft text-root">
                  <t.Icon />
                </span>
                <p className="mb-2 text-lg font-semibold leading-snug text-ink">{t.title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 치료후기 (커뮤니티 연동) */}
      <section className="border-t border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="ch-section-title">
                치료후기
              </h2>
              <p className="ch-section-copy">
                초근목피와 함께 속 편한 일상을 만난 분들의 이야기입니다.
              </p>
            </div>
            <Link
              href="/community/reviews"
              className="whitespace-nowrap text-sm text-ink-soft hover:text-root"
            >
              전체 후기 보기 →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {digestiveReviews.map((r) => (
              <LockedReviewCard
                key={r.id}
                title={r.title}
                summary={r.summary}
                patient={r.patient}
                doctor={r.doctor}
              />
            ))}
          </div>
          <LockedReviewGate count={3} />
        </div>
      </section>

      {/* 9. 담당 의료진 + 진료 절차 */}
      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="ch-card-lg mb-16 flex flex-col gap-6 bg-paper-soft md:flex-row md:items-center md:p-10">
            <div className="relative aspect-square w-full max-w-[180px] shrink-0 overflow-hidden rounded-2xl border border-line bg-card shadow-sm shadow-ink/5">
              <Image
                src={digestiveDoctor.photo}
                alt={`${digestiveDoctor.role} ${digestiveDoctor.name}`}
                fill
                sizes="180px"
                quality={95}
                className="object-cover"
              />
            </div>
            <div>
              <p className="mb-2 text-xs text-ink-soft">담당 의료진</p>
              <h3 className="mb-3 font-bold tracking-tight text-2xl text-ink">
                {digestiveDoctor.role} {digestiveDoctor.name}
              </h3>
              <p className="mb-4 leading-relaxed text-ink-soft">
                소화가 안 되면 만사가 귀찮아집니다.
                <br />
                위장을 편안하게 하여 삶의 활력을 되찾아드리겠습니다.
              </p>
              <Link
                href={`/about/doctors/${digestiveDoctor.slug}`}
                className="text-sm font-medium text-root hover:text-root-dark"
              >
                의료진 소개 더보기 →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-2 text-xs font-semibold tracking-wide text-root">
              TREATMENT PROCESS
            </p>
            <h2 className="ch-section-title mb-12">
              진료 절차
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {process.map((p) => (
              <div key={p.n} className="ch-card flex min-h-[190px] flex-col items-center text-center">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-line text-lg font-medium text-ink">
                  {p.n}
                </span>
                <p className="mb-2 text-lg font-semibold leading-snug text-ink">{p.title}</p>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ + 비대면진료 */}
      <section className="border-t border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="ch-section-title mb-6 text-2xl md:text-3xl">
                자주 묻는 질문
              </h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <div
                    key={f.q}
                    className="ch-card p-5"
                  >
                    <p className="mb-2 font-medium text-ink">Q. {f.q}</p>
                    <p className="text-sm leading-relaxed text-ink-soft">
                      A. {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ch-card-lg flex flex-col justify-center text-center">
              <h3 className="mb-3 font-bold tracking-tight text-xl text-ink">
                비대면 진료 프로세스
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-ink-soft">
                내원하지 않아도 진료와 처방이 가능합니다.
                <br />
                간편하게 상담받아보세요.
              </p>
              <Link
                href="/reserve"
                className="ch-btn-primary"
              >
                비대면 진료 자세히 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. 관련 자료 */}
      <section className="bg-paper">
        <div className="ch-section-pad mx-auto max-w-6xl">
          <p className="mb-2 text-xs text-ink-soft">함께 보면 좋은 문서</p>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="ch-section-title">
                다음으로 보면 좋은 자료
              </h2>
              <p className="mt-3 text-sm text-ink-soft">
                <span className="rounded-full bg-paper-soft px-2.5 py-1">
                  현재 보고 있는 문서
                </span>{" "}
                대전 초근목피 | 소화기질환
              </p>
            </div>
            <Link
              href="/reserve"
              className="ch-btn-primary px-5 py-2.5"
            >
              상담 예약
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="mb-3 flex items-center justify-between text-xs text-ink-soft">
                관련 진료 프로그램
                <span className="text-root">같이 이어서 보기</span>
              </p>
              <Link
                href="/programs/tonic"
                className="ch-card ch-card-hover block p-5"
              >
                <span className="mb-2 inline-block rounded-full bg-paper-soft px-2 py-0.5 text-xs text-ink-soft">
                  진료
                </span>
                <p className="mb-1.5 font-medium text-ink">보약·웰니스</p>
                <p className="mb-3 text-sm text-ink-soft">
                  피로는 몸의 SOS 신호입니다. 오장육부의 기운을 채우고
                  면역력을 높여 활력 넘치는 일상을 되찾아 드립니다.
                </p>
                <span className="text-sm text-root">프로그램 보기 →</span>
              </Link>
            </div>

            <div>
              <p className="mb-3 flex items-center justify-between text-xs text-ink-soft">
                같이 읽을 주제
                <span className="text-root">같이 이어서 보기</span>
              </p>
              <div className="space-y-4">
                <Link
                  href="/community/guide"
                  className="ch-card ch-card-hover block p-5"
                >
                  <span className="mb-2 inline-block rounded-full bg-paper-soft px-2 py-0.5 text-xs text-ink-soft">
                    주제
                  </span>
                  <p className="mb-1.5 font-medium text-ink">
                    소화기 질환 증상 개선과 생활관리 가이드
                  </p>
                  <span className="text-sm text-root">가이드 보기 →</span>
                </Link>
                <Link
                  href="/community/guide"
                  className="ch-card ch-card-hover block p-5"
                >
                  <span className="mb-2 inline-block rounded-full bg-paper-soft px-2 py-0.5 text-xs text-ink-soft">
                    주제
                  </span>
                  <p className="mb-1.5 font-medium text-ink">
                    마음의 안정을 찾는 심신 케어
                  </p>
                  <span className="text-sm text-root">가이드 보기 →</span>
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-3 flex items-center justify-between text-xs text-ink-soft">
                추가로 읽을 글
                <span className="text-root">같이 이어서 보기</span>
              </p>
              <div className="space-y-4">
                <Link
                  href="/community/column"
                  className="ch-card ch-card-hover block p-5"
                >
                  <span className="mb-2 inline-block rounded-full bg-paper-soft px-2 py-0.5 text-xs text-ink-soft">
                    읽을거리
                  </span>
                  <p className="mb-1.5 line-clamp-2 font-medium text-ink">
                    복부 팽만감, 가스, 그리고 검사에선 안 나오는 구조의 문제
                  </p>
                  <span className="text-sm text-root">글 읽기 →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
