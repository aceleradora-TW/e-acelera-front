import { TextField } from "@mui/material"
import { ControllerRenderProps, FieldError } from "react-hook-form"
import { ThemeFormData } from "./defs/theme.defs"
import { FieldDef } from "@/types/form.types"

interface FieldRendererProps {
  field: FieldDef<ThemeFormData>
  rhfField: ControllerRenderProps<ThemeFormData>
  error?: FieldError
}

const BaseTextField = ({ field, rhfField, error }: FieldRendererProps) => (
  <TextField
    {...rhfField}
    label={field.label}
    type={field.type}
    error={!!error}
    helperText={error?.message}
    fullWidth
    FormHelperTextProps={{ sx: { fontSize: '0.75rem' } }}
  />
)

const TextAreaField = ({ field, rhfField, error }: FieldRendererProps) => (
  <TextField
    {...rhfField}
    label={field.label}
    multiline
    rows={5}
    error={!!error}
    helperText={error?.message}
    fullWidth
    FormHelperTextProps={{ sx: { fontSize: '0.75rem' } }}
  />
)

const FallbackField = ({ field, rhfField }: FieldRendererProps) => (
  <TextField
    {...rhfField}
    label={`Tipo não suportado: ${field.type}`}
    error
    helperText="Tipo de campo não implementado"
    fullWidth
  />
)

const fieldComponentMap: Record<string, (props: FieldRendererProps) => JSX.Element> = {
  text: BaseTextField,
  email: BaseTextField,
  number: BaseTextField,
  textarea: TextAreaField,
}

export function FieldRenderer(props: FieldRendererProps) {
  const Component = fieldComponentMap[props.field.type] ?? FallbackField
  return <Component {...props} />
}