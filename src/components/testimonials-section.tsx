// "use client"
// import React from "react";
// import { Avatar, Box, Container, Grid, Typography, useTheme,  } from "@mui/material";

// export const TestimonialsSection = () => {
//   const theme = useTheme();

//   const testimonials = [
//     {
//       text:"blablab dshadsah dhasudhsua hhcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
//       img: "/assets/avatar1.svg",
//       name:"Carlos Schallenberger",
//       class: "Turma 25",
//     },
//      {
//       text:"blablablabakbjhcbddddddd fffff ff dfds hvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw blablablabakbjhcbddddddd fffff ff dfds hvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
//       img: "/assets/avatar1.svg",
//       name:"Carlos Schallenberger",
//       class: "Turma 25",
//     },
//     {
//       text:"blablablabakbjhcbdhvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
//       img: "/assets/avatar1.svg",
//       name:"Carlos Schallenberger",
//       class: "Turma 25",
//     },
//      {
//       text:"blablablabakbjhcbdhvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
//       img: "/assets/avatar1.svg",
//       name:"Carlos Schallenberger",
//       class: "Turma 25",
//     },
//   ]

//   return(
//     <Box
//       component="section"
//         sx={{
//           ...theme.customStyles.testimonials,
//           pb: 4,
//         }}
//     >
//       <Container maxWidth= "lg">
//         <Typography
//           variant="h2"
//           sx={{
//             textAlign: "left",
//             pt: 4,
//             mb: { xs: 1, md: 2 },
//           }}
//         >
//           Depoimentos reais
//         </Typography>

//         <Typography
//           variant="body1"
//           sx= {{
//             textAlign: "left"
//           }}
//         > 
//           A Aceleradora Ágil é feita de pessoas, e são elas que melhor traduzem o impacto dessa jornada. Aqui, você encontra relatos reais de quem aprendeu, criou, se conectou e transformou sua trajetória com o Projeto Aceleradora Ágil
//         </Typography>

//       <Grid container maxWidth="lg" justifyContent="center" spacing={3} >
//         {testimonials.map((item, index) => (
//           <Grid item key={index}
            
//             marginTop={3}
//             xs={12}    // ocupa a linha toda no mobile
//             sm={6}     // 2 por linha em tablets
//             md={3}    // 4 por linha no desktop
//           >
//             <Box
//               sx={{
//                 margin: "0 auto",
//                 maxWidth: "300px",
//                 height: "250px",
//                 display: "flex", 
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 backgroundColor: theme.palette.textColor?.main,
//                 padding: "12px",
//                 borderRadius: "4px",
//                 border: "3px solid transparent",
//                 backgroundImage: `
//                   linear-gradient(${theme.palette.textColor?.main}, ${theme.palette.textColor?.main}),
//                   linear-gradient(to right, #EB658C, #F5AF55)
//                 `,
//                 backgroundOrigin: "border-box",
//                 backgroundClip: "padding-box, border-box",

//                 // evitar que o texto transborde
//                 overflowWrap: "break-word",
//                 wordWrap: "break-word",
//                 wordBreak: "break-word",
//                 hyphens: "auto",
//               }}
//             >
//               <Typography variant="body1"
//                 sx={{
//                   maxHeight: "120px",
//                   overflowY: "auto", 
//                   overflowX: "hidden",
//                   wordBreak: "break-word",
//                   paddingRight: "4px",
//                   "&::-webkit-scrollbar": {
//                   width: "6px",
//                 },
//                     '&::-webkit-scrollbar-thumb': {
//                   backgroundColor: '#ccc',
//                   borderRadius: '8px',
//                 },
//                 '&::-webkit-scrollbar-thumb:hover': {
//                   backgroundColor: '#aaa',
//                 },
//                   }}
//               >
//                 “{item.text}”
//               </Typography>

//               <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                 <Avatar
//                   alt={item.name}
//                   src={item.img}
//                   sx={{ width: 56, height: 56 }}
//                 />

//                 <Box>
//                   <Typography variant="body1" fontWeight="bold">
//                     {item.name}
//                   </Typography>
//                   <Typography variant="body2">
//                     {item.class}
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//       </Container>
//     </Box>
//   )
// }

"use client";
import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Testimonial = {
  text: string;
  img: string;
  name: string;
  class: string;
};

export const TestimonialsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const testimonials = [
    {
      text: "blablab dshadsah dhasudhsua hhcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
      img: "/assets/avatar1.svg",
      name: "Carlos Schallenberger",
      class: "Turma 25",
    },
    {
      text: "blablablabakbjhcbddddddd fffff ff dfds hvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw blablablabakbjhcbddddddd fffff ff dfds hvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
      img: "/assets/avatar1.svg",
      name: "Carlos Schallenberger",
      class: "Turma 25",
    },
    {
      text: "blablablabakbjhcbdhvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
      img: "/assets/avatar1.svg",
      name: "Carlos Schallenberger",
      class: "Turma 25",
    },
    {
      text: "blablablabakbjhcbdhvsncneajkcs hdbcv jsna  cc svn sfjv nwkd jcabcjnv dm shsbhada jadnkahdia ajdj hdwgwydgyw",
      img: "/assets/avatar1.svg",
      name: "Carlos Schallenberger",
      class: "Turma 25",
    },
  ];

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
      settings: { slidesToShow: 4 }
    },
    {
      breakpoint: 900,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
};

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
        border: "3px solid transparent",
        backgroundImage: `
          linear-gradient(${theme.palette.textColor?.main}, ${theme.palette.textColor?.main}),
          linear-gradient(to right, #EB658C, #F5AF55)
        `,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
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
        <Avatar alt={item.name} src={item.img} sx={{ width: 56, height: 56 }} />
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

       <Box sx={{ position: "relative", px: {xs: 1, md: 0} }}>
        <Slider {...sliderSettings}>
          {testimonials.map((item, index) => (
            <Box key={index} sx={{ px: 1 }}>
              <TestimonialCard item={item} />
            </Box>
          ))}
        </Slider>
      </Box>
      </Container>
    </Box>
  );
};
