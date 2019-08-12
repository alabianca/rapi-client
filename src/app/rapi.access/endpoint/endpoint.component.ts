import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'rp-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.css']
})
export class EndpointComponent implements OnInit {

  @Input() public method: "POST" | "GET" | "UPDATE" | "DELETE" | "PATCH";
  @Input() public baseURL: string = "";
  @Input() public key: string = "";
  @Input() public recordId: string = "";
  @Input() public path: string = "";

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public constructURL(): string {
    let url = `${this.baseURL}/${this.recordId}`;
    url += this.path ? `/${this.path}?key=${this.key}` : `?key=${this.key}`;
    return url;
  }

  public copied(val: string) {
    console.log('copied', val);
    this.snackBar.open("Copied to clipboard!", '', {
      duration: 1000,
    })
  }

}
