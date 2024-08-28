import React from "react";
import { Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { Title } from "@/components/title";
import { ContainerCardTopics } from "../../Container/ContainerCardsTopics";
import { ApiResponse, DataItem, TopicField } from "@/types/type";
import { DescriptionDivider } from "../../../Description/DescriptionDivider";
import { DescriptionReference } from "@/components/Description/DescriptionReference";
import { ContainerCardsExercises } from "../../Container/ContainerCardsExercises";

interface DetailingContentProps {
  data: ApiResponse;
  id: string;
}

export const DetailingTopicContent: React.FC<DetailingContentProps> = ({ data, id }) => {
  function extractID(pathname: string) {
    return pathname.split("-")[0];
  }

  console.log("CONTENT ", id)

  return (
    <>
      {data && data.data
        .filter((element: DataItem) => element.id === extractID(id))
        .map((element: DataItem) => {
          const field = element.field as TopicField;
          return (
          <>
            <Grid item xl={12} lg={9} md={6} sm={3}>
              <BreadCrumb />
              <Title text={field.title} />
            </Grid>
            <Grid item xl={12} lg={9} md={6} sm={3}>
              <DescriptionDivider text={field.description} />
            </Grid>
            <Grid item xl={12} lg={9} md={6} sm={3}>
              <Title text={"Exercícios"} />
            </Grid>
            <ContainerCardsExercises  
              exercises={field.exercises}
              exercisesDescription={field.exercisesDescription}
              exercisesInfo={field.exercisesInfo}/>
            <Grid item xl={12} lg={9} md={6} sm={3}>
              <Title text={"Referências"} />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12}>
              <DescriptionReference text={field.references}/>
            </Grid>
          </>
        )})}
    </>
  );
};
