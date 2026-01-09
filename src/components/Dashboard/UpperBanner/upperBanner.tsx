import { theme } from "@/app/config/themes";
import { BreadCrumb } from "@/components/BreadCrumb";
import { ClickButton } from "@/components/ClickButton";
import { Grid, Typography } from "@mui/material";

type UpperBannerProps = {
  title: string,
  menuBanner?: boolean,
  createButton?: boolean,
  editButton?: boolean,
  showBreadCrumb?: boolean,
}

export const UpperBanner = ({
    title,
    menuBanner,
    createButton,
    editButton,
    showBreadCrumb,
} : UpperBannerProps) => (
    <Grid container alignItems="center" sx={{ backgroundColor:"#E1E9EF"}} justifyContent="space-between" padding={2}>
        <Grid item>
            <Grid container>
                <Grid item>
                    {showBreadCrumb && ( <BreadCrumb /> )}
                    <Typography variant="h2" >{title}</Typography>
                </Grid>
            </Grid>
            { menuBanner &&(
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
            )}
        </Grid>
        <Grid item>
            { createButton && (
                 <ClickButton title="Criar" click={() => console.log("Criar")}/>   
            )}
            { editButton && (
                 <ClickButton title="Editar" click={() => console.log("Editar")}/>   
            )}
        </Grid>
    </Grid>
  )
   
