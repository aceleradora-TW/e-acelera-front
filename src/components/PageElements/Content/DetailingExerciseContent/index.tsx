import React from "react";
import { Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { ApiResponse, DataItem, FilteredDetailingExerciseItem } from "@/types/type";
import { DescriptionFull } from "@/components/Description/DescriptionFull";
import { ContainerButtonsExercise } from "../../Container/ContainerButtonsExercise";
import { Heading } from "@/components/Heading";
import StatusSelect from "@/components/StatusSelect";

interface DetailingContentProps {
  dataTopic: ApiResponse;
  dataExercise: ApiResponse;
  id: string;
}

function isFilteredDetailingExerciseItem(
  field: any
): field is FilteredDetailingExerciseItem {
  return field && "title" in field && "description" in field
}

const ExerciseContent: React.FC<{
  field: FilteredDetailingExerciseItem;
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
        <Heading variant="h1" text={field.title} />
      </Grid>
      <Grid item >
        <StatusSelect width="100%"/>
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
  const filteredData = dataExercise?.data.filter(
    (element: DataItem) => element.id === id.split("-")[0]
  );

  return (
    <>
      {filteredData.map((element: DataItem) => {
        if (isFilteredDetailingExerciseItem(element.field)) {
          return (
            <ExerciseContent
              key={element.id}
              dataTopic={dataTopic}
              field={element.field}
              idExercise={id}
            />
          );
        }

        return null;
      })}
    </>
  );
};

