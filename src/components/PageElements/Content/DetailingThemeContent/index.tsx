import React from "react";
import { Box, Grid } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { ContainerCardTopics } from "@/components/PageElements/Container/ContainerCardsTopics";
import {
  ApiResponse,
  IdType,
  ThemeField,
} from "@/types/type";
import { DescriptionDivider } from "@/components/descriptions/description-divider";
import { Heading } from "@/components/Heading";
import ProgressBar from "../../Progress/ProgressBar";
import { useFetchProgress } from "@/components/fetchProgress";
import { NoData } from "@/components/NoData";

interface DatabaseTopic {
  id: string;
  title: string;
  shortDescription?: string;
  description?: string;
}

interface DatabaseThemeDetail {
  id: string;
  title?: string;
  description?: string;

  topic?: DatabaseTopic[];

  topics?: string;
  topicsDescription?: string;
  topicsInfo?: string;
}

interface DatabaseThemeDetailResponse {
  data: DatabaseThemeDetail | DatabaseThemeDetail[];
}

interface DetailingContentProps {
  data: ApiResponse | DatabaseThemeDetailResponse;
}

interface NormalizedTheme {
  id: string;
  rowId: string;
  title: string;
  description: string;
  topics: string | DatabaseTopic[];
  topicsDescription: string;
  topicsInfo: string;
}

interface NormalizedTopicValues {
  topics: string;
  topicsDescription: string;
  topicsInfo: string;
}

const isStackbyResponse = (
  data: ApiResponse | DatabaseThemeDetailResponse
): data is ApiResponse => {
  if (!Array.isArray(data?.data) || data.data.length === 0) {
    return false;
  }

  const firstItem = data.data[0];

  return (
    typeof firstItem === "object" &&
    firstItem !== null &&
    "field" in firstItem
  );
};

const normalizeTheme = (
  data: ApiResponse | DatabaseThemeDetailResponse
): NormalizedTheme | null => {
  if (isStackbyResponse(data)) {
    const themeData = data.data[0];

    if (!themeData?.field) {
      return null;
    }

    const field = themeData.field as ThemeField;

    return {
      id: themeData.id,
      rowId: field.rowId || themeData.id,
      title: field.title ?? "",
      description: field.description ?? "",
      topics: field.topics ?? "",
      topicsDescription: field.topicsDescription ?? "",
      topicsInfo: field.topicsInfo ?? "",
    };
  }

  const databaseData = Array.isArray(data?.data)
    ? data.data[0]
    : data?.data;

  if (!databaseData) {
    return null;
  }

  return {
    id: databaseData.id,
    rowId: databaseData.id,
    title: databaseData.title ?? "",
    description: databaseData.description ?? "",

    topics: databaseData.topic ?? [],

    topicsDescription: databaseData.topicsDescription ?? "",
    topicsInfo: databaseData.topicsInfo ?? "",
  };
};

const normalizeTopics = (
  theme: NormalizedTheme
): NormalizedTopicValues => {
  if (!Array.isArray(theme.topics)) {
    return {
      topics: theme.topics,
      topicsDescription: theme.topicsDescription,
      topicsInfo: theme.topicsInfo,
    };
  }

  return {
    topics: theme.topics
      .map((topic) => topic.title)
      .join(","),

    topicsDescription: theme.topics
      .map(
        (topic) =>
          topic.shortDescription ??
          topic.description ??
          ""
      )
      .join(","),

    topicsInfo: theme.topics
      .map((topic) => topic.id)
      .join(","),
  };
};

const ThemeContent: React.FC<{
  theme: NormalizedTheme;
}> = ({ theme }) => {
  const { progress: fetchedProgress } = useFetchProgress(
    theme.rowId,
    IdType.THEME_ID
  );

  const normalizedTopics = normalizeTopics(theme);

  const hasTopics = Array.isArray(theme.topics)
    ? theme.topics.length > 0
    : Boolean(theme.topics) ||
      Boolean(theme.topicsDescription) ||
      Boolean(theme.topicsInfo);

  return (
    <>
      <Grid item xl={12} lg={9} md={6} sm={3}>
        <BreadCrumb />

        <Heading
          variant="h1"
          text={theme.title}
        />

        <Box>
          <ProgressBar
            percentage={fetchedProgress?.progress ?? 0}
          />

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

      <DescriptionDivider text={theme.description} />

      {hasTopics && (
        <>
          <Grid item xl={12} lg={9} md={6} sm={3}>
            <Heading
              variant="h2"
              text="Tópicos"
            />
          </Grid>

          <ContainerCardTopics
            topics={normalizedTopics.topics}
            topicsDescription={
              normalizedTopics.topicsDescription
            }
            topicsInfo={normalizedTopics.topicsInfo}
          />
        </>
      )}
    </>
  );
};

export const DetailingThemeContent: React.FC<
  DetailingContentProps
> = ({ data }) => {
  const theme = normalizeTheme(data);

  if (!theme) {
    return <NoData />;
  }

  return (
    <ThemeContent
      key={theme.id}
      theme={theme}
    />
  );
};