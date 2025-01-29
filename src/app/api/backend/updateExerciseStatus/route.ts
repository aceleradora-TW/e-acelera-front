import { headers } from "next/headers"
import { NextResponse } from "next/server"

export async function PUT(req: Request) {
  const header = headers()

  const topicId = header.get(`topicId`)
  const itemId = header.get(`itemId`)
  const itemStatus = header.get(`itemStatus`)
  const accessToken = header.get(`Authorization`)

  if (!topicId || !itemId) {
    return NextResponse.json(
      { error: "topicId and itemId are required" },
      { status: 400 }
    )
  }

  try {
    const baseUrl = process.env.BACKEND_BASE_URL
    const response = await fetch(
      `${baseUrl}/topic/${topicId}/item/${itemId}/status`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemStatus: itemStatus }),
      }
    )

    if (!response.ok) {
      throw new Error(
        `Error fetching status: ${response.status} - ${response.statusText}`
      )
    }

    const data = await response.json()
    return NextResponse.json({ data }, { status: 200 })

  } catch (error) {
    console.error("Error fetching status:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
