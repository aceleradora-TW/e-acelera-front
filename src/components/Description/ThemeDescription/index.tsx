import React from "react";
import { Divider, Box, Typography, useMediaQuery } from "@mui/material";
import { theme } from "@/app/config/theme";
import { ThemeConfig } from "@/app/config/theme";

interface ThemeDescriptionProps {
  text: string;
}

const boxStyle: object = {
  width: "49%"
}

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
          <Typography variant="body1">
            {text}
          </Typography>
        ) : (
          <>
            <Box sx={ boxStyle }>
              <Typography variant="body1">
                {textBox1}
              </Typography>
            </Box>

            <Divider orientation="vertical" flexItem color="black" sx={{ margin: 0 }} />

            <Box sx={ boxStyle }>
              <Typography variant="body1">
                {textBox2}
              </Typography>
            </Box>
          </>
        )}
      </Box>
  );
};
