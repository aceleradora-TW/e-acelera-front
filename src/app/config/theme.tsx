'use client';
import {
  CssBaseline,
  PaletteColor,
  PaletteColorOptions,
  ThemeProvider,
  createTheme
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
      };
      linkActive: {
        borderBottom: string;
        color: string;
        borderBottomWidth: string;
        borderBottomColor: string;
        my: number;
        display: string;
        textTransform: string;
        fontSize: string;
        lineHeight: number;
        fontWeight: number;
        letterSpacing: number;
        margin: string;
        borderRadius: string;
      };
      link: {
        color: string;
        my: number;
        display: string;
        textTransform: string;
        fontSize: string;
        lineHeight: number;
        fontWeight: number;
        letterSpacing: number;
        margin: string;
        borderRadius: string;
      };
      logoType: {
        fontSize: string;
        mr: number;
        fontWeight: number;
        letterSpacing: string;
        lineHeight: number;
        textDecoration: string;
        color: string;
      };
      cardBody: {
        color: string;
        wordWrap: string;
        display: string;
        WebkitBoxOrient: string;
        WebkitLineClamp: number;
        overflow: string;
        textOverflow: string;
      };
      cardContainer: {
        backgroundColor: string;
        maxWidth: number;
        borderWidth: number;
        maxHeight: number;
      };
      cardButtonContainer: {
        backgroundColor: string;
        maxWidth: number;
        borderWidth: number;
        maxHeight: number;
        "&:hover": {
          transform: string;
      }
      };
      cardContent: {
        paddingBottom: number; 
        height: number;
      };
      cardButtonContent:{
        paddingBottom: number;
        paddingTop: number;
      };
      cardMedia: {
        height: number;
        marginBottom: number;
      };
      cardTitle: {
        wordWrap: string;
        color: string;
      };
      title: {
        textAlign: string;
        color: string;
        margin: string;
      };
      breadCrumb: {
        textDecoration: string;
        color: string;
        marginTop: number;
      };
      centralizeContent: {
        display: string;
        justifyContent: string;
        alignItems: string;
        maxWidth: string;
        margin: string;
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
        margin?: number;
      };
      linkActive: {
        borderBottom?: string;
        color?: string;
        borderBottomWidth?: string;
        borderBottomColor?: string;
        my?: number;
        display?: string;
        textTransform?: string;
        fontSize?: string;
        lineHeight?: number;
        fontWeight?: number;
        letterSpacing?: number;
        margin?: string;
        borderRadius?: string;
      };
      link: {
        color?: string;
        my?: number;
        display?: string;
        textTransform?: string;
        fontSize?: string;
        lineHeight?: number;
        fontWeight?: number;
        letterSpacing?: number;
        margin?: string;
        borderRadius?: string;
      };
      logoType: {
        fontSize?: string;
        mr?: number;
        fontWeight?: number;
        letterSpacing?: string;
        lineHeight?: number;
        textDecoration?: string;
        color?: string;
      };
      cardBody?: {
        color?: string;
        wordWrap?: string;
        display?: string;
        WebkitBoxOrient?: string;
        WebkitLineClamp?: number;
        overflow?: string;
        textOverflow?: string;
      };
      cardContainer?: {
        backgroundColor?: string;
        maxWidth?: number;
        borderWidth?: number; 
        maxHeight?: number;
      };
      cardButtonContainer?: {
        backgroundColor?: string;
        maxWidth?: number;
        borderWidth?: number; 
        maxHeight?: number;
        "&:hover": {
          transform?: string;
      }
      };
      cardContent?:{
        paddingBottom?: number;
        height?: number;
      };
      cardButtonContent?:{
        paddingBottom?: number; 
        paddingTop?: number;
      };
      cardMedia?: {
        height?: number;
        marginBottom?: number;
      };
      cardTitle?: {
        wordWrap?: string;
        color?: string;
      };
      title?: {
        textAlign?: string,
        color?: string,
        margin?: string
      };
      breadCrumb?: {
        textDecoration?: string;
        color?: string;
        marginTop?: number;
      };
      centralizeContent?: {
        display?: string;
        justifyContent?: string;
        alignItems?: string;
        maxWidth?: string;
        margin?: string;
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
      margin: 0,
    },
    linkActive: {
      borderBottom: "solid",
      color: themePalette.title,
      borderBottomWidth: "3px",
      borderBottomColor: themePalette.title,
      my: 2,
      display: "block",
      textTransform: "none",
      fontSize: "18px",
      lineHeight: 1.7,
      fontWeight: 400,
      letterSpacing: 0.4,
      margin: "0 0.5rem",
      borderRadius: "0",
    },
    link: {
      color: themePalette.descriptionCard,
      my: 2,
      display: "block",
      textTransform: "none",
      fontSize: "18px",
      lineHeight: 1.7,
      fontWeight: 400,
      letterSpacing: 0.4,
      margin: "0 0.5rem",
      borderRadius: "0",
    },
    logoType: {
      fontSize: "19.2px",
      mr: 2,
      fontWeight: 700,
      letterSpacing: "0.15px",
      lineHeight: 1.6,
      textDecoration: "none",
      color: themePalette.title,
    },
    cardBody: {
      color: themePalette.descriptionCard,
      wordWrap: 'break-word',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    cardContainer: {
      maxHeight: 502,
      maxWidth: 368,
      borderWidth: 2,
      backgroundColor:themePalette.whiteBg
    },
    cardButtonContainer: {
      backgroundColor: themePalette.whiteBg,
      maxWidth: 316, 
      borderWidth: 2, 
      maxHeight: 256, 
      "&:hover": {
       transform: "scale(1.1)"
      }
    },
    cardContent:{
      paddingBottom: 10.63,
      height: 200
    },
    cardButtonContent:{
      paddingBottom: 1, 
      paddingTop: 2
    }, 
    centralizeContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '1630px',
      margin: '0 auto'
    },
    cardMedia: {
      height: 152,
      marginBottom:5.5
    },
    cardTitle:{
      color: themePalette.title,
      wordWrap: "break-word"
    },
    title: {
      textAlign: "left",
      color: themePalette.title,
      margin: "20px 0"
    },
    breadCrumb: {
      textDecoration: "none",
      color: themePalette.title
    },
  },
  palette: {
    statusSelect: {
      main: themePalette.statusPending,
      light: themePalette.statusConcluded,
      dark: themePalette.statusInProgress,
    },
    buttonHover: {
      main: themePalette.button,
      contrastText: themePalette.whiteBg,
    },

    textColor: {
      main: themePalette.title,
      light: themePalette.descriptionCard,
      dark: themePalette.descriptionText,
    },
    bgColor: {
      main: themePalette.mainBg,
      light: themePalette.whiteBg,
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
      letterSpacing: 0.15,
      lineHeight: "normal",
      [`@media (min-width:0px)`]: {
        fontSize: "1.5rem",
      },
      [`@media (min-width:600px)`]: {
        fontSize: "2rem",
      },
      [`@media (min-width:900px)`]: {
        fontSize: "2.5rem",
      },
      [`@media (min-width:1200px)`]: {
        fontSize: "3rem",
      },
      [`@media (min-width:1536px)`]: {
        fontSize: "3.5rem",
      }
      
    },

    h2: {
      lineHeight: 1.6,
      fontWeight: 500,
      letterSpacing: 0.15,
      [`@media (min-width:0px)`]: {
        fontSize: "1.2rem",
      },
      [`@media (min-width:600px)`]: {
        fontSize: "1.4rem",
      },
      [`@media (min-width:1200px)`]: {
        fontSize: "1.6rem",
      },
      [`@media (min-width:1536px)`]: {
        fontSize: "1.6rem",
      }
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 400,
      letterSpacing: 0.15,
      
    },
    caption: {
      fontSize: "1.4rem",
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