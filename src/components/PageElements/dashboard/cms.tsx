import { TableDashboard} from "@/components/UI/dashboard/table-dashboard"
import { UpperBanner } from "@/components/UI/dashboard/upper-banner"
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

    useEffect(() => { async function fetchThemes() { try {
         const res = await fetch("http://localhost:5002/themes"); 
         const result = await res.json(); 
         setRows(result.data); 
        } catch (error) { 
            console.error("Erro ao buscar temas:", error); 
        } finally { 
            setLoading(false); 
        } } fetchThemes(); 
    }, []);
    
    return (
        <>
          <UpperBanner title="CMS" menuBanner createButton />
                {loading ? (
                <p>Carregando dados...</p>
            ) : (
          <TableDashboard columns={columns} rows={rows} />
           )}
        </>
    )
}

