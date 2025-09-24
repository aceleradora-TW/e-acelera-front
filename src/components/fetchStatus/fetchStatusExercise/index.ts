import { DetailingTopicContext } from "@/context";
import { ElementType } from "@/types/typeTopic";
import { useCallback, useContext, useEffect, useState } from "react";

interface UseStatusProps {
  topicId: string;
  itemId: string;
  themeId: string;
}

export const useStatus = ({ themeId, topicId, itemId }: UseStatusProps) => {
  const [status, setStatus] = useState<string>("NotStarted");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const { showStatusErrorModal } = useContext(DetailingTopicContext);

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
      setHasError(false);
    } catch (error) {
      console.error("Erro ao buscar status:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [topicId, itemId]);

  const updateStatus = async (newStatus: string, elementType: ElementType): Promise<boolean> => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/backend/updateExerciseStatus", {
        method: "PUT",
        headers: {
          topicId,
          itemId,
          itemStatus: newStatus,
          elementType,
          themeId,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(`Erro ${response.status}`);

      setStatus(newStatus);
      setHasError(false);
      return true;

    } catch (error) {
      setHasError(true);
      showStatusErrorModal();
      console.error("Erro ao atualizar status:", error);
      return false;

    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  return { status, isLoading, updateStatus, hasError };
};
