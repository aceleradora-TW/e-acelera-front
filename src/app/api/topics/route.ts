import { NextRequest, NextResponse } from "next/server";
// import { headers } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const accessToken = req.cookies.get("next-auth.session-token")?.value ||
                        req.cookies.get("__Secure-next-auth.session-token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { error: "Authentication token is required" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const baseUrl = process.env.BACKEND_BASE_URL;

    const response = await fetch(`${baseUrl}/topics`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || `Error creating topic: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error creating topic:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
