export interface APIKey {
    id?: string,
    userId?: string,
    resume?: string,
    createdAt: Date,
    key: string,
    scope: string[],
    friendlyName: string,
}

export const DEFAULT_KEY: APIKey  = {
    createdAt: new Date(),
    key: "",
    scope: [],
    friendlyName: "",
}
