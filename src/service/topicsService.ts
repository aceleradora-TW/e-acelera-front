import api from "@/lib/api";
import { ApiResponse, DataItem, FilteredTopicItem } from "@/types/type";



export const getTopics = async (): Promise<ApiResponse> => {

    const response = await api.get<ApiResponse>("/topics"); 
    
 
    const filteredData: DataItem[] = response.data.data.map((item: any) => {
        
        const field: FilteredTopicItem = {
            textDescription: item.field.description,
            textVideo: item.field.videoDescription,
            title: item.field.video,
            videoLink: item.field.videoLink,
            references: item.field.videoReference,
            exercises: item.field.exercises,
            exercisesDescription: item.field.exercisesDescription,
            exercisesInfo: item.field.exercisesInfo,
            referenceText: item.field.references,
            rowId: item.field.rowId  
        };
        




        return { 
            id:item.field.rowId,
            field
        }
    });
    
    
    const data: ApiResponse = { data: filteredData };
    console.log(data)
    return data;
};
  
//untitle 