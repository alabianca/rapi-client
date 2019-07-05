import { Component, OnInit } from '@angular/core';
import { KeyService } from '../services/key.service';
import { APIKey } from '../models/apiKey';
import { MatDialog } from '@angular/material/dialog';
import { CreateKeyComponent } from '../create-key/create-key.component';

@Component({
  selector: 'app-access-root',
  templateUrl: './access-root.component.html',
  styleUrls: ['./access-root.component.css']
})
export class AccessRootComponent implements OnInit {

  public keys: APIKey[] = []
  constructor(private keyService: KeyService, private dialogs: MatDialog) { }

  ngOnInit() {
    this.getKeys();
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
