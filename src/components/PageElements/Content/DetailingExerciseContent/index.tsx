import React from "react";
import { Grid} from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { Title } from "@/components/title";
import { ApiResponse, DataItem, ExercisesField } from "@/types/type";
import { DescriptionFull } from "@/components/Description/DescriptionFull";
import { AdvanceExercises } from "@/components/AdvanceExercises";
import { ContainerButtonsExercise } from "../../Container/ContainerButtonsExercise";

interface DetailingContentProps {
  dataTopic:ApiResponse
  dataExercise: ApiResponse;
  id: string;
}

const ExerciseContent: React.FC<{
  field: ExercisesField;
  idExercise: string;
  dataTopic: ApiResponse
}> = ({ field, idExercise, dataTopic}) => (
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
        <Title text={field.title} />
      </Grid>
      <Grid item >
        <AdvanceExercises idExercises={idExercise} data={dataTopic}/>
      </Grid>
    </Grid>

    <DescriptionFull text={field.description} />
    <ContainerButtonsExercise idExercise={idExercise} data={dataTopic}/>
  </>
);

export const DetailingExerciseContent: React.FC<DetailingContentProps> = ({
  dataTopic,
  dataExercise,
  id,
}) => {
  const filteredData = dataExercise?.data.filter(
    (element: DataItem) => element.id === id.split("-")[0]
  );

  return (
    <>
      {filteredData.map((element: DataItem) => (
        <ExerciseContent
        dataTopic={dataTopic}
          key={element.id}
          idExercise={id}
          field={element.field as ExercisesField}
        />
      ))}
    </>
  );
};
