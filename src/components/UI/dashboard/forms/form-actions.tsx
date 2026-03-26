import { Box, Button, useTheme } from "@mui/material"
import { useRouter } from "next/navigation"
import { actionsBoxStyles, 
  cancelButtonStyles,
  submitButtonStyles
} from "../forms/form.styles"

interface FormActionsProps {
  isValid: boolean
  isDirty: boolean
}

export function FormActions({ isValid, isDirty }: FormActionsProps) {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Box sx={actionsBoxStyles}>
      <Button sx={cancelButtonStyles(theme)} onClick={() => router.back()}>Cancelar</Button>
      <Button
        type="submit"
        variant="contained"
        disabled={!isDirty || !isValid}
        sx={submitButtonStyles(theme)}
      >
        Salvar
      </Button>
    </Box>
  )
}