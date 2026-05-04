export async function getTopics(page: number, limit: number) {
  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  const res = await fetch(`/api/topics?${query.toString()}`);
  if (!res.ok) throw new Error("Erro ao buscar tópicos");
  return res.json();
}
