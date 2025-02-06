import { Box, Typography } from "@mui/material";
import { Sansita } from "next/font/google";

const sansita = Sansita({
    subsets: ["latin"],
    weight: ["700"],
});

interface ExclamationComponentProps {
    color: string
}

export const ExclamationComponent: React.FC<ExclamationComponentProps> = ({ color }) => {
    return (
        <Box sx={{ height: "80px", width: "80px", border: `2px solid ${color}`, borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography className={sansita.className} sx={{ color: `${color}`, fontSize: "64px", paddingBottom: "10px" }}>!</Typography>
        </Box>

    )
}