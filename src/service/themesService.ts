import api from "@/lib/api";
import { ApiResponse, DataItem, FieldItem, FilteredItem, FilteredThemeItem } from "@/types/type";

function isFilteredThemeItem(field: FieldItem | FilteredItem): field is FilteredThemeItem {
    return (
        'title' in field &&
        'cardDescription' in field &&
        'image' in field &&
        'category' in field &&
        'alt' in field &&
        'rowId' in field
    );
}

export const getThemes = async (): Promise<ApiResponse | null> => {
    try {
        const response = await api.get<ApiResponse>("/themes", {
            headers: {
                "uniqueparam": `nocache=${Date.now()}`
            }
        });

        const filteredData: DataItem[] = response.data.data
            .map((item: DataItem) => {
                if (isFilteredThemeItem(item.field)) {
                    const field: FilteredThemeItem = {
                        title: item.field.title,
                        cardDescription: item.field.cardDescription,
                        image: item.field.image,
                        category: item.field.category,
                        alt: item.field.alt,
                        rowId: item.field.rowId,
                    };
                    return {
                        id: item.field.rowId,
                        field,
                    };
                }
                return null;
            })
            .filter((item) => item !== null);

        if (filteredData.length === 0) {
            return null;
        }

        const data: ApiResponse = { data: filteredData };
        return data;

    } catch (error) {
        console.error(error);
        return null;
    }
};
