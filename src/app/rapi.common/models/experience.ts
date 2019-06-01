export interface Experience {
    title: string,
    company: string,
    startDate: Date,
    endDate: Date,
    current: boolean,
    accomplishments: string[]
}

export const DEFAULT_EXPERIENCE: Experience = {
    title: '',
    company: '',
    startDate: new Date(),
    endDate: new Date(),
    current: false,
    accomplishments: [],
}
