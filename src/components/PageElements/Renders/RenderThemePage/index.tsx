import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { PageThemesContent } from "../../Content/PageThemesContent";
import { LayoutPage } from "../../LayoutPage";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { GlobalContextProvider } from "@/context/global.context";

export const RenderThemePage = (category: string) => {
    const { data: renderData, isLoading: loading, error: error } = useFetchData('/api/stackbyApi/Themes');
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <BadRequest />
    }
    if (!renderData) {
        return <NoData/>
    }
    return (
        <GlobalContextProvider>
            <LayoutPage>
                <PageThemesContent data={renderData} category={category} />
            </LayoutPage>
        </GlobalContextProvider>
    )
}
