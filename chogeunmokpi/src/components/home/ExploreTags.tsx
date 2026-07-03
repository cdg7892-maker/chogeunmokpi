import Link from "next/link";

const tags = [
  "역류성식도염·기능성소화불량",
  "과민성대장증후군",
  "만성 위염·담적",
  "아토피·건선",
  "두드러기·피부염",
  "알러지성 비염",
  "소아 허약·성장",
  "수험생 보약",
  "불면·화병",
  "만성피로·면역저하",
  "산후보약",
  "공진단·경옥고",
];

export default function ExploreTags() {
  return (
    <section className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl text-ink md:text-4xl">
              진료 분야 둘러보기
            </h2>
            <p className="mt-2 text-sm text-ink-soft">
              관심 있는 진료 분야를 선택해 보세요
            </p>
          </div>
          <Link
            href="/programs"
            className="whitespace-nowrap text-sm text-ink-soft hover:text-root"
          >
            전체 진료 분야 →
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Link
              key={tag}
              href="/programs"
              className="rounded-full border border-line bg-card px-4 py-2.5 text-sm text-ink-soft transition hover:border-root hover:text-root"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
