import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {

  const accessToken = req.cookies.get("next-auth.session-token")?.value || req.cookies.get("__Secure-next-auth.session-token")?.value;

  console.log(accessToken)

  if (!accessToken) {
    return NextResponse.json(
      { error: "accessToken are required" },
      { status: 400 }
    )
  }

  try {
    const baseUrl = process.env.BACKEND_BASE_URL
    const response = await fetch(
      `${baseUrl}/login`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
       
      }
    )
    console.log(`response: ${response}`)
    if (response.status === 401) {
      return NextResponse.json(
        { error: "Unauthorized: Invalid or expired token" },
        { status: 401 }
      )
    }
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Error fetching status: ${response.status} - ${response.statusText}` },
        { status: response.status }
      )
    }

    return NextResponse.json({message: "User created successfully"}, { status: 200 })

  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
