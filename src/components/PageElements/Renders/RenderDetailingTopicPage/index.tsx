import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import React from "react";
import { DetailingTopicContent } from "../../Content/DetailingTopicContent";
import { DescriptionFull } from "@/components/Description/DescriptionFull";
import { Box, Typography } from "@mui/material";
import { BadRequest } from "@/components/BadRequest";

export const RenderDetailingTopicPage = (id: string)=> {
    const { data: renderData,  statusCode: code} = useFetchData('/api/stackbyApi/Topics');
    console.log(code)
    if (!renderData) {
        return <Loading/>
    }
    if(code !== 200){
     return <BadRequest/>
    }

  return (
    <LayoutPage>
      <DetailingTopicContent data={renderData} id={id} />
    </LayoutPage>
  );
}