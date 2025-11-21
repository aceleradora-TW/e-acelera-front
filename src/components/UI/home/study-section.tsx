import React from "react";
import Image from 'next/image';
import { Box, Button, Card, Container, Grid, Typography, useTheme } from "@mui/material";
import { themePalette } from "@/app/config/themes/palette";
import { IconData, technologyIcons } from "@/utils/constants";
import { SectionContent } from "../section-content";
interface TechIconProps extends Omit<IconData, 'name'> {
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
            mb: 1.2,
        }}
    >
        <Image src={src} alt={alt} width={parseInt(size)} height={parseInt(size)} style={{ objectFit: "contain" }} />
    </Box>
);

const TechGrid = () => (
    <Grid container alignItems="center" sx={{
        maxWidth: { md: '400px', lg: '480px' },
        mx: { sm: 2, md: 'auto' },
        py: 2,
        borderRadius: 2,
        border: '1px solid rgb(223, 233, 236)',
        boxShadow: 1
    }}>
        {Object.values(technologyIcons).map((tech) => (
            <Grid item xs={6} sm={4} md={4} key={tech.name} sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',

            }}>
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        p: 2,
                        mb: 1,
                        borderRadius: 2,
                        height: '100px',
                        width: '100px',
                        boxShadow: 'none',
                    }}
                >
                    <TechIcon src={tech.src} alt={tech.alt} size="50px" />
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

    return (
        <Box
            component="section"
            id="study-section"
            sx={{
                ...theme.customStyles.studysection,
            }}
        >

            <SectionContent>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: { xs: 'left', md: 'center' },
                        pt: { xs: 4, md: 2 },
                        mb: { xs: 1, md: 2 },
                    }}
                >
                    Plataforma de estudos: e-Acelera
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: { xs: 'left', md: 'center' },
                        color: theme.palette.textColor?.light
                    }}
                >
                    O e-Acelera é a plataforma de estudos da Aceleradora Ágil — gratuita, aberta e feita para quem quer aprender tecnologia com autonomia. Qualquer pessoa pode acessar e começar a estudar programação, mesmo sem experiência prévia.
                </Typography>
            </SectionContent>

            <Box
                sx={{
                    position: "relative",
                    margin: { xs: "16px 5%", md: "16px auto" },
                    maxWidth: "928px",
                }}
            >
                <Grid container sx={{
                    m: 0,
                    p: 0,
                }}>
                    <Grid item xs={12} md={6}>
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
                            my: 2,
                            zIndex: 150,
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
                                my: 2,
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
                            <Button aria-label="Começar minha trilha na plataforma e-Acelera" variant="outlined" sx={{
                                ...theme.customStyles.button,
                                borderRadius: 1,
                                boxShadow: 4,
                                padding: "6px 16px",
                                mt: { xs: 3, xl: 0 },
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
                            ml: { md: '20px', lg: '0px' },
                            pt: { xs: 4, md: 8 }
                        }}>
                            Durante essa trilha, você vai passar por tecnologias como:
                        </Typography>
                        <TechGrid />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
