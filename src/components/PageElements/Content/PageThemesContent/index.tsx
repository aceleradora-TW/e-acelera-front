import React from "react";
import { Grid } from "@mui/material";
import { ContainerCardTheme } from "../../Container/ContainerCardsThemes";
import { ApiResponse } from "@/types/type";
import { Heading } from "@/components/Heading";

interface PageThemesContentProps {
  data: ApiResponse;
  category: string;
}

export const PageThemesContent: React.FC<PageThemesContentProps> = ({ data, category }) => (
    <>
      <Grid item xl={12} lg={9} md={6} sm={3} textAlign={{ xs: 'left', sm: 'center' }}>
        <Heading variant="h1" text={`Inicie sua jornada no ${category}`} />
      </Grid>
      <ContainerCardTheme data={data} category={category} />
    </>
  );
