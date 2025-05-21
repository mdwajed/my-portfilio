import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  console.log({ token });
  const { pathname } = req.nextUrl;
  console.log(pathname);
  // Redirect to login if not authenticated
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Optional: Token expiration check
  const isExpired = token?.exp && Date.now() / 1000 > token.exp;
  if (isExpired) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  console.log(isExpired);
  // Role check
  if (pathname.startsWith("/dashboard") && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorize", req.url));
  }

  // Prevent logged-in user from visiting login page
  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};
