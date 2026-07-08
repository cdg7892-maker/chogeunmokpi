import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import DietMiniQuiz from "@/components/programs/DietMiniQuiz";
import { clinicInfo } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "엔오슬림환 다이어트 | 대전 유성구 반석동 초근목피한의원",
  description:
    "대전 유성구 반석동 초근목피한의원의 엔오슬림환 다이어트 안내. 1개월 15만원, 3개월 45만원, 3개월 처방 시 10일분 서비스. 1~4단계 맞춤 처방으로 식욕과 대사를 함께 관리합니다.",
  alternates: {
    canonical: "/programs/diet",
  },
  openGraph: {
    title: "엔오슬림환 다이어트 | 초근목피한의원",
    description:
      "굶지 않고 무리하지 않게. 엔오슬림환 1~4단계 맞춤 처방으로 식욕, 대사, 체지방 연소 리듬을 함께 관리합니다.",
    url: "/programs/diet",
    images: [
      {
        url: "/images/programs/diet/eno-slim-hero.png",
        width: 1800,
        height: 1200,
        alt: "엔오슬림환 1~4단계 제품 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "엔오슬림환 다이어트 | 초근목피한의원",
    description:
      "1개월 15만원, 3개월 45만원. 엔오슬림환 1~4단계 맞춤 다이어트 처방 안내.",
    images: [
      {
        url: "/images/programs/diet/eno-slim-hero.png",
        alt: "엔오슬림환 다이어트 제품 이미지",
      },
    ],
  },
};

const prices = [
  {
    label: "1개월",
    title: "입문 관리",
    price: "15만원",
    note: "90포",
    points: ["엔오슬림환 1개월 구성", "식욕·대사 반응 확인", "처음 시작하는 감량 관리"],
  },
  {
    label: "Best Choice",
    title: "3개월 집중 관리",
    price: "45만원",
    note: "270포 + 10일분 서비스",
    points: ["3개월 목표 감량 설계", "10일분 추가 서비스", "정체기와 요요 관리까지 함께 설계"],
    best: true,
  },
];

const promises = [
  {
    icon: "01",
    title: "1~4단계 맞춤 처방",
    body: "체중, 식욕, 대사 상태에 따라 엔오슬림환 단계를 조절합니다. 같은 다이어트라도 몸의 반응은 다르기 때문입니다.",
  },
  {
    icon: "02",
    title: "복용이 쉬운 포 타입",
    body: "1개월 90포 구성으로 휴대와 복용이 간편합니다. 바쁜 일상에서도 다이어트 흐름이 끊기지 않도록 설계했습니다.",
  },
  {
    icon: "03",
    title: "목표 중심의 3개월 관리",
    body: "첫 달은 적응, 두 번째 달은 감량 가속, 세 번째 달은 정체기와 유지 리듬까지 보며 현실적인 목표를 세웁니다.",
  },
];

const principles = [
  {
    title: "식욕 신호 조절",
    body: "강한 허기와 야식 충동을 줄여 식사량을 자연스럽게 낮추는 방향으로 관리합니다.",
  },
  {
    title: "대사 스위치 회복",
    body: "몸이 무겁고 잘 붓는 상태를 살피며 에너지 소비 리듬이 살아나도록 돕습니다.",
  },
  {
    title: "체지방 연소 집중",
    body: "백색지방을 갈색지방의 연소 리듬으로 전환한다는 컨셉으로 체지방 감량을 목표로 합니다.",
  },
  {
    title: "요요 방지 설계",
    body: "무리한 절식보다 오래 지속 가능한 식사, 수면, 활동 리듬을 함께 잡습니다.",
  },
];

const steps = [
  {
    step: "1단계",
    title: "처음 시작하는 입문 감량",
    img: "/images/programs/diet/eno-slim-step1.png",
    body: "식욕 조절이 처음이거나 예민한 체질을 고려해 부담을 낮춘 시작 단계입니다.",
  },
  {
    step: "2단계",
    title: "식욕·부종 조절",
    img: "/images/programs/diet/eno-slim-step2.png",
    body: "저녁 식욕, 간식, 붓기, 식후 무거움을 함께 느끼는 분에게 많이 쓰이는 단계입니다.",
  },
  {
    step: "3단계",
    title: "체지방 집중 감량",
    img: "/images/programs/diet/eno-slim-step3.png",
    body: "대사가 느리고 감량이 정체된 분에게 체지방 연소 리듬을 더 적극적으로 끌어올립니다.",
  },
  {
    step: "4단계",
    title: "고강도 감량 관리",
    img: "/images/programs/diet/eno-slim-lineup.png",
    body: "체중 증가 폭이 크거나 요요가 반복된 분에게 목표 감량과 유지 전략을 함께 설계합니다.",
  },
];

const process = [
  ["진료 신청", "예약 후 체중 변화, 식욕 패턴, 수면과 생활 리듬을 미리 확인합니다."],
  ["1:1 상담", "현재 몸 상태와 목표 감량 폭을 바탕으로 엔오슬림환 단계를 결정합니다."],
  ["맞춤 처방", "1~4단계 중 적합한 강도와 복용법을 설계하고 주의사항을 안내합니다."],
  ["복용 관리", "3개월 집중 관리 시 적응기, 감량기, 유지기를 나누어 리듬을 점검합니다."],
];

const reviews = [
  "[32세, 여성, 산후 체중 증가] 출산 후 정체된 복부 체지방과 야식 습관 관리",
  "[45세, 남성, 복부 비만] 회식과 야식 이후 늘어난 체중과 피로감 관리",
  "[29세, 여성, 반복 요요] 식단을 시작하면 금방 무너지는 식욕 패턴 교정",
];

export default function DietPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div>
          <p className="mb-4 text-sm font-semibold text-root">초근목피 다이어트 클리닉</p>
          <p className="text-lg leading-8 text-ink-soft">
            굶지 않고, 무리하지 않게. 내 몸의 식욕과 대사 리듬부터 다시 봅니다.
          </p>
          <h1 className="mt-5 font-display text-5xl leading-tight text-ink md:text-7xl">
            엔오슬림환
            <br />
            다이어트
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-ink-soft">
            백색지방을 갈색지방의 연소 리듬으로 전환한다는 컨셉의 엔오슬림환.
            1~4단계 맞춤 처방으로 식욕, 대사, 체지방 감량을 함께 관리합니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/events/diet-program" className="ch-btn-primary">
              진료 예약하기
            </Link>
            <a href="#diet-check" className="ch-btn-secondary">
              내 몸 상태 체크하기
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-[8px] border border-line bg-white shadow-sm">
            <Image
              src="/images/programs/diet/eno-slim-hero.png"
              alt="엔오슬림환 1단계부터 4단계까지 제품 라인업"
              width={1800}
              height={1200}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-[8px] border border-line bg-white/95 p-5 shadow-xl backdrop-blur">
            <div className="grid gap-3 text-sm font-semibold text-ink md:grid-cols-2">
              <span>★ 1개월 90포 구성</span>
              <span>★ 3개월 시 10일분 서비스</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-root">
              Price
            </p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
              가격 안내
            </h2>
            <p className="mt-4 text-ink-soft">투명하고 단순한 엔오슬림환 처방 구성</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {prices.map((item) => (
              <div
                key={item.title}
                className={`rounded-[8px] border bg-white p-7 shadow-sm ${
                  item.best ? "border-root ring-1 ring-root/30" : "border-line"
                }`}
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-paper-soft px-3 py-1 text-xs font-semibold text-root">
                    {item.label}
                  </span>
                  {item.best ? (
                    <span className="rounded-full bg-root px-3 py-1 text-xs font-semibold text-white">
                      Best Choice
                    </span>
                  ) : null}
                </div>
                <h3 className="font-display text-3xl text-ink">{item.title}</h3>
                <p className="mt-4 text-4xl font-bold text-ink">{item.price}</p>
                <p className="mt-2 text-sm font-semibold text-root">{item.note}</p>
                <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                  {item.points.map((point) => (
                    <li key={point}>✓ {point}</li>
                  ))}
                </ul>
                <Link href="/events/diet-program" className="ch-btn-primary mt-7 w-full justify-center">
                  신청하기
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-ink-soft">
            * 개인의 체질과 진료 결과에 따라 복용 단계와 안내는 달라질 수 있습니다.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-root">
              Core Values
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              엔오슬림환의
              <br />
              3가지 약속
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink-soft">
              단순히 덜 먹게 만드는 처방이 아니라, 내 몸이 다시 가벼워지는 방향을 함께 설계합니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {promises.map((item) => (
              <article key={item.title} className="rounded-[8px] border border-line bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper-soft text-sm font-bold text-root">
                  {item.icon}
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 leading-7 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-root">
              Core Solution
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
              엔오슬림환의
              <br />
              4단계 감량 원리
            </h2>
            <div className="mt-8 space-y-6">
              {principles.map((item, index) => (
                <div key={item.title} className="grid grid-cols-[48px_1fr] gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-paper-soft text-lg font-bold text-root">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                    <p className="mt-2 leading-7 text-ink-soft">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[8px] border border-line bg-paper-soft shadow-sm">
            <Image
              src="/images/programs/diet/eno-slim-lineup.png"
              alt="엔오슬림환 단계별 제품 구성"
              width={1800}
              height={1200}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-root">
              1 to 4 Steps
            </p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
              내 몸에 맞는 단계가 따로 있습니다
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {steps.map((item) => (
              <article key={item.step} className="overflow-hidden rounded-[8px] border border-line bg-white">
                <Image
                  src={item.img}
                  alt={`엔오슬림환 ${item.step} 제품 이미지`}
                  width={1800}
                  height={1200}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-sm font-semibold text-root">{item.step}</p>
                  <h3 className="mt-2 text-2xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-ink-soft">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DietMiniQuiz />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-root">
              Treatment Process
            </p>
            <h2 className="mt-3 font-display text-4xl text-ink md:text-5xl">
              집에서도 편하게 상담받는 다이어트 처방
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {process.map(([title, body], index) => (
              <article key={title} className="rounded-[8px] border border-line bg-white p-6">
                <span className="text-sm font-bold text-root">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-bold text-ink">{title}</h3>
                <p className="mt-3 leading-7 text-ink-soft">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-soft px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-root">진료 노트</p>
              <h2 className="mt-3 font-display text-4xl text-ink">치료후기</h2>
              <p className="mt-3 text-ink-soft">
                제목은 확인할 수 있지만, 자세한 내용은 로그인 후 열람할 수 있습니다.
              </p>
            </div>
            <Link href="/community/reviews" className="font-semibold text-ink">
              전체 후기 보기 →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((title) => (
              <article key={title} className="rounded-[8px] border border-line bg-white p-6">
                <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-ink">
                  치료 사례
                  <span className="rounded-full border border-line px-2 py-1 text-xs text-root">🔒</span>
                </div>
                <h3 className="min-h-[84px] text-xl font-bold leading-8 text-ink">{title}</h3>
                <div className="mt-5 h-14 rounded-[8px] bg-ink/10 blur-sm" />
                <p className="mt-5 text-sm text-ink-soft">환자: 익명 | 담당의: 이호근</p>
                <Link href="/community/reviews" className="ch-btn-secondary mt-6 w-full justify-center">
                  로그인하고 보기
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-root">FAQ</p>
            <h2 className="mt-3 font-display text-4xl text-ink">자주 묻는 질문</h2>
          </div>
          <div className="space-y-4">
            {[
              ["Q. 1개월은 몇 포인가요?", "A. 기본 1개월 구성은 90포입니다. 복용법은 진료 후 개인 상태에 맞춰 안내합니다."],
              ["Q. 3개월 구성 혜택이 있나요?", "A. 3개월 처방은 45만원이며, 현재 10일분을 서비스로 함께 안내합니다."],
              ["Q. 1~4단계는 어떻게 정하나요?", "A. 체중 목표, 식욕 강도, 대사 상태, 생활 패턴을 상담해 적합한 단계를 정합니다."],
              ["Q. 굶어야 하나요?", "A. 무리한 절식보다 지속 가능한 식사량 조절과 대사 리듬 회복을 목표로 합니다."],
            ].map(([q, a]) => (
              <details key={q} className="rounded-[8px] border border-line bg-white p-5">
                <summary className="cursor-pointer text-lg font-bold text-ink">{q}</summary>
                <p className="mt-4 leading-8 text-ink-soft">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white/70">{clinicInfo.name}</p>
            <h2 className="mt-3 font-display text-4xl">가볍게 시작하고, 오래 유지하도록.</h2>
            <p className="mt-4 text-white/70">
              엔오슬림환 다이어트 상담은 예약제로 진행됩니다.
            </p>
          </div>
          <Link href="/events/diet-program" className="rounded-full bg-white px-7 py-4 font-bold text-ink">
            진료 예약하기
          </Link>
        </div>
      </section>
    </main>
  );
}
