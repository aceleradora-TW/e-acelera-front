"use client";
import { Box, Grid} from "@mui/material";
import React from "react";
import { ApiResponse } from "@/types/type";
import { BaseCard } from "@/components/BaseCard";
import { Title } from "@/components/title";
import { CircularProgress } from "@mui/material";
import { ThemeDescription } from "@/components/Description/ThemeDescription";
import { BreadCrumb } from "@/components/BreadCrumb";
import { theme } from "../config/theme";

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
        sx={theme.customStyles.centralizeContent}
      >
        <Grid container columns={{ xl: 12, lg: 9, md: 6, sm: 3 }} rowSpacing={3} 
        mx={{ xs: 2, sm: 3, md: 6, lg: 8, xl: 8 }}
        >
          {renderData &&
            renderData.data
              .filter((element: any) => element.id === extractID(id))
              .map((element: any, index: any) => (
                <>
                  <Grid item xl={12} lg={9} md={6} sm={3}>
                  <BreadCrumb/>
                    <Title text={element.field.title} />
                  </Grid>
                  <Grid item xl={12} lg={9} md={6} sm={3}>
                    <ThemeDescription text={element.field.description} />
                  </Grid>
                  <Grid item xl={12} lg={9} md={6} sm={3}>
                  <Title text={"Tópicos"} />
                  </Grid>
                  <Grid container spacing={2} >
                    {TopicsSeparator(element.field.topics).map(
                      (x: any, y: any) => (
                        <Grid item xl={3} lg={4} md={4} sm={12} xs={12} key={y}>
                        <BaseCard
                          title={x}
                          description={
                            TopicsSeparator(
                              element.field.topicsDescription
                            )[y]
                          }
                          route={
                            `${id}/${TopicsSeparator(element.field.topicsInfo)[y]}-${x}`
                          }                          
                        />
                      </Grid>
                      )
                    )}
                  </Grid>
            
                </>
              ))}
        </Grid>
      </Box>
    </>
  );
}