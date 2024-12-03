import api from "@/lib/api";
import { ApiResponse, DataItem, FilteredItem, Image } from "@/types/type";

interface Item {
    field: {
      title: string;
      cardDescription: string;
      image: Image[];
      category: string;
      alt: string;
      rowId: string;
    };
  }

export const getThemes = async (): Promise<ApiResponse | null> => {

    try {
        const response = await api.get<ApiResponse>("/themes", {
            headers: {
                "uniqueparam": `nocache=${Date.now()}`
            }
        });
        
        const filteredData: DataItem[] = response.data.data.map((item: Item) => {
            
            const field: FilteredItem =  {
                title: item.field.title,
                cardDescription: item.field.cardDescription,
                image: item.field.image || null,
                category: item.field.category,
                alt: item.field.alt,
                rowId: item.field.rowId 
            }
            return { 
                id:item.field.rowId,
                field
            }
        });
        
        const data: ApiResponse = { data: filteredData };
    
        return data;
    } catch (error) {
        return null
    }
};