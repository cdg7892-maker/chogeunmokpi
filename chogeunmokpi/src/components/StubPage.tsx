import Link from "next/link";

export default function StubPage({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="mx-auto min-h-[60vh] max-w-3xl px-5 py-24 text-center">
      <p className="mb-3 text-sm text-root">{eyebrow}</p>
      <h1 className="font-display text-4xl text-ink">{title}</h1>
      <p className="mt-5 text-ink-soft">
        {description ?? "콘텐츠를 준비하고 있습니다. 곧 만나보실 수 있어요."}
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full border border-line px-6 py-2.5 text-sm text-ink-soft hover:border-root hover:text-root"
      >
        ← 홈으로 돌아가기
      </Link>
    </section>
  );
}
