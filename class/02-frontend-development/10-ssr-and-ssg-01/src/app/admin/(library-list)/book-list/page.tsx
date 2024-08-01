import BookList from "@/components/book-list";
import { Suspense } from "react";

export default async function Page() {
  // throw new Error("Reader list error");

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-12">Book List</h1>
      <Suspense fallback={<h1>Tunggu dulu...</h1>}>
        <BookList />
      </Suspense>
    </div>
  );
}
