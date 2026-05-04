import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { hasProgressToken, isInvalidProgressParam, logProgressDebug } from "@/utils/progress-debug"

export async function GET(req: NextRequest) {
  const header = headers()
  const topicId = header.get(`topicId`)
  const itemId = header.get(`itemId`)
  const accessToken = req.cookies.get("next-auth.session-token")?.value || req.cookies.get("__Secure-next-auth.session-token")?.value;

  if (isInvalidProgressParam(topicId)) {
    logProgressDebug("api:get-topic-exercises-status:invalid-topic", {
      route: req.nextUrl.pathname,
      topicId,
      itemId,
    });
    return NextResponse.json(
      { error: "topicId are required" },
      { status: 400 }
    )
  }

  if (!hasProgressToken(accessToken)) {
    logProgressDebug("api:get-topic-exercises-status:missing-token", {
      route: req.nextUrl.pathname,
      topicId,
      itemId,
      hasAccessToken: false,
    });
    return NextResponse.json(
      { error: "accessToken are required" },
      { status: 400 }
    )
  }

  try {
    const baseUrl = process.env.BACKEND_BASE_URL
    const backendUrl = `${baseUrl}/status/${topicId}`

    logProgressDebug("api:get-topic-exercises-status:forward-request", {
      route: req.nextUrl.pathname,
      backendUrl,
      topicId,
      itemId,
      hasAccessToken: true,
    })

    const response = await fetch(backendUrl, {
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
    const statusData = data

    logProgressDebug("api:get-topic-exercises-status:success", {
      route: req.nextUrl.pathname,
      backendUrl,
      topicId,
      itemId,
      responseStatus: response.status,
    })

    return NextResponse.json({ status: statusData }, { status: 200 })
  } catch (error) {
    console.error("Error fetching status:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
