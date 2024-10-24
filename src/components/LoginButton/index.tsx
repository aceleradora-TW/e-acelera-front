import * as React from "react"
import { styled } from "@mui/material/styles"
import Button, { ButtonProps } from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { theme } from "@/app/config/theme"


const ColorButton = styled(Button)<ButtonProps>(() => ({    
    "&:hover": {
        backgroundColor: theme.palette.buttonHover?.main,
        color: theme.palette.buttonHover?.contrastText,
        border: "none"
    }
}))

type CardProps = {
    click: () => void
}

export const LoginButton = ({ click }: CardProps) =>
    <aside>        
        <Stack spacing={2} direction="row" onClick={click}>
            <ColorButton sx={{... theme.customStyles.button , padding: "5px 16px"}} variant="contained">LOGIN</ColorButton>
        </Stack>
    </aside>
