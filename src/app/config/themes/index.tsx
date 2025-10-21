'use client'
import { CssBaseline, PaletteColor, PaletteColorOptions, ThemeProvider, createTheme } from "@mui/material"
import React from "react"
import { palette } from "./palette"
import { customStyles } from "./components"
import { typography } from "./typography"
import "@mui/material/Button";
import { components } from "./variants"
type ThemeProp = {
  children: JSX.Element
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    home: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    customStyles: typeof customStyles
  }
  interface ThemeOptions {
    customStyles?: typeof customStyles
  }
  interface Palette {
    button?: PaletteColor;
    buttonHover?: PaletteColor;
    statusSelect?: PaletteColor;
    textColor?: PaletteColor;
    bgColor?: PaletteColor;
    customClass?: PaletteColor;
    borderColor?: {
      start: string;
      end: string;
    };
  }
  interface PaletteOptions {
    button?: PaletteColorOptions
    buttonHover?: PaletteColorOptions
    statusSelect?: PaletteColorOptions
    textColor?: PaletteColorOptions
    bgColor?: PaletteColorOptions
    customClass?: PaletteColorOptions
    borderColor?: {
      start: string
      end: string
    }
  }
}

const theme = createTheme({
  palette,
  typography,
  customStyles,
  components
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )

export { theme }
