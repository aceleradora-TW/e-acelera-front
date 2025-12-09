"use client";

import { Container } from "@mui/material";
import { RenderThemePage } from "@/components/PageElements/Renders/RenderThemePage";

export default function Autoestudo() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <RenderThemePage category="Autoestudo" />;
    </Container>
  );
}
