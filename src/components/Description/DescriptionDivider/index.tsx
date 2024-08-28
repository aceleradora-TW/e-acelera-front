import React from "react";
import { Divider, Box, Typography, useMediaQuery, Link } from "@mui/material";
import { theme, themePalette } from "@/app/config/theme";
import ReactMarkdown from "react-markdown";

interface DescriptionDividerProps {
  text: string;
}

const boxStyle: object = {
  width: "49%"
}

export const DescriptionDivider: React.FC<DescriptionDividerProps> = ({ text }) => {
  const descriptionSize: number = text.length;
  const middleTextPoint: number = Math.floor(descriptionSize / 2);

  let splitPoint: number = middleTextPoint;
  while (splitPoint > 0 && text[splitPoint] !== ' ') {
    splitPoint--;
  }

  if (splitPoint === 0) {
    splitPoint = middleTextPoint;
  }

  const components = {
    p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="body1" {...props} />
    ),
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
      <Link
        variant="caption" target="_blank" rel="noreferrer"
        sx={{ color: themePalette.descriptionCard, textDecorationColor: themePalette.descriptionCard, display: "block" }}
        {...props} />
    )
  };

  const typographyBreakLine = {
    p: (props:React.HTMLAttributes<HTMLHeadingElement> ) => (
      <Typography variant="body1" sx={{marginBottom: 3}} {...props} />
    ),
  }

  const textBox1: string = text.substring(0, splitPoint);
  const textBox2: string = text.substring(splitPoint).trim();

  const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{...theme.customStyles.description, flexDirection: isSmallScreen? "column": "row"}}>
      {isSmallScreen ? (
        <ReactMarkdown
        components={typographyBreakLine}
      >
        {text}
      </ReactMarkdown>
        
      ) : (
        <>
          <Box sx={boxStyle}>
            <ReactMarkdown components={components}>
              {textBox1.replace(/\n\n/g, "")}
            </ReactMarkdown>
          </Box>

          <Divider orientation="vertical" flexItem color="black" sx={{ margin: 0 }} />

          <Box sx={boxStyle}>
            <ReactMarkdown components={components}>
              {textBox2.replace(/\n\n/g, "")}
            </ReactMarkdown>
          </Box>
        </>
      )}
    </Box>
  );
};
