import { OnInit, Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { UserService } from 'src/app/rapi.auth/services/user.service';
import { URLRecord } from 'src/app/rapi.common/models/urlRecord';
import { Subscription } from 'rxjs';
import { PopupService, PopupConfig, POPUP_DATA, PopupRef } from 'src/app/rapi.common/services/popup.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/rapi.common/models/user';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { CV } from 'src/app/rapi.common/models/cv';

@Component({
  selector: 'rp-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('profile') public profile: ElementRef;
  public selectedAPI: CV;
  public apiSubscription: Subscription;


  constructor(private userService: UserService, private popup: PopupService) { }

  ngOnInit() {
    this.apiSubscription = this.userService.$apiChanged.subscribe((api) => this.selectedAPI = api);
  }

  public openMenu() {
    const user: User = this.userService.getUser();
    const config: PopupConfig = {
      height: "100px",
      width: "200px",
      maxHeight: "100px",
      maxWidth: "100px",
      origin: this.profile,
      data: {
        user,
        api: this.selectedAPI,
      }
    }
    const ref = this.popup.open(NavMenuComponent, config)

  }

}

