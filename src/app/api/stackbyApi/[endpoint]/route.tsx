import { ApiResponse } from "@/types/type";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { endpoint: string } }) {
    try {
        const apiKey: string = process.env.STACKBY_SECRET_KEY || "";
        const uniqueParam: string = `nocache=${Date.now()}`;
        const endpoint: string = params.endpoint;
        const url: string = `https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/${endpoint}?${uniqueParam}`;

        const response: Response = await fetch(url, {
            method: "GET",
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            return NextResponse.json({
                error: `Erro ao buscar dados da API: ${response.statusText}`
            }, {
                status: response.status
            });
        }

        const data: ApiResponse = await response.json();
        
        return NextResponse.json(data, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            error: `Erro interno de servidor: ${error}`
        }, {
            status: 500
        });
    }
}