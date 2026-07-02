"use client";

import { useCallback, useEffect, useState } from "react";
import { Alert, Box, Button, TextField } from "@mui/material";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import {
  actionsContainerStyles,
  cancelButtonStyles,
  returnToList,
  textFieldStyles,
  textFieldsContainerStyles,
} from "@/components/UI/dashboard/forms/form.styles";
import { CmsTheme } from "@/types/type";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material";
import { FormActions } from "@/components/UI/dashboard/forms/form-actions";

interface Props {
  id: string;
}

export default function DetailTheme({ id }: Props) {
  const [theme, setTheme] = useState<CmsTheme | undefined>(undefined);
  const [originalTheme, setOriginalTheme] = useState<CmsTheme | undefined>(undefined);
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const fetchTheme = useCallback(async () => {
    try {
      const response = await fetch(`/api/themes/getThemeById`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);

      const data = await response.json();

      setTheme(data.data);
      setOriginalTheme(data.data);
    } catch (error) {
      console.error("Erro ao buscar tema:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchTheme();
  }, [fetchTheme]);

  function handleChange(field: keyof CmsTheme, value: string) {
    if (!theme) return;

    setTheme({
      ...theme,
      [field]: value,
    });
  }

  function handleEdit() {
    setOriginalTheme(theme);
    setIsEditing(true);
    setErrorMessage("");
    /*router.push(`/cms/themes/${id}/edit`);*/
  }

  function handleCancelEdit() {
    const confirmCancel = window.confirm(
      "Deseja cancelar a edição? As alterações serão perdidas."
    );

    if (!confirmCancel) return;

    setTheme(originalTheme);
    setIsEditing(false);
    setErrorMessage("");
  }

  async function handleSave() {
    if (!theme) return;

    try {
      setErrorMessage("");

      const payload = {
        title: theme.title,
        shortDescription: theme.shortDescription,
        description: theme.description,
        imageAlt: theme.imageAlt,
        category: theme.category,
        sequence: theme.sequence,
      };

      const response = await fetch(`/api/themes/updateTheme`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          id,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
      }

      const data = await response.json();

      setTheme(data.data ?? theme);
      setOriginalTheme(data.data ?? theme);
      setIsEditing(false);
    } catch (error) {
      console.error("Erro ao salvar tema:", error);
      setErrorMessage("Não foi possível salvar as alterações do tema. Tente novamente.");
    }
  }

const handleBack = () => {
    router.push(`/cms/themes`);
  }

  return (
    <Box>
      <UpperBanner
        title="Themes"
        showBreadCrumb
        breadCrumbLabel={theme?.title}
        editButton={!isEditing}
      />

      {errorMessage && (
        <Alert severity="error" sx={{ mx: { xs: 3, md: 10 }, mt: 2 }}>
          {errorMessage}
        </Alert>
      )}

      <Box sx={textFieldsContainerStyles}>
        <TextField
          label="Título"
          value={theme?.title || ""}
          fullWidth
          InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("title", event.target.value)}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição curta"
          value={theme?.shortDescription || ""}
          fullWidth
          InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("shortDescription", event.target.value)}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição"
          value={theme?.description || ""}
          fullWidth
          InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("description", event.target.value)}
          multiline
          rows={4}
          sx={textFieldStyles}
        />

        <TextField
          label="Texto alt da imagem"
          value={theme?.imageAlt || ""}
          fullWidth
          InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("imageAlt", event.target.value)}
          sx={textFieldStyles}
        />

        <TextField
          label="Categoria"
          value={theme?.category || ""}
          fullWidth
          InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("category", event.target.value)}
          sx={textFieldStyles}
        />

        <TextField
          label="Sequência"
          value={theme?.sequence ?? ""}
          fullWidth
          InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("sequence", event.target.value)}
          sx={textFieldStyles}
        />
      </Box>

      <Box sx={actionsContainerStyles}>
              <FormActions
                isValid={!!theme?.title && !!theme?.shortDescription && !!theme?.description}
                isDirty={JSON.stringify(theme) !== JSON.stringify(theme)}
                mode={isEditing ? "edit" : "view"}
                entityPath="cms/themes"
                entityId={id}
                onSave={handleSave}
                onCancel={handleCancelEdit}
                onEdit={handleEdit}
                onBack={handleBack}
              />
            </Box>
    </Box>
  );
}