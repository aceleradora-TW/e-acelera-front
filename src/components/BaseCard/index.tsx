import { CardActionArea, CardActions, CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import * as React from "react";
import { theme } from "@/app/config/themes";
import { ClickButton } from "../ClickButton";
import CircularProgressBar from "../PageElements/Progress/CircularProgressBar";


interface CardProps {
  title: string;
  description?: string;
  textImage?: string;

  image?: string;
  route: string;
  children?: React.ReactNode;
  cardType?: "theme" | "topic"
  progress?: number;

}

const cardStyles = {
  ...theme.customStyles.cardBody,
  WebkitLineClamp: 6,
};

const cardActionsStyle = {
  paddingBottom: 2,
  paddingLeft: 2,
  height: "auto",
  justifyContent: "left",
};

export const BaseCard: React.FC<CardProps> = ({
  title,
  description,
  textImage,
  image,
  route,
  cardType,
  progress = 0,
}) => {
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(`/${route}`);
  };

  return (
    <Card sx={theme.customStyles.cardContainer}>
      <CardActionArea onClick={() => handleClick(route)}>
        {image && (
          <CardMedia
            component="img"
            image={image}
            alt={textImage}
            sx={theme.customStyles.cardMediaImage}
          />
        )}
        <CardContent sx={theme.customStyles.cardContent}>
          <Typography
            gutterBottom
            variant="h3"
            sx={theme.customStyles.cardTitle}
          >
            {title}
          </Typography>
          <Typography variant="body1" sx={cardStyles}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={cardActionsStyle}>
        <ClickButton title="Entrar" click={() => handleClick(route)} />
        {
          cardType === "topic" &&
            <div style={{ marginTop: 12, marginLeft:"auto", padding: 8 }}>
              <CircularProgressBar percentage={100} />
            </div>
        }
      </CardActions>
    </Card>
  );
};
