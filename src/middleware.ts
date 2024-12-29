import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname, search } = req.nextUrl;
  const session = req.auth;
  const redirectUrl = encodeURIComponent(`${pathname}${search}`);

  console.log("middleware session:", session);

  if (!session && !pathname.includes("/guest")) {
    return NextResponse.redirect(
      new URL(`/guest?redirect=${redirectUrl}`, req.nextUrl)
    );
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
