import { ApiTopic } from "@/types/typeTopic"
import { useState, useEffect } from "react"

export const useFetchTopicStatus = (topicId?: string) => {
  const [dataStatus, setDataStatus] = useState<ApiTopic>()
  const fetchStatus = async () => {
    if (!topicId) return
    try {
      const response = await fetch("/api/backend/getTopicExercisesStatus", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          topicId,
        },
      })

      if (!response.ok) throw new Error(`Erro ${response.status}`)

      const data = await response.json()
      setDataStatus(data)
    } catch (error) {
      console.error("Erro ao buscar status dos exercícios do tópico: ", error)
    }
  }

  useEffect(() => {
    fetchStatus()
  })

  return { dataStatus }
}
