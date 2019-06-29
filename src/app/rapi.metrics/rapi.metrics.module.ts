import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsRootComponent } from './metrics-root/metrics-root.component';
import { MetricsService } from './services/metrics.service';

@NgModule({
  declarations: [MetricsRootComponent],
  imports: [
    CommonModule
  ],
  providers: [
    MetricsService,
  ]
})
export class RapiMetricsModule { }
