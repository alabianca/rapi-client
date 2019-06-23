import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { URLRecord } from 'src/app/rapi.common/models/urlRecord';
import { CV } from 'src/app/rapi.common/models/cv';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rapi-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  @Input() record: CV;
  @Output() onAPISelection = new EventEmitter()

  public url: string;
  public createdAt: string;
  public host = environment.baseUrl;

  constructor() { }

  ngOnInit() {
    this.url = `${this.host}/${this.record.id}`
    //this.createdAt = moment(this.record.createdAt).format("MM/DD/YY")
 
  }

  public go() {
    this.onAPISelection.emit(this.record);
  }


}
