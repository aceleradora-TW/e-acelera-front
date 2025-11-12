"use client";
import { Loading } from "@/components/Loading";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { GlobalContextProvider } from "@/context/global.context";
import { useThemeApi } from '@/hooks/useThemeApi';
import { PageThemesContent } from "../../Content/PageThemesContent";
import { LayoutPage } from "../../LayoutPage";

export const RenderThemePage = ({ category }: { category: string }) => {
  const { data: themes, loading, error } = useThemeApi(category);

  if (loading) return <Loading />;
  if (error) return <BadRequest />;
  if (!themes || !themes.data || themes.data.length === 0) return <NoData />;

  return (
    <GlobalContextProvider>
      <LayoutPage>
        <PageThemesContent data={themes} category={category} />
      </LayoutPage>
    </GlobalContextProvider>
  );
};






// export const RenderThemePage = (category: string) => {
//   const [themes, setThemes] = useState<ApiResponse | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     getThemes()
//       .then((data: Theme[]) => {
//         const filtered = data.filter((t) => t.category === category);
//         const mappedData: DataItem[] = filtered.map((t) => ({
//           id: String(t.id),
//           field: {
//             rowId: String(t.id),
//             sequence: t.sequence || 0,
//             isConfigure: 0,
//             favourite: 0,
//             totalItems: null,
//             completedItems: null,
//             dueDateTimestamp: null,
//             checklistId: null,
//             remainderId: null,
//             updatedAt: new Date().toISOString(),
//             createdAt: new Date().toISOString(),
//             title: t.title,
//             description: t.description || "",
//             category: t.category || "",
//             topicsInfo: t.topics_info || "",
//             cardDescription: t.card_description || "",
//             image: t.image
//               ? [{ filename: t.image, type: "image", url: `/images/themes/${t.image}` }]
//               : null,
//             topics: t.topics || "",
//             topicsDescription: t.topics_description || "",
//             alt: t.alt || "",
//           } as ThemeField,
//         }));

//         setThemes({ data: mappedData });
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(true);
//       })
//       .finally(() => setLoading(false));
//   }, [category]);

//   if (loading) return <Loading />;
//   if (error) return <BadRequest />;
//   if (!themes || themes.data.length === 0) return <NoData />;

//   return (
//     <GlobalContextProvider>
//       <LayoutPage>
//         <PageThemesContent data={themes} category={category} />
//       </LayoutPage>
//     </GlobalContextProvider>
//   );
// };





// export const RenderThemePage = (category: string) => {
//   const [themes, setThemes] = useState<ApiResponse | null>(null);
//   //const [loading, setLoading] = useState(true);
//   //const [error, setError] = useState(false);

//   const flag = true;
//   const { data: renderData, isLoading:loading, error: error } = flag ? useFetchData(`http://localhost:5002/themes`): useFetchData(`/api/stackbyApi/Themes`, {
//             headers: {
//                 operator: "equal",
//                 column: "category",
//                 value: category,
//             },
//     });

//   // useEffect(() => {
//   //   getThemes()
//   //     .then((data: Theme[]) => {
//   //
//         const filtered = flag ? renderData : (renderData as unknown as Theme[]).filter((t) => t.category === category);
//         const mappedData: DataItem[] = flag ? filtered : (filtered as unknown as Theme[]).map((t) => ({
//           id: String(t.id),
//           field: {
//             rowId: String(t.id),
//             sequence: t.sequence || 0,
//             isConfigure: 0,
//             favourite: 0,
//             totalItems: null,
//             completedItems: null,
//             dueDateTimestamp: null,
//             checklistId: null,
//             remainderId: null,
//             updatedAt: new Date().toISOString(),
//             createdAt: new Date().toISOString(),
//             title: t.title,
//             description: t.description || "",
//             category: t.category || "",
//             topicsInfo: t.topics_info || "",
//             cardDescription: t.card_description || "",
//             image: t.image
//               ? [{ filename: t.image, type: "image", url: `/images/themes/${t.image}` }]
//               : null,
//             topics: t.topics || "",
//             topicsDescription: t.topics_description || "",
//             alt: t.alt || "",
//           } as ThemeField,
//         }));

//         setThemes({ data: mappedData });
//   //     })
//   // }, [category]);

//   if (loading) return <Loading />;
//   if (error) return <BadRequest />;
//   if (!themes || themes.data.length === 0) return <NoData />;
//   console.log("useFetchData/themes", renderData);
//   console.log("getThemes/themes", themes);

//   return (
//     <GlobalContextProvider>
//       <LayoutPage>
//         <PageThemesContent data={themes} category={category} />
//       </LayoutPage>
//     </GlobalContextProvider>
//   );
// };



// export const RenderThemePage = (category: string) => {
//     const { data: renderData, isLoading: loading, error: error } = useFetchData(`/api/stackbyApi/Themes`, {
//             headers: {
//                 operator: "equal",
//                 column: "category",
//                 value: category,
//             },
//     });
//     if (loading) {
//         return <Loading />
//     }
//     if (error) {
//         return <BadRequest />
//     }
//     if (!renderData) {
//         return <NoData/>
//     }
//     return (
//         <GlobalContextProvider>
//             <LayoutPage>
//                 <PageThemesContent data={renderData} category={category} />
//             </LayoutPage>
//         </GlobalContextProvider>
//     )
// }




