import * as React from "react"
import { styled } from "@mui/material/styles"
import Button, { ButtonProps } from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import { theme } from "@/app/config/theme"
import Image from "next/image"
import { Box, Typography } from "@mui/material"


const ColorButton = styled(Button)<ButtonProps>(() => ({
    "&:hover": {
        backgroundColor: theme.palette.buttonHover?.main,
        color: theme.palette.buttonHover?.contrastText,
        border: "none"
    }
}))

type CardProps = {
    website: string,
    click: () => void,
    icon: string
}

export const LoginButton = ({ website, click, icon }: CardProps) =>
    <aside>
        <Stack spacing={2} direction="row" onClick={click}>
            <ColorButton sx={{
                fontSize: "16px",
                lineHeight: 1.6,
                fontWeight: 500,
                letterSpacing: 0.4,
                width: "100%",
                borderRadius: 2,
                textTransform: "none", color: "rgb(0,44,83,100)", border: "none", backgroundColor: "rgb(217,217,217,100)"
            }} > 
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                    <Image src={icon} alt={`Icone da plataforma ${website}`} width={38} height={38}/>
                    <Typography variant="body1" sx={{minWidth: "165px", textAlign: "left", marginLeft: "16px"}}>Entrar com {website}</Typography>
                </Box>

                </ColorButton>
        </Stack>
    </aside>