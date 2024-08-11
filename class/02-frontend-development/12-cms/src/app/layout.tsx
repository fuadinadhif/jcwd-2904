import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import Logo from "@/components/logo";
import BreadCrumb from "@/components/bread-crumb";
import ThemeButton from "@/components/theme-button";
import { getThemeCookies } from "@/helpers/theme";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Collector",
  description: "Collection of the masterpiece created by the greatest human",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getThemeCookies();

  return (
    <html lang="en" className={theme}>
      <body
        className={`${montserrat.className} flex min-h-screen flex-col items-center bg-white p-2 text-white dark:bg-black`}
      >
        <header className="flex flex-col items-center pb-44 pt-20">
          <Logo />
          <div className="mt-4 flex items-center gap-4">
            <BreadCrumb />
            <ThemeButton />
          </div>
        </header>
        <main className="mt-auto w-full">{children}</main>
      </body>
    </html>
  );
}
