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
export interface TopicProgress {
    progress: number
}
