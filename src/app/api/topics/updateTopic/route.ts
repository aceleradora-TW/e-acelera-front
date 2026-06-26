import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function PATCH(req: NextRequest) {
  const header = headers();
  const id = header.get("id");

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
    );
  }

  try {
    const body = await req.json();
    const baseUrl = process.env.BACKEND_BASE_URL;

    const response = await fetch(`${baseUrl}/topics/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();
    const payload = responseText ? JSON.parse(responseText) : null;

    if (!response.ok) {
      console.error("Error updating topic from backend:", {
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
            "Error updating topic",
        },
        { status: response.status }
      );
    }

    return NextResponse.json({ data: payload });
  } catch (error) {
    console.error("Error updating topic:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}