import Image from "next/image";
import Link from "next/link";
import { programs } from "@/lib/site-data";

const thumbnailBySlug: Record<string, string> = {
  digestive: "/images/programs/digestive-hero.png",
  mind: "/images/programs/mind-hero.png",
  skin: "/images/programs/skin-hero.png",
  tonic: "/images/programs/tonic-hero.png",
  pediatric: "/images/programs/pediatric-hero-v2.png",
  "head-face": "/images/programs/head-face-hero.png",
  women: "/images/programs/women-hero.png",
};

export default function ProgramsPage() {
  return (
    <section className="ch-section-pad mx-auto max-w-6xl">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm text-root">진료과목</p>
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          초근목피의 진료 분야
        </h1>
        <p className="mt-4 text-ink-soft">
          장기 하나가 아닌 몸 전체의 균형을 보는 8가지 치유 프로그램
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {programs.map((program, i) => (
          <Link
            key={program.slug}
            href={`/programs/${program.slug}`}
            className={`ch-card-hover group overflow-hidden rounded-2xl border bg-card shadow-sm shadow-ink/5 ${
              i === 0
                ? "border-root/60 ring-1 ring-root/30"
                : "border-line hover:border-root/40"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-herb/20 via-paper-soft to-root/15">
              {thumbnailBySlug[program.slug] ? (
                <Image
                  src={thumbnailBySlug[program.slug]}
                  alt={`${program.title} 대표 이미지`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, 360px"
                  quality={90}
                  className="object-cover transition duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-5xl opacity-70 transition group-hover:scale-105">
                  {program.icon}
                </div>
              )}
              {i === 0 && (
                <span className="absolute left-3 top-3 rounded-full bg-root px-2.5 py-0.5 text-xs font-medium text-paper-soft">
                  대표 진료과목
                </span>
              )}
            </div>

            <div className="p-6">
              <p className="mb-2 text-lg font-medium text-ink">
                {program.title}
              </p>
              <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-ink-soft">
                {program.summary}
              </p>
              <span className="text-sm font-medium text-root">
                자세히 보기 →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
