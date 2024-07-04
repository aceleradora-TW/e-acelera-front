import React from "react";
import { Divider, Box, Typography} from "@mui/material";
import { theme } from "../config/theme";
import { ThemeConfig } from "../config/theme";

function CardDescription() {
  let text: string = "vimersão profunda em uma linguagem de programação que não ap herda a familiaridade do JavaScript, mas também traz consigo um conjunto robusto de recursos projetados para impulsionar o  desenvolvimento de software rumo a novos patamares de segurança e escalabilidade. Bem-vindo ao emocionante universo do TypeScript! Prepare-se para uma  imersão profunda em uma linguagem de programação que não apenas        herda a familiaridade do JavaScript, mas também trazvimersão profunda em uma linguagem de programação que não ap herda a familiaridade do JavaScript, mas também traz consigo um conjunto robusto de recursos projetados para impulsionar o  desenvolvimento de software rumo a novos patamares de segurança e escalabilidade. Bem-vindo ao emocionante universo do TypeScript! Prepare-se para uma  imersão profunda em uma linguagem de programação que não apenas        herda a familiaridade do JavaScript, mas também traz vimersão profunda em uma linguagem de programação que não ap herda a familiaridade do JavaScript, mas também traz consigo um conjunto robusto de recursos projetados para impulsionar o  desenvolvimento de software rumo a novos patamares de segurança e escalabilidade. Bem-vindo ao emocionante universo do TypeScript! Prepare-se para uma  imersão profunda em uma linguagem de programação que não apenas        herda a familiaridade do JavaScript, mas também traz  consigo u    conjunto robusto de recursos projetados para impulsionar desenvolvimento de software rumo a novos patamares de segurança e escalabilidade.v    "
  let descriptionSize: number = 0
  for(let i:number=0; i< text.length; i++){
    descriptionSize = i
  }
if (descriptionSize >= 1200) {
  let middleTextPoint: number= descriptionSize/2
  let textBox1:string=text.slice(0,middleTextPoint)
  let textBox2:string=text.slice(middleTextPoint, text.length)
  return (
    <ThemeConfig>
      <Box
        sx={
          theme.customStyles.cardDescription
        }
      >
        <Box sx={{ width: "45%" }}>
          <Typography variant="body1">
            {textBox1}
          </Typography>
         
        </Box>

        <Divider orientation="vertical" flexItem color="black"/>

        <Box sx={{ width: "45%" }}>
          <Typography variant="body1">
            {textBox2}
          </Typography>
          
        </Box>
      </Box>
    </ThemeConfig>
  );

} else {
  return(
  <ThemeConfig>
    <Box
        sx={
          theme.customStyles.cardDescription
        }
      >
        <Typography variant="body1">
            {text}
          </Typography>
      </Box>
  </ThemeConfig>
  )
}
}


export default CardDescription;
