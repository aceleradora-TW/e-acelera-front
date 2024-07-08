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

export enum themePalette {
  button = "rgb(11, 73, 122)",
  title = "rgb(0, 44, 83)",
  descriptionCard = "rgb(44, 44, 44)",
  descriptionText = "rgb(0, 0, 0)",
  statusInProgress = "rgb(255, 222, 107)",
  statusConcluded = "rgb(155, 255, 133)",
  statusPending = "rgb(225, 225, 225)",
  mainBg = "rgb(245, 245, 245)",
  whiteBg = "rgb(255, 255, 255)",
}

declare module "@mui/material/styles" {
  interface PaletteOptions {
    button?: PaletteColorOptions; 
    buttonHover?: PaletteColorOptions;
    statusSelect?: PaletteColorOptions;
    textColor?: PaletteColorOptions;
    bgColor?: PaletteColorOptions;
    customClass?: PaletteColorOptions;
  }

  interface Palette {
    button?: PaletteColor;
    buttonHover?: PaletteColor;
    statusSelect?: PaletteColor;
    textColor?: PaletteColor;
    bgColor?: PaletteColor;
    customClass?: PaletteColor;
  }

  interface Theme {
    customStyles: {
      button: {
        backgroundColor: string;
        borderColor: string;
        color: string;
        fontSize: string;
        lineHeight: number;
        fontWeight: number;
        letterSpacing: number;
        textTransform: string;
        padding: string;
        borderRadius: number;
        border: number;
      };
      description: {
        display: string;
        flexDirection: string;
        justifyContent: string;
        padding: number;
        boxShadow: string;
        borderRadius: string;
      }
    };
  }

  interface ThemeOptions {
    customStyles?: {
      button?: {
        backgroundColor?: string;
        borderColor?: string;
        color?: string;
        fontSize?: string;
        lineHeight?: number;
        fontWeight?: number;
        letterSpacing?: number;
        textTransform?: string;
        padding?: string;
        borderRadius?: number;
        border?: number;
      };
      description?:{
        display?: string;
        flexDirection?: string;
        justifyContent?: string;
        padding?: number;
        boxShadow?: string;
        borderRadius?: string;
      }
    };
  }
}

const theme = createTheme({
  customStyles: {
    button: {
      backgroundColor: themePalette.whiteBg,
      borderColor: themePalette.button,
      color: themePalette.button,
      fontSize: "16px",
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.4,
      textTransform: "uppercase",
      padding: "8px 16px",
      borderRadius: 2,
      border: 1,
    },
    description:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 2,
      boxShadow: "0em 0em 0.4em rgb(44 44 44 / 40% );",
      borderRadius: "6px",
    },
  },
  palette: { 
    statusSelect:{
      main: themePalette.statusPending,
      light: themePalette.statusConcluded,
      dark: themePalette.statusInProgress,
    },
    buttonHover:{
      main: themePalette.button,
      contrastText: themePalette.whiteBg,
    },
    
    textColor:{
      main: themePalette.title,
      light: themePalette.descriptionCard,
      dark: themePalette.descriptionText,
    },
    bgColor:{
      main: themePalette.mainBg,
      light: themePalette.whiteBg,
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
