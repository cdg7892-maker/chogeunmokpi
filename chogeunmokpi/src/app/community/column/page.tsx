import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { recentHealthColumns } from "@/lib/health-columns";

export const metadata: Metadata = {
  title: "건강칼럼 | 초근목피한의원",
  description:
    "소화기, 마음건강, 피부·면역 등 초근목피한의원이 전하는 한방 건강칼럼입니다.",
  alternates: {
    canonical: "/community/column",
  },
};

export default function ColumnPage() {
  return (
    <main className="min-h-screen bg-[#f6f2e8] text-[#1f241b]">
      <section className="border-b border-[#d8cfbd] bg-[#f6f2e8]">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7b5f38]">
            Health Column
          </p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight text-[#0f172a] sm:text-6xl">
            건강칼럼
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#4b4335] keep-words">
            검사 결과만으로 설명되지 않는 몸의 신호를 한의학적 관점에서 차분히 풀어드립니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-6">
          {recentHealthColumns.map((column) => (
            <Link
              key={column.slug}
              href={`/community/column/${column.slug}`}
              className="grid gap-6 rounded-[24px] border border-[#d8cfbd] bg-white/82 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(42,35,24,0.10)] md:grid-cols-[240px_1fr] md:p-6"
            >
              <div className="relative overflow-hidden rounded-[18px] bg-[#eee8d9]">
                <Image
                  src={column.hero}
                  alt={column.title}
                  width={720}
                  height={720}
                  className="aspect-[4/3] w-full object-cover md:aspect-square"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold text-[#7b5f38]">
                  {column.category} · {column.date.replaceAll("-", ".")}
                </p>
                <h2 className="mt-3 text-2xl font-black leading-9 text-[#111827] keep-words md:text-3xl">
                  {column.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[#4b4335] keep-words">
                  {column.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {column.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#f3efe4] px-3 py-1 text-xs font-bold text-[#5a5040]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
