import React from "react";
import { Box, Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { ContainerCardTopics } from "../../Container/ContainerCardsTopics";
import { ApiResponse, DataItem, IdType, ThemeField } from "@/types/type";
import { DescriptionDivider } from "../../../Description/DescriptionDivider";
import { Heading } from "@/components/Heading";
import ProgressBar from "../../Progress/ProgressBar";
import { useFetchProgress } from "@/components/fetchProgress";



interface DetailingContentProps {
  data: ApiResponse;
  id: string;
}
const ThemeContent: React.FC<{ field: ThemeField }> = ({ field }) => {
  const { progress: fetchedProgress } = useFetchProgress(field.rowId,IdType.THEME_ID);

  return (
  <>
    <Grid item xl={12} lg={9} md={6} sm={3}>
      <BreadCrumb />
      <Heading variant="h1" text={field.title} />
        <Box>
          <ProgressBar percentage={fetchedProgress?.progress ?? 0} />
          <p
            style={{
              fontSize: "0.8rem",
              textAlign: "right",
              marginTop: "4px",
            }}
          >
            {fetchedProgress?.progress ?? 0}% concluído
          </p>
        </Box>
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
)};

export const DetailingThemeContent: React.FC<DetailingContentProps> = ({ data, id }) => {
  const filteredData = data?.data.filter((element: DataItem) => element.id === id.split("-")[0])[0];

  return (
    <>
      <ThemeContent key={filteredData.id} field={filteredData.field as ThemeField} />
    </>
  );
};
