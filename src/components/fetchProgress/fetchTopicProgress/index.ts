import { IdType } from "@/types/type"
import { TopicProgress } from "@/types/typeTopic"
import { useEffect, useState } from "react"

export const useFetchTopicProgress = (topicId: string) => {
  const [topicProgress, setTopicProgress] = useState<TopicProgress>({
    status: {
      progress: 0
    },
  });

  async function fetchStatus() {
      try {
        const url = `/api/backend/getTopicProgress`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            topicId,
            idType: IdType.TOPIC_ID
          }
        });

        if (!response.ok) throw new Error(`Erro ${response.status}`);

        const data = await response.json();
        setTopicProgress(data);
      } catch (error) {
        console.error("Erro ao buscar progresso:", error);
      }
    }

  useEffect(() => {
    fetchStatus();
  }, [topicId]);

  return { topicProgress };
};
