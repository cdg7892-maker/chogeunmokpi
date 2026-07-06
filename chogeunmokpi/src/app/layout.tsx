import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { clinicInfo } from "@/lib/site-data";

// NOTE: 배포 환경(Vercel)에서는 next/font/google로 Song Myung(display) +
// IBM Plex Sans KR(body)를 불러오도록 교체 예정입니다.
// 이 샌드박스는 fonts.googleapis.com 접근이 막혀 있어 시스템 폰트로 대체했습니다.

export const metadata: Metadata = {
  metadataBase: new URL("https://chogeunmokpi.vercel.app"),
  title: "대전한의원 초근목피 한의원 | 난치성 질환 치료 대전 유성구 반석동 한의원",
  description:
    "검사는 정상인데 왜 아플까요? 초근목피한의원은 수치가 아닌 몸 전체의 균형을 봅니다. 3대에 걸친 한의업, 30년 임상 경력으로 소화기·피부·알러지 만성질환을 근본부터 치료합니다.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    other: {
      "naver-site-verification": "b14dad02eabb7f8c5b427e9524751486b1ab985e",
    },
  },
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinicInfo.name,
  url: "https://chogeunmokpi.vercel.app",
  telephone: clinicInfo.phone,
  image: "https://chogeunmokpi.vercel.app/logo-icon.png",
  priceRange: "$$",
  medicalSpecialty: [
    "Digestive",
    "Dermatology",
    "MentalHealth",
    "Pediatrics",
    "Gynecologic",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "반석로11번길 66-22 1층",
    addressLocality: "유성구",
    addressRegion: "대전광역시",
    addressCountry: "KR",
  },
  founder: {
    "@type": "Person",
    name: clinicInfo.ceo,
  },
  sameAs: [
    "https://pcmap.place.naver.com/hospital/1237207306/home",
    "https://m.booking.naver.com/booking/13/bizes/1508188",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
        <div className="site-shell">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
