import { theme } from "@/app/config/themes";
import { ClickButton } from "@/components/ClickButton";
import { Grid, Typography } from "@mui/material";

export const UpperBanner = () => (
    <Grid container alignItems="center" sx={{ backgroundColor:"#E1E9EF"}} justifyContent="space-between" padding={2}>
        <Grid item>
            <Grid container>
                <Grid item>
                    <Typography variant="h2" >CMS e-Acelera</Typography>
                </Grid>
            </Grid>

            <Grid container spacing={2} justifyContent="center">
                <Grid item> 
                    <ClickButton title="Themes" click={() => console.log("Themes")}/>   
                </Grid>   
                <Grid item> 
                    <ClickButton title="Topics" click={() => console.log("Topics")}/>   
                </Grid>   
                <Grid item> 
                    <ClickButton title="Exercises" click={() => console.log("Exercises")}/>   
                </Grid>   
                <Grid item> 
                    <ClickButton title="Videos" click={() => console.log("Videos")}/>   
                </Grid>   
            </Grid>
        </Grid>
        <Grid item>
             <ClickButton title="Criar" click={() => console.log("Criar")}/>   
        </Grid>
    </Grid>
  )
   
