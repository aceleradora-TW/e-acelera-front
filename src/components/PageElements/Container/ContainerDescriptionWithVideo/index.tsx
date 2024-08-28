import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import { theme, themePalette } from "@/app/config/theme";
import { TextDescription } from "@/components/TextDescription";
import { ContainerDescriptionDivider } from "../ContainerDescriptionDivider";
import { CardVideo } from "@/components/CardVideo";
import ReactMarkdown from "react-markdown";

interface ContainerDescriptionWithVideoProps {
  text: string;
  textVideo: string;
  title: string;
  linkVideo: string;
  references?: string;
}

export const ContainerDescriptionWithVideo: React.FC<
  ContainerDescriptionWithVideoProps
> = ({ text, textVideo, title, linkVideo, references }) => {
  const components = {
    p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="body1" sx={{marginBottom: 3}} {...props} />

    ),
    a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
      <Link
        variant="caption"
        target="_blank"
        rel="noreferrer"
        sx={{
          color: themePalette.descriptionCard,
          textDecorationColor: themePalette.descriptionCard,
          display: "block",
        }}
        {...props}
      />
    ),
  };

  return (
    <Box>
      {!linkVideo ? (
        <ContainerDescriptionDivider text={text} />
      ) : (
        <Grid container columnSpacing={3} rowSpacing={3} alignItems="stretch">
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Box sx={theme.customStyles.description}>
              <ReactMarkdown components={components}>{text}</ReactMarkdown>
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <CardVideo
              text={textVideo}
              title={title}
              linkVideo={linkVideo}
              references={references}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
