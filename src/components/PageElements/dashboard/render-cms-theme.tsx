import { TableDashboard } from "@/components/UI/dashboard/table-dashboard";
import { UpperBanner } from "@/components/UI/dashboard/upper-banner";
import { getThemes } from "@/utils/api/themes";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const columns = [
  { id: "title", label: "Título" },
  { id: "shortDescription", label: "Descrição curta" },
  { id: "description", label: "Descrição" },
  { id: "sequence", label: "Sequência" },
  { id: "category", label: "Categoria" },
  { id: "isActive", label: "Ativo" },
];

export default function RenderCmsPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    async function fetchThemes() {
      try {
        const res = await getThemes(page + 1, pageSize);
        setRows(res.data);
        setRowCount(res.meta.total);
      } catch (error) {
        console.error("Erro ao buscar temas:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchThemes();
  }, [page, pageSize]);

  return (
    <>
      <UpperBanner title="CMS - Themes" menuBanner createButton />
      {loading ? (
        <Typography variant="h6" sx={{ padding: "32px", textAlign: "left" }}>
          Carregando dados...
        </Typography>
      ) : (
        <TableDashboard
          columns={columns}
          rows={rows}
          page={page}
          pageSize={pageSize}
          rowCount={rowCount}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      )}
    </>
  );
}
