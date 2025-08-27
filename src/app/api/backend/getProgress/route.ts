import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const ids = req.nextUrl.searchParams.get("ids");
  const idType = req.nextUrl.searchParams.get("idType");
  const accessToken =
    req.cookies.get("next-auth.session-token")?.value ||
    req.cookies.get("__Secure-next-auth.session-token")?.value;

  if (!accessToken) {
    return NextResponse.json(
      { error: "accessToken are required" },
      { status: 400 }
    );
  }

  if (!ids || !idType) {
    return NextResponse.json(
      { error: "IDs and ID Type are required" },
      { status: 400 }
    );
  }

  try {
    const baseUrl = process.env.BACKEND_BASE_URL;
    const response = await fetch(
      `${baseUrl}/themes/progress?ids=${ids}&idType=${idType}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 401) {
      return NextResponse.json(
        { error: "Unauthorized: Invalid or expired token" },
        { status: 401 }
      );
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: `Error fetching status: ${response.status} - ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const progressMap: { [themeId: string]: number } = {};
    data.forEach((item: any) => {
      progressMap[item.themeId] = item.progress;
    });

    return NextResponse.json({ status: progressMap }, { status: 200 });
  } catch (error) {
    console.error("Error fetching status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
