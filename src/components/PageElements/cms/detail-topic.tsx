
'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Link, TextField, Typography, useTheme } from "@mui/material";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import {
  cancelButtonStyles,
  textFieldStyles,
  textFieldsContainerStyles,
} from "@/components/UI/dashboard/forms/form.styles";
import { BadRequest } from "@/components/BadRequest";
import { Loading } from "@/components/Loading";
import { NoData } from "@/components/NoData";
import { CmsTopic } from "@/types/type";

interface Props {
  id: string;
}

const getYouTubeEmbedUrl = (url: string) => {
  const videoId = url.split("v=")[1]?.split("&")[0];

  if (!videoId) {
    return null;
  }

  return `https://www.youtube.com/embed/${videoId}`;
};

export default function DetailTopic({ id }: Props) {
  const [topic, setTopic] = useState<CmsTopic | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorStatus, setErrorStatus] = useState<number | null>(null);
  const muiTheme = useTheme();
  const router = useRouter();

  const fetchTopic = useCallback(async () => {
    setLoading(true);
    setErrorStatus(null);

    try {
      const response = await fetch("/api/topics/getTopicById", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });

      if (!response.ok) {
        setErrorStatus(response.status);
        setTopic(null);
        return;
      }

      const data = await response.json();
      setTopic(data.data as CmsTopic);
    } catch (error) {
      console.error("Erro ao buscar tópico:", error);
      setErrorStatus(500);
      setTopic(null);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchTopic();
  }, [fetchTopic]);

  const topicStatus = useMemo(
    () => (topic?.isActive ? "Ativo" : "Inativo"),
    [topic?.isActive]
  );

  if (loading) return <Loading />;
  if (errorStatus === 404) return <NoData />;
  if (errorStatus) return <BadRequest />;
  if (!topic) return <NoData />;

  const videoEmbedUrl = topic.video?.link ? getYouTubeEmbedUrl(topic.video.link) : null;

  return (
    <Box>
      <UpperBanner
        title={topic.title || "Tópicos"}
        showBreadCrumb
        breadCrumbLabel={topic.title}
      />

      <Box sx={textFieldsContainerStyles}>
        <TextField
          label="ID"
          value={topic.id}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        />

        <TextField
          label="Tema"
          value={topic.theme?.title || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        />

        <TextField
          label="Título"
          value={topic.title || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        />

        <TextField
          label="Ativo/Inativo"
          value={topicStatus}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição curta"
          value={topic.shortDescription || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição longa"
          value={topic.description || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          multiline
          minRows={4}
          sx={textFieldStyles}
        />
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Vídeo
        </Typography>

        {topic.video ? (
          <Box sx={{ display: "grid", gap: 2 }}>
            <TextField
              label="Título do vídeo"
              value={topic.video.title || ""}
              fullWidth
              InputProps={{ readOnly: true }}
              sx={textFieldStyles}
            />

            <TextField
              label="Explicação do vídeo"
              value={topic.video.description || ""}
              fullWidth
              multiline
              minRows={4}
              InputProps={{ readOnly: true }}
              sx={textFieldStyles}
            />

            <TextField
              label="Referências do vídeo"
              value={topic.video.references || ""}
              fullWidth
              InputProps={{ readOnly: true }}
              sx={textFieldStyles}
            />

            <TextField
              label="Link do vídeo"
              value={topic.video.link || ""}
              fullWidth
              InputProps={{ readOnly: true }}
              sx={textFieldStyles}
            />

            {videoEmbedUrl ? (
              <Box sx={{ width: "100%", overflow: "hidden", borderRadius: 2 }}>
                <iframe
                  width="100%"
                  height="332"
                  src={videoEmbedUrl}
                  title={topic.video.title || "Vídeo do tópico"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </Box>
            ) : (
              <Link href={topic.video.link} target="_blank" rel="noopener noreferrer">
                Abrir vídeo em nova aba
              </Link>
            )}
          </Box>
        ) : (
          <Typography variant="body1">Nenhum vídeo cadastrado para este tópico.</Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
        <Button
          variant="contained"
          sx={cancelButtonStyles(muiTheme)}
          onClick={() => router.push("/cms/topics")}
        >
          VOLTAR PARA LISTA
        </Button>
      </Box>
    </Box>
  );
}
