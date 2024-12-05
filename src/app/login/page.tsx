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
  const callbackUrl = searchParams?.get("callbackUrl") || "/"

  useEffect(() => {
    if (status === "authenticated") {
      router.push(callbackUrl)
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

  return null
}

export default function Login() {
  
  return (<Suspense fallback={<Loading />}>
    <LoginContent />
   </Suspense>)
}
