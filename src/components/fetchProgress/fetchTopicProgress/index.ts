import { IdType } from "@/types/type"
import { TopicProgress } from "@/types/typeTopic"
import { useCallback, useEffect, useState } from "react"

export const useFetchTopicProgress = (topicId: string) => {
  const [topicProgress, setTopicProgress] = useState<TopicProgress>({progress:0})

  const fetchStatus = useCallback(async () => {
    try {
      const response = await fetch(`/api/backend/getTopicProgress`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          topicId,
          idType: IdType.TOPIC_ID
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
