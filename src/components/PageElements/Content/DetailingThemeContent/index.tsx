import React from "react";
import { Box, Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { ContainerCardTopics } from "@/components/PageElements/Container/ContainerCardsTopics";
import { ApiResponse, DataItem, IdType, ThemeField } from "@/types/type";
import { DescriptionDivider } from "@/components/descriptions/description-divider";
import { Heading } from "@/components/Heading";
import ProgressBar from "../../Progress/ProgressBar";
import { useFetchProgress } from "@/components/fetchProgress";

interface DetailingContentProps {
  data: ApiResponse;
}
const ThemeContent: React.FC<{ field: ThemeField }> = ({ field }) => {
  const { progress: fetchedProgress } = useFetchProgress(
    field.rowId,
    IdType.THEME_ID
  );

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
  );
};

export const DetailingThemeContent: React.FC<DetailingContentProps> = ({
  data,
}) => {
  const [themeData] = data?.data;
  return (
    <>
      <ThemeContent key={themeData.id} field={themeData.field as ThemeField} />
    </>
  );
};
