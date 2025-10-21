export interface ApiResponse {
    data: DataItem[];
}
export interface DataItem {
    id: string;
    field: CommonField | ThemeField | TopicField | VideoField | ExercisesField;
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
    videoReference: string;
    videoInfo: string
    completion?: number;
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

//  Geovana

export interface Theme {
  id: number;
  title: string;
  card_description?: string;
  description?: string;
  topics?: string;
  image?: string;
  topics_info?: string;
  category?: string;
  sequence: number;
  topics_description?: string;
  id_themes?: number;
  alt?: string;
}

export interface PostgresApiResponse {
  data: Theme[];
} //Geovana


export enum IdType {
  TOPIC_ID = "topicId",
  THEME_ID = "themeId",
};

