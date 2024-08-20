import React from "react";
import { Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { Title } from "@/components/title";
import { ThemeDescription } from "@/components/Description/ThemeDescription";
import { ContainerCardTopics } from "../../Container/ContainerCardsTopics";
import { ApiResponse, DataItem, ThemeField } from "@/types/type";

interface DetailingContentProps {
  data: ApiResponse;
  id: string;
}

export const DetailingThemeContent: React.FC<DetailingContentProps> = ({ data, id }) => {
  function extractID(pathname: string) {
    return pathname.split("-")[0];
  }

  return (
    <>
      {data.data
        .filter((element: DataItem) => element.id === extractID(id))
        .map((element: DataItem) => {
          const field = element.field as ThemeField;
          return (
          <>
            <Grid item xl={12} lg={9} md={6} sm={3}>
              <BreadCrumb />
              <Title text={element.field.title} />
            </Grid>
            <Grid item xl={12} lg={9} md={6} sm={3}>
              <ThemeDescription text={element.field.description} />
            </Grid>
            <Grid item xl={12} lg={9} md={6} sm={3}>
              <Title text={"Tópicos"} />
            </Grid>
            <ContainerCardTopics 
              topics={field.topics}
              topicsDescription={field.topicDescription}
              topicsInfo={field.topicsInfo}
            />
          </>
        )})}
    </>
  );
};
