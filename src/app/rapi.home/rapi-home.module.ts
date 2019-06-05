import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapiHomeComponent } from './rapi-home/rapi-home.component';
import { RapiHomeRoutesModule } from './rapi-home-routes.module';
import { NavComponent } from './nav/nav.component';
import { RapiSetupModule } from '../rapi.setup/setup.module';

@NgModule({
  declarations: [
    NavComponent,
    RapiHomeComponent,
  ],
  imports: [
    CommonModule,
    RapiSetupModule,
    RapiHomeRoutesModule,
  ]
})
export class RapiHomeModule { }
