import api from "@/lib/api";
import { ApiResponse, DataItem, FilteredItem } from "@/types/type";



export const getThemes = async (): Promise<ApiResponse> => {

    const response = await api.get<ApiResponse>("/themes"); 
    
 
    const filteredData: DataItem[] = response.data.data.map((item: any) => {
        
        const field: FilteredItem =  {
            title: item.field.title,
            description: item.field.description,
            topicsDescription: item.field.topicsDescription,
            rowId: item.field.rowId,
            topics:item.field.topics,
            topicsInfo:item.field.topicsInfo
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

