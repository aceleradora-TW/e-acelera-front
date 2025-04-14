'use client'
import { CssBaseline, PaletteColor, PaletteColorOptions, ThemeProvider, createTheme } from "@mui/material"
import React from "react"
import { palette } from "./palette"
import { customStyles } from "./components"
import { typography } from "./typography"

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

const theme = createTheme({
  palette: palette,
  typography: typography,
  customStyles: customStyles
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export { theme }
