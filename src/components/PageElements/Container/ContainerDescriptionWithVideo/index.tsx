import React from "react";
import { Box, Typography, useMediaQuery, Grid, Link } from "@mui/material";
import { theme, themePalette } from "@/app/config/theme";
import { TextDescription  } from "@/components/TextDescription";
import { ContainerDescriptionDivider } from "../ContainerDescriptionDivider";
import ReactMarkdown from "react-markdown";

interface ContainerDescriptionWithVideoProps {
  text: string;
  video: boolean;
}

export const ContainerDescriptionWithVideo: React.FC<ContainerDescriptionWithVideoProps> = ({
  text,
  video,
}) => {
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
    // a: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    //   <Link {...props} />
    // ) 
  };

  return (
    <Box>
      {!video ? (
        <ContainerDescriptionDivider text={text} />
      ) : (
        <Grid container columnSpacing={3} rowSpacing={3}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Box sx={theme.customStyles.description}>
              <ReactMarkdown components={components}>
                {text}
              </ReactMarkdown>
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Box sx={theme.customStyles.description}>
                <TextDescription  text={text} />
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
