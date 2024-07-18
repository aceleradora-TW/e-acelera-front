'use client'
import { Grid } from "@mui/material"
import React from "react"
import { BaseCard } from "@/components/BaseCard";
import { Title } from "@/components/title";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { ApiResponse, DataItem, ThemeField } from "@/types/type"

export default function Home() {
  const [renderData, setRenderData] = React.useState<ApiResponse>();
  const pagina = "Nivelamento";

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
    return <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'100%' }}>
    <CircularProgress />
  </Box>
  }

  return (
    <Grid container mx={{sm: 1, xl:10, lg: 10}} columns={{ xl: 12, lg: 9, md: 6, sm: 3 }} rowSpacing={3}>
      <Grid item xl={12} lg={9} md={6} sm={3}>
        <Title text={`Bem vindo ao ${pagina}`} />
      </Grid>
      {renderData.data
        .filter((element: DataItem) => element.field.category === pagina)
        .map((element: DataItem, index:number) => {
          const field = element.field as ThemeField;

          return (
            <Grid item xl={4} lg={3} md={3} sm={3} key={index}>
              <BaseCard
                title={field.title}
                description={field.cardDescription}
                route={`${element.id}-${field.title}`}
                image={field.image ? field.image[0].url : ""}
              />
            </Grid>
          );
        })}
    </Grid>
  );
}
