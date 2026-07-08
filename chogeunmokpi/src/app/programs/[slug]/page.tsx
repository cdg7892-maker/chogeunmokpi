import { notFound } from "next/navigation";
import Link from "next/link";
import { programs } from "@/lib/site-data";

export function generateStaticParams() {
  return programs
    .filter((p) => !["digestive", "diet", "mind", "skin", "tonic", "pediatric", "head-face", "women"].includes(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) notFound();

  return (
    <section className="ch-section-pad mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm text-root">진료과목</p>
      <h1 className="font-display text-4xl text-ink">{program.title}</h1>
      <p className="mt-5 text-ink-soft">{program.summary}</p>
      <p className="mt-2 text-sm text-ink-soft/70">
        상세 페이지 콘텐츠는 다음 단계에서 채워질 예정입니다.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {program.keywords.map((kw) => (
          <span
            key={kw}
            className="rounded-full bg-paper-soft px-3 py-1.5 text-xs text-ink-soft"
          >
            {kw}
          </span>
        ))}
      </div>
      <Link
        href="/programs"
        className="ch-btn-secondary mt-8"
      >
        ← 진료과목 전체보기
      </Link>
    </section>
  );
}
