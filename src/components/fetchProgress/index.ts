import { IdType } from "@/types/type"
import { TopicProgress } from "@/types/typeTopic"
import { useCallback, useEffect, useState } from "react";
import { getSession } from "next-auth/react"

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
  const [userLogin, setUserLogin] = useState<boolean>(false);
  const fetchProgress = useCallback(async () => {
    
      try {

        const session = await getSession();

        if (!session) {
          setUserLogin(false);
        } else {
          setUserLogin(true);
        }

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
    
    if (userLogin) {
      fetchProgress();
    }
    
  }, [fetchProgress, trigger, userLogin]);

  return { progress };
};