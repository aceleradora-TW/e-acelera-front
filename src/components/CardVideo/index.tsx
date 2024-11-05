import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../app/config/theme";
import ReactMarkdown from "react-markdown";
import StatusSelect from "../StatusSelect";

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="caption" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="body1" sx={{ color: theme.palette.textColor?.light }} {...props} />
  ),
};
interface CardVideoProps{
  text: string;
  title: string;
  videoLink: string;
  references?: string;
}
export const CardVideo: React.FC<CardVideoProps>=({ text, title, videoLink, references }) => {

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
          src={getYouTubeEmbedUrl(videoLink)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
        />
        <Box sx={theme.customStyles.cardVideoNumber}>
          <ReactMarkdown components={components}>
            {title}
          </ReactMarkdown>
          <ReactMarkdown components={components}>
            {references}
          </ReactMarkdown>
        </Box>
        <Box sx={theme.customStyles.cardVideoDescription}>
          <ReactMarkdown components={components}>
            {text}
          </ReactMarkdown>
        </Box>
        <Typography sx={{ padding: 2 }}>
            <StatusSelect width='30%'/>
        </Typography>
      </Box>
      
    </Box>
  );
}
