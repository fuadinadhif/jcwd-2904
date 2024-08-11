import Image from "next/image";
import Link from "next/link";
import { createClient } from "contentful";

import {
  TypeGallerySkeleton,
  ContentfulImage,
} from "@/contentful/types/TypeGallery";

export default async function CollectionsPage() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
    const response = await client.getEntries<TypeGallerySkeleton>({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE || "",
    });
    const collections = response.items;

    return (
      <section className="flex flex-wrap gap-2">
        {collections.map((item) => {
          const thumbnail = item.fields.thumbnail as ContentfulImage;

          return (
            <article
              key={item.sys.id}
              className="relative grid h-[350px] shrink grow basis-96 grid-rows-1 rounded-[42px]"
            >
              <div className="overflow-hidden rounded-[42px]">
                <Image
                  src={`https:${thumbnail.fields.file.url}`}
                  alt={item.fields.title}
                  width={thumbnail.fields.file.details.image.width}
                  height={thumbnail.fields.file.details.image.height}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <Link
                href={`/collections/${item.fields.slug}`}
                className="border-2px absolute bottom-0 left-0 right-0 top-0 m-auto h-fit w-fit max-w-72 rounded-[42px] bg-white/70 px-10 py-4 text-center text-black dark:bg-black/70 dark:text-white"
              >
                <h2 className="text-xl font-bold uppercase">
                  {item.fields.title}
                </h2>
                <time dateTime={item.fields.yearCreated}>
                  {item.fields.yearCreated.split("T")[0]}
                </time>
              </Link>
            </article>
          );
        })}
      </section>
    );
  } catch (error) {
    console.error(error);
  }
}
