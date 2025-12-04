import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { BaseCard } from "@/components/BaseCard";
import { usePathname } from "next/navigation";
import { AdminJSTopicThemesResponse } from "@/types/type";

interface CardTopicsProps {
  topics: string;
  topicsDescription: string;
  topicsInfo: string;
}

interface CardTopicsAdminJSProps {
  topic: AdminJSTopicThemesResponse[]
}

const CardTopics: React.FC<CardTopicsProps> = ({
  topics,
  topicsDescription,
  topicsInfo,
}) => {
  const between = useMediaQuery("(min-width: 800px) and (max-width: 899px)");
  const between2 = useMediaQuery("(min-width: 445px) and (max-width: 599px)");
  const pathname = usePathname();
  const currentPath = pathname.slice(1);
  const splitValues = (value: string): string[] => value.split(",");
  const topicsArray = splitValues(topics);
  const descriptionsArray = splitValues(topicsDescription);
  const infoArray = splitValues(topicsInfo);

  return (
      <>
        {topicsArray.map((topic, index) => (
          <Grid
            item
            xl={3}
            lg={3}
            md={4}
            sm={between ? 4 : 6}
            xs={between2 ? 6 : 12}
            key={index}
            spacing={3}
          >
            <BaseCard
              id={infoArray[index]}
              title={topic}
              cardType="topic"
              description={descriptionsArray[index]}
              route={`${currentPath}/${infoArray[index]}`}
              textImage={""}
            />
          </Grid>
        ))}
      </>
  );
};

const CardTopicsAdminJS: React.FC<CardTopicsAdminJSProps> = ({
  topic
}) => {
  const between = useMediaQuery("(min-width: 800px) and (max-width: 899px)");
  const between2 = useMediaQuery("(min-width: 445px) and (max-width: 599px)");
  const pathname = usePathname();
  const currentPath = pathname.slice(1);

  return (
      <>
        {topic.map((topic, index) => (
          <Grid
            item
            xl={3}
            lg={3}
            md={4}
            sm={between ? 4 : 6}
            xs={between2 ? 6 : 12}
            key={index}
            spacing={3}
          >
            <BaseCard
              id={topic.id}
              title={topic.title}
              cardType="topic"
              description={topic.shortDescription}
              route={`${currentPath}/${topic.id}`}
              textImage={""}
            />
          </Grid>
        ))}
      </>
  );
};

interface ContainerCardTopicsProps {
  adminjs_preference: boolean;
  data:  CardTopicsProps | CardTopicsAdminJSProps;
}

export function ContainerCardTopics ({ data, adminjs_preference }: ContainerCardTopicsProps) {
  return (
     <Grid container spacing={2} columnSpacing={1}>
      {adminjs_preference ? (
        <CardTopicsAdminJS
          topic={(data as CardTopicsAdminJSProps).topic} />
      ) : (
        <CardTopics
          topics={(data as CardTopicsProps).topics}
          topicsDescription={(data as CardTopicsProps).topicsDescription}
          topicsInfo={(data as CardTopicsProps).topicsInfo} />
        )
      }
    </Grid>
  )
}
