import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import React from "react";
import { BadRequest } from "@/components/BadRequest";
import { DetailingExerciseContent } from "../../Content/DetailingExerciseContent";

export const RenderDetailingExercisePage = (id: string)=> {
    const { data: renderDataExercise,  statusCode: codeExercise} = useFetchData('/api/stackbyApi/Exercises');

    if ( !renderDataExercise) {
        return <Loading/>
    }
    if(codeExercise >= 300){
     return <BadRequest/>
    }

  return (
    <LayoutPage>
      <DetailingExerciseContent dataExercise={renderDataExercise}  id={id} />
    </LayoutPage>
  );
}