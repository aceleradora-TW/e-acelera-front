import api from "@/lib/api";
import { ApiResponse, DataItem, FilteredTopicsItem } from "@/types/type";



export const getTopicsExercise = async (): Promise<ApiResponse> => {

    const response = await api.get<ApiResponse>("/topics"); 
    
 
    const filteredData: DataItem[] = response.data.data.map((item: any) => {
        
        const field: FilteredTopicsItem =  {
            exercises: item.field.exercises,
            exercisesDescription: item.field.exercisesDescription,
            exercisesInfo: item.field.exercisesInfo,
            rowId: item.field.rowId
        }
        
        return { 
            id:item.field.rowId,
            field
        }
    });
    
    
    const data: ApiResponse = { data: filteredData };
    return data;
};