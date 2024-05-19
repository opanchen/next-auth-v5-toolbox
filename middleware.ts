import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("auth/login", nextUrl));
  }

  return;

  //   if (!req.auth) {
  //     const url = req.url.replace(req.nextUrl.pathname, "/login");
  //     return Response.redirect(url);
  //   }
});

export const config = {
  //   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // from Auth.js docs
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"], // from Clerk docs
};
