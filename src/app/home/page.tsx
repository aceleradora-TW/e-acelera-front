"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
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
              <Container>
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
                      <Grid item xs={9} md={6}>
                        <Box
                          maxWidth={376}
                          minHeight={144}
                          border={6}
                          borderColor="grey.300"
                          p={2}
                          borderRadius={2}
                        >
                          <Typography maxWidth={336} variant="body1">
                            Uma plataforma de estudo gratuita e aberta, o
                            e-Acelera, onde qualquer pessoa pode começar sua
                            jornada no seu ritmo.
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={9} md={6}>
                        <Box
                          maxWidth={376}
                          minHeight={144}
                          border={6}
                          borderColor="grey.300"
                          p={2}
                          borderRadius={2}
                        >
                          <Typography maxWidth={345} variant="body1">
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
              </Container>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                maxWidth: 490,
                minHeight: 476,
                width: "100%",
                height: "100%",
              }}
            >
              <Typography sx={{ fontSize: 19 }} mb={2} bgcolor={"red"}>
                Formação prática - o que você vivencia na Aceleradora:
              </Typography>
              <Box
                width={"100%"}
                bgcolor={"gray"}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                height={430}
                flexDirection={"row"}
                flexWrap={"wrap"}
                gap={1}
              >
                <Box
                  width={224}
                  height={67}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"green"}
                >
                  <Typography>Tecnologias modernas</Typography>
                </Box>
                <Box
                  width={224}
                  height={67}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"green"}
                >
                  <Typography>Tecnologias modernas</Typography>
                </Box>
                <Box
                  width={224}
                  height={67}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"green"}
                >
                  <Typography>Tecnologias modernas</Typography>
                </Box>
                <Box
                  width={224}
                  height={67}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"green"}
                >
                  <Typography>Tecnologias modernas</Typography>
                </Box>
                <Box
                  width={224}
                  height={67}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"green"}
                >
                  <Typography>Tecnologias modernas</Typography>
                </Box>
                <Box
                  width={224}
                  height={67}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"green"}
                >
                  <Typography>Tecnologias modernas</Typography>
                </Box>
                <Box
                  width={"100%"}
                  height={67}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"green"}
                >
                  <Typography>Tecnologias modernas</Typography>
                </Box>
                <Box
                  width={"100%"}
                  height={67}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  bgcolor={"green"}
                >
                  <Typography>Tecnologias modernas</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
