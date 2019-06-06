import { Component, OnInit, OnDestroy } from '@angular/core';
import { CVService } from 'src/app/rapi.common/services/cv.service';
import { CV } from 'src/app/rapi.common/models/cv';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rapi-json-view',
  templateUrl: './json-view.component.html',
  styleUrls: ['./json-view.component.css']
})
export class JsonViewComponent implements OnInit, OnDestroy{

  public cv:CV;
  private cvSubscription: Subscription;
  constructor(private cvService: CVService) { }

  public ngOnInit() {
    this.cvSubscription = this.cvService.$cv.subscribe((cv:CV) => this.cv = cv);
  }

  public ngOnDestroy() {
    this.cvSubscription.unsubscribe()
  }

}
