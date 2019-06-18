import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { POPUP_DATA, PopupRef } from 'src/app/rapi.common/services/popup.service';
import { User } from 'src/app/rapi.common/models/user';
import { URLRecord } from 'src/app/rapi.common/models/urlRecord';
import { UserService } from 'src/app/rapi.auth/services/user.service';
import { Subscription } from 'rxjs';

interface NavMenuData {
  user: User,
  api: URLRecord,
}

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy {
  public email: string;
  public name: string;
  public selectedAPI: URLRecord;
  private selectedSubscription: Subscription;

  constructor(@Inject(POPUP_DATA) public data: NavMenuData, public popupRef: PopupRef, private userService: UserService) {
    this.email = data.user.email;
    this.name = this.getFullName(data.user.firstName, data.user.lastName)
  }

  public ngOnInit() {
    this.selectedSubscription = this.userService.$apiChanged.subscribe((api) => this.selectedAPI = api);
  }

  public ngOnDestroy() {
    this.selectedSubscription.unsubscribe();
  }

  public dismiss() {
    this.popupRef.close()
  }

  private getFullName(fname: string, lname: string): string {
    return fname + " " + lname;
  }

}
