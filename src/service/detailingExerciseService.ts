import api from "@/lib/api";
import { ApiResponse, DataItem, FieldItem, FilteredDetailingExerciseItem, FilteredItem } from "@/types/type";

function isFilteredDetailingExerciseItem(field: FieldItem | FilteredItem): field is FilteredDetailingExerciseItem {
    return (
        'title' in field &&
        'description' in field &&
        'rowId' in field
    );
}

export const getExercises = async (): Promise<ApiResponse | null> => {
    try {
        const response = await api.get<ApiResponse>("/exercises", {
            headers: {
                "uniqueparam": `nocache=${Date.now()}`
            }
        });

        const filteredData: DataItem[] = response.data.data.map((item: DataItem)=> {
            if (isFilteredDetailingExerciseItem(item.field)) {
                const field: FilteredDetailingExerciseItem = {
                    title: item.field.title,
                    description: item.field.description,
                    rowId: item.field.rowId
                };
    
                return {
                    id: item.field.rowId,
                    field
                };
            }

            return null;
            
        }).filter(item => item !== null);

        if (filteredData.length === 0) {
            return null;
        }

        const data: ApiResponse = { data: filteredData };
        return data;

    } catch (error) {
        return null;
    }
};
