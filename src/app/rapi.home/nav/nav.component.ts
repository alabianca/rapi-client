import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/rapi.auth/services/user.service';
import { URLRecord } from 'src/app/rapi.common/models/urlRecord';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public selectedAPI: URLRecord;
  public apiSubscription: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.apiSubscription = this.userService.$apiChanged.subscribe((api) => this.selectedAPI = api);
  }

}
