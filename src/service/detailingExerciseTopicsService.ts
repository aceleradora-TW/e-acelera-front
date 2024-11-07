import api from "@/lib/api";
import { ApiResponse, DataItem, FilteredItem } from "@/types/type";

export const getTopicsExercise = async (): Promise<ApiResponse> => {

    const response = await api.get<ApiResponse>("/topics", {
        headers: {
            "uniqueparam": `nocache=${Date.now()}`
        }
    });


    const filteredData: DataItem[] = response.data.data.map((item: any) => {

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
};