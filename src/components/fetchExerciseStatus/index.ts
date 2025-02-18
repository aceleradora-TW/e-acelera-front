import { useState, useEffect, useCallback } from "react"

interface UseExerciseStatusProps {
  topicId: string
  itemId: string
}

export const useExerciseStatus = ({ topicId, itemId }: UseExerciseStatusProps) => {
  const [status, setStatus] = useState<string>("NotStarted")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchStatus = useCallback(async () => {
    if (!topicId || !itemId ) return;
    setIsLoading(true)
    try {
      const response = await fetch(`/api/backend/getExerciseStatus`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          topicId,
          itemId,
        },
      })

      if (!response.ok) throw new Error(`Erro ${response.status}`)

      const data = await response.json()
      const validStatuses = ["NotStarted", "InProgress", "Completed"]

      setStatus(validStatuses.includes(data.status) ? data.status : "NotStarted")
    } catch (error) {
      console.error("Erro ao buscar status:", error)
    } finally {
      setIsLoading(false)
    }
  }, [topicId, itemId])

  const updateStatus = async (newStatus: string) => {
    setIsLoading(true)
    setStatus(newStatus)
    
    try {
      const response = await fetch("/api/backend/updateExerciseStatus", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          topicId,
          itemId,
          itemStatus: newStatus,
        },
      })

      if (!response.ok) throw new Error(`Erro ${response.status}`)
    } catch (error) {
      console.error("Erro ao atualizar status:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchStatus()
  }, [fetchStatus])

  return { status, isLoading, updateStatus }
}