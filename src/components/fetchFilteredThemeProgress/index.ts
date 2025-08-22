import { IdType } from "@/types/type";
import { Theme, TopicProgress } from "@/types/typeTopic";
import { useCallback, useEffect, useState } from "react";

type ThemeProgress = {
  progress: number;
  topics: [{ topicId: string; progress: number }];
};

export const useFetchFilteredThemeProgress = (
  id: string,
  idType: IdType,
  trigger?: number
) => {
  const [progress, setProgress] = useState<
    ThemeProgress | TopicProgress | undefined
  >(undefined);
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  const fetchProgress = useCallback(async () => {
    try {
      const url = `/api/backend/getProgress?id=${id}&idType=${idType}`; 

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(`Erro ${response.status}`);

      const data = await response.json();
      console.log("API retorno:", data);
      setProgress(data.status);
      setTheme(data.theme);
    } catch (error) {
      console.error("Erro ao buscar progresso:", error);
    }
  }, [id, idType]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress, trigger]);

  return { progress, theme };
};
