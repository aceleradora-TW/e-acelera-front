import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  buttonText = "rgb(3, 29, 60)",
  title = "rgb(0, 44, 83)",
  buttonBg = "rgb(95, 160, 237)",
  descriptionCard = "rgb(44, 44, 44)",
  descriptionText = "rgb(0, 0, 0)",
  statusInProgress = "rgb(225, 222, 107)",
  statusConcluded = "rgb(3, 29, 60)",
  statusPending = "rgb(225, 225, 225)",
  mainBg = "rgb(245, 245, 245)",
  cardBg = "rgb(255, 255, 255)",
  shawdowBg = "rgba(0, 0, 0, 0.25)",
}

const theme = createTheme({
  palette: {
    primary: {
      main: themePalette.title,
      light: themePalette.buttonBg,
      dark: themePalette.descriptionText,
      contrastText: themePalette.descriptionCard,
    },

    secondary: {
      main: themePalette.buttonText,
      light: themePalette.statusPending,
      dark: themePalette.statusInProgress,
      contrastText: themePalette.statusConcluded,
    },
    info: {
      main: themePalette.mainBg,
      light: themePalette.cardBg,
      dark: themePalette.shawdowBg,
    },
  },
    typography: {
        //  titulo principal
        h1: {
            fontSize: '3rem',
            lineHeight: 1.16,
            fontWeight: 500,
            letterSpacing: 0.15,
            color: "red"
          },
        //  titulo secundario
        h2: {
            fontSize: '1.8rem',
            lineHeight: 1.6,
            fontWeight: 500,
            letterSpacing: 0.15,
            color: "blue"
        },
       
        //   botão 
        button: {
            fontSize: '1rem',
            lineHeight: 1.6,
            fontWeight: 400,
            letterSpacing: 0.4,
            textTransform: "uppercase",
            color: "brown"
        },
        //   texto da navbar
        subtitle1: {
            fontSize: '1rem',
            lineHeight: 1.7,
            fontWeight: 400,
            letterSpacing: 0.4,
            color: "purple"
        },
        //   texto da navbar
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
            fontWeight: 400,
            letterSpacing: 0.15,
            color: "white"
        },
        // porcentagem 
        caption: {
            fontSize: '1rem',
            lineHeight: 1.6,
            fontWeight: 400,
            letterSpacing: 0.15,
            color: "green"
        }


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
