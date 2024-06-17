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

        <Card sx={{ maxWidth: 368, borderWidth: 2,
            "&:hover": {
                transform: "scale(1.1)"
                           
            }
        }}>
            <CardActionArea onClick={() => handlerClicker(route)}>
                <CardContent sx={{ paddingBottom: 5, paddingTop: 3}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2">
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
