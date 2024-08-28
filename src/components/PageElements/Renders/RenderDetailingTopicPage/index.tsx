import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import React from "react";
import { DetailingTopicContent } from "../../Content/DetailingTopicContent";

export const RenderDetailingTopicPage = (id: string)=> {
    const { data: renderData } = useFetchData('/api/stackbyApi/Topics');
    if (!renderData) {
        return <Loading/>
    }

  return (
    <LayoutPage>
      <DetailingTopicContent data={renderData} id={id} />
    </LayoutPage>
  );
}