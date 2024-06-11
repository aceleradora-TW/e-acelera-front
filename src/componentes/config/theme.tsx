import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

export enum themePalette {
  buttonText = "RGB(3, 29, 60)",
  title = "RGB(0, 44, 83)",
  buttonBg = "RGB(95, 160, 237)",
  descriptionCard = "RGB(44, 44, 44)",
  descriptionText = "RGB(0, 0, 0)",
  statusInProgress = "RGB(225, 222, 107)",
  statusConcluded = "RGB(3, 29, 60)",
  statusPending = "RGB(225, 225, 225)",
  mainBg = "RGB(245, 245, 245)",
  cardBg = "RGB(255, 255, 255)",
  shawdowBg = "RGBA(0, 0, 0, 0.25)",
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
