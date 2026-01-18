import { Controller, SubmitHandler, useForm } from "react-hook-form"
import {InputDashboard} from "@/components/Dashboard/input"
import { Container, TextField, Typography } from "@mui/material"

interface IFormInputs {
  title: string
  shortDescription: string
}

//o formulario é dinâmico e devemos ter um arquivo a parte para dizer qual o tipo de formulario que estamos chamnado
export default function Form() {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: {
      title: "",
      shortDescription: "",
    },
  })
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <Container
      // maxWidth="sm"
      component="form"
      maxWidth="xl"
      sx={{
        // pt: 4, pb: 1,
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
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input defaultplaceholder="test" {...register("example")} /> */}
      {/* <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" placeholder={"Title"} />

        <label htmlFor="shortDescription">ShortDescription</label>
        <input id="shortDescription" type="text" placeholder={"ShortDescription"} />

        <label htmlFor="description">Description</label>
        <input id="description" type="text" placeholder={"Description"} />
      </div> */}
      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
        <Controller
          name="nome"
          control={control}
          rules={{ required: true }}
          render={({field}) => <TextField  label="Titulo" {...field} />}
        />
        <Controller
          name="shortDescription"
          control={control}
          rules={{ required: true }}
          render={({field}) => <TextField  label="Descrição pequena" {...field} />}
        />
      {/* <InputDashboard  label="Titulo ler" value="Somente leitura" InputProps={{ readOnly: true }} /> */}
      {/* <InputDashboard  label="Titulo criar" onChange={() => console.log('teste do criar')}/> */}
        <button type="button">Cancelar</button>
        <button type="button">Salvar</button>
        <input type="submit" />
      {/* <input type="submit" /> */}
    </Container>
  )
}