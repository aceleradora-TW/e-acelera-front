import { Column, TableCMS } from "@/components/UI/cms/table-cms";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import { getTopics } from "@/utils/api/topics";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const columns: Column[] = [
  { id: "id", label: "ID" },
  { id: "title", label: "Título" },
  { id: "themeTitle", label: "Tema" },
  { id: "shortDescription", label: "Descrição curta" },
  { id: "themeID", label: "ID do tema" },
];

export default function RenderCmsPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const res = await getTopics(page + 1, pageSize);

        setRows(res.data.data);
        setRowCount(res.data.meta.total);
      } catch (error) {
        console.error("Erro ao buscar tópicos:", error);
      } 
    }
    fetchTopics();
  }, [page, pageSize]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={"36px"}
      sx={{ width: "100%"}}
    >
      <UpperBanner 
        title="CMS - Tópicos"   
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
