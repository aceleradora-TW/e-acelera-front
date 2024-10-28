import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { DetailingExerciseContent } from "../../Content/DetailingExerciseContent";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { getExercises } from "@/service/detailingExerciseService";
import { ApiResponse } from "@/types/type";
import { getTopics } from "@/service/detailingTopicsService";

export const RenderDetailingExercisePage = (id: string)=> {
  const [renderDataExercise, setRenderDataExercise] = useState<ApiResponse | null>(null);
  const [renderDataTopic, setRenderDataTopic] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const dataExercise: ApiResponse = await getExercises();
        const dataTopic: ApiResponse = await getTopics();
        setRenderDataExercise(dataExercise);
        setRenderDataTopic(dataTopic);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) {
    return <Loading />
}
if (error) {
    return <BadRequest />
}
if (!renderDataExercise || !renderDataTopic) {
    return <NoData/>
}

  return (
    <LayoutPage>
      <DetailingExerciseContent dataExercise={renderDataExercise} dataTopic={renderDataTopic} id={id} />
      
    </LayoutPage>
  );
}