import api from "@/lib/api";
import { ApiResponse, DataItem, FilteredDetailingExerciseItem } from "@/types/type";



export const getExercises = async (): Promise<ApiResponse> => {

    const response = await api.get<ApiResponse>("/exercises"); 
    
 
    const filteredData: DataItem[] = response.data.data.map((item: any) => {
        
        const field: FilteredDetailingExerciseItem =  {
            title: item.field.title,
            description: item.field.description,            
            rowId: item.field.rowId
        }
        return { 
            id:item.field.rowId,
            field
        }
    });
    
    
    
    const data: ApiResponse = { data: filteredData };
    console.log(data)
    return data;
};

