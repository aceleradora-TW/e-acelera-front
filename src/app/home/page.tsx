"use client";
import { Box } from "@mui/material";
import { Faq } from "@/components/UI/home/faq";
import { TestimonialsSection } from "@/components/testimonials-section";
import { HomeBanner } from "@/components/UI/home/home-banner";
import { ImpactSection } from "@/components/UI/home/impact-section";
import { SponsorsSection } from "@/components/UI/home/sponsors-section";
import AboutAgil from "@/components/UI/home/session-the-agile-accelerator";
import { StudySection } from "@/components/UI/home/study-section";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflowX: "hidden",
        marginTop: "-40px",
      }}
    >
      <HomeBanner />
      <AboutAgil />
      <ImpactSection />
      <SponsorsSection />
      <StudySection />
      <TestimonialsSection />
      <Faq />
    </Box>
  );
}
