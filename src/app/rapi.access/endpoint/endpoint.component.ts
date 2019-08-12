import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  public constructURL(): string {
    let url = `${this.baseURL}/${this.recordId}`;
    url += this.path ? `/${this.path}?key=${this.key}` : `?key=${this.key}`;
    return url;
  }

  public copy() {
    
  }

}
