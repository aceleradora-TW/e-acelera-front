import { Box, Link, Typography } from "@mui/material"
import svgBadRequest from "../../../public/assets/503-bad-request.svg"
import Image from "next/image"

export const BadRequest = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "calc(100vh - 80px)", boxSizing: "border-box" }}>
            <Image src={svgBadRequest} alt="Imagem de gatinho sobre erro de requisição"/>
            <Typography variant="caption">Opss, estamos enfrentando dificuldades em baixar o conteúdo, tente novamente mais tarde!</Typography>
            <Link target="_blank" rel="noferrer" href="https://storyset.com/internet">Internet illustrations by Storyset</Link>
        </Box>
    )
}