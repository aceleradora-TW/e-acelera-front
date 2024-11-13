"use client"
import { Box } from "@mui/material"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Home() {

  const router = useRouter()
  router.push("/nivelamento")
  
  return <Box></Box>
}
