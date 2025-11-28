import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { usePathname } from "next/navigation";
import { ButtonCard } from "@/components/ButtonCard";
import { DescriptionFull } from "@/components/descriptions/description-full";
interface ContainerCardsExercisesProps {
  exercises: string;
  exercisesDescription: string;
  exercisesInfo: string;
}

export const ContainerCardsExercises: React.FC<
  ContainerCardsExercisesProps
> = ({ exercises, exercisesDescription, exercisesInfo }) => {
  const between = useMediaQuery("(min-width: 800px) and (max-width: 899px)");
  const between2 = useMediaQuery("(min-width: 445px) and (max-width: 599px)");
  const pathname = usePathname();
  const currentPath = pathname.slice(1);

  const splitValues = (value: string): string[] => value.split(",");
  const exercisesArray = splitValues(exercises);
  const descriptionsArray = splitValues(exercisesDescription);
  const infoArray = splitValues(exercisesInfo);

  const isInvalidData =
    exercises.trim() == "Untitle" ||
    !exercises.trim() ||
    !exercisesDescription.trim() ||
    !exercisesInfo.trim();

  if (isInvalidData) {
    return <DescriptionFull text="## Nenhum exercício encontrado" />;
  }

  return (
    <Grid container spacing={2} columnSpacing={1}>
      {exercisesArray.map((exercise, index) => (
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
            id={`${infoArray[index]}`}
            title={exercise}
            description={descriptionsArray[index]}
            // nivelamento/themeId/topicId/exerciseId -> de cada card
            route={`${currentPath}/${exercise}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};
