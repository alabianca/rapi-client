import { Experience, DEFAULT_EXPERIENCE } from "./experience";
import { Project } from "./project";

export interface Personal {
    firstname: string,
    lastname: string,
    objective: string
}

export interface Education {
    school: string,
    fromDate: Date,
    toDate: Date,
    degree: string,
    gpa: number
}

export interface CV {
    personal: Personal,
    education: Education,
    experience: Experience[],
    projects: Project[],
    skills: string[]
}

export const DEFAULT_CV: CV = {
    personal: {
        firstname: '',
        lastname: '',
        objective: '',
    },
    education: {
        school: '',
        fromDate: new Date(),
        toDate: new Date(),
        degree: '',
        gpa: 0,
    },
    experience: [],
    projects: [],
    skills: [],

} 
