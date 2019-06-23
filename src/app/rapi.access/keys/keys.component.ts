import { Component, OnInit, Input } from '@angular/core';
import { APIKey } from '../models/apiKey';

@Component({
  selector: 'rapi-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.css']
})
export class KeysComponent implements OnInit {

  @Input() public keys: APIKey[]

  public columns = ["Name", "Key", "Scope", "Created At"]

  constructor() { }

  ngOnInit() {
  }

}
