export async function getTopics(page: number, limit: number) {
  const res = await fetch(`http://localhost:5002/topics?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Erro ao buscar tópicos");
  return res.json();
}
