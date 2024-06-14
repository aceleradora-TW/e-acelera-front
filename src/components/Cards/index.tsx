import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ClickButton } from '../ClickButton';
import StatusSelect from '../StatusSelect';

interface CardsProps{
    title: string;
    description: string;
    image?: string;
}

export default function Cards(props: CardsProps) {
    function clickTest(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <Card sx={{ maxWidth: 368, borderWidth: 2}}>
            <CardActionArea>
            {props.image && (
                <CardMedia
                    component="img"
                    image={props.image}
                    alt="green iguana"
                    sx={{ height: 152, marginBottom: 5.5}}
                />
            )}
                <CardContent sx={{ paddingBottom: 10.63 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ paddingBottom: 4}}>
                <ClickButton title="Entrar" click={clickTest} />
            </CardActions>
        </Card>
    );
}
