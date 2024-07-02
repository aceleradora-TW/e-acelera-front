'use client'
import ListServerSide from "@/server";
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export const FetchApiNext = () => {
  const [renderData, setRenderData] = useState<any>();

  useEffect(() => {
    const fetchData = async () =>{
      try {
        console.log("Fetching data from Next.js API");
        const data = await fetch("/api/stackby", {
          method: "GET",
          cache: "no-store"
        });
        const parseData = await data.json();
        console.log("Data fetched from Next.js API:", parseData);
        setRenderData(parseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  
  console.log(renderData);
    
    return(
        <>
            {/* <div>
            {renderData.data.map((element: any, index: any) => ( 
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
            </div> */}
        </>
    )
}