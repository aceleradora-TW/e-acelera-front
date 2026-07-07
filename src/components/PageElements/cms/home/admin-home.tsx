"use client";

import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import { useRouter } from "next/navigation";
import {
  buttonStyles,
  cardStyles,
  cardsContainerStyles,
  containerStyles,
  headerStyles,
  iconBoxStyles,
  subtitleStyles,
} from "./admin-home-style";

const adminItems = [
  {
    title: "Temas",
    description: "Gerencie os temas de estudo da plataforma.",
    buttonText: "Ver temas",
    href: "/cms/themes",
    icon: <FolderOutlinedIcon />,
  },
  {
    title: "Tópicos",
    description: "Gerencie os tópicos relacionados aos temas.",
    buttonText: "Ver tópicos",
    href: "/cms/topics",
    icon: <ArticleOutlinedIcon />,
  },
  {
    title: "Exercícios",
    description: "Gerencie os exercícios disponíveis para os estudantes.",
    buttonText: "Ver exercícios",
    href: "/cms/exercises",
    icon: <QuizOutlinedIcon />,
  },
];

export function AdminHome() {
  const router = useRouter();

  return (
    <Box sx={containerStyles}>
      <Box sx={headerStyles}>
        <Typography variant="h4" fontWeight={700}>
          Área Administrativa
        </Typography>

        <Typography sx={subtitleStyles}>
          Gerencie os conteúdos da plataforma.
        </Typography>
      </Box>

      <Box sx={cardsContainerStyles}>
        {adminItems.map((item) => (
          <Card key={item.title} sx={cardStyles}>
            <CardContent>
              <Box sx={iconBoxStyles}>{item.icon}</Box>

              <Typography variant="h6" fontWeight={700} mb={1}>
                {item.title}
              </Typography>

              <Typography color="text.secondary" mb={3}>
                {item.description}
              </Typography>

              <Button
                fullWidth
                variant="outlined"
                sx={buttonStyles}
                onClick={() => router.push(item.href)}
              >
                {item.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}