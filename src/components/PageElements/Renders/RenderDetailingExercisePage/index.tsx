import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import React from "react";
import { BadRequest } from "@/components/BadRequest";
import { DetailingExerciseContent } from "../../Content/DetailingExerciseContent";

export const RenderDetailingExercisePage = (id: string)=> {
    const { data: renderData,  statusCode: code} = useFetchData('/api/stackbyApi/Exercises');

    if (!renderData) {
        return <Loading/>
    }
    if(code >= 300){
     return <BadRequest/>
    }

  return (
    <LayoutPage>
      <DetailingExerciseContent data={renderData} id={id} />
    </LayoutPage>
  );
}