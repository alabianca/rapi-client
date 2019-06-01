import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
    {
        path: 'setup',
        redirectTo: 'setup/personal'
    },
    {
        path: 'setup/personal',
        component: PersonalComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RapiSetupRoutingModule { }