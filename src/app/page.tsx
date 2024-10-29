"use client"
import { Box } from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState<Boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      router.push("/nivelamento")
    }
  }, [isMounted, router])

  return <Box></Box>
}
