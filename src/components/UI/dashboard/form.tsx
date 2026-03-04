import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Container, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { ThemeFormData, ThemeFormSchema, themeFormDefs } from "./forms/defs/theme.defs"
import { zodResolver } from "@hookform/resolvers/zod"
import { containerStyles } from "./forms/form.styles"
import { FieldRenderer } from "./forms/field-renderer"
import { FormActions } from "./forms/form-actions"

export default function Form() {
  const theme = useTheme()

  const {
    handleSubmit,
    control,
    formState: { isDirty, isValid },
  } = useForm<ThemeFormData>({
    resolver: zodResolver(ThemeFormSchema),
    defaultValues: themeFormDefs.defaultValues,
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<ThemeFormData> = (data) => {
    console.log(data)
  }

  return (
    <Container
      component="form"
      maxWidth="xl"
      sx={containerStyles(theme)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h6" fontWeight={600}>
        Cadastro
      </Typography>

      {themeFormDefs.fields.map((field) => (
        <Controller
          key={field.name}
          name={field.name}
          control={control}
          render={({ field: rhfField, fieldState }) => (
            <FieldRenderer
              field={field}
              rhfField={rhfField}
              error={fieldState.error}
            />
          )}
        />
      ))}

      <FormActions isValid={isValid} isDirty={isDirty} />
    </Container>
  )
}