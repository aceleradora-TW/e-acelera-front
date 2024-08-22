import React from "react";
import { Box, Typography, useMediaQuery, Grid } from "@mui/material";
import { theme } from "@/app/config/theme";
import { ThemeDescription } from "../DividerDescription";
import ReactMarkdown from "react-markdown";

interface TopicDescriptionProps {
  text: string;
  video: boolean;
}

const components = {
  p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="body1" {...props} />
  ),
};

export const TopicDescription: React.FC<TopicDescriptionProps> = ({
  text,
  video,
}) => {

  return (
    <Box>
      {!video ? (
        <ThemeDescription text={text} />
      ) : (
        <Grid container columnSpacing={3} rowSpacing={3}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Box sx={theme.customStyles.description}>
              <ReactMarkdown components={components}>{text.replace(/\n\n/g, " ")}</ReactMarkdown>
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Box sx={theme.customStyles.description}>
              <ReactMarkdown components={components}>{text.replace(/\n\n/g, " ")}</ReactMarkdown>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
