import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'rapi-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  @Input() createdAt: string
  @Input() url: string

  constructor() { }

  ngOnInit() {
    this.url = this.splitFromHost(this.url);
    this.createdAt = moment(this.createdAt).format("MM/DD/YY")
 
  }

  private splitFromHost(url: string): string {
    return url.split('.')[0];
  }

}
