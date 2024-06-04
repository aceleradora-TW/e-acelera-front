'use client'
import React from "react"
import Typography from "@mui/material/Typography"
import Roboto  from "@mui/material/Typography"

interface TitleProps {
    children: string
} 
export const ResponsiveTitle:React.FC<TitleProps> = ({children}) => {
    return (
        <div>
            <p>{children}</p>
            <Typography
                color='black'
                variant="h3"
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
                >Bem vindo ao Nivelamento</Typography>
        </div>
    )
}
