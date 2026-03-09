'use client'

import { useEffect, useState } from "react"
import { Box, Button, TextField, Typography } from "@mui/material"

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

  useEffect(() => {
  async function fetchTheme() {
    // console.log("ID recebido:", id)

    const response = await fetch(`http://localhost:5002/themes/${id}`)

    // console.log("response", response)

    const data = await response.json()

    // console.log("data", data)

    setTheme(data)
  }

  fetchTheme()
}, [id])

  return (
    <Box>
      <Typography variant="h4" mb={3}>
        Themes
      </Typography>

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

      <Box mt={3}>
        <Button variant="contained" sx={{ ml: 2 }}>
          EDITAR
        </Button>

        <Button variant="contained" sx={{ ml: 2 }}>
          ARQUIVAR
        </Button>

        <Button variant="contained" sx={{ ml: 2 }} color="error">
          CANCELAR
        </Button>

        <Button variant="contained" sx={{ ml: 2 }}>
          SALVAR
        </Button>
      </Box>
    </Box>
  )
}