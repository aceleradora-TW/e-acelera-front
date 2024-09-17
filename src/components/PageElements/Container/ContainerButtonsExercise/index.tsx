import { ButtonPreviousExercise } from "@/components/ButtonPreviousExercise";
import { ButtonNextExercise } from "@/components/ButtonNextExercise";
import { Grid } from "@mui/material";


interface ContainerButtonsExerciseProps {
  renderData: string;
  idExercise: string;
}

export const ContainerButtonsExercise: React.FC<
  ContainerButtonsExerciseProps
> = ({ renderData, idExercise }) => {
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
      }}
    >
      <Grid item>
        <ButtonPreviousExercise
          renderData={renderData}
          idExercise={idExercise}
        />
      </Grid>
      <Grid item>
        <ButtonNextExercise renderData={renderData} idExercise={idExercise} />
      </Grid>
    </Grid>
  );
};
