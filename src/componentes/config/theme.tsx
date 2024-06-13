import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};


const theme = createTheme({
 
  typography: {
    //  titulo principal
    h1: {
      fontSize: "3rem",
      lineHeight: 1.16,
      fontWeight: 500,
      letterSpacing: 0.15,
    },
    //  titulo secundario
    h2: {
      fontSize: "1.8rem",
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.15,
    },

    //   botão
    button: {
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.4,
      textTransform: "uppercase",
      borderRadius: 4,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      cursor: "pointer"
    },
    //   texto da navbar
    subtitle1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      fontWeight: 400,
      letterSpacing: 0.4,
    },
    //   textos
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 400,
      letterSpacing: 0.15,
    },
    // porcentagem
    caption: {
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 400,
      letterSpacing: 0.15,
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { theme };
