import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { ThemeFormData, themeFormDefs } from "./forms/defs/theme.defs"
import { useTheme } from "@mui/material/styles";


export default function Form() {
  const { handleSubmit, control, reset, formState: { isDirty }, } = useForm<ThemeFormData>({
    defaultValues: themeFormDefs.defaultValues
  })

  const onSubmit: SubmitHandler<ThemeFormData> = (data) => console.log(data)
  const theme = useTheme();

  return (
    
      <Container
      component="form"
      maxWidth="xl"
      sx={{
        mt: 6,
        backgroundColor: "#fff",
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
            rules={{ required: true }}
            render={({field: rhfField}) => (field.type === "text" ? <TextField  label={field.label} {...rhfField} /> : <TextField  label={field.label} multiline rows={5} {...rhfField} />)}
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
              "primary.dark" : "#E0E0E0",
            },
          }}
        >
          Cancelar
        </Button>

        <Button type="submit"
          disabled={!isDirty}
          sx={{
            border: "0.5px solid",
            backgroundColor: isDirty ? theme.palette.buttonFormColor?.blue : "#E0E0E0",
            color: isDirty ? "#fff" : "#9E9E9E",
            "&:hover": {
              backgroundColor: isDirty ? "primary.dark" : "#E0E0E0",
            },
          }}
        >Salvar</Button>
      </Box>
    </Container>
  )
}