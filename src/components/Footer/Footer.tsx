"use client";
import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { Language, LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import { useAccessibility } from "@/context/accessibility.context";
import { useTheme } from "@mui/material/styles";

interface FooterProps {
  linkedinUrl: string;
  projectUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ linkedinUrl, projectUrl }) => {
  const { contrastEnabled } = useAccessibility();
  const muiTheme = useTheme();

  const footerBg = contrastEnabled
    ? "#222"
    : muiTheme.customStyles?.Footer?.background ??
      muiTheme.palette.primary.main;
  const footerText = contrastEnabled
    ? "#E0E0E0"
    : muiTheme.customStyles?.Footer?.color ??
      muiTheme.palette.primary.contrastText;
  const linkColor = contrastEnabled
    ? "#E0E0E0"
    : muiTheme.palette.bgColor?.main ?? muiTheme.palette.primary.contrastText;

  return (
    <Box
      component="footer"
      sx={{
        ...muiTheme.customStyles?.Footer,
        background: footerBg,
        color: footerText,
      }}
    >
      <Container maxWidth="xl" sx={{ pt: 4, pb: 1 }}>
        <Grid container spacing={{ xs: 4, md: 4 }}>

          <Grid item xs={12} md={4.5}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ color: footerText }}>
              Sobre o e-Acelera
            </Typography>

            <Typography variant="body2" sx={{ color: footerText }}>
              O e-Acelera é uma plataforma do Projeto Aceleradora, que impulsiona o aprendizado de desenvolvedores por meio de conteúdos práticos e colaborativos, preparando profissionais para os desafios do mercado.
            </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ color: footerText }}
            >
              Saiba mais
            </Typography>
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener"
              underline="hover"
              sx={{
                color: linkColor,
              }}
              variant="body2"
            >
              <Language
                sx={{ verticalAlign: "middle", mr: 1, color: linkColor }}
              />
              Projeto Aceleradora
            </Link>

            <Link
              href={linkedinUrl}
              target="_blank"
              rel="noopener"
              underline="hover"
              sx={{
                color: linkColor,
                display: "flex",
                alignItems: "center",
              }}
              variant="body2"
            >
              <LinkedIn
                sx={{ verticalAlign: "middle", mr: 1, color: linkColor }}
              />
              LinkedIn
            </Link>
          </Grid>

          <Grid item xs={8} md={2} sx={{marginLeft: "2px",}}>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{ color: footerText }}
            >
              Patrocinadores
            </Typography>

            <Box
              mt={2}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  sm: "repeat(4, 1fr)",
                  xxs: "1fr",
                },
                gap: 2,
                alignItems: "left",
                justifyItems: "left",
                filter: "brightness(0) invert(1)",
              }}
            >
              <Image width={100} height={28} src="/assets/logoGlobo.webp" alt="logo globo"/>
              <Image width={140} height={23} src="/assets/logoTecnoPUC.webp" alt="logo TecnoPUC"/>
              <Image width={100} height={23} src="/assets/logoPUC.webp" alt="logo PUC" />
              <Image width={130} height={28} src="/assets/logoTW.webp" alt="logo TW" /> 
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="left">
          <Typography
            variant="body2"
            sx={{
              color: footerText,
              fontSize: "0.75rem",
            }}
          >
            Desenvolvido por Aceleradora Ágil • © {new Date().getFullYear()}{" "}
            Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
