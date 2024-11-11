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
  const isMobileScreen = useMediaQuery("(max-width: 600px)");

  const getRedirectUrl = () => {
    const redirectUrl = localStorage.getItem("redirectAfterLogin");
    return redirectUrl ? redirectUrl : "/";
  };

  return (
    <Box
      sx={theme.customStyles.containerLogin}
    >
      <Box sx={theme.customStyles.cardLoginBox}>
        <Grid container spacing={2.5}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
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
                fontSize: {
                  xs: "32px",
                  sm: "40px",
                  md: "40px",
                  lg: "44px",
                  xl: "48px",
                },
              }}
            >
              Te desejamos <br /> boas vindas!
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                color: themePalette.descriptionCard,
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
              Acesse nossa plataforma com sua rede social:
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <SocialLoginButton
              platformIcon={githubLogo}
              platformName="GitHub"
              onClick={() =>
                signIn("github", { callbackUrl: getRedirectUrl() })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <SocialLoginButton
              platformIcon={googleLogo}
              platformName="Google"
              onClick={() =>
                signIn("google", { callbackUrl: getRedirectUrl() })
              }
            />
          </Grid>
          <Grid item xs={12}>
            <SocialLoginButton
              platformIcon={linkedinLogo}
              platformName="LinkedIn"
              onClick={() =>
                signIn("linkedin", { callbackUrl: getRedirectUrl() })
              }
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
