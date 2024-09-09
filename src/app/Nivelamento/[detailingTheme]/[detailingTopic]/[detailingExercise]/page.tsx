'use client'
import { ButtonNextExercise } from "@/components/ButtonNextExercise"
import { LayoutPage } from "@/components/PageElements/LayoutPage"
import { Grid } from "@mui/material"

export default function DetailingExercise({
  params,
}: {
  params: { detailingExercise: string };
}) {

  const id = params.detailingExercise

  return (
        <LayoutPage>
          <Grid item xl={12} lg={9} md={6} sm={3} textAlign={{ xs: 'left', sm: 'center' }}>
            <ButtonNextExercise idExercise={id}/>
          </Grid>
        </LayoutPage>
  )
}
