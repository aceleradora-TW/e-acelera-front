'use client'

import { useEffect, useState } from "react"
import { Box, Button, TextField, Typography, useTheme } from "@mui/material"
import { UpperBanner } from "@/components/UI/cms/upper-banner"
import { cancelButtonStyles } from "@/components/UI/dashboard/forms/form.styles"

interface Theme {
  title: string
  shortDescription: string
  description: string
}

interface Props {
  id: string
}

export default function DetailTheme({ id }: Props) {
  const [theme, setTheme] = useState<Theme | null>(null)
  const muiTheme = useTheme()

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
        editButton
        showBreadCrumb
        breadCrumbLabel={theme?.title}
      />

      <TextField
        fullWidth
        label="Título"
        value={theme?.title || ""}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Descrição curta"
        value={theme?.shortDescription || ""}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Descrição"
        value={theme?.description || ""}
        margin="normal"
        multiline
        rows={4}
      />

      <Box mt={3}
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >

        <Button variant="contained" sx={{
          border: "0.5px solid",
          backgroundColor: muiTheme.palette.buttonFormColor?.blueBackground,
          color: muiTheme.palette.buttonHover?.contrastText
        }}>
          ARQUIVAR
        </Button>

        <Button variant="contained"
          sx={(theme) => cancelButtonStyles(theme)}
        >
          CANCELAR
        </Button>

        <Button variant="contained" disabled sx={{ ml: 2 }}>
          SALVAR
        </Button>

      </Box>
    </Box>
  )
}