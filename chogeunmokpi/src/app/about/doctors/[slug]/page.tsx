import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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
    <section className="ch-section-pad mx-auto max-w-4xl">
      <Link
        href="/about/doctors"
        className="mb-10 inline-block text-sm text-ink-soft hover:text-root"
      >
        ← 의료진 소개
      </Link>

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line shadow-sm shadow-ink/5">
          <Image
            src={doctor.detailPhoto}
            alt={`${doctor.role} ${doctor.name}`}
            fill
            sizes="(max-width: 768px) 90vw, 400px"
            quality={95}
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

          <div className="ch-card mt-8">
            <h2 className="mb-3 text-sm font-semibold text-ink">약력</h2>
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
            className="ch-btn-primary mt-8"
          >
            진료 예약하기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
