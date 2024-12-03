import api from "@/lib/api";
import { ApiResponse, DataItem, FilteredItem } from "@/types/type";

interface Item {
    field: {
        title: string;
        description: string;
        rowId: string;
    };
}

export const getExercises = async (): Promise<ApiResponse | null> => {

    try {
        const response = await api.get<ApiResponse>("/exercises", {
            headers: {
                "uniqueparam": `nocache=${Date.now()}`
            }
        });


        const filteredData: DataItem[] = response.data.data.map((item: Item) => {

            const field: FilteredItem = {
                title: item.field.title,
                description: item.field.description,
                rowId: item.field.rowId
            }
            return {
                id: item.field.rowId,
                field
            }
        });



        const data: ApiResponse = { data: filteredData };
        return data;
    } catch (error) {
        return null
    }

};

