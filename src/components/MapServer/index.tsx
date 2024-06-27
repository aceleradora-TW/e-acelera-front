'use client'
import ListServerSide from "@/server";
import { AppBar, Box, Button, Card, CardActionArea, CardContent, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const MapServer = () => {
    const [renderData, setRenderData] = useState()

    
      console.log(ListServerSide())
    
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