"use client"
import React from "react"
import { Loading } from "@/components/Loading";
import useFetchData from "@/components/FetchData";
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
