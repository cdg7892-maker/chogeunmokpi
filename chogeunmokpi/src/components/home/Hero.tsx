import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-paper">
      {/* signature root-line art */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] w-full text-root/25"
        viewBox="0 0 1440 500"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M720 0 V120"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M720 120 C 640 180, 600 200, 520 260 C 460 305, 420 330, 340 360"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M720 120 C 800 180, 840 200, 920 260 C 980 305, 1020 330, 1100 360"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M520 260 C 470 300, 440 320, 380 340"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M920 260 C 970 300, 1000 320, 1060 340"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M340 360 C 300 400, 260 420, 190 460"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M1100 360 C 1140 400, 1180 420, 1250 460"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M720 120 V 60"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center md:py-24">
        <p className="mb-6 text-sm tracking-[0.28em] text-ink-soft">
          전통의 지혜와 현대한의학의 통합
        </p>
        <h1 className="font-display text-6xl leading-[1.16] text-ink md:text-7xl">
          근본의 시간,
          <br />
          회복의 공간
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-ink-soft md:text-xl">
          이곳저곳 다녀봐도 낫지 않던 만성 질환.
          <br />
          초근목피는 수치가 아닌 몸 전체의 균형을 봅니다.
        </p>
        <Link
          href="/reserve"
          className="ch-btn-primary mt-10 px-7 py-3.5"
        >
          진료 예약하기
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
