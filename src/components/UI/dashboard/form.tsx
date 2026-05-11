import { useState } from "react"

import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"

import {
  Alert,
  Container,
  Stack,
  Typography,
} from "@mui/material"

import { useTheme } from "@mui/material"

import { containerStyles } from "./forms/form.styles"
import { FieldRenderer } from "./forms/field-renderer"
import { FormActions } from "./forms/form-actions"

interface FormProps<T extends FieldValues> {
  title?: string
  onSubmit: (data: T) => Promise<void>
  schema: any
  formDefs: {
    fields: any[]
    defaultValues: any
  }
}

export default function Form<T extends FieldValues>({
  title = "Cadastro",
  onSubmit: onSubmitProp,
  schema,
  formDefs,
}: FormProps<T>) {
  const theme = useTheme()

  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    handleSubmit,
    control,
    formState: { isDirty, isValid },
  } = useForm<T>({
    resolver: zodResolver(schema) as any,
    defaultValues: formDefs.defaultValues,
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<T> = async (data) => {
    setError(null)
    setIsLoading(true)

    try {
      await onSubmitProp(data)
    } catch (err: any) {
      setError(err?.message || "Erro ao processar formulário")
    } finally {
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
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{ mb: 3 }}
      >
        {title}
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Stack spacing={2.5}>
        {formDefs.fields.map((field) => (
          <Controller
            key={field.name as string}
            name={field.name as any}
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
      </Stack>

      <FormActions
        isValid={isValid && !isLoading}
        isDirty={isDirty}
      />
    </Container>
  )
}