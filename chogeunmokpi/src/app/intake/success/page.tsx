import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "접수 완료 | 초근목피한의원",
  description:
    "초근목피한의원 엔오슬림환 다이어트 신청 접수가 완료되었습니다.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IntakeSuccessPage() {
  return (
    <main className="bg-paper px-5 py-20 text-ink">
      <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-root text-2xl font-bold text-white">
          ✓
        </div>
        <h1 className="mt-8 font-display text-4xl text-ink md:text-5xl">
          접수가 완료되었습니다
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-soft">
          작성해주신 내용이 데스크로 전달되었습니다.
          <br />
          잠시만 대기해 주시면 안내해 드리겠습니다.
        </p>
        <Link href="/" className="ch-btn-primary mt-10">
          홈으로 돌아가기
        </Link>
      </section>
    </main>
  );
}
