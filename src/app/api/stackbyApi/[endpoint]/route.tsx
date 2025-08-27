import { ApiResponse } from "@/types/type";
import { BACKEND_BASE_URL } from "@/utils/constants";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(
  req: Request,
  { params }: { params: { endpoint: string } }
) {
  try {
    const header = headers();
    const uniqueParam: string = `nocache=${Date.now()}`;
    const endpoint: string = params.endpoint;
    const filterName = header.get("filterName") ?? "";
    const field = header.get("field") ?? "";
    const filterValue = header.get("filterValue") ?? "";
    const hasFilters = !!filterName && !!field && !!filterValue;

    const url: string = `${BACKEND_BASE_URL}/stackby/${endpoint}?${uniqueParam}&${hasFilters ? `filterName=${filterName}&field=${field}&filterValue=${filterValue}` : ""}`;
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
    console.log("Internal server error:", error);
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
