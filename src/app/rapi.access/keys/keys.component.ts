import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { APIKey } from '../models/apiKey';
import { MatDialog } from '@angular/material/dialog';
import { RapiDialogService } from 'src/app/rapi.common/services/dialog.service';
import { CreateKeyComponent } from '../create-key/create-key.component';
import { ConfirmModalData } from 'src/app/rapi.common/confirm-dialog/confirm-dialog.component';
import { KeyService } from '../services/key.service';

@Component({
  selector: 'rapi-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {

  @Input() public keys: APIKey[]
  @Output() public deleted = new EventEmitter<APIKey>();

  public columns = ["Name", "Key", "Scope", "Created At", ""]

  constructor(private dialogs: MatDialog, private rapiDialogs: RapiDialogService, private keyService: KeyService) { }

  ngOnInit() {
  }

  public edit(key: APIKey) {
    const ref = this.dialogs.open(CreateKeyComponent, {
      minWidth: "800px",
      data: {
        mode: "update",
        key: key,
      }
    });

    ref.afterClosed().subscribe((res: APIKey) => {
      if (res) {
        key = res;
      }
    })
  }

  public delete(key: APIKey) {
    const data: ConfirmModalData = {
      title: "Delete Key",
      message: `Are you sure you want to delete the ${key.friendlyName} API Key? 
                Anyone using this key will not have access anymore`,
      yesMessage: "Delete",
      noMessage: "Cancel",
    }
    this.rapiDialogs.confirm(data)
      .subscribe(
        (yes) => this.deleteKey(key),
        (no) => {},
      )
  }

  private deleteKey(key: APIKey) {
    this.keyService.deleteKey(key).subscribe((res) => {
      console.log("deleted")
      this.deleted.emit(key);
    })
  }

}
