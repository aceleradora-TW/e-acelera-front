import React from "react";
import { Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { ApiResponse, DataItem, ExercisesField } from "@/types/type";
import { DescriptionFull } from "@/components/descriptions/description-full";
import { ContainerButtonsExercise } from "../../Container/ContainerButtonsExercise";
import { Heading } from "@/components/Heading";
import StatusSelect from "@/components/StatusSelect";
import { ElementType } from "@/types/typeTopic";

interface DetailingContentProps {
  dataTopic: ApiResponse
  dataExercise: ApiResponse;
  id: string;
}

const ExerciseContent: React.FC<{
  field: ExercisesField;
  idExercise: string;
  dataTopic: ApiResponse
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
        marginBottom: 2
      }}
    >
      <Grid item>
        <Heading variant="h1" text={field.title} />
      </Grid>
      <Grid item >
        <StatusSelect elementType={ElementType.Exercise} id={idExercise} width="100%" />
      </Grid>
    </Grid>
    <DescriptionFull text={field.description} />
    <ContainerButtonsExercise idExercise={idExercise} data={dataTopic} />
  </>
);

export const DetailingExerciseContent: React.FC<DetailingContentProps> = ({
  dataTopic,
  dataExercise,
  id,
}) => {
  // const filteredData = dataExercise?.data.filter(
  //   (element: DataItem) => element.id === id.split("-")[0]
  // );

  // TODO:implement conditional for adminjs_preference or stackbyApi
  // const exerciseData = is_adminjsPreference ? dataExercise[0]?.data : dataExercise?.data

  return (
    <>
      {/* {filteredData.map((element: DataItem) => (
        <ExerciseContent
          dataTopic={dataTopic}
          key={element.id}
          idExercise={element.id}
          field={element.field as ExercisesField}
        />
      ))} */}
      <code style={{ marginTop: '200px' }}>{JSON.stringify(dataExercise)}</code>
    </>
  );
};
