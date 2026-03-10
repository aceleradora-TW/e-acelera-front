'use client'

import { useEffect, useState } from "react"
import { Box, Button, TextField, Typography, useTheme } from "@mui/material"
import { UpperBanner } from "@/components/UI/cms/upper-banner"
// import { BreadCrumb } from "@/components/BreadCrumb"

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
      // console.log("ID recebido:", id)

      const response = await fetch(`http://localhost:5002/themes/${id}`)

      // console.log("response", response)

      const data = await response.json()

      // console.log("data", data)

      setTheme(data)
    }

    fetchTheme()
  }, [id])

  /* tá dando aqui, não aparece o nome do tema certinho. 
  Tenho que arrumar esse regex, talvez. Ainda estamos investigando
  */
  useEffect(() => {
    if (theme?.title) {
      const slug = theme.title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "");

      window.history.replaceState(
        null,
        "",
        `/cms/themes/${id}-${slug}`
      );
    }
  }, [theme, id]);

  return (
    <Box>
      <UpperBanner
        title="Temas"
        editButton
        showBreadCrumb
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

        <Button variant="contained" sx={{
          ml: 2,
          border: "0.5px solid red",
          backgroundColor: muiTheme.palette.bgColor?.main,
          color: muiTheme.palette.buttonFormColor?.red,
          "&:hover": {
            backgroundColor: "rgb(200, 34, 29)",
            color: muiTheme.palette.buttonHover?.contrastText,
          },
        }}>
          CANCELAR
        </Button>

        <Button variant="contained" disabled sx={{ ml: 2 }}>
          SALVAR
        </Button>

      </Box>
    </Box>
  )
}