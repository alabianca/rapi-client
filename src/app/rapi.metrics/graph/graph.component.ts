import { Component, OnInit, ViewChild, ElementRef, Input, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';
import { APIMetricChart, KeyData } from '../models/chart';
import { APIKey } from 'src/app/rapi.access/models/apiKey';
import { Log } from '../models/log';
import * as moment from 'moment';
import uniq from 'lodash/uniq';

@Component({
  selector: 'rapi-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() keys: APIKey[] = [];
  @Input() logs: Log[] = []
  @ViewChild('chart') public chart: ElementRef;
  private rapiChart: APIMetricChart;

  constructor() { }

  public ngOnInit() {
    this.renderGraph();
  }


  private renderGraph() {
    const dates = this.uniqueDates(this.logs.map((log) => log.date));
    const dataSets = this.dataSets(dates, this.keys, this.logs);

    this.rapiChart = new APIMetricChart(this.chart.nativeElement, {
      dates: dates,
      keys: dataSets,
    });
  }

  public uniqueDates(dates: string[]): string[] {
    let sortedDates = dates.sort((a, b) => {
      const momentA = moment(a);
      const momentB = moment(b);
      if (momentA.isBefore(momentB)) {
        return -1;
      }

      if (momentA.isAfter(momentB)) {
        return 1;
      }

      return 0;
    });

    sortedDates = sortedDates.map((date) => moment(date).format("YYYY-MM-DD"));

    return uniq(sortedDates);
  }

  public dataSets(dates: string[], apiKeys: APIKey[], logs: Log[]): KeyData[] {

    return apiKeys.map((key) => {
      const name = key.friendlyName;
      const logsForThisAPIKey = logs.filter((log) => log.apiId === key.id);
      const hits = dates.map((val) => {
        const filtered = logsForThisAPIKey.filter((log) => moment(log.date).format("YYYY-MM-DD") === val);
        if (filtered.length > 0) {
          return filtered.length;
        }

        return 0;
      });

      return {
        name: name,
        data: hits,
      }
    });
  }


}
