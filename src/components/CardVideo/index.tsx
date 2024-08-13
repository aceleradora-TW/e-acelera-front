import React from "react";
import { Box, Typography } from "@mui/material";
import { ThemeConfig, theme } from "../../app/config/theme";
import StatusSelect from "@/components/StatusSelect";


function CardVideo() {
  let text: string = "Neste curso ensinarei para você TUDO o que você precisa saber para adquirir uma base sólida no TypeScript, uma das linguagens mais requisitadas no mercado atualmente! Neste curso ensinarei para você TUDO o que você precisa saber para adquirir uma base sólida no TypeScript, uma das linguagens mais requisitadas no mercado atualmente!";
  let titulov: string = "Curso de TypeScript para Completos Iniciantes";
  let creditos: string = "Felipe Rocha • dicasparadevs";

  return (
    <ThemeConfig>
      <Box sx={ theme.customStyles.cardVideo }>
        <Box sx={ theme.customStyles.cardVideoLink }>
          <iframe
            width="592"
            height="332"
            src="https://www.youtube.com/embed/ppDsxbUNtNQ?si=Fgxmil4i_Yd5brCx"
          ></iframe>

          <Box sx={theme.customStyles.cardVideoNumber}>
            <Typography variant="caption">
              {titulov}
            </Typography>
            <Typography variant="subtitle1">
              {creditos}
            </Typography>
          </Box>

          <Box sx={ theme.customStyles.cardVideoDescription}>
            <Typography variant="subtitle1">
              {text}
            </Typography>
          </Box>

          <Box sx={theme.customStyles.cardVideoSelect}>
            <StatusSelect />
          </Box>
        </Box>
      </Box>
    </ThemeConfig>
  );
}

export default CardVideo;