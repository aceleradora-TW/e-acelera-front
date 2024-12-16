import { NextApiResponse } from "next";
import { ApiResponse } from "@/types/type";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(
    req: NextRequest,
    res: NextApiResponse
) {
    const headersList = headers()
    const { method } = req

    switch (method) {
        case 'GET': {
            const uniqueParam = headersList.get("uniqueparam"); 
            if(!uniqueParam){ 
                return NextResponse.json("Header parameter is missing", { status: 500 });
            }
            if(!process.env.STACKBY_SECRET_KEY || !process.env.STACKBY_BASE_URL){
                return NextResponse.json("Invalid environment variables", { status: 500 });
            }
            const apiKey: string = process.env.STACKBY_SECRET_KEY;
            const baseUrl: string = process.env.STACKBY_BASE_URL;
            
            try {
                const response: Response = await fetch(`${baseUrl}/topics?${uniqueParam}`, {
                    method: "GET",
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                    }
                });

                if (!response.ok) res.status(response.status).json({ "error while fetching data": response.statusText })

                const data: ApiResponse = await response.json();

                return NextResponse.json(data, {
                    status: 200
                });
            } catch {
                return res.status(500).json("error")
            }
        }
        default: {
            res.setHeader("Allow", ["GET"]);
            return res.status(405).json("Method Not Allowed")
        }
    }
}