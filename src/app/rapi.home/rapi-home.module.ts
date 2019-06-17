import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RapiHomeComponent } from './rapi-home/rapi-home.component';
import { RapiHomeRoutesModule } from './rapi-home-routes.module';
import { NavComponent } from './nav/nav.component';
import { RapiSetupModule } from '../rapi.setup/setup.module';
import { JsonViewComponent } from './json-view/json-view.component';
import { RapiCommonModule } from '../rapi.common/rapi.common.module';
import { RapiDashboardModule } from '../rapi.dashboard/rapiDashboard.module';
import { RapiManageModule } from '../rapi.manage/rapi.manage.module';
import { RapiAuthModule } from '../rapi.auth/rapiAuth.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    NavComponent,
    RapiHomeComponent,
    JsonViewComponent,
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    RapiSetupModule,
    RapiAuthModule,
    RapiManageModule,
    RapiCommonModule,
    RapiHomeRoutesModule,
    RapiDashboardModule,
  ],
  entryComponents: [
    NavMenuComponent,
  ]
})
export class RapiHomeModule { }
