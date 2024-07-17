import React from "react";
import { Divider, Box, Typography } from "@mui/material";
import { theme } from "@/components/config/theme";
import { ThemeConfig } from "@/components/config/theme";

interface ThemedescriptionProps {
  text: string;
}

export const ThemeDescription: React.FC<ThemedescriptionProps> = ({ text }) => {
  const descriptionSize: number = text.length;
  const middleTextPoint: number = Math.floor(descriptionSize / 2);

  let splitPoint = middleTextPoint;
  while (splitPoint > 0 && text[splitPoint] !== ' ') {
    splitPoint--;
  }

  if (splitPoint === 0) {
    splitPoint = middleTextPoint;
  }

  const textBox1: string = text.substring(0, splitPoint);
  const textBox2: string = text.substring(splitPoint).trim();

  return (
    <ThemeConfig>
      <Box sx={theme.customStyles.description}>
        <Box sx={{ width: "49%" }}>
          <Typography variant="body1">
            {textBox1}
          </Typography>
        </Box>

        <Divider orientation="vertical" flexItem color="black" sx={{ margin: "0 0px" }} />

        <Box sx={{ width: "49%" }}>
          <Typography variant="body1">
            {textBox2}
          </Typography>
        </Box>
      </Box>
    </ThemeConfig>
  );
};