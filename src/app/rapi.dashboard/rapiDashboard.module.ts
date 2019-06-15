import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard/dashboard.component';
import { RapiAuthModule } from "../rapi.auth/rapiAuth.module";
import { RapiCommonModule } from "../rapi.common/rapi.common.module";
import { RecordService } from "./services/record.service";
import { RecordComponent } from './record/record.component';

@NgModule({
    imports: [
        CommonModule,
        RapiCommonModule,
        RapiAuthModule,
    ],
    providers: [
        RecordService,
    ],
    declarations: [DashboardComponent, RecordComponent],
})
export class RapiDashboardModule{}