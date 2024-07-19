"use client";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { ApiResponse } from "@/types/type";
import { BaseCard } from "@/components/BaseCard";
import { Title } from "@/components/title";
import { CircularProgress } from "@mui/material";
import { ThemeDescription } from "@/components/Description/ThemeDescription";

export default function Home({
  params,
}: {
  params: { detailingTheme: string };
}) {
  const [renderData, setRenderData] = React.useState<ApiResponse>();
  const id = params.detailingTheme;

  function extractID(pathname: string) {
    const id = pathname.split("-")[0];
    return id;
  }

  function TopicsSeparator(topics: string) {
    const topic = topics.split(",");
    console.log(topic);
    return topic;
  }

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/stackbyApi/Themes`, {
          method: "GET",
        });
        const parseData: ApiResponse = await response.json();
        setRenderData(parseData);
        console.log(await parseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!renderData) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        mx={{ xs: 2, sm: 3, md: 6, lg: 8, xl: 8 }}
      >
        <Grid container columns={{ xl: 12, lg: 9, md: 6, sm: 3 }} rowSpacing={3}
        >
          {renderData &&
            renderData.data
              .filter((element: any) => element.id === extractID(id))
              .map((element: any, index: any) => (
                <>
                  <Grid item xl={12} lg={9} md={6} sm={3}>
                    <Title text={element.field.title} />
                  </Grid>
                  <Grid item xl={12} lg={9} md={6} sm={3}>
                    <ThemeDescription text={element.field.description} />
                  </Grid>
                  <Grid item xl={12} lg={9} md={6} sm={3}>
                  <Title text={"Tópicos"} />
                  </Grid>

                    {TopicsSeparator(element.field.topics).map(
                      (x: any, y: any) => (
                        <>
                          <Grid item xl={3} lg={4} md={3} sm={3}>
                            <BaseCard
                              title={x}
                              description={
                                TopicsSeparator(
                                  element.field.topicsDescription
                                )[y]
                              }
                              route={
                                TopicsSeparator(element.field.topicsInfo)[y]
                              }
                            />
                          </Grid>
                        </>
                      )
                    )}
                </>
              ))}
        </Grid>
      </Box>
    </>
  );
}