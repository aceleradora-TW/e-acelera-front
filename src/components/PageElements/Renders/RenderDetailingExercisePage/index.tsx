import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { BadRequest } from "@/components/BadRequest";
import { DetailingExerciseContent } from "../../Content/DetailingExerciseContent";

export const RenderDetailingExercisePage = (id: string)=> {
    const {data: renderDataExercise, isLoading: loading, error: error } = useFetchData('/api/stackbyApi/Exercises');
    const {data: renderDataTopic } = useFetchData('/api/stackbyApi/Topics');

    if ( loading || !renderDataExercise || !renderDataTopic) {
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