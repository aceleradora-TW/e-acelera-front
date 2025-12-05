"use client"
import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

export const ImpactSection = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        ...theme.customStyles.impactSection,
        pb: 4,
        pt: 4,
      }}
    >
      <Container maxWidth="md"
        sx={{
          px: {
            xs: 3,
            md: 0,
          },
        }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: { xs: 'left', md: 'center' },
            pt: { xs: 4, md: 2 },
            mb: { xs: 1, md: 2 },
          }}
        >
          Impacto que transforma
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: 'left', md: 'center' }
          }}
        >
          A Aceleradora Ágil é mais que uma iniciativa, é um movimento que muda trajetórias. Ao longo dos anos, já impulsionou pessoas, ideias e projetos que seguem gerando impacto real na tecnologia e na sociedade.
        </Typography>
      </Container>

      <Box
        sx={{
          position: "relative",
          margin: { xs: "16px 5%", md: "16px auto" },
          maxWidth: "928px",
          backgroundColor: theme.palette.textColor?.main,
          padding: { xs: "24px", md: "24px 48px" },
          borderRadius: "4px",
          border: "4px solid white",
        }}
      >

        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="space-between" textAlign="left">
          <Grid item xs={12} md={4}>
            <Typography variant="h3"
              sx={{
                lineHeight: 1.2,
                mb: { md: "10px" },
              }}>
              +15 projetos reais desenvolvidos
            </Typography>

            <Typography variant="body1"
              sx={{
                fontSize: {
                  xs: '14px',
                  md: 'body1.fontSize',
                }
              }}>
              Experiências práticas que conectam aprendizado à realidade do mercado.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h3"
              sx={{
                lineHeight: 1.2,
                mb: { md: "10px" },
              }}>
              +215 participantes formados
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "body1.fontSize",
                },
              }}
            >
              Pessoas que hoje trabalham com tecnologia e seguem criando impacto.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h3"
              sx={{
                lineHeight: 1.2,
                mb: { md: "10px" },
                pr: { md: "10px" },
              }}
            >
              +14 anos de atuação
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "body1.fontSize",
                },
              }}
            >
              Uma jornada contínua de inclusão, já guiamos 28 turmas para formação e transformação social.
            </Typography>
          </Grid>
        </Grid>

      </Box>
    </Box>
  )
}