"use client"
import { TestimonialsSection } from "@/components/testimonials-section"
import { HomeBanner } from "@/components/UI/home/home-banner"
import { ImpactSection } from "@/components/UI/home/impact-section"
import { SponsorsSection } from "@/components/UI/home/sponsors-section"

export default function Home() {

  return(
    <>
      <TestimonialsSection />
      <HomeBanner />
      <ImpactSection />
      <SponsorsSection />
    </>
  )
}