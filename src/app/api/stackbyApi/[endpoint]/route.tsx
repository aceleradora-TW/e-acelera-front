import { ApiResponse, ThemeField } from "@/types/type";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { endpoint: string } }) {
    try {
        const apiKey: string = process.env.STACKBY_SECRET_KEY || "";
        const uniqueParam: string = `nocache=${Date.now()}`;
        const endpoint: string = params.endpoint;
        const url: string = `https://stackby.com/api/betav1/rowlist/stqB2IjOCulBJkhrZB/${endpoint}?${uniqueParam}`;

        const response: Response = await fetch(url, {
            method: "GET",
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            return NextResponse.json({
                error: `Erro ao buscar dados da API: ${response.statusText}`
            }, {
                status: response.status
            });
        }

        const data: ApiResponse = await response.json();

        let filteredData;

        // // Verifique se o endpoint é "Themes" antes de filtrar
        // if (endpoint === "Themes") {
        //     filteredData = data.data.map((item: any) => {
        //         const title = item.field.title;
        //         const id = item.id;

        //         // Adicione a lógica para obter a descrição e a imagem se disponíveis
        //         if (item.field && (item.field as ThemeField).cardDescription && (item.field as ThemeField).image) { 
        //             const themeField = item.field as ThemeField;
        //             const cardDescription = themeField.cardDescription;
        //             const image = themeField.image;

        //             return { title, cardDescription, image, id };
        //         }

        //         // Caso o item não tenha cardDescription e image
        //         return { title, id };
        //     });
        // } else {
        //     // Caso não seja o endpoint "Themes", retorne os dados originais
        //     filteredData = data.data; // Use os dados como estão
        // }

        return NextResponse.json(filteredData, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            error: `Erro interno de servidor: ${error}`
        }, {
            status: 500
        });
    }
}


// import useFetchData from "@/components/fetchData";
// import { useState } from "react";
// import { Loading } from "@/components/Loading";
// import { PageThemesContent } from "../../Content/PageThemesContent";
// import { LayoutPage } from "../../LayoutPage";
// import { BadRequest } from "@/components/BadRequest";
// import { NoData } from "@/components/NoData";

// export const RenderThemePage = (category: string) => {
//     const { data: renderData, isLoading: loading, error: error } = useFetchData('/api/stackbyApi/Themes');
//     const [topicsData, setTopicsData] = useState(null);
//     const [loadingTopics, setLoadingTopics] = useState(false);
//     const [topicsError, setTopicsError] = useState(false);

//     // Função para carregar os tópicos quando necessário
//     const fetchTopics = async (themeId: string) => {
//         setLoadingTopics(true);
//         try {
//             const response = await fetch(`/api/stackbyApi/Themes/${themeId}/Topics`);
//             const data = await response.json();
//             setTopicsData(data);
//             setLoadingTopics(false);
//         } catch (error) {
//             setTopicsError(true);
//             setLoadingTopics(false);
//         }
//     };

//     if (loading) {
//         return <Loading />
//     }
//     if (error) {
//         return <BadRequest />
//     }
//     if (!renderData) {
//         return <NoData />
//     }

//     return (
//         <LayoutPage>
//             <PageThemesContent 
//                 data={renderData} 
//                 category={category} 
//                 onLoadTopics={fetchTopics}  // Adiciona função para carregar tópicos
//                 topicsData={topicsData}     // Passa os tópicos carregados
//                 loadingTopics={loadingTopics} // Estado de carregamento dos tópicos
//                 topicsError={topicsError}   // Estado de erro nos tópicos
//             />
//         </LayoutPage>
//     );
// };