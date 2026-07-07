"use client";

import { Column, TableCMS } from "@/components/UI/cms/table-cms";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import { getTopics } from "@/utils/api/topics";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import type { GridSortModel } from "@mui/x-data-grid";

const columns = [
  { id: "id", label: "ID" },
  { id: "title", label: "Título" },
  { id: "themeTitle", label: "Tema", sortable: false },
  { id: "shortDescription", label: "Descrição curta" },
  { id: "isActive", label: "Ativo" },
];

export default function RenderCmsPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  const handleSortModelChange = (newModel: GridSortModel) => {
    setSortModel(newModel);
    setPage(0);
  };

  useEffect(() => {
    async function fetchTopics() {
      try {
        const sortBy = sortModel[0]?.field;
        const sortOrder = sortModel[0]?.sort;
        const res = await getTopics(page + 1, pageSize, sortBy, sortOrder);

        const formattedRows = res.data.data.map((topic: any) => ({
          ...topic,
          themeTitle: topic.theme?.title ?? "-",
        }));

        setRows(formattedRows);
        setRowCount(res.data.meta.total);
      } catch (error) {
        console.error("Erro ao buscar tópicos:", error);
      }
    }

    fetchTopics();
  }, [page, pageSize, sortModel]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={"36px"}
      sx={{ width: "100%" }}
    >
      <UpperBanner
        title="CMS - Tópicos"
        menuBanner
        createButton
        showBreadCrumb
      />

      <TableCMS
        columns={columns}
        rows={rows}
        page={page}
        pageSize={pageSize}
        rowCount={rowCount}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
      />
    </Box>
  );
}