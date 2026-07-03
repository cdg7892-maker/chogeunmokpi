import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { doctors } from "@/lib/site-data";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) notFound();

  return (
    <section className="mx-auto max-w-4xl px-5 py-20 md:py-24">
      <Link
        href="/about/doctors"
        className="mb-10 inline-block text-sm text-ink-soft hover:text-root"
      >
        의료진 소개
      </Link>

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
          <Image
            src={doctor.detailPhoto}
            alt={`${doctor.role} ${doctor.name}`}
            fill
            sizes="(max-width: 768px) 90vw, 400px"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <span className="mb-2 inline-block rounded-full bg-paper px-2.5 py-0.5 text-xs font-medium text-ink-soft">
            {doctor.role}
          </span>
          <h1 className="font-display text-4xl text-ink">{doctor.name}</h1>
          <div className="mb-6 mt-3 flex flex-wrap gap-1.5">
            {doctor.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-root/10 px-2.5 py-0.5 text-xs text-root"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-[15px] leading-loose text-ink-soft">
            {doctor.story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-line bg-card p-6">
            <h2 className="mb-3 text-sm font-semibold text-ink">경력</h2>
            <ul className="space-y-1.5 text-sm text-ink-soft">
              {doctor.credentials.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-root">·</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/reserve"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper-soft transition hover:bg-root"
          >
            진료 예약하기
          </Link>
        </div>
      </div>
    </section>
  );
}
