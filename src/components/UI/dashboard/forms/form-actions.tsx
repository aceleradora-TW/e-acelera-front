import { Box, Button, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  actionsBoxStyles,
  cancelButtonStyles,
  returnToList,
  submitButtonStyles
} from "../forms/form.styles"


interface FormActionsProps {
  isValid: boolean;
  isDirty: boolean;
  mode: "create" | "edit" | "view";
  entityPath: string;
  entityId?: string;
}

export function FormActions({
  isValid,
  isDirty,
  mode,
  entityPath,
  entityId,
}: FormActionsProps) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box sx={actionsBoxStyles}>
      {mode === "view" && (
        <>
          <Button
            variant="contained"
            sx={returnToList(theme)}
            onClick={() => router.push(`/${entityPath}/${entityId}/edit`)}
          >
            Editar
          </Button>

          <Button
            variant="contained"
            sx={returnToList(theme)}
            onClick={() => router.push(`/${entityPath}`)}
          >
            VOLTAR PARA LISTA
          </Button>
        </>
      )}

      {mode === "edit" && (
        <>
          <Button
            variant="contained"
            sx={cancelButtonStyles(theme)}
            onClick={() => router.push(`/${entityPath}/${entityId}`)}
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
        </>
      )}

      {mode === "create" && (
        <>
          <Button
            variant="contained"
            sx={cancelButtonStyles(theme)}
            onClick={() => router.push(`/${entityPath}`)}
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
        </>
      )}
    </Box>
  );
}
