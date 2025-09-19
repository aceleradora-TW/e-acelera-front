import { IdType } from "@/types/type"
import { TopicProgress } from "@/types/typeTopic"
import { useCallback, useEffect, useState } from "react";


type ThemeProgress = {
  progress: number;
  topics: [
      {
        topicId: string;
        progress: number;
      }
    ]
}

export const useFetchProgress = (id: string, idType: IdType, trigger?: number) => {
  const [progress, setProgress] = useState<ThemeProgress | TopicProgress | undefined>(undefined);
  const fetchProgress = useCallback(async () => {
    
      try {
        const url = `/api/backend/getProgress`;
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            id,
            idType,
          }
        });

        if (!response.ok) throw new Error(`Erro ${response.status}`);

        const data = await response.json();
        setProgress(data);
      } catch (error) {
        console.error("Erro ao buscar progresso:", error);
      }
    }, [id, idType]);

  useEffect(() => {      
      fetchProgress();
  }, [fetchProgress, trigger]);
  return { progress };
};