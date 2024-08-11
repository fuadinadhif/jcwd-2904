"use server";

import { cookies } from "next/headers";

export async function getThemeCookies() {
  const theme = cookies().get("theme")?.value;
  return theme;
}

export async function setThemeCookies(mode: string) {
  cookies().set("theme", mode);
}
