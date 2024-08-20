"use client"
import { Grid } from "@mui/material"
import React from "react"
import { Title } from "@/components/title";
import { Box } from "@mui/material";
import { theme } from "@/app/config/theme";
import { ContainerCardTheme } from "@/components/PageElements/Container/ContainerCardsThemes";
import { Loading } from "@/components/Loading";
import useFetchData from "@/components/fetchData";
import { LayoutPage } from "@/components/PageElements/LayoutPage";
import { PageThemesContent } from "@/components/PageElements/Content/PageThemesContent";

export default function Nivelamento() {
  const pagina = "Nivelamento";
  const { data: renderData } = useFetchData('/api/stackbyApi/Themes');
  if (!renderData) {
    return <Loading/>
  }

  return (
    <LayoutPage>
      <PageThemesContent data={renderData} category={pagina} />
    </LayoutPage>
  );
}
