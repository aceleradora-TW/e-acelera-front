import React from "react";
import Image from 'next/image';
import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";

const icons = {
    HTML: {src: "/assets/html-icon.svg", alt: "HTML"},
    CSS: {src: "/assets/css-icon.svg", alt: "CSS"},
    TS: { src: "/assets/ts-icon.svg", alt: "TypeScript" },
    REACT: {src: "/assets/react-icon.svg", alt: "React"},
    NODE: {src: "/assets/node-icon.svg", alt: "Node"},
    EXPRESS: { src: "/assets/express-icon.svg", alt: "Express" },
    POSTGRESQL: { src: "/assets/postgres-icon.svg", alt: "PostgreSQL" },
    NEXTJS: { src: "/assets/next-icon.svg", alt: "Next.js" },
    JEST: { src: "/assets/jest-icon.svg", alt: "Jest" },
    GITHUB: { src: "/assets/github-icon.svg", alt: "GitHub" },
    GIT: { src: "/assets/git-icon.svg", alt: "Git" },
}
interface TechIconProps {
  src: string;
  alt: string;
  size?: string;
}

const TechIcon = ({ src, alt, size = '100px' }: TechIconProps) => (
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
);

export const StudyPlatformSection = () => {
const theme = useTheme();

return(
    <Box
    component="section"
    sx= {{
        ...theme.customStyles.studyplatformsection,
        pb: 4,
    }}
    >

        <Container maxWidth="lg">
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
                            variant="body1">
                            A plataforma oferece duas trilhas complementares:
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="body1"
                            fontWeight="bold">
                        Trilha de nivelamento:
                        </Typography>
                        <Typography
                            variant="body1">
                        Composta por desafios práticos e conteúdos acessíveis. Também é etapa obrigatória para quem entra no Programa Aceleradora, garantindo uma base comum para seguir com segurança.
                        </Typography>   
                    </Box>
                    <Box>
                        <Typography
                            variant="body1"
                            fontWeight="bold">
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
                            fontWeight: "600",
                            boxShadow: 4,
                            padding: "6px 16px",
                            mt: 3,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.contrastText,
                                color: theme.palette.bgColor?.main,
                                boxShadow: 8,
                            },
                        }}>Começar minha trilha</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                        <Typography variant="h4" fontWeight="bold" sx={{ 
                                textAlign: { xs: 'left', md: 'center' },
                                mb: 4, 
                                pt: { xs: 4, md: 6 } 
                            }}>
                        Durante essa trilha, você vai passar por tecnologias como:
                        </Typography>
                        <Grid container spacing={2} justifyContent="space-evenly" alignItems="flex-end">
                            <Grid item xs={12}>
                                <Grid container spacing={2} justifyContent="space-around" sx={{ px:{md: 8} }}>
                                    <Grid item xs={3}>
                                        <TechIcon src={icons.HTML.src} alt={icons.HTML.alt} size="60px" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TechIcon src={icons.CSS.src} alt={icons.CSS.alt} size="60px" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TechIcon src={icons.TS.src} alt={icons.TS.alt} size="70px" />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TechIcon src={icons.REACT.src} alt={icons.REACT.alt} size="80px" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2} justifyContent="space-around" alignItems="flex-end" sx={{ pt: 2, px: {md: 10} }}>
                                    <Grid item xs={6}>
                                        <TechIcon src={icons.NODE.src} alt={icons.NODE.alt} size="120px" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TechIcon src={icons.EXPRESS.src} alt={icons.EXPRESS.alt} size="140px" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" alignItems="center" sx={{ px:{md: 7} }}>
                                    <Grid item xs={4} md={4}>
                                        <TechIcon src={icons.POSTGRESQL.src} alt={icons.POSTGRESQL.alt} size="100px" />
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', gap: 2}}>
                                            <TechIcon src={icons.NEXTJS.src} alt={icons.NEXTJS.alt} size="110px" />
                                            <TechIcon src={icons.JEST.src} alt={icons.JEST.alt} size="100px" />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', gap: 2}}>
                                            <TechIcon src={icons.GITHUB.src} alt={icons.GITHUB.alt} size="70px" />
                                            <TechIcon src={icons.GIT.src} alt={icons.GIT.alt} size="70px" />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
        </Container>

    </Box>
)
}