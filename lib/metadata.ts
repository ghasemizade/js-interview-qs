import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
  image = "/og.png",
}: SEOProps): Metadata {
  const baseUrl = "https://mywebsite.com";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${image}`],
    },
  };
}
