import { ThemeCategory } from "@/utils/constants";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const header = headers();
  const category = header.get("category") === "Nivelamento" ?
            ThemeCategory.LEVELING
          : ThemeCategory.SELF_STUDY;
  try {
    const baseUrl = process.env.BACKEND_BASE_URL
    const response = await fetch(`${baseUrl}/themes?category=${category}`, {
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
    const data = await response.json();
    return NextResponse.json({data}, { status: 200 })
  } catch (error) {
    console.error("Error fetching status:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
