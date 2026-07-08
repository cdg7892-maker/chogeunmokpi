import Image from "next/image";
import Link from "next/link";
import { recentHealthColumns } from "@/lib/health-columns";

export default function RecentColumns() {
  const columns = recentHealthColumns.slice(0, 3);

  return (
    <section className="bg-paper">
      <div className="ch-section-pad mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="ch-section-title">최근 건강 이야기</h2>
          <Link
            href="/community/column"
            className="text-base text-ink-soft hover:text-root"
          >
            더보기 →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {columns.map((col) => (
            <Link
              key={col.slug}
              href={`/community/column/${col.slug}`}
              className="ch-card ch-card-hover group overflow-hidden"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl bg-paper-soft">
                <Image
                  src={col.hero}
                  alt={col.title}
                  width={720}
                  height={480}
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mb-2 text-xs text-ink-soft/70">
                {col.category} · {col.date.replaceAll("-", ".")}
              </p>
              <p className="mb-2 text-lg font-semibold leading-snug text-ink keep-words">
                {col.title}
              </p>
              <p className="line-clamp-2 text-base text-ink-soft keep-words">
                {col.summary}
              </p>
              <span className="mt-3 inline-block text-sm text-root opacity-0 transition group-hover:opacity-100">
                자세히 보기 →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
