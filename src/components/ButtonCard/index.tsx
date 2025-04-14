import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Box, CardActionArea} from "@mui/material"
import { useRouter } from "next/navigation"
import { theme } from "@/app/config/themes"
import StatusSelect from "../StatusSelect"

interface ButtonCardProps {
    title: string
    description: string
    route: string
    id: string;
}

const cardStyles = {
    ...theme.customStyles.cardBody,
    WebkitLineClamp: 4
}

export const ButtonCard: React.FC<ButtonCardProps> = ({ title, description, route, id }) => {
    const router = useRouter()
    const handleClick = (route: string) => {
        router.push(`/${route}`)
    }
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',  ...theme.customStyles.cardButtonContainer }}>
        <CardActionArea onClick={() => handleClick(route)} sx={{ flexGrow: 1 }}> 
            <CardContent sx={theme.customStyles.cardButtonContent}>
                <Typography gutterBottom variant="h3" component="div" sx={theme.customStyles.cardTitle}>
                    {title}
                </Typography>
                <Typography variant="body1" sx={cardStyles}>
                    {description}
                </Typography>
            </CardContent>
        </CardActionArea>
    
        <Box sx={{ padding: 2 }}>
            <StatusSelect id={id} width='70%'/>
        </Box>
    </Card>
    );
}
