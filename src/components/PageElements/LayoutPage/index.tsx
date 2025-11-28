import { theme } from "@/app/config/themes";
import { Box, Grid } from "@mui/material";
import React from "react";

interface LayoutPageProps {
  children: React.ReactNode;
}

export const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => (
    <Box sx={{ ...theme.customStyles.centralizeContent, }}>
      <Grid container columns={{ xl: 12, lg: 9, md: 6, sm: 3, xs: 3 }} rowSpacing={3}
      >
        {children}
      </Grid>
    </Box>
  );
