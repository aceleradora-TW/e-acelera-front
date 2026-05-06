import { ThemeCategory } from "@/utils/constants";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const header = headers();
  const categoryHeader = header.get("category");

  const categoryMap: Record<string, ThemeCategory> = {
    Nivelamento: ThemeCategory.LEVELING,
    Autoestudo: ThemeCategory.SELF_STUDY,
  };

  const category = categoryHeader ? categoryMap[categoryHeader] : undefined;

  try {
    const baseUrl = process.env.BACKEND_BASE_URL;

    const url = category
      ? `${baseUrl}/themes?category=${category}`
      : `${baseUrl}/themes`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          error: `Error fetching themes: ${response.status} - ${response.statusText}`,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching themes:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const accessToken =
      req.cookies.get("next-auth.session-token")?.value ||
      req.cookies.get("__Secure-next-auth.session-token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { error: "Authentication token is required" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const baseUrl = process.env.BACKEND_BASE_URL;

    const response = await fetch(`${baseUrl}/themes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      return NextResponse.json(
        {
          error:
            errorData.message ||
            `Error creating theme: ${response.statusText}`,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Error creating theme:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/*Ajustei a rota intermediária para mapear corretamente os valores de categoria enviados pelo front (em português) para os valores esperados pelo backend (enum em inglês). Antes, qualquer valor diferente de "Nivelamento" estava caindo como "SelfStudy", o que podia causar mistura de dados.*/