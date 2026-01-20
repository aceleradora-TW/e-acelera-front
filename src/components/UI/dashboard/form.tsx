import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import { ThemeFormData, themeFormDefs } from "./forms/defs/theme.defs"


export default function Form() {
  const { handleSubmit, control, reset } = useForm<ThemeFormData>({
    defaultValues: themeFormDefs.defaultValues
  })

  const onSubmit: SubmitHandler<ThemeFormData> = (data) => console.log(data)

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
            border: "solid 0.5px ",
            
          }}
        >
          Cancelar
        </Button>
        <Button type="submit"
          sx={{
            border: "solid 0.5px"
          }}
        >Salvar</Button>
      </Box>
    </Container>
  )
}