import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { PageThemesContent } from "../../Content/PageThemesContent";
import { LayoutPage } from "../../LayoutPage";
import React from "react";

interface RenderThemePageProps {
  category: string;
}

export const RenderThemePage: React.FC<RenderThemePageProps> = ({ category }) => {
  const { data: renderData } = useFetchData('/api/stackbyApi/Themes');
  
  if (!renderData) {
    return <Loading />;
  }

  return (
    <LayoutPage>
      <PageThemesContent data={renderData} category={category} />
    </LayoutPage>
  );
}
