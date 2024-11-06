import React from "react";
import { Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { ContainerCardTopics } from "../../Container/ContainerCardsTopics";
import { ApiResponse, DataItem, ThemeField } from "@/types/type";
import { DescriptionDivider } from "../../../Description/DescriptionDivider";
import { Heading } from "@/components/Heading";

interface DetailingContentProps {
  data: ApiResponse;
  id: string;
}
const ThemeContent: React.FC<{ field: ThemeField }> = ({ field }) => (
  <>
    <Grid item xl={12} lg={9} md={6} sm={3}>
      <BreadCrumb />
      <Heading variant="h1" text={field.title} />
    </Grid>
    <DescriptionDivider text={field.description} />
    <Grid item xl={12} lg={9} md={6} sm={3}>
      <Heading variant="h2" text={"Tópicos"} />
    </Grid>
    <ContainerCardTopics
      topics={field.topics}
      topicsDescription={field.topicsDescription}
      topicsInfo={field.topicsInfo}
    />
  </>
)
export const DetailingThemeContent: React.FC<DetailingContentProps> = ({ data, id }) => {
  const filteredData = data?.data.filter((element: DataItem) => element.id === id.split("-")[0]);
  
  return (
    <>
      {filteredData
        .map((element: DataItem) => (
          <ThemeContent key={element.id} field={element.field as ThemeField} />
        ))}
    </>
  );
};
