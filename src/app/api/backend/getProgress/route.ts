import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"


export async function GET(req: NextRequest) {
  const header = headers()
  const id = header.get(`id`)
  const idType = header.get(`idType`)
  const accessToken = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    raw: true,
  });


  if (!accessToken) {
      return NextResponse.json(null, { status: 200 });
    }

  if (!id) {
    return NextResponse.json(
      { error: "Id are required" },
      { status: 400 }
    )
  }

  try {
    const baseUrl = process.env.BACKEND_BASE_URL

    const response = await fetch(`${baseUrl}/progress/${id}/${idType}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
      return NextResponse.json(
        { error: `Error fetching prog: ${response.status} - ${response.statusText}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    const statusData = data

    return NextResponse.json(statusData, { status: 200 })
  } catch (error) {
    console.error("Error fetching status:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}