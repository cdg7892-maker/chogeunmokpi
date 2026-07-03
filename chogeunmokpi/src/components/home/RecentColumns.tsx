import Link from "next/link";

const columns = [
  {
    date: "2026.06.28",
    title: "진료실에서 만난 만성 소화불량",
    summary:
      "내시경은 정상인데 매번 체한 듯 답답하다는 분들, 실제로는 기능성 소화불량인 경우가 많습니다.",
  },
  {
    date: "2026.06.20",
    title: "물만 마셔도 붓는다는 분들에게",
    summary:
      "식사량을 크게 줄였는데도 체중과 붓기가 그대로라면, 대사와 순환의 균형을 먼저 살펴야 합니다.",
  },
  {
    date: "2026.06.12",
    title: "아이 아토피, 언제 한의원에 가야 할까",
    summary:
      "반복되는 아토피는 피부만이 아니라 소화력과 면역력을 함께 살펴야 근본적인 관리가 가능합니다.",
  },
];

export default function RecentColumns() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            최근 건강 이야기
          </h2>
          <Link
            href="/community/column"
            className="text-sm text-ink-soft hover:text-root"
          >
            더보기 →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {columns.map((col) => (
            <Link
              key={col.title}
              href="/community/column"
              className="group rounded-2xl border border-line bg-card p-6 transition hover:border-root/50"
            >
              <div className="mb-4 flex h-32 items-center justify-center rounded-xl bg-paper-soft text-2xl text-herb/50">
                🌿
              </div>
              <p className="mb-2 text-xs text-ink-soft/70">{col.date}</p>
              <p className="mb-2 font-medium leading-snug text-ink">
                {col.title}
              </p>
              <p className="line-clamp-2 text-sm text-ink-soft">
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
