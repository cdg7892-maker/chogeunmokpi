import Image from "next/image";
import Link from "next/link";
import { clinicInfo } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper-soft">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-8 flex items-center gap-2.5">
          <span className="relative h-7 w-[22px]">
            <Image
              src="/logo-icon.png"
              alt="초근목피한의원 로고"
              fill
              sizes="22px"
              className="object-contain"
            />
          </span>
          <span className="font-display text-lg text-ink">
            초근목피한의원
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-semibold text-ink">진료 시간</h3>
            <dl className="space-y-1.5 text-sm text-ink-soft">
              <div className="flex justify-between max-w-xs">
                <dt>{clinicInfo.hours.weekdayLabel}</dt>
                <dd>{clinicInfo.hours.weekday}</dd>
              </div>
              <div className="flex justify-between max-w-xs">
                <dt>{clinicInfo.hours.weekendLabel}</dt>
                <dd>{clinicInfo.hours.weekend}</dd>
              </div>
              <div className="flex justify-between max-w-xs text-root">
                <dt>목요일</dt>
                <dd>휴무</dd>
              </div>
              <p className="pt-1 text-xs text-ink-soft/70">
                * {clinicInfo.hours.note}
              </p>
            </dl>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold text-ink">바로가기</h3>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-ink-soft">
              <Link href="/reserve" className="hover:text-root">
                진료 예약
              </Link>
              <Link href="/programs" className="hover:text-root">
                진료과목 전체보기
              </Link>
              <Link href="/about/location" className="hover:text-root">
                오시는 길
              </Link>
              <Link href="/community/reviews" className="hover:text-root">
                치료후기
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-6 text-xs leading-relaxed text-ink-soft/80">
          <p>
            상호: {clinicInfo.name} &nbsp;|&nbsp; 대표: {clinicInfo.ceo}{" "}
            &nbsp;|&nbsp; 전화: {clinicInfo.phone}
          </p>
          <p>
            주소: {clinicInfo.address} &nbsp;|&nbsp; 사업자등록번호:{" "}
            {clinicInfo.bizNumber}
          </p>
          <div className="mt-2 flex gap-4">
            <span>이용약관</span>
            <span>개인정보처리방침</span>
            <span>환불/취소 안내</span>
          </div>
          <p className="mt-3 text-[11px] text-ink-soft/60">
            © {new Date().getFullYear()} {clinicInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
