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

export const BaseCard: React.FC<CardProps> = ({title, description, textImage, image, route}) => {
    const router = useRouter()
    const handlerClicker = (route: string) => {
        router.push(`/${route}`)
    }

    return (
        <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 368, borderWidth: 2, maxHeight: 502, bgcolor: theme.palette.bgColor?.light}}>
            <CardActionArea>
            {image && (
                <CardMedia
                    component="img"
                    image={image}
                    alt={textImage}
                    sx={{ height: 152, marginBottom: 5.5}}
                />
            )}

                {/* titulo e descrição */}
                <CardContent sx={{ paddingBottom: 10.63, maxHeight: 250}}> 
                    <Typography gutterBottom variant="h2" component="div"   sx={{
                        color: theme.palette.textColor?.main,
                        wordWrap: 'break-word',
                        
                    }}>
                        {title}
                    </Typography>
                    <Typography variant="body1"  sx={{
                        color: theme.palette.textColor?.light,
                        wordWrap: 'break-word',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 6, 
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                        
                        
                    }}>
                        {description}
                    </Typography>
                </CardContent>

                    {/* Botão */}
            </CardActionArea>
            <CardActions sx={{ paddingBottom: 4, height: 20, paddingLeft: 2}}>
                <ClickButton title="Entrar" click={() => handlerClicker(route)}  />
            </CardActions>
        </Card>
        </ThemeProvider>
    );
}
