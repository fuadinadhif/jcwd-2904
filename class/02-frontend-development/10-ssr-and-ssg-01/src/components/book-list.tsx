import { PiEyesFill } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";

interface Book {
  id: number;
  title: string;
  authors: { name: string }[];
  subjects: string[];
}

export default async function BookList() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch("https://gutendex.com/books/");
    const books = await response.json();

    return (
      <table className="text-sm w-full">
        <thead>
          <tr className="grid grid-cols-[1fr_1fr_1fr_200px]">
            <th className="text-start">Title</th>
            <th className="text-start">Author</th>
            <th className="text-start">Subject</th>
            <th className="text-start">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {books.results.map((item: Book) => (
            <tr
              key={item.id}
              className="grid grid-cols-[1fr_1fr_1fr_200px] py-2"
            >
              <td>{item.title}</td>
              <td>{item.authors[0].name}</td>
              <td>{item.subjects[0]}</td>
              <td className="flex items-center">
                <Link
                  href={`/dashboard/book-list/${item.id}`}
                  className="bg-slate-300 py-2 px-4 mr-2 rounded-lg block w-fit"
                >
                  <PiEyesFill />
                </Link>
                <button className="bg-red-300 py-2 px-4 rounded-lg">
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } catch (error) {
    console.error(error);
  }
}
