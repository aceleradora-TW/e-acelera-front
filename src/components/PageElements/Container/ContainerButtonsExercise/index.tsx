import { ButtonPreviousExercise } from "@/components/ButtonPreviousExercise";
import { ButtonNextExercise } from "@/components/ButtonNextExercise";
import { Grid } from "@mui/material";
import { ApiResponse } from "@/types/type";
import { AdvanceExercises } from "@/components/AdvanceExercises";

interface ContainerButtonsExerciseProps {
  idExercise: string;
  data: ApiResponse;
}

export const ContainerButtonsExercise: React.FC<
  ContainerButtonsExerciseProps
> = ({ idExercise, data }) => {

  return data ?(
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
          renderData={data}
          idExercise={idExercise}
        />
      </Grid>
        <Grid item >
        <AdvanceExercises idExercises={idExercise} data={data}/>
      </Grid>
      <Grid item>
        <ButtonNextExercise renderData={data} idExercise={idExercise} />
      </Grid>
    </Grid>
  ): <></>
  
};
