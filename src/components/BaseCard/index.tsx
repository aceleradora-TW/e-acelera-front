"use client";
import { CardActionArea, CardActions, ThemeProvider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import * as React from "react";
import { theme } from "../../app/config/theme";
import { ClickButton } from "../ClickButton";
import ReactMarkdown from "react-markdown";

interface CardProps {
  title: string;
  description?: string;
  textImage?: string;
  image?: string;
  route: string;
}

const cardStyles = {
  ...theme.customStyles.cardBody,
  WebkitLineClamp: 6,
};

const cardActionsStyle = {
  paddingBottom: 4,
  paddingLeft: 2,
  height: 20,
};

export const BaseCard: React.FC<CardProps> = ({
  title,
  description,
  textImage,
  image,
  route,
}) => {
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(`/${route}`);
  };

  interface MarkdownTextProps {
    markdownContent: string;
  }
  const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={theme.customStyles.cardTitle}
        {...props}
      />
    ),
    p: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <Typography variant="body1" sx={cardStyles} {...props} />
    ),
  };

  return (
    <Card sx={theme.customStyles.cardContainer}>
      <CardActionArea>
        {image && (
          <CardMedia
            component="img"
            image={image}
            alt={textImage}
            sx={theme.customStyles.cardMedia}
          />
        )}
        <CardContent sx={theme.customStyles.cardContent}>
          <ReactMarkdown components={components}>{title}</ReactMarkdown>

          <ReactMarkdown components={components}>{description}</ReactMarkdown>

        </CardContent>
      </CardActionArea>
      <CardActions sx={cardActionsStyle}>
        <ClickButton title="Entrar" click={() => handleClick(route)} />
      </CardActions>
    </Card>
  );
};
