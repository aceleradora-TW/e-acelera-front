import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  const header = headers()
  const id = header.get(`id`);

  const accessToken = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    raw: true,
  });

  if (!accessToken) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  if (!id) {
    return NextResponse.json(
      { error: "Id is required" },
      { status: 400 }
    )
  }

  try {
    const baseUrl = process.env.BACKEND_BASE_URL;

    const response = await fetch(`${baseUrl}/themes/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    const responseText = await response.text();
    const payload = responseText ? JSON.parse(responseText) : null;
    if (!response.ok) {
      console.error("Error fetching theme from backend:", {
        status: response.status,
        statusText: response.statusText,
        payload,
      });
      return NextResponse.json(
        {
          error:
            payload?.error ||
            payload?.message ||
            response.statusText ||
            "Error fetching theme",
        },
        { status: response.status }
      );
    }
    console.log("RESPONSE GET THEME BY ID", payload);
    return NextResponse.json({ data: payload });
  } catch (error) {
    console.error("Error fetching theme:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}