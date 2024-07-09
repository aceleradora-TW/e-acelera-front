import React from "react";
import { Box, Typography } from "@mui/material";
import { ThemeConfig } from "../config/theme";
import StatusSelect from "@/components/StatusSelect";

function CardVideo() {
  let text: string = "Neste curso ensinarei para você TUDO o que você precisa saber para adquirir uma base sólida no TypeScript, uma das linguagens mais requisitadas no mercado atualmente!";
  let titulov: string = "Curso de TypeScript para Completos Iniciantes";
  let creditos: string = "Felipe Rocha • dicasparadevs";

  return (
    <ThemeConfig>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 4,
        boxShadow: "0em 0em 0.4em rgb(44 44 44 / 40%)",
        width: "661px",
        height: "936px",
      }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <iframe
            width="592"
            height="332"
            src="https://www.youtube.com/embed/ppDsxbUNtNQ?si=Fgxmil4i_Yd5brCx"
          ></iframe>

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 4 }}>
            <Typography variant="caption">
              {titulov}
            </Typography>
            <Typography variant="subtitle1">
              {creditos}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 5, marginRight: 1.3 }}>
            <Typography variant="subtitle1" sx={{ textAlign: 'justify' }}>
              {text}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 7 }}>
            <StatusSelect />
          </Box>
        </Box>
      </Box>
    </ThemeConfig>
  );
}

export default CardVideo;