"use client";

import { useCallback, useEffect, useState } from "react";
import Form from "@/components/UI/dashboard/form";
import {
  TopicFormSchema,
  topicFormDefs,
} from "@/components/UI/dashboard/forms/defs/topic.defs";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import {
  actionsContainerStyles,
  cancelButtonStyles,
  returnToList,
  textFieldStyles,
  textFieldsContainerStyles,
} from "@/components/UI/dashboard/forms/form.styles";
import { CmsTopic, CmsTopicVideo } from "@/types/type";
import { FormActions } from "@/components/UI/dashboard/forms/form-actions";
import { fi } from "zod/v4/locales";

interface Props {
  id: string;
  onArchive?: (id: string) => void;
  isEditing?: boolean;
}

const getYouTubeEmbedUrl = (url: string) => {
  const videoId = url.split("v=")[1]?.split("&")[0];

  if (!videoId) {
    return null;
  }

  return `https://www.youtube.com/embed/${videoId}`;
};

export default function DetailTopic({ id, onArchive, isEditing }: Props) {
  const [topic, setTopic] = useState<CmsTopic | undefined>(undefined);
  const [formData, setFormData] = useState<CmsTopic | undefined>();
  const muiTheme = useTheme();
  const router = useRouter();

  const fetchTopic = useCallback(async () => {
    try {
      const url = `/api/topics/getTopicById`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);

      const data = await response.json();
      setTopic(data.data);
      setFormData(data.data);
    } catch (error) {
      console.error("Erro ao buscar tópico:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchTopic();
  }, [fetchTopic]);

  const handleSave = async () => {
    if (!formData) return;

    try {
      const payload = {
        title: formData.title,
        shortDescription: formData.shortDescription,
        description: formData.description,
        isActive: formData.isActive,
        videoTitle: formData.video?.title,
        videoDescription: formData.video?.description,
        videoReferences: formData.video?.references,
        videoLink: formData.video?.link,
      };

      const url = `/api/topics/updateTopic`;
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          id,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Erro ao atualizar tópico: ${response.status}`);
      }

      const data = await response.json();

      router.push("/cms/topics");
    } catch (error) {
      console.error("Erro ao salvar as alterações do tópico:", error);
      alert("Não foi possível salvar as alterações. Verifique o console.");
    }
  };

  const handleCancel = () => {
    router.push(`/cms/topics/${id}`);
  };

  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <UpperBanner
          title={topic?.title || "Tópicos"}
          showBreadCrumb
          breadCrumbLabel={topic?.title}
          editButton={!isEditing}
        />
      </Box>

      <Box sx={textFieldsContainerStyles}>

        <TextField
          label="Título"
          value={formData?.title || ""}
          onChange={(e) =>
            setFormData((prev) => (prev ? { ...prev, title: e.target.value } : prev))
          }
          InputProps={{ readOnly: !isEditing }}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição"
          value={formData?.description || ""}
          onChange={(e) =>
            setFormData((prev) => (prev ? { ...prev, description: e.target.value } : prev))
          }
          InputProps={{ readOnly: !isEditing }}
          multiline
          rows={4}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição curta"
          value={formData?.shortDescription || ""}
          onChange={(e) =>
            setFormData((prev) => (prev ? { ...prev, description: e.target.value } : prev))
          }
          InputProps={{ readOnly: !isEditing }}
          multiline
          rows={4}
          sx={textFieldStyles}
        />

        {/* <TextField
          label="Ativo/Inativo"
          value={topicStatus}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        /> */}

        

        
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Vídeo
        </Typography>

        {topic?.video ? (
          <Box sx={{ display: "grid", gap: 2 }}>
            <TextField
              label="Título do vídeo"
              value={topic.video.title || ""}
              fullWidth
              InputProps={{ readOnly: !isEditing }}
              onChange={(event) =>
                handleVideoChange("title", event.target.value)
              }
              sx={textFieldStyles}
            />

            <TextField
              label="Explicação do vídeo"
              value={topic.video.description || ""}
              fullWidth
              multiline
              minRows={4}
              InputProps={{ readOnly: !isEditing }}
              onChange={(event) =>
                handleVideoChange("description", event.target.value)
              }
              sx={textFieldStyles}
            />

            <TextField
              label="Referências do vídeo"
              value={topic.video.references || ""}
              fullWidth
              InputProps={{ readOnly: !isEditing }}
              onChange={(event) =>
                handleVideoChange("references", event.target.value)
              }
              sx={textFieldStyles}
            />

            <TextField
              label="Link do vídeo"
              value={topic.video.link || ""}
              fullWidth
              InputProps={{ readOnly: !isEditing }}
              onChange={(event) =>
                handleVideoChange("link", event.target.value)
              }
              sx={textFieldStyles}
            />

            {isEditing && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                  mt: 4,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    ...cancelButtonStyles(muiTheme),
                    borderColor: "red",
                    color: "red",
                    backgroundColor: "#fff",
                    px: 4,
                  }}
                  onClick={handleCancelEdit}
                >
                  CANCELAR
                </Button>

                <Button
                  variant="contained"
                  onClick={handleSave}
                  disabled={!topic}
                  sx={{
                    backgroundColor: "#004A7C",
                    px: 4,
                    "&:hover": {
                      backgroundColor: "#003B63",
                    },
                  }}
                >
                  SALVAR
                </Button>
              </Box>
            )}

            {/* {videoEmbedUrl ? (
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
            )} */}
          </Box>
        ) : (
          <Typography variant="body1">
            Nenhum vídeo cadastrado para este tópico.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
