import { ApiTopic } from "@/types/typeTopic"
import { useCallback, useEffect, useState  } from "react"

export const useFetchTopicProgress = (topicId: string, _totalItens?: number) => {
  const [topicProgress, setTopicProgress] = useState<ApiTopic>()

  const fetchStatus = useCallback(async () => {
    try {
      const response = await fetch(`/api/backend/getTopicProgress`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          topicId
        }
      })

      if (!response.ok) throw new Error(`Erro ${response.status}`)

      const data = await response.json()
      setTopicProgress(data)
    } catch (error) {
      console.error("Erro ao buscar status dos exercícios do tópico: ", error)
    }
  }, [topicId])

  useEffect(() => {
    fetchStatus()
  }, [fetchStatus])

  return { topicProgress }
}
