import {
  Box,
  CardActionArea,
  CardActions,
  CircularProgress,
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
import useFetchThemes from "@/hooks/useFetchThemes"; 
import useFetchBulkProgress from "@/hooks/useFetchBulkProgress"; 
import { IdType } from "@/types/type";

interface CardProps {
  id: string;
  title: string;
  description?: string;
  textImage?: string;
  image?: string;
  route: string;
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
  const handleClick = (route: string) => {
    router.push(`/${route}`);
  };

  const { themes, themeIds, isLoading: isLoadingThemes, error: errorThemes } = useFetchThemes(); // Use useFetchThemes
  const { progress, isLoading: isLoadingProgress, error: errorProgress } = useFetchBulkProgress(themeIds, IdType.THEME_ID); // Use useFetchBulkProgress

  // Find the current theme
  const currentTheme = themes.find((theme) => theme.id === id);
  const themeProgress = progress[id] || 0; // Get progress for the current theme

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
        <div style={{ marginTop: 12, marginLeft: "auto", padding: 8 }}>
          {isLoadingThemes || isLoadingProgress ? (
            <CircularProgress size={24} /> // Show loading indicator
          ) : errorThemes || errorProgress ? (
            <Typography color="error">{errorThemes || errorProgress}</Typography> // Show error message
          ) : (
            <CircularProgressBar percentage={themeProgress} /> // Show progress
          )}
        </div>
      </CardActions>
    </Card>
  );
};
