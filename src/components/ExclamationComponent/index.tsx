import { Box, Typography, useTheme } from "@mui/material"
import { Sansita } from "next/font/google"

const sansita = Sansita({
    subsets: ["latin"],
    weight: ["700"],
})

interface ExclamationComponentProps {
    color: string
}
export const ExclamationComponent: React.FC<ExclamationComponentProps> = ({ color }) => {
    const theme = useTheme();
    return (
        <Box sx={{ border: `2px solid ${color}`, ...theme.customStyles.styleExclamation }}>
            <Typography className={sansita.className} sx={{ color: `${color}`, fontSize: "64px", paddingBottom: "10px" }}>!</Typography>
        </Box>
    )
}