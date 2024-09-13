import { ButtonPreviousExercise } from "@/components/ButtonPreviousExercise";
import { ButtonNextExercise } from "@/components/ButtonNextExercise";
import { Grid } from "@mui/material";
import { ApiResponse } from "@/types/type";
import useFetchData from "@/components/fetchData";


interface ContainerButtonsExerciseProps {
  idExercise: string;
}

export const ContainerButtonsExercise: React.FC<
  ContainerButtonsExerciseProps
> = ({ idExercise }) => {
  const { data: renderDataTopic,  statusCode: codeTopic} = useFetchData('/api/stackbyApi/Topics');

  if(renderDataTopic){
  return (
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
        <ButtonPreviousExercise
          renderData={renderDataTopic}
          idExercise={idExercise}
        />
      </Grid>
      <Grid item>
        <ButtonNextExercise renderData={renderDataTopic} idExercise={idExercise} />
      </Grid>
    </Grid>
  );}
  return null
};
