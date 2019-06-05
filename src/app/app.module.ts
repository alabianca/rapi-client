import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RapiSetupModule } from './rapi.setup/setup.module';
import { RapiCommonModule } from './rapi.common/rapi.common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CVService } from './rapi.common/services/cv.service';

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
    BrowserAnimationsModule,
  ],
  providers: [CVService],
  bootstrap: [AppComponent]
})
export class AppModule { }
