"use client";

import { useFlags } from "flagsmith/react";
import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { LayoutPage } from "../../LayoutPage";
import { BadRequest } from "@/components/BadRequest";
import { DetailingExerciseContent } from "../../Content/DetailingExerciseContent";
import { NoData } from "@/components/NoData";
import { GlobalContextProvider } from "@/context/global.context";

function traitIsTrue(value: unknown): boolean {
  return (
    value === true ||
    value === "true" ||
    value === 1 ||
    value === "1"
  );
}

export const RenderDetailingExercisePage = (id: string) => {
  const {
    flag_adminjs,
    is_test_user,
    adminjs_preference,
  } = useFlags(
    ["flag_adminjs"],
    ["is_test_user", "adminjs_preference"]
  );

  const isTestUser = traitIsTrue(is_test_user);

  const usePostgres =
    flag_adminjs?.enabled === true ||
    (isTestUser && traitIsTrue(adminjs_preference));

  const decodedId = decodeURIComponent(id);
  const exerciseId = decodedId.split("-")[0];

  const exerciseUrl = usePostgres
    ? "/api/exercises/getExerciseById"
    : "/api/stackbyApi/Exercises";

  const exerciseOptions: RequestInit = usePostgres
    ? {
        method: "GET",
        headers: {
          id: exerciseId,
        },
      }
    : {
        method: "GET",
        headers: {
          operator: "rowIds",
          value: exerciseId,
        },
      };

  const {
    data: renderDataExercise,
    isLoading: isExerciseLoading,
    error: exerciseError,
  } = useFetchData(exerciseUrl, exerciseOptions);

  const {
    data: renderDataTopic,
    isLoading: isTopicLoading,
    error: topicError,
  } = useFetchData("/api/stackbyApi/Topics");

  const isLoading =
    isExerciseLoading ||
    (!usePostgres && isTopicLoading);

  const error =
    exerciseError ||
    (!usePostgres ? topicError : null);

  if (!usePostgres) {
    renderDataTopic
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <BadRequest />;
  }

  if (!renderDataExercise) {
    return <NoData />;
  }

  if (!usePostgres && !renderDataTopic) {
    return <NoData />;
  }

  const normalizedTopicData = usePostgres
  ? {
      data: [],
    }
  : renderDataTopic ?? {
      data: [],
    };

  return (
    <GlobalContextProvider>
      <LayoutPage>
        <DetailingExerciseContent
          dataExercise={renderDataExercise}
          dataTopic={normalizedTopicData}
          id={exerciseId}
        />
      </LayoutPage>
    </GlobalContextProvider>
  );
};