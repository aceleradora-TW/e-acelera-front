"use client";

import { Box, Container } from "@mui/material";
import { Faq } from "@/components/faq";
import { TestimonialsSection } from "@/components/testimonials-section";
import { HomeBanner } from "@/components/UI/home/home-banner";
import { ImpactSection } from "@/components/UI/home/impact-section";
import { SponsorsSection } from "@/components/UI/home/sponsors-section";
import { SessionAccelerator } from "@/components/UI/home/session-the-agile-accelerator";
import { AutoAwesome } from "@mui/icons-material";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Container
        maxWidth="lg"
        sx={{
          marginTop: 1,
          marginBottom: 2,
          paddingTop: 1,
          paddingBottom: 2,
          paddingLeft: { xs: 2, sm: 3, md: 1 },
          paddingRight: { xs: 2, sm: 3, md: 1 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SessionAccelerator />
          <ImpactSection />
          <SponsorsSection />
          <TestimonialsSection />
          <Faq />
        </Box>
      </Container>
    </>
  );
}
