import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/rapi.auth/services/auth.service';
import { RecordService } from '../services/record.service';
import { URLRecord } from 'src/app/rapi.common/models/urlRecord';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public records: URLRecord[]

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.recordService.getRecords().subscribe((res) => {
        this.records = res;
    })
  }

}