import Link from "next/link";

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="16" height="11" x="4" y="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export type LockedReviewCardProps = {
  title: string;
  summary?: string;
  patient?: string;
  doctor?: string;
  href?: string;
  className?: string;
};

export function LockedReviewCard({
  title,
  summary,
  patient = "익명",
  doctor,
  href = "/community/reviews",
  className = "",
}: LockedReviewCardProps) {
  const lockedPreview = summary
    ? "로그인 후 실제 치료 경과와 처방 방향을 확인하실 수 있습니다."
    : "로그인 후 실제 치료 경과와 처방 방향을 확인하실 수 있습니다.";

  return (
    <Link
      href={href}
      className={`group block rounded-2xl border border-line bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-ink hover:shadow-lg hover:shadow-ink/10 ${className}`}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="text-sm font-bold text-ink">치료 사례</span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/30 bg-paper text-brown">
          <LockIcon />
        </span>
      </div>
      <h3 className="text-xl font-bold leading-snug text-ink keep-words">{title}</h3>
      <div className="relative mt-5 overflow-hidden">
        <p className="line-clamp-2 select-none text-base leading-7 text-ink-soft blur-sm keep-words">
          {lockedPreview}
        </p>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/85" />
      </div>
      <p className="mt-7 border-t border-line pt-4 text-sm font-semibold text-ink-soft">
        환자: {patient} {doctor ? `| 담당의: ${doctor}` : ""}
      </p>
    </Link>
  );
}

export function LockedReviewGate({ count = 3 }: { count?: number }) {
  return (
    <div className="mt-8 rounded-2xl border border-ink bg-white px-6 py-8 text-center">
      <p className="text-lg font-bold text-ink">{count}+개의 실제 치료 사례가 더 있습니다</p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <Link href="/community/reviews" className="rounded-xl bg-white px-7 py-4 font-bold text-ink shadow-lg shadow-ink/10 transition hover:-translate-y-1">
          회원가입하고 후기 보기
        </Link>
        <Link href="/community/reviews" className="rounded-xl border-2 border-ink px-7 py-4 font-bold text-ink transition hover:bg-ink hover:text-white">
          로그인
        </Link>
      </div>
    </div>
  );
}
