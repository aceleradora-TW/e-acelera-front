"use client";

import { useCallback, useEffect, useState } from "react";
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
import { CmsTopic } from "@/types/type";
interface Props {
  id: string;
  isEditing?: boolean;
}

export default function DetailTopic({ id, isEditing }: Props) {
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
        title: topic.title,
        shortDescription: topic.shortDescription,
        description: topic.description,
        isActive: topic.isActive,
        /*videoTitle: topic.video?.title,
        videoDescription: topic.video?.description,
        videoReferences: topic.video?.references,
        videoLink: topic.video?.link,*/
      }

      const response = await fetch("/api/topics/updateTopic", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "id": String(id),
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`)
    }

      if (!response.ok) {
        throw new Error(`Erro ao atualizar tópico: ${response.status}`);
      }

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

        {/* Campos para edição de vídeo */}
        
        {/* <TextField
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
            /> */}
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

      <Box sx={actionsContainerStyles}>
              <FormActions
                isValid={!!topic?.title && !!topic?.shortDescription && !!topic?.description}
                isDirty={JSON.stringify(topic) !== JSON.stringify(originalTopic)}
                mode={isEditing ? "edit" : "view"}
                entityPath="cms/topics"
                entityId={id}
                onSave={handleSave}
                onCancel={handleCancel}
                onEdit={handleEdit}
                onBack={handleBack}
              />
      </Box>

  
    </Box>
  );
}
