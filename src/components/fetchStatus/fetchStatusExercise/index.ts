import { DetailingTopicContext } from "@/context";
import { ElementType } from "@/types/typeTopic";
import { useCallback, useContext, useEffect, useState } from "react";
import { isInvalidProgressParam, logProgressDebug } from "@/utils/progress-debug";

interface UseStatusProps {
  topicId: string;
  itemId: string;
  themeId: string;
  hasSessionToken: boolean;
}

export const useStatus = ({
  themeId,
  topicId,
  itemId,
  hasSessionToken,
}: UseStatusProps) => {
  const [status, setStatus] = useState<string>("NotStarted");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const { showStatusErrorModal } = useContext(DetailingTopicContext);

  const fetchStatus = useCallback(async () => {
    if (!hasSessionToken) {
      logProgressDebug("fetch-exercise-status:skipped-no-session", {
        route: "/api/backend/getExerciseStatus",
        topicId,
        itemId,
        hasSessionToken,
      });
      return;
    }

    if (isInvalidProgressParam(topicId) || isInvalidProgressParam(itemId)) {
      logProgressDebug("fetch-exercise-status:skipped-invalid-param", {
        route: "/api/backend/getExerciseStatus",
        topicId,
        itemId,
        hasSessionToken,
      });
      return;
    }

    setIsLoading(true);
    try {
      logProgressDebug("fetch-exercise-status:start", {
        route: "/api/backend/getExerciseStatus",
        topicId,
        itemId,
        hasSessionToken,
        isLoading: true,
      });

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
      logProgressDebug("fetch-exercise-status:success", {
        route: "/api/backend/getExerciseStatus",
        topicId,
        itemId,
        responseStatus: response.status,
      });
    } catch (error) {
      console.error("Erro ao buscar status:", error);
      setHasError(true);
      logProgressDebug("fetch-exercise-status:error", {
        route: "/api/backend/getExerciseStatus",
        topicId,
        itemId,
        message: error instanceof Error ? error.message : "unknown-error",
      });
    } finally {
      setIsLoading(false);
    }
  }, [topicId, itemId, hasSessionToken]);

  const updateStatus = async (newStatus: string, elementType: ElementType): Promise<boolean> => {
    if (!hasSessionToken) {
      logProgressDebug("update-exercise-status:skipped-no-session", {
        route: "/api/backend/updateExerciseStatus",
        topicId,
        itemId,
        hasSessionToken,
        newStatus,
        elementType,
      });
      return false;
    }

    if (isInvalidProgressParam(topicId) || isInvalidProgressParam(itemId)) {
      logProgressDebug("update-exercise-status:skipped-invalid-param", {
        route: "/api/backend/updateExerciseStatus",
        topicId,
        itemId,
        hasSessionToken,
        newStatus,
        elementType,
      });
      return false;
    }

    setIsLoading(true);
    try {
      logProgressDebug("update-exercise-status:start", {
        route: "/api/backend/updateExerciseStatus",
        topicId,
        itemId,
        hasSessionToken,
        itemStatus: newStatus,
        elementType,
      });

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
      logProgressDebug("update-exercise-status:success", {
        route: "/api/backend/updateExerciseStatus",
        topicId,
        itemId,
        responseStatus: response.status,
      });
      return true;

    } catch (error) {
      setHasError(true);
      showStatusErrorModal();
      console.error("Erro ao atualizar status:", error);
      logProgressDebug("update-exercise-status:error", {
        route: "/api/backend/updateExerciseStatus",
        topicId,
        itemId,
        message: error instanceof Error ? error.message : "unknown-error",
      });
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
