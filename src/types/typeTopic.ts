export interface ApiTopic {
    status: StatusItem[] | []
}
export interface StatusItem {
    elementType: string
    itemId: string
    itemStatus: string
}