'use client'

import { useEffect, useState } from "react"
import { Box, Button, TextField, Typography, useTheme } from "@mui/material"
import { UpperBanner } from "@/components/UI/cms/upper-banner"
import { cancelButtonStyles, textFieldStyles } from "@/components/UI/dashboard/forms/form.styles"

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
          showBreadCrumb
          breadCrumbLabel={theme?.title}
          editButton

        />

      <Box sx={{
        mt: 4,
        display: "flex",
        flexDirection: "column",
        gap: 2
      }} >
        <TextField
          label="Título"
          value={theme?.title || ""}
          fullWidth
          InputProps={{
            readOnly: true
          }}
          sx={textFieldStyles(muiTheme)}
        />
        <TextField
          fullWidth
          label="Descrição curta"
          value={theme?.shortDescription || ""}
          sx={textFieldStyles(muiTheme)}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Descrição"
          value={theme?.description || ""}
          sx={textFieldStyles(muiTheme)}
          margin="normal"
          multiline
          rows={4}
        />
      </Box>
      <Box mt={3}
        sx={{
          display: "flex",
          justifyContent: "right",
        }}
      >
        <Button variant="contained" sx={{
          // border: "0.5px solid",
          backgroundColor: muiTheme.palette.buttonFormColor?.blueBackground,
          color: muiTheme.palette.buttonHover?.contrastText
        }}>
          ARQUIVAR
        </Button>

        <Button variant="contained"
          sx={(theme) => cancelButtonStyles(muiTheme)}
        >
          CANCELAR
        </Button>

        <Button variant="outlined" disabled sx={{
          ml: 2
          // backgroundColor: muiTheme.palette.background.paper,
          // color: muiTheme.palette.buttonHover?.contrastText
        }}>
          SALVAR
        </Button>

      </Box>
    </Box>
  )
}