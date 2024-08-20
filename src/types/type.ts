export interface ApiResponse {
    data: DataItem[];
}
export interface DataItem {
    id: string;
    field: CommonField | ThemeField | TopicField | VideoField | ExercisesField;
}
interface CommonField {
    rowId: string;
    sequence: number;
    isConfigure: number;
    favourite: number;
    totalItems: number | null;
    completedItems: number | null;
    dueDateTimestamp: number | null;
    checklistId: string | null;
    remainderId: string | null;
    updatedAt: string;
    createdAt: string;
    title: string;
    description: string;
    category?:string
}

export interface ThemeField extends CommonField {
    topicsInfo: string;
    cardDescription: string;
    image: Image[] | null;
    topics: string;
    category: string;
    topicDescription: string;
}

export interface TopicField extends CommonField {
    cardDescription: string;
    video: string;
    references: string | null;
    theme: string;
    exercises: string;
};

export interface VideoField extends CommonField {
    link: string;
    topics: string;
}

export interface ExercisesField extends CommonField {
    image: Image[] | null;
    topics: string;
}
export interface Image {
    filename: string;
    type: string;
    url: string;
}


