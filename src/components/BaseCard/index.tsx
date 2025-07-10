import { CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import * as React from "react";
import { theme } from "@/app/config/themes";
import { ClickButton } from "../ClickButton";
import ProgressBar from "../PageElements/Progress/ProgressBar";

interface CardProps {
  title: string;
  description?: string;
  textImage?: string;

  image?: string;
  route: string;
  children?: React.ReactNode;
  cardType?: "theme" | "topic"
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
  children,
  cardType = "theme",

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
        {children && (
          <div style={{ width: "100%", marginBottom: 8 }}>{children}</div>
        )}
        <ClickButton title="Entrar" click={() => handleClick(route)} />
      </CardActions>
    </Card>
  );
};
