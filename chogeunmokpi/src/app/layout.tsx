import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { clinicInfo } from "@/lib/site-data";

// NOTE: 배포 환경(Vercel)에서는 next/font/google로 Song Myung(display) +
// IBM Plex Sans KR(body)를 불러오도록 교체 예정입니다.
// 이 샌드박스는 fonts.googleapis.com 접근이 막혀 있어 시스템 폰트로 대체했습니다.

const homeDescription =
  "대전한의원 초근목피한의원은 유성구 반석동에서 소화기·피부·마음건강·보약 등 만성질환을 몸의 균형 관점으로 진료합니다.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cgmphani.com"),
  applicationName: "대전 초근목피한의원",
  title: "대전한의원 초근목피한의원 | 유성구 반석동 한의원",
  description: homeDescription,
  keywords: [
    "대전한의원",
    "유성구한의원",
    "반석동한의원",
    "대전 초근목피한의원",
    "초근목피한의원",
    "대전 소화기 한의원",
    "대전 피부 한의원",
    "대전 보약 한의원",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": 160,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "대전한의원 초근목피한의원 | 유성구 반석동 한의원",
    description: homeDescription,
    url: "https://www.cgmphani.com",
    siteName: "대전 초근목피한의원",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/logo-icon.png",
        width: 512,
        height: 512,
        alt: "대전 초근목피한의원",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "대전한의원 초근목피한의원 | 유성구 반석동 한의원",
    description: homeDescription,
    images: ["/logo-icon.png"],
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
    google: "3TWHTDHunF3DpfHzDxjo43mrv5kCDhrmApt6ZnYGCJ0",
    other: {
      "naver-site-verification": ["b14dad02eabb7f8c5b427e9524751486b1ab985e", "d89d670fbad5078bca329881406afd241bc6121e"],
    },
  },
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "대전 초근목피한의원",
  alternateName: ["초근목피한의원", "대전한의원 초근목피한의원", "대전 유성구 반석동 초근목피한의원"],
  description:
    "대전 유성구 반석동에서 소화기·피부·마음건강 등 만성 난치성 질환을 진료하는 한의원입니다.",
  url: "https://www.cgmphani.com",
  telephone: clinicInfo.phone,
  image: "https://www.cgmphani.com/logo-icon.png",
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
  areaServed: ["대전", "유성구", "반석동"],
  founder: {
    "@type": "Person",
    name: clinicInfo.ceo,
  },
  sameAs: [
    "https://pcmap.place.naver.com/hospital/1237207306/home",
    "https://m.booking.naver.com/booking/13/bizes/1508188",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "대전 초근목피한의원",
  alternateName: ["초근목피한의원", "초근목피 한의원", "대전한의원 초근목피한의원", "대전 유성구 반석동 초근목피한의원"],
  url: "https://www.cgmphani.com",
  inLanguage: "ko-KR",
  publisher: {
    "@type": "MedicalClinic",
    name: "대전 초근목피한의원",
    url: "https://www.cgmphani.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
