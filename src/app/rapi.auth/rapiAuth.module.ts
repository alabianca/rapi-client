import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RapiCommonModule} from '../rapi.common/rapi.common.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from '@angular/common/http/src/interceptor';
import { AuthInterceptor, JWTExpiredTokenInterceptor } from './services/auth.interceptor';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { ReauthComponent } from './reauth/reauth.component';

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
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JWTExpiredTokenInterceptor,
    multi: true,
  }
]

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ReauthComponent],
  imports: [
    CommonModule,
    RapiCommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ...interceptors,
    AuthService,
    UserService,
  ],
  entryComponents: [
    ReauthComponent,
  ]
})
export class RapiAuthModule { }
