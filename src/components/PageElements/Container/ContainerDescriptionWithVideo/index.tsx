import React from "react";
import { Box, Typography, useMediaQuery, Grid } from "@mui/material";
import { theme } from "@/app/config/theme";
import { CardDescription } from "@/components/CardDescription";
import { ContainerDescriptionDivider } from "../ContainerDescriptionDivider";

interface ContainerDescriptionWithVideoProps {
  text: string;
  video: boolean;
}

export const ContainerDescriptionWithVideo: React.FC<ContainerDescriptionWithVideoProps> = ({
  text,
  video,
}) => {

  return (
    <Box>
      {!video ? (
        <ContainerDescriptionDivider text={text} />
      ) : (
        <Grid container columnSpacing={3} rowSpacing={3}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Box sx={theme.customStyles.description}>
                <CardDescription text={text} />
            </Box>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Box sx={theme.customStyles.description}>
                <CardDescription text={text} />
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
