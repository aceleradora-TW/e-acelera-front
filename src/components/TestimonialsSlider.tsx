"use client";
import React from "react";
import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ArrowProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  direction: "left" | "right";
};

const Arrow: React.FC<ArrowProps> = ({ onClick, direction }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      [direction === "left" ? "left" : "right"]: "-30px",
      zIndex: 2,
      color: "#fff",
    }}
  >
    {direction === "left" ? <ArrowBackIosNew /> : <ArrowForwardIos />}
  </IconButton>
);

type TestimonialsSliderProps = {
  children: React.ReactNode;
};

export const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 4,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        position: "relative",
        px: { xs: 1, md: 0 },
        "& .slick-slide > div": {
          px: 1,
        },
        "& .slick-list": {
          mx: "-8px",
        },
      }}
    >
      <Slider {...sliderSettings}>{children}</Slider>
    </Box>
  );
};
