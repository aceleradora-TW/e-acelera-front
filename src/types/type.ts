export interface ApiResponse {
    data: DataItem[];
}

export interface DataItem {
    id: string;
    field: ThemeField | TopicField | VideoField;
}

export interface ThemeField {
    rowId: string;
    sequence: number;
    isConfigure: number;
    favourite: number;
    totalItems: number | null;
    completedItems: number | null;
    dueDateTimestamp: string | null;
    checklistId: string | null;
    remainderId: string | null;
    updatedAt: string;
    createdAt: string;
    Title: string;
    CardDescription: string | null;
    Description: string | null;
    Image: Image[] | null;
    Topics: string;
    Sequence: string | null;
    Category: string;
    TopicDescription: string;
}

export interface TopicField {
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
    Title: string;
    CardDescription: string;
    Description: string;
    Video: string;
    References: string | null;
    Theme: { foreignRowDisplayName: string; foreignRowId: string }[];
    Exercises: string;
    Sequence: string;
  };

  export interface VideoField {
    rowId: string;
    sequence: number;
    isConfigure: number;
    favourite: number;
    totalItems: number | null;
    completedItems: number | null;
    dueDateTimestamp: string | null;
    checklistId: string | null;
    remainderId: string | null;
    updatedAt: string;
    createdAt: string;
    Title: string;
    Description: string | null;
    Link: string;
    Topics: string;
    Sequence: string | null;
}

export interface ExercisesField {
    rowId: string;
    sequence: number;
    isConfigure: number;
    favourite: number;
    totalItems: number | null;
    completedItems: number | null;
    dueDateTimestamp: string | null;
    checklistId: string | null;
    remainderId: string | null;
    updatedAt: string;
    createdAt: string;
    Title: string | null;
    Description: string | null;
    Image: Image[] | null;
    Topics: string;
}

export interface Image {
    filename: string;
    type: string;
    url: string;
}


