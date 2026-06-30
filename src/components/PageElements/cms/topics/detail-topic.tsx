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
import PreviousMap_ from "postcss/lib/previous-map";
import { Description } from "@mui/icons-material";

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
        description: formData.description,
        shortDescription: formData.shortDescription,
        /* videoTitle: formData.video?.title, */
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
            setFormData((prev) => (prev ? { ...prev, shortDescription: e.target.value } : prev))
          }
          InputProps={{ readOnly: !isEditing }}
          multiline
          rows={4}
          sx={textFieldStyles}
        />

        <TextField
              label="Título do vídeo"
              value={formData?.video?.title || ""}
              onChange={(e) =>
                setFormData((prev) => {
                  prev ? {
                    ...prev,
                    video: {
                      ...(prev.video || {}),
                      title: e.target.value,
                    },
                  } : prev
                })
              }
              InputProps={{ readOnly: !isEditing }}
              rows={4}
              sx={textFieldStyles}
            />

            <TextField
              label="Descrição do vídeo"
              value={formData?.video?.description || ""}
              onChange={(e) =>
                setFormData((prev) => {
                  prev ? {
                    ...prev,
                    video: {
                      ...(prev.video || {}),
                      description: e.target.value,
                    },
                  } : prev
                })
              }
              InputProps={{ readOnly: !isEditing }}
              
              sx={textFieldStyles}
            />

            <TextField
              label="Referências do vídeo"
              value={formData?.video?.references || ""}
              onChange={(e) =>
                setFormData((prev) => {
                  prev ? {
                    ...prev,
                    video: {
                      ...(prev.video || {}),
                      references: e.target.value,
                    },
                  } : prev
                })
              }
              InputProps={{ readOnly: !isEditing }}
              rows={4}
              sx={textFieldStyles}
            />

            <TextField
              label="Link do vídeo"
              value={formData?.video?.link || ""}
              onChange={(e) =>
                setFormData((prev) => {
                  prev ? {
                    ...prev,
                    video: {
                      ...(prev.video || {}),
                      link: e.target.value,
                    },
                  } : prev
                })
              }
              InputProps={{ readOnly: !isEditing }}
              rows={4}
              sx={textFieldStyles}
            />
      </Box>

      <Box sx={actionsContainerStyles}>
        {isEditing ? (
          <>
            <Button
              variant="outlined"
              sx={{
                ...cancelButtonStyles(muiTheme),
                borderColor: "red",
                color: "red",
                "&:hover": { borderColor: "darkred" },
              }}
              onClick={handleCancel}
            >
              CANCELAR
            </Button>

            <Button
              variant="contained"
              sx={{ backgroundColor: "#004A7C", "&:hover": { backgroundColor: "#003B63" } }}
              onClick={handleSave}
            >
              SALVAR
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            sx={returnToList(muiTheme)}
            onClick={() => router.push("/cms/topics")}
          >
            VOLTAR PARA LISTA
          </Button>
        )}
      </Box>

      
    </Box>
  );
}
