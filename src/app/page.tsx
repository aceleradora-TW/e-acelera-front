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

    </main>
    </>
  )}
