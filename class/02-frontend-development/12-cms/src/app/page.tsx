import { createClient } from "contentful";
import Image from "next/image";
import { GallerySkeleton } from "../../@types/TypeGallery";

export default async function Home() {
  try {
    const client = createClient({
      space: "j9e7ag0k845b",
      accessToken: "4fSl7b9S1OgpC0La6_rTqQdpz60va5OQqBDnDBdW2Vs",
    });
    const response = await client.getEntries({
      content_type: "gallery",
    });
    const collection = response.items;

    return (
      <main>
        <h1>The Gallery</h1>
        <div className="flex">
          {collection.map((item) => {
            return (
              <article key={item.sys.id}>
                <Image
                  src={`https:${items.fields.thumbnail.fields.file.url}`}
                  alt="Starry night"
                  width={150}
                  height={200}
                />
                <h2>{item.fields.title}</h2>
                <time dateTime={item.fields.yearCreated}>
                  {item.fields.yearCreated.split("T")[0]}
                </time>
              </article>
            );
          })}
        </div>
      </main>
    );
  } catch (error) {
    console.error(error);
  }
}
