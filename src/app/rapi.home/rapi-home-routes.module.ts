import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { RapiHomeComponent } from './rapi-home/rapi-home.component';
import { PersonalComponent } from '../rapi.setup/personal/personal.component';
import { EducationComponent } from '../rapi.setup/education/education.component';
import { ExperienceComponent } from '../rapi.setup/experience/experience.component';
import { ProjectsComponent } from '../rapi.setup/projects/projects.component';
import { SkillsComponent } from '../rapi.setup/skills/skills.component';
import { DashboardComponent } from '../rapi.dashboard/dashboard/dashboard.component';
import { ManageComponent } from '../rapi.manage/manage/manage.component';
import { AccessRootComponent } from '../rapi.access/access-root/access-root.component';

const routes: Route[] = [
  {
    path: 'home',
    component: RapiHomeComponent,
    children: [
      {
        path: 'setup',
        redirectTo: 'setup/personal'
    },
    {
        path: 'setup/personal',
        component: PersonalComponent,
    },
    {
        path: 'setup/education',
        component: EducationComponent,
    },
    {
        path: 'setup/experience',
        component: ExperienceComponent,
    },
    {
        path: 'setup/projects',
        component: ProjectsComponent,
    },
    {
        path: 'setup/skills',
        component: SkillsComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'manage',
        component: ManageComponent,
    },
    {
        path: 'access',
        component: AccessRootComponent,
    }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class RapiHomeRoutesModule { }
