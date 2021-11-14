export interface JSONMessage {
    author: string,
    message: JSONMessageEntry,
    vtuber: boolean
}

export interface JSONMessageEntry {
    EN: string,
    JA: string
}
