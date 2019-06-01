import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
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
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RapiSetupRoutingModule { }