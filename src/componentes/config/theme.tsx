import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import React from "react"

// const theme = createTheme({
//     palette: {
//       primary: {
//         // light: será calculada com base em palette.primary.main,
//         main: '#ff4400',
//         // dark: será calculada com base em palette.primary.main,
//         // contrastText: será calculada para contrastar com palette.primary.main
//       },
//       secondary: {
//         light: '#0066ff',
//         main: '#0044ff',
//         // dark: será calculada com base palette.secondary.main,
//         contrastText: '#ffcc00',
//       },
//       // Usado por `getContrastText()` para maximizar o contraste entre
//       // o plano de fundo e o texto.
//       contrastThreshold: 3,
//       // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
//       // dois índices dentro de sua paleta tonal.
//       // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
//       tonalOffset: 0.2,
//     },
//   });

type ThemeProp = {
    children: JSX.Element
}

export enum themePalette {
    buttonText = "#031D3C",
    title = " #002C53",
    buttonBg = "#5FA0ED",
    descriptionCard = "#02C2C2C",
    descriptionText = "#000000",
    statusInProgress= "#FFDE6B",
    statusConcluded = "#9EFF85",
    statusPending = "#DFDFDF"
}

const theme = createTheme({
    palette: {
        // mode: "dark",
        primary: {
            main: themePalette.title,
            light: themePalette.buttonBg, 
            dark: themePalette.descriptionText ,
            contrastText: themePalette.descriptionCard
        },
        
        secondary: {
            main: themePalette.buttonText,
            light: themePalette.statusPending, 
            dark: themePalette.statusInProgress,
            contrastText: themePalette.statusConcluded
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

export { theme }; 