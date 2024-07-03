import { NextResponse } from "next/server";


export async function GET(req: Request, { params }: {params: {endpoint : string}}) {
    const apiKey = process.env.STACKBY_SECRET_KEY || "";
    const uniqueParam = `nocache=${Date.now()}`;
    const endpoint = params.endpoint
    const url = `https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/${endpoint}?${uniqueParam}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
        }
    });

    const data = await response.json();
    return NextResponse.json(data);
}