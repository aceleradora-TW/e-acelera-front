'use client'
import { CssBaseline, PaletteColor, PaletteColorOptions, ThemeProvider, createTheme, useTheme } from "@mui/material"
import React, { useMemo } from "react"
import { palette } from "./palette"
import { customStyles } from "./components"
import { createTypography, typography } from "./typography"
import { useGlobalContext } from "@/hooks/useGlobalContext"
import { useAccessibilityContext } from "@/hooks/useAccessibilityContext"

type ThemeProp = {
  children: React.ReactNode;
};

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

const sizeMultipliers = { normal: 1, large: 1.2, "extra-large": 1.4 };
const spacingValues = {
  normal: {},
  medium: { letterSpacing: "0.1em", wordSpacing: "0.2em" },
  large: { letterSpacing: "0.2em", wordSpacing: "0.4em" },
};
const lineHeightValues = { normal: 1.5, medium: 1.75, large: 2.0 };
const fontValues = {
  default: '"Sora", sans-serif',
  dyslexic: '"OpenDyslexic", sans-serif',
}; 


export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  const { fontSize, textSpacing, lineHeight, fontMode } = useAccessibilityContext();

  const theme = useMemo(() => {
    const multiplier = sizeMultipliers[fontSize];
    const spacing = spacingValues[textSpacing];
    const finalLineHeight = lineHeightValues[lineHeight];
    const font = fontValues[fontMode];


    const typography = createTypography(multiplier, spacing, finalLineHeight, font);

    return createTheme({
      palette,
      typography,
      customStyles
    })

  },[fontSize, textSpacing, lineHeight, fontMode])

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

