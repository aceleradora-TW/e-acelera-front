import React from "react";
import Image from 'next/image';
import { Box, Button, Card, CardContent, Container, Grid, Typography, useTheme } from "@mui/material";
import { themePalette } from "@/app/config/themes/palette";

const icons = {
    HTML: {src: "/assets/html-icon.svg", name: 'HTML', alt: "Ícone da linguagem de marcação HTML"},
    CSS: {src: "/assets/css-icon.svg", name: 'CSS', alt: "Ícone da linguagem de estilos CSS"},
    TS: { src: "/assets/ts-icon.svg", name: 'TypeScript', alt: "Ícone da linguagem TypeScript" },
    REACT: {src: "/assets/react-icon.svg", name: 'React', alt: "Ícone da biblioteca JavaScript React"},
    NODE: {src: "/assets/node-icon.svg", name: 'Node JS', alt: "Ícone do ambiente de execução Node JS"},
    EXPRESS: { src: "/assets/express-icon.svg", name: 'Express', alt: "Ícone do framework web Express" },
    POSTGRESQL: { src: "/assets/postgres-icon.svg", name: 'PostgreSQL', alt: "Ícone do banco de dados PostgreSQL" },
    NEXTJS: { src: "/assets/next-icon.svg", name: 'Next JS', alt: "Ícone do framework web Next JS" },
    JEST: { src: "/assets/jest-icon.svg", name: 'Jest', alt: "Ícone do framework de testes Jest" },
    GIT: { src: "/assets/git-icon.svg", name: 'Git', alt: "Ícone do sistema de controle de versão Git" },
    GITHUB: { src: "/assets/github-icon.svg", name: 'GitHub', alt: "Ícone da plataforma de hospedagem de código GitHub" },
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
    <Grid container spacing={1} sx={{ maxWidth: { md:'400px', lg: '480px' }, mx: { sm: 2, md: 'auto' }, py: 1, px: {xs: 1,  md: 2}, borderRadius: 2,
                                                border: '1px solid rgb(223, 233, 236)',
                                                boxShadow: 1
                                                 }}>
      {Object.values(icons).map((tech) => (
        <Grid item xs={6} sm={4} md={4} key={tech.name} sx={{ minWidth: '100px', 
                                                
        }}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 1,
              borderRadius: 2,
              height: '100px',
              weight: '100px',
              boxShadow: 'none',
            }}
          >
            <Image
              src={tech.src}
              alt={tech.alt}
              width={50}
              height={50}
              style={{ marginBottom: 10 }}
            />
            <Typography variant="body2" fontWeight="bold" sx={{ textTransform: 'uppercase' }}>
              {tech.name}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );


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
                            variant="h5" fontWeight="bold">
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
                            variant="h5" fontWeight="bold">
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
                            mt: {xs: 3, xl: 0},
                            '&:hover': {
                                backgroundColor: themePalette.primaryTextColor,
                                color: theme.palette.bgColor?.main,
                                boxShadow: 8,
                            },
                        }}>Começar minha trilha</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={11} md={6}>
                        <Typography variant="h4" sx={{ 
                                textAlign: { xs: 'left', md: 'left', lg: 'center' },
                                mb: 4, 
                                pt: { xs: 4, md: 8 },
                                ml: {md: '50px', lg: '0px'}
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