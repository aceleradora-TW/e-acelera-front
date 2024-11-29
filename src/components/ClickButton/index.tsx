import * as React from "react"
import { styled } from "@mui/material/styles"
import Button, { ButtonProps } from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { theme } from "@/app/config/theme"
import { ReactNode } from "react"


const ColorButton = styled(Button)<ButtonProps>(() => ({    
    "&:hover": {
        backgroundColor: theme.palette.buttonHover?.main,
        color: theme.palette.buttonHover?.contrastText,
        border: "none"
    }
}))

type CardProps = {
    title?: string,
    click: () => void,
    endIcon?: ReactNode,
    backIcon?: ReactNode
}

export const ClickButton = ({ title, click, endIcon, backIcon }: CardProps) =>
    <aside>        
        <Stack spacing={2} direction="row" onClick={click}>
            <ColorButton sx={theme.customStyles.button} variant="contained">{backIcon}{title}{endIcon}</ColorButton>
        </Stack>
    </aside>
