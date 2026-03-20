import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Alert, Container, Stack, Typography } from "@mui/material"
import { useTheme } from "@mui/material"
import { ThemeFormData, ThemeFormSchema, themeFormDefs } from "./forms/defs/theme.defs"
import { zodResolver } from "@hookform/resolvers/zod"
import { containerStyles } from "./forms/form.styles"
import { FieldRenderer } from "./forms/field-renderer"
import { FormActions } from "./forms/form-actions"
import { useState } from "react"

interface FormProps {
  title?: string
  onSubmit: (data: ThemeFormData) => Promise<void>
  isLoading?: boolean
}

export default function Form({ 
  title = "Cadastro", 
  onSubmit: onSubmitProp,
  isLoading: isLoadingProp = false 
}: FormProps) {
  const theme = useTheme()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, control, formState: { isDirty, isValid } } = useForm<ThemeFormData>({
    resolver: zodResolver(ThemeFormSchema),
    defaultValues: themeFormDefs.defaultValues,
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<ThemeFormData> = async (data) => {
    setError(null)
    setIsLoading(true)
    try {
      await onSubmitProp(data)
    } catch (err: any) {
      setError(err?.message || "Erro ao processar formulário")
      setIsLoading(false)
    }
  }

  return (
    <Container
      component="form"
      maxWidth="xl"
      sx={containerStyles(theme)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
        {title}
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Stack spacing={2.5}>
        {themeFormDefs.fields.map((field) => (
          <Controller
            key={field.name as string}
            name={field.name}
            control={control}
            render={({ field: rhfField, fieldState }) => (
              <FieldRenderer field={field} rhfField={rhfField} error={fieldState.error} />
            )}
          />
        ))}
      </Stack>

      <FormActions isValid={isValid && !(isLoading || isLoadingProp)} isDirty={isDirty} />
    </Container>
  )
}