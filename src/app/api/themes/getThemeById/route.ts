import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  const header = headers()
  const id = header.get(`id`);

  console.log("ID", id);
  const accessToken = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    raw: true,
  });


  if (!id) {
    return NextResponse.json(
      { error: "Id are required" },
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

    
    const data = await response.json();
    console.log("RESPONSE GET THEME BY ID", data);
    

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching theme:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}