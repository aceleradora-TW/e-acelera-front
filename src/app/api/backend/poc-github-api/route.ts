import { NextRequest, NextResponse } from "next/server";
// import { headers } from "next/headers";

export async function GET() {
    try { 
        const baseUrl = process.env.BACKEND_BASE_URL;
        const url = `${baseUrl}/github/temas`;

        const response = await fetch(url,{
            method: "GET"
        });
        // const res = await fetch("/api/github-files");
        
        const data = await response.json();

        return NextResponse.json({data}, {status: 200})
    } catch (error) {
        console.error("Error fetching temas:", error);
        return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
    );
    }
}
