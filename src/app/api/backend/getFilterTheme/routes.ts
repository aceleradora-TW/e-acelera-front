import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest) {
  const header = headers();
  const themeType = header.get("themeType");
  const accessToken =
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "accessToken are required" },
      { status: 400 }
    );
  }

  try {
    const baseUrl = process.env.BACKEND_BASE_URL;
    let url = `${baseUrl}/themes`;

    if (themeType) {
      url += `?themeType=${themeType}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    if (response.status === 401) {
      return NextResponse.json(
        { error: "Unauthorized: Invalid or expired token" },
        { status: 401 }
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: `Error fetching themes: ${response.status} - ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching themes:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}