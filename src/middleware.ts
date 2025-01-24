import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const sessionToken =
    request.cookies.get("next-auth.session-token") ||
    request.cookies.get("__Secure-next-auth.session-token")

  const callbackUrl =
    new URLSearchParams(request.nextUrl.search).get("callbackUrl") || "/"

  const parsedUrl = new URL(callbackUrl, request.url) 

  if (request.nextUrl.pathname.startsWith("/login") && sessionToken) {
    return NextResponse.redirect(parsedUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/login"],
}
