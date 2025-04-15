import { theme } from "@/app/config/themes"
import { Button, ButtonProps, Stack, styled } from "@mui/material"
import { usePathname, useRouter } from "next/navigation"
import { ApiResponse, CommonField, DataItem, TopicField } from "@/types/type"
import { ClickButton } from "../ClickButton"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import useMediaQuery from "@mui/material/useMediaQuery"

const ButtonFail = styled(Button)<ButtonProps>(() => ({
  "&:hover": {
    backgroundColor: "gray",
    color: theme.palette.buttonHover?.contrastText,
    border: "none",
  }
}))

const ContainerButtonFail = ({ isVisible }: { isVisible: boolean }) => (
    <aside>
      <Stack spacing={2} direction="row">
        <ButtonFail
          sx={{
            ...theme.customStyles.button,
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? "auto" : "none",
            [theme.breakpoints.down("md")]: {
              ".button-text": {
                display: "none",
              },
            },
          }}
          variant="contained"
        >
          <span className="button-text" style={{ marginRight: "8px" }}>
            Próximo exercício
          </span>
          <ArrowBackIosIcon sx={{ fontSize: 15, marginRight: 1 }} />
        </ButtonFail>
      </Stack>
    </aside>
  )

function isTopicField(field: CommonField): field is TopicField {
  return field && "exercisesInfo" in field;
}

interface ButtonNextProps {
  idExercise: string
  renderData: ApiResponse
}

export const ButtonPreviousExercise: React.FC<ButtonNextProps> = ({
  idExercise,
  renderData,
}) => {
  const router = useRouter()
  const pathname = usePathname()

  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down("md"))

  if (!renderData) {
    return <ContainerButtonFail isVisible={false} />
  }

  const partsPathname = pathname.split("/")
  const idExerciseBase = idExercise.split("-")[0]
  const idTopicBase = partsPathname[partsPathname.length - 2]?.split("-")[0]
  const currentTopic = renderData?.data?.find(
    (element: DataItem) => element.field?.rowId === idTopicBase
  )

  if (currentTopic && isTopicField(currentTopic.field)) {
    const topicField = currentTopic.field

    const exerciseIds = topicField.exercisesInfo?.split(",") || []
    const exerciseNames = topicField.exercises?.split(",") || []

    const currentExerciseIndex = exerciseIds.indexOf(idExerciseBase)
    const PreviousExerciseName =
      exerciseNames[currentExerciseIndex - 1] || null
    const PreviousExerciseId = exerciseIds[currentExerciseIndex - 1] || null

    const handleClick = () => {
      router.push(`${PreviousExerciseId}-${PreviousExerciseName}`)
    }

    if (PreviousExerciseId) {
      return isSmallScreen ? (
        <ClickButton
          click={handleClick}
          backIcon={<ArrowBackIosIcon sx={{ fontSize: 15 }} />}
        />
      ) : (
        <ClickButton
          title="Exercício anterior"
          click={handleClick}
          backIcon={<ArrowBackIosIcon sx={{ fontSize: 15, marginRight: 1 }} />}
        />
      )
    }

    return <ContainerButtonFail isVisible={false} />
  }

  return <ContainerButtonFail isVisible={false} />
}
