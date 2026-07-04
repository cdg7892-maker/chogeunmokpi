import Link from "next/link";
import type { ClinicCondition, ClinicPageData } from "@/lib/clinic-pages";

export default function ClinicConditionPage({
  program,
  condition,
}: {
  program: ClinicPageData;
  condition: ClinicCondition;
}) {
  return (
    <main className="bg-paper">
      <section className="border-b border-line bg-paper-soft">
        <div className="ch-section-pad mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-root">
            {program.title} 치료 안내
          </p>
          <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            {condition.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl keep-words text-base leading-relaxed text-ink-soft md:text-lg">
            {condition.summary}
          </p>
        </div>
      </section>

      <section className="ch-section-pad mx-auto max-w-4xl">
        <article className="ch-card-lg bg-card md:p-10">
          <span className="mb-5 inline-flex rounded-full bg-paper-soft px-3 py-1 text-xs font-medium text-ink-soft">
            {condition.group}
          </span>
          <h2 className="mb-5 font-display text-2xl text-ink md:text-3xl">
            상세 칼럼을 준비 중입니다
          </h2>
          <div className="space-y-4 keep-words text-[15px] leading-loose text-ink-soft">
            <p>
              이 페이지는 {condition.title}에 대한 블로그형 치료 안내 칼럼으로 확장될 예정입니다.
              증상 체크, 한의학적 원인, 치료 과정, 생활 관리법을 차분하게 정리하겠습니다.
            </p>
            <p>
              현재는 {program.title}의 전체 진료 방향과 미니 진단을 먼저 확인하실 수 있습니다.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/programs/${program.slug}`} className="ch-btn-secondary">
              {program.title}으로
            </Link>
            <Link href="/reserve" className="ch-btn-primary">
              상담 예약하기
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
