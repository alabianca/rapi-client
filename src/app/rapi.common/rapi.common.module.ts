import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RapiToggleSwitchComponent } from './rapi-toggle-switch/rapi-toggle-switch.component';


@NgModule({
  declarations: [
    RapiToggleSwitchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
  exports: [
      ReactiveFormsModule,
      FormsModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatDialogModule,
      RapiToggleSwitchComponent,
  ],
  providers: [],
})
export class RapiCommonModule { }
