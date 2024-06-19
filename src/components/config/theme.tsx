import {
  CssBaseline,
  PaletteColor,
  PaletteColorOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";

type ThemeProp = {
  children: JSX.Element;
};

declare module "@mui/material/styles" {
  interface PaletteOptions {
    cabecalho?: PaletteColorOptions; // Define your custom color
    customClass?: PaletteColorOptions;
  }

  interface Palette {
    cabecalho?: PaletteColor; // Also extend the Palette interface
    customClass?: PaletteColor;
  }

  interface Theme {
    customStyles: {
      customHeader: {
        backgroundColor: string;
        color: string;
        margin: string;
        padding: string;
      };
      cabecalho: {
        backgroundColor: string;
        color: string;
        margin: string;
        padding: string;
      };
    };
  }

  interface ThemeOptions {
    customStyles?: {
      customHeader?: {
        backgroundColor?: string;
        color?: string;
        margin?: string;
        padding?: string;
      };
      cabecalho?: {
        backgroundColor?: string;
        color?: string;
        margin?: string;
        padding?: string;
      };
    };
  }
}

export enum themePalette {
  buttonText = "rgb(3, 29, 60)",
  title = "rgb(0, 44, 83)",
  buttonBg = "rgb(122, 175, 240)",
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
  customStyles: {
    customHeader: {
      backgroundColor: "#ff5722",
      color: "#fff",
      margin: "16px",
      padding: "8px",
    },
    cabecalho: {
      backgroundColor: "#673ab7",
      color: "#fff",
      margin: "32px",
      padding: "16px",
    },
  },
  palette: {
    cabecalho: {
      main: "#2196f3", // Your custom class color
      light: "#64b5f6", // A lighter shade
      dark: "#1976d2", // A darker shade
      contrastText: "#000", // Text color for contrast
    },
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
    h1: {
      fontSize: "48px",
      lineHeight: 1.16,
      fontWeight: 500,
      letterSpacing: 0.15,
    },

    h2: {
      fontSize: "25.6px",
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.15,
    },

    button: {
      fontSize: "17.6px",
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.4,
      textTransform: "uppercase",
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      borderRadius: 4,
    },

    subtitle1: {
      fontSize: "18px",
      lineHeight: 1.7,
      fontWeight: 400,
      letterSpacing: 0.4,
    },

    body1: {
      fontSize: "16px",
      lineHeight: 1.5,
      fontWeight: 400,
      letterSpacing: 0.15,
    },
    caption: {
      fontSize: "22px",
      lineHeight: 1.6,
      fontWeight: 500,
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
