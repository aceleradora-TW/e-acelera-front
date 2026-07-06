import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession();

    if (!session?.user) {
      return NextResponse.json(
        { error: "Não autenticado", authenticated: false },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        authenticated: true,
        email: session.user.email,
        name: session.user.name,
        role: (session.user as any).role || "SEM ROLE",
        image: session.user.image,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("[/api/auth/me] Erro:", error);
    return NextResponse.json(
      { error: "Erro ao buscar informações da sessão" },
      { status: 500 },
    );
  }
}
