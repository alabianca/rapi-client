import { Component, OnInit, Inject } from '@angular/core';
import { POPUP_DATA, PopupRef } from 'src/app/rapi.common/services/popup.service';
import { User } from 'src/app/rapi.common/models/user';
import { URLRecord } from 'src/app/rapi.common/models/urlRecord';

interface NavMenuData {
  user: User,
  api: URLRecord,
}

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  public email: string;

  constructor(@Inject(POPUP_DATA) public data: NavMenuData, public popupRef: PopupRef) {
    this.email = data.user.email;
  }

  ngOnInit() {
  }

}
