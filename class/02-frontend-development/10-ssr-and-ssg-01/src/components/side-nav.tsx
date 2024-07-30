"use client";

import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const dashboardMenu = [
    { name: "Home", href: "/dashboard" },
    { name: "Reader List", href: "/dashboard/reader-list" },
    { name: "Book List", href: "/dashboard/book-list" },
  ];
  const pathName = usePathname();

  return (
    <aside className="bg-slate-400 p-4 rounded-lg w-48">
      <Logo className="max-w-24 mx-auto mb-5" />

      <nav>
        <ul className="grid gap-2">
          {dashboardMenu.map((menu, index) => (
            <li key={index}>
              <Link
                href={menu.href}
                className={`p-2 rounded-lg block ${
                  pathName === menu.href ? "bg-slate-50" : "bg-slate-300"
                }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
