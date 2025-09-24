"use client"
import React from "react";

import { Box, Container, Grid, Link, Typography, useTheme } from "@mui/material";
import { Language, LinkedIn} from "@mui/icons-material";
import Image from "next/image";
import { AccessibilityMenu } from "../AccessibilityMenu ";

interface FooterProps {
  linkedinUrl: string;
  projectUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ linkedinUrl, projectUrl }) => {
  const theme = useTheme();
  return (  
  <Box
    component="footer"
    sx={{
        ...theme.customStyles.Footer,
      }}
    >
      <AccessibilityMenu />
      <Container maxWidth="xl"  sx={{ pt: 4, pb: 1}}>
        <Grid container spacing={{xs: 4, md: 8}}>
          <Grid item
          xs={12}
          md={5}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
              >
                Sobre o e-Acelera
              </Typography>

              <Typography variant="body2">
                  O e-Acelera é uma plataforma do Projeto Aceleradora, que impulsiona o aprendizado de desenvolvedores por meio de conteúdos práticos e colaborativos, preparando profissionais para os desafios do mercado.
              </Typography>
          </Grid>

          <Grid item
          xs={12} md={3}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
              >
                Saiba mais
              </Typography>
              <Link
                href={projectUrl}
                target="_blank"
                rel="noopener"
                underline="hover"
                sx={{
                  color: theme.palette.bgColor?.main,
                }}
                variant="body2"
              >
                <Language
                  sx={{
                    verticalAlign: "middle",
                    mr: 1,
                  }}
                />
                Projeto Aceleradora
              </Link>

              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener"
                underline="hover"
                sx={{
                  color: theme.palette.bgColor?.main,
                  display: "flex",
                  alignItems: "center",
                }}
                variant="body2"
              >
                <LinkedIn
                  sx={{
                    verticalAlign: "middle",
                    mr: 1,
                  }}
                />
                LinkedIn
              </Link>
          </Grid>

          <Grid item
          xs={12} md={4}>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
              >
                Patrocinadores
              </Typography>

              <Box
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  marginLeft: 0,
                  gap: 2,
                }}
              >
                <Image
                  width={43}
                  height={48}
                  src="/assets/logoGlobo.svg"
                  alt="logo globo"
                />

                <Image
                  width={43}
                  height={48}
                  src="/assets/logoTecnoPUC.svg"
                  alt="logo TecnoPUC"
                />

                <Image
                  width={43}
                  height={48}
                  src="/assets/logoPUC.svg"
                  alt="logo PUC"
                />

                 <Image
                  width={43}
                  height={48}
                  src="/assets/logoTW.svg"
                  alt="logo TW"
                />
              </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="left">
          <Typography variant="body2" 
          sx={{ color: theme.palette.bgColor?.main,
            fontSize: "0.75rem"
          }}>
            Desenvolvido por Aceleradora Ágil • © {new Date().getFullYear()} Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  )};
