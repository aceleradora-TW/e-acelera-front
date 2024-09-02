import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import React from "react";
import { DetailingThemeContent } from "../../Content/DetailingThemeContent";
import { BadRequest } from "@/components/BadRequest";

export const RenderDetailingThemePage = (id: string)=> {
    const { data: renderData,  statusCode: code } = useFetchData('/api/stackbyApi/Themes');
    if (!renderData) {
        return <Loading/>
    }
    if(code !== 200){
      return <BadRequest/>
     }

  return (
    <LayoutPage>
      <DetailingThemeContent data={renderData} id={id} />
    </LayoutPage>
  );
}