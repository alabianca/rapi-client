import { Component, OnInit, ViewChild } from '@angular/core';
import { KeyService } from 'src/app/rapi.access/services/key.service';
import { flatMap, tap } from 'rxjs/operators';
import { APIKey } from 'src/app/rapi.access/models/apiKey';
import { MetricsService } from '../services/metrics.service';
import { Observable } from 'rxjs';
import { Log } from '../models/log';
import { GraphComponent } from '../graph/graph.component';

@Component({
  selector: 'app-metrics-root',
  templateUrl: './metrics-root.component.html',
  styleUrls: ['./metrics-root.component.css']
})
export class MetricsRootComponent implements OnInit {
  public apiKeys: APIKey[] = [];
  public logs: Log[] = [];
  public allKeys: APIKey[] = [];
  @ViewChild('graph') public graph: GraphComponent;
  constructor(private keyService: KeyService, private metricsService: MetricsService) { }

  public ngOnInit() {
    this.getLogs()
      .subscribe((res) => {
        this.logs = res;
      })
  }

  public change($event, key: APIKey) {
    const checked = $event.checked;
    if (checked) {
      this.apiKeys = [...this.apiKeys, key];
    } else {
      this.apiKeys = this.apiKeys.filter((apiKey) => apiKey.id != key.id);
    }
  }

  private getLogs(): Observable<Log[]> {
    return this.keyService.getKeys()
      .pipe(
        flatMap((res: APIKey[]) => {
          this.allKeys = res;
          this.apiKeys = res;
          const ids = res.map((key) => key.id);
          return this.metricsService.getLogEventsFor(ids);
        })
      )
  }

}
