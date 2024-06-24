import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import StatusSelect from '../StatusSelect';
import { useRouter } from 'next/navigation';

interface ButtonCardProps {
    title: string;
    description: string;
    route: string;    
}


export const ButtonCard: React.FC<ButtonCardProps> = ({title, description, route}) => {
    const router = useRouter()
    const handlerClicker = (route: string) => {
        router.push(`/${route}`)
    }
    return (

        <Card sx={{ maxWidth: 316, borderWidth: 2, maxHeight: 256,
            "&:hover": {
                transform: "scale(1.1)"
                           
            }
        }}>
            <CardActionArea onClick={() => handlerClicker(route)}>
                <CardContent sx={{ paddingBottom: 1, paddingTop: 3}}>
                <Typography gutterBottom variant="h2" component="div"  sx={{
                        fontSize: "25.6px", 
                        lineHeight: 1.6,
                        fontWeight: 500,
                        letterSpacing: 0.15,
                        wordWrap: 'break-word',
                        
                    }}>
                        {title}
                    </Typography>
                    <Typography variant="body1"  sx={{
                        wordWrap: 'break-word',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflowY: 'auto'
                    }}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ paddingBottom: 2}}>
                <StatusSelect/>
            </CardActions>
        </Card>
    );
}
