import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RapiSetupModule } from './rapi.setup/setup.module';
import { RapiCommonModule } from './rapi.common/rapi.common.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RapiCommonModule,
    RapiSetupModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
