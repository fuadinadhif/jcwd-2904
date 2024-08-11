"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

export default function Breadcrumb() {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter(Boolean);
  const pathList = [{ name: "", url: "/" }];

  let currentPath = "";

  pathArray.forEach((segment) => {
    currentPath += `/${segment}`;
    pathList.push({ name: segment, url: currentPath });
  });

  function formatName(name: string) {
    let result = name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    if (result.length > 11) result = `${result.slice(0, 10)}...`;

    return result;
  }

  return (
    <ul className="flex w-fit justify-center rounded-[50px] border-2 border-gray-500 px-4 py-2 text-gray-500">
      {pathList.map((path, index) => (
        <li key={index} className="flex items-center">
          <Link href={path.url}>
            {formatName(path.name === "" ? "home" : path.name)}
          </Link>
          {index !== pathList.length - 1 ? (
            <span className="mx-2 mt-[2px]">
              <IoIosArrowForward />
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
