"use client"
import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";

export const SponsorsSection = () => {
    const theme = useTheme();

    return(
        <Box
            component="section"
            sx = {{
                ...theme.customStyles.sponsorsSection,
                pb: 4,
            }}
            >
            <Container maxWidth= "md"
            sx={{
                px: {
                xs: 3,
                md: 0,
                },
            }}>
                <Typography
                    variant="h2"
                    sx= {{
                        textAlign: { xs: 'left', md: 'center' }, 
                        mb: { xs: 1, md: 2 },
                    }}
                >
                    Quem caminha com a gente
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: { xs: 'left', md: 'center' },
                        mb: {xs:0, md: 2},
                    }}
                >
                    A Aceleradora Ágil só existe porque há quem acredite junto. Empresas, universidades e organizações que apoiam, investem e compartilham do mesmo propósito: ampliar acessos e transformar vidas por meio da tecnologia. <br />
                    Veja quem já faz parte dessa rede de apoio.
                </Typography>
            </Container>
            
            <Container>
                <Grid container sx={{ 
                    m: 0,
                    p: 0,
                    maxWidth: "928px",
                    mx: "auto",
                }}>
                    <Grid item xs={12} md={8}
                    sx={{
                        mt: {xs:"16px", md: "0"},
                    }}>
                        <Box
                            sx={{
                            backgroundColor: theme.palette.textColor?.main,
                            border: "2px solid white",
                            borderRadius: {xs: "4px", md:"4px 0 0 4px"},
                            overflow: "hidden",
                            borderRight:{md:"none"},
                            }}
                        >
                            <Box sx={{ textAlign: "center", py: 1 }}>
                                <Typography variant="h4">Nossas Patrocinadoras</Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                            border: "2px solid white",
                            borderRadius: {xs: "4px", md:"4px 0 0 4px"},
                            height: {xs: "auto", md:"115px"},
                            overflow: "visible",
                            borderRight:{md:"none"},
                            }}
                        >
                            <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                p: 1,
                                gap: { xs: 1, md: 2 },
                                flexWrap: { xs: "wrap", md: "nowrap" },
                                marginTop: "20px",
                            }}
                            >
                            <Box sx={{ textAlign: "center", filter: "brightness(0) invert(1)" }}>
                                <Image width={150} height={37} src="/assets/logoTW.webp" alt="logo TW" />
                            </Box>

                            <Box sx={{ textAlign: "center", filter: "brightness(0) invert(1)" }}>
                                <Image width={120} height={38} src="/assets/logoGlobo.webp" alt="logo Globo" />
                            </Box>

                            <Box sx={{ textAlign: "center", filter: "brightness(0) invert(1)" }}>
                                <Image width={80} height={28} src="/assets/logoPUC.webp" alt="logo PUC" />
                            </Box>

                            <Box sx={{ textAlign: "center", filter: "brightness(0) invert(1)" }}>
                                <Image width={135} height={26} src="/assets/logoTecnoPUC.webp" alt="logo TecnoPUC" />
                            </Box>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}
                    sx={{
                        mt: {xs:"16px", md: "0"},
                    }}>
                        <Box
                            sx={{
                            backgroundColor: theme.palette.textColor?.main,
                            border: "2px solid white",
                            borderRadius: {xs: "4px", md:"0 4px 4px 0"},
                            }}
                        >
                            <Box sx={{ textAlign: "center", py: 1 }}>
                                <Typography variant="h4">Nossas Apoiadoras</Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                            border: "2px solid white",
                            borderRadius: {xs: "4px", md:"0 4px 4px 0"},
                            height: "115px",
                            }}
                        >
                            <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center",
                                gap: { xs: 1, md: 2 },
                                flexWrap: { xs: "wrap", md: "nowrap" },
                                marginTop: "20px",
                            }}
                            >
                                <Box
                                    sx={{
                                        filter: "brightness(0) invert(1)"
                                    }}
                                >
                                    <Image width={61} height={61} src="/assets/logoDevMidia.svg" alt="logo DevMidia" />
                                </Box>
                                <Box
                                    sx={{
                                        filter: "brightness(0) invert(1)"
                                    }}
                                    >
                                    <Image width={63} height={63} src="/assets/logoFeedz.svg" alt="logo Feedz" />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}