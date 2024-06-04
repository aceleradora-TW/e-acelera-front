import * as React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";


const ColorButton = styled(Button)<ButtonProps>(() => ({
    backgroundColor: "#F18E31",
    color: "#000000",
    "&:hover": {
        backgroundColor: "#F18E31",
    },
}));

export default function NextButtom() {
    return (
        <Stack spacing={2} direction="row">
            <ColorButton variant="contained">Próximo exercício</ColorButton>
        </Stack>
    );
}
