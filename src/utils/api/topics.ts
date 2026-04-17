export async function getTopics(page: number, limit: number) {
    const res = await fetch(`http://localhost:5002/topics?page=${page}&limit=${limit}`);
    if (!res.ok) throw new Error("Erro ao buscar tópicos");
    return res.json();
}

export async function createTopic(topicData: {
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    alt: string;
    category: "Leveling" | "SelfStudy";
    sequence?: number;
}) {
    const res = await fetch(`/api/topics`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(topicData),
    });
    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.error || "Erro ao criar tópico");
    }
    return res.json();
}

