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
