import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, ThemeProvider } from '@mui/material';
import { ClickButton } from '../ClickButton';
import { useRouter } from 'next/navigation';
import { blue, red } from '@mui/material/colors';
import { theme } from '../config/theme';

interface CardProps{
    title: string;
    description: string;
    textImage?: string; 
    image?: string;
    route: string;
}

const cardStyles = {
    ...theme.customStyles.cardBody,
    WebkitLineClamp: 6,
    }

const cardActionsStyle = {
    paddingBottom: 4, 
    height: 20, 
    paddingLeft: 2
}

export const BaseCard: React.FC<CardProps> = ({title, description, textImage, image, route}) => {
    const router = useRouter()
    const handleClicker = (route: string) => {
        router.push(`/${route}`)
    }

    return (
        <ThemeProvider theme={theme}>
        <Card sx={theme.customStyles.cardContainer}>
            <CardActionArea>
            {image && (
                <CardMedia
                    component="img"
                    image={image}
                    alt={textImage}
                    sx={theme.customStyles.cardMedia}
                />
            )}
                <CardContent sx={theme.customStyles.cardContent}> 
                    <Typography gutterBottom variant="h2" component="div"   sx={theme.customStyles.cardTitle}>
                        {title}
                    </Typography>
                    <Typography  variant="body1" sx={cardStyles}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={cardActionsStyle}>
                <ClickButton title="Entrar" click={() => handleClicker(route)}  />
            </CardActions>
        </Card>
        </ThemeProvider>
    );
}
