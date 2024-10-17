import { theme } from "@/app/config/theme"
import { Box, Grid, Typography } from "@mui/material"
import { Title } from "../title"
import Image from "next/image";
import logo from "../../../public/assets/logo.svg"
import { LoginButton } from "../LoginButton";

export const CardLogin = () => {
  return (
    <Box sx={{ height: "100%", width: "100%", justifyContent: "center", display: "flex", marginTop: 4 }}>
      <Box sx={{ width: "35%", boxShadow: "0em 0em 0.4em rgb(44 44 44 / 40% );", padding: "65px 40px 60px 40px"}} >
        <Grid container >
          <Grid container item xl={6} lg={6} md={6} sm={6} xs={6} sx={{ alignItems: "center" }}>
            <Grid item>
              <Image src={logo} alt="Logo da aceleradora ágil" width={80} height={90} />
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ marginLeft: 2, fontSize: 34 }}>
                E-Acelera
              </Typography>
            </Grid>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="h1"
              sx={theme.customStyles.title}
            >
              Bem-vindo!
            </Typography>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="body1"
              sx={{ ...theme.customStyles.title, fontSize: "24px" }}
            >Entre com sua rede social para
              acessar nossa plataforma:</Typography>
          </Grid>
          <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} spacing={2.5}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <LoginButton icon={logo} website="GitHub" click={()=> alert()}/>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <LoginButton icon={logo} website="Google" click={()=> alert()}/>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <LoginButton icon={logo} website="Linkedin" click={()=> alert()}/>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <LoginButton icon={logo} website="Facebook" click={()=> alert()}/>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>

  )
}