import Link from "next/link";
import { clinicInfo } from "@/lib/site-data";

const notices = [
  {
    tag: "공지",
    date: "2026.07.01",
    title: "초근목피한의원 홈페이지 리뉴얼 오픈 안내",
    body: "안녕하세요, 초근목피한의원입니다. 환자분들의 편의를 위해 홈페이지를 새롭게 개편했습니다.",
  },
  {
    tag: "공지",
    date: "2026.07.01",
    title: "2026년 7월 진료 안내",
    body: "7월 진료 일정을 안내드립니다. 자세한 내용은 병원 공지 게시판을 참고해 주세요.",
  },
  {
    tag: "공지",
    date: "2026.07.01",
    title: "초진 예약 및 방문 안내",
    body: "초진 환자분은 사전 예약 후 방문해 주시면 대기 없이 진료가 가능합니다.",
  },
];

export default function NoticeHours() {
  return (
    <section className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-ink">
            <span aria-hidden="true">📣</span> 공지사항
          </h2>
          <Link
            href="/about/notices"
            className="text-sm text-ink-soft hover:text-root"
          >
            더보기 +
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {notices.map((notice) => (
            <div
              key={notice.title}
              className="rounded-2xl border border-line bg-card p-6"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-root/10 px-2.5 py-0.5 text-xs font-medium text-root">
                  {notice.tag}
                </span>
                <span className="text-xs text-ink-soft/70">
                  {notice.date}
                </span>
              </div>
              <p className="mb-1.5 font-medium text-ink">{notice.title}</p>
              <p className="line-clamp-2 text-sm text-ink-soft">
                {notice.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-card p-6">
            <h3 className="mb-4 flex items-center gap-2 font-medium text-ink">
              <span aria-hidden="true">🕐</span> 진료 시간
            </h3>
            <dl className="space-y-2 text-sm text-ink-soft">
              <div className="flex justify-between">
                <dt>{clinicInfo.hours.weekdayLabel}</dt>
                <dd>{clinicInfo.hours.weekday}</dd>
              </div>
              <div className="flex justify-between">
                <dt>{clinicInfo.hours.weekendLabel}</dt>
                <dd>{clinicInfo.hours.weekend}</dd>
              </div>
              <div className="flex justify-between text-root">
                <dt>목요일</dt>
                <dd>휴무</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-ink-soft/70">
              * {clinicInfo.hours.note}
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-medium text-ink">
                <span aria-hidden="true">📞</span> 예약 및 문의
              </h3>
              <Link
                href="/reserve"
                className="rounded-full bg-ink px-4 py-1.5 text-xs font-medium text-paper-soft hover:bg-root"
              >
                진료 예약하기
              </Link>
            </div>
            <p className="mb-5 text-lg text-ink">{clinicInfo.phone}</p>

            <div className="border-t border-line pt-4">
              <h3 className="mb-2 flex items-center gap-2 font-medium text-ink">
                <span aria-hidden="true">📍</span> 오시는 길
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-ink-soft">{clinicInfo.address}</p>
                <Link
                  href="/about/location"
                  className="whitespace-nowrap rounded-full border border-line px-3 py-1.5 text-xs text-ink-soft hover:border-root hover:text-root"
                >
                  지도 보기 ⊙
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
