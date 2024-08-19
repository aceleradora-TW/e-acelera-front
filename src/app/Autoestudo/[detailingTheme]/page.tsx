'use client'
import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { ApiResponse } from "@/types/type";
import { Title } from "@/components/title";
import { CircularProgress } from "@mui/material";
import { ThemeDescription } from "@/components/Description/ThemeDescription";
import { BreadCrumb } from "@/components/BreadCrumb";
import { theme } from "../../config/theme";
import { ContainerCardTopics } from "@/components/Container/ContainerCardsTopics";
import { Loading } from "@/components/Loading";

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
    return <Loading/>
  }
  
  return (
    <>
      <Box sx={theme.customStyles.centralizeContent}>
        <Grid container columns={{ xl: 12, lg: 9, md: 6, sm: 3 }} rowSpacing={3} 
        mx={{ xs: 2, sm: 3, md: 6, lg: 8, xl: 8 }}>
          {renderData &&
            renderData.data
              .filter((element: any) => element.id === extractID(id))
              .map((element: any) => (
                <>
                  <Grid item xl={12} lg={9} md={6} sm={3}>
                    <BreadCrumb />
                    <Title text={element.field.title} />
                  </Grid>
                  <Grid item xl={12} lg={9} md={6} sm={3}>
                    <ThemeDescription text={element.field.description} />
                  </Grid>
                  <Grid item xl={12} lg={9} md={6} sm={3}>
                    <Title text={"Tópicos"} />
                  </Grid>
                  <ContainerCardTopics
                    topics={element.field.topics}
                    topicsDescription={element.field.topicsDescription}
                    topicsInfo={element.field.topicsInfo}              />
                </>
              ))}
        </Grid>
      </Box>
    </>
  );
}
