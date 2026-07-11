import type { Metadata } from "next";

type ProgramImageMetadataOptions = {
  title: string;
  description: string;
  url: string;
  image: string;
  alt: string;
};

const SITE_URL = "https://chogeunmokpi.vercel.app";

export function absoluteSiteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function programImageMetadata({
  title,
  description,
  url,
  image,
  alt,
}: ProgramImageMetadataOptions): Pick<Metadata, "openGraph" | "twitter" | "other"> {
  const absoluteUrl = absoluteSiteUrl(url);
  const absoluteImage = absoluteSiteUrl(image);

  return {
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      type: "article",
      siteName: "초근목피한의원",
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 1200,
          alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: absoluteImage,
          alt,
        },
      ],
    },
    other: {
      thumbnail: absoluteImage,
      image_src: absoluteImage,
    },
  };
}

export function buildSearchDescription(title: string, summary: string) {
  const cleanedSummary = summary
    .replace(/[“”"']/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const description = `대전 유성구 반석동 초근목피한의원 ${title} 한방 진료. ${cleanedSummary}`;

  if (description.length <= 118) {
    return description;
  }

  return `${description.slice(0, 115).replace(/[,.·\s]+$/g, "")}...`;
}
