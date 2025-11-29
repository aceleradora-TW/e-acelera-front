import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const accessToken = req.cookies.get("next-auth.session-token")?.value || req.cookies.get("__Secure-next-auth.session-token")?.value;
  try {
    const baseUrl = process.env.BACKEND_BASE_URL || process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    if (!baseUrl) {
      return NextResponse.json({ error: "Backend base URL not configured" }, { status: 500 });
    }

    const id = params.id;
    const url = `${baseUrl}/exercises/${id}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
        "Content-Type": "application/json",
      },
    });

    if (response.status === 401) {
      return NextResponse.json({ error: "Unauthorized: Invalid or expired token" }, { status: 401 });
    }

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      // Try to parse JSON error, otherwise return text
      try {
        const json = JSON.parse(text || "{}");
        return NextResponse.json(json, { status: response.status });
      } catch {
        return NextResponse.json({ error: `Error fetching exercise: ${response.statusText}` }, { status: response.status });
      }
    }

    const data = await response.json();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching exercise:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
