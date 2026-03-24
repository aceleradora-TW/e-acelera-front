import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"
import { BACKEND_BASE_URL } from "./utils/constants"

export async function middleware(request: NextRequest) {
  const sessionToken = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
    raw: true,
  })

    const callbackUrl =
    new URLSearchParams(request.nextUrl.search).get("callbackUrl") || "/"

    const parsedUrl = new URL(callbackUrl, request.url) 

  if (request.nextUrl.pathname.startsWith("/login") && sessionToken) {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${sessionToken}`,
          "Content-Type": "application/json",
        },
      })

      if (response.status === 401) {
        return NextResponse.json(
          { error: "Unauthorized: Invalid or expired token" },
          { status: 401 }
        )
      } 
      
      if (!response.ok) {
        return NextResponse.json({ error: "Failed to register user" }, { status: response.status })
      }

      return NextResponse.redirect(new URL(parsedUrl, request.url))
    } catch (error) {
      console.error("Internal server error: ", error)
      return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/login"],
}
