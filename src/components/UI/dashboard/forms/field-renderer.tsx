import { MenuItem, TextField } from "@mui/material"
import { ControllerRenderProps, FieldError } from "react-hook-form"
import { ThemeFormData } from "./defs/theme.defs"
import { FieldDef } from "@/types/form.types"
import { textAreaStyles } from "./form.styles"

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

const NumberField = ({ field, rhfField, error }: FieldRendererProps) => (
  <TextField
    {...rhfField}
    label={field.label}
    type="number"
    error={!!error}
    helperText={error?.message}
    fullWidth
    FormHelperTextProps={{ sx: { fontSize: '0.75rem' } }}
    onChange={(e) => {
      const value = e.target.value
      rhfField.onChange(value === '' ? undefined : Number(value))
    }}
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
    sx={textAreaStyles}
  />
)

const SelectField = ({ field, rhfField, error }: FieldRendererProps) => (
  <TextField
    {...rhfField}
    select
    label={field.label}
    error={!!error}
    helperText={error?.message}
    fullWidth
    FormHelperTextProps={{ sx: { fontSize: '0.75rem' } }}
  >
    {field.options?.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
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
  number: NumberField,
  textarea: TextAreaField,
  select: SelectField,
}

export function FieldRenderer(props: FieldRendererProps) {
  const Component = fieldComponentMap[props.field.type] ?? FallbackField
  return <Component {...props} />
}