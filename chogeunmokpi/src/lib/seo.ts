import type { Metadata } from "next";

type ProgramImageMetadataOptions = {
  title: string;
  description: string;
  url: string;
  image: string;
  alt: string;
};

export function programImageMetadata({
  title,
  description,
  url,
  image,
  alt,
}: ProgramImageMetadataOptions): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "초근목피한의원",
      images: [
        {
          url: image,
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
          url: image,
          alt,
        },
      ],
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
