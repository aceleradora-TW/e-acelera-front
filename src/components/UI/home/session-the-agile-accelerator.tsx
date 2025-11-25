"use client";
import { Box, Button, Link, Grid, Typography, useTheme } from "@mui/material";
import { SectionContent } from "../section-content";

export default function AboutAgil() {
  const theme = useTheme();
  
  
  const listTitlesFormacao = [
    "Tecnologias modernas",
    "Mentoria 1:1",
    "Metdologias ágeis",
    "Mentorias técnicas",
    "Palestras",
    "Workshops",
    "Encontros com especialistas",
    "Aulas de inglês focadas na área tech",
  ];

  const AceleraButton = (
    <Button 
      aria-label="Começar minha trilha na plataforma e-Acelera" 
      variant="outlined" 
      sx={{
        ...(theme as any).customStyles.button,
        ...(theme as any).customStyles.buttonAboutAgil,
        mt: 3,
      }}
    >
      Saiba mais sobre o e-acelera
    </Button>
  );

  return (
    <SectionContent>
    
    <Box sx={{ ...theme.customStyles.aboutSession, width: "100%" }}>

      <Grid container spacing={4}>

        <Grid item xs={12} md={7}>
          <Box
            sx={{minHeight: 552, width: "95%", height: "100%" }}
            
          >
            <Box sx={{display: "flex", flexDirection: "column" }}>
              <Typography color={theme.palette.textColor?.main} variant="h2" sx={{ mb: 2 }}>
                Sobre a Aceleradora Ágil
              </Typography>
              <Typography>
                A Aceleradora Ágil nasceu para transformar realidades. Criada pela
                ThoughtWorks em parceria com a PUCRS, Globo e TecnoPUC, ela conecta
                pessoas que muitas vezes não se viam na tecnologia a um espaço onde
                aprender, criar e crescer é possível.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2,   }}>
                <Typography>O projeto oferece dois caminhos:</Typography>
                <Box sx={theme.customStyles.cardAboutAgilContainer}>
                  <Box sx={theme.customStyles.cardAboutAgil}>
                    <Typography>
                      Uma <strong>plataforma de estudo</strong> gratuita e aberta, o e-Acelera,
                      onde qualquer pessoa pode começar sua jornada no seu ritmo.
                    </Typography>
                  </Box>
                  <Box sx={theme.customStyles.cardAboutAgil}>
                    <Typography>
                      Um <strong>programa de estágio</strong> intensivo de 18 semanas, voltado para
                      quem quer entrar no mercado de tecnologia com formação prática
                      e vivência real.
                    </Typography>
                  </Box>
                </Box>
                <Typography>
                  Acreditamos em uma tecnologia feita por muitas mãos. Esse é o
                  propósito que também move a{" "}
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={"https://aceleradora-inclusiva.netlify.app/"}
                    sx={{ color: '#002C53' }}
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
                    sx={{ color: '#002C53' }}
                  >
                    e-book da Aceleradora Ágil e Inclusiva.
                  </Link>
                </Typography>
              </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {AceleraButton}
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={theme.customStyles.sessionFormacaoContainer}>
            <Typography
              width={"96%"}
              sx={{
                fontSize: 19,
                fontWeight: 600,
                color: theme.palette.textColor?.main,
              }}
              mb={4}
            >
              Formação prática — o que você vivencia no Programa de Estágio:
            </Typography>
            <Box sx={theme.customStyles.sessionListContainer}>
              {listTitlesFormacao.map((title, index) => {
                const isLarge = index >= listTitlesFormacao.length - 2;

                return (
                <Box
                  key={title}
                  sx={theme.customStyles.sessionFormacao(isLarge)}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      padding: 1,
                      color: "inherit",
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
              );
            })}
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%', display: { md: 'none' } }}> 
         {AceleraButton}
      </Box>
    </Box>
    </SectionContent>
  );
}