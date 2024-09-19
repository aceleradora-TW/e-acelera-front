import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { BadRequest } from "@/components/BadRequest";
import { DetailingExerciseContent } from "../../Content/DetailingExerciseContent";

export const RenderDetailingExercisePage = (id: string)=> {
  const { data: renderDataExercise, isLoading: isExerciseLoading, error: exerciseError } = useFetchData('/api/stackbyApi/Exercises');
  const { data: renderDataTopic, isLoading: isTopicLoading, error: topicError } = useFetchData('/api/stackbyApi/Topics');
  const isLoading = isExerciseLoading || isTopicLoading;
  const error = exerciseError || topicError;

    if ( isLoading || !renderDataExercise || !renderDataTopic) {
        return <Loading/>
    }
    if(error){
     return <BadRequest/>
    }

  return (
    <LayoutPage>
      <DetailingExerciseContent dataExercise={renderDataExercise} dataTopic={renderDataTopic} id={id} />
    </LayoutPage>
  );
}