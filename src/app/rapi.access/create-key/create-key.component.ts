import { Component, OnInit, Inject } from '@angular/core';
import { DEFAULT_KEY, APIKey } from '../models/apiKey';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { KeyService } from '../services/key.service';
import cloneDeep from 'lodash/cloneDeep'
import { Observable } from 'rxjs';

const SCOPE_READ = "read";
const SCOPE_CREATE = "create";
const ALL_ACCESS = "This API key can read and create resources";
const READ_ACCESS = "This API key can read resources only";
const WRITE_ACCESS = "This API key can create resources only";
const NO_ACCESS = "This API key can not read or write resources";

export interface KeyModalData {
  mode: "create" | "edit",
  key: APIKey,
}

@Component({
  selector: 'rapi-create-key',
  templateUrl: './create-key.component.html',
  styleUrls: ['./create-key.component.css'],
  preserveWhitespaces: true,
})
export class CreateKeyComponent implements OnInit {
  public key: APIKey = cloneDeep(DEFAULT_KEY)
  public color: ThemePalette = "primary";
  public scopes = [
    {
      label: "Read",
      scopeKey: "read",
      description: "This scope allows to read resources",
      checked: false,
    },
    {
      label: "Create",
      scopeKey: "create",
      description: "This scope allow to create resources",
      checked: false,
    }
  ]

  public message = NO_ACCESS;
  public loading = false;
  public mode: "create" | "edit";

  constructor(@Inject(MAT_DIALOG_DATA) public data: KeyModalData, public dialogRef: MatDialogRef<CreateKeyComponent>, private keyService: KeyService) { }

  ngOnInit() {
    this.key = {...this.key, ...this.data.key};
    this.mode = this.data.mode || "create"; // default to create mode;
    this.scopes = this.scopes.map((scope) => {
      return {
        ...scope,
        checked: this.key.scope.includes(scope.scopeKey),
      }
    })
  }

  public change(changeEvent: MatCheckboxChange, scope) {
    scope.checked = changeEvent.checked;
    if (changeEvent.checked) {
      this.key.scope.push(scope.scopeKey);
    } else {
      const index = this.key.scope.indexOf(scope.scopeKey);
      this.key.scope.splice(index, 1);
    }

    this.message = this.updateKeyMessage(this.key.scope);
  }

  public updateKeyMessage(scopes: string[]): string {
    const hasWrite = scopes.includes(SCOPE_CREATE);
    const hasRead = scopes.includes(SCOPE_READ);

    if (hasWrite && hasRead) {
      return ALL_ACCESS;
    }

    if (hasWrite) {
      return WRITE_ACCESS;
    }

    if (hasRead) {
      return READ_ACCESS;
    }

    return NO_ACCESS;

  }

  public save() {
    this.loading = true;

    const observable = this.mode === "create" ? this.create.bind(this) : this.update.bind(this);

    observable(this.key)
      .subscribe(
        (res: APIKey) => {
          this.loading = false;
          this.dialogRef.close(res);
        },
        (err: any) => {
          this.loading = false,
          this.message = "Error occured saving this api key";
          console.log(err);
        }
        )
  }

  private create(key: APIKey): Observable<APIKey> {
    return this.keyService.createKey(key)
  }

  private update(key: APIKey): Observable<APIKey> {
    return this.keyService.updateKey(key);
  }

}
