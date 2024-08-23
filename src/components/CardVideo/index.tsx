import React from "react";
import { Box, Typography } from "@mui/material";
import { ThemeConfig, theme } from "../../app/config/theme";
import StatusSelect from "@/components/StatusSelect";
import ReactMarkdown from "react-markdown";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="h2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="body1" sx={{ color: theme.palette.textColor?.light }} {...props} />
  ),
};
function CardVideo() {
  const videoUrl: string = "https://www.youtube.com/watch?v=KvcneqbMJs4";
  let text: string = "**Neste** curso ensinarei para você TUDO o que você precisa saber para adquirir uma base sólida no TypeScript, uma das linguagens mais requisitadas no mercado atualmente! Neste curso ensinarei para você TUDO o que você precisa saber para adquirir uma base sólida no TypeScript, uma das linguagens mais requisitadas no mercado atualmente!";
  let titulov: string = "# Curso de TypeScript para Completos Iniciantes";
  let creditos: string = "Felipe Rocha • dicasparadevs";

  function getYouTubeEmbedUrl(url: string): string {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <Box sx={theme.customStyles.cardVideo}>
      <Box sx={theme.customStyles.cardVideoLink}>
        <iframe
          width="100%"
          height="332"
          src={getYouTubeEmbedUrl(videoUrl)}
        ></iframe>
        <Box sx={theme.customStyles.cardVideoNumber}>
          <ReactMarkdown components={components}>
            {titulov}
          </ReactMarkdown>
          <ReactMarkdown components={components}>
            {creditos}
          </ReactMarkdown>
        </Box>
        <Box sx={theme.customStyles.cardVideoDescription}>
          <ReactMarkdown components={components}>
            {text}
          </ReactMarkdown>
        </Box>
        <Box sx={theme.customStyles.cardVideoSelect}>
          <StatusSelect />
        </Box>
      </Box>
    </Box>
  );
}

export default CardVideo;