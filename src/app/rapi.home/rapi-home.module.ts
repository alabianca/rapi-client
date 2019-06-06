import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapiHomeComponent } from './rapi-home/rapi-home.component';
import { RapiHomeRoutesModule } from './rapi-home-routes.module';
import { NavComponent } from './nav/nav.component';
import { RapiSetupModule } from '../rapi.setup/setup.module';
import { JsonViewComponent } from './json-view/json-view.component';
import { RapiCommonModule } from '../rapi.common/rapi.common.module';

@NgModule({
  declarations: [
    NavComponent,
    RapiHomeComponent,
    JsonViewComponent,
  ],
  imports: [
    CommonModule,
    RapiSetupModule,
    RapiCommonModule,
    RapiHomeRoutesModule,
  ]
})
export class RapiHomeModule { }
