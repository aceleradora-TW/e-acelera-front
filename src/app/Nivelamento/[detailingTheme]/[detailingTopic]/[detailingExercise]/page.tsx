'use client'

import { ButtonNext } from "@/components/ButtonNext"
import { LayoutPage } from "@/components/PageElements/LayoutPage"
import { Box, Grid, Typography } from "@mui/material"

export default function Teste({
  params,
}: {
  params: { detailingExercise: string };
}) {

  const id = params.detailingExercise

  return (
 
        <LayoutPage>
          <Grid item xl={12} lg={9} md={6} sm={3} textAlign={{ xs: 'left', sm: 'center' }}>
          <ButtonNext idExercise={id}/>

        </Grid>


        </LayoutPage>

  )
}
