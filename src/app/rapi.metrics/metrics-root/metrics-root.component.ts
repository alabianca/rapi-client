import { Component, OnInit } from '@angular/core';
import { KeyService } from 'src/app/rapi.access/services/key.service';
import { flatMap, tap } from 'rxjs/operators';
import { APIKey } from 'src/app/rapi.access/models/apiKey';
import { MetricsService } from '../services/metrics.service';
import { Observable } from 'rxjs';
import { Log } from '../models/log';

@Component({
  selector: 'app-metrics-root',
  templateUrl: './metrics-root.component.html',
  styleUrls: ['./metrics-root.component.css']
})
export class MetricsRootComponent implements OnInit {
  public apiKeys: APIKey[] = [];
  public logs: Log[] = [];
  constructor(private keyService: KeyService, private metricsService: MetricsService) { }

  ngOnInit() {
    this.getLogs()
      .subscribe((res) => {
        console.log(res);
        this.logs = res;
      })
  }

  private getLogs(): Observable<Log[]> {
    return this.keyService.getKeys()
      .pipe(
        flatMap((res: APIKey[]) => {
          this.apiKeys = res;
          const ids = res.map((key) => key.id);
          return this.metricsService.getLogEventsFor(ids);
        })
      )
  }

}
