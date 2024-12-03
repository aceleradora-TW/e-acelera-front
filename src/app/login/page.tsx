"use client"

import { CardLogin } from "@/components/CardLogin"
import { LayoutPage } from "@/components/PageElements/LayoutPage"
import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { Suspense, useEffect } from "react"
import { Loading } from "@/components/Loading"

function LoginContent() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")
  
  useEffect(() => {
    if (status === "authenticated") {
      if (callbackUrl) {
        return router.push(callbackUrl)
      }
      return router.push("/")
    }
  }, [status, router, callbackUrl])

  if (status === "loading") {
    return <Loading />
  }
  if (status === "unauthenticated") {
    return (
      <LayoutPage>
        <CardLogin />
      </LayoutPage>
    )
  }
}

export default function Login() {
  return (
    <Suspense fallback={<Loading />}>
      <LoginContent />
    </Suspense>
  )
}