import { useCallback, useEffect, useState } from "react"

interface UseStatusProps {
  topicId: string
  itemId: string
}

export const useStatus = ({
  topicId,
  itemId,
}: UseStatusProps) => {
  const [status, setStatus] = useState<string>("NotStarted")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchStatus = useCallback(async () => {
    if (!topicId || !itemId ) return
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
          topicId,
          itemId,
          itemStatus: newStatus,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) throw new Error(`Erro ${response.status}`)
    } catch (error) {
      console.error("Erro ao atualizar status:", error)
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    fetchStatus()
  }, [fetchStatus])

  return { status, isLoading, updateStatus }
}


