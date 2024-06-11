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
