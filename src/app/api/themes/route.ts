import { ThemeCategory } from "@/utils/constants";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


//** TODO
// fazer com que essa chamada, se não for passado nenhuma categoria, traga todos os temas */
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
