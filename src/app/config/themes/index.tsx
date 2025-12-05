'use client'
import { CssBaseline, PaletteColor, PaletteColorOptions, ThemeProvider, createTheme } from "@mui/material"
import React from "react"
import { palette } from "./palette"
import { customStyles } from "./components"
import { typography } from "./typography"
import { useAccessibility } from "@/context/accessibility.context"
import { highContrastThemeBuilder } from "./highContrast"

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
    borderColor?: {
      start: string;
      end: string;
    };
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
    borderColor?: {
      start: string
      end: string
    }
  }
}

const applyFontFamily = (fontFamily?: string) => {
  if (!fontFamily) return {};
  return { fontFamily: `${fontFamily} !important` };
};

const themeBuilder = (fontFamily?: string) => createTheme({
  palette,
  typography: {
    ...typography,
    ...(fontFamily && { fontFamily }),
  },
  customStyles,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          ...applyFontFamily(fontFamily),
        },
        body: applyFontFamily(fontFamily),
      },
    },
  },
})

const defaultTheme = themeBuilder()

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  const { contrastEnabled, themeFontFamily } = useAccessibility();

  const normalTheme = themeBuilder(themeFontFamily);
  const selectedTheme = contrastEnabled
    ? highContrastThemeBuilder(themeFontFamily)
    : normalTheme;

  return (
    <ThemeProvider
      theme={selectedTheme}
      key={contrastEnabled ? 'dark' : 'normal'}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export { defaultTheme as theme }
