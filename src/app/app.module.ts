import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RapiCommonModule } from './rapi.common/rapi.common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CVService } from './rapi.common/services/cv.service';
import { RapiHomeModule } from './rapi.home/rapi-home.module';
import { RapiAuthModule } from './rapi.auth/rapiAuth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RapiCommonModule,
    RapiHomeModule,
    RapiAuthModule,
    BrowserAnimationsModule,
  ],
  providers: [CVService],
  bootstrap: [AppComponent]
})
export class AppModule { }
