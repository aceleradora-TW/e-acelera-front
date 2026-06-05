'use client'

import { useCallback, useEffect, useState } from "react"
import { Alert, Box, Button, TextField, Typography, useTheme } from "@mui/material"
import { UpperBanner } from "@/components/UI/cms/upper-banner"
import { cancelButtonStyles } from "@/components/UI/dashboard/forms/form.styles"
import { CmsTheme } from "@/types/type"

interface Props {
  id: string
}

export default function DetailTheme({ id }: Props) {
  const [theme, setTheme] = useState<CmsTheme | undefined>(undefined)
  const [originalTheme, setOriginalTheme] = useState<CmsTheme | undefined>(undefined)
  const [isEditing, setIsEditing] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const muiTheme = useTheme()

  const fetchTheme = useCallback(async () => {
    try {
      const response = await fetch(`/api/themes/getThemeById`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id,
        },
      })

      if (!response.ok) throw new Error(`Erro: ${response.status}`)

      const data = await response.json()

      setTheme(data.data)
      setOriginalTheme(data.data)
    } catch (error) {
      console.error("Erro ao buscar tema:", error)
    }
  }, [id])

  useEffect(() => {
    fetchTheme()
  }, [fetchTheme])

  function handleChange(field: keyof CmsTheme, value: string) {
    if (!theme) return

    setTheme({
      ...theme,
      [field]: value,
    })
  }

  function handleEdit() {
    setOriginalTheme(theme)
    setIsEditing(true)
    setErrorMessage("")
  }

  function handleCancelEdit() {
    const confirmCancel = window.confirm(
      "Deseja cancelar a edição? As alterações serão perdidas."
    )

    if (!confirmCancel) return

    setTheme(originalTheme)
    setIsEditing(false)
    setErrorMessage("")
  }

  async function handleSave() {
    if (!theme) return

    try {
      setErrorMessage("")

      const payload = {
        title: theme.title,
        shortDescription: theme.shortDescription,
        description: theme.description,
      }

      const response = await fetch(`/api/themes/updateTheme`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          id,
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`)
      }

      const data = await response.json()

      setTheme(data.data ?? theme)
      setOriginalTheme(data.data ?? theme)
      setIsEditing(false)
    } catch (error) {
      console.error("Erro ao salvar tema:", error)
      setErrorMessage("Não foi possível salvar as alterações do tema. Tente novamente.")
    }
  }

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#fff",
      fontSize: "16px",
      minHeight: "40px",
    },
    "& .MuiInputBase-input": {
      padding: "10px 12px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: isEditing ? "1px solid #0B4F7A" : "1px solid #0B4F7A",
    },
    "& .MuiInputLabel-root": {
      fontSize: "16px",
      color: "#333",
    },
  }

  return (
    <Box>
      <UpperBanner
        title="Themes"
        showBreadCrumb
        breadCrumbLabel={theme?.title}
      />

      <Box
        sx={{
          backgroundColor: "#EAF3FA",
          minHeight: "120px",
          px: { xs: 3, md: 10 },
          py: 4,
          mt: -2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "#004A7C",
            fontSize: "36px",
            fontWeight: 700,
          }}
        >
          Themes
        </Typography>

        {!isEditing && (
          <Button
            onClick={handleEdit}
            disabled={!theme}
            sx={{
              color: "#5E8CB5",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            ✎ Editar
          </Button>
        )}
      </Box>

      {errorMessage && (
        <Alert severity="error" sx={{ mx: { xs: 3, md: 10 }, mt: 2 }}>
          {errorMessage}
        </Alert>
      )}

      <Box
        sx={{
          px: { xs: 3, md: 10 },
          py: 5,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 1, fontSize: "16px" }}>
            Título
          </Typography>
          <TextField
            value={theme?.title || ""}
            fullWidth
            InputProps={{ readOnly: !isEditing }}
            onChange={(event) => handleChange("title", event.target.value)}
            sx={inputStyle}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography sx={{ mb: 1, fontSize: "16px" }}>
            shortDescription
          </Typography>
          <TextField
            value={theme?.shortDescription || ""}
            fullWidth
            InputProps={{ readOnly: !isEditing }}
            onChange={(event) => handleChange("shortDescription", event.target.value)}
            sx={inputStyle}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography sx={{ mb: 1, fontSize: "16px" }}>
            description
          </Typography>
          <TextField
            value={theme?.description || ""}
            fullWidth
            InputProps={{ readOnly: !isEditing }}
            onChange={(event) => handleChange("description", event.target.value)}
            sx={inputStyle}
          />
        </Box>

        {isEditing && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 4,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                ...cancelButtonStyles(muiTheme),
                borderColor: "red",
                color: "red",
                backgroundColor: "#fff",
                px: 4,
              }}
              onClick={handleCancelEdit}
            >
              CANCELAR
            </Button>

            <Button
              variant="contained"
              onClick={handleSave}
              disabled={!theme}
              sx={{
                backgroundColor: "#004A7C",
                px: 4,
                "&:hover": {
                  backgroundColor: "#003B63",
                },
              }}
            >
              SALVAR
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}