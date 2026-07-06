import type { Metadata } from "next";
import Link from "next/link";
import CopyAddressButton from "./CopyAddressButton";

export const metadata: Metadata = {
  title: "오시는 길 | 대전 유성구 반석동 초근목피한의원",
  description:
    "초근목피한의원 오시는 길. 대전 유성구 반석로11번길 66-22 1층, 전화 042-823-7571. 카카오지도와 교통편, 진료시간을 안내합니다.",
  alternates: {
    canonical: "/about/location",
  },
};

const clinic = {
  name: "초근목피한의원",
  address: "대전 유성구 반석로11번길 66-22 1층",
  phone: "042-823-7571",
  kakaoMap:
    "https://map.kakao.com/?q=%EC%B4%88%EA%B7%BC%EB%AA%A9%ED%94%BC%ED%95%9C%EC%9D%98%EC%9B%90",
  kakaoSearch:
    "https://map.kakao.com/link/search/%EC%B4%88%EA%B7%BC%EB%AA%A9%ED%94%BC%ED%95%9C%EC%9D%98%EC%9B%90",
  naverMap:
    "https://pcmap.place.naver.com/hospital/1237207306/home?entry=plt",
  tmap:
    "https://www.tmap.co.kr/search?searchKeyword=%EB%8C%80%EC%A0%84%20%EC%9C%A0%EC%84%B1%EA%B5%AC%20%EB%B0%98%EC%84%9D%EB%A1%9C11%EB%B2%88%EA%B8%B8%2066-22%201%EC%B8%B5",
};

const transports = [
  {
    label: "지하철",
    title: "대전 1호선 반석역 인근",
    body: "반석역에서 병원까지 도보 이동이 가능합니다. 초진 방문 전 위치가 헷갈리시면 전화로 안내해 드립니다.",
  },
  {
    label: "버스",
    title: "반석동·반석역 인근 정류장",
    body: "반석역 주변 정류장에서 하차 후 반석로11번길 방향으로 이동하시면 됩니다.",
  },
  {
    label: "자가용",
    title: "대전 유성구 반석로11번길 66-22 1층",
    body: "내비게이션에서 초근목피한의원 또는 주소를 검색해 주세요. 주차는 방문 전 문의하시면 더 정확히 안내해 드립니다.",
  },
];

const hours = [
  { label: "월·화·수·금", value: "09:00 - 18:00" },
  { label: "토요일", value: "09:00 - 15:00" },
  { label: "목요일", value: "휴진" },
  { label: "점심시간", value: "없이 진료" },
];

function ExternalArrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

function TransitIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 3h12a2 2 0 0 1 2 2v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2Z" />
      <path d="M8 21h8" />
      <path d="M8 7h8" />
      <path d="M7.5 14h.01M16.5 14h.01" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function LocationPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="border-b border-line bg-paper-soft">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[0.92fr_1.08fr] md:py-20">
          <div>
            <p className="mb-5 text-sm font-semibold tracking-[0.24em] text-root">
              LOCATION
            </p>
            <p className="mb-4 text-sm font-semibold text-ink-soft">
              대전한의원 · 반석동한의원
            </p>
            <h1 className="font-display text-[3.4rem] leading-[1.08] text-ink sm:text-[4.3rem] md:text-[5.6rem]">
              오시는 길
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-ink-soft">
              대전 유성구 반석동에서 초근목피한의원을 찾는 분께,
              편안한 방문을 위해 주소와 교통편을 안내해 드립니다.
              초진 환자분은 예약 후 방문하시면 더 여유 있게 진료를
              시작하실 수 있습니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/reserve" className="ch-btn-primary">
                진료 예약하기
              </Link>
              <a
                href={clinic.kakaoSearch}
                target="_blank"
                rel="noreferrer"
                className="ch-btn-secondary"
              >
                카카오지도 열기 <ExternalArrow />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-line bg-card shadow-xl shadow-ink/10">
            <div className="flex items-center justify-between border-b border-line bg-paper px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-root">
                  Kakao Map
                </p>
                <h2 className="mt-1 text-lg font-bold tracking-tight">
                  {clinic.name}
                </h2>
              </div>
              <a
                href={clinic.kakaoSearch}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-root hover:text-root-dark"
              >
                지도 열기
              </a>
            </div>
            <iframe
              title="초근목피한의원 카카오지도"
              src={clinic.kakaoMap}
              className="h-[360px] w-full border-0 md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[18px] border border-line bg-card p-6 shadow-sm shadow-ink/5 md:p-8">
            <div className="mb-6 flex items-center gap-3 text-root">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-paper-soft">
                <PinIcon />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  Address
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                  주소
                </h2>
              </div>
            </div>
            <p className="text-xl font-bold leading-relaxed text-ink">
              {clinic.address}
            </p>
            <p className="mt-3 text-base leading-8 text-ink-soft">
              검색어: 초근목피한의원
              <br />
              전화: {clinic.phone}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CopyAddressButton address={clinic.address} />
              <a
                href={clinic.naverMap}
                target="_blank"
                rel="noreferrer"
                className="ch-btn-secondary px-5 py-2.5"
              >
                네이버 지도 <ExternalArrow />
              </a>
              <a
                href={clinic.tmap}
                target="_blank"
                rel="noreferrer"
                className="ch-btn-secondary px-5 py-2.5"
              >
                TMap 길찾기 <ExternalArrow />
              </a>
            </div>
          </div>

          <div className="rounded-[18px] border border-line bg-paper-soft p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3 text-root">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-card">
                <ClockIcon />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em]">
                  Hours
                </p>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink">
                  진료 시간
                </h2>
              </div>
            </div>
            <dl className="divide-y divide-line rounded-2xl border border-line bg-card">
              {hours.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 px-5 py-4 text-base"
                >
                  <dt className="font-semibold text-ink-soft">{item.label}</dt>
                  <dd className="font-bold text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm leading-7 text-ink-soft">
              공휴일 및 임시 휴진 일정은 방문 전 전화로 확인해 주세요.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-soft py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-root">
            Transport
          </p>
          <h2 className="ch-section-title">교통편 안내</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {transports.map((item) => (
              <article
                key={item.label}
                className="rounded-[18px] border border-line bg-card p-6 shadow-sm shadow-ink/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-paper-soft text-root">
                  <TransitIcon />
                </div>
                <p className="mb-2 text-sm font-bold text-root">
                  {item.label}
                </p>
                <h3 className="mb-3 text-xl font-bold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-ink-soft">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="rounded-[18px] border border-line bg-ink p-8 text-paper-soft md:flex md:items-center md:justify-between md:p-10">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-paper-soft/70">
                Reservation
              </p>
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                처음 방문하신다면
                <br />
                예약 후 오시면 더 편안합니다.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-paper-soft/75">
                진료 흐름, 대기 시간, 복용 중인 약이나 검사 자료 확인까지
                차분히 안내해 드리겠습니다.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 md:mt-0">
              <Link
                href="/reserve"
                className="inline-flex items-center justify-center rounded-full bg-paper-soft px-6 py-3 text-sm font-bold text-ink transition hover:-translate-y-px hover:bg-white"
              >
                진료 예약하기
              </Link>
              <a
                href={`tel:${clinic.phone.replaceAll("-", "")}`}
                className="inline-flex items-center justify-center rounded-full border border-paper-soft/30 px-6 py-3 text-sm font-bold text-paper-soft transition hover:-translate-y-px hover:bg-paper-soft/10"
              >
                전화 문의
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
