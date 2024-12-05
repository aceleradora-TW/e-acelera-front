import api from "@/lib/api";
import { ApiResponse, DataItem, FieldItem, FilteredDetailingTopicItem, FilteredItem } from "@/types/type";

function isFilteredDetailingTopicItem(field: FieldItem | FilteredItem): field is FilteredDetailingTopicItem {
    return (
        'videoLink' in field &&
        'video' in field &&
        'videoReference' in field &&
        'videoDescription' in field &&
        'exercises' in field &&
        'exercisesDescription' in field &&
        'exercisesInfo' in field &&
        'references' in field &&
        'rowId' in field
    );
}

export const getTopics = async (): Promise<ApiResponse | null> => {

    try {
        const response = await api.get<ApiResponse>("/topics", {
            headers: {
                "uniqueparam": `nocache=${Date.now()}`
            }
        }); 
        
        const filteredData: DataItem[] = response.data.data.map((item: DataItem) => {
            if (isFilteredDetailingTopicItem(item.field)) {
                const field: FilteredDetailingTopicItem = {
                    title: item.field.title,
                    description: item.field.description,
                    videoLink: item.field.videoLink,
                    video: item.field.video,
                    videoReference: item.field.videoReference,
                    videoDescription: item.field.videoDescription,                                  
                    exercises: item.field.exercises,
                    exercisesDescription: item.field.exercisesDescription,
                    exercisesInfo: item.field.exercisesInfo,
                    references: item.field.references,
                    rowId: item.field.rowId  
                };
                
                return { 
                    id: item.field.rowId,
                    field
                };
            }
            return null;
            
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
