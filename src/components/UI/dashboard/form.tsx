import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { ThemeFormData, ThemeFormSchema, themeFormDefs } from "./forms/defs/theme.defs"
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@mui/material/styles";

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
      sx={{
        mt: 6,
        backgroundColor: theme.palette.buttonHover?.contrastText,
        borderRadius: "12px",
        p: 4,
        boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: "100%",
      }}
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
            render={({ field: rhfField, fieldState }) => (
              <TextField
                {...rhfField}
                label={field.label}
                multiline={field.type === "textarea"}
                rows={field.type === "textarea" ? 5 : undefined}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                fullWidth
              />
            )}
          />
        ))
      }

      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: { xs: "right", md: "right" },
        }}
      >
        <Button type="button"
          sx={{
            border: "0.5px solid red",
            color: theme.palette.buttonFormColor?.red,
            "&:hover": {
              backgroundColor: theme.palette.buttonFormColor?.red,
              color: theme.palette.buttonHover?.contrastText,
              borderColor: theme.palette.buttonFormColor?.red,
            },
          }}
        >
          Cancelar
        </Button>

        <Button type="submit"
          disabled={!isDirty || !isValid}
          sx={{
            border: "0.5px solid",
            backgroundColor: isValid ? theme.palette.buttonFormColor?.blueBackground : theme.palette.buttonFormColor?.lightGray,
            color: isValid ? theme.palette.buttonHover?.contrastText : theme.palette.buttonFormColor?.gray,
            "&:hover": {
              backgroundColor: isValid ? "primary.dark" : theme.palette.accent?.blue
            },
          }}
        >Salvar</Button>
      </Box>
    </Container>
  )
}

/*function zodResolver(ThemeFormSchema: any): import("react-hook-form").Resolver<{ title: string; shortDescription: string; description: string; }, any, { title: string; shortDescription: string; description: string; }> | undefined {
  throw new Error("Function not implemented.");
}*/
