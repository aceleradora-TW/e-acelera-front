import React from "react";
import { Divider, Box, Typography, useMediaQuery } from "@mui/material";
import { theme } from "@/app/config/theme";
import { ThemeConfig } from "@/app/config/theme";
import ReactMarkdown from "react-markdown";

interface ThemeDescriptionProps {
  text: string;
}

const boxStyle: object = {
  width: "49%"
}
interface MarkdownTextProps {
  markdownContent: string;
}
const components = {
  p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="body1" {...props} />
  ),
};

export const ThemeDescription: React.FC<ThemeDescriptionProps> = ({ text }) => {
  const descriptionSize: number = text.length;
  const middleTextPoint: number = Math.floor(descriptionSize / 2);

  let splitPoint: number = middleTextPoint;
  while (splitPoint > 0 && text[splitPoint] !== ' ') {
    splitPoint--;
  }

  if (splitPoint === 0) {
    splitPoint = middleTextPoint;
  }



  const textBox1: string = text.substring(0, splitPoint);
  const textBox2: string = text.substring(splitPoint).trim();

  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <Box sx={theme.customStyles.description}>
        {isSmallScreen ? (
          <ReactMarkdown components={components}>
            {text.replace(/\n\n/g, " ")}
          </ReactMarkdown>
        ) : (
          <>
            <Box sx={ boxStyle }>
              <ReactMarkdown components={components}>
                {textBox1}
              </ReactMarkdown>
            </Box>

            <Divider orientation="vertical" flexItem color="black" sx={{ margin: 0 }} />

            <Box sx={ boxStyle }>
              <ReactMarkdown components={components}>
                {textBox2}
              </ReactMarkdown>
            </Box>
          </>
        )}
      </Box>
  );
};
