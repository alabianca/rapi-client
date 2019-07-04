import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsRootComponent } from './metrics-root/metrics-root.component';
import { MetricsService } from './services/metrics.service';
import { GraphComponent } from './graph/graph.component';
import { RapiCommonModule } from "../rapi.common/rapi.common.module";

@NgModule({
  declarations: [MetricsRootComponent, GraphComponent],
  imports: [
    CommonModule,
    RapiCommonModule,
  ],
  providers: [
    MetricsService,
  ]
})
export class RapiMetricsModule { }
