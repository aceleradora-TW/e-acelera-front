import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import React from "react";
import { DetailingThemeContent } from "../../Content/DetailingThemeContent";

interface RenderDetailingThemePageProps {
  id: string;
}

export const RenderDetailingThemePage: React.FC<RenderDetailingThemePageProps> = ({id})=> {
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