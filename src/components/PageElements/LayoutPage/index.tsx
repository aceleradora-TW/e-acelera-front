import { theme } from "@/app/config/theme";
import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";

interface LayoutPageProps {
  children: React.ReactNode;
}

export const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  let padding = 0
  const xs = useMediaQuery('(min-width: 0px) and (max-width: 599px)');
  const sm = useMediaQuery('(min-width: 600px) and (max-width: 899px)');
  const md = useMediaQuery('(min-width: 900px) and (max-width: 1199px)');

  switch (true) {
    case xs: {
      padding = 2
      break;
    }
    case sm: {
      padding = 3
      break;
    }
    case md: {
      padding = 6
      break;
    }
    default: { 
      padding = 8
      break; }
  }


  return (
    <Box sx={{ ...theme.customStyles.centralizeContent, paddingRight: padding, paddingLeft: padding }}>
      <Grid container columns={{ xl: 12, lg: 9, md: 6, sm: 3, xs: 3 }} rowSpacing={3}
      >
        {children}
      </Grid>
    </Box>
  );
};
