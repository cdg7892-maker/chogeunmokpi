import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// NOTE: 배포 환경(Vercel)에서는 next/font/google로 Song Myung(display) +
// IBM Plex Sans KR(body)를 불러오도록 교체 예정입니다.
// 이 샌드박스는 fonts.googleapis.com 접근이 막혀 있어 시스템 폰트로 대체했습니다.

export const metadata: Metadata = {
  title: "초근목피한의원 | 대전 소화기·피부·알러지 한의원",
  description:
    "검사는 정상인데 왜 아플까요? 초근목피한의원은 수치가 아닌 몸 전체의 균형을 봅니다. 3대에 걸친 한의업, 30년 임상 경력으로 소화기·피부·알러지 만성질환을 근본부터 치료합니다.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
