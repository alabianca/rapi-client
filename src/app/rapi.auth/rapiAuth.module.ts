import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RapiCommonModule} from '../rapi.common/rapi.common.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '@angular/common/http/src/interceptor';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthService } from './services/auth.service';

const routes: Route[] = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      }
    ]
  },
]

const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }
]

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    RapiCommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ...interceptors,
    AuthService,
  ]
})
export class RapiAuthModule { }
