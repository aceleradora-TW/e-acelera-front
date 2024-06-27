import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, ThemeProvider } from '@mui/material';
import StatusSelect from '../StatusSelect';
import { useRouter } from 'next/navigation';
import { theme } from '../config/theme';

interface ButtonCardProps {
    title: string;
    description: string;
    route: string;
}


export const ButtonCard: React.FC<ButtonCardProps> = ({ title, description, route }) => {
    const router = useRouter()
    const handlerClicker = (route: string) => {
        router.push(`/${route}`)
    }
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{
                maxWidth: 316, borderWidth: 2, maxHeight: 256, bgcolor: theme.palette.bgColor?.light,
                "&:hover": {
                    transform: "scale(1.1)"

                }
            }}>
                <CardActionArea onClick={() => handlerClicker(route)}>
                    <CardContent sx={{ paddingBottom: 1, paddingTop: 3 }}>
                        <Typography gutterBottom variant="h2" component="div" sx={{
                            color: theme.palette.textColor?.main,
                            wordWrap: 'break-word',

                        }}>
                            {title}
                        </Typography>
                        <Typography variant="body1" sx={{
                            color: theme.palette.textColor?.light,
                            wordWrap: 'break-word',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 4, 
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'

                        }}>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ paddingBottom: 2, paddingLeft: 2 }}>
                    <StatusSelect />
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}
