import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { BACKEND_BASE_URL } from "./utils/constants";

async function isSessionValid(sessionToken: string) {
  try {
    const response = await fetch(`${BACKEND_BASE_URL}/login`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sessionToken}`,
        "Content-Type": "application/json",
      },
    });

    return response.ok;
  } catch (error) {
    console.error("Internal server error: ", error);
    return false;
  }
}

function redirectToLogin(request: NextRequest) {
  const callbackUrl = `${request.nextUrl.pathname}${request.nextUrl.search}`;
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("callbackUrl", callbackUrl);
  return NextResponse.redirect(loginUrl);
}

export async function middleware(request: NextRequest) {
  const sessionToken =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token");

  const isLoginRoute = request.nextUrl.pathname.startsWith("/login");
  const isCmsRoute = request.nextUrl.pathname.startsWith("/cms");
  const isAccessDeniedRoute = request.nextUrl.pathname === "/acesso-negado";

  if (isAccessDeniedRoute && !sessionToken) {
    return redirectToLogin(request);
  }

  if (isCmsRoute) {
    if (!sessionToken) {
      return redirectToLogin(request);
    }

    const validSession = await isSessionValid(sessionToken.value);
    if (!validSession) {
      return redirectToLogin(request);
    }

    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    const userRole = (token?.role as string) || "VIEWER";
    const allowedRoles = ["ADMIN", "EDITOR"];

    if (!allowedRoles.includes(userRole)) {
      console.warn(
        `[403] Acesso negado: role ${userRole} não autorizado para ${request.nextUrl.pathname}`,
      );
      return NextResponse.redirect(new URL("/acesso-negado", request.url));
    }
  }

  if (isLoginRoute && sessionToken) {
    const callbackUrl = request.nextUrl.searchParams.get("callbackUrl") || "/";
    const validSession = await isSessionValid(sessionToken.value);

    if (validSession) {
      return NextResponse.redirect(new URL(callbackUrl, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/cms/:path*", "/acesso-negado"],
};
