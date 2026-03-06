'use client'

import { Box } from "@mui/material";
import { UpperBanner } from "@/components/UI/cms/upper-banner";


export default function DetailTheme({ id }: { id: string }) {

  return (
    <Box display="flex" flexDirection="column" gap="36px">

      <UpperBanner
        title="CMS - Temas"
        menuBanner
      />

      <div>Tema selecionado: {id}</div>

    </Box>
  );
}