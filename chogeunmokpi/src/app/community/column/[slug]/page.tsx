import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getHealthColumn, recentHealthColumns } from "@/lib/health-columns";
import { programImageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return recentHealthColumns.map((column) => ({ slug: column.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const column = getHealthColumn(slug);

  if (!column) {
    return { title: "건강칼럼 | 초근목피한의원" };
  }

  const title = `${column.title} | 초근목피한의원 건강칼럼`;
  const description = column.summary;

  return {
    title,
    description,
    alternates: {
      canonical: `/community/column/${column.slug}`,
    },
    ...programImageMetadata({
      title,
      description,
      url: `/community/column/${column.slug}`,
      image: column.hero,
      alt: column.title,
    }),
  };
}

export default async function ColumnDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const column = getHealthColumn(slug);

  if (!column) notFound();

  const related = recentHealthColumns.filter((item) => item.slug !== column.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#f6f2e8] text-[#1f241b]">
      <article>
        <header className="border-b border-[#d8cfbd] bg-[#f6f2e8]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
            <div>
              <nav className="mb-10 text-sm font-medium text-[#7c6f5a]">
                <Link href="/" className="hover:text-[#263020]">홈</Link>
                <span className="mx-2">›</span>
                <Link href="/community/column" className="hover:text-[#263020]">건강칼럼</Link>
                <span className="mx-2">›</span>
                <span className="text-[#263020]">{column.category}</span>
              </nav>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7b5f38]">
                {column.category}
              </p>
              <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#0f172a] sm:text-5xl lg:text-6xl keep-words">
                {column.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#4b4335] keep-words">
                {column.summary}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-bold text-[#7c6f5a]">
                <span>{column.date.replaceAll("-", ".")}</span>
                <span>·</span>
                <span>{column.readTime}</span>
                <span>·</span>
                <span>이호근 대표원장 감수</span>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#d2c5aa] bg-white p-3 shadow-[0_26px_55px_rgba(42,35,24,0.13)]">
              <Image
                src={column.hero}
                alt={column.title}
                width={1200}
                height={1200}
                priority
                className="aspect-[4/3] w-full rounded-[22px] object-cover"
              />
            </div>
          </div>
        </header>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_280px] lg:py-20">
          <div className="rounded-[24px] border border-[#d8cfbd] bg-white/86 p-6 shadow-sm sm:p-10">
            <div className="flex flex-wrap gap-2 border-b border-[#d8cfbd] pb-6">
              {column.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-[#f3efe4] px-3 py-1 text-xs font-bold text-[#5a5040]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 space-y-12">
              {column.body.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-3xl font-semibold leading-tight text-[#0f172a] keep-words">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-lg leading-9 text-[#333b2d] keep-words">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.points ? (
                    <div className="mt-7 grid gap-4 md:grid-cols-3">
                      {section.points.map((point) => (
                        <div key={point.title} className="rounded-2xl border border-[#d8cfbd] bg-[#fffdf7] p-5">
                          <h3 className="text-lg font-black text-[#111827] keep-words">{point.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-[#4b4335] keep-words">{point.body}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[#d8cfbd] bg-[#fffdf7] p-6 text-sm leading-7 text-[#5a5040]">
              <strong className="text-[#20291d]">의료 정보 안내</strong>
              <p className="mt-2 keep-words">
                본 콘텐츠는 일반적인 한방 의료 정보 제공을 위한 참고 자료이며, 개별 환자의 진단·처방을 대신할 수 없습니다. 정확한 진단과 치료 계획은 한의사 진료를 통해 결정해주세요.
              </p>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[22px] border border-[#d8cfbd] bg-white/82 p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7b5f38]">Reservation</p>
              <h2 className="mt-3 text-2xl font-black text-[#111827]">상담이 필요하신가요?</h2>
              <p className="mt-3 text-sm leading-7 text-[#4b4335] keep-words">
                증상이 반복된다면 현재 몸의 상태를 함께 확인해보세요.
              </p>
              <Link
                href="https://m.booking.naver.com/booking/13/bizes/1508188?theme=place&lang=ko&area=pll"
                className="mt-5 inline-flex w-full justify-center rounded-full bg-[#20291d] px-5 py-3 text-sm font-black text-white"
              >
                진료 예약하기
              </Link>
            </div>

            <div className="rounded-[22px] border border-[#d8cfbd] bg-white/82 p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#7b5f38]">More Columns</p>
              <div className="mt-5 space-y-4">
                {related.map((item) => (
                  <Link key={item.slug} href={`/community/column/${item.slug}`} className="block border-b border-[#ebe3d2] pb-4 last:border-0 last:pb-0">
                    <p className="text-xs font-bold text-[#7c6f5a]">{item.category}</p>
                    <p className="mt-1 text-sm font-black leading-6 text-[#111827] keep-words">{item.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </article>
    </main>
  );
}
