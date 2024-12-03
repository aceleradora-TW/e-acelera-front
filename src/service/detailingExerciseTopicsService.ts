import api from "@/lib/api";
import { ApiResponse, DataItem, FilteredItem } from "@/types/type";

interface Item {
    field: {
        exercises: string;
        exercisesDescription: string;
        exercisesInfo: string;
        rowId: string;
    };
}

export const getTopicsExercise = async (): Promise<ApiResponse | null> => {
    try {
        const response = await api.get<ApiResponse>("/topics", {
            headers: {
                "uniqueparam": `nocache=${Date.now()}`
            }
        });


        const filteredData: DataItem[] = response.data.data.map((item: Item) => {

            const field: FilteredItem = {
                exercises: item.field.exercises,
                exercisesDescription: item.field.exercisesDescription,
                exercisesInfo: item.field.exercisesInfo,
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