import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import useFetchData from "../fetchData";
import { DataItem, TopicField } from "@/types/type";
import { usePathname } from "next/navigation";
import { theme } from "@/app/config/theme";

function isTopicField(field: any): field is TopicField {
  return "exercisesInfo" in field;
}

interface sequenceExercises {
  idExercises: string;
}

export const AdvanceExercises: React.FC<sequenceExercises> = ({
  idExercises,
}) => {
  const { data: renderData } = useFetchData("/api/stackbyApi/Topics");
  const pathname = usePathname();
  const partsPathname = pathname.split("/");
  const [idExerciseBase] = idExercises.split("-");
  const [idTopicBase] = partsPathname[partsPathname.length - 2]?.split("-") || [ ];
  const currentTopic = renderData?.data?.find((element: DataItem) => {
    return element.field.rowId === idTopicBase;
  });

  const EvolutionComponent = styled(Typography)<TypographyProps>(() => ({
    padding: "0.437rem 2rem",
    [theme.breakpoints.up("sm")]: {
      padding: "0.875rem 4rem",
    },
  }));

  if (currentTopic && isTopicField(currentTopic.field)) {
    const topicField = currentTopic.field;
    const [exerciseInfo] = topicField.exercisesInfo?.split(",") || [];
    const idIndex = exerciseInfo.indexOf(idExerciseBase) + 1;

    return (
      <EvolutionComponent
        variant="caption"
        sx={theme.customStyles.advanceExercises}
      >
        {`${idIndex}/${exerciseInfo.length}`}
      </EvolutionComponent>
    );
  }
  return null;
};
