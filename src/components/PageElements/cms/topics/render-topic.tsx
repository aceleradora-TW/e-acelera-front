import { Column, TableCMS } from "@/components/UI/cms/table-cms";
import { UpperBanner } from "@/components/UI/cms/upper-banner";
import { getThemes } from "@/utils/api/themes";
import { getTopics } from "@/utils/api/topics";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const columns: Column[] = [
  { id: "id", label: "ID" },
  { id: "title", label: "Título" },
  { id: "themeTitle", label: "Tema" },
  { id: "shortDescription", label: "Descrição curta" },
  { id: "isActive", label: "Ativo" }
];

export default function RenderCmsPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [themesMap, setThemesMap] = useState<Record<string, string>>({});
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);

  useEffect(() => {
    async function fetchThemes() {
      try {
        let allThemes: any[] = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const res = await getThemes(page, 50);
          allThemes = [...allThemes, ...res.data];
          
          if (res.meta && res.meta.total) {
            hasMore = allThemes.length < res.meta.total;
          } else {
            hasMore = res.data.length === 100;
          }
          
          page++;
        }

        const map = allThemes.reduce((acc: Record<string, string>, theme: any) => {
          acc[theme.id] = theme.title;
          return acc;
        }, {});
        setThemesMap(map);
      } catch (error) {
        console.error("Erro ao buscar temas:", error);
      }
    }
    fetchThemes();
  }, []);

  useEffect(() => {
    async function fetchTopics() {
      try {
        const res = await getTopics(page + 1, pageSize);

        const mappedRows = res.data.data.map((topic: any) => ({
          ...topic,
          themeTitle:
            topic.theme?.title ?? themesMap[topic.themeId] ?? topic.themeId ?? "",
        }));

        setRows(mappedRows);
        setRowCount(res.data.meta.total);
      } catch (error) {
        console.error("Erro ao buscar tópicos:", error);
      }
    }
    fetchTopics();
  }, [page, pageSize, themesMap]);

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
