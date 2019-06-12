export interface Project {
    title: string
    detail: string,
    link?: string,
}

export const DEFAULT_PROJECT: Project = {
    title: "",
    detail: "",
    link: "",
}