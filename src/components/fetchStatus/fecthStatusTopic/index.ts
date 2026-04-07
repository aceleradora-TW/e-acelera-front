import { ApiTopic} from "@/types/typeTopic"
import { useCallback, useEffect, useState  } from "react"
import { useSession } from "next-auth/react"
import { logProgressDebug } from "@/utils/progress-debug"

export const useFetchTopicStatus = (topicId?: string) => {
  const [dataStatus, setDataStatus] = useState<ApiTopic>()
  const { status: authStatus } = useSession()

  const fetchStatus = useCallback(async () => {
    if (!topicId) return

    if (authStatus !== "authenticated") {
      logProgressDebug("fetch-topic-status:skipped-no-session", {
        route: "/api/backend/getTopicExercisesStatus",
        topicId,
        authStatus,
      })
      return
    }

    try {
      const response = await fetch("/api/backend/getTopicExercisesStatus", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          topicId
        }
      })

      if (!response.ok) throw new Error(`Erro ${response.status}`)

      const data = await response.json()
      setDataStatus(data)
    } catch (error) {
      console.error("Erro ao buscar status dos exercícios do tópico: ", error)
    }
  }, [topicId, authStatus])

  useEffect(() => {
    fetchStatus()
  }, [fetchStatus])

  return { dataStatus }
}
