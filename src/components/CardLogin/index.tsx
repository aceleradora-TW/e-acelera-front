import { theme, themePalette } from "@/app/config/theme";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import agilLogo from "../../../public/assets/logo.svg";
import githubLogo from "../../../public/assets/github-icon.png";
import facebookLogo from "../../../public/assets/facebook-icon.png";
import googleLogo from "../../../public/assets/google-icon.png";
import linkedinLogo from "../../../public/assets/linkedin-icon.png";
import { SocialLoginButton } from "../SocialLoginButton";
import { signIn } from "next-auth/react";

export const CardLogin = () => {
  const isMobileScreen = useMediaQuery('(max-width: 600px)');

  const getRedirectUrl = () => {

    const redirectUrl = localStorage.getItem("redirectAfterLogin")
    return redirectUrl ? redirectUrl : "/"
  }

  return (
    <Box sx={{ height: "100%", display: "flex", justifyContent: "center", marginTop: 4 }}>
      <Box sx={theme.customStyles.cardLoginBox}>
        <Grid container spacing={2.5}>
          <Grid container item xs={12} alignItems="center">
            <Grid item>
              <Image
                src={agilLogo}
                alt="Logo da Aceleradora Ágil"
                width={isMobileScreen ? 60 : 80}
                height={90}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ marginLeft: 2, fontSize: isMobileScreen ? 28 : 34 }}>
                E-Acelera
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                ...theme.customStyles.title,
                fontSize: {
                  xs: "32px",
                  sm: "40px",
                  md: "40px",
                  lg: "44px",
                  xl: "48px",
                },
              }}
            >
              Bem-vindo!
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                color: themePalette.title,
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "24px",
                  lg: "24px",
                  xl: "24px",
                },
                marginBottom: "15px",
              }}
            >
              Entre com sua rede social para acessar nossa plataforma:
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <SocialLoginButton
              hoverBackgroundColor="rgba(72, 72, 72, 1)"
              platformIcon={githubLogo}
              platformName="GitHub"
              onClick={() => signIn("github", { callbackUrl: getRedirectUrl() })}
            />
          </Grid>
          <Grid item xs={12}>
            <SocialLoginButton
              hoverBackgroundColor="rgba(145, 26, 26, 1)"
              platformIcon={googleLogo}
              platformName="Google"
              onClick={() => signIn("google", { callbackUrl: getRedirectUrl() })}
            />
          </Grid>
          <Grid item xs={12}>
            <SocialLoginButton
              hoverBackgroundColor="rgba(18, 76, 129, 1)"
              platformIcon={linkedinLogo}
              platformName="LinkedIn"
              onClick={() => signIn("linkedin", { callbackUrl: getRedirectUrl() })}
            />
          </Grid>
          <Grid item xs={12}>
            <SocialLoginButton
              hoverBackgroundColor="rgba(42, 81, 138, 1)"
              platformIcon={facebookLogo}
              platformName="Facebook"
              onClick={() => signIn("facebook", { callbackUrl: getRedirectUrl() })}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
