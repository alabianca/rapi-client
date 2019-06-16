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

  constructor() { }

  ngOnInit() {
    this.url = this.splitFromHost(this.record.url);
    this.createdAt = moment(this.record.createdAt).format("MM/DD/YY")
 
  }

  public go() {
    this.onAPISelection.emit(this.record);
  }

  private splitFromHost(url: string): string {
    return url.split('.')[0];
  }

}
