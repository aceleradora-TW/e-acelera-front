"use client" 
import { CardActionArea, CardActions, ThemeProvider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { theme } from '../../app/config/theme';
import { ClickButton } from '../ClickButton';

interface CardProps{
    title: string;
    description?: string;
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
    paddingLeft: 2,
    height: 20
}

export const BaseCard: React.FC<CardProps> = ({title, description, textImage, image, route}) => {
    const router = useRouter()
    const handleClick = (route: string) => {
        router.push(`/${route}`)
    }

    return (
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
                <ClickButton title="Entrar" click={() => handleClick(route)}  />
            </CardActions>
        </Card>
    );
}
