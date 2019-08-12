import { Component, OnInit } from '@angular/core';
import { CVService } from 'src/app/rapi.common/services/cv.service';

@Component({
  selector: 'rp-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(
    private cv: CVService,
  ) { }

  ngOnInit() {
    console.log(this.cv);
  }

}
