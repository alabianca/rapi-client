import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/rapi.auth/services/auth.service';
import { RecordService } from '../services/record.service';
import { URLRecord } from 'src/app/rapi.common/models/urlRecord';
import { Router } from '@angular/router';
import { UserService } from 'src/app/rapi.auth/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public records: URLRecord[]

  constructor(private recordService: RecordService, private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.recordService.getRecords().subscribe((res) => {
        this.records = res;
    })

    this.userService.setSelectedAPI(null);
  }

  public add() {
    this.router.navigate(['/', 'home', 'setup'])
  }

  public onRecordSelection(recordURL: URLRecord) {
    this.userService.setSelectedAPI(recordURL);
    this.router.navigate(['/', 'home', 'manage'])
  }
 
}
