import { theme } from "@/app/config/theme";
import { Button, ButtonProps, Stack, styled } from "@mui/material";
import { useRouter, usePathname } from 'next/navigation';
import useFetchData from "../fetchData";
import { DataItem, TopicField } from "@/types/type";

const ColorButton = styled(Button)<ButtonProps>(() => ({    
    "&:hover": {
        backgroundColor: theme.palette.buttonHover?.main,
        color: theme.palette.buttonHover?.contrastText,
        border: "none"
    }
}))

interface ButtonNextProps {
    idExercise: string;
}

export const ButtonNext: React.FC<ButtonNextProps> = ({ idExercise }) => {
    const { data: renderData } = useFetchData('/api/stackbyApi/Topics');
    const pathname = usePathname();
    
    const idExerciseBase = idExercise.split("-")[0];
    const idTopicBase = pathname.split("/")[3]?.split("-")[0];

    const currentTopic = renderData?.data.find((element: DataItem) => {
        return element.field.rowId === idTopicBase && 'exercisesInfo' in element.field;
    });
    console.log(currentTopic)
    if (currentTopic && (currentTopic.field as TopicField).exercisesInfo) {
        const topicField = currentTopic.field as TopicField;
        
        const exerciseIds = topicField.exercisesInfo?.split(",") || [];
        const exerciseNames = topicField.exercises?.split(",") || [];

        const currentExerciseIndex = exerciseIds.indexOf(idExerciseBase);

        const nextExerciseName = exerciseNames[currentExerciseIndex + 1] || null;
        const nextExerciseId = exerciseIds[currentExerciseIndex + 1] || null;

        const router = useRouter();

        const handleClick = () => {
            router.push(`${nextExerciseId}-${nextExerciseName}`);
        };

        return (
            <aside>
                <Stack spacing={2} direction="row">
                    <ColorButton sx={theme.customStyles.button} variant="contained" onClick={handleClick}>
                        Próximo exercício
                    </ColorButton>
                </Stack>
            </aside>
        );
    }

    return null; // Retornar null se o tópico atual não for do tipo TopicField ou não tiver exercícios
};
