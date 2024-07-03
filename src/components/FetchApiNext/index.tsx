'use client'
import ListServerSide from "@/server";
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export const FetchApiNext = () => {
  const [renderData, setRenderData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`/api/stackbyApi/Topics`, {
                method: "GET",
            });
            const parseData = await response.json();
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
            <div>
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
            </div>
        </>
    )
}