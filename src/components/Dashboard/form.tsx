"use client"
//import { Form } from 'next/';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ApiResponse, DataItem } from "../../types/type";

/*type formPageProps = {
    SearchParams?:{
        query?: string;
    }
}
    */
export default function FormPage(){
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
    <div>
      <h1>Busca</h1>

      <form action="/form">
        <input name="query" defaultValue={query} placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </form>

      {loading && <p>Carregando...</p>}

      {!loading && data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: any) => (
              <tr key={item.id} className="text-gray-700 hover:bg-gray-50">
                <td className="p-3 border-r border-gray-300">{item.title}</td>
                <td className="p-3 border-r border-gray-300">{item.shortDesc}</td>
                <td className="p-3 border-r border-gray-300">{item.description}</td>
                <td className="p-3 border-r border-gray-300">Conteudo</td>
                <td className="p-3 border-r border-gray-300">Conteudo</td>
                <td className="p-3">Conteudo</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && data.length === 0 && query && <p>Nenhum resultado encontrado</p>}
    </div>
  );
}



/*"use client"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Box 
} from "@mui/material";

export default function Form() {
 
  const rows = Array(6).fill({
    titulo: "Conteudo",
    shorDescription: "Conteudo",
    description: "Conteudo",
  });

  return (
    <Box sx={{ p: 3 }}>
      <TableContainer 
        component={Paper} 
        sx={{ 
          borderRadius: 0, 
          boxShadow: 'none', 
          border: '1px solid #B0C4DE' 
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="tabela de dados">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#004a7c" }}>
              <TableCell sx={headerStyle}>Titulo</TableCell>
              <TableCell sx={headerStyle}>shorDescription</TableCell>
              <TableCell sx={headerStyle}>Description</TableCell>
              <TableCell sx={headerStyle}>Titulo</TableCell>
              <TableCell sx={headerStyle}>Titulo</TableCell>
              <TableCell sx={headerStyle}>Titulo</TableCell>
              <TableCell sx={{ ...headerStyle, borderRight: 'none' }}>Titulo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={cellStyle}>{row.titulo}</TableCell>
                <TableCell sx={cellStyle}>{row.shorDescription}</TableCell>
                <TableCell sx={cellStyle}>{row.description}</TableCell>
                <TableCell sx={cellStyle}>Conteudo</TableCell>
                <TableCell sx={cellStyle}>Conteudo</TableCell>
                <TableCell sx={cellStyle}>Conteudo</TableCell>
                <TableCell sx={{ ...cellStyle, borderRight: 'none' }}>Conteudo</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const headerStyle = {
  color: "white",
  fontWeight: "bold",
  fontSize: "0.9rem",
  borderRight: "1px solid rgba(255, 255, 255, 0.2)", 
  padding: "12px 16px"
};

const cellStyle = {
  borderRight: "1px solid #B0C4DE", 
  color: "#333",
  padding: "12px 16px"
};

*/

//Mile
//oi
// Não sei mais oq fazer testa isso pra ver kkkkk
// Tô no layout agora pra testar kkkkkkkk
//cada vez que pergunto pro gemini, ele responde algo diferente de tudo o que vcs estão fazendo
// somos esses q peu e Amanda tá corrigindo kkkkk - kkkkkkkkkkkkkkkkkkk
//eita, como é que testa, qual rota a gente coloca?

// O gpt mandou criar esse componente Server Component para chamar query, ou fazer useEffect e useState será???
//eu vi isso aqui, ele falou sobre criar usando o form como no html ou usando hooks mesmo
// vamos fazer o hooks para testar {/* <Blz></Blz> } //kkkkkkkkkkkk


//intervalo


// Deu certo?
// não deu mais erro, vou tentar descobrir porque não conseguimos usar o componente nativo
// e porque esse dá certo
// e qualquer coisa a gente segue por esse e desenvolve o nosso 
// Olhei no Gpt e não entendi nada kkkk
// Pois é, ele me disse que não pode usar o nativo e ao mesmo tempo disse que a doc está certa
// Deu npm i ai?
//não, vou dar agora

// Testa ai pra ver o que vai dar





/* exemplo do google
app/page.tsx (Este é um Server Component por padrão)
import { createItem } from './actions'; // Importe a ação

export default function Page() {
  return (
    <form action={createItem}>
      <label htmlFor="name">Nome:</label>
      <input type="text" id="name" name="name" required />
      
      <label htmlFor="description">Descrição:</label>
      <textarea id="description" name="description" rows={4} />

      <button type="submit">Enviar</button>
    </form>
  );
}

*/