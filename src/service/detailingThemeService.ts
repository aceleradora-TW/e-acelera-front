import api from "@/lib/api";
import { ApiResponse, DataItem, FieldItem, FilteredDetailingThemeItem, FilteredItem } from "@/types/type";

function isFilteredDetailingThemeItem(field: FieldItem | FilteredItem): field is FilteredDetailingThemeItem {
    return (
        'topicsDescription' in field &&
        'topics' in field &&
        'topicsInfo' in field &&
        'rowId' in field &&
        'title' in field &&
        'description' in field
    );
}

export const getDetailingThemes = async (): Promise<ApiResponse | null> => {

    try {
        const response = await api.get<ApiResponse>("/themes", {
            headers: {
                "uniqueparam": `nocache=${Date.now()}`
            }
        });

        const filteredData: DataItem[] = response.data.data.map((item: DataItem) => {
            if (isFilteredDetailingThemeItem(item.field)) {
                const field: FilteredDetailingThemeItem = {
                    title: item.field.title,
                    description: item.field.description,
                    topicsDescription: item.field.topicsDescription,
                    rowId: item.field.rowId,
                    topics: item.field.topics,
                    topicsInfo: item.field.topicsInfo
                };
    
                return {
                    id: item.field.rowId,
                    field
                };
            }

            return null
            
        }).filter(item => item !== null);

        if (filteredData.length === 0) {
            return null;
        }

        const data: ApiResponse = { data: filteredData };
        console.log(data);
        return data;
    } catch (error) {
        return null;
    }
};
