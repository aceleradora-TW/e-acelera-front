import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const header = headers();
  const id = header.get("id");

  if (!id) {
    return NextResponse.json({ error: "Id is required" }, { status: 400 });
  }

  try {
    const baseUrl = process.env.BACKEND_BASE_URL;

    const response = await fetch(`${baseUrl}/topics/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseText = await response.text();
    const payload = responseText ? JSON.parse(responseText) : null;

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            payload?.error ||
            payload?.message ||
            response.statusText ||
            "Error fetching topic",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({ data: payload });
  } catch (error) {
    console.error("Error fetching topic:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}