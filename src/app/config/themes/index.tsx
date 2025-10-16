'use client'
import { CssBaseline, PaletteColor, PaletteColorOptions, ThemeProvider, createTheme } from "@mui/material"
import React from "react"
import { palette, themePalette } from "./palette"
import { customStyles } from "./components"
import { typography } from "./typography"
import "@mui/material/Button";
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
    button?: PaletteColor 
    buttonHover?: PaletteColor
    statusSelect?: PaletteColor
    textColor?: PaletteColor
    bgColor?: PaletteColor
    customClass?: PaletteColor
  }
  interface PaletteOptions {
    button?: PaletteColorOptions
    buttonHover?: PaletteColorOptions
    statusSelect?: PaletteColorOptions
    textColor?: PaletteColorOptions
    bgColor?: PaletteColorOptions
    customClass?: PaletteColorOptions
  }
}

const theme = createTheme({
  palette,
  typography,
  customStyles,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: themePalette.baseBgColor,
          borderColor: themePalette.button,
          color: themePalette.button,
          fontSize: "1rem",
          lineHeight: 1.6,
          fontWeight: 500,
          letterSpacing: "0.4px",
          textTransform: "uppercase",
          padding: "8px 16px",
          borderRadius: 2,
          border: "1px solid",
        },
      },
      variants: [
        {
          props: { variant: "home" },
          style: {
            padding: "8px",
            boxShadow: '0px 2px 8px rgba(0,0,0,0.25)',
            
            borderRadius: 4,
            maxWidth: 300,
            fontWeight: 600,

            
          },
        },
      ],
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )

export { theme }
