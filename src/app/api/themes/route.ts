import { NextResponse } from "next/server";
import { getThemes } from "@/services/themeService"; 
import { Theme } from "@/types/type"; 

export async function GET() {
  try {

    const themesFromAdminJS: Theme[] = await getThemes();
    
    const transformedData = themesFromAdminJS.map(theme => {
      return {
        id: String(theme.id), 
        field: theme 
      };
    });

    return NextResponse.json({ data: transformedData });

  } catch (error: any) {
    console.error("ERRO na API Route /api/themes:", error.message);
    return NextResponse.json(
      { error: `Falha ao buscar dados do serviço: ${error.message}` },
      { status: 500 }
    );
  }
}
