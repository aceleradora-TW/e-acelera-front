"use client"
import { HomeBanner } from "@/components/HomeBanner"
import { ImpactSection } from "@/components/impactSection"
import { StudySection } from "@/components/study-section"

export default function Home() {

  return(
    <>
      <HomeBanner />
      <StudySection />
      <ImpactSection />
    </>
      
  )
}