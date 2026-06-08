"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import { actionsContainerStyles,archiveButtonStyles, cancelButtonStyles, returnToList, textFieldStyles, textFieldsContainerStyles } from "@/components/UI/dashboard/forms/form.styles";
import { CmsExercise } from "@/types/type";

interface Props {
  id: string;
  onArchive?: (id: string) => void;
}

export default function DetailExercise({ id, onArchive }: Props) {
  const [exercise, setExercise] = useState<CmsExercise | undefined>(undefined);
  const muiTheme = useTheme();
  const router = useRouter();

  const fetchExercise = useCallback(async () => {
    try {
      const url = `/api/exercises/getExerciseById`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          id,
        },
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);

      const data = await response.json();

      console.log("RESPOSTA DA API:", data);


      setExercise(data.data);
    } catch (error) {
      console.error("Erro ao buscar exercício:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchExercise();
  }, [fetchExercise]);

  return (
    <Box>
      <UpperBanner
        title={exercise?.title || "Exercícios"}
        showBreadCrumb
        breadCrumbLabel={exercise?.title}
        editButton
      />

      <Box sx={textFieldsContainerStyles}>
        <TextField
          label="Título"
          value={exercise?.title || ""}
          InputProps={{
            readOnly: true,
          }}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição"
          value={exercise?.description || ""}
          InputProps={{
            readOnly: true,
          }}
          multiline
          rows={4}
          sx={textFieldStyles}
        />

        <TextField
          label="Descrição curta"
          value={exercise?.shortDescription || ""}
          InputProps={{
            readOnly: true,
          }}
          multiline
          rows={2}
          sx={textFieldStyles}
        />
        <TextField
          label="Tópico"
          value={exercise?.topic || ""}
          InputProps={{
            readOnly: true,
          }}
          sx={textFieldStyles}
        />

        <TextField
          label="Status"
          value={exercise?.isActive ? "Ativo" : "Inativo"}
          InputProps={{
            readOnly: true,
          }}
          sx={textFieldStyles}
        />

      </Box>

      <Box sx={actionsContainerStyles}>
        <Button
          variant="contained"
          sx={returnToList(muiTheme)}
          onClick={() => router.push("/cms/exercises")}
        >
          VOLTAR PARA LISTA
        </Button>
      </Box>

      {/* <Box sx={actionsContainerStyles}>
        <Button
          variant="contained"
          sx={archiveButtonStyles(muiTheme)}
          onClick={() => onArchive && onArchive(id)}
        >
          Arquivar
        </Button>
        <Button
          variant="outlined"
          sx={cancelButtonStyles(muiTheme)}
          onClick={() => router.back()}
        >
          Cancelar
        </Button>
      </Box> */}
    </Box>
  );
}   