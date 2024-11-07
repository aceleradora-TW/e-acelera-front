import api from "@/lib/api";
import { ApiResponse, DataItem, FilteredItem } from "@/types/type";



export const getThemes = async (): Promise<ApiResponse> => {

    const response = await api.get<ApiResponse>("/themes");
    
    const filteredData: DataItem[] = response.data.data.map((item: any) => {
        
        const field: FilteredItem =  {
            title: item.field.title,
            cardDescription: item.field.cardDescription,
            image: item.field.image || null,
            category: item.field.category,
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