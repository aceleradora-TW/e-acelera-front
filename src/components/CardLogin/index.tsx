import { theme, themePalette } from "@/app/config/theme"
import { Box, Grid, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image";
import agilLogo from "../../../public/assets/logo.svg"
import githubLogo from "../../../public/assets/github-icon.png"
import facebookLogo from "../../../public/assets/facebook-icon.png"
import googleLogo from "../../../public/assets/google-icon.png"
import linkedinLogo from "../../../public/assets/linkedin-icon.png"
import { LoginButton } from "../LoginButton";
import { signIn } from "next-auth/react";

export const CardLogin = () => {
  const isMobileScreen = useMediaQuery('(min-width: 0px) and (max-width: 600px)')
  return (
    <Box sx={{ height: "100%", width: "100%", justifyContent: "center", marginTop: 4, display: "flex" }}>
      <Box sx={{
        width: {
          xs: "90%",
          sm: "60%",
          md: "45%",
          lg: "35%",
          xl: "30%"
        }, height: "30%", boxShadow: "0em 0em 0.4em rgb(44 44 44 / 40% );", padding: "40px",
      }} >
        <Grid container >
          <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} sx={{ alignItems: "center" }}>
            <Grid item>
              <Image src={agilLogo} alt="Logo da aceleradora ágil" width={isMobileScreen ? 60: 80} height={90} />
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ marginLeft: 2, fontSize: isMobileScreen? 28 :34}}>
                E-Acelera
              </Typography>
            </Grid>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="h1"
              sx={{...theme.customStyles.title, fontSize: {
                xs: "32px",
                sm: "40px",
                md: "40px",
                lg: "44px",
                xl: "48px"
              }}}
            >
              Bem-vindo!
            </Typography>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography
              variant="body1"
              sx={{ color: themePalette.title , fontSize: {
                xs: "18px",
                sm: "20px",
                md: "24px",
                lg: "24px",
                xl: "24px"
              }, marginBottom: "15px" }}
            >Entre com sua rede social para
              acessar nossa plataforma:</Typography>
          </Grid>
          <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} spacing={2.5}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <LoginButton hoverColor="rgb(72, 72, 72, 100)" icon={githubLogo} website="GitHub" onClick={() => signIn("github", {callbackUrl: "/Nivelamento"})} />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <LoginButton hoverColor="rgb(145, 26, 26, 100)" icon={googleLogo} website="Google" onClick={() => signIn("google", {callbackUrl: "/Nivelamento"})} />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <LoginButton hoverColor="rgb(18, 76, 129, 100)" icon={linkedinLogo} website="Linkedin" onClick={() => signIn("linkedin", {callbackUrl: "/Nivelamento"})} />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <LoginButton hoverColor="rgb(42, 81, 138, 100)" icon={facebookLogo} website="Facebook" onClick={() => signIn("facebook", {callbackUrl: "/Nivelamento"})} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>

  )
}