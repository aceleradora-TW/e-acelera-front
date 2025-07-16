import { IdType } from "@/types/type"
import { TopicProgress } from "@/types/typeTopic"
import { useCallback, useEffect, useState } from "react"

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

  const fetchProgress = useCallback(async () =>{
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

export const useBatchThemeProgress = (themeIds: string[], trigger?: number) => {
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});

  useEffect(() => {
    let isMounted = true;
    const fetchAll = async () => {
      const results: Record<string, number> = {};
      await Promise.all(themeIds.map(async (id) => {
        try {
          const response = await fetch('/api/backend/getProgress', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              id,
              'idType': IdType.THEME_ID,
            },
          });
          if (response.ok) {
            const data = await response.json();
            results[id] = data.progress ?? 0;
          } else {
            results[id] = 0;
          }
        } catch {
          results[id] = 0;
        }
      }));
      if (isMounted) setProgressMap(results);
    };
    if (themeIds.length > 0) fetchAll();
    return () => { isMounted = false; };
  }, [themeIds, trigger]);

  return progressMap;
}

export const useBatchTopicProgress = (topicIds: string[], trigger?: number) => {
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});

  useEffect(() => {
    let isMounted = true;
    const fetchAll = async () => {
      const results: Record<string, number> = {};
      topicIds.map(async (id) => {
        try {
          const response = await fetch('/api/backend/getProgress', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              id,
              'idType': IdType.TOPIC_ID,
            },
          });
          if (response.ok) {
            const data = await response.json();
            results[id] = data.progress ?? 0;
          } else {
            results[id] = 0;
          }
        } catch {
          results[id] = 0;
        }
      });
      if (isMounted) setProgressMap(results);
    };
    if (topicIds.length > 0) fetchAll();
    return () => { isMounted = false; };
  }, [topicIds, trigger]);

  return progressMap;
}
