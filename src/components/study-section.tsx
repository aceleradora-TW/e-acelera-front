import React from "react";
import Image from 'next/image';
import { Box, Button, Card, CardContent, Container, Grid, Typography, useTheme } from "@mui/material";
import { themePalette } from "@/app/config/themes/palette";

const icons = {
    HTML: {src: "/assets/html-icon.svg", name: 'HTML', alt: "HTML"},
    CSS: {src: "/assets/css-icon.svg", name: 'CSS', alt: "CSS"},
    TS: { src: "/assets/ts-icon.svg", name: 'TypeScript', alt: "TypeScript" },
    REACT: {src: "/assets/react-icon.svg", name: 'React', alt: "React"},
    NODE: {src: "/assets/node-icon.svg", name: 'Node JS', alt: "Node"},
    EXPRESS: { src: "/assets/express-icon.svg", name: 'Express', alt: "Express" },
    POSTGRESQL: { src: "/assets/postgres-icon.svg", name: 'PostgreSQL', alt: "PostgreSQL" },
    NEXTJS: { src: "/assets/next-icon.svg", name: 'Next JS', alt: "Next.js" },
    JEST: { src: "/assets/jest-icon.svg", name: 'Jest', alt: "Jest" },
    GITHUB: { src: "/assets/github-icon.svg", name: 'GitHub', alt: "GitHub" },
    GIT: { src: "/assets/git-icon.svg", name: 'Git', alt: "Git" },
}

interface TechIconProps {
  src: string;
  name: string;
  alt: string;
  size?: string;
}

const TechIcon = ({ src, alt, size = "100px" }: TechIconProps) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    }}
  >
    <Image src={src} alt={alt} width={0} height={0} style={{ width: size, height: "auto" }} />
  </Box>
);

const TechGrid = () => (
    <Grid container spacing={2} justifyContent="center">
      {Object.values(icons).map((tech) => (
        <Grid item xs={4} sm={4} md={4} lg={4} key={tech.name}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              borderRadius: 2,
              height: '100%',
              weight: '100%',
            }}
          >
            <Image
              src={tech.src}
              alt={tech.name}
              width={50}
              height={50}
              style={{ marginBottom: 8 }}
            />
            <Typography variant="body2" fontWeight="bold">
              {tech.name}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );




/*const TechIcon = ({ src, alt, size = '100px' }: TechIconProps) => (
    <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        }}
    >
        <Image
            src={src}
            alt={alt} 
            width={0} 
            height={0}
            style={{ width: size, height: 'auto' }}
        />
    </Box>
);*/

export const StudySection = () => {
const theme = useTheme();

return(
    <Box
    component="section"
    id="study-section"
    sx= {{
        ...theme.customStyles.studysection,
        pb: 4,
    }}
    >

        <Container maxWidth="xl">
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Typography
                    variant="h2"
                    sx={{
                        textAlign: "left",
                        pt: 4,
                        mb: {xs: 1, md: 2}
                    }}>
                    Plataforma de estudos: e-Acelera
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 3,
                            color: theme.palette.textColor?.light
                        }}>
                        O e-Acelera é a plataforma de estudos da Aceleradora Ágil — gratuita, aberta e feita para quem quer aprender tecnologia com autonomia. Qualquer pessoa pode acessar e começar a estudar programação, mesmo sem experiência prévia.
                    </Typography>
                    <Box>
                        <Typography
                            variant="h5">
                            A plataforma oferece duas trilhas complementares:
                        </Typography>
                    </Box>
                    <Box sx={{
                        position: "relative",
                        borderRadius: "4px",
                        backgroundColor: themePalette.primaryTextColor,
                        p: 2,
                        my:2,
                        zIndex:150,
                        color: themePalette.baseBgColor,
                       }}>
                            
                        <Typography
                            variant="h5">
                        Trilha de nivelamento:
                        </Typography>
                        <Typography
                            variant="body1">
                        Composta por desafios práticos e conteúdos acessíveis. Também é etapa obrigatória para quem entra no Programa Aceleradora, garantindo uma base comum para seguir com segurança.
                        </Typography>   
                    </Box>
                    <Box
                    sx={{
                        position: "relative",
                        borderRadius: "4px",
                        backgroundColor: themePalette.primaryTextColor,
                        p: 2,
                        my:2,
                        color: themePalette.baseBgColor,
                    }}>
                        <Typography
                            variant="h5">
                        Trilha de autoestudo:
                        </Typography>
                        <Typography
                            variant="body1">
                        Pensada para quem quer seguir explorando no seu ritmo, com exercícios e materiais extras.
                        </Typography>
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{
                            mt: 3,
                            color: theme.palette.textColor?.light
                        }}>
                        Tudo isso para preparar você para os próximos passos — seja continuar estudando, entrar no programa ou aplicar o que aprendeu em projetos reais.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} order={{ xs: 3, md: 2 }}>
                    <Box sx={{ mt: { xs: 1, md: 0 } }}>
                        <Button variant="outlined" sx={{
                            ...theme.customStyles.button,
                            borderRadius: 1,
                            boxShadow: 4,
                            padding: "6px 16px",
                            mt: 3,
                            '&:hover': {
                                backgroundColor: themePalette.primaryTextColor,
                                color: theme.palette.bgColor?.main,
                                boxShadow: 8,
                            },
                        }}>Começar minha trilha</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                        <Typography variant="h4" sx={{ 
                                textAlign: { xs: 'left', md: 'center' },
                                mb: 4, 
                                pt: { xs: 4, md: 10 } 
                            }}>
                        Durante essa trilha, você vai passar por tecnologias como:
                        </Typography>
                        <TechGrid />
                </Grid>
            </Grid>
        </Container>

    </Box>
)
}