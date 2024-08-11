import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeGalleryFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  thumbnail: EntryFieldTypes.AssetLink;
  featuredImage: EntryFieldTypes.AssetLink;
  genre: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  yearCreated: EntryFieldTypes.Date;
  price: EntryFieldTypes.Number;
  description: EntryFieldTypes.RichText;
  creator: EntryFieldTypes.Symbol;
}

export type TypeGallerySkeleton = EntrySkeletonType<TypeGalleryFields, string>;

export type TypeGallery<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeGallerySkeleton, Modifiers, Locales>;

export interface ContentfulImage {
  fields: {
    file: {
      url: string;
      details: { image: { width: number; height: number } };
    };
  };
}
