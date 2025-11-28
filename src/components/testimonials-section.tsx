"use client";
import React from "react";
import {
  Avatar,
  Box,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { Slider } from "./UI/slider";
import { TESTIMONIALS } from "@/utils/constants";

type Testimonial = {
  text: string;
  img: string;
  name: string;
  class: string;
};

export const TestimonialsSection = () => {
  const theme = useTheme();

  const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
    <Box
      sx={{
        margin: "0 auto",
        maxWidth: "320px",
        height: "210px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: theme.palette.textColor?.main,
        padding: "12px",
        borderRadius: "4px",
        border: "3px solid white",
        overflowWrap: "break-word",
        wordBreak: "break-word",
        hyphens: "auto",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          maxHeight: "100px",
          overflowY: "auto",
          overflowX: "hidden",
          paddingRight: "2px",
          "&::-webkit-scrollbar": { width: "5px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#aaa",
          },
        }}
      >
        “{item.text}”
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Avatar alt={item.name} src={item.img} sx={{ width: 70, height: 70 }} />
        <Box>
          <Typography variant="body1" fontWeight="bold">
            {item.name}
          </Typography>
          <Typography variant="body2">{item.class}</Typography>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      component="section"
      sx={{
        ...theme.customStyles.testimonials,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
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
          sx={{
            textAlign: "left",
            mb: 3,
          }}
        >
          A Aceleradora Ágil é feita de pessoas, e são elas que melhor traduzem o
          impacto dessa jornada. Aqui, você encontra relatos reais de quem
          aprendeu, criou, se conectou e transformou sua trajetória com o Projeto
          Aceleradora Ágil.
        </Typography>

          <Slider>
          {TESTIMONIALS.map((item, index) => (
            <Box key={index}>
              <TestimonialCard item={item} />
            </Box>
          ))}
          </Slider>
      </Container>
    </Box>
  );
};
