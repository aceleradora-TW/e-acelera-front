import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { BaseCard } from "@/components/BaseCard";
import { usePathname } from 'next/navigation';
import { ButtonCard } from "@/components/ButtonCard";
import { DescriptionFull } from "@/components/Description/DescriptionFull";
interface ContainerCardsExercisesProps {
  exercises: string;
  exercisesDescription: string;
  exercisesInfo: string;
}

export const ContainerCardsExercises: React.FC<ContainerCardsExercisesProps> = ({ exercises, exercisesDescription, exercisesInfo }) => {
  const between = useMediaQuery('(min-width: 800px) and (max-width: 899px)');
  const between2 = useMediaQuery('(min-width: 445px) and (max-width: 599px)');
  const pathname = usePathname()
  const currentPath = pathname.slice(1)
  function ExercisesSeparator(value: string) {
    return value.split(",");
  }
  return (
    <Grid container spacing={2} columnSpacing={1} >
      {exercises.trim() == "Untitle"|| !exercises.trim() || !exercisesDescription.trim() || !exercisesInfo.trim()? 
        <DescriptionFull text="## Nenhum exercício encontrado"/>
         
       : ExercisesSeparator(exercises).map((exercise, index) => (
        <Grid
          item
          xl={3}
          lg={3}
          md={4}
          sm={between ? 4 : 6}
          xs={between2 ? 6 : 12}
          key={index}
          spacing={3}
        >
          <ButtonCard
            title={exercise}
            description={ExercisesSeparator(exercisesDescription)[index]}
            route={`${currentPath}/${ExercisesSeparator(exercisesInfo)[index]}-${exercise}`} />
        </Grid>
      ))
     }
    </Grid>
  )



};
