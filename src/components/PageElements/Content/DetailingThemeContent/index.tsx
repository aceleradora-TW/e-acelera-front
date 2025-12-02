import React from "react";
import { Box, Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { ContainerCardTopics } from "@/components/PageElements/Container/ContainerCardsTopics";
import {
  AdminJSThemeByIdResponse,
  ApiResponse,
  DataItem,
  IdType,
  StackbyThemeByIdResponse,
  ThemeField,
} from "@/types/type";
import { DescriptionDivider } from "@/components/descriptions/description-divider";
import { Heading } from "@/components/Heading";
import ProgressBar from "../../Progress/ProgressBar";
import { useFetchProgress } from "@/components/fetchProgress";
import { useFlags } from "flagsmith/react";

const ThemeContent = ({
  content,
}: {
  content: StackbyThemeByIdResponse<ThemeField>;
}) => {
  const { progress: fetchedProgress } = useFetchProgress(
    content.field.rowId,
    IdType.THEME_ID
  );

  return (
    <>
      <Grid item xl={12} lg={9} md={6} sm={3}>
        <BreadCrumb title={content.field.title} />
        <Heading variant="h1" text={content.field.title} />
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
      <DescriptionDivider text={content.field.description} />
      <Grid item xl={12} lg={9} md={6} sm={3}>
        <Heading variant="h2" text={"Tópicos"} />
      </Grid>
      <ContainerCardTopics
        topics={content.field.topics}
        topicsDescription={content.field.topicsDescription}
        topicsInfo={content.field.topicsInfo}
      />
    </>
  );
};

const ThemeContentAdminJS = ({ data }: { data: AdminJSThemeByIdResponse }) => {
  const { progress: fetchedProgress } = useFetchProgress(
    data.id,
    IdType.THEME_ID
  );
  // console.log(JSON.stringify(data.title));
  console.log("@@@@ data.title", data.title);
  const topics = data.topic.map((t) => t.title).join(",");
  const topicsDescription = data.topic.map((t) => t.shortDescription).join(",");
  const topicsInfo = data.topic.map((t) => t.id).join(",");

  return (
    <>
      <Grid item xl={12} lg={9} md={6} sm={3}>
        <BreadCrumb title={data.title} />
        <Heading variant="h1" text={data.title} />
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
      <DescriptionDivider text={data.description} />
      <Grid item xl={12} lg={9} md={6} sm={3}>
        <Heading variant="h2" text={"Tópicos"} />
      </Grid>
      <ContainerCardTopics
        topics={topics}
        topicsDescription={topicsDescription}
        topicsInfo={topicsInfo}
      />
    </>
  );
};

export const DetailingThemeContent = ({
  data,
}: {
  data: AdminJSThemeByIdResponse | StackbyThemeByIdResponse<ThemeField>;
}) => {
  // const themeData = Array.isArray(data?.data) ? data.data[0] : data.data;
  const { flag_adminjs, is_test_user, adminjs_preference } = useFlags(
    ["flag_adminjs"],
    ["is_test_user", "adminjs_preference"]
  );
  return (
    <>
      {!adminjs_preference ? (
        <ThemeContent
          content={data as unknown as StackbyThemeByIdResponse<ThemeField>}
        />
      ) : (
        <ThemeContentAdminJS
          data={data as unknown as AdminJSThemeByIdResponse}
        />
      )}
    </>
  );
};
