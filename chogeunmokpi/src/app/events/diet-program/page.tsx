import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import DietProgramForm from "@/components/DietProgramForm";

export const metadata: Metadata = {
  title: "엔오슬림환 비대면 신청 | 초근목피한의원",
  description:
    "초근목피한의원 엔오슬림환 다이어트 비대면 신청 페이지입니다. 1개월 15만원, 3개월 45만원, 3개월 처방 시 10일분 서비스 혜택을 신청할 수 있습니다.",
  alternates: {
    canonical: "/events/diet-program",
  },
  openGraph: {
    title: "엔오슬림환 비대면 신청 | 초근목피한의원",
    description:
      "한방 다이어트 엔오슬림환을 비대면 상담으로 신청하고 자택 배송 안내를 받아보세요.",
    url: "/events/diet-program",
    images: [
      {
        url: "/images/programs/diet/eno-slim-lineup.png",
        width: 1800,
        height: 1200,
        alt: "엔오슬림환 비대면 신청 제품 이미지",
      },
    ],
  },
};

export default function DietProgramEventPage() {
  return (
    <main className="bg-paper text-ink">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div className="md:sticky md:top-24 md:self-start">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-root">
            Event
          </p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-ink md:text-6xl">
            엔오슬림환
            <br />
            비대면 신청
          </h1>
          <p className="mt-6 text-lg leading-9 text-ink-soft">
            한방 다이어트 처방을 비대면 상담으로 신청하실 수 있습니다.
            진료 후 처방받으신 엔오슬림환은 자택으로 안전하게 배송 안내를 도와드립니다.
          </p>
          <p className="mt-4 text-lg leading-9 text-ink-soft">
            1개월 또는 3개월 단위로 부담 없이 시작해보세요.
          </p>
          <div className="mt-8 overflow-hidden rounded-[8px] border border-line bg-white">
            <Image
              src="/images/programs/diet/eno-slim-lineup.png"
              alt="엔오슬림환 1단계부터 4단계까지 제품 라인업"
              width={1800}
              height={1200}
              priority
              className="aspect-[16/11] w-full object-cover"
            />
          </div>
          <div className="mt-6 grid gap-3 text-sm font-semibold text-ink md:grid-cols-2">
            <div className="rounded-[8px] border border-line bg-white p-4">
              1개월 90포
            </div>
            <div className="rounded-[8px] border border-line bg-white p-4">
              3개월 신청 시 10일분 서비스
            </div>
          </div>
        </div>

        <div>
          <DietProgramForm />
          <p className="mt-5 text-center text-sm text-ink-soft">
            일반 진료 예약은{" "}
            <Link href="/reserve" className="font-bold text-root underline">
              네이버 예약
            </Link>
            에서도 가능합니다.
          </p>
        </div>
      </section>
    </main>
  );
}
