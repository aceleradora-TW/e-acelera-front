"use client";

import { Faq } from "@/components/faq";
import { TestimonialsSection } from "@/components/testimonials-section";
import { HomeBanner } from "@/components/UI/home/home-banner";
import { ImpactSection } from "@/components/UI/home/impact-section";
import { SponsorsSection } from "@/components/UI/home/sponsors-section";
import { SessionAccelerator } from "@/components/UI/home/session-the-agile-accelerator";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <SessionAccelerator />
      <ImpactSection />
      <SponsorsSection />
      <TestimonialsSection />
      <Faq />
    </>
  );
}
