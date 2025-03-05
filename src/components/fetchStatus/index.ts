import { useState, useEffect, useCallback, useRef } from "react";

interface UseStatusProps {
  topicId: string;
  itemId: string;
  pageId?: string;
}

export const useStatus = ({
  topicId,
  itemId,
  pageId,
}: UseStatusProps) => {
  const [status, setStatus] = useState<string>("NotStarted");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const topicIdsRef = useRef<string[] | null>(null);

  const fetchStatus = useCallback(async () => {
    if (!topicId || !itemId) return;
    setIsLoading(true);

    try {
      const response = await fetch(`/api/backend/getExerciseStatus`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          topicId,
          itemId,
        },
      });

      if (!response.ok) throw new Error(`Erro ${response.status}`);

      const data = await response.json();
      const validStatuses = ["NotStarted", "InProgress", "Completed"];

      setStatus(validStatuses.includes(data.status) ? data.status : "NotStarted");

    } catch (error) {
      console.error("Erro ao buscar status:", error);
    } finally {
      setIsLoading(false);
    }
  }, [topicId, itemId]);

  const updateStatus = async (newStatus: string) => {
    setIsLoading(true);
    setStatus(newStatus);

    try {
      const response = await fetch("/api/backend/updateExerciseStatus", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topicId,
          itemId,
          itemStatus: newStatus,
        }),
      });

      if (!response.ok) throw new Error(`Erro ${response.status}`);
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTopicStatus = useCallback(async () => {
    if (!topicId || !pageId) return;
    
    if (JSON.stringify([topicId]) === JSON.stringify(topicIdsRef.current)) {
      return;
    }

    topicIdsRef.current = [topicId];

    try {
      const response = await fetch(`/api/backend/getTopicExercisesStatus`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          topicId,
        },
      });

      if (!response.ok) throw new Error(`Erro ${response.status}`)

      const data = await response.json();

      const matchedItem = data.status.find((element: any) => element.itemId === pageId);
      if (matchedItem) {
        setStatus(matchedItem.itemStatus);
      }
    } catch (error) {
      console.error("Erro ao buscar status dos exercícios do tópico:", error);
    }
  }, [topicId, pageId]);

  useEffect(() => {
    fetchStatus();
    getTopicStatus();
  }, [fetchStatus, getTopicStatus]);

  return { status, isLoading, updateStatus };
};
