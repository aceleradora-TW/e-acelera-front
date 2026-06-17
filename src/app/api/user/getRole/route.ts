import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req: NextRequest) {
  const header = headers();
  const email = header.get("email");

  console.log(`[getRole] Requisição recebida - Email: ${email}`);

  if (!email) {
    console.error("[getRole] ❌ Email header não fornecido");
    return NextResponse.json(
      { error: "Email header is required" },
      { status: 400 },
    );
  }

  try {
    const baseUrl = process.env.BACKEND_BASE_URL;

    if (!baseUrl) {
      console.error("[getRole] ❌ BACKEND_BASE_URL não está configurado");
      return NextResponse.json({ role: "VIEWER" }, { status: 200 });
    }

    console.log(`[getRole] 🔍 Buscando role no backend: ${baseUrl}/user/role`);
    const response = await fetch(`${baseUrl}/user/role`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        email,
      },
    });

    const responseText = await response.text();
    console.log(
      `[getRole] Backend resposta: ${response.status} - ${responseText}`,
    );

    if (!response.ok) {
      console.error(`[getRole] ❌ Backend retornou erro ${response.status}`);
      return NextResponse.json({ role: "VIEWER" }, { status: 200 });
    }

    const userData = JSON.parse(responseText);
    const finalRole = userData.role || "VIEWER";
    console.log(`[getRole] ✅ Role encontrada: ${finalRole}`);

    return NextResponse.json({ role: finalRole }, { status: 200 });
  } catch (error) {
    console.error("[getRole] ❌ Erro ao buscar role:", error);
    return NextResponse.json({ role: "VIEWER" }, { status: 200 });
  }
}
