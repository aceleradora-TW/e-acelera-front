import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { PageThemesContent } from "../../Content/PageThemesContent";
import { LayoutPage } from "../../LayoutPage";
import React from "react";
import { BadRequest } from "@/components/BadRequest";

export const RenderThemePage = (category: string)=> {
    const { data: renderData, statusCode: code } = useFetchData('/api/stackbyApi/Themes');
    if (!renderData) {
        return <Loading/>
    }
    if(code !== 200){
      return <BadRequest/>
     }

    return (
        <LayoutPage>
            <PageThemesContent data={renderData} category={category} />
        </LayoutPage>
    );
}
