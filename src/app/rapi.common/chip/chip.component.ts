import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rapi-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {
  @Input() value: string;
  
  constructor() { }

  ngOnInit() {
  }

}
