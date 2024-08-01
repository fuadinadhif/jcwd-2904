"use client";

export default function Error({ error }: { error: Error }) {
  return <h1>{error.message}</h1>;
}
