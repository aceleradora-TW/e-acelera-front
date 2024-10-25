"use client"
import React from "react"
import Typography from "@mui/material/Typography"
import { theme, ThemeConfig } from "../../app/config/theme"
import { Grid } from "@mui/material"

interface TitleProps {
    text: string
}

export const Title: React.FC<TitleProps> = ({ text }) => {
    return (
        <ThemeConfig>
            <Grid container>  
                <Typography
                    variant="h1"
                    sx={theme.customStyles.title}>
                    {text}
                </Typography>
            </Grid>
        </ThemeConfig>

    )
}
