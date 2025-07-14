import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingThemeContent } from "../../Content/DetailingThemeContent";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import ProgressBar from "@/components/PageElements/Progress/ProgressBar";
import React from "react";

export const RenderDetailingThemePage = (id: string)=> {
    const { data: renderData, isLoading: loading, error: error} = useFetchData('/api/stackbyApi/Themes');
    if (loading) {
      return <Loading />
  }
  if (error) {
      return <BadRequest />
  }
  if (!renderData) {
      return <NoData/>
  }
  return (
    <LayoutPage>
      <DetailingThemeContent data={renderData} id={id} />
    </LayoutPage>
  );

}