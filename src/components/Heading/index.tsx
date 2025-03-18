"use client"
import React from "react"
import Typography from "@mui/material/Typography"
import { theme, ThemeConfig } from "@/app/config/themes"
import { Grid } from "@mui/material"

interface HeadingProps {
    text: string
      variant: "h1" | "h2" 
}

export const Heading: React.FC<HeadingProps> = ({ text, variant }) => {
    return (
        <ThemeConfig>
            <Grid container>  
                <Typography
                    variant={variant}
                    sx={theme.customStyles.title}>
                    {text}
                </Typography>
            </Grid>
        </ThemeConfig>

    )
}
