import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { BaseCard } from "@/components/BaseCard";

interface ContainerCardTopicsProps {
  topics: string;
  topicsDescription: string;
  topicsInfo: string;
  id: string;
}

export const ContainerCardTopics: React.FC<ContainerCardTopicsProps> = ({ topics, topicsDescription, topicsInfo, id }) => {
  const between = useMediaQuery('(min-width: 800px) and (max-width: 899px)');
  const between2 = useMediaQuery('(min-width: 445px) and (max-width: 599px)');

  function TopicsSeparator(value: string) {
    return value.split(",");
  }

  return (
    <Grid container spacing={2} columnSpacing={1}>
      {TopicsSeparator(topics).map((topic, index) => (
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
            title={topic}
            description={TopicsSeparator(topicsDescription)[index]}
            route={`${id}/${TopicsSeparator(topicsInfo)[index]}-${topic}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};
