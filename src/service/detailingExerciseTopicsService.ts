import api from "@/lib/api";
import { ApiResponse, DataItem, FieldItem, FilteredItem, FilteredTopicsItem } from "@/types/type";

function isFilteredTopicsItem(field: FieldItem | FilteredItem): field is FilteredTopicsItem {
    return (
        'exercises' in field &&
        'exercisesDescription' in field &&
        'exercisesInfo' in field &&
        'rowId' in field
    );
}

export const getTopicsExercise = async (): Promise<ApiResponse | null> => {
    try {
        const response = await api.get<ApiResponse>("/topics", {
            headers: {
                "uniqueparam": `nocache=${Date.now()}`
            }
        });

        const filteredData: DataItem[] = response.data.data.map((item: DataItem) => {
            if (isFilteredTopicsItem(item.field)) {
                const field: FilteredTopicsItem = {
                    exercises: item.field.exercises,
                    exercisesDescription: item.field.exercisesDescription,
                    exercisesInfo: item.field.exercisesInfo,
                    rowId: item.field.rowId
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
        return data;
    } catch (error) {
        return null;
    }
};
