'use client'
import React from "react"
import Typography from "@mui/material/Typography"
import { theme } from "../config/theme"
import { ThemeProvider } from "styled-components"
import { Box } from "@mui/material"

interface TitleProps {
    text: string
}

export const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Typography
                    variant="h1"
                    component="div"
                    sx={theme.customStyles.title}
                >{text}</Typography>
            </Box>
        </ThemeProvider>
    )
}
