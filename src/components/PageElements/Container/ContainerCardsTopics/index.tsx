import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { BaseCard } from "@/components/BaseCard";
import { usePathname } from "next/navigation";
import { Topic } from "@/types/type";
interface ContainerCardTopicsProps {
  topics: string | Topic[];
  topicsDescription: string;
  topicsInfo: string;
}

export const ContainerCardTopics: React.FC<ContainerCardTopicsProps> = ({
  topics,
  topicsDescription,
  topicsInfo,
}) => {
  const between = useMediaQuery("(min-width: 800px) and (max-width: 899px)");
  const between2 = useMediaQuery("(min-width: 445px) and (max-width: 599px)");
  const pathname = usePathname();
  const currentPath = pathname.slice(1);

  const splitValues = (value: string): string[] => value.split(",");

  let topicsArray: (string | Topic)[] = [];
  let descriptionsArray: string[] = [];
  let infoArray: string[] = [];

  if (typeof topics === "string") {
    topicsArray = splitValues(topics);
    descriptionsArray = splitValues(topicsDescription);
    infoArray = splitValues(topicsInfo);
  } else if (Array.isArray(topics)) {
    topicsArray = topics;
    descriptionsArray = topics.map((t) => t.shortDescription ?? "");
    infoArray = topics.map((t) => t.id);
  }

  return (
    <Grid container spacing={2} columnSpacing={1}>
      {topicsArray.map((topic, index) => {
        let route = "";
        let id = "";
        let title = "";
        const description = descriptionsArray[index] ?? "";

        if (typeof topic === "string") {
          id = infoArray[index];
          title = topic;
          route = `${currentPath}/${id}-${title}`;
        } else {
          id = topic.id;
          title = topic.title;
          route = `${currentPath}/${id}`;
        }


        return (
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
              id={id}
              title={title}
              cardType="topic"
              description={description}
              route={route}
              textImage={""}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
