"use client";

import { useCallback, useEffect, useState } from "react";
import { Alert, Box, TextField } from "@mui/material";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import {
  actionsContainerStyles,
  textFieldStyles,
  textFieldsContainerStyles,
} from "@/components/UI/dashboard/forms/form.styles";
import { CmsTheme } from "@/types/type";
import { useRouter } from "next/navigation";
import { FormActions } from "@/components/UI/dashboard/forms/form-actions";

interface Props {
  id: string;
  isEditing?: boolean;
}

export default function DetailTheme({ id, isEditing }: Props) {
  const [theme, setTheme] = useState<CmsTheme | undefined>(undefined);
  const [originalTheme, setOriginalTheme] = useState<CmsTheme | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<CmsTheme | undefined>();

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
      setFormData(data.data);
    } catch (error) {
      console.error("Erro ao buscar tema:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchTheme();
  }, [fetchTheme]);

  function handleChange(field: keyof CmsTheme, value: string) {
    if (!formData) return;

    setFormData({
      ...formData,
      [field]: value,
    });
  }

  function handleEdit() {
    router.push(`/cms/themes/${id}/edit`);
  }

  function handleCancel() {
    const confirmCancel = window.confirm(
      "Deseja cancelar a edição? As alterações serão perdidas."
    );
    if (!confirmCancel) {
      return;
    }

    router.push(`/cms/themes/${id}`);
  }

  const handleSave = useCallback(async () => {
    if (!formData) return;

    try {
      setErrorMessage("");

      const payload = {
        title: formData.title,
        shortDescription: formData.shortDescription,
        description: formData.description,
        imageAlt: formData.imageAlt,
        category: formData.category,
        sequence: formData.sequence,
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

      router.push("/cms/themes");

      setTheme(data.data);
      setOriginalTheme(data.data);
      setFormData(data.data);
    } catch (error) {
      console.error("Erro ao salvar tema:", error);
      setErrorMessage("Não foi possível salvar as alterações do tema. Tente novamente.");
    }
  }, [formData, theme, id]);

  const handleBack = () => {
    router.push(`/cms/themes`);
  };

  return (
    <Box>
      <UpperBanner
        title={theme?.title || ""}
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
          value={formData?.title || ""}
          fullWidth
          // InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("title", event.target.value)}
          InputProps={{
            readOnly: !isEditing,
          }}

          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: isEditing ? undefined : "none",
            },
          }}
        />

        <TextField
          label="Descrição curta"
          value={formData?.shortDescription || ""}
          fullWidth
          // InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("shortDescription", event.target.value)}
          InputProps={{
            readOnly: !isEditing,
          }}

          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: isEditing ? undefined : "none",
            },
          }}
        />

        <TextField
          label="Descrição"
          value={formData?.description || ""}
          fullWidth
          // InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("description", event.target.value)}
          multiline
          rows={4}
          InputProps={{
            readOnly: !isEditing,
          }}

          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: isEditing ? undefined : "none",
            },
          }}
        />

        <TextField
          label="Texto alt da imagem"
          value={formData?.imageAlt || ""}
          fullWidth
          // InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("imageAlt", event.target.value)}
          InputProps={{
            readOnly: !isEditing,
          }}

          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: isEditing ? undefined : "none",
            },
          }}
        />

        <TextField
          label="Categoria"
          value={formData?.category || ""}
          fullWidth
          // InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("category", event.target.value)}
          InputProps={{
            readOnly: !isEditing,
          }}

          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: isEditing ? undefined : "none",
            },
          }}
        />

        <TextField
          label="Sequência"
          value={formData?.sequence ?? ""}
          fullWidth
          // InputProps={{ readOnly: !isEditing }}
          onChange={(event) => handleChange("sequence", event.target.value)}
          InputProps={{
            readOnly: !isEditing,
          }}

          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: isEditing ? undefined : "none",
            },
          }}
        />
      </Box>

      <Box sx={actionsContainerStyles}>
        <FormActions
          isValid={!!formData?.title && !!formData?.shortDescription && !!formData?.description}
          isDirty={JSON.stringify(formData) !== JSON.stringify(originalTheme)}
          mode={isEditing ? "edit" : "view"}
          entityPath="cms/themes"
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