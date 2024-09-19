import { Typography, TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ApiResponse, CommonField, DataItem, TopicField } from "@/types/type";
import { usePathname } from "next/navigation";
import { theme } from "@/app/config/theme";
import { useMemo } from "react";

function isTopicField(field: CommonField): field is TopicField {
  return field && "exercisesInfo" in field;
}

interface SequenceExercises {
  idExercises: string;
  data: ApiResponse;
}

const EvolutionComponent = styled(Typography)<TypographyProps>(() => ({
  padding: "0.437rem 2rem",
  [theme.breakpoints.up("sm")]: {
    padding: "0.875rem 4rem",
  },
}));

export const AdvanceExercises: React.FC<SequenceExercises> = ({ idExercises, data }) => {
  const pathname = usePathname();

  const validPathname = typeof pathname === 'string' ? pathname : '';

  const partsPathname = useMemo(() => validPathname.split("/"), [validPathname]);
  const idExerciseBase = useMemo(() => idExercises.split("-")[0], [idExercises]);
  const idTopicBase = useMemo(() => partsPathname[partsPathname.length - 2]?.split("-")[0] || "", [partsPathname]);

  const getCurrentTopic = useMemo(() => {
    if (!data) return null;
    return data?.data?.find((element: DataItem) => element.field.rowId === idTopicBase);
  }, [data, idTopicBase]);

  if (!getCurrentTopic) return null;

  if (isTopicField(getCurrentTopic.field)) {
    const topicField = getCurrentTopic.field;
    const exerciseInfo = topicField.exercisesInfo?.split(",") || [];
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