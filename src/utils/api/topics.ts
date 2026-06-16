export async function createTopic(topicData: {
  title: string;
  description: string;
  shortDescription: string;
  references: string[];
  themeId: string;
  videoUrl?: string;
}) {
  const res = await fetch("/api/topics", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(topicData),
  });
  if (!res.ok) {

    if (res.status === 403) {
      throw new Error("Você não tem permissão para criar ou modificar tópicos.");
    }
    const error = await res.json().catch();
    throw new Error(error.error?.message || "Erro ao criar tópico");
  }
  return res.json();
}

export async function getTopics(page: number, limit: number) {
  const query = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  const res = await fetch(`/api/topics?${query.toString()}`);
  if (!res.ok) throw new Error("Erro ao buscar tópicos");
  return res.json();
}
