import React from "react";
import { Grid} from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { Title } from "@/components/title";
import { ApiResponse, DataItem, ExercisesField } from "@/types/type";
import { DescriptionFull } from "@/components/Description/DescriptionFull";
import { AdvanceExercises } from "@/components/AdvanceExercises";


interface DetailingContentProps {
  data: ApiResponse;
  id: string;
}

const ExerciseContent: React.FC<{
  field: ExercisesField;
  idExercise: string;
}> = ({ field, idExercise }) => (
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
        <AdvanceExercises idExercises={idExercise} />
      </Grid>
    </Grid>

    <DescriptionFull text={field.description} />
  </>
);

export const DetailingExerciseContent: React.FC<DetailingContentProps> = ({
  data,
  id,
}) => {
  const filteredData = data?.data.filter(
    (element: DataItem) => element.id === id.split("-")[0]
  );

  return (
    <>
      {filteredData.map((element: DataItem) => (
        <ExerciseContent
          key={element.id}
          idExercise={id}
          field={element.field as ExercisesField}
        />
      ))}
    </>
  );
};
