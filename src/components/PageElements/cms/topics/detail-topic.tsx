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
import { FormActions } from "@/components/UI/dashboard/forms/form-actions";
interface Props {
  id: string;
  isEditing?: boolean;
}

export default function DetailTopic({ id, isEditing }: Props) {
  const [topic, setTopic] = useState<CmsTopic | undefined>(undefined);
  const [originalTopic, setOriginalTopic] = useState<CmsTopic | undefined>(
    undefined,
  );
  const [errorStatus, setErrorStatus] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState("")
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

  async function handleSave() {
    if (!topic) return

    try {
      setErrorMessage("")

      const payload = {
        title: topic.title,
        shortDescription: topic.shortDescription,
        description: topic.description,
        isActive: topic.isActive,
        /* videoTitle: topic.video?.title,
        videoDescription: topic.video?.description,
        videoReferences: topic.video?.references,
        videoLink: topic.video?.link, */
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

    const data = await response.json()

    router.push("/cms/topics");

    setTopic(data.data ?? topic)
    setOriginalTopic(data.data ?? topic)
  } catch (error) {
      console.error("Erro ao salvar tópico:", error);
      setErrorMessage("Ocorreu um erro ao salvar o tópico. Por favor, tente novamente.");
    }

}

  const handleCancel = () => {
    router.push(`/cms/topics/${id}`);
  };

  function handleEdit() {
    router.push(`/cms/topics/${id}/edit`);
  }

  const handleBack = () => {
    router.push(`/cms/topics`);
  };

  function handleChange(field: keyof CmsTopic , value: string) {
    if (!topic) return

    setTopic({
      ...topic,
      [field]: value,

    })
  }

  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <UpperBanner
          title={"Tópicos"}
          showBreadCrumb
          breadCrumbLabel={topic?.title}
          editButton={!isEditing}
        />
      </Box>

      <Box sx={textFieldsContainerStyles}>
        <TextField
          label="Título"
          value={topic?.title || ""}
          onChange={(event) => handleChange("title", event.target.value)}
          InputProps={{ readOnly: !isEditing }}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição"
          value={topic?.description || ""}
          onChange={(event) => handleChange("description", event.target.value)}
          InputProps={{ readOnly: !isEditing }}
          multiline
          rows={4}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição curta"
          value={topic?.shortDescription || ""}
          onChange={(event) => handleChange("shortDescription", event.target.value)}
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
        <FormActions
          isValid={
            !!topic?.title && !!topic?.shortDescription && !!topic?.description
          }
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
