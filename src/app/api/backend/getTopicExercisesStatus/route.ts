import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const header = headers()
  const topicId = header.get(`topicId`)
  const accessToken = req.cookies.get("next-auth.session-token")?.value || req.cookies.get("__Secure-next-auth.session-token")?.value;

  if (!topicId) {
    return NextResponse.json(
      { error: "topicId are required" },
      { status: 400 }
    )
  }

  if (!accessToken) {
    return NextResponse.json(
      { error: "accessToken are required" },
      { status: 400 }
    )
  }

  try {
    const baseUrl = process.env.BACKEND_BASE_URL
    const response = await fetch(`${baseUrl}/topic/${topicId}/item`, {
      method: "GET",
      headers: {
        Origin: process.env.NEXTAUTH_URL!,
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
    
    if (response.status === 403) {
      return NextResponse.json(
        { error: "Forbidden: You don’t have permission to access this resource" },
        { status: 403 }
      )
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: `Error fetching status: ${response.status} - ${response.statusText}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    const statusData = data

    return NextResponse.json({ status: statusData }, { status: 200 })
  } catch (error) {
    console.error("Error fetching status:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
