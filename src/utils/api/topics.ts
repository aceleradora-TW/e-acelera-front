export async function createTopic(topicData: {
    title: string;
    shortDescription: string;
    references: string[];
    themeId: string;
    videoUrl?: string;
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

