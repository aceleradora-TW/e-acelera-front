/*"use client";
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

/*
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

    "use client";

import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { InputDashboard } from "./input";
import { ClickButton } from "../ClickButton";
import { customStyles } from "@/app/config/themes/components";

export default function FormPage() {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");

  function handleSave() {
    console.log({ title, shortDescription, description });
  }

  function handleCancel() {
    console.log("cancelar");
  }

  return (
    <Container maxWidth="xl" sx={customStyles.FormPage.container}>
      <Typography variant="h6" sx={customStyles.FormPage.title}>
        Themes
      </Typography>

      <InputDashboard
        label="Título"
        value={title}
        mode="edit"
        onChange={(e) => setTitle(e.target.value)}
      />

      <InputDashboard
        label="shortDescription"
        mode="new"
        value={shortDescription}
        onChange={(e) => setShortDescription(e.target.value)}
      />

      <InputDashboard
        label="description"
        mode="read"
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        InputProps={{ readOnly: true }}
      />

      <Box sx={customStyles.FormPage.actions}>
        <ClickButton title="Cancelar" click={handleCancel} />
        <ClickButton title="Salvar" click={handleSave} isActive />
      </Box>
    </Container>
  );
}
