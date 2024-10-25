export interface ApiResponse {
    data: DataItem[];
}
export interface DataItem {
    id: string;
    field: CommonField | FilteredThemeItem | FilteredTopicItem|  ThemeField | TopicField | VideoField | ExercisesField;
}
export interface CommonField {
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
export interface FilteredThemeItem {
        title: string;
        cardDescription: string;
        image: string | null;
        category: string;
        rowId: string;
   
}
export interface FilteredTopicItem {
        textDescription:string;
        textVideo: string;
        title: string;
        videoLink: string;
        references: string;
        exercises: string;
        exercisesDescription: string;
        exercisesInfo: string;
        referenceText: string;
        rowId: string; 

}
export interface ThemeField extends CommonField {
    topicsInfo: string;
    cardDescription: string;
    image: Image[] | null;
    topics: string;
    category: string;
    topicsDescription: string;
    alt: string;
}

export interface TopicField extends CommonField {
    cardDescription: string;
    video: string;
    references: string;
    theme: string;
    exercises: string;
    exercisesDescription: string;
    exercisesInfo: string;
    videoDescription: string;
    videoLink: string;
    videoReference: string
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


