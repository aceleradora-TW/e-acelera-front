import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { usePathname } from "next/navigation";
import { ButtonCard } from "@/components/ButtonCard";
import { DescriptionFull } from "@/components/descriptions/description-full";
import { Exercise } from "@/types/type";
interface ContainerCardsExercisesProps {
  exercises?: string | Exercise[];
  exercisesDescription: string;
  exercisesInfo: string;
}

export const ContainerCardsExercises: React.FC<
  ContainerCardsExercisesProps
> = ({ exercises, exercisesDescription, exercisesInfo }) => {
  const between = useMediaQuery("(min-width: 800px) and (max-width: 899px)", { noSsr: true });
  const between2 = useMediaQuery("(min-width: 445px) and (max-width: 599px)", { noSsr: true });
  const pathname = usePathname();
  const currentPath = pathname.slice(1);

  const splitValues = (value: string): string[] =>
    value ? value.split(",").map((v) => v.trim()) : [];

  let exercisesArray: (string | Exercise)[] = [];
  let descriptionsArray: string[] = [];
  let infoArray: string[] = [];

  if (typeof exercises === "string") {
    exercisesArray = splitValues(exercises);
    descriptionsArray = splitValues(exercisesDescription);
    infoArray = splitValues(exercisesInfo);
  } else if (Array.isArray(exercises)) {
    exercisesArray = exercises;
    descriptionsArray = exercises.map((ex) => ex.shortDescription ?? "");
    infoArray = exercises.map((ex) => ex.id);
  }

  const isInvalidData =
    exercisesArray.length === 0 ||
    descriptionsArray.length === 0 ||
    infoArray.length === 0 ||
    exercisesArray[0] === "Untitle"
  if (isInvalidData) {
    return <DescriptionFull text="## Nenhum exercício encontrado" />;
  }

  return (
    <Grid container spacing={2} columnSpacing={1}>
      {exercisesArray?.map((exercise, index) => {
        const id = typeof exercise === "string" ? infoArray[index] : exercise.id;
        const title = typeof exercise === "string" ? exercise : exercise.title;
        const description = descriptionsArray[index] ?? "";

        return (
          <Grid
            item
            xl={3}
            lg={3}
            md={4}
            sm={between ? 4 : 6}
            xs={between2 ? 6 : 12}
            key={id}
            spacing={3}
          >
            <ButtonCard
              id={id}
              title={title}
              description={description}
              route={`${currentPath}/${id}`}
            />
          </Grid>

        );
      })}
    </Grid>
  )
};
