import { BACKEND_BASE_URL } from "../constants";

//** TODO
// mover essa função da pasta utils para o proxy do next: /src/app/api/themes */
export async function getThemes(page: number = 1, limit: number = 10) {
  const res = await fetch(`${BACKEND_BASE_URL}/themes?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Erro ao buscar temas");
  return res.json();
}
