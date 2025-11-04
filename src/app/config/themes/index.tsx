'use client'
import { CssBaseline, PaletteColor, PaletteColorOptions, ThemeProvider, createTheme } from "@mui/material"
import React from "react"
import { palette } from "./palette"
import { customStyles } from "./components"
import { typography } from "./typography"
import { useAccessibility } from "@/context/accessibility.context"
import { highContrastTheme } from "./highContrast"

type ThemeProp = {
  children: JSX.Element
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
    button?: PaletteColorOptions;
    buttonHover?: PaletteColorOptions;
    statusSelect?: PaletteColorOptions;
    textColor?: PaletteColorOptions;
    bgColor?: PaletteColorOptions;
    customClass?: PaletteColorOptions;
    accent?: {
      blue: string;
      pink: string;
      orange: string;
    }
  }
}

const theme = createTheme({
  palette,
  typography,
  customStyles
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  const { contrastEnabled } = useAccessibility();

  return (
    <ThemeProvider
      theme={contrastEnabled ? highContrastTheme : theme}
      key={contrastEnabled ? 'dark' : 'normal'}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export { theme }
