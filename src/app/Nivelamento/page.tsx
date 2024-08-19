"use client"
import { Grid } from "@mui/material"
import React from "react"
import { Title } from "@/components/title";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { ApiResponse, DataItem, ThemeField } from "@/types/type"
import { theme } from "@/app/config/theme";
import { ContainerCardTheme } from "@/components/Container/ContainerCardsThemes";
import { Loading } from "@/components/Loading";

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
    return <Loading/>
  }

  return (
    <Box sx={theme.customStyles.centralizeContent}>
      <Grid container columns={{ xl: 12, lg: 9, md: 6, sm: 3 }} rowSpacing={3} 
      mx= {{xs: 2, sm: 3,md: 6, lg: 8 ,xl: 8  }}>
        <Grid item xl={12} lg={9} md={6} sm={3} textAlign={{ xs: 'left', sm: 'center' }}>
          <Title text={`Bem vindo ao ${pagina}`} />
        </Grid>
        <ContainerCardTheme data={renderData} category={pagina}/>
      </Grid>
    </Box>
  );
}
