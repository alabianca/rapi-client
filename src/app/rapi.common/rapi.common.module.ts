import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RapiToggleSwitchComponent } from './rapi-toggle-switch/rapi-toggle-switch.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


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
    MatDividerModule,
    MatListModule,
  ],
  exports: [
      ReactiveFormsModule,
      FormsModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatDialogModule,
      RapiToggleSwitchComponent,
      MatDividerModule,
      MatListModule,
  ],
  providers: [],
})
export class RapiCommonModule { }
