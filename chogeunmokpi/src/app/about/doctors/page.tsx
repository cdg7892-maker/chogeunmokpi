import Link from "next/link";
import { doctors } from "@/lib/site-data";

export default function DoctorsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <div className="mb-14 text-center">
        <h1 className="font-display text-4xl text-ink md:text-5xl">
          의료진 소개
        </h1>
        <p className="mt-4 text-ink-soft">전문 의료진을 소개합니다.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.slug}
            className="w-full max-w-xs overflow-hidden rounded-3xl border border-line bg-card"
          >
            <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-herb/15 via-paper-soft to-root/10 text-ink-soft/60">
              <div className="flex flex-col items-center gap-2">
                <span className="text-4xl">🩺</span>
                <span className="text-sm">{doctor.photoNote}</span>
              </div>
            </div>

            <div className="p-6">
              <span className="mb-2 inline-block rounded-full bg-paper px-2.5 py-0.5 text-xs font-medium text-ink-soft">
                {doctor.role}
              </span>
              <p className="mb-2 text-xl font-medium text-ink">
                {doctor.name}
              </p>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {doctor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-root/10 px-2.5 py-0.5 text-xs text-root"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-ink-soft">
                {doctor.shortIntro}
              </p>
              <Link
                href={`/about/doctors/${doctor.slug}`}
                className="block rounded-full border border-line py-2.5 text-center text-sm font-medium text-ink-soft transition hover:border-root hover:text-root"
              >
                의료진 소개 더보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
