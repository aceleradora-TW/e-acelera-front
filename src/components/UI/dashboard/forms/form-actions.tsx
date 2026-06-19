import { Box, Button, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  actionsBoxStyles,
  archiveButtonStyles,
  cancelButtonStyles,
  editButtonStyles,
  returnToListStyles,
  submitButtonStyles,
} from "../forms/form.styles";

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
      {mode === "edit" &&(
        <>
          {/* <Button
            variant="contained"
            sx={archiveButtonStyles(theme)}
          >
            Arquivar
          </Button>*/}

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

      {mode === "view" && (
        <>
          {/* <Button
            variant="contained"
            sx={archiveButtonStyles(theme)}
          >
            Arquivar
          </Button>*/}

          <Button
            variant="contained"
            sx={editButtonStyles(theme)}
            onClick={() => router.push(`/${entityPath}/${entityId}/edit`)}
          >
            Editar
          </Button>

          <Button
            variant="contained"
            sx={returnToListStyles(theme)}
            onClick={() => router.push(`/${entityPath}`)}
          >
            VOLTAR PARA LISTA
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
