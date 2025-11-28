"use client";

import { Faq } from "@/components/faq";
import { StudySection } from "@/components/study-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { HomeBanner } from "@/components/UI/home/home-banner";
import { ImpactSection } from "@/components/UI/home/impact-section";
import { SponsorsSection } from "@/components/UI/home/sponsors-section";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <ImpactSection />
      <SponsorsSection />
      <StudySection />
      <TestimonialsSection />
      <Faq />
    </>
  );
}
