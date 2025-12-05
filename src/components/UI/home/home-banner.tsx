"use client"

import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";

export const HomeBanner = () => {
  const theme = useTheme();
  const bannerStyles = (theme as any).customStyles.banner;

  const title = "Acelerando talentos em tecnologia";
  const subtitle =
    "Plataforma aberta e gratuita de programação com possibilidade de programa de estágio remunerado de 18 semanas.";
  const ctaText = "Conheça o Projeto Aceleradora e o e Acelera";
  const ctaTargetId = "#study-section";
  const imageUrl = "/assets/home-banner.png";

  const corAzul = "#002C53";
  const corAzulTransparente = "rgba(0, 44, 83, 0)";

  const bannerImageStyle = {
    ...bannerStyles.imageBox,
    width: { xs: "100%", md: "50%" },
    marginLeft: { xs: "0", md: "-2px" },
    marginTop: { xs: "-2px", md: 0 },
    backgroundPosition: { xs: "center top", md: "top" },
    minHeight: { xs: "300px", md: "auto" },
    order: { xs: -1, md: 0 },
    backgroundImage: {
      md: `linear-gradient(to right, ${corAzul} 0%, ${corAzul} 1%, ${corAzulTransparente} 20%), url(${imageUrl})`,
      xs: `linear-gradient(to top, ${corAzul} 0%, ${corAzul} 45%, ${corAzulTransparente} 65%), url(${imageUrl})`,
    },
  };

  return (
    <Box
      component="section"
      sx={{
        ...bannerStyles.container,
        minHeight: "500px",
        width: "100%",
        marginTop: { xs: "-20px", md: "-15px" },
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          ...bannerStyles.contentBox,
          width: { xs: "100%", md: "50%" },
          backgroundColor: corAzul,
          marginTop: { xs: "-100px", md: 0 },
          padding: {
            xs: "10px 5% 40px 5%",
            md: "80px 0 80px 10%",
          },
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            margin: { xs: "-100px 0 0 0", md: "0 -120px 0 0" },
            paddingRight: "0",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "2.4rem", sm: "2.5rem", md: "3.5rem" },
              lineHeight: 1.4,
              marginBottom: 2,
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1.4rem", md: "1.6rem" },
              marginBottom: 4,
              maxWidth: "700px",
            }}
          >
            {subtitle}
          </Typography>
          <Link
            variant="body1"
            href={ctaTargetId}
            underline="none"
            aria-label="Ir para a seção 'Plataforma de Estudos do e-Acelera'"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "inherit",
              display: "flex",
              marginLeft: "-6px",
              alignItems: "center",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <SouthIcon aria-hidden="true" /> {ctaText}
          </Link>
        </Box>
      </Box>
      <Box sx={bannerImageStyle} />
    </Box>
  );
};
