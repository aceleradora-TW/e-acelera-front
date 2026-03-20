'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Box, Button, TextField, useTheme } from "@mui/material"
import { UpperBanner } from "@/components/UI/cms/upper-banner"
import { arrchiveButtonStyles, cancelButtonStyles, textFieldStyles } from "@/components/UI/dashboard/forms/form.styles"

interface Theme {
  title: string
  shortDescription: string
  description: string
  imageUrl?: string
  imageAlt?: string
  category?: string
  sequence?: number
}

interface Props {
  id: string
}

export default function DetailTheme({ id }: Props) {
  const [theme, setTheme] = useState<Theme | null>(null)
  const muiTheme = useTheme()
  const router = useRouter()

  useEffect(() => {
    async function fetchTheme() {
      const response = await fetch(`http://localhost:5002/themes/${id}`)
      const data = await response.json()
      setTheme(data)
    }

    fetchTheme()
  }, [id])

  return (
    <Box>
      <UpperBanner
        title={theme?.title || "Temas"}
        showBreadCrumb
        breadCrumbLabel={theme?.title}
        editButton
      />

      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2
        }}
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

      <Box
        mt={3}
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <Button
          variant="contained"
          sx={arrchiveButtonStyles(muiTheme)}
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
          variant="outlined"
          disabled
          sx={{ ml: 2 }}
        >
          SALVAR
        </Button>
      </Box>
    </Box>
  )
}