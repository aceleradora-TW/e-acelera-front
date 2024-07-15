'use client'
import Image from "next/image"
import react from "../../public/assets/react.png"
import js from "../../public/assets/js.png"
import next from "../../public/assets/next.png"
import { Box, Card, CardActionArea, CardContent, CssBaseline, Toolbar, Typography } from "@mui/material"
import { ThemeConfig } from '@/components/config/theme'
import { theme } from '@/components/config/theme'
import React from "react"
import { ApiResponse } from "@/types/type"

const drawerWidth = 0;

export default function Home() {
  const [renderData, setRenderData] = React.useState<ApiResponse>();
  const pagina = 'Nivelamento'

  React.useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`/api/stackbyApi/Themes`, {
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
         {renderData &&  renderData.data.map((element: any, index: any) => ( 
                <div key={index}>
                  <CardContent>
                    <Typography variant="h5" component="div" color="black">
                     {element.field.Title}
                    </Typography>
                    <Typography variant="body2" color="black">
                      {element.field.Description}
                    </Typography>

                    <Typography variant="body2" color="black">
                      {element.field.createdAt}
                    </Typography>
                  </CardContent>
                </div>
              ))}
    </main>
    </>
  )}
