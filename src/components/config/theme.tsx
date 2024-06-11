import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import React from "react"

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette {
    BG = "#f8efef",
    LIME = "#000000"
}

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    palette: {
        mode: "dark",
        background: {
            default: themePalette.BG,
        },
        primary: {
            main: themePalette.LIME,
        },
    },
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}