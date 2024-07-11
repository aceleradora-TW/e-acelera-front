'use client'
import React from "react"
import Typography from "@mui/material/Typography"
import { theme, ThemeConfig } from "../config/theme"
import { Box, Grid } from "@mui/material"

interface TitleProps {
    text: string
}

export const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <ThemeConfig>
            <Grid container>  
                <Typography
                    variant="h1"
                    component="div"
                    sx={theme.customStyles.title}>
                    {text}
                </Typography>
            </Grid>
        </ThemeConfig>

    )
}
