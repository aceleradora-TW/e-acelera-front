import React from "react";
import { Grid } from "@mui/material";
import { Title } from "@/components/Title";
import { ContainerCardTheme } from "../../Container/ContainerCardsThemes";
import { ApiResponse } from "@/types/type";

interface PageThemesContentProps {
  data: ApiResponse;
  category: string;
}

export const PageThemesContent: React.FC<PageThemesContentProps> = ({ data, category }) => {
 
  return (
    <>
       <Grid item xl={12} lg={9} md={6} sm={3} textAlign={{ xs: 'left', sm: 'center' }}>
          <Title text={`Bem vindo ao ${category}`} />
        </Grid>
        <ContainerCardTheme data={data} category={category}/>
    </>
  );
};
