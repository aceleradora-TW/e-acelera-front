"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import {
  actionsContainerStyles,
  archiveButtonStyles,
  cancelButtonStyles,
  textFieldStyles,
  textFieldsContainerStyles,
} from "@/components/UI/dashboard/forms/form.styles";
import { CmsTheme } from "@/types/type";
import { FormActions } from "@/components/UI/dashboard/forms/form-actions";

interface Props {
  id: string;
  onArchive?: (id: string) => void;
}

export default function DetailTheme({ id, onArchive }: Props) {
  const [theme, setTheme] = useState<CmsTheme | undefined>(undefined);
  const muiTheme = useTheme();
  const router = useRouter();

  const fetchTheme = useCallback(async () => {
    try {
      const url = `/api/themes/getThemeById`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);

      const data = await response.json();

      setTheme(data.data);
    } catch (error) {
      console.error("Erro ao buscar tema:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchTheme();
  }, [fetchTheme]);

  return (
    <Box>
      <UpperBanner
        title={theme?.title || "Temas"}
        showBreadCrumb
        breadCrumbLabel={theme?.title}
        editButton
      />

      <Box sx={textFieldsContainerStyles}>
        <TextField
          label="Título"
          value={theme?.title || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição curta"
          value={theme?.shortDescription || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição"
          value={theme?.description || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          multiline
          rows={4}
          sx={textFieldStyles}
        />

        <TextField
          label="Texto alt da imagem"
          value={theme?.imageAlt || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        />

        <TextField
          label="Categoria"
          value={theme?.category || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        />

        <TextField
          label="Sequência"
          value={theme?.sequence ?? ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles}
        />
      </Box>

      <Box sx={actionsContainerStyles}>
        <FormActions
          isValid
          isDirty={false}
          mode="view"
          entityPath="cms/themes"
          entityId={id}
        />
      </Box>
    </Box>
  );
}
