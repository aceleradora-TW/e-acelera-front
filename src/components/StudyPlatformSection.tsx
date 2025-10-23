import React from "react";
import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";

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
                    <Box>
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
                        <Typography variant="h4" fontWeight="bold">
                        Durante essa trilha, você vai passar por tecnologias como:
                        </Typography>
                </Grid>
            </Grid>
        </Container>

    </Box>
)
}