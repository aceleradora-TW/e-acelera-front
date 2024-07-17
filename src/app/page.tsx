'use client'
import { Box, CardContent, Grid, Typography } from "@mui/material"
import React from "react"
import { ApiResponse } from "@/types/type"
import { BaseCard } from "@/components/BaseCard";
import { Title } from "@/components/title";

export default function Home() {
  const [renderData, setRenderData] = React.useState<ApiResponse>();
  const pagina = 'Nivelamento'

  React.useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/api/stackbyApi/Themes', {
                method: "GET",
            });
            const parseData: ApiResponse = await response.json();
            setRenderData(parseData);
            console.log(await parseData)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, []);

  console.log(renderData)

  return (
    <>
    <main>
      <Grid container  spacing={2} sx={{margin:'0 80px'}}>
      <Grid item xs={12}> <Title text={`Bem vindo ao ${pagina}`}/> </Grid>
         {renderData &&  renderData.data.filter((element:any)=>element.field.category === pagina).map((element: any, index: any) => ( 
                <Grid item xs={4} key={index}>
                  <BaseCard 
                  title={element.field.title} 
                  description={element.field.description} 
                  route={`${element.id}-${element.field.title}`} 
                  image={element.field.image ? element.field.image[0].url: ''}
                  />
                </Grid>
              ))}
      </Grid>
    </main>
    </>
  )}