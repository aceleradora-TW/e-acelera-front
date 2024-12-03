import api from "@/lib/api";
import { ApiResponse, DataItem, FilteredItem } from "@/types/type";

interface Item {
    field: {
        title: string;
        description: string;
        topicsDescription: string;
        rowId: string;
        topics: string;
        topicsInfo: string;
    };
}

export const getDetailingThemes = async (): Promise<ApiResponse | null> => {

    try {
        const response = await api.get<ApiResponse>("/themes", {
            headers: {
                "uniqueparam": `nocache=${Date.now()}`
            }
        });


        const filteredData: DataItem[] = response.data.data.map((item: Item) => {

            const field: FilteredItem = {
                title: item.field.title,
                description: item.field.description,
                topicsDescription: item.field.topicsDescription,
                rowId: item.field.rowId,
                topics: item.field.topics,
                topicsInfo: item.field.topicsInfo
            }
            return {
                id: item.field.rowId,
                field
            }
        });

        const data: ApiResponse = { data: filteredData };
        return data;
    } catch (error) {
        return null;
    }
};

