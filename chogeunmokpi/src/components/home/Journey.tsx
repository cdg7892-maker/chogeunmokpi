import Link from "next/link";

const cards = [
  {
    icon: "🌿",
    title: "진료과목 전체",
    body: "초근목피의 모든 치유 프로그램",
    href: "/programs",
  },
  {
    icon: "💬",
    title: "치료 후기",
    body: "직접 경험한 환자분들의 정성 어린 후기",
    href: "/community/reviews",
  },
  {
    icon: "📅",
    title: "진료 예약하기",
    body: "원하는 시간에 기다림 없이",
    href: "/reserve",
  },
];

export default function Journey() {
  return (
    <section className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            치유를 향한 여정
          </h2>
          <p className="mt-2 text-sm text-ink-soft">
            당신에게 필요한 따뜻한 처방
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-2xl border border-line bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-root/50 hover:shadow-lg hover:shadow-ink/5"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-paper text-xl">
                {card.icon}
              </span>
              <p className="mb-1.5 text-lg font-medium text-ink">
                {card.title}
              </p>
              <p className="text-sm text-ink-soft">{card.body}</p>
              <span className="mt-4 inline-block text-root transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
