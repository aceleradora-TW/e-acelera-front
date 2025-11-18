"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { SectionContent } from "../section-content";
import { SectionWrapper } from "../section-wrapper";

export const SessionAccelerator = (): JSX.Element => (
  <SectionWrapper>
    <SectionContent>
      <Grid container spacing={4} alignItems={"center"}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              maxWidth: 786,
              minHeight: 552,
              width: "100%",
              height: "100%",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h2">
                  Sobre a Aceleradora Ágil
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  A Aceleradora Ágil nasceu para transformar realidades.
                  Criada pela ThoughtWorks em parceria com a PUCRS, Globo e
                  TecnoPUC, ela conecta pessoas que muitas vezes não se viam
                  na tecnologia a um espaço onde aprender, criar e crescer é
                  possível.
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ mt: 3, mb: 2 }}>
                <Typography variant="body1">
                  O projeto oferece dois caminhos:
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        maxWidth: { xs: "100%", md: 376 },
                        minHeight: 144,
                        border: 6,
                        borderColor: "grey.300",
                        p: 2,
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="body1">
                        Uma plataforma de estudo gratuita e aberta, o
                        e-Acelera, onde qualquer pessoa pode começar sua
                        jornada no seu ritmo.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        maxWidth: { xs: "100%", md: 376 },
                        minHeight: 144,
                        border: 6,
                        borderColor: "grey.300",
                        p: 2,
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="body1">
                        Um programa de estágio intensivo de 18 semanas,
                        voltado para quem quer entrar no mercado de
                        tecnologia com formação prática e vivência real.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ my: 2 }}>
                <Typography variant="body1">
                  Acreditamos em uma tecnologia feita por muitas mãos. Esse
                  é o propósito que também move a Aceleradora Inclusiva,
                  iniciativa parceira. Quer entender melhor como tudo
                  funciona? Explore o e-book da Aceleradora Ágil e
                  Inclusiva.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="button"
                  sx={(theme) => ({
                    ...theme.customStyles.button,
                  })}
                >
                  Saiba mais sobre o e-acelera
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              maxWidth: { xs: "100%", md: 490 },
              minHeight: { xs: "auto", md: 476 },
              width: "100%",
              height: "100%",
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontSize: { xs: 16, md: 19 },
                }}
                bgcolor={"red"}
              >
                Formação prática - o que você vivencia na Aceleradora:
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                bgcolor: "gray",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: { xs: "auto", md: 430 },
                minHeight: { xs: 200, md: 430 },
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 1,
                p: { xs: 2, md: 1 },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: 224 },
                  height: 67,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "green",
                }}
              >
                <Typography sx={{ textAlign: "center", px: 1 }}>Tecnologias modernas</Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", md: 224 },
                  height: 67,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "green",
                }}
              >
                <Typography sx={{ textAlign: "center", px: 1 }}>Tecnologias modernas</Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", md: 224 },
                  height: 67,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "green",
                }}
              >
                <Typography sx={{ textAlign: "center", px: 1 }}>Tecnologias modernas</Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", md: 224 },
                  height: 67,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "green",
                }}
              >
                <Typography sx={{ textAlign: "center", px: 1 }}>Tecnologias modernas</Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", md: 224 },
                  height: 67,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "green",
                }}
              >
                <Typography sx={{ textAlign: "center", px: 1 }}>Tecnologias modernas</Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", md: 224 },
                  height: 67,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "green",
                }}
              >
                <Typography sx={{ textAlign: "center", px: 1 }}>Tecnologias modernas</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: 67,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "green",
                }}
              >
                <Typography sx={{ textAlign: "center", px: 1 }}>Tecnologias modernas</Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: 67,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "green",
                }}
              >
                <Typography sx={{ textAlign: "center", px: 1 }}>Tecnologias modernas</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </SectionContent>
  </SectionWrapper>
) 