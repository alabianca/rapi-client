import { Component, OnInit, Input, ViewChild, ContentChild, AfterViewInit } from '@angular/core';
import { RapiSetupActionsDirective } from './setup-actions.directive';

@Component({
  selector: 'rp-setup-container',
  templateUrl: './setup-container.component.html',
  styleUrls: ['./setup-container.component.css']
})
export class SetupContainerComponent implements OnInit {

  @Input() minHeight: number;
  @ContentChild(RapiSetupActionsDirective) public actions: RapiSetupActionsDirective;
  constructor() { }

  ngOnInit() {
    if (!this.minHeight) {
      this.minHeight = 300
    }
  }

}
