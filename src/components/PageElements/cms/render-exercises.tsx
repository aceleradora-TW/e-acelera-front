"use client";

import { UpperBanner } from "@/components/UI/cms/upper-banner";
import { TableCMS } from "@/components/UI/cms/table-cms";
import { getExercises } from "@/utils/api/exercises";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const columns = [
  { id: "id", label: "ID" },
  { id: "title", label: "Título" },
  { id: "shortDescription", label: "Descrição curta" },
  { id: "topic", label: "Tópico" },
  { id: "theme", label: "Tema" },
  { id: "isActive", label: "Ativo" },
];

export default function RenderCmsPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    async function fetchExercises() {
      try {
        const res = await getExercises(page + 1, pageSize);

        setRows(res.data.data);
        setRowCount(res.data.meta.total);
        
      } catch (error) {
        console.error("Erro ao buscar exercícios:", error);
      }
    }
    fetchExercises();
  }, [page, pageSize]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={"36px"}
      sx={{ width: "100%" }}
    >
      <UpperBanner
        title="CMS - Exercícios"
        menuBanner
        createButton
      />
      <TableCMS
        columns={columns}
        rows={rows}
        page={page}
        pageSize={pageSize}
        rowCount={rowCount}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </Box>
  );
}   