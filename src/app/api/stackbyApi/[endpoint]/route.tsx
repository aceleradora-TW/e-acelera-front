import { ApiResponse } from "@/types/type";
import { error } from "console";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { endpoint: string } }) {
    try {
        const apiKey: string = process.env.STACKBY_SECRET_KEY || "";
        console.log(apiKey)
        const uniqueParam: string = `nocache=${Date.now()}`;
        const endpoint: string = params.endpoint;
        const url: string = `https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/${endpoint}?${uniqueParam}`;
        console.log(url)
       
        if (!apiKey) {
            console.log("Não esta definida")
            return NextResponse.json({
                error: "Não esta definida",
                status: 500
            });
        }

        const response: Response = await fetch(url, {
            method: "GET",
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json",
            }
        });
        console.log(response.status);
        if (!response.ok) {
            console.log(response.status);
            console.log(response.statusText);

            return NextResponse.json({
                error: `Erro ao buscar dados da API: ${response.statusText}`,
            }, {
                status: response.status,
            });
        }

        const data: ApiResponse = await response.json();


    } catch (error) {
        console.error(error);
        return NextResponse.json({
            error: `Erro interno de servidor: ${error}`
        }, {
            status: 500
        });
    }
}