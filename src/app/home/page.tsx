"use client"
import { HomeBanner } from "@/components/UI/home/home-banner"
import { ImpactSection } from "@/components/UI/home/impact-section"
import { SponsorsSection } from "@/components/UI/home/sponsors-section"

export default function Home() {

  return(
    <>
      <HomeBanner />
      <ImpactSection />
      <SponsorsSection />
    </>
  )
}