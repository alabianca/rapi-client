import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rapi-toggle',
  templateUrl: './rapi-toggle-switch.component.html',
  styleUrls: ['./rapi-toggle-switch.component.css']
})
export class RapiToggleSwitchComponent implements OnInit {
  @Input() public checked: boolean;
  @Output() public change = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public onChange() {
    this.change.emit(this.checked)
  }

}
