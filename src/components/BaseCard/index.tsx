import {
  CardActionArea,
  CardActions,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import * as React from "react";
import { theme } from "@/app/config/themes";
import { ClickButton } from "../ClickButton";
import CircularProgressBar from "@/components/PageElements/Progress/CircularProgressBar";
import { IdType } from "@/types/type";
import { useFetchProgress } from "@/components/fetchProgress";

interface CardProps {
  id: string;
  title: string;
  description?: string;
  textImage?: string;
  image?: string;
  route?: string;
  children?: React.ReactNode;
  cardType?: "theme" | "topic";
}

const cardStyles = {
  ...theme.customStyles.cardBody,
  WebkitLineClamp: 6,
};

const cardActionsStyle = {
  paddingBottom: 2,
  paddingLeft: 2,
  height: "auto",
  justifyContent: "space-between",
};

export const BaseCard: React.FC<CardProps> = ({
  id,
  title,
  description,
  textImage,
  image,
  route,
  cardType,
  children,
}) => {
  const router = useRouter();
  const handleClick = (route?: string) => {
    if(!route) {
      return;
    }
    router.push(`/${route}`);
  };

  const { progress: fetchedProgress } = useFetchProgress(
    id,
    cardType === "topic" ? IdType.TOPIC_ID : IdType.THEME_ID
  );

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
        {cardType === "theme" && (
          <div style={{ marginTop: 12, marginLeft: "auto", padding: 8 }}>
            <CircularProgressBar percentage={fetchedProgress?.progress ?? 0} />
          </div>
        )}
        {cardType === "topic" && (
          <div style={{ marginTop: 12, marginLeft: "auto", padding: 8 }}>
            <CircularProgressBar percentage={fetchedProgress?.progress ?? 0} />
          </div>
        )}
      </CardActions>
    </Card>
  );
};