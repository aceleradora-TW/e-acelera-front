"use client"
import CardVideo from "@/components/CardVideo"
import { Grid } from "@mui/material"

export default function Teste() {
    return(
        <Grid container >
            
           <Grid item xl={6} lg={6} md={6} sm={12}>
           <CardVideo/>
           </Grid>

           <Grid item xl={6} lg={6} md={6} sm={12}>
           <CardVideo/>
           </Grid>
        
        </Grid>
        
    )
}