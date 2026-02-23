export async function getThemes(page: number, limit: number) {
  const res = await fetch(`http://localhost:5002/themes?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Erro ao buscar temas");
  return res.json();
}
