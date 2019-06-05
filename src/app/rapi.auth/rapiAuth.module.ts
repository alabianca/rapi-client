import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'auth',
    component: AuthComponent,
  }
]

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RapiAuthModule { }