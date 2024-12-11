import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingExerciseContent } from "../../Content/DetailingExerciseContent";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { getExercises } from "@/service/detailingExerciseService";
import { ApiResponse } from "@/types/type";
import {  getTopicsExercise } from "@/service/detailingExerciseTopicsService"

export const RenderDetailingExercisePage = (id: string)=> {
  const [renderDataExercise, setRenderDataExercise] = useState<ApiResponse | null>(null);
  const [renderDataTopicExercise, setRenderDataTopicExercise] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const dataExercise = await getExercises();
        const dataTopic = await getTopicsExercise();
        
        if(dataExercise && dataTopic){
          setRenderDataExercise(dataExercise);
          setRenderDataTopicExercise(dataTopic);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [id]);
  

  if (loading) {
    return <Loading />
}
if (error) {
    return <BadRequest />
}
if (!renderDataExercise || !renderDataTopicExercise) {
    return <NoData/>
}
  return (
    <LayoutPage>
      <DetailingExerciseContent dataExercise={renderDataExercise} dataTopic={renderDataTopicExercise} id={id} />
    </LayoutPage>
  );
}
