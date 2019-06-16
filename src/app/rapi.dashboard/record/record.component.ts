import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { URLRecord } from 'src/app/rapi.common/models/urlRecord';

@Component({
  selector: 'rapi-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  @Input() record: URLRecord;
  @Output() onAPISelection = new EventEmitter()

  public url: string;
  public createdAt: string;
  public host: string;

  constructor() { }

  ngOnInit() {
    const split = this.splitFromHost(this.record.url);
    this.url = split.url;
    this.host = split.host;
    this.createdAt = moment(this.record.createdAt).format("MM/DD/YY")
 
  }

  public go() {
    this.onAPISelection.emit(this.record);
  }

  private splitFromHost(url: string): {url: string, host: string} {
    const split = url.split('.');
    return {
      url: split[0],
      host: split[1],
    }
  }

}
