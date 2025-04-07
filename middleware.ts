import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const target = url.searchParams.get("target");

  if (target === "ceo" || target === "ceo-friend") {
    const response = NextResponse.redirect(new URL(`/${target}`, request.url));
    response.cookies.set("target-variant", target, { path: "/" });
    return response;
  }

  return NextResponse.next();
}
