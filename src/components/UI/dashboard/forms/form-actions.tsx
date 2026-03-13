import { Box, Button, useTheme } from "@mui/material"
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

  return (
    <Box sx={actionsBoxStyles}>
      <Button 
        sx={cancelButtonStyles(theme)}
      >
        Cancelar
      </Button>

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