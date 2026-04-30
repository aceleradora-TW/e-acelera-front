import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {

        const searchParams = req.nextUrl.searchParams;

        const page = searchParams.get("page")?.trim();
        const limit = searchParams.get("limit")?.trim();

        const query = new URLSearchParams();

        if (page) query.set("page", page);
        if (limit) query.set("limit", limit);

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