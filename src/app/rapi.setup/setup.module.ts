
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal/personal.component';
import { RapiSetupRoutingModule } from './setup-routing.module';
import { SetupContainerComponent } from './setup-container/setup-container.component';
import { RapiSetupHeaderDirective } from './setup-container/setup-header.directive';
import { RapiSetupActionsDirective } from './setup-container/setup-actions.directive';
import { RapiCommonModule } from '../rapi.common/rapi.common.module';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceDialogComponent } from './experience-dialog/experience-dialog.component';



@NgModule({
  declarations: [
    PersonalComponent,
    SetupContainerComponent,
    SetupContainerComponent,
    RapiSetupHeaderDirective,
    RapiSetupActionsDirective,
    EducationComponent,
    ExperienceComponent,
    ExperienceDialogComponent,
],
  imports: [
    CommonModule,
    RapiCommonModule,
    RapiSetupRoutingModule,
  ],
  entryComponents: [
    ExperienceDialogComponent,
  ],
  providers: [],
})
export class RapiSetupModule { }