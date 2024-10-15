import { theme } from "@/app/config/theme"
import { Box, Grid, Typography } from "@mui/material"
import { Title } from "../title"

export const CardLogin = () => {
    return (
    <Box sx={{ height: "100%", width: "100%", justifyContent: "center", display:"flex"}}>
      <Box sx={{ width: "50%",boxShadow: "0em 0em 0.4em rgb(44 44 44 / 40% );"}} >
        <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography
                    variant="h1"
                    component="div"
                    sx={theme.customStyles.title}>
                    E-Acelera
                </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography
                    variant="h2"
                    component="div"
                    sx={theme.customStyles.title}>
                    Bem-vindo!
                </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
             <Typography 
                    component="div" sx={theme.customStyles.title}>Entre com sua rede social para
             acessar nossa plataforma:</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
             
            </Grid>
        </Grid>
      </Box>
    </Box>
    
    )
}