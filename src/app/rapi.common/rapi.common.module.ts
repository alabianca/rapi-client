import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
  ],
  exports: [
      ReactiveFormsModule,
      FormsModule,
      MatNativeDateModule,
      MatDatepickerModule,
  ],
  providers: [],
})
export class RapiCommonModule { }
