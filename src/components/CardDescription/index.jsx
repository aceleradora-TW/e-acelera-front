import React from "react";
import { Divider, Box, Typography} from "@mui/material";
import { theme } from "../config/theme";
import { ThemeConfig } from "../config/theme";

function CardDescription() {
  return (
    <ThemeConfig>
      <Box sx={{display:{xs: "none", md: "flex"},...theme.customStyles.cardDescription}}>
        <Box >
          <Typography variant="body1">
            Bem-vindo ao emocionante universo do TypeScript! Prepare-se para uma
            imersão profunda em uma linguagem de programação que não apenas
            herda a familiaridade do JavaScript, mas também traz consigo um
            conjunto robusto de recursos projetados para impulsionar o
            desenvolvimento de software rumo a novos patamares de segurança e
            escalabilidade.
          </Typography>
          <Typography variant="body1">
            Neste módulo, você não apenas aprenderá os conceitos básicos do
            TypeScript, mas também explorará suas nuances e possibilidades
            avançadas. Desde a criação de estruturas de dados bem definidas até
            a implementação de algoritmos complexos, o TypeScript será seu
            aliado confiável em cada etapa do processo de desenvolvimento.
          </Typography>
        </Box>

        <Divider color="black" orientation="vertical" flexItem />

        <Box >
          <Typography variant="body1">
            Diferentemente do que ocorria alguns anos atrás, onde JavaScript era
            utilizada apenas no lado cliente das aplicações, atuando na
            validação de formulários e composição de elementos da interface,
            atualmente temos iniciativas que levam essa linguagem a representar
            a parte principal de aplicações mobile em frameworks de
            desenvolvimento híbrido como Apache.
          </Typography>
          <Typography variant="body1">
            web (no lado servidor com Node.js). Nestes cenários, os projetos não
            se resumem mais a arquiteturas mais sólidas, onde se possa organizar
            adequadamente o código e aplicar as melhores.
          </Typography>
        </Box>
      </Box>
    </ThemeConfig>
  );
}

export default CardDescription;
