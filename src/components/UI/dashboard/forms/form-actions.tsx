import { Box, Button, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  actionsBoxStyles,
  cancelButtonStyles,
  returnToList,
  submitButtonStyles,
} from "../forms/form.styles";

interface FormActionsProps {
  isValid: boolean;
  isDirty: boolean;
  mode: "create" | "edit" | "view";
  entityPath: string;
  entityId?: string;
  onSave?: () => void;
  onCancel?: () => void;
  onEdit?: () => void;
  onBack?: () => void;
}

export function FormActions({
  isValid,
  isDirty,
  mode,
  entityPath,
  entityId,
  onSave,
  onCancel,
  onEdit,
  onBack,
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
            onClick={() => (onBack ? onBack() : router.push(`/${entityPath}`))}
          >
            Voltar para a lista
          </Button>
        </>
      )}

      {mode === "edit" && (
        <>
          <Button
            variant="contained"
            sx={cancelButtonStyles(theme)}
            onClick={() =>
              onCancel
                ? onCancel()
                : router.push(
                    mode === "edit"
                      ? `/${entityPath}/${entityId}`
                      : `/${entityPath}`,
                  )
            }
          >
            Cancelar
          </Button>

          <Button
            type={onSave ? "button" : "submit"}
            variant="contained"
            disabled={!isDirty || !isValid}
            sx={submitButtonStyles(theme)}
            onClick={onSave}
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
            onClick={() =>
              onCancel ? onCancel() : router.push(`/${entityPath}`)
            }
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            variant="contained"
            disabled={!isDirty || !isValid}
            sx={submitButtonStyles(theme)}
            onClick={onSave}
          >
            Criar
          </Button>
        </>
      )}
    </Box>
  );
}
