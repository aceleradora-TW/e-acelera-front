import useFetchData from "@/components/fetchData";
import { Loading } from "@/components/Loading";
import { PageThemesContent } from "../../Content/PageThemesContent";
import { LayoutPage } from "../../LayoutPage";
import { BadRequest } from "@/components/BadRequest";
import { NoData } from "@/components/NoData";
import { ThemeTeste, ApiResponse } from "@/types/type";

export const RenderThemePage = (category: string) => {
    const { data: renderData, isLoading: loading, error: error } = useFetchData(`/api/stackbyApi/Themes?nocache=${Date.now()}&field=ThemeTeste`);

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <BadRequest />
    }
    if (!renderData) {
        return <NoData />
    }

    // const filteredData = renderData.data.map((item) => {
    //     const title = item.field.title;
    //     const id = item.id;

    //     // Verifica se item.field é do tipo ThemeField, garantindo que tem cardDescription e image
    //     if (item.field && (item.field as ThemeField).cardDescription && (item.field as ThemeField).image) { 
    //         const themeField = item.field as ThemeField;
    //         const cardDescription = themeField.cardDescription;
    //         const image = themeField.image;

    //         return { title, cardDescription, image, id };
    //     }

    //     // Caso o item não tenha cardDescription e image
    //     return { title, id };
    // });

    return (
        <LayoutPage>
            <PageThemesContent data={renderData} category={category} />
        </LayoutPage>
    );
};