import { NextRequest, NextResponse } from "next/server";

// Decide the logic
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) return NextResponse.redirect(new URL("/login", request.nextUrl));

  return NextResponse.next();
}

// Decide which route the logic will be applied
export const config = {
  matcher: ["/dashboard"],
};
