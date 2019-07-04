import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RapiToggleSwitchComponent } from './rapi-toggle-switch/rapi-toggle-switch.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ChipComponent } from './chip/chip.component';
import { CVService } from './services/cv.service';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { PopupService } from './services/popup.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { WarnDialogComponent } from './warn-dialog/warn-dialog.component';
import { RapiDialogService } from './services/dialog.service';

@NgModule({
  declarations: [
    RapiToggleSwitchComponent,
    ChipComponent,
    WarnDialogComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    HttpClientModule,
    MatCheckboxModule
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
      ChipComponent,
      MatIconModule,
      MatStepperModule,
      MatCheckboxModule,

  ],
  entryComponents: [
    WarnDialogComponent,
  ],
  providers: [
    CVService,
    PopupService,
    RapiDialogService,
  ]
})
export class RapiCommonModule { }
