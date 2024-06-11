'use client'
import React from "react"
import Typography from "@mui/material/Typography"
import { ThemeConfig } from "../config/theme"
interface TitleProps {
    children: string
    variant: "h1"|"h2"
    fontSize: "3rem"|30
} 
export const Title:React.FC<TitleProps> = ({children, variant, fontSize}) => {
    return (
        <div>
            <ThemeConfig>
                <Typography
                    variant={variant}
                    component="div"
                    sx={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: {fontSize},
                    fontWeight: 500,
                    fontHeight: 1.16,
                    textAlign: "left",
                    color: "RGB(3, 29, 60)",
                    marginTop: "78px",
                    marginLeft: "178px",
                    }}
                    >{children}</Typography>
            </ThemeConfig>
        </div>
    )
}
