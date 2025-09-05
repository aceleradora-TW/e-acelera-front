export interface ApiTopic {
    status: StatusItem[] | []
}
export interface StatusItem {
    elementType: ElementType
    itemId: string
    itemStatus: string
}

export enum ElementType {
    Video = "Video",
    Exercise = "Exercise"
}

export type TopicProgress = {
    progress: number
}

export interface Theme {
  id: string;
  title: string;
  description: string;
}