import * as Contentful from "contentful";

export interface GallerySkeleton {
  contentTypeId: "gallery";
  fields: {
    title: Contentful.EntryFieldTypes.Symbol;
    slug: Contentful.EntryFieldTypes.Symbol;
    thumbnail: Contentful.Asset;
    featuredImage: Contentful.Asset;
    genre: Contentful.EntryFieldTypes.Symbol[];
    yearCreated: Contentful.EntryFieldTypes.Date;
    price: Contentful.EntryFieldTypes.Number;
    description: Contentful.EntryFieldTypes.RichText;
  };
}
