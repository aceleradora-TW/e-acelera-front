import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { ContainerCardTopics } from "@/components/PageElements/Container/ContainerCardsTopics";
import {
  AdminJSThemeByIdResponse,
  IdType,
  StackbyThemeByIdResponse,
  AdminJSTopicThemesResponse,
  ThemeField,
} from "@/types/type";
import { DescriptionDivider } from "@/components/descriptions/description-divider";
import { Heading } from "@/components/Heading";
import ProgressBar from "../../Progress/ProgressBar";
import { useFetchProgress } from "@/components/fetchProgress";
import { useRouter } from "next/navigation";

interface ThemeContentProps {
  content: StackbyThemeByIdResponse<ThemeField>;
  adminjs_preference: boolean;
}

const ThemeContent = ({ content, adminjs_preference }: ThemeContentProps) => {
  const { progress: fetchedProgress } = useFetchProgress(
    content?.field?.rowId ?? "",
    IdType.THEME_ID
  );

  const cardTopicsData = {
    topics: content.field.topics,
    topicsDescription: content.field.topicsDescription,
    topicsInfo: content.field.topicsInfo,
  };

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
        data={cardTopicsData}
        adminjs_preference={adminjs_preference}
      />
    </>
  );
};

const ThemeContentAdminJS = ({
  data,
  adminjs_preference,
}: {
  data: AdminJSThemeByIdResponse;
  adminjs_preference: boolean;
}) => {
  const { progress: fetchedProgress } = useFetchProgress(
    data.id,
    IdType.THEME_ID
  );

  const cardTopicsAdminJSData = {
    topic: data.topic as AdminJSTopicThemesResponse[],
  };
  console.log("cardTopicsAdminJSData", data);

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
        data={cardTopicsAdminJSData}
        adminjs_preference={adminjs_preference}
      />
    </>
  );
};

export const DetailingThemeContent = ({
  data,
  adminjs_preference,
}: {
  data: AdminJSThemeByIdResponse | StackbyThemeByIdResponse<ThemeField>;
  adminjs_preference: boolean | null;
}) => {
  console.log("adminjs_preference", adminjs_preference);
  return (
    <>
      {!adminjs_preference ? (
        <ThemeContent
          content={data as unknown as StackbyThemeByIdResponse<ThemeField>}
          adminjs_preference={adminjs_preference as boolean}
        />
      ) : (
        <ThemeContentAdminJS
          data={data as unknown as AdminJSThemeByIdResponse}
          adminjs_preference={adminjs_preference as boolean}
        />
      )}
    </>
  );
};
