import React from "react";
import { Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import {
  ApiResponse,
  DataItem,
  ExercisesField,
} from "@/types/type";
import { DescriptionFull } from "@/components/descriptions/description-full";
import { ContainerButtonsExercise } from "../../Container/ContainerButtonsExercise";
import { Heading } from "@/components/Heading";
import StatusSelect from "@/components/StatusSelect";
import { ElementType } from "@/types/typeTopic";
import { NoData } from "@/components/NoData";

interface DatabaseExercise {
  id: string;
  title?: string;
  description?: string;
}

interface DatabaseExerciseResponse {
  data: DatabaseExercise | DatabaseExercise[];
}

interface DetailingContentProps {
  dataTopic: ApiResponse;
  dataExercise: ApiResponse | DatabaseExerciseResponse;
  id: string;
}

interface NormalizedExercise {
  id: string;
  field: ExercisesField;
}

const ExerciseContent: React.FC<{
  field: ExercisesField;
  idExercise: string;
  dataTopic: ApiResponse;
}> = ({ field, idExercise, dataTopic }) => (
  <>
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <BreadCrumb />
    </Grid>

    <Grid
      container
      xl={12}
      lg={12}
      md={12}
      sm={12}
      xs={12}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <Grid item>
        <Heading
          variant="h1"
          text={field.title ?? ""}
        />
      </Grid>

      <Grid item>
        <StatusSelect
          elementType={ElementType.Exercise}
          id={idExercise}
          width="100%"
        />
      </Grid>
    </Grid>

    <DescriptionFull text={field.description ?? ""} />

    <ContainerButtonsExercise
      idExercise={idExercise}
      data={dataTopic}
    />
  </>
);

const isStackbyItem = (
  item: DataItem | DatabaseExercise
): item is DataItem => (
    typeof item === "object" &&
    item !== null &&
    "field" in item
  );

const normalizeExercises = (
  dataExercise: ApiResponse | DatabaseExerciseResponse
): NormalizedExercise[] => {
  const responseData = dataExercise?.data;

  const exerciseArray = Array.isArray(responseData)
    ? responseData
    : responseData
      ? [responseData]
      : [];

  return exerciseArray.map((exercise) => {
    if (isStackbyItem(exercise)) {
      return {
        id: exercise.id,
        field: exercise.field as ExercisesField,
      };
    }

    return {
      id: exercise.id,
      field: {
        title: exercise.title ?? "",
        description: exercise.description ?? "",
      } as ExercisesField,
    };
  });
};

export const DetailingExerciseContent: React.FC<
  DetailingContentProps
> = ({
  dataTopic,
  dataExercise,
  id,
}) => {
  const exerciseId = decodeURIComponent(id).split("-")[0];

  const exercises = normalizeExercises(dataExercise);

  const selectedExercise = exercises.find(
    (exercise) => exercise.id === exerciseId
  );

  if (!selectedExercise) {
    return <NoData />;
  }

  return (
    <ExerciseContent
      dataTopic={dataTopic}
      idExercise={selectedExercise.id}
      field={selectedExercise.field}
    />
  );
};