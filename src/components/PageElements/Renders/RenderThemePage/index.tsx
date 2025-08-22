import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { PageThemesContent } from "../../Content/PageThemesContent";
import { LayoutPage } from "../../LayoutPage";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { GlobalContextProvider } from "@/context/global.context";
import { headers } from "next/headers";

export const RenderThemePage = (category: string) => {
    console.log("RenderThemePage category:", category);
    const { data: renderData, isLoading: loading, error: error } = useFetchData('/api/backend/getFilterTheme',{
        headers: {
            "themeType": category
        }
    });
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
