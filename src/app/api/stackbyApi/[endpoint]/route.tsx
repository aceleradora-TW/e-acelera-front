import { ApiResponse } from "@/types/type";
import { BACKEND_BASE_URL } from "@/utils/constants";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { endpoint: string } }
) {
  try {
    const uniqueParam: string = `nocache=${Date.now()}`;
    const endpoint: string = params.endpoint;

    const url: string = `${BACKEND_BASE_URL}/stackby/${endpoint}?${uniqueParam}`;

    const response: Response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error: `Erro ao buscar dados da API: ${response.statusText}`,
        },
        {
          status: response.status,
        }
      );
    }

    const data: ApiResponse = await response.json();
    return NextResponse.json(data, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: `Erro interno de servidor: ${error}`,
      },
      {
        status: 500,
      }
    );
  }
}
