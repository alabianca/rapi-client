import { Injectable } from '@angular/core';
import { CV, DEFAULT_CV, Personal, Education } from '../models/cv';
import { Experience } from '../models/experience';
import { Project } from '../models/project';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'
import { APIResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class CVService {
  private cv: CV = DEFAULT_CV;
  private baseURL = environment.baseUrl;

  public $cv = new BehaviorSubject<CV>(this.cv);

  constructor(private http: HttpClient) {
    this.cv = this.loadFromLocalStroage()
  }

  public setPersonal(personal: Personal) {
    this.cv.personal = personal;
    this.persist(this.cv);
    this.publish()
  }

  public getPersonal(): Personal {
    return this.cv.personal;
  }

  public setEducation(education: Education) {
    this.cv.education = education;
    this.persist(this.cv);
    this.publish()
  }

  public addExperience(experience: Experience) {
    this.cv.experience.push(experience);
    this.persist(this.cv);
  }

  public getEducation(): Education {
    return this.cv.education;
  }

  public setExperiences(experiences: Experience[]) {
    this.cv.experience = experiences;
    this.persist(this.cv);
    this.publish()
  }

  public getExperience(): Experience[] {
    return this.cv.experience;
  }

  public addProject(project: Project) {
    this.cv.projects.push(project);
    this.persist(this.cv);
    this.publish()
  }

  public getProjects(): Project[] {
    return this.cv.projects;
  }

  public setProjects(projects: Project[]) {
    this.cv.projects = projects;
    this.persist(this.cv);
    this.publish()
  }

  public addSkill(skill: string) {
    this.cv.skills.push(skill);
    this.persist(this.cv);
    this.publish();
  }

  public setSkills(skills: string[]) {
    this.cv.skills = skills;
    this.persist(this.cv);
    this.publish();
  }

  public getSkills(): string[] {
    return this.cv.skills
  }

  public submit() {
    const url = `${this.baseURL}/v1/api/resume`
    return this.http.post(url, this.cv)
            .pipe(
              map((res: APIResponse) => res.data)
            )
  }

  private publish() {
    this.$cv.next(this.cv);
  }

  private loadFromLocalStroage(): CV {
    const cvstring = localStorage.getItem('cv');

    if (!cvstring) {

      this.persist(DEFAULT_CV)
      return DEFAULT_CV;
    }

    return JSON.parse(cvstring);
  }

  private persist(cv: CV) {
    localStorage.setItem("cv", JSON.stringify(cv));
  }
}
