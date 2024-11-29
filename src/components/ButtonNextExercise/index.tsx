import { theme } from "@/app/config/theme"
import { Button, ButtonProps, Stack, styled } from "@mui/material"
import { useRouter, usePathname } from 'next/navigation'
import { ApiResponse, CommonField, DataItem, TopicField } from "@/types/type"
import { ClickButton } from "../ClickButton"
import useMediaQuery from '@mui/material/useMediaQuery'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const ButtonFail = styled(Button)<ButtonProps>(() => ({
    "&:hover": {
        backgroundColor: "gray",
        color: theme.palette.buttonHover?.contrastText,
        border: "none"
    }
}))

const ContainerButtonFail = ({ isVisible }: { isVisible: boolean }) => {
    return (
        <aside>
            <Stack spacing={2} direction="row">
                <ButtonFail
                    sx={{
                        ...theme.customStyles.button,
                        opacity: isVisible ? 1 : 0,
                        pointerEvents: isVisible ? 'auto' : 'none',
                        [theme.breakpoints.down('md')]: {
                            '.button-text': {
                                display: 'none',
                            },
                        },
                    }}
                >
                    <span className="button-text" style={{ marginRight: '8px' }}>
                        Próximo exercício
                    </span>
                    <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                </ButtonFail>
            </Stack>
        </aside>
    )
}


function isTopicField(field: CommonField): field is TopicField {
    return field && "exercisesInfo" in field
}

interface ButtonNextProps {
    idExercise: string
    renderData: ApiResponse
}

export const ButtonNextExercise: React.FC<ButtonNextProps> = ({ idExercise, renderData }) => {
    const router = useRouter()
    const pathname = usePathname()

    const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'))

    if (!renderData) {
        return (<ContainerButtonFail isVisible={false} />)
    }
    const partsPathname = pathname.split("/")
    const idExerciseBase = idExercise.split("-")[0]
    const idTopicBase = partsPathname[partsPathname.length - 2]?.split("-")[0]
    const currentTopic = renderData?.data?.find((element: DataItem) => { return element.field?.rowId === idTopicBase })

    if (currentTopic && isTopicField(currentTopic.field)) {
        const topicField = currentTopic.field

        const exerciseIds = topicField.exercisesInfo?.split(",") || []
        const exerciseNames = topicField.exercises?.split(",") || []

        const currentExerciseIndex = exerciseIds.indexOf(idExerciseBase)
        const nextExerciseName = exerciseNames[currentExerciseIndex + 1] || null
        const nextExerciseId = exerciseIds[currentExerciseIndex + 1] || null

        const handleClick = () => {
            router.push(`${nextExerciseId}-${nextExerciseName}`)
        }

        if (nextExerciseId) {
            return (
                isSmallScreen
                    ? <ClickButton click={handleClick} endIcon={<ArrowForwardIosIcon sx={{ fontSize: 15 }} />} />
                    : <ClickButton title="Próximo exercício" click={handleClick} endIcon={<ArrowForwardIosIcon sx={{ fontSize: 15, marginLeft: 1 }} />} />
            )
        }

        return <ContainerButtonFail isVisible={false} />
    }

    return <ContainerButtonFail isVisible={false} />

}