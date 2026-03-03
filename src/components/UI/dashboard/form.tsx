import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { ThemeFormData, ThemeFormSchema, themeFormDefs } from "./forms/defs/theme.defs"
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@mui/material/styles";
import {
  actionsBoxStyles,
  cancelButtonStyles,
  containerStyles,
  submitButtonStyles
} from "./forms/form.styles";

export default function Form() {
  const { handleSubmit, control, formState: { isDirty, isValid }, } = useForm<ThemeFormData>({
    resolver: zodResolver(ThemeFormSchema),
    defaultValues: themeFormDefs.defaultValues,
    mode: "onChange",
  })

  const onSubmit: SubmitHandler<ThemeFormData> = (data) => console.log(data)
  const theme = useTheme();

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

      {
        themeFormDefs.fields.map((field) => (
          <Controller
            key={field.name}
            name={field.name}
            control={control}
            render={({ field: rhfField, fieldState }) => {
              switch (field.type) {
                case "text":
                case "email":
                case "number":
                  return (
                    <TextField
                      {...rhfField}
                      label={field.label}
                      type={field.type}
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                      fullWidth
                    />
                  )

                case "textarea":
                  return (
                    <TextField
                      {...rhfField}
                      label={field.label}
                      multiline
                      rows={5}
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                      fullWidth
                    />
                  )

                default:
                  return (
                    <TextField
                      {...rhfField}
                      label={`Tipo não suportado: ${field.type}`}
                      error
                      helperText={`Tipo de campo não implementado`}
                      fullWidth
                    />
                  )
              }
            }}
          />
        ))
      }

      <Box
        sx={actionsBoxStyles}
      >
        <Button sx={cancelButtonStyles(theme)}
        >
          Cancelar
        </Button>

        <Button type="submit"
          variant="contained"
          disabled={!isDirty || !isValid}
          sx={submitButtonStyles(theme, isValid)}
        >Salvar</Button>
      </Box>
    </Container>
  )
}
