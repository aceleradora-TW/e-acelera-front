'use client'
import { CssBaseline, PaletteColor, PaletteColorOptions, ThemeProvider, createTheme } from "@mui/material"
import React from "react"
import { palette } from "./palette"
import { customStyles } from "./components"
import { typography } from "./typography"
import { useAccessibility } from "@/context/accessibility.context"

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
    button?: PaletteColorOptions
    buttonHover?: PaletteColorOptions
    statusSelect?: PaletteColorOptions
    textColor?: PaletteColorOptions
    bgColor?: PaletteColorOptions
    customClass?: PaletteColorOptions
  }
}

const themeBuilder = (fontFamily?: string) => createTheme({
  palette,
  typography:{
    ...typography,
    fontFamily,
  },
  customStyles
})

const defaultTheme = themeBuilder()

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  const {themeFontFamily} = useAccessibility()
  const theme = themeBuilder(themeFontFamily)
    return(
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )}

export {defaultTheme as theme}
