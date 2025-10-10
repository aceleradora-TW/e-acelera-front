"use client"
import { CardLogin } from "@/components/CardLogin"
import { LayoutPage } from "@/components/PageElements/LayoutPage"
import { SponsorsSection } from "@/components/UI/home/sponsors-section"

export default function LoginPage() {

  return (
    <>
    <SponsorsSection />
    <LayoutPage>
      <CardLogin />
    </LayoutPage>
    </>
  )
}

