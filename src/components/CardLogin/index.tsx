import { theme } from "@/app/config/theme";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import githubLogo from "../../../public/assets/github-icon.png";
import googleLogo from "../../../public/assets/google-icon.png";
import linkedinLogo from "../../../public/assets/linkedin-icon.png";
import { SocialLoginButton } from "../SocialLoginButton";
import { signIn } from "next-auth/react";

export const CardLogin = () => {
  const isMobileScreen = useMediaQuery("(max-width: 600px)")

  return (
    <Box
      sx={theme.customStyles.containerLogin}
    >
      <Box sx={theme.customStyles.cardLoginBox}>
        <Grid container spacing={2.5}>
          <Grid item xs={12}>
            <Box sx={theme.customStyles.boxLogoType}>
              <Image
                width={90}
                height={70}
                src="/assets/logo.svg"
                alt="logo e-acelera"
              />

              <Typography
              noWrap
              component="a"
              href="/"
              sx={
                theme.customStyles.logoTypeLogin
              }
              >
                E-Acelera
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                ...theme.customStyles.title,
                ...theme.customStyles.h1Login
              }}

            >
              Te desejamos <br /> boas vindas!
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.textColor?.light,
                ...theme.customStyles.body1Login
              }}
            >
              Acesse nossa plataforma com sua rede social:
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <SocialLoginButton
              platformIcon={githubLogo}
              platformName="GitHub"
              onClick={() =>
                signIn("github")
              }
              
            />
          </Grid>
          <Grid item xs={12}>
            <SocialLoginButton
              platformIcon={googleLogo}
              platformName="Google"
              onClick={() =>
                signIn("google")
              }
            />
          </Grid>
          <Grid item xs={12}>
            <SocialLoginButton
              platformIcon={linkedinLogo}
              platformName="LinkedIn"
              onClick={() =>
                signIn("linkedin")
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
