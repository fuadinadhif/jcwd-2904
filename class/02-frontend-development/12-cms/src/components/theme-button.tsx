"use client";

import { useEffect, useState } from "react";

import { getThemeCookies, setThemeCookies } from "@/helpers/theme";

export default function ThemeButton() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    getThemeCookies().then((data) => {
      if (!data) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setTheme("dark");
          setThemeCookies("dark");
        } else {
          setTheme("light");
          setThemeCookies("light");
        }
      } else {
        setTheme(data);
      }
    });
  }, []);

  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (theme) {
      html.classList.remove(theme === "dark" ? "light" : "dark");
      html.classList.add(theme);
    }
  }, [theme]);

  function handleClick() {
    const currentTheme = theme === "light" ? "dark" : "light";

    setTheme(currentTheme);
    setThemeCookies(currentTheme);
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-[50px] border-2 border-gray-500 px-4 py-2 text-gray-500"
    >
      {theme ? (theme === "light" ? "🌞" : "🌙") : "..."}
    </button>
  );
}
