import { theme } from "@/app/config/theme";
import { Box, Grid } from "@mui/material";
import React from "react";

interface LayoutPageProps {
  children: React.ReactNode;
}

export const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  return (
    <Box sx={theme.customStyles.centralizeContent}>
      <Grid container columns={{ xl: 12, lg: 9, md: 6, sm: 3 }} rowSpacing={3} 
        mx={{ xs: 2, sm: 3, md: 6, lg: 8, xl: 8 }}>
        {children}
      </Grid>
    </Box>
  );
};
