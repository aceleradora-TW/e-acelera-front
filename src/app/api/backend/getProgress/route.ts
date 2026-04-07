import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { hasProgressToken, isInvalidProgressParam, logProgressDebug } from "@/utils/progress-debug"


export async function GET(req: NextRequest) {
  const header = headers()
  const id = header.get(`id`)
  const idType = header.get(`idType`)
  const accessToken = req.cookies.get("next-auth.session-token")?.value || req.cookies.get("__Secure-next-auth.session-token")?.value;

  if (isInvalidProgressParam(id) || isInvalidProgressParam(idType)) {
    logProgressDebug("api:get-progress:invalid-param", {
      route: req.nextUrl.pathname,
      id,
      idType,
    });
    return NextResponse.json(
      { error: "id and idType are required" },
      { status: 400 }
    )
  }


  if (!hasProgressToken(accessToken)) {
      logProgressDebug("api:get-progress:missing-token", {
        route: req.nextUrl.pathname,
        id,
        idType,
        hasAccessToken: false,
      });
      return NextResponse.json(null, { status: 200 });
    }

  try {
    const baseUrl = process.env.BACKEND_BASE_URL
    const backendUrl = `${baseUrl}/progress/${id}/${idType}`

    logProgressDebug("api:get-progress:forward-request", {
      route: req.nextUrl.pathname,
      backendUrl,
      id,
      idType,
      hasAccessToken: true,
    });

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
        { error: `Error fetching prog: ${response.status} - ${response.statusText}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    const statusData = data

    logProgressDebug("api:get-progress:success", {
      route: req.nextUrl.pathname,
      backendUrl,
      id,
      idType,
      responseStatus: response.status,
    });

    return NextResponse.json(statusData, { status: 200 })
  } catch (error) {
    console.error("Error fetching status:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}