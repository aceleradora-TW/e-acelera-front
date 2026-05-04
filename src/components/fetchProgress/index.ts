import { IdType } from "@/types/type"
import { TopicProgress } from "@/types/typeTopic"
import { useCallback, useEffect, useState } from "react";
import { isInvalidProgressParam, logProgressDebug } from "@/utils/progress-debug";


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
      if (isInvalidProgressParam(id)) {
        logProgressDebug("fetch-progress:skipped-invalid-id", {
          route: "/api/backend/getProgress",
          id,
          idType,
          trigger,
        });
        return;
      }
    
      try {
        const url = `/api/backend/getProgress`;
        logProgressDebug("fetch-progress:start", {
          route: url,
          id,
          idType,
          trigger,
        });

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
        logProgressDebug("fetch-progress:success", {
          route: url,
          id,
          idType,
          responseStatus: response.status,
        });
      } catch (error) {
        console.error("Erro ao buscar progresso:", error);
        logProgressDebug("fetch-progress:error", {
          route: "/api/backend/getProgress",
          id,
          idType,
          message: error instanceof Error ? error.message : "unknown-error",
        });
      }
    }, [id, idType]);

  useEffect(() => {      
      fetchProgress();
  }, [fetchProgress, trigger]);
  return { progress };
};