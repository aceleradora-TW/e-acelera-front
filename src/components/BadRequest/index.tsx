import { Box, Link, Typography } from "@mui/material"
import svgBadRequest from "../../../public/assets/503-bad-request.svg"
import Image from "next/image"

export const BadRequest = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "calc(100vh - 80px)", boxSizing: "border-box" }}>
            <Image src={svgBadRequest} alt="Ilustração de um gato brincando com um novelo de lã, com os números 503 indicando erro de serviço indisponível."/>
            <Typography variant="caption">Estamos passando por dificuldades para carregar o conteúdo. Por favor, tente novamente em instantes.</Typography>
            <Link target="_blank" rel="noferrer" href="https://storyset.com/internet">Internet illustrations by Storyset</Link>
        </Box>
    )
}