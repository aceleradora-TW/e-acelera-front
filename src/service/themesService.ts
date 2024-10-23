import api from "@/lib/api";
import { GetThemesPayload } from "@/types/themes";
import { ApiResponse, DataItem } from "@/types/type";

interface FilteredThemeItem {
    id: string;
    field: {
        title: string;
        cardDescription: string;
        image: string | null;
        category: string;
        rowId: string;
    };
}

export const getThemes = async (): Promise<ApiResponse> => {

    const response = await api.get<ApiResponse>("/themes"); 
    
        
    const filteredData: FilteredThemeItem[] = response.data.data.slice(0, 5).map((item: any) => ({
        id: item.rowId,
        field: {
            title: item.field.title,
            cardDescription: item.field.cardDescription,
            image: item.field.image || null,
            category: item.field.category,
            rowId: item.field.rowId 
        }
    }));
    

    const data: ApiResponse = { data: filteredData };

    return response.data; 
};
