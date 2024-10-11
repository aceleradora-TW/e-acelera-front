import React from "react";
import { Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { Title } from "@/components/title";
import { ApiResponse, DataItem, TopicField } from "@/types/type";
import { DescriptionReference } from "@/components/Description/DescriptionReference";
import { ContainerCardsExercises } from "../../Container/ContainerCardsExercises";
import { DescriptionWithVideo } from "@/components/Description/DescriptionWithVideo";

interface DetailingContentProps {
  data: ApiResponse;
  id: string;
}

const TopicContent: React.FC<{ field: TopicField }> = ({ field }) => (
  <>
    <Grid item xl={12} lg={9} md={6} sm={3}>
      <BreadCrumb />
      <Title text={field.title} />
    </Grid>
    <DescriptionWithVideo
      textDescription={field.description}
      textVideo={field.videoDescription}
      title={field.video}
      videoLink={field.videoLink}
      references={field.videoReference}
    />
    <Grid item xl={12} lg={9} md={6} sm={3}>
      <Title text={"Exercícios"} />
    </Grid>
    <ContainerCardsExercises
      exercises={field.exercises}
      exercisesDescription={field.exercisesDescription}
      exercisesInfo={field.exercisesInfo}
    />

    {field.references && field.references.trim() != "" && (
      <>
        <Grid item xl={12} lg={9} md={6} sm={3}>
          <Title text={"Referências"} />
        </Grid>
        <DescriptionReference text={field.references} />
      </>
    )}
  </>
)

export const DetailingTopicContent: React.FC<DetailingContentProps> = ({
  data,
  id,
}) => {
  const filteredData = data?.data.filter(
    (element: DataItem) => element.id === id.split("-")[0]
  )

  return (
    <>
      {filteredData.map((element: DataItem) => (
        <TopicContent key={element.id} field={element.field as TopicField} />
      ))}
    </>
  )
}
