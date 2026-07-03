import Link from "next/link";
import { programs } from "@/lib/site-data";

export default function ProgramsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm text-root">진료과목</p>
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          초근목피의 진료 분야
        </h1>
        <p className="mt-4 text-ink-soft">
          장기 하나가 아닌 몸 전체의 균형을 보는 8가지 치유 프로그램
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        {programs.map((program, i) => (
          <Link
            key={program.slug}
            href={`/programs/${program.slug}`}
            className={`group rounded-2xl border border-line bg-card p-7 transition hover:border-root/50 hover:shadow-md hover:shadow-ink/5 ${
              i === 0 ? "sm:col-span-2 md:col-span-1 md:ring-1 md:ring-root/30" : ""
            }`}
          >
            {i === 0 && (
              <span className="mb-3 inline-block rounded-full bg-root px-2.5 py-0.5 text-xs font-medium text-paper-soft">
                대표 진료과목
              </span>
            )}
            <p className="mb-2 text-lg font-medium text-ink">
              {program.title}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-ink-soft">
              {program.summary}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {program.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full bg-paper-soft px-2.5 py-1 text-xs text-ink-soft"
                >
                  {kw}
                </span>
              ))}
            </div>
            <span className="mt-4 inline-block text-root opacity-0 transition group-hover:opacity-100">
              자세히 보기 →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
