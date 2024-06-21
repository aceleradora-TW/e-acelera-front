import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { ClickButton } from '../ClickButton';
import { useRouter } from 'next/navigation';

interface CardProps{
    title: string;
    description: string;
    image?: string;
    route: string;
}

export const BaseCard: React.FC<CardProps> = ({title, description, image, route}) => {
    const router = useRouter()
    const handlerClicker = (route: string) => {
        router.push(`/${route}`)
    }

    return (
        <Card sx={{ maxWidth: 368, borderWidth: 2, maxHeight: 502}}>
            <CardActionArea>
            {image && (
                <CardMedia
                    component="img"
                    image={image}
                    alt="green iguana"
                    sx={{ height: 152, marginBottom: 5.5}}
                />
            )}
                <CardContent sx={{ paddingBottom: 10.63 }}>
                    <Typography gutterBottom variant="h3" component="div" sx={{
                        maxHeight: 5,
                        wordWrap: 'break-word'
                    }}>
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ paddingBottom: 4}}>
                <ClickButton title="Entrar" click={() => handlerClicker(route)} />
            </CardActions>
        </Card>
    );
}
