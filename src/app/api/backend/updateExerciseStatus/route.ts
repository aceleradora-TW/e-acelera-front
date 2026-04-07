import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { hasProgressToken, isInvalidProgressParam, logProgressDebug } from "@/utils/progress-debug"

export async function PUT(req: NextRequest) {
  const header = headers()

  const topicId = header.get(`topicId`)
  const itemId = header.get(`itemId`)
  const itemStatus = header.get(`itemStatus`)
  const elementType = header.get(`elementType`)
  const themeId = header.get(`themeId`)
  const accessToken = req.cookies.get("next-auth.session-token")?.value || req.cookies.get("__Secure-next-auth.session-token")?.value

  if (isInvalidProgressParam(topicId) || isInvalidProgressParam(itemId)) {
    logProgressDebug("api:update-exercise-status:invalid-param", {
      route: req.nextUrl.pathname,
      topicId,
      itemId,
      itemStatus,
      elementType,
      themeId,
    });
    return NextResponse.json(
      { error: "topicId and itemId are required" },
      { status: 400 }
    )
  }

  if (!hasProgressToken(accessToken)) {
    logProgressDebug("api:update-exercise-status:missing-token", {
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
    const backendUrl = `${baseUrl}/status/${topicId}/item/${itemId}`

    logProgressDebug("api:update-exercise-status:forward-request", {
      route: req.nextUrl.pathname,
      backendUrl,
      topicId,
      itemId,
      hasAccessToken: true,
      itemStatus,
      elementType,
      themeId,
    });

    const response = await fetch(
      backendUrl,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemStatus, elementType, themeId }),
      }
    )

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
    logProgressDebug("api:update-exercise-status:success", {
      route: req.nextUrl.pathname,
      backendUrl,
      topicId,
      itemId,
      responseStatus: response.status,
    });

    return NextResponse.json({ data }, { status: 200 })

  } catch (error) {
    console.error("Error fetching status:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
