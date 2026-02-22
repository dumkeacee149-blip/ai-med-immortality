import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, AUTH_HEADER, makeCookieValue, verifyCookieValue } from "@/lib/auth";

const PUBLIC_PATHS = ["/login", "/api/auth", "/favicon.ico"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const cookieValue = req.cookies.get(AUTH_COOKIE)?.value;
  const okCookie = verifyCookieValue(cookieValue);

  const headerToken = req.headers.get(AUTH_HEADER) || "";
  // Header token is treated as the same shared secret.
  const okHeader = headerToken.length > 0 && headerToken === (process.env.AI_ACCESS_TOKEN || "");

  if (okCookie || okHeader) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = "/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
