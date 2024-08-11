import React from "react";

export const metadata = {
  title: "The Greatest Collection",
  description: "A list of curated masterpiece in the worlds",
};

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
