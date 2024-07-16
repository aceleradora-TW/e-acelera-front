"use client";
import { Box, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { ApiResponse } from "@/types/type";
import { BaseCard } from "@/components/BaseCard";
import { Title } from "@/components/title";
import { usePathname } from "next/navigation";

export default function Home({ params }: { params: { id: string } }) {
  const [renderData, setRenderData] = React.useState<ApiResponse>();
  const pagina = params.id;
  const pathname = usePathname();
  console.log(pathname.slice(1));

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

  console.log(renderData);

  return (
    <>
      <main>
        <Grid container spacing={2} sx={{ margin: "0 80px" }}>
          {renderData &&
            renderData.data
              .filter((element: any) => element.id === pathname.slice(1))
              .map((element: any, index: any) => (
                <>
                  <Title text={element.field.title} />
                </>
              ))}
        </Grid>
      </main>
    </>
  );
}
