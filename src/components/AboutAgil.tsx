import { Box, Link, Typography } from "@mui/material";
import SessionFormacao from "./AboutSobre/SessionFormacao";
import CardAboutAgil from "./AboutSobre";
import { theme } from "@/app/config/themes";
import ButtonHome from "./UI/buttonHome";

export default function AboutAgil() {

  const listTitlesFormacao = ["Tecnologias modernas", "Mentoria 1:1", "Metdologias ágeis", "Mentorias técnicas", "Palestras", "Workshops"]

  return (
    <Box sx={{ ...theme.customStyles.aboutSession }}>
      <Box
        sx={{
          maxWidth: 788,
          minHeight: 552,
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            gap: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2">Sobre a Aceleradora Ágil</Typography>
          <Typography>
            A Aceleradora Ágil nasceu para transformar realidades. Criada pela
            ThoughtWorks em parceria com a PUCRS, Globo e TecnoPUC, ela conecta
            pessoas que muitas vezes não se viam na tecnologia a um espaço onde
            aprender, criar e crescer é possível.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography>O projeto oferece dois caminhos:</Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
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
          <Box>
            <ButtonHome text=" Saiba mais sobre o e-acelera" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: 342, sm: 490 },
          minHeight: 476,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          width={"97%"}
          sx={{ fontSize: 19, fontWeight: 600, color: "#002c53" }}
          mb={2}
        >
          Formação prática — o que você vivencia no Programa de Estágio:
        </Typography>

        <Box
          width={"100%"}
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          height={384}
          flexDirection={"row"}
          flexWrap={"wrap"}
          gap={1}
        >
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
    </Box>
  );
}
