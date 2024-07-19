import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, ThemeProvider } from '@mui/material';
import StatusSelect from '../StatusSelect';
import { useRouter } from 'next/navigation';
import { theme } from '../../app/config/theme';

interface ButtonCardProps {
    title: string;
    description: string;
    route: string;
}

const cardStyles = {
    ...theme.customStyles.cardBody,
    WebkitLineClamp: 4
}

const cardActionsStyle = {
    paddingBottom: 2, 
    paddingLeft: 2
}

export const ButtonCard: React.FC<ButtonCardProps> = ({ title, description, route }) => {
    const router = useRouter()
    const handleClick = (route: string) => {
        router.push(`/${route}`)
    }
    return (
        <ThemeProvider theme={theme}>
            <Card sx={theme.customStyles.cardButtonContainer}>
                <CardActionArea onClick={() => handleClick(route)}>
                    <CardContent sx={theme.customStyles.cardButtonContent}>
                        <Typography gutterBottom variant="h2" component="div" sx={theme.customStyles.cardTitle}>
                            {title}
                        </Typography>
                        <Typography variant="body1" sx={cardStyles}>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{cardActionsStyle}}>
                    <StatusSelect />
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}
