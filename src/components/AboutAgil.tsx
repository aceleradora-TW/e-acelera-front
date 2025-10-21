import { Box, Button, Link, Typography, useTheme } from "@mui/material";

import CardAboutAgil from "./CardAboutAgil";
import SessionFormacao from "./CardAboutAgil/SessionFormacao";

export default function AboutAgil() {
  const theme = useTheme();

  const listTitlesFormacao = [
    "Tecnologias modernas",
    "Mentoria 1:1",
    "Metdologias ágeis",
    "Mentorias técnicas",
    "Palestras",
    "Workshops",
  ];

  return (
    <Box sx={{ ...theme.customStyles.aboutSession }}>
      <Box
        sx={{ maxWidth: 788, minHeight: 552, width: "100%", height: "100%" }}
      >
        <Box sx={{ gap: 4, display: "flex", flexDirection: "column" }}>
          <Typography color={theme.palette.textColor?.main} variant="h2">
            Sobre a Aceleradora Ágil
          </Typography>
          <Typography>
            A Aceleradora Ágil nasceu para transformar realidades. Criada pela
            ThoughtWorks em parceria com a PUCRS, Globo e TecnoPUC, ela conecta
            pessoas que muitas vezes não se viam na tecnologia a um espaço onde
            aprender, criar e crescer é possível.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography>O projeto oferece dois caminhos:</Typography>
            <Box sx={theme.customStyles.cardAboutAgilContainer}>
              <CardAboutAgil
                description="Uma plataforma de estudo gratuita e aberta, o e-Acelera, 
                onde qualquer pessoa pode começar sua jornada no seu ritmo."
                textBold="plataforma de estudo"
              />
              <CardAboutAgil
                description="Um programa de estágio intensivo de 18 semanas, voltado para
                  quem quer entrar no mercado de tecnologia com formação prática
                  e vivência real."
                textBold="programa de estágio"
              />
            </Box>
            <Typography>
              Acreditamos em uma tecnologia feita por muitas mãos. Esse é o
              propósito que também move a{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={"https://aceleradora-inclusiva.netlify.app/"}
              >
                Aceleradora Inclusiva
              </Link>
              , iniciativa parceira. Quer entender melhor como tudo funciona?
              Explore o{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={
                  "https://www.thoughtworks.com/content/dam/thoughtworks/documents/e-book/tw_ebook_aceleradora_portuguese.pdf"
                }
              >
                e-book da Aceleradora Ágil e Inclusiva.
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button variant="home">Saiba mais sobre o e-acelera</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={theme.customStyles.sessionFormacaoContainer}>
        <Typography
          width={"97%"}
          sx={{
            fontSize: 19,
            fontWeight: 600,
            color: theme.palette.textColor?.main,
          }}
          mb={2}
        >
          Formação prática — o que você vivencia no Programa de Estágio:
        </Typography>
        <Box sx={theme.customStyles.sessionListContainer}>
          {listTitlesFormacao.map((title) => (
            <SessionFormacao key={title} title={title} />
          ))}

          <SessionFormacao isLarge title={"Encontros com especialistas"} />
          <SessionFormacao
            isLarge
            title={"Aulas de inglês focadas na área tech"}
          />
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Button variant="home">Saiba mais sobre o e-acelera</Button>
      </Box>
    </Box>
  );
}