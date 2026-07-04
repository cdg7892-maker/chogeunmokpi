import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-paper">
      <svg
        className="hero-pulse-rings pointer-events-none absolute left-1/2 top-[48%] h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 text-root/15 md:h-[68rem] md:w-[68rem]"
        viewBox="0 0 720 720"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="360" cy="360" r="114" stroke="currentColor" strokeWidth="1" />
        <circle cx="360" cy="360" r="192" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="360" cy="360" r="282" stroke="currentColor" strokeWidth="0.65" />
        <ellipse cx="360" cy="360" rx="318" ry="236" stroke="currentColor" strokeWidth="0.55" />
        <ellipse cx="360" cy="360" rx="236" ry="318" stroke="currentColor" strokeWidth="0.55" />
      </svg>

      <svg
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.18]"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-paper-grain" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M0 18 H72 M0 54 H72 M18 0 V72 M54 0 V72" stroke="currentColor" strokeWidth="0.35" />
            <path d="M8 8 L13 8 M28 31 L36 31 M50 17 L58 17 M20 60 L28 60 M62 48 L68 48" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="1440" height="900" fill="url(#hero-paper-grain)" className="text-line" />
      </svg>

      <svg
        className="hero-root-map pointer-events-none absolute inset-x-[-12%] bottom-[-10%] -z-10 h-[92%] w-[124%] text-root/30 md:bottom-[-16%] md:h-[108%]"
        viewBox="0 0 1600 900"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M800 0 C792 118 796 194 800 266 C804 344 800 420 800 510"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M800 304 C704 360 638 398 548 474 C458 550 366 594 224 636 C126 665 70 712 18 792"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M800 304 C896 360 962 398 1052 474 C1142 550 1234 594 1376 636 C1474 665 1530 712 1582 792"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M704 360 C618 430 552 456 438 482 C350 502 294 538 238 594"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M896 360 C982 430 1048 456 1162 482 C1250 502 1306 538 1362 594"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M548 474 C480 540 438 600 394 696 C360 770 306 820 218 872"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M1052 474 C1120 540 1162 600 1206 696 C1240 770 1294 820 1382 872"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M638 404 C574 430 530 430 466 414 C400 398 344 406 272 448"
          stroke="currentColor"
          strokeWidth="0.95"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M962 404 C1026 430 1070 430 1134 414 C1200 398 1256 406 1328 448"
          stroke="currentColor"
          strokeWidth="0.95"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M800 510 C744 586 696 636 606 698 C522 756 466 812 426 900"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M800 510 C856 586 904 636 994 698 C1078 756 1134 812 1174 900"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M760 190 C696 238 646 260 574 266 C500 272 442 298 388 358"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M840 190 C904 238 954 260 1026 266 C1100 272 1158 298 1212 358"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center md:py-24">
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
