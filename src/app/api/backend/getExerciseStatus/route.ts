import { headers } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const header = headers()

  const topicId = header.get(`topicId`)
  const itemId = header.get(`itemId`)
  const accessToken = header.get(`Authorization`)

  if (!topicId || !itemId) {
    return NextResponse.json(
      { error: "topicId and itemId are required" },
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
    const response = await fetch(`${baseUrl}/topic/${topicId}/item/${itemId}`, {
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
        { error: `Error fetching status: ${response.status} - ${response.statusText}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    const statusData = data[0].itemStatus

    return NextResponse.json({ status: statusData }, { status: 200 })
  } catch (error) {
    console.error("Error fetching status:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
