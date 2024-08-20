'use client'
import React from "react";
import { Loading } from "@/components/Loading";
import useFetchData from "@/components/fetchData";
import { DetailingThemeContent } from "@/components/PageElements/Content/DetailingThemeContent";
import { LayoutPage } from "@/components/PageElements/LayoutPage";

export default function DetailingTheme({
  params,
}: {
  params: { detailingTheme: string };
}) {
  const id = params.detailingTheme;

  const { data: renderData } = useFetchData('/api/stackbyApi/Themes');
  if (!renderData) {
    return <Loading/>
  }

  return (
    <LayoutPage>
      <DetailingThemeContent data={renderData} id={id} />
    </LayoutPage>
  );
}
