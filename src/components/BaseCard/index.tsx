import { Box, CardActionArea, CardActions, CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import * as React from "react";
import { theme } from "@/app/config/themes";
import { ClickButton } from "../ClickButton";
import ProgressBar from "@/components/PageElements/Progress/ProgressBar";
import { IdType } from "@/types/type";
import { useFetchProgress } from "@/components/fetchProgress";

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
  children,
  cardType = "theme",
}) => {
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(`/${route}`);
  };
  const { progress } = useFetchProgress(id, IdType.THEME_ID);

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
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={progress?.progress ?? 0} />
            <Box
              sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
              <Typography
                variant="caption"
                component="div"
                sx={{fontSize: "1rem", color: 'text.secondary' }}
              >{`${Math.round(progress?.progress ?? 0)}%`}</Typography>
            </Box>
          </Box>
        )}
      </CardActions>
    </Card>
  );
};
