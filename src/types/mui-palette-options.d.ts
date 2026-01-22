import {
  PaletteColor,
  PaletteOptions,
  Theme,
  ThemeOptions,
} from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    customStyles: typeof customStyles;
  }
  interface ThemeOptions {
    customStyles?: typeof customStyles;
  }
  interface Palette {
    button?: PaletteColor;
    buttonHover?: PaletteColor;
    statusSelect?: PaletteColor;
    textColor?: PaletteColor;
    bgColor?: PaletteColor;
    customClass?: PaletteColor;
    accent?: {
      blue: string;
      pink: string;
      orange: string;
      gradient?: string;
      lightBlue?: string;
    };
    sameColor?: {
      white: string;
      blue: string;
      darkBlue: string;
      gray: string;
    };
  }

  interface PaletteOptions {
    primary: {
      main: string;
      light: string;
      dark: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
    };
    background: {
      default: string;
      paper: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    } & {
      white: string;
      black: string;
    };
    button: {
      default: {
        bg: string;
        hover: string;
        contrastText: string;
      };
      create: {
        bg: string;
        hover: string;
        contrastText: string;
      };
      danger: {
        bg: string;
        hover: string;
        contrastText: string;
      };
      disabled: {
        bg: string;
        hover: string;
        contrastText: string;
      };
    };
    status: {
      error: string;
      success: string;
      notStarted: string;
      inProgress: string;
    };
    accent: {
      blue: string;
      pink: string;
      orange: string;
      lightBlue: string;
      gray: string;
    };
  }
}
