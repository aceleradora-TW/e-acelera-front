
'use client'

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Box, Button, TextField, useTheme } from "@mui/material"
import { UpperBanner } from "@/components/UI/cms/upper-banner"
import { actionsContainerStyles, arrchiveButtonStyles, cancelButtonStyles, textFieldStyles, textFieldsContainerStyles } from "@/components/UI/dashboard/forms/form.styles"
import { Theme } from "@/types/type"

interface Props {
  id: string
}

export default function DetailTheme({ id }: Props) {
  const [theme, setTheme] = useState<Theme | undefined>(undefined)
  const muiTheme = useTheme()
  const router = useRouter()


  const fetchTheme = useCallback(async () => {

    try {
      const url = `/api/themes/getThemeById`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id,
        }
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

      <Box
        sx={textFieldsContainerStyles}
      >
        <TextField
          label="Título"
          value={theme?.title || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles(muiTheme)}
        />

        <TextField
          label="Descrição curta"
          value={theme?.shortDescription || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles(muiTheme)}
        />

        <TextField
          label="Descrição"
          value={theme?.description || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          multiline
          rows={4}
          sx={textFieldStyles(muiTheme)}
        />

        <TextField
          label="URL da imagem"
          value={theme?.imageUrl || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles(muiTheme)}
        />

        <TextField
          label="Texto alt da imagem"
          value={theme?.imageAlt || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles(muiTheme)}
        />

        <TextField
          label="Categoria"
          value={theme?.category || ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles(muiTheme)}
        />

        <TextField
          label="Sequência"
          value={theme?.sequence ?? ""}
          fullWidth
          InputProps={{ readOnly: true }}
          sx={textFieldStyles(muiTheme)}
        />
      </Box>

      <Box sx={actionsContainerStyles}>
        <Button
          variant="contained"
          sx={arrchiveButtonStyles(muiTheme)}
          onClick={() => router.push("/cms/themes")}
        >
          ARQUIVAR
        </Button>

        <Button
          variant="contained"
          sx={cancelButtonStyles(muiTheme)}
          onClick={() => router.push("/cms/themes")}
        >
          CANCELAR
        </Button>

        <Button
          variant="contained"
          disabled
        >
          SALVAR
        </Button>
      </Box>
    </Box>
  )
}
