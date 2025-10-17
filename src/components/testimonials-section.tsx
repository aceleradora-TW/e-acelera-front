"use client"
import React from "react";
import { Avatar, Box, Container, Grid, Typography, useTheme,  } from "@mui/material";

export const TestimonialsSection = () => {
  const theme = useTheme();

  const testimonials = [
    {
      text:"blablab dshadsah dhasudhsua hhcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
      img: "/assets/avatar1.svg",
      name:"Carlos Schallenberger",
      class: "Turma 25",
    },
     {
      text:"blablablabakbjhcbddddddd fffff ff dfds hvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw blablablabakbjhcbddddddd fffff ff dfds hvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
      img: "/assets/avatar1.svg",
      name:"Carlos Schallenberger",
      class: "Turma 25",
    },
    {
      text:"blablablabakbjhcbdhvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
      img: "/assets/avatar1.svg",
      name:"Carlos Schallenberger",
      class: "Turma 25",
    },
     {
      text:"blablablabakbjhcbdhvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
      img: "/assets/avatar1.svg",
      name:"Carlos Schallenberger",
      class: "Turma 25",
    },
  ]

  return(
    <Box
      component="section"
        sx={{
          ...theme.customStyles.testimonials,
          pb: 4,
        }}
    >
      <Container maxWidth= "lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: "left",
            pt: 4,
            mb: { xs: 1, md: 2 },
          }}
        >
          Depoimentos reais
        </Typography>

        <Typography
          variant="body1"
          sx= {{
            textAlign: "left"
          }}
        > 
          A Aceleradora Ágil é feita de pessoas, e são elas que melhor traduzem o impacto dessa jornada. Aqui, você encontra relatos reais de quem aprendeu, criou, se conectou e transformou sua trajetória com o Projeto Aceleradora Ágil
        </Typography>

      <Grid container maxWidth="lg" justifyContent="center" spacing={3} >
        {testimonials.map((item, index) => (
          <Grid item key={index}
            
            marginTop={3}
            xs={12}    // ocupa a linha toda no mobile
            sm={6}     // 2 por linha em tablets
            md={3}    // 4 por linha no desktop
          >
            <Box
              sx={{
                margin: "0 auto",
                maxWidth: "300px",
                height: "250px",
                display: "flex", 
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: theme.palette.textColor?.main,
                padding: "12px",
                borderRadius: "4px",
                border: "3px solid transparent",
                backgroundImage: `
                  linear-gradient(${theme.palette.textColor?.main}, ${theme.palette.textColor?.main}),
                  linear-gradient(to right, #EB658C, #F5AF55)
                `,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",

                // evitar que o texto transborde
                overflowWrap: "break-word",
                wordWrap: "break-word",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              <Typography variant="body1"
                sx={{
                  maxHeight: "120px",
                  overflowY: "auto", 
                  overflowX: "hidden",
                  wordBreak: "break-word",
                  paddingRight: "4px",
                  "&::-webkit-scrollbar": {
                  width: "6px",
                },
                    '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#ccc',
                  borderRadius: '8px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  backgroundColor: '#aaa',
                },
                  }}
              >
                “{item.text}”
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Avatar
                  alt={item.name}
                  src={item.img}
                  sx={{ width: 56, height: 56 }}
                />

                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    {item.name}
                  </Typography>
                  <Typography variant="body2">
                    {item.class}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  )
}
