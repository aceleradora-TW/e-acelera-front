import { NextRequest, NextResponse } from "next/server";

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
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData || `Error creating topic: ${response.statusText}` },
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


export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    try {

        const searchParams = req.nextUrl.searchParams;

        const page = searchParams.get("page")?.trim();
        const limit = searchParams.get("limit")?.trim();
        const sortBy = searchParams.get("sortBy")?.trim();
        const sortOrder = searchParams.get("sortOrder")?.trim();

        const query = new URLSearchParams();

        if (page) query.set("page", page);
        if (limit) query.set("limit", limit);
        if (sortBy) query.set("sortBy", sortBy);
        if (sortOrder) query.set("sortOrder", sortOrder);

        const baseUrl = process.env.BACKEND_BASE_URL;

        const backendUrl = new URL("/topics", baseUrl);

        if (query.toString()) {
            backendUrl.search = query.toString();
        }

        const response = await fetch(backendUrl.toString(), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            return NextResponse.json(
                { error: `Error fetching topics: ${response.status}` },
                { status: response.status }
            );
        }
        const data = await response.json();
        return NextResponse.json({ data }, { status: 200 })
    } catch (error) {
        console.error("Error fetching topics:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}
