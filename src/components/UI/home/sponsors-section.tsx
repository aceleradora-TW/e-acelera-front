"use client"
import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { SectionContent } from "../section-content";

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
            <SectionContent>
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
            </SectionContent>
            
            <SectionContent variant="content-only">
                <Grid container sx={{ 
                    m: { xs: 0, md: "0 auto" },
                    p: 0,
                    maxWidth: "928px",
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
                    <Typography variant="h4">Patrocinadores</Typography>
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
                    }}
                    >
                    <Box sx={{ textAlign: "center" }}>
                        <Image width={56} height={62} src="/assets/logoTW.svg" alt="logo TW" />
                        <Typography sx={{ 
                            fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize },
                        
                        }}>ThoughtWorks</Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Image width={56} height={62} src="/assets/logoGlobo.svg" alt="logo Globo" />
                        <Typography sx={{ 
                            fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize },
                            
                        }}>Globo</Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Image width={56} height={62} src="/assets/logoPUC.svg" alt="logo PUC" />
                        <Typography sx={{ 
                            fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize },
                            
                        }}>PUCRS</Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Image width={56} height={62} src="/assets/logoTecnoPUC.svg" alt="logo TecnoPUC" />
                        <Typography sx={{ 
                            fontSize: { xs: theme.typography.body2.fontSize, md: theme.typography.body1.fontSize },
                            
                        }}>TecnoPUC</Typography>
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
                    <Typography variant="h4">Apoiadores</Typography>
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
                        p: 2,
                        gap: { xs: 1, md: 2 },
                        flexWrap: { xs: "wrap", md: "nowrap" },
                    }}
                    >
                    <Box>
                        <Image width={76} height={76} src="/assets/logoDevMidia.svg" alt="logo DevMidia" />
                    </Box>
                    <Box>
                        <Image width={78} height={78} src="/assets/logoFeedz.svg" alt="logo Feedz" />
                    </Box>
                    </Box>
                </Box>
                </Grid>
            </Grid>
            </SectionContent>

        </Box>
    )
}