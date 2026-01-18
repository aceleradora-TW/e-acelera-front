"use client";
//import { Form } from 'next/';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ApiResponse, DataItem } from "../../types/type";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { InputDashboard } from "./input";
import { ClickButton } from "../ClickButton";

/*type formPageProps = {
    SearchParams?:{
        query?: string;
    }
}
    */


export default function FormPage() {
  const searchParams = useSearchParams();
  const query = searchParams?.get("query") || "";
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    fetch(`/api/meus-dados?query=${query}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setLoading(false));
  }, [query]);

  return (
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
    >
      <Typography variant="h6" fontWeight={600}>
        Cadastro
      </Typography>

      <InputDashboard  label="Titulo editar" value="conteudo" onChange={() => console.log('teste do criar')} />
      <InputDashboard  label="Titulo ler" value="Somente leitura" InputProps={{ readOnly: true }} />
      <InputDashboard  label="Titulo criar" onChange={() => console.log('teste do criar')}/>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 2,
          mt: 2,
        }}
      >

        <ClickButton title="Cancelar" click={() => console.log('test')} />
        <ClickButton title="Salvar" click={() => console.log('test')} isActive />

      </Box>
    </Container>
  );
}

/*
#### codigo test chat

type FormMode = "create" | "edit" | "read";

type FormField = { name: string; label: string; value?: string; multiline?: boolean; rows?: number; };
const field: FormField[] = [
  { name: "title", label: "Título", value: "Título do banco" },
  { name: "shortDescription", label: "Descrição curta", value: "Texto curto do banco" },
  { name: "description", label: "Descrição longa", value: "Texto longo do banco", multiline: true, rows: 4 },
];


export default function FormPage({
  mode,
  fields,
}: {
  mode: FormMode;
  fields: FormField[];
}) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = mode === "create" ? "" : field.value || "";
      return acc;
    }, {} as Record<string, string>)
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Dados salvos:", formData);
  };

  return (
    <Container component="form" sx={{ p: 4, backgroundColor: "#fff" }}>
      {fields.map((field) => (
        <InputDashboard
          key={field.name}
          label={field.label}
          value={formData[field.name]}
          onChange={handleChange}
          InputProps={{readOnly: mode === "read"}}
          multiline={field.multiline}
          rows={rows}
        />
      ))}

      {mode !== "read" && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <ClickButton title="Cancelar" click={() => console.log("cancelar")} />
          <ClickButton
            title={mode === "create" ? "Criar" : "Salvar"}
            click={handleSave}
            isActive
          />
        </Box>
      )}
    </Container>
  );
}








/*

      <TextField
        id="outlined-helperText"
        label="Helper text"
        defaultValue="Default Value"
      />
      <TextField id="outlined-search" label="Search field" type="search" />
      <TextField
        id="outlined-read-only-input"
        label="Read Only"
        defaultValue="ola"
        InputProps={{ readOnly: true }}
      />

      <TextField
        label="Short Description"
        fullWidth
        sx={{
          "& .MuiInputBase-root": {
            height: 40,
          },
          "& input": {
            padding: "10px 12px",
          },
        }}
      />

      <TextField
        label="Description"
        fullWidth
        multiline
        sx={{
          "& .MuiInputBase-root": {
            alignItems: "flex-start",
          },
          "& textarea": {
            padding: "10px 12px",
          },
        }}
        rows={5}
      />
      */