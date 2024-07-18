'use client'
import { Grid } from "@mui/material"
import React from "react"
import { ApiResponse, DataItem, ThemeField } from "@/types/type"
import { BaseCard } from "@/components/BaseCard";
import { Title } from "@/components/title";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";



export default function Autoestudo() {
  const [renderData, setRenderData] = React.useState<ApiResponse>();
  const pagina: string = "Autoestudo";

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
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  }

  return (
    <Grid container mx={10} columns={{ xl: 12, lg: 9, md: 6, sm: 3 }} rowSpacing={3}>
      <Grid item xl={12} lg={9} md={6} sm={3}>
        <Title text={`Bem vindo ao ${pagina}`} />
      </Grid>
      {renderData.data
        .filter((element: DataItem) => element.field.category === pagina)
        .map((element: DataItem, index:number) => {
          const field = element.field as ThemeField;

          return (
            <Grid item xl={4} lg={3} md={3} sm={3} justifyContent="center" key={index}>
              <BaseCard
                title={field.title}
                description={field.cardDescription}
                route={`${element.id} - ${field.title}`}
                image={field.image ? field.image[0].url : ""}
              />
            </Grid>
          );
        })}
    </Grid>
  );
}