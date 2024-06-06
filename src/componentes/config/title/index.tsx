'use client'
import React from "react"
import Typography from "@mui/material/Typography"
import { ThemeConfig } from "../theme"
interface TitleProps {
    children: string
} 
export const Title:React.FC<TitleProps> = ({children}) => {
    return (
        <div>
            <ThemeConfig>
                <Typography
                    variant="h1"
                    component="div"
                    sx={{
                    fontFamily: 'Roboto',
                    fontSize: 48,
                    fontWeight: 400,
                    fontHeight: 56.2,
                    textAlign: "left",
                    color: 'black',
                    marginTop: 13,
                    marginLeft: 25,
                    }}
                    >{children}</Typography>
            </ThemeConfig>
        </div>
    )
}
