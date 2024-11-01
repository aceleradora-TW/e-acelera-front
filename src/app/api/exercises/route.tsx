import { NextApiRequest, NextApiResponse } from "next";
import { ApiResponse } from "@/types/type";
import { NextResponse } from "next/server";

export async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { method, headers, } = req

    switch (method) {
        case 'GET': {
            try {
                const uniqueParam: string = headers["uniqueparam"] as string

                const apiKey: string = process.env.STACKBY_SECRET_KEY || "";
                const baseUrl: string = process.env.STACKBY_BASE_URL || "";

                const response: Response = await fetch(`${baseUrl}/exercises?${uniqueParam}`, {
                    method: "GET",
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                        "Cache-Control": "no-cache"
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