import { BACKEND_BASE_URL } from "../constants";

//** TODO
// mover essa função da pasta utils para o proxy do next: /src/app/api/themes */
export async function getThemes(page: number = 1, limit: number = 10) {
  const res = await fetch(`${BACKEND_BASE_URL}/themes?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Erro ao buscar temas");
  return res.json();
}

export async function createTheme(themeData: {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  alt: string;
  category: "Leveling" | "SelfStudy";
  sequence?: number;
}) {
  const res = await fetch(`/api/themes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(themeData),
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.error || "Erro ao criar tema");
  }
  return res.json();
}
