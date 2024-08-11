import React from "react";
import Image from "next/image";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

import {
  TypeGallerySkeleton,
  ContentfulImage,
} from "@/contentful/types/TypeGallery";
import ShareButton from "@/components/share-button";

async function getCollection(slug: string) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
    const response = await client.getEntries<TypeGallerySkeleton>({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE!,
      "fields.slug": slug,
    });

    return response.items[0].fields;
  } catch (error) {
    console.error(error);
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const collection = await getCollection(params.slug);

  return {
    title: collection?.title,
    description: `This collection was created by ${collection?.creator} in ${collection?.yearCreated}`,
  };
}

export async function generateStaticParams() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
    const response = await client.getEntries<TypeGallerySkeleton>({
      content_type: process.env.CONTENTFUL_CONTENT_TYPE!,
    });

    return (
      response.items.map((item) => {
        slug: item.fields.slug;
      }) || []
    );
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function CollectionsSlug({
  params,
}: {
  params: { slug: string };
}) {
  const collection = await getCollection(params.slug);

  if (collection) {
    const { title, price, yearCreated, genre, description, creator } =
      collection;
    const featuredImage = collection?.featuredImage as ContentfulImage;

    const options = {
      renderNode: {
        [BLOCKS.HEADING_5]: (_: unknown, children: React.ReactNode) => {
          return <h5 className="mb-2 text-2xl font-semibold">{children}</h5>;
        },
        [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => {
          return <p className="mb-6">{children}</p>;
        },
      },
    };

    return (
      <section className="pb-2">
        <div className="h-96 overflow-hidden rounded-[42px]">
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            alt="A painting"
            height={featuredImage.fields.file.details.image.height}
            width={featuredImage.fields.file.details.image.width}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="mx-auto max-w-[600px] text-black dark:text-white">
          <ShareButton
            className="mt-4"
            text={`${title} is our biggest collection. Check it out right now!`}
            size={32}
          />
          <h3 className="mt-2 text-center text-4xl font-extrabold">
            {collection.title}
          </h3>
          <div className="my-8 flex w-full flex-wrap justify-center gap-2">
            <p className="w-max rounded-[42px] bg-teal-400 px-8 py-2 text-black">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(price)}
            </p>
            <p className="w-max rounded-[42px] bg-red-400 px-8 py-2 text-black">
              {creator}
            </p>
            <p className="w-max rounded-[42px] bg-yellow-400 px-8 py-2 text-black">
              {new Date(yearCreated as string).getFullYear()} - SM
            </p>
            <ul className="flex flex-wrap justify-center gap-2">
              {genre.map((item) => (
                <li key={item} className="rounded-[42px] bg-pink-400 px-8 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 px-4">
            {documentToReactComponents(description, options)}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <h2>No Collection Found!</h2>
      </section>
    );
  }
}
