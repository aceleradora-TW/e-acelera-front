import { ThemeCategory } from "@/utils/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const rawCategory = searchParams.get("category")?.trim();
    const page = searchParams.get("page")?.trim();
    const limit = searchParams.get("limit")?.trim();

    const mappedCategory = rawCategory === "Nivelamento"
      ? ThemeCategory.LEVELING
      : rawCategory === "Autoestudo"
        ? ThemeCategory.SELF_STUDY
        : rawCategory;

    const backendQuery = new URLSearchParams();
    if (mappedCategory) backendQuery.set("category", mappedCategory);
    if (page) backendQuery.set("page", page);
    if (limit) backendQuery.set("limit", limit);

    const baseUrl = process.env.BACKEND_BASE_URL;
    const backendUrl = new URL("/themes", baseUrl);
    const queryString = backendQuery.toString();
    if (queryString) {
      backendUrl.search = queryString;
    }

    const response = await fetch(backendUrl.toString(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Error fetching status: ${response.status} - ${response.statusText}` },
        { status: response.status }
      )
    }
    const payload = await response.json();
    return NextResponse.json(payload, { status: response.status });
  } catch (error) {
    console.error("Error fetching status:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

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

    const response = await fetch(`${baseUrl}/themes`, {
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
        { error: errorData.message || `Error creating theme: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error creating theme:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
