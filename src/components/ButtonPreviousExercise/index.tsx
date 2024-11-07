import { theme } from "@/app/config/theme";
import { Button, ButtonProps, Stack, styled } from "@mui/material";
import { useRouter, usePathname } from 'next/navigation';
import { ApiResponse, DataItem, FilteredTopicsItem, TopicField } from "@/types/type";
import { ClickButton } from "../ClickButton";

const ButtonFail = styled(Button)<ButtonProps>(() => ({
    "&:hover": {
        backgroundColor: "gray",
        color: theme.palette.buttonHover?.contrastText,
        border: "none"
    }
}));

const ContainerButtonFail = () => {
    return (
        <aside>
            <Stack spacing={2} direction="row">
                <ButtonFail sx={theme.customStyles.button} variant="contained">
                   Exercício anterior
                </ButtonFail>
            </Stack>
        </aside>
    )
}

function isTopicField(field: any): field is  FilteredTopicsItem | TopicField {
    return field && "exercisesInfo" in field;}

interface ButtonNextProps {
    idExercise: string;
    renderData: ApiResponse;
}

export const ButtonPreviousExercise: React.FC<ButtonNextProps> = ({ idExercise, renderData }) => {
    
    const router = useRouter()
    const pathname = usePathname()

    if (!renderData) {
        return (<ContainerButtonFail />)
    }
    const partsPathname = pathname.split("/")
    const idExerciseBase = idExercise.split("-")[0]
    const idTopicBase = partsPathname[partsPathname.length - 2]?.split("-")[0]
    const currentTopic = renderData?.data?.find((element: DataItem) => { return element.field?.rowId === idTopicBase });

    if (currentTopic && isTopicField(currentTopic.field)) {
        const topicField = currentTopic.field

        const exerciseIds = topicField.exercisesInfo?.split(",") || []
        const exerciseNames = topicField.exercises?.split(",") || []

        const currentExerciseIndex = exerciseIds.indexOf(idExerciseBase)
        const PreviousExerciseName = exerciseNames[currentExerciseIndex - 1] || null
        const PreviousExerciseId = exerciseIds[currentExerciseIndex - 1] || null

        const handleClick = () => {
            router.push(`${PreviousExerciseId}-${PreviousExerciseName}`)
        }

        if (PreviousExerciseId) {
            return (
                <ClickButton title="Exercício anterior" click={handleClick} />
            )
        }

        return null
    }

    return <ContainerButtonFail />

}
