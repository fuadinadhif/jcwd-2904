import { ImageResponse } from "next/og";
import { createClient } from "contentful";

import { TypeGallerySkeleton, ContentfulImage } from "@/contentful/types";

export default async function OpengraphImage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
    const response = await client.getEntries<TypeGallerySkeleton>({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE!,
      "fields.slug": params.slug,
    });

    const collection = response.items[0].fields;
    const thumbnail = collection?.thumbnail as ContentfulImage;

    return new ImageResponse(
      (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={`https:${thumbnail.fields.file.url}`}
          alt={collection.title}
        />
      ),
    );
  } catch (error) {
    console.error(error);
  }
}
