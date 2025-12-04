import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { BreadCrumb } from "@/components/BreadCrumb";
import { AdminJsExerciseResponse, ApiResponse, DataItem, ExercisesField, AdminJsExercise } from "@/types/type";
import { DescriptionFull } from "@/components/descriptions/description-full";
import { ContainerButtonsExercise } from "../../Container/ContainerButtonsExercise";
import { Heading } from "@/components/Heading";
import StatusSelect from "@/components/StatusSelect";
import { ElementType } from "@/types/typeTopic";
import { useFlags } from "flagsmith/react";
import { NoData } from "@/components/NoData";
import { theme } from "@/app/config/themes"
import { ClickButton } from "@/components/ClickButton";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useRouter } from "next/dist/client/components/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"


interface DetailingContentProps {
  dataTopic: ApiResponse
  dataExercise: AdminJsExerciseResponse | DataItem;
  id: string;
}

const ExerciseContent: React.FC<{
  field: ExercisesField;
  idExercise: string;
  dataTopic: ApiResponse
}> = ({ field, idExercise, dataTopic }) => (
  <>
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
      <BreadCrumb />
    </Grid>

    <Grid
      container
      xl={12}
      lg={12}
      md={12}
      sm={12}
      xs={12}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2
      }}
    >
      <Grid item>
        <Heading variant="h1" text={field.title} />
      </Grid>
      <Grid item >
        <StatusSelect elementType={ElementType.Exercise} id={idExercise} width="100%" />
      </Grid>
    </Grid>
    <DescriptionFull text={field.description} />
    <ContainerButtonsExercise idExercise={idExercise} data={dataTopic} />
  </>
);

const AdminJsExerciseContent: React.FC<{
  exercise: AdminJsExercise;

}> = ({ exercise }) => {
  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'))
  const router = useRouter()
  const totalExercises = exercise.topic.exercises.length
  const currentExerciseIdx = exercise.topic.exercises.findIndex(ex => ex.id === exercise.id)
  const hasPreviousExercise = currentExerciseIdx > 0
  const hasNextExercise = currentExerciseIdx < totalExercises - 1
  const previousExerciseId = hasPreviousExercise ? exercise.topic.exercises[currentExerciseIdx - 1].id : null
  const nextExerciseId = hasNextExercise ? exercise.topic.exercises[currentExerciseIdx + 1].id : null
    const nextExercise = () => {
    if(!nextExerciseId) return;
    router.push(`${nextExerciseId}`)
  }
    const previousExercise = () => {
    if(!previousExerciseId) return;
    router.push(`${previousExerciseId}`)
  }

  return (
    <>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <BreadCrumb />
      </Grid>

      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2
        }}
      >
        <Grid item>
          <Heading variant="h1" text={exercise.title} />
        </Grid>
        <Grid item >
          <StatusSelect elementType={ElementType.Exercise} id={exercise.id} width="100%" />
        </Grid>
      </Grid>
      <DescriptionFull text={exercise.description} />
      <Grid
        container
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0",
          gap: "20px"
        }}
      >
        <Grid item>
          {hasPreviousExercise && <>
          {isSmallScreen
            ? <ClickButton click={previousExercise} backIcon={<ArrowBackIosIcon sx={{ fontSize: 15 }} />} />
            : <ClickButton title="Exercício anterior" click={previousExercise} backIcon={<ArrowBackIosIcon sx={{ fontSize: 15, marginLeft: 1 }} />} />}
          </>
          }
        </Grid>
        
        <Grid item>
          {exercise.topic.exercises.findIndex(ex => ex.id === exercise.id) + 1}/{exercise.topic.exercises.length}
        </Grid>
        <Grid item>
          {hasNextExercise && <>
          {isSmallScreen
            ? <ClickButton click={nextExercise} endIcon={<ArrowForwardIosIcon sx={{ fontSize: 15 }} />} />
            : <ClickButton title="Próximo exercício" click={nextExercise} endIcon={<ArrowForwardIosIcon sx={{ fontSize: 15, marginLeft: 1 }} />} />}
            </>
            }
        </Grid>
      </Grid>
    </>
  )
};

//is_adminjsPreference - estava dentro de detailingExerciseContent
export const DetailingExerciseContent: React.FC<DetailingContentProps> = ({
  dataTopic,
  dataExercise,
  id,
}) => {

  const { flag_adminjs, is_test_user, adminjs_preference } = useFlags(['flag_adminjs'], ['is_test_user', 'adminjs_preference']);
  const isStackby = "field" in dataExercise

  if (isStackby) {
    return <ExerciseContent field={dataExercise.field as ExercisesField} idExercise={id} dataTopic={dataTopic} />;
  }

  if (flag_adminjs.enabled || (is_test_user && adminjs_preference)) {
    return <AdminJsExerciseContent exercise={dataExercise.data} />;
  }

  return <NoData />;
};
