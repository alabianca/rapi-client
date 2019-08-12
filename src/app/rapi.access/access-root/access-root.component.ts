import { Component, OnInit } from '@angular/core';
import { KeyService } from '../services/key.service';
import { APIKey } from '../models/apiKey';
import { MatDialog } from '@angular/material/dialog';
import { CreateKeyComponent } from '../create-key/create-key.component';
import { ENDPOINTS } from '../models/endpoints';
import { UserService } from 'src/app/rapi.auth/services/user.service';


@Component({
  selector: 'app-access-root',
  templateUrl: './access-root.component.html',
  styleUrls: ['./access-root.component.css']
})
export class AccessRootComponent implements OnInit {

  public keys: APIKey[] = []
  public endpoints = [...ENDPOINTS];
  constructor(private keyService: KeyService, private dialogs: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.getKeys();
    this.endpoints = this.endpoints.map((ep) => {
      return {
        ...ep,
        recordId: this.userService.getSelectedAPI().id ? this.userService.getSelectedAPI().id : '{recordId}',
      }
    })
  }

  public reload() {
    this.getKeys();
  }

  public create() {
    const ref = this.dialogs.open(CreateKeyComponent, {
      minWidth: "800px",
      data: {
        mode: "create",
      }
    });

    ref.afterClosed().subscribe((res: APIKey) => {
      if (res) {
        this.getKeys()
      }
    })
  }

  private getKeys() {
    this.keyService.getKeys().subscribe((keys) => this.keys = keys)
  }

}
