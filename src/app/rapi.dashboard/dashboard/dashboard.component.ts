import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/rapi.auth/services/auth.service';
import { RecordService } from '../services/record.service';
import { URLRecord } from 'src/app/rapi.common/models/urlRecord';
import { Router } from '@angular/router';
import { UserService } from 'src/app/rapi.auth/services/user.service';
import { CVService } from 'src/app/rapi.common/services/cv.service';
import { CV } from 'src/app/rapi.common/models/cv';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public records: CV[]

  constructor(private router: Router, private userService: UserService, private cv: CVService) { }

  ngOnInit() {
    this.cv.getResumes().subscribe((res: CV[]) => {
      this.records = res;
    })

    this.userService.setSelectedAPI(null);
  }

  public add() {
    this.router.navigate(['/', 'home', 'setup'])
  }

  public onRecordSelection(cv: CV) {
    this.userService.setSelectedAPI(cv);
    this.router.navigate(['/', 'home', 'manage'])
  }
 
}
