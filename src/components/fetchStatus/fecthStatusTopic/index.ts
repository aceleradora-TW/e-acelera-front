import { ApiTopic } from "@/types/typesTopic";
import { useState, useEffect } from "react";

export const useFetchTopicStatus = (topicId?: string) => {
  const [dataStatus, setDataStatus] = useState<ApiTopic>(); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!topicId) return;

    const fetchStatus = async () => {
      try {
        const response = await fetch("/api/backend/getTopicExercisesStatus", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            topicId,
          },
        });

        if (!response.ok) throw new Error(`Erro ${response.status}`);

        const data = await response.json();
        setDataStatus(data); 
      } catch (error) {
        setError("Erro ao buscar status");
        console.error("Erro ao buscar status dos exercícios do tópico:", error);
      }
    };

    fetchStatus();
  }, [topicId]);

  return { dataStatus, error };
};
