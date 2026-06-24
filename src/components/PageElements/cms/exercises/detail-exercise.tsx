"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import { actionsContainerStyles, cancelButtonStyles, returnToList, textFieldStyles, textFieldsContainerStyles } from "@/components/UI/dashboard/forms/form.styles";
import { CmsExercise } from "@/types/type";

interface Props {
  id: string;
  onArchive?: (id: string) => void;
  isEditing?: boolean;
}

export default function DetailExercise({ id, onArchive, isEditing }: Props) {
  const [exercise, setExercise] = useState<CmsExercise | undefined>(undefined);
  const [formData, setFormData] = useState<CmsExercise | undefined>();
  const muiTheme = useTheme();
  const router = useRouter();

  const fetchExercise = useCallback(async () => {
    try {
      const url = `/api/exercises/getExerciseById`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);

      const data = await response.json();
      setExercise(data.data);
      setFormData(data.data);
    } catch (error) {
      console.error("Erro ao buscar exercício:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchExercise();
  }, [fetchExercise]);

  const handleSave = async () => {
    if (!formData) return;

    try {
      // const payload = {
      //   title: formData.title,
      //   description: formData.description,
      //   shortDescription: formData.shortDescription,
      //   topic: formData.topic,
      // };

      const payload = {
        title: formData.title,
        description: formData.description,
        shortDescription: formData.shortDescription,

        topicId: formData.topic?.id,
      };

      const url = `/api/exercises/updateExercise`;

      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          id,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Erro ao atualizar exercício: ${response.status}`);
      }

      const data = await response.json();
      console.log("Exercício atualizado com sucesso!", data);

      // Redireciona com sucesso para a listagem
      router.push("/cms/exercises");

    } catch (error) {
      console.error("Erro ao salvar as alterações do exercício:", error);
      alert("Não foi possível salvar as alterações. Verifique o console.");
    }
  };
  const handleCancel = () => {
    router.push(`/cms/exercises/${id}`);
  };

  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <UpperBanner
          title={exercise?.title || "Exercícios"}
          showBreadCrumb
          breadCrumbLabel={exercise?.title}
          editButton={!isEditing}
        />

        {isEditing && (
          <Box
            sx={{
              position: "absolute",
              top: { xs: 45, sm: 12 },
              right: 0,
              display: "flex",
              gap: 2,
              zIndex: 10,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                ...cancelButtonStyles(muiTheme),
                borderColor: "red",
                color: "red",
                backgroundColor: "#fff",
                height: "40px",
                "&:hover": { borderColor: "darkred", backgroundColor: "#fff5f5" },
              }}
              onClick={handleCancel}
            >
              CANCELAR
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#004A7C",
                height: "40px",
                "&:hover": { backgroundColor: "#003B63" }
              }}
              onClick={handleSave}
            >
              SALVAR
            </Button>
          </Box>
        )}
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
          rows={2}
          sx={textFieldStyles}
        />

        <TextField
          label="Tópico"
          value={formData?.topic?.title || ""}

          onChange={(e) =>
            setFormData((prev) =>
              prev
                ? {
                  ...prev,

                  topic: prev.topic
                    ? {
                      ...prev.topic,
                      title: e.target.value,
                    }
                    : undefined,
                }
                : prev
            )
          }

          InputProps={{
            readOnly: !isEditing,
          }}

          sx={textFieldStyles}
        />

        <TextField
          label="Status"
          value={exercise?.isActive ? "Ativo" : "Inativo"}
          InputProps={{ readOnly: true }}
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
            onClick={() => router.push("/cms/exercises")}
          >
            VOLTAR PARA LISTA
          </Button>
        )}
      </Box>
    </Box>
  );
}