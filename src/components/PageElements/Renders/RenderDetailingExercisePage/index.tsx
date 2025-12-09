import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { BadRequest } from "@/components/BadRequest";
import { DetailingExerciseContent } from "../../Content/DetailingExerciseContent";
import { NoData } from "@/components/NoData";
import { GlobalContextProvider } from "@/context/global.context";

export const RenderDetailingExercisePage = (id: string) => {
  const {
    data: renderDataExercise,
    isLoading: isExerciseLoading,
    error: exerciseError,
  } = useFetchData("/api/stackbyApi/Exercises");
  const {
    data: renderDataTopic,
    isLoading: isTopicLoading,
    error: topicError,
  } = useFetchData("/api/stackbyApi/Topics");
  const isLoading = isExerciseLoading || isTopicLoading;
  const error = exerciseError || topicError;

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <BadRequest />;
  }
  if (!renderDataTopic || !renderDataExercise) {
    return <NoData />;
  }

  return (
    <GlobalContextProvider>
      <LayoutPage>
        <DetailingExerciseContent
          dataExercise={renderDataExercise}
          dataTopic={renderDataTopic}
          id={id}
        />
      </LayoutPage>
    </GlobalContextProvider>
  );
};
