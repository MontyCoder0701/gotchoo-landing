import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const targetQuery = url.searchParams.get("target");
  const targetCookie = request.cookies.get("target-variant");

  if (targetQuery === "ceo" || targetQuery === "ceo-friend") {
    const response = NextResponse.redirect(new URL(url.pathname, request.url));
    response.cookies.set("target-variant", targetQuery, { path: "/" });
    return response;
  }

  if (!targetCookie) {
    const response = NextResponse.next();
    response.cookies.set("target-variant", "ceo", { path: "/" });
    return response;
  }

  return NextResponse.next();
}
